const ctxDaily = document.getElementById('dailyTransactionsChart').getContext('2d');
const dailyTransactionsChart = new Chart(ctxDaily, {
    type: 'bar',
    data: {
        labels: ['Entrada 1', 'Entrada 2'],
        datasets: [{
            label: 'Transações do dia',
            data: [214, 189],
            backgroundColor: [
                'rgba(138, 158, 142, 0.6)',
                'rgba(138, 158, 142, 0.6)'
            ],
            borderColor: [
                'rgba(138, 158, 142, 1)',
                'rgba(138, 158, 142, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const ctxYearly = document.getElementById('yearlyTransactionsChart').getContext('2d');
const yearlyTransactionsChart = new Chart(ctxYearly, {
    type: 'line',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [{
            label: 'Transações do ano',
            data: [300, 500, 400, 600, 700, 800, 900, 750, 650, 600, 550, 700],
            backgroundColor: 'rgba(138, 158, 142, 0.2)',
            borderColor: 'rgba(138, 158, 142, 1)',
            borderWidth: 1,
            fill: true
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
