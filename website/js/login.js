function formCheck(form) {
    const username = form.username.value;
    const password = form.password.value;
    const repassword = form.repassword.value;
    const genderMale = form.male.checked;
    const genderFemale = form.female.checked;
    let error = "";
    const regex = /^[A-Za-z0-9_\-]{2,50}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d_-]{6,32}$/;

    console.log(username + ", " + password + ", " + repassword + ", "  + genderMale + ", " + genderFemale);
    if (username == "" || password == "" || repassword == "" || !genderMale && !genderFemale) 
        error = "Please fill in all fields.";
    else if (!regex.test(username)) 
        error = "Username must be between 2 and 50 characters long and contain only letters, 0-9, _ or -.";
    else if (!passwordRegex.test(password)) 
        error = "Password must be between 6 and 32 characters long, contain at least one letter and one number, and may include _ or -.";
    else if (password != repassword) 
        error = "Passwords do not match.";
    else if (!genderMale && !genderFemale) 
        error = "Please select your gender.";
    if (error == "") 
        return true;
    else {
        document.getElementById("error_message").textContent = error;
        return false;
    }
}