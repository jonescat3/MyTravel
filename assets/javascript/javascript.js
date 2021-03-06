var destination = "";
var startDate = "";
var endDate = "";


$("#user-submit").on('click', function (event){
event.preventDefault()
console.log("user submission button works");
//API Call for Eventful
//api key for eventful = pXWvVZ6KKRfSxk4R
//date format on eventful: &t=2018072100-2018072823 (YYYYMMDD-YYYYMMDD)

//grab user inputs and set local variables
destination = $("#travelDestinationInput").val().trim();
startDate = $("#startDateInput").val().trim();
endDate = $("#endDateInput").val().trim();

//format dates
var startDateFormatted = moment(startDate).format("YYYY MM DD");
var endDateFormatted = moment(endDate).format("YYYY MM DD");

//http://api.eventful.com/json/events/search?app_key=pXWvVZ6KKRfSxk4R&location=San+Diego&date=2018042500-2018042700
var eventQueryURL = "http://atlanta.eventful.com/events?q=*&ga_search=" + destination + "*&sort_order=Date&within=25&units=mi&t=" + startDateFormatted + "-" + endDateFormatted + "&ga_type=events";

$.ajax({
    url: eventQueryURL,
    method: "GET"
  })
  .then(function(response) {
    console.log(response);
  });


//API Call for Yelp
//api key for yelp = w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx

var yelpQueryURL = "https://api.yelp.com/v3/businesses/search?term=restaurants&destination=" + destination + "&apikey=w9W8FixtEsCBFVIOO3FGXPzz9cVEiOI7enTexK1ROsh5WHykbeEFJzovwpgELKVU0LdpfhC6RLKyNCa__Pqi9nXD0bVP90ZcVY2NU5La1t5yionbla1iImv9qP87W3Yx";
$.ajax({
    url: yelpQueryURL,
    method: "GET"
  })
  .then(function(response) {
        console.log(response);
  });

      for (var i = 0; i < 10; i++){
        var item = $("<p>");
        var e = $("<a>");
        e.text(response.businesses[i].name);
        e.addClass("card-text");
        e.attr("href", response.businesses[i].url);
        item.append(e);
        $("#restaurants").append(item);
        }
    }).catch(function (err) {
      console.log(err);
    });


