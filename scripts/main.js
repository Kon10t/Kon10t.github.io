function loadDoc() {
    
    const xhttp = new function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "ajax_text.txt");
    xhttp.send();
}