function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    var displayDataDiv = document.getElementById("displayData");
    displayDataDiv.innerHTML = "<p><strong>Name:</strong> " + name + "</p>" +
                               "<p><strong>Email:</strong> " + email + "</p>" +
                               "<p><strong>Age:</strong> " + age + "</p>";
}
