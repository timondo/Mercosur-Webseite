//JS für den DB Test


//Verbindung mit der DB

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://agtzntwrqkdrapshnozu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFndHpudHdycWtkcmFwc2hub3p1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcwNzg3MzcsImV4cCI6MjA3MjY1NDczN30.Z5Nr101z3LuKIWvBr6UNBHEXhUCTJuCYvbhuM5yerOc";

const supabase = createClient(supabaseUrl, supabaseKey);

//Evenlistener, der die Funktion bei ,,onclick" startet
document.getElementById("meineForm").addEventListener("submit", insertScore);

async function insertScore(e) {
  e.preventDefault();
  const punkte = document.getElementById("punkte").value;
  const username = document.getElementById("username").value;
  const { data, error } = await supabase.from("Leaderbord").insert([
    { user: username, score: punkte }, //Daten werden in die DB eingelesen
  ]);

  if (error) {
    console.error("Fehler beim einfügen der Daten", error);
  } else {
    console.log("Datem wurdem eingefügt", data);

    //Läd die Startseite
    window.location.href = "/index.html"; //Hier kommt der Startseiten Pfad rein
  }
}
