Initialize();

function Initialize()
{
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    // Create analyser node
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 32; // Reduced for less detail on the x-axis

    // Create data array
    let dataArray = new Uint8Array(analyser.frequencyBinCount);

    // Create chart
    const canvas = document.getElementById('ChartCanvas3');
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Array.from({length: dataArray.length}, (_, i) => i),
            datasets: [{
                label: 'Audio Volume',
                data: dataArray,
                // backgroundColor: dataArray.map(value => `rgba(${value}, ${255 - value}, ${255 - value}, 1)`),
                // borderColor: dataArray.map(value => `rgba(${value}, ${255 - value}, ${255 - value}, 1)`),
                // borderWidth: 1

                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            // Set the aspect ratio (the width versus height relation) to 1, making it a square chart.
            animation: {
                colors: false
            },
            update: false,
            aspectRatio: 1,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Create audio element
    const audio = new Audio('./Music/BorisBrejcha-EXIT.mp3');
    const source = audioContext.createMediaElementSource(audio);

    // Store a reference to the Play button
    const buttonPlay = document.getElementById('ButtonPlay');

    // Subscribe the OnButtonPlay function to the button's click event
    buttonPlay.addEventListener('click', OnButtonPlay);

    function OnButtonPlay()
    {
        if (audio.paused) 
        {
            console.log('Play');

            // Change the button icon to a Stop emoji
            buttonPlay.innerText = "⏹️";

            // Start updating chart when audio plays
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            
            // Update chart with audio data
            function updateChart() {
                requestAnimationFrame(updateChart);

                // Get audio data
                analyser.getByteFrequencyData(dataArray);

                // Update chart data and colors
                chart.data.datasets[0].data = dataArray;
                // chart.data.datasets[0].backgroundColor = dataArray.map(value => `rgba(${value}, ${255 - value}, ${255 - value}, 1)`);
                // chart.data.datasets[0].borderColor = dataArray.map(value => `rgba(${value}, ${255 - value}, ${255 - value}, 1)`);
                // chart.data.datasets[0].backgroundColor = `rgba(0, 0, 255 + ${value}, 1.0)`; 
                // chart.data.datasets[0].borderColor = 'rgba(255, 99, 132, 1.0)';
                chart.update();
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

            // Disconnect nodes
            source.disconnect(analyser);
            analyser.disconnect(audioContext.destination);
        }
    }
}

