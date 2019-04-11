function init(){



var message= document.getElementById("entryinput");
var button= document.getElementById("entrybutton");

button.addEventListener("click", function()
{
  alert ("Annesha Mondal"+ message.value);
  document.getElementById("textoutput").innerHTML=message.value
});


}

window.addEventListener('load', init);
