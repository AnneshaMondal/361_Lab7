function init(){
  alert("Annesha Mondal:"+message);
}

var message= document.getElementById("entryinput").value;
document.getElementById("textoutput").value=message;





window.addEventListener('load', init);
