for (let i = 1; i < 15; i++) {
    setTimeout(function () {
    document.getElementById("R" + i).classList.remove("hidden");
  }, i * 1000);
    setTimeout(function () {
    document.getElementById("R" + i).classList.add("hidden");
  }, (i + 1) * 1000);
}
