var boxOpened = "";
var cardOpened = "";
var counter = 0;
var cardFound = 0;

var source = "#boxcard";


//Get random group of images
function random(max){
    return Math.floor(Math.random()*Math.floor(max));
}

function shuffle() {
  var currentIndex = cards.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }

  return cards;
}
// Used like so
var cards = ["1", "2", "3", "4","5","6","7","8"];
cards = shuffle(cards);
console.log(cards);

function reset(){
    cards = shuffle(cards)
    $(source+"div p").hide();
    $(source+"div").css("visibility", "visible");
    count=0
    $("#success").remove();
    $("#counter").html(""+counter);
    boxOpened = "";
    cardOpened = "";
    cardFound = 0;
    return false;
}

function openCard(){
    var id = $(this).attr("p");
    //attaches and hides all cards
    if ($("#"+id+"p").is(":hidden")){
        $(source +"div").off("click", openCard);
        $("#"+id+"p").slideDown("fast");
        if (cardOpened ==""){
            boxOpened = id;
            cardOpened = $("#"+id+"p").attr("p");
            setTimeout(function(){
                $(source + "div").on("click",openCard)       
            },300);
        }
        else{
            currentOpen = $("#"+id+"p");
            if(cardOpened != currentOpen){
                setTimeout(function(){
                   $("#"+id +"p").slideUp("fast");
                    $("#"+boxOpened+"p").slideUp("fast");
                    boxOpened ="";
                    cardOpened="";
                },400);
            }
            //finds card and hides them
            else{
                $("#"+id+"p").parent().css("visibility", "hidden");
                $("#"+boxOpened+"p").parent().css("visbility","hidden");
                cardFound++;
                boxOpened = "";
                cardOpened="";
            }
            setTimeout(function(){
               $(source +"div").on("click",openCard); 
            },400);       
        }
        count++;
        $("#counter").html(""+counter);
        //if all cards are found
        if(cardFound === cards.length){
            $("#counter").prepend("<span id='success'>You found all cards</span>");
        }
    }
}
$(function(){
    var i;
    //creates doubles for each card
    for(i=1; i<3 ;i++){
        $.each(cards,function(y,val){
           $(source).append("<div id=card"+i+y+"><p>"+val+"</p>"); 
        });
    }
    //when the div is clicked
    $(source +"div").click(openCard);
    shuffle();
});
