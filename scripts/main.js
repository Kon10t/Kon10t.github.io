function loadDoc() {
    
    const xhttp = new function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "index.html");
    xhttp.send();
}