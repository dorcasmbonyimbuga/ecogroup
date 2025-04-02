$(document).ready(function () {
  // HERO SLIDER

  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,

    // navText:['PREV','NEXT'],
    responsive: {
      0: {
        nav: false,
      },
      600: {
        nav: true,
      },
      1000: {},
    },
  });
  // PROJECT SLIDER

  $("#project-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    margin: 24,
    responsive: {
      0: {
        items: 1,
        margin: 0,
      },
      600: {
        items: 2,
        center: true,
      },
      1000: {
        items: 3,
        center: true,
      },
    },
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

document.getElementById("year").textContent = new Date().getFullYear();


// chart
// Récupérer le canvas
var ctx = document.getElementById("stackedBarChart").getContext("2d");

// Création du graphique avec Chart.js
var stackedBarChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["CATEGORY 1", "CATEGORY 2", "CATEGORY 3", "CATEGORY 4"],
        datasets: [
            {
                label: "Série 1",
                data: [4.3, 2.5, 3.5, 4.5],
                backgroundColor: "#61b2fa"
            },
            {
                label: "Série 2",
                data: [2.4, 4.4, 1.8, 2.8],
                backgroundColor: "#289dd6"
            },
            {
                label: "Série 3",
                data: [2, 2, 3, 5],
                backgroundColor: "#1c72b7"
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true // Cacher la légende
            }
        },
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    }
});
// chart objectif
var ctx = document.getElementById("stackedBarChartObjectif").getContext("2d");
var stackedBarChartObjectif=new Chart(ctx, {
  type: "bar",
  data: {
      labels: ["OBJECTIF"],
      datasets: [
          {
              label: "Série 1",
              data: [4.5],
              backgroundColor: "#61b2fa"
          },
          {
              label: "Série 2",
              data: [2.8],
              backgroundColor: "#289dd6"
          },
          {
              label: "Série 3",
              data: [5],
              backgroundColor: "#1c72b7"
          }
      ]
  },
  options: {
      responsive: true,
      plugins: {
          legend: {
              display: true // Cacher la légende
          }
      },
      scales: {
          x: {
              stacked: true
          },
          y: {
              stacked: true,
              beginAtZero: true
          }
      }
  }
});

