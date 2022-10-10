function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    console.log(xmlHttp.responseText);
    $("#test-content").text(xmlHttp.responseText);
    return xmlHttp.responseText;
}

$(document).ready(function() {
  httpGet("https://34.125.76.7:3000/ping");
});