Initialize();

function Initialize()
{
    // Create audio context
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    
    // Create analyser node
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 32;
    
    // Create microphone input
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(stream) {
            var source = audioContext.createMediaStreamSource(stream);
            source.connect(analyser);
        });
    
    // Create data array
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    
    // Create chart
    const ctx2 = document.getElementById('ChartCanvas2').getContext('2d');
    const chart2 = new Chart(ctx2, 
        {
        type: 'line',
        data: {
            labels: Array.from({length: dataArray.length}, (_, i) => i),
            datasets: [{
                label: 'Microphone Volume',
                data: dataArray,
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            aspectRatio: 1,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Update chart with microphone data
    function updateChart() {
        requestAnimationFrame(updateChart);
    
        // Get microphone data
        analyser.getByteFrequencyData(dataArray);
    
        // Update chart data
        chart2.data.datasets[0].data = dataArray;
        chart2.update();
    }
    
    // Start updating chart
    updateChart();
}
