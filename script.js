function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    // Display data on the console (you can modify this to do other things)
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Age: " + age);

    // Optionally, you can redirect to another page
    // window.location.href = "display.html";
}
