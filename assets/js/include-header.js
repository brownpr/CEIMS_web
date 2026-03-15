document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => {
      if (!response.ok) throw new Error("Could not load header.html");
      return response.text();
    })
    .then(data => {
      document.getElementById("header-placeholder").innerHTML = data;

      const pageTitle = document.body.getAttribute("data-title");
      const titleElement = document.getElementById("site-title");

      if (pageTitle && titleElement) {
        titleElement.textContent = pageTitle;
      }

      const script = document.createElement("script");
      script.src = "assets/js/main.js";
      document.body.appendChild(script);
    })
    .catch(error => console.error("Header include error:", error));
});