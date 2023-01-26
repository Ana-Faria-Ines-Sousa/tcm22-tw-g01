function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          console.log(xmlhttp);
          myFunction(xmlhttp);
      }
  };
  xmlhttp.open("GET", "./SRC/xml_xsd_files/AL.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  console.log(xml);
  var table = "<thead><tr><th>Nome</th><th>V</th><th>D</th><th>%</th></tr></thead>";
  var tbody = "<tbody>";
  var x = xmlDoc.getElementsByTagName("line");
  for (i = 0; i < x.length; i++) {
      tbody += "<tr><td>" +
          x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("vitorias")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("derrotas")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("percentagem")[0].childNodes[0].nodeValue +
          "</td></tr>";
  }
  tbody += "</tbody>";
  var full = table + tbody;
  console.log(tbody);
  console.log(table);
  document.getElementById('demo3').innerHTML = full
}


function loadXMLDoc() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          console.log(xmlhttp);
          myFunction(xmlhttp);
      }
  };
  xmlhttp.open("GET", "./SRC/xml_xsd_files/NL.xml", true);
  xmlhttp.send();
}
function myFunction(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  console.log(xml);
  var table = "<thead><tr><th>Nome</th><th>V</th><th>D</th><th>%</th></tr></thead>";
  var tbody = "<tbody>";
  var x = xmlDoc.getElementsByTagName("line");
  for (i = 0; i < x.length; i++) {
      tbody += "<tr><td>" +
          x[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("vitorias")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("derrotas")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("percentagem")[0].childNodes[0].nodeValue +
          "</td></tr>";
  }
  tbody += "</tbody>";
  var full = table + tbody;
  console.log(tbody);
  console.log(table);
  document.getElementById('demo2').innerHTML = full
}