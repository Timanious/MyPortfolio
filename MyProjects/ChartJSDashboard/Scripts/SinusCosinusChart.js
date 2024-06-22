Initialize();

function Initialize()
{
    // Assuming the HTML element id is 'ChartCanvas1'
    const ctx = document.getElementById('ChartCanvas6').getContext('2d');
    
    const chart = new Chart(ctx, 
    {
        type: 'line',
        data: 
        {
            labels: Array.from({length: 20}, (_, i) => i),
            datasets: 
            [
                {
                    label: 'Sinus',
                    data: Array.from({length: 20}, (_, i) => Math.sin(i)),
                    // backgroundColor: 'rgba(0, 255, 255, 0.2)',
                    // borderColor: 'rgba(0, 255, 255, 1)',
                    borderWidth: 1
                },
                {
                    label: 'Cosinus',
                    data: Array.from({length: 20}, (_, i) => Math.cos(i)),
                    // backgroundColor: 'rgba(255, 0, 255, 0.2)',
                    // borderColor: 'rgba(255, 0, 255, 1)',
                    borderWidth: 1
                }
            ]
        },
        options: 
        {
            // aspectRatio:1,
            animations: false, // Disable animations because we're doing our own.
            scales: 
            {
                y:
                {
                    beginAtZero: true
                }
            }
        }
    });
    
    // Update chart every 200 milliseconds
    setInterval(Update, 200);
    
    function Update()
    {
        const time      = new Date().getTime() / 1000;  // Get current time in milliseconds and divide it by 1000 to convert it to seconds.
        const sinValue  = Math.sin(time);               // The sine of the time returns a value pingponging from -1 to 1
        const cosValue  = Math.cos(time);               // The cosine of the time also returns a value pingponging from -1 to 1, but it's offset by 90 degrees from the sine

        chart.data.datasets[0].data.shift();
        chart.data.datasets[0].data.push(sinValue);
        // chart.data.datasets[0].borderColor      = `rgba(${sinValue * 255}, 0, 0, 1.0)`;
        // chart.data.datasets[0].backgroundColor  = `rgba(${sinValue * 255}, 0, 0, 1.0)`;

        chart.data.datasets[0].borderColor      = chart.data.datasets[0].data.map(value => value > 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)');
        chart.data.datasets[0].backgroundColor  = chart.data.datasets[0].data.map(value => value > 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)');

        chart.data.datasets[0].segment = 
        {
            borderColor: ctx => ctx.p0.parsed.y > ctx.p1.parsed.y ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)'
        };
    

        chart.data.datasets[1].data.shift();
        chart.data.datasets[1].data.push(cosValue);
        // chart.data.datasets[1].borderColor      = `rgba(${cosValue * 255}, 0, 0, 1.0)`;
        // chart.data.datasets[0].backgroundColor  = `rgba(${cosValue * 255}, 0, 0, 1.0)`;

        chart.data.datasets[1].borderColor      = chart.data.datasets[1].data.map(value => value > 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)');
        chart.data.datasets[1].backgroundColor  = chart.data.datasets[1].data.map(value => value > 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)');

        chart.data.datasets[1].segment = 
        {
            borderColor: ctx => ctx.p0.parsed.y > ctx.p1.parsed.y ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)'
            // borderColor: ctx => chart.data.datasets[1].data[ctx.p0.dataIndex] > 0 ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, 1)';
        };
    
        
        chart.update();
    }
}
