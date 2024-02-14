document.addEventListener('DOMContentLoaded', function() {
  function addEvent(date, location, eventLink, ticketLink, isUpcoming) {
      console.log("Adding event:", date, location, eventLink, ticketLink, isUpcoming);

      var newEvent = document.createElement("li");
      newEvent.style.textAlign = "left"; // Align the event text to the left

      // Format the date separately
      var formattedDate = document.createElement("span");
      formattedDate.textContent = date;
      formattedDate.style.fontWeight = "bold";  // Adding some style to differentiate the date

      // Construct the content of the li element
      var eventText;
      if (isUpcoming) {
          eventText = " — <a href='" + eventLink + "'>" + location + "</a> — <a href='" + ticketLink + "'>tickets</a>";
      } else {
          eventText = " — " + location;
      }

      newEvent.innerHTML = formattedDate.outerHTML + eventText;

      var targetList = isUpcoming ? document.getElementById("upcomingeventslist") : document.getElementById("pasteventslist");

      if (targetList) {
          targetList.appendChild(newEvent);
          console.log("Event added successfully.");
      } else {
          console.error("Target list not found:", isUpcoming ? "upcomingeventslist" : "pasteventslist");
      }
  }

  // Example of adding a new upcoming event
  addEvent("03.03.24", "New York", "https://example.com/new-york-description", "https://example.com/new-york-tickets", true);

  // Example of adding a new past event
  addEvent("2019-2024", "Gutteklubben at SALT, Skeiv Scene, LOKAL in Trondheim, Elsker Oslo, RAS/ Rogaland på Skeivå", "", "", false);
  addEvent("2019-2024", "Gutta at Pride; Træna Pride, Oslo Pride, Bodø Pride, Drammen Pride, Trondheim Pride", "", "", false);
  addEvent("2023", "Gutta Opening Pride, Oslo Pride", "", "", false);
  addEvent("2023", "Gutta at Comrades Inc", "", "", false);
  addEvent("2023", "Gutta at Oslo Drag festival", "", "", false);
  addEvent("2022-2023", "Gutteklubben Goes To Hell, Spriten Kunsthall i Skien, Trondheim Pride, Dans på Skeivå på RAS, MiR Oslo", "", "", false);
  addEvent("2022", "Gutta`s reading for kids at Sølvberget library for FRI Rogaland, Lidköping Bibliotek for Lidköping city council", "", "", false);
  addEvent("2022", "Gutta at Regnbuetreff/ queer seniors meet and greet organized by FRI Oslo Viken", "", "", false);
  addEvent("2022", "Gutta at TurTeatern organized by Henriette Pedersen/Nartmansstiftelsen", "", "", false);
  addEvent("2022", "Gutta as part of Over the Rainbow at Preus Museum in Horten", "", "", false);
  addEvent("2022", "Gutta som en del av utstillingen Oslo kommunes skeive utstilling på Rådhusplassen", "", "", false);
  addEvent("2021", "Globaliseringskonferansen 2021 – en annen verd er mulig, Kulturkirken Jacob, Oslo", "", "", false);
  addEvent("2021", "Safe Space med Gutta- åpningsforestilling av festivalen Politisk Korrekt, Teater Innlandet, Hamar, Amateur Theatre Festival Lillehammer", "", "", false);
  addEvent("2021", "InstantSPKRBOX, instant konsert på SPKRBOX, Oslo", "", "", false);
  addEvent("2021", "Frognerløftet - med Artfag som en del av serien Oslohendelser i regi av TrAP og Kloden Teater, Oslo", "", "", false);
  addEvent("2021", "«Institutjonshealing med Gutta» på KHIO", "", "", false);
  addEvent("2020", "«Interconnectedness: Gutta Gets Connected» åpningsforestilling av Oslos Internasjonale Teaterfestival, Black Box Teater i Oslo", "", "", false);
  addEvent("2020", "Det feministiske tidsskriftet FETT 15 års jubileum, Ingensteds, Oslo", "", "", false);
  addEvent("2020", "«Hvorfor trenger vi et nytt økonomisk system», i samarbeid med Spire og Attac, Kulturhuset, Oslo", "", "", false);
  addEvent("2020", "«Becoming the abject» Drag-labratoriet (av Jens Martin Hartvedt Arvesen), Scenehuset, Oslo", "", "", false);
  addEvent("2020", "Gutta på Kvardagskavalkade», Sånafest, Hølen", "", "", false);
  addEvent("2020", "Gutta presenterer GUD- en drag film med premiere på Black Box Teater i Oslo 2020", "", "", false);
  addEvent("2020", "Kvinnefronten ELSKER Gutta, dragshow og panelsamtale, Ingensteds, Oslo", "", "", false);
  addEvent("2020", "Holiday Healing - med Gutta på RadiOrakel", "", "", false);
  addEvent("2018-2022", "Open Drag Stage og Bois Night - Oslo", "", "", false);
  addEvent("2019", "Som en del av hu;mor I regi av by;larm.", "", "", false);
  addEvent("2019", "«Gutta lover boyz», at ELSKER gay club, Oslo", "", "", false);
  addEvent("2018", "«Gutta på NULL av Åpninger», Dansens Hus, Oslo", "", "", false);

});