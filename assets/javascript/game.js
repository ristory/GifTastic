
var url = "http://api.giphy.com/v1/gifs/search?q=" + "&api_key=yLhCT9SVV5K1G6OEs6Tw2AxbJVSKqWw2&limit=10";
var pOne = $("<p>").text("Rating: ");

$(".gif").append(pOne);

$(".submit").on("click", function()
{
    
})
function getAPI()
{
    fetch(url)  
    .then(function(r)
    {
        return r.json();
    })
    .then(function(data)
    {
        console.log(data);
    })
    .then(function(err)
    {
        console.error(err);
    })
}


