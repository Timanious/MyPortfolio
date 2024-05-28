Initialize();

function Initialize()
{
    // Assuming the HTML element id is 'ChartCanvas1'
    const ctx = document.getElementById('ChartCanvas1').getContext('2d');
    
    const chart = new Chart(ctx, 
    {
        type: 'line',
        data: {
            labels: Array.from({length: 10}, (_, i) => i),
            datasets: [{
                label: 'Dynamic Data',
                data: Array.from({length: 10}, () => Math.floor(Math.random() * 100)),
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                borderColor: 'rgba(0, 255, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            aspectRatio:1,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Update chart every second
    setInterval(Update, 1000);
    
    function Update()
    {
        chart.data.datasets[0].data.shift();
        chart.data.datasets[0].data.push(Math.floor(Math.random() * 100));
        chart.update();
    }
}

