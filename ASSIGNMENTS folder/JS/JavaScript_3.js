function displayType(symptom){
    var cabinetItem = symptom.getAttribute("data-cabinet");
    var symptomName = symptom.innerHTML;
    alert("I have " + cabinetItem + " for that " + symptomName + "!");
}

//The 'this' item is to pass a parameter through the function. Above it is described as the attribute 'symptom' and I further named a variable 'symptom name' to identify it in the code.
