Initialize();

function Initialize()
{
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create analyser nodes for each channel
    const analyserLeft = audioContext.createAnalyser();
    const analyserRight = audioContext.createAnalyser();
    analyserLeft.fftSize = 32; // Reduced for less detail on the x-axis
    analyserRight.fftSize = 32;

    // Create data arrays for each channel
    let dataArrayLeft = new Uint8Array(analyserLeft.frequencyBinCount);
    let dataArrayRight = new Uint8Array(analyserRight.frequencyBinCount);

    // Create charts for each channel
    const ctxLeft = document.getElementById('ChartCanvas4Left').getContext('2d');
    const ctxRight = document.getElementById('ChartCanvas4Right').getContext('2d');
    const chartLeft = CreateChart(ctxLeft, dataArrayLeft);
    const chartRight = CreateChart(ctxRight, dataArrayRight);

    chartLeft.data.datasets[0].label  = "Audio Volume Left";
    chartRight.data.datasets[0].label = "Audio Volume Right";

    // Create audio element
    const audio = new Audio('./Music/BorisBrejcha-EXIT.mp3');
    // const audio = new Audio('./Music/stereo-test.mp3');
    const source = audioContext.createMediaElementSource(audio);

    // Split the audio into separate channels
    const splitter = audioContext.createChannelSplitter(2);
    source.connect(splitter);
    splitter.connect(analyserLeft, 0);
    splitter.connect(analyserRight, 1);

    // Store a reference to the Play button
    const buttonPlay = document.getElementById('ButtonPlay2');

    // Subscribe the OnButtonPlay function to the button's click event
    buttonPlay.addEventListener('click', OnButtonPlay);

    function OnButtonPlay()
    {
        if (audio.paused) 
        {
            console.log('Play');

            // Change the button icon to a Stop emoji
            buttonPlay.innerText = "⏹️";
            
            // Start updating charts when audio plays
            // source.connect(analyser);
            source.connect(splitter);
            splitter.connect(analyserLeft, 0);
            splitter.connect(analyserRight, 1);
            analyserLeft.connect(audioContext.destination);
            analyserRight.connect(audioContext.destination);
            // source.connect(audioContext.destination); 

            // Update charts with audio data
            function updateChart() {
                requestAnimationFrame(updateChart);

                // Get audio data
                analyserLeft.getByteFrequencyData(dataArrayLeft);
                analyserRight.getByteFrequencyData(dataArrayRight);

                // Update chart data
                updateChartData(chartLeft, dataArrayLeft);
                updateChartData(chartRight, dataArrayRight);
            }

            audio.play();
            updateChart();
        } 
        else 
        {
            console.log('Stop');
            // Change the button icon to a Stop emoji
            buttonPlay.innerText = "▶️";

            audio.pause();
            audio.currentTime = 0;
        }
    }
}

function CreateChart(ctx, dataArray) 
{
    return new Chart(ctx, 
    {
        type: 'radar',
        data: 
        {
            labels: Array.from({length: dataArray.length}, (_, i) => i),
            datasets: 
            [
                {
                    label: 'Audio Volume',
                    data: dataArray,
                    backgroundColor: 'rgba(0, 255, 255, 0.2)',
                    borderColor: 'rgba(0, 255, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: 
        {
            animation: 
            {
                colors: false
            },
            scales: 
            {
                r: 
                {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateChartData(chart, dataArray) {
    chart.data.datasets[0].data = dataArray;
    chart.update();
}
