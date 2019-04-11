function init(){
  alert("Annesha Mondal:"+message);
}

var message= document.getElementById("entryinput");
document.getElementById("textoutput").value=message;

var button= document.getElementById("entrybutton");
button.addEventListener('click', init);



window.addEventListener('load', init);
