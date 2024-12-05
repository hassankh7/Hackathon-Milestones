// Get references to a form and display area 
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle Form Submmision
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("Resume display element is missing");
    }
});
