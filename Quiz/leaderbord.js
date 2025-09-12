//Verbinden mit der DB

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://agtzntwrqkdrapshnozu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndHpudHdycWtkcmFwc2hub3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzg3MzcsImV4cCI6MjA3MjY1NDczN30.Z5Nr101z3LuKIWvBr6UNBHEXhUCTJuCYvbhuM5yerOc";

const supabase = createClient(supabaseUrl, supabaseKey);

//Läd den Score aus der DB

async function loadScore() {
  document.getElementById("scoreList").innerHTML = "Lade Daten...."; //Fügt solange die requrest läuft eine Anzeige hinzu
  const { data, error } = await supabase
    .from("Leaderbord") //Tabelle
    .select("*") // '*' Filter
    .order("score", { ascending: false }); //Sortiert

  if (error) {
    console.error("Fehler beim einfügen der Daten", error);
  } else {
    const sortedData = data.sort((a, b) => b.score - a.score); // Sortiert den Score
    const ul = document.getElementById("scoreList");

    //Lädt die Daten richtig in das Leaderbord
    document.getElementById("scoreList").innerHTML = ""; //Lade anzeige wird gelöscht
    sortedData.forEach((player) => {
      const li = document.createElement("li");
      li.textContent = `${player.user}: ${player.score}`;
      ul.appendChild(li);
    });
  }
}

//Beim laden der HTMl wird automatisch das Script ausgeführt

window.onload = loadScore;
