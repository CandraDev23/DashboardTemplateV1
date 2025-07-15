export function dashboardPage() {
  return `
          <div class="content">
    <div class="content-header">
            <h1 class="title-header">Dashboard</h1>
          </div>
          <div class="content-body">
            <section id="totalData">
              <div class="card-total-data">
                <div class="card-header title-data">
                  <i class="fas fa-users"></i>Total customers
                </div>
                <div class="card-body">
                  <h1 class="total-data-value">457,798</h1>
                  <span class="indicator-up"
                    ><i class="fas fa-sort-up"></i>5.4 %</span
                  >
                </div>
              </div>
              <div class="card-total-data">
                <div class="card-header title-data">
                  <i class="fas fa-dollar-sign"></i>Total revenue
                </div>
                <div class="card-body">
                  <h1 class="total-data-value">$1,617 M</h1>
                  <span class="indicator-up"
                    ><i class="fas fa-sort-up"></i>25.4 %</span
                  >
                </div>
              </div>
              <div class="card-total-data">
                <div class="card-header title-data">
                  <i class="fas fa-shopping-bag"></i>Total orders
                </div>
                <div class="card-body">
                  <h1 class="total-data-value">1,265 M</h1>
                  <span class="indicator-up"
                    ><i class="fas fa-sort-up"></i>18.4 %</span
                  >
                </div>
              </div>
              <div class="card-total-data">
                <div class="card-header title-data">
                  <i class="fas fa-store"></i>Total returns
                </div>
                <div class="card-body">
                  <h1 class="total-data-value">1,542</h1>
                  <span class="indicator-up"
                    ><i class="fas fa-sort-up"></i>18.4 %</span
                  >
                </div>
              </div>
              <div class="card-add-total-data">
                <div class="card-body">
                  <i class="fas fa-plus-square"></i>
                  <h2>Add data</h2>
                </div>
              </div>
            </section>
            <section id="productSales">
              <div class="chart-wrapper product-sales-chart">
                <h2 class="title-chart">Product sales</h2>
                <canvas id="productSalesChart" aria-label="Product sales"></canvas>
              </div>
            </section>
            <section id="salesByProductCategoryAndCountries">
              <div class="chart-wrapper product-category-chart">
                <h2 class="title-chart">Sales by product category</h2>
                <canvas id="salesByProductCategoryChart" aria-label="Sales by product category"></canvas>
              </div>
              <div class="chart-wrapper country-chart">
                <h2 class="title-chart">Sales by country</h2>
                <canvas id="salesByCountryChart" aria-label="Sales by country"></canvas>
              </div>
            </section>
            <section id="salesOverTime">
              <div class="chart-wrapper sales-overtime">
                <h2 class="title-chart">Sales overtime</h2>
                <canvas id="salesOverTimeChart" aria-label="Sales over time"></canvas>
              </div>
            </section>
          </div>
          </div>
  `
}