(() => {
  window.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("overview-link");
    const title = document.getElementById("overview-title");

    title.style.display = "none";

    window.addEventListener("scroll", e => {
      if (e.currentTarget.scrollY >= 250) {
        // use opacity instead
        btn.style.display = "none";
        title.style.display = "block";
      }
    });

  });
})()
