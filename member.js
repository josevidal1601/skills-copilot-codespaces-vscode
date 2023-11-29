function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberbtn = document.getElementById("memberbtn");
    var skillsbtn = document.getElementById("skillsbtn");
    var contactbtn = document.getElementById("contactbtn");
    var aboutbtn = document.getElementById("aboutbtn");
    member.style.display = "block";
    skills.style.display = "none";
    contact.style.display = "none";
    about.style.display = "none";
    memberbtn.style.backgroundColor = "#4CAF50";
    skillsbtn.style.backgroundColor = "#333";
    contactbtn.style.backgroundColor = "#333";
    aboutbtn.style.backgroundColor = "#333";
}