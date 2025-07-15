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

const isDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const useHashRouting = isDevelopment;

function navigateTo(url) {
  if (useHashRouting) {
    window.location.hash = url;
  } else {
    history.pushState(null, null, url);
    router();
  }
}

const getCurrentPath = () => {
  if (useHashRouting) {
    return window.location.hash.slice(1) || '/dashboard';
  } else {
    return window.location.pathname || '/dashboard';
  }
};

const setActiveLink = (path) => {
  $(".nav-link").each(function () {
    const $link = $(this);
    let linkPath;
    
    if (useHashRouting) {
      linkPath = $link.attr("href");
    } else {
      linkPath = $link.attr("data-route");
    }
    
    const isActive = useHashRouting ? 
      linkPath === '#' + path : 
      linkPath === path;
    
    $link.toggleClass("active", isActive);
  });
};

const initializeLinks = () => {
  if (!useHashRouting) {
    $('[data-route][data-link]').each(function() {
      const $link = $(this);
      const route = $link.attr('data-route');
      $link.attr('href', route);
    });
  }
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

// Event listeners
$(document).on("click", "[data-link]", function(e) {
  e.preventDefault();
  
  const targetUrl = useHashRouting ? 
    this.getAttribute("href").slice(1) : 
    this.getAttribute("data-route");
  
  navigateTo(targetUrl);
});

// Handle browser navigation
if (useHashRouting) {
  $(window).on("hashchange", router);
} else {
  $(window).on("popstate", router);
}

// Initialize
$(document).ready(() => {
  initializeLinks();
  
  if (useHashRouting && !window.location.hash) {
    window.location.hash = '/dashboard';
  } else if (!useHashRouting && window.location.pathname === '/') {
    history.replaceState(null, null, '/dashboard');
  }
  
  router();
});