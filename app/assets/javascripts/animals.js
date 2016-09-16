$(document).ready(function(){


  $("#add_new_animal").on(
    "click",
    function() {
      // Data to be submitted
      var common_name = $("#common_name").val();
      var latin_name = $("#latin_name").val();
      var kingdom = $("#kingdom").val();


      var new_animal = {
        "animal": {
          "common_name": common_name,
          "latin_name": latin_name,
          "kingdom": kingdom,


        }
      }

      alert("Sending message: " + JSON.stringify(new_animal));

      $.ajax({
        dataType: 'json',
        url: '/animals',
        method: 'POST',
        data: new_animal,
        success: function(data) {
          alert("Received message: " + JSON.stringify(data));

          $("#animalTable").append("<tr><td>"+data.common_name+"</td><td>"+data.latin_name+"</td><td>"+data.kingdom+"</td>" +"<td><a href='/animals/"+data.id +"/show'>Show</a>" +"</td>" +"<td><a href='/animals/"+data.id +"/edit'>Edit</a>" +"</td><td><a data-confirm='Are you sure?' rel='nofollow' data-method='delete' href='/animals/"+data.id+"'>Destroy</a></td></tr>")
        },


  //     $("#animalTable").append("<tr>"data.common_name"</tr>");
  //
  //
        error: function(jqXHR, textStatus, errorThrown) {
          alert("Add new animal failed: " + errorThrown);
        }
      });

    })



//this is bullshit
    $("#add_new_sighting").on(
      "click",
      function() {
        // Data to be submitted
        var date = $("#s_date").val();
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
        var region = $("#region").val();
        var animal_id = $("#animal_id").val();
        var time = $("#s_time").val();


        var new_sighting = {
          "sighting": {
          "date": date,
          "latitude": latitude,
          "longitude": longitude,
          "region": region,
          "animal_id": animal_id,
          "time": time


          }
        }



        alert("Sending message: " + JSON.stringify(new_sighting));

        $.ajax({
          dataType: 'json',
          url: '/sightings',
          method: 'POST',
          data: new_sighting,
          success: function(data) {
            alert("Received message: " + JSON.stringify(data));


            $("#sighting_list").append("<li>Date: "+data.date+"<br>Latitude: "+data.latitude+"<br>Longitude: "+data.longitude+"<br>Region: "+data.region+"</li>")
          },

          error: function(jqXHR, textStatus, errorThrown) {
            alert("Add new sighting failed: " + errorThrown);
          }
        });

      })






})
