var HTMLstring = "";
for(var x = 1; x < 151; x++){
    HTMLstring += '<img src="http://pokeapi.co/media/img/'+x+'.png">'
}
$(document).ready(function(){
    
    $(".container").append(HTMLstring);

})