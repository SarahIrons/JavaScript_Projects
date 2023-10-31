function formValidation(e) {
    var firstname=document.phoneForm.firstname.value;
    var lastname=document.phoneForm.lastname.value;
    var telNo=document.phoneForm.telNo.value;
    if (firstname==null ||firstname==""){
        e.preventDefault();
        alert("Name field cannot be blank.");
        return false;
    }else if (lastname==null ||lastname==""){
        e.preventDefault();
        alert("Name field cannot be blank.")
        return false;
    };
    if(telNo.length != 12) {
        e.preventDefault();
        alert("Phone number must be 10 characters long.");
        console.log(telNo.length)
        return false;
    }
}
// I added the js method "prevent default". Reason: I was still able to submit a form with invalid entries or missing fields. this works alongside the 'onsubmit' button on the form and will STOP the form from being submitted if an error is caught through the function of form validation above.