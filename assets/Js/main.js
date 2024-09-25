var registerForm = document.querySelector(".registerForm");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#Password")
var users = [];
registerForm.onsubmit = function (event) {
    console.log('hi');
    event.preventDefault();
    var user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,

    };

    users.push(user);
    console.log(users);

    printData();

}

function printData() {
    var data = '';
    for (var i = 0; i < users.length; i++) {
        data += `
        <tr>
        <td>${users[i].name}</td>
        <td>${users[i].email}</td>
        <td>${users[i].password}</td>
        </tr>
        `;
    }
    document.querySelector('tbody').innerHTML = data;
}
