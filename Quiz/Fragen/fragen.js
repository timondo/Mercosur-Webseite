//JS für das Punkte hochladen

function loadPoints() {
  if (localStorage.getItem("punkte") === null) {
    localStorage.setItem("punkte", 0);
    setItem("isdone1", false);
  } else {
    Points = localStorage.getItem("punkte");
    document.getElementById("Punkte").innerHTML = "Punkte: " + Points;
  }
}

function answer1() {
  let isdone1 = localStorage.getItem("isdone1") === "true";
  if (isdone1) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");

  } else {
    let aktuellepunkte = parseInt(localStorage.getItem("punkte"), 10) || 0;
    aktuellepunkte += 1;
    localStorage.setItem("punkte", aktuellepunkte);
    window.location.href = "/Quiz/Fragen/2.html";
    localStorage.setItem("isdone1", true);
  }

}

function false1() {
    let isdone1 = localStorage.getItem("isdone1") === "true";
    if(isdone1) {
        alert("Nicht schummeln, du hast diese Frage schon beantwortet");
        window.location.href = "/Quiz/Fragen/2.html"
    } else{
        window.location.href = "/Quiz/Fragen/2.html"
    }
}

window.onload = loadPoints;
