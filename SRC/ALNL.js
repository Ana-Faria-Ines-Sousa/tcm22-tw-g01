
function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xmlhttp);
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "./SRC/AL.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  console.log(xml);
  var table = "<tr><th>Nome</th><th>V</th></tr>";
  var x = xmlDoc.getElementsByTagName("line");
  for (i = 0; i < x.length; i++) {
    table += "<tr><td>" +
      x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
      "</td>Nome<td>" +
      x[i].getElementsByTagName("vitorias")[0].childNodes[0].nodeValue +
      "</td>V</tr>";
      x[i].getElementsByTagName("derrotas")[0].childNodes[0].nodeValue +
      "</td>D</tr>";
    x[i].getElementsByTagName("percentagem")[0].childNodes[0].nodeValue +
      "</td>%</tr>";
  }
  console.log(table);
  document.getElementById('demo').innerHTML = table
}


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xmlhttp);
      myFunction(xmlhttp);
    }
  };
  xmlhttp.open("GET", "./SRC/AL.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  console.log(xml);
  var table = "<tr><th>Nome</th><th>V</th></tr>";
  var x = xmlDoc.getElementsByTagName("line");
  for (i = 0; i < x.length; i++) {
    x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
    "</td>Nome<td>" +
    x[i].getElementsByTagName("vitorias")[0].childNodes[0].nodeValue +
    "</td>V</tr>";
    x[i].getElementsByTagName("derrotas")[0].childNodes[0].nodeValue +
    "</td>D</tr>";
  x[i].getElementsByTagName("percentagem")[0].childNodes[0].nodeValue +
    "</td>%</tr>";
  }
  console.log(table);
  document.getElementById('demo2').innerHTML = table
}
