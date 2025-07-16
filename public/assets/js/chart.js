function generateRandomData(min, max, count) {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );
}

function isTablet() {
  return window.innerWidth <= 992;
}
function isMobile() {
  return window.innerWidth <= 768;
}

function initProductSalesChart() {
  const productSales = document.getElementById("productSalesChart");
  new Chart(productSales, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Gross margin",
          data: generateRandomData(10000, 80000, 7),
          borderWidth: 1,
          backgroundColor: "#4D6DE3",
          borderRadius: 4,
          maxBarThickness: 36, // Maksimal lebar bar
        },
        {
          label: "Revenue",
          data: generateRandomData(10000, 80000, 7),
          borderWidth: 1,
          backgroundColor: "#E67514",
          borderRadius: 4,
          maxBarThickness: 34, // Maksimal lebar bar
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: {
            display: false, // sembunyikan garis vertikal
          },
          // Pengaturan jarak antar dataset - lebih mepet
          categoryPercentage: 0.9, // Lebar keseluruhan grup bar (0-1)
          barPercentage: 0.85, // Lebar bar relatif terhadap kategori (0-1)
        },
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 10000, // selisih 10k antar angka
            maxTicksLimit: 8,
            callback: function (value) {
              return value > 0 ? value / 1000 + "k" : value; // ubah ke format 10k
            },
          },
          grid: {
            display: true,
            drawBorder: false,
          },
        },
      },
      animation: {
        duration: 1000,
        easing: "easeOutCubic",
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    },
  });
}
function initSalesByCategoryChart() {
  const categoryLabels = [
    "Electronics",
    "Clothing",
    "Home & Living",
    "Beauty",
    "Books",
  ];

  const categoryColors = [
    "#4D6DE3", // Biru
    "#E67514", // Oranye
    "#00C49F", // Hijau toska
    "#FFBB28", // Kuning
    "#FF8042", // Oranye muda
  ];

  const categoryData = generateRandomData(100, 500, 5);

  const total = categoryData.reduce((acc, val) => acc + val, 0);

  const productCategoryChart = document.getElementById(
    "salesByProductCategoryChart"
  );

  new Chart(productCategoryChart, {
    type: "doughnut",
    data: {
      labels: categoryLabels,
      datasets: [
        {
          label: "Product by Category",
          data: categoryData,
          backgroundColor: categoryColors,
          borderWidth: 0,
          borderRadius: 5, // ✅ Melengkungkan sisi sektor
          spacing: 2, // ✅ Jarak antar sektor
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 20,
          right: 0,
          top: isMobile() ? 20 : 0,
          bottom: 0,
        },
      },
      cutout: "60%",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: isTablet() ? 'bottom' : 'right',
          labels: {
            usePointStyle: true,
            pointStyle: "circle",
            padding: 15, // jarak antar item legend
            generateLabels: function (chart) {
              const data = chart.data;
              const dataset = data.datasets[0];
              const total = dataset.data.reduce((acc, val) => acc + val, 0);
              return data.labels.map((label, i) => {
                const value = dataset.data[i];
                const percentage = ((value / total) * 100).toFixed(1);
                return {
                  text: `${label} (${percentage}%)`,
                  fillStyle: dataset.backgroundColor[i],
                  strokeStyle: dataset.backgroundColor[i],
                  index: i,
                  pointStyle: "circle",
                  fontColor: "#8a8a8aff",
                };
              });
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const label = context.label || "";
              const value = context.parsed || 0;
              const percentage = ((value / total) * 100).toFixed(1);
              return `${label}: ${value} items (${percentage}%)`;
            },
          },
        },
      },
      animation: {
        duration: 1000,
        easing: "easeOutCubic",
      },
    },
  });
}

function initSalesByCountryChart() {
  const salesByCountry = document
    .getElementById("salesByCountryChart")
    .getContext("2d");

  fetch("https://unpkg.com/world-atlas@2/countries-10m.json")
    .then((res) => res.json())
    .then((topology) => {
      const allCountries = ChartGeo.topojson.feature(
        topology,
        topology.objects.countries
      ).features;

      // ✅ Filter negara Eropa Tengah saja
      const targetNames = [
        "Germany",
        "Austria",
        "Poland",
        "Ukraine",
        "Czechia",
        "Slovakia",
        "Hungary",
      ];
      const countries = allCountries.filter((c) =>
        targetNames.includes(c.properties.name)
      );

      const data = {
        labels: countries.map((f) => f.properties.name),
        datasets: [
          {
            label: "Sales by Country",
            outline: countries,
            data: countries.map((f) => ({
              feature: f,
              value: Math.random() * 1000,
            })),
          },
        ],
      };

      new Chart(salesByCountry, {
        type: "choropleth",
        data: data,
        options: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: isMobile() ? 40 : 0,
              bottom: 0,
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            projection: {
              axis: "x",
              projection: "equalEarth",
            },
            color: {
              axis: "x",
              quantize: 5,
              legend: {
                position: "top-right",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    });
}

function initSalesOverTimeChart() {
  const salesOvertime = document
    .getElementById("salesOverTimeChart")
    .getContext("2d");

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const revenueData = [32000, 42000, 39000, 45000, 52000, 60000, 58000];
  const profitData = [12000, 15000, 13000, 18000, 22000, 26000, 25000];

  new Chart(salesOvertime, {
    type: "line",
    data: {
      labels: months,
      datasets: [
        {
          label: "Revenue (Pendapatan Kotor)",
          data: revenueData,
          borderColor: "#4D6DE3",
          backgroundColor: "rgba(77, 109, 227, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
        },
        {
          label: "Profit (Keuntungan Bersih)",
          data: profitData,
          borderColor: "#00C49F",
          backgroundColor: "rgba(0, 196, 159, 0.1)",
          fill: true,
          tension: 0.4,
          pointRadius: 4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: function (salesOvertime) {
              return `${
                salesOvertime.dataset.label
              }: Rp ${salesOvertime.parsed.y.toLocaleString()}`;
            },
          },
        },
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            pointStyle: "line",
            padding: 20,
            generateLabels: function (chart) {
              // Tambahkan keterangan ke legend
              const original =
                Chart.defaults.plugins.legend.labels.generateLabels(chart);
              return original.map((label) => {
                if (label.text.includes("Revenue")) {
                  label.text +=
                    " — Total pendapatan bulanan (tanpa dikurangi biaya)";
                }
                if (label.text.includes("Profit")) {
                  label.text += " — Keuntungan bersih setelah dikurangi biaya";
                }
                return label;
              });
            },
          },
        },
      },
    },
  });
}

const initDashboardChart = () => {
  initProductSalesChart();
  initSalesByCategoryChart();
  initSalesByCountryChart();
  initSalesOverTimeChart();
};

export { initDashboardChart, initProductSalesChart };
