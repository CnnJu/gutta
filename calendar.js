    document.addEventListener('DOMContentLoaded', function() {
      function addEvent(date, location, eventLink, ticketLink, isUpcoming) {
        console.log("Adding event:", date, location, eventLink, ticketLink, isUpcoming);

        var newEvent = document.createElement("li");

        // Format the date separately
        var formattedDate = document.createElement("span");
        formattedDate.textContent = date;
        formattedDate.style.fontWeight = "bold";  // Adding some style to differentiate the date

        // Construct the content of the li element using innerHTML
        var eventText = " — <a href='" + eventLink + "'>" + location + "</a> — <a href='" + ticketLink + "'>tickets</a>";
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
      addEvent("02.02.22", "Paris", "https://example.com/paris-description", "https://example.com/paris-tickets", false);
    });