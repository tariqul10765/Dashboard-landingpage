Chart.defaults.elements.line.borderWidth = 4;
        // setup
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
        const data = {
        labels: labels,
        datasets: [{
            // label: 'My First',
            backgroundColor: 'rgb(0, 169, 255)',
            borderColor: 'rgb(0, 169, 255)',
            // data: [10000, 15000, 20000, 25000, 30000, 35000, 40000],
            data: [100, 4700, 1000, 200, 2500, 3000, 4500],
        }]
        };
        // config
        const config = {
            type: 'line',
            data,
            options: {
                animation: {
                    // onProgress: function(animation) {
                    //     progress.value = animation.currentStep / animation.numSteps;
                    // },
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                        labels: {
                            color: 'rgb(255, 99, 132)'
                        }
                    }
                }
            }
        }


        var myChart = new Chart(
            document.getElementById('myChart'),
            config
        );