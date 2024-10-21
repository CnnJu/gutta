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
        var eventText = " — <a href='" + eventLink.trim() + "'>" + location + "</a>";
        
        console.log("Initial event text:", eventText);

        if (isUpcoming) {
            if (!ticketLink) {
                eventText += " — Tickets Information Coming";
            } else if (ticketLink === "Free Entry - Donations") {
                eventText += " — Free Entry - Donations";
            } else {
                eventText += " — <a href='" + ticketLink.trim() + "'>tickets</a>";
            }
        }
        
        console.log("Final event text:", eventText);

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
  // Add more events as needed with 'addEvent("date", "Name and place", "link to description", "link to tickets", true);'
  addEvent("14.11.2024", "Reykjavik Dance Festival, Iceland", "http://www.reykjavikdancefestival.com/gutteklubbengoestohell", "https://tix.is/event/18483", true);
  addEvent("13.12.2024", "MIR, Oslo", "https://www.facebook.com/events/1759514384877145 ", "https://checkout.ebillett.no/368/events/194/purchase", true);
  // Example of adding a new past event
  addEvent("12.09.2024", "Me Nightclub, Trondheim Pride", "https://www.trondheimpride.no/event/big-daddy-karten-gutta/", "https://trondheimpride.hoopla.no/event/4249046043", false);
  addEvent("14.09.2024", "Grenland Pride, parade & show", "https://www.grenlandpride.no", "Free Entry!", false);
  addEvent("18.08.2024", "Queer Spirit Festival, Devon, England ", "https://queerspirit.net/festival/whatson/performance/performance-by-venue/big-top/richhard-larry", "", false);
  addEvent("02.08.2024", "Sonntags Club, Berlin ", "https://www.sonntags-club.de/programm/gutta.php", "Free Entry - Donations", false);
  addEvent("03.08.2024", "Get Fucked, Freiluftkino Hasenheide, Berlin", "https://www.freiluftkino-hasenheide.de/filme/get-fucked-in-hasenheide-olympias-event-27134/", "https://www.kinoheld.de/kino/berlin/freiluftkino-hasenheide/vorstellung/780485", false);
  addEvent("04.08.2024", "Linienstrasse 206, Berlin — NB: Show starts at 7pm", " https://www.instagram.com/linie206_bleibt/", "Free Entry - Donations", false);
  addEvent("10.05.2024", "Naughty Cabaret, Teaterkjellern, Oslo", "", "https://www.ticketmaster.no/event/731063", false);
  addEvent("02.06.2024", "Pride House, Bergen Pride", "https://bergenpride.no", "Free Entry!", false);
  addEvent("07.06.2024", "Porsgrunn International Theatre Festival, Grenland Friteater", "https://pitfestival.no", "", false);
  addEvent("25.06.2024", "Oslo Pride at SALT", "https://www.oslopride.no", "Free Entry!", false);
  addEvent("2019-2024", "Gutteklubben at SALT, Skeiv Scene, LOKAL in Trondheim, Elsker Oslo, RAS/ Rogaland på Skeivå", "", "", false);
  addEvent("2019-2024", "Gutta at Pride; Træna Pride, Oslo Pride, Bodø Pride, Drammen Pride, Trondheim Pride", "", "", false);
  addEvent("2023", "Gutta Opening Pride, Oslo Pride", "", "", false);
  addEvent("2023", "Gutta at Comrades Inc", "", "", false);
  addEvent("2023", "Gutta at Pride", "", "", false);
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

  // Add more events as needed with 'addEvent("date", "Name and place", "link to description", "link to tickets", false);'
});
