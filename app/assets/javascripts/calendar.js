$(document).ready(function() {
   $("#calendar").fullCalendar({
     header: {
       left: "prev,next today",
       center: "title",
       right: "month,agendaWeek,agendaDay"
     },
     defaultView: "month",
     height: 500,
     slotMinutes: 15,
     events: "/sightings/get_sightings",
     timeFormat: "LT",
     dragOpacity: "0.5",
     eventClick: function(event) {
       if (event.url) {
         window.open(event.url);
         return false;
       }
      }
  });
});
