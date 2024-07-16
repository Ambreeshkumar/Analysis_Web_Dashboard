// static/js/charts.js

document.addEventListener('DOMContentLoaded', function () {
    // Sector Chart
    var sectorCtx = document.getElementById('sectorChart').getContext('2d');
    var sectorChart = new Chart(sectorCtx, {
        type: 'bar',
        data: {
            labels: JSON.parse(document.getElementById('sectorLabels').textContent),
            datasets: [{
                label: 'Top 5 Sectors',
                data: JSON.parse(document.getElementById('sectorData').textContent),
                backgroundColor: ['#FF0000', '#FF8C00', '#20B2AA', '#FFC0CB'],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 20 // Set the font size for the legend
                        },
                        color: 'rgba(75, 192, 192, 1)' // Set the color for the legend text
                    }
                },
                tooltip: {
                    titleFont: {
                        size: 14 // Set the font size for the tooltip title
                    },
                    bodyFont: {
                        size: 12 // Set the font size for the tooltip body
                    }
                }
            }
        }
    });

    // Region Chart
    var regionCtx = document.getElementById('regionChart').getContext('2d');
    var regionChart = new Chart(regionCtx, {
        type: 'pie',
        data: {
            labels: JSON.parse(document.getElementById('regionLabels').textContent),
            datasets: [{
                label: 'highest likelihood',
                data: JSON.parse(document.getElementById('regionData').textContent),
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 12 // Set the font size for the legend
                        },
                        color: 'rgba(75, 192, 192, 1)' // Set the color for the legend text
                    }
                },
                tooltip: {
                    titleFont: {
                        size: 20 // Set the font size for the tooltip title
                    },
                    bodyFont: {
                        size: 12// Set the font size for the tooltip body
                    }
                }
            }
        }
    });
});


