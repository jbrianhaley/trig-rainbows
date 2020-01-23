// several functions to aid a website in displaying colors based on user input from buttons or forms

function getRandom(max) {
  return (Math.random() * max);
}

function resetPalette() {
  document.getElementById("colors").value = 32;
  document.getElementById("rfrequency").value = .2;
  document.getElementById("gfrequency").value = .2;
  document.getElementById("bfrequency").value = .2;
  document.getElementById("rdiff").value = 0;
  document.getElementById("gdiff").value = 120;
  document.getElementById("bdiff").value = 240;
  document.getElementById("colorAmplitude").value = 127;  //127 for half of 256
  document.getElementById("colorCenter").value = 128;
  showPalette()
}

function randomPalette() {
  document.getElementById("colors").value = Math.floor(getRandom(64))+1;
  document.getElementById("rfrequency").value = getRandom(1).toFixed(1)*2;
  document.getElementById("gfrequency").value = getRandom(1).toFixed(1)*2;
  document.getElementById("bfrequency").value = getRandom(1).toFixed(1)*2;
  showPalette()
  //document.getElementById("rdiff").value = Math.floor(getRandom(360));
  //document.getElementById("gdiff").value = Math.floor(getRandom(360));
  //document.getElementById("bdiff").value = Math.floor(getRandom(360));
  //document.getElementById("colorCenter").value = Math.floor(getRandom(128));
  //document.getElementById("colorAmplitude").value = Math.floor(getRandom(document.getElementById("colorCenter").value));  //127 for half of 255

}

function showPalette() {
  var paletteText = ("");
  var colors = parseInt(document.getElementById("colors").value);
  var rfrequency = document.getElementById("rfrequency").value;
  var gfrequency = document.getElementById("gfrequency").value;
  var bfrequency = document.getElementById("bfrequency").value;
  var rDiff = parseInt(document.getElementById("rdiff").value);
  var gDiff = parseInt(document.getElementById("gdiff").value);
  var bDiff = parseInt(document.getElementById("bdiff").value);
  var colorAmplitude = parseInt(document.getElementById("colorAmplitude").value);  //127 for half of 255
  var colorCenter = parseInt(document.getElementById("colorCenter").value);
  var w = window.innerWidth;
  var h = window.innerHeight;
  var colorHeight = h / colors;
  var paletteHTML = ("");  //init HTML for the display section
  for (var i = 0; i < colors; i++) {
    paletteHTML += ("<div id=\x22rectangle" + i + "\x22 class=\x22colorRectangle\x22>rectangle " + i + "</div>\r");  //individual HTML for each color
  }
  document.getElementById("content").innerHTML = paletteHTML;
  for (var i = 0; i < colors; i++) {
    var r = parseInt(Math.sin(rfrequency*i + (rDiff*Math.PI/180)) * colorAmplitude + colorCenter);
    var g = parseInt(Math.sin(gfrequency*i + (gDiff*Math.PI/180)) * colorAmplitude + colorCenter);
    var b = parseInt(Math.sin(bfrequency*i + (bDiff*Math.PI/180)) * colorAmplitude + colorCenter);
    paletteText += ("rgb(" + r + "," + g + "," + b + ")<br>");
    var name = "rectangle" + i;
    document.getElementById(name).innerHTML = "color "+ i +": rgb(" + r + "," + g + "," + b + ")";
    document.getElementById(name).style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    document.getElementById(name).style.top = i*colorHeight + "px";
    document.getElementById(name).style.width = 30 + 10*Math.sin((i*(360/colors))*Math.PI/180) + "%";
    document.getElementById(name).style.height = colorHeight-1 + "px";
    document.getElementById(name).style.fontSize = colorHeight*3/4;
  }
  document.getElementById("summary").innerHTML = paletteText;
}
