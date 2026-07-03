const searchInput = document.getElementById("searchInput");
const blogItems = document.querySelectorAll(".blog-item");

searchInput.addEventListener("keyup", function () {
  const value = this.value.toLowerCase();

  blogItems.forEach(item => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(value) ? "block" : "none";
  });
});