function loadXMLDoc(AL) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xmlhttp);
      myFunction(this);
    }
  };
  xmlhttp.open("GET", "AL.xml", true);
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
      "</td><td>" +
      x[i].getElementsByTagName("vitorias")[0].childNodes[0].nodeValue +
      "</td></tr>";
    x[i].getElementsByTagName("percentagem")[0].childNodes[0].nodeValue +
      "</td></tr>";
  }
}