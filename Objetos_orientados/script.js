const person = {

    firstName: "",
    lastName: "",
    idade: "",
    setDetails(firstName, lastName, idade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idade = idade;
    },
    displayDetails() {
        document.getElementById("displayFirstName").textContent = this.firstName;
        document.getElementById("displayLastName").textContent = this.lastName;
        document.getElementById("displayidade").textContent = this.idade;
    }
};

const form = document.getElementById("personForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const idade = document.getElementById("idade").value;

    person.setDetails(firstName, lastName, idade);
    person.displayDetails();

    // document.getElementById("firstName").value = "";
    // document.getElementById("lastName").value = "";
    // document.getElementById("language").value = "";
});
