new WOW().init();

let x = document.getElementById("x");

function truncateString(p) {
  if (p.length > 20) {
    return p.slice(0, 120) + "...";
  } else {
    return p;
  }
}
x.innerText = truncateString(x.innerText);
