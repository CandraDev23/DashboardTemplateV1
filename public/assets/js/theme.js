function initTheme() {
  $(document).ready(function () {
    // Cek preferensi tersimpan
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      $("body").addClass("dark-theme");
      $("#themeToggle").prop("checked", true);
    }

    // Optional: deteksi default dark mode dari OS
    // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !savedTheme) {
    //   $("body").addClass("dark-theme");
    //   $("#themeToggle").prop("checked", true);
    // }
  });
}

function themeControl() {
  // Toggle saat switch diklik
    $("#themeToggle").on("change", function () {
      $("body").toggleClass("dark-theme");

      // Simpan ke localStorage
      if ($(this).is(":checked")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      console.log("tes");
    });
}

export { initTheme, themeControl };