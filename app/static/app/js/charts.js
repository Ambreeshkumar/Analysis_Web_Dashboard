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



document.addEventListener('DOMContentLoaded', function () {
    // Line Chart for Intensity Over Years
    var intensityCtx = document.getElementById('intensityChart').getContext('2d');
    var intensityChart = new Chart(intensityCtx, {    
        type: 'line',
        data: {
            labels: JSON.parse(document.getElementById('intensityLabels').textContent),
            datasets: [{
                label: 'Intensity of Events Over Years',
                data: JSON.parse(document.getElementById('intensityData').textContent),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
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
});




document.addEventListener('DOMContentLoaded', function () {
    // Line Chart for Relevance Over Time
    var relevanceCtx = document.getElementById('relevanceChart').getContext('2d');
    var relevanceChart = new Chart(relevanceCtx, {    
        type: 'line',
        data: {
            labels: JSON.parse(document.getElementById('relevanceLabels').textContent),
            datasets: [{
                label: 'Relevance of Events Over Time',
                data: JSON.parse(document.getElementById('relevanceData').textContent),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
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
});




document.addEventListener('DOMContentLoaded', function () {
    // Line Chart for Intensity by Region
    var intensityCtx = document.getElementById('intensityRegionChart').getContext('2d');
    var intensityChart = new Chart(intensityCtx, {    
        type: 'line',
        data: {
            labels: JSON.parse(document.getElementById('intensityRegionLabels').textContent),
            datasets: [{
                label: 'Event Intensity by Region',
                data: JSON.parse(document.getElementById('intensityRegionData').textContent),
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true, // Ensures the chart resizes with the container
            maintainAspectRatio: false, // Allows the chart to not maintain aspect ratio
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
});




document.addEventListener('DOMContentLoaded', function () {
    var donutCtx = document.getElementById('regionalImpactsChart').getContext('2d');
    var donutChart = new Chart(donutCtx, {
        type: 'doughnut',
        data: {
            labels: JSON.parse(document.getElementById('regionalImpactsLabels').textContent),
            datasets: [{
                label: 'Regional Breakdown of Event Impacts',
                data: JSON.parse(document.getElementById('regionalImpactsData').textContent),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(153, 102, 255)',
                    'rgb(255, 159, 64)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true, // Ensures the chart resizes with the container
            maintainAspectRatio: false, // Allows the chart to not maintain aspect ratio
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 14
                        },
                        color: 'rgba(75, 192, 192, 1)'
                    }
                },
                tooltip: {
                    titleFont: {
                        size: 14
                    },
                    bodyFont: {
                        size: 10
                    }
                }
            }
        }
    });
});


// CRM

// static/app/js/chart.js
document.addEventListener('DOMContentLoaded', function() {
    // Get the data from the context
    var topicLabels = JSON.parse(document.getElementById('topicData').textContent);
    var topicData = JSON.parse(document.getElementById('topicCountData').textContent);

    var ctx = document.getElementById('crmChart').getContext('2d');
    var crmChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: topicLabels,
            datasets: [{
                label: 'Most frequently discussed in the dataset',
                data: topicData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    title: {
                        display: true,
                        text: 'Topics'
                    }
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
});



document.addEventListener('DOMContentLoaded', function() {
    // Get the data from the context
    var regionCtx = document.getElementById('donutChart').getContext('2d');
    var regionChart = new Chart(regionCtx, {
        type: 'doughnut',
        data: {
            labels: JSON.parse(document.getElementById('sourceLabels').textContent),
            datasets: [{
                label: 'highest likelihood',
                data: JSON.parse(document.getElementById('total_impactData').textContent),
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
