function validateForm() {
    let isValid = true;
    
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    
    document.getElementById("nameError");
    document.getElementById("emailError");
    document.getElementById("passwordError");
    
    if (name.trim() === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }
    
 
    
    return isValid;}