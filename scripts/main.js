function loadDoc() {
    
    const xhttp = new function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("POST", "ajax_text.txt");
    xhttp.send();
}