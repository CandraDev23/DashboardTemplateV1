$(document).ready(function () {
  $("main, footer, .sidebar").addClass("no-transition");

  setTimeout(() => {
    $(".sidebar, main, footer").removeClass("no-transition");
  }, 100);

  $(".get-started").click(function () {
    const coverApp = $(".cover-app");

    coverApp.addClass("opened");
  });

  $(".toggle-sidebar").click(function () {
    const sidebar = $(".sidebar");
    const body = $("body");

    if (sidebar.hasClass("sidebar-collapse") && body.hasClass("dark-theme")) {
      sidebar.removeClass("sidebar-collapse").addClass("sidebar-expand");
      $(".sidebar .menu-text").css("display", "inline-block");
      $(".logo-expand.dark-theme").css("display", "block");
      $(".logo-expand.dark-theme").css(
        "transition",
        "opacity 0.2s ease-in-out"
      );
      $(".sidebar .menu-text").css("transition", "opacity 0.2s ease-in-out");
      $(".logo-expand.dark-theme").css("opacity", "0");
      $(".sidebar .menu-text").css("opacity", "0");

      setTimeout(() => {
        $(".logo-expand").css("opacity", "1");
        $(".sidebar .menu-text").css("opacity", "1");
      }, 300);
    } else if (sidebar.hasClass("sidebar-collapse")) {
      sidebar.removeClass("sidebar-collapse").addClass("sidebar-expand");
      $(".sidebar .menu-text").css("display", "inline-block");
      $(".logo-expand").not(".dark-theme").css("display", "block");
      $(".logo-expand").not(".dark-theme").css("transition", "opacity 0.2s ease-in-out");
      $(".sidebar .menu-text").css("transition", "opacity 0.2s ease-in-out");
      $(".logo-expand").not(".dark-theme").css("opacity", "0");
      $(".sidebar .menu-text").css("opacity", "0");

      setTimeout(() => {
        $(".logo-expand").not(".dark-theme").css("opacity", "1");
        $(".sidebar .menu-text").css("opacity", "1");
      }, 300);
    } else {
      $(".logo-expand").css("display", "none");
      $(".sidebar .menu-text").css("display", "none");
      sidebar.removeClass("sidebar-expand").addClass("sidebar-collapse");
    }

    const isCollapsed = sidebar.hasClass("sidebar-collapse");
    localStorage.setItem("sidebar-collapsed", isCollapsed);
  });

  $(".toggle-sidebar-mobile").click(function () {
    const sidebarMobile = $(".sidebar-mobile");

    sidebarMobile.toggleClass("active");
    
    const isActive = sidebarMobile.hasClass("active");
    localStorage.setItem("active", isActive);
  });

  // Body click handler - dipasang sekali saja
  $("body").click(function (e) {
    const sidebarMobile = $(".sidebar-mobile");
    // Hanya jalankan jika sidebar sedang active
    if (sidebarMobile.hasClass("active")) {
      // Cek apakah klik terjadi di LUAR sidebar dan toggle button
      if (!$(e.target).closest(".sidebar-mobile").length && 
          !$(e.target).closest(".toggle-sidebar-mobile").length) {
        sidebarMobile.removeClass("active");
        localStorage.setItem("active", false);
      }
    }
  });
});

$(window).on("load", function () {
  // setTimeout(() => {
  //   $(".loader-wrapper").css("display", "none");
  //   $("main").css("opacity", "1");
  // }, 1000);
  $(".loader-wrapper").css("display", "none");
  $("main").css("opacity", "1");
});
