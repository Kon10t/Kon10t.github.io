function loadDoc() {
    
    const xhttp = new function() {
        document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("POST", "ajax_text.asp", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
};