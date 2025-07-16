import {
  initDashboardChart,
  initProductSalesChart,
} from "./assets/js/chart.js";
import { dashboardPage } from "./page/dashboard.js";
import { productsPage } from "./page/products.js";
import { customersPage } from "./page/customers.js";
import { ordersPage } from "./page/orders.js";
import { reportsPage } from "./page/reports.js";
import { accountPage } from "./page/account.js";
import { settingsPage } from "./page/settings.js";
import {
  initOrdersTable,
  initProductsTable,
  initReportsTable,
} from "./assets/js/datatablejs.js";
import { initTheme, themeControl } from "./assets/js/theme.js";

// Complete router with sidebar integration
const routes = {
  "/dashboard": dashboardPage,
  "/products": productsPage,
  "/customers": customersPage,
  "/orders": ordersPage,
  "/reports": reportsPage,
  "/account": accountPage,
  "/settings": settingsPage,
};

// Always use hash routing for both development and production
const useHashRouting = true;

function navigateTo(url) {
  window.location.hash = url;
}

const getCurrentPath = () => {
  return window.location.hash.slice(1) || '/dashboard';
};

const setActiveLink = (path) => {
  $(".nav-link").each(function () {
    const $link = $(this);
    const linkPath = $link.attr("href");
    const isActive = linkPath === '#' + path;
    
    $link.toggleClass("active", isActive);
  });
};

const initializeLinks = () => {
  // Ensure all navigation links have proper hash hrefs
  $('[data-route][data-link]').each(function() {
    const $link = $(this);
    const route = $link.attr('data-route');
    $link.attr('href', '#' + route);
  });
};

const router = async () => {
  const currentPath = getCurrentPath();
  const content = $("main");
  const route = routes[currentPath] || routes['/dashboard'];
  
  await content.html(route);
  setActiveLink(currentPath);

  $(document).ready(() => {
    initializeLinks();
    initTheme();
    
    switch(currentPath) {
      case "/dashboard":
        initDashboardChart();
        break;
      case "/products":
        initProductsTable();
        break;
      case "/orders":
        initOrdersTable();
        break;
      case "/reports":
        initReportsTable();
        break;
      case "/settings":
        themeControl();
        break;
    }
  });
};

// Event listeners for hash routing
$(document).on("click", "[data-link]", function(e) {
  e.preventDefault();
  
  const targetUrl = this.getAttribute("href").slice(1);
  navigateTo(targetUrl);
});

// Handle browser navigation (hash changes)
$(window).on("hashchange", router);

// Initialize
$(document).ready(() => {
  initializeLinks();
  
  // Set default hash if none exists
  if (!window.location.hash) {
    window.location.hash = '/dashboard';
  }
  
  router();
});