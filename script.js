/* .js files add interaction to your website */
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;

  displayScript.innerHTML = "Hi " + name + ", these are some fast fashion brands to avoid : SHEIN, TEMU, ZARA, H&M, BOOHOO and so many more ";
}
