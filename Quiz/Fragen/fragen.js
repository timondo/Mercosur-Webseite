import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://agtzntwrqkdrapshnozu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndHpudHdycWtkcmFwc2hub3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzg3MzcsImV4cCI6MjA3MjY1NDczN30.Z5Nr101z3LuKIWvBr6UNBHEXhUCTJuCYvbhuM5yerOc";

const supabase = createClient(supabaseUrl, supabaseKey);



//JS für das Punkte hochladen

//1.Frage
function loadPoints() {
  if (localStorage.getItem("punkte") === null) {
    localStorage.setItem("punkte", 0);
    localStorage.setItem("isdone1", false);
    localStorage.setItem("isdone2", false);
    localStorage.setItem("isdone3", false);
  } else {
    let Points = localStorage.getItem("punkte");
    document.getElementById("Punkte").innerHTML = "Punkte: " + Points;
  }
}

function answer1() {
  let isdone1 = localStorage.getItem("isdone1") === "true";
  if (isdone1) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/2.html";
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
  if (isdone1) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/2.html";
  } else {
    localStorage.setItem("isdone1", true);
    window.location.href = "/Quiz/Fragen/2.html";
  }
}
//2. Frage

function answer2() {
  let isdone2 = localStorage.getItem("isdone2") === "true";
  if (isdone2) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/3.html";
  } else {
    let aktuellepunkte = parseInt(localStorage.getItem("punkte"), 10) || 0;
    aktuellepunkte += 1;
    localStorage.setItem("punkte", aktuellepunkte);
    window.location.href = "/Quiz/Fragen/3.html";
    localStorage.setItem("isdone2", true);
  }
}

function false2() {
  let isdone2 = localStorage.getItem("isdone2") === "true";
  if (isdone2) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/3.html";
  } else {
    localStorage.setItem("isdone2", true);
    window.location.href = "/Quiz/Fragen/3.html";
  }
}

function answer3() {
  let isdone3 = localStorage.getItem("isdone3") === "true";
  if (isdone3) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/4.html";
  } else {
    let aktuellepunkte = parseInt(localStorage.getItem("punkte"), 10) || 0;
    aktuellepunkte += 1;
    localStorage.setItem("punkte", aktuellepunkte);
    localStorage.setItem("isdone3", true);
    window.location.href = "/Quiz/Fragen/4.html";
  }
}

function false3() {
  let isdone3 = localStorage.getItem("isdone3") === "true";
  if (isdone3) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/4.html";
  } else {
    localStorage.setItem("isdone3", true);
    window.location.href = "/Quiz/Fragen/4.html";
  }
}

function answer4() {
  let isdone4 = localStorage.getItem("isdone4") === "true";
  if (isdone4) {
    alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/5.html";
  } else{
    let aktuellepunkte = parseInt(localStorage.getItem("punkte"), 10) || 0;
    aktuellepunkte += 1;
    localStorage.setItem("punkte", aktuellepunkte);
    localStorage.setItem("isdone4", true);
    window.location.href = "/Quiz/Fragen/4.html";
  }
}

function false4() {
  let isdone4 = localStorage.getItem("isdone4") === "true"
  if(isdone4) {
        alert("Nicht schummeln, du hast diese Frage schon beantwortet");
    window.location.href = "/Quiz/Fragen/5.html";
  } else {
    localStorage.setItem("isdone4", true);
    window.location.href = "Quiz/Fragen/5.html";
  }
}



window.onload = loadPoints;


