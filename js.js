var card = $(".card-img-top");
var cardB = $(".card");

card.on("click", function () {
    $(this).toggleClass("card-click");
    
});


cardB.on("click", function () {
    $(this).toggleClass("card-b-click");

});
