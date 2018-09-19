var animals = ["dog","cat","rabbit","hamster","bird","turtle","hermit crab",
"chicken","teacup pig","salamander","pygmy goat","frog"]

renderButtons();

$(".bt").on("click", function()
{
    console.log($(".bt").text());
})

$(".submit").on("click", function()
{
    event.preventDefault();
    var animal = $("#usr").val().trim();
    if(animal != "")
    {
        animals.push(animal);
        renderButtons();
    }
})

$(document).on("click", "img", function() {  
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });

$(document).on("click", ".animal-bt", function()
{
    var animal = $(this).attr("data-name");
    var url = "http://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=yLhCT9SVV5K1G6OEs6Tw2AxbJVSKqWw2&limit=10";
    fetch(url)  
    .then(function(r)
    {
        return r.json();
    })
    .then(function(data)
    {
        for(i = 0; i<10; i++)
        {
            var animalDiv = $("<li>");
            var rate = data.data[i].rating;
            var imgURL = data.data[i].images.fixed_height.url; 
            var imgURLstill = data.data[i].images.fixed_height_still.url;            ;
            var image = $("<img>");
            image.attr("src", imgURLstill);
            image.attr("data-still", imgURLstill);
            image.attr("data-animate", imgURL);
            image.attr("data-state", "still");
            var pOne = $("<p>").text("Rating: " + rate);
            animalDiv.append(pOne);
            animalDiv.append(image);
            $(".gif").prepend(animalDiv);
        }
    })
    .catch(function(err)
    {
        console.error(err);
    })
});


function renderButtons() 
{
    $("#buttonView").empty();
    for (var i = 0; i < animals.length; i++) {
      var a = $("<button>");
      a.addClass("btn btn-primary animal-bt");
      a.attr("data-name", animals[i]);
      a.text(animals[i]);
      $("#buttonView").append(a);
    }
  }




