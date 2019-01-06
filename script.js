//Spell #1

$("#Alohomora").click(function(){
$("#locked").slideUp();
$("#unlocked").fadeIn();
});



//Spell #2

$("#Bombarda").click(function(){
$("#door").fadeOut();
$("#boom").show();
});



//Spell #3

$("#Lumos").click(function(){
$("#dark").slideToggle();
$("#light").slideToggle();
});

//Spell #4

$("h1").click(function(){
$("#secret").slideToggle();
});

$("#secret").click(function(){
$("#luna").slideToggle();
$("#patronus").slideToggle();
});




