const el = document.querySelector("#words");

function toggleFormat(format) {
  el.classList.toggle(format);
}

function removeFormat() {
  el.classList.remove("underline", "italic", "bold", "mono");
}

document.getElementById("colorPicker").addEventListener("input", function() {
  el.style.color = this.value;
});
