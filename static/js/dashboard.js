document.addEventListener("DOMContentLoaded", () => {

    // -----------------------------
    // Revenue Line Chart
    // -----------------------------

    const salesLabelsElement = document.getElementById("sales-labels");
    const salesDataElement = document.getElementById("sales-data");

    if (salesLabelsElement && salesDataElement) {

        const salesLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
        const salesData = [10, 25, 15, 30, 22];
        const ctx = document.getElementById("transactionChart");

        if (ctx) {

            new Chart(ctx, {

                type: "line",

                data: {

                    labels: salesLabels,

                    datasets: [{
                        label: "Daily Revenue",
                        data: salesData,
                        borderColor: "#2563eb",
                        backgroundColor: "rgba(37,99,235,0.15)",
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                    }]

                },

                    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: true,
                position: "top"
            }
        },

        scales: {
            x: {
                ticks: {
                    maxTicksLimit: 10
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value) {
                        return "$" + Number(value).toLocaleString();
                    }
                }
            }
        }
    }

            });

        }

    }

    // -----------------------------
    // Alert Doughnut Chart
    // -----------------------------

    const alertLabelsElement = document.getElementById("alert-labels");
    const alertDataElement = document.getElementById("alert-data");

    if (alertLabelsElement && alertDataElement) {

        const alertLabels = ["Critical", "High", "Medium", "Low"];
        const alertData = [5, 12, 8];
        const ctx2 = document.getElementById("alertChart");

        if (ctx2) {

            new Chart(ctx2, {

                type: "doughnut",

                data: {

                    labels: alertLabels,

                    datasets: [{

                        data: alertData,

                        backgroundColor: [

                            "#dc2626",
                            "#f59e0b",
                            "#3b82f6",
                            "#16a34a"
                        ],

                        borderWidth: 2

                    }]

                },

                options: {

                    responsive: true,

                    maintainAspectRatio: false,

                    plugins: {

                        legend: {

                            position: "bottom"

                        }

                    }

                }

            });

        }

    }

});