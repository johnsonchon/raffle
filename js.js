var card = $(".card-img-top");
var cardB = $(".card");

card.on("click", function () {
    if ("opacity", "1") {
        $(this).css({
            "opacity": "0.2",
        });

    }

    else if ("opacity", "0.2") {
        $(this).css({
            "opacity": "1",
        });
    }
});


cardB.on("click",function () {
    if ("opacity", "1") {
        $(this).css({
            "background-color": "#C0C0C0",
            "border": "none"

        });

    }
});
