$(document).ready(function() {

  $("#DictionarySubmit").click(function(e) {
    e.preventDefault();
    var searchFor = $("#DictionarySearch").val();
    console.log("You searched for \"" + searchFor + "\"");


    var myURL = "https://api.chucknorris.io/jokes/random";

    $.ajax ({
      url : myURL,
      dataType : "json",
      success : function (json) {
          console.log(json);
          var results = "";
          results += '<p>' + json.value + '</p>';
          $("#fakeText").html(results);
          $("#fakeText").css('color', 'black');
      }
    })
  });

});
