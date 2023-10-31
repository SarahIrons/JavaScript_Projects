// to get the modal
var modal = document.getElementById("myModal");

//get the button that opens the modal
var btn = document.getElementById("myBtn");

//get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];

//when user clicks on button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

//when user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}


//when user clicks anywhere outside of the modal box, close it.
window.onclick = function(event) {
    if(event.target==modal) {
        modal.style.display= "none";
    }
}