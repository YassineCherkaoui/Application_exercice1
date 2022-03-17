// ---------------------Modal Script------------------
var modal = document.getElementById("Modal");
var btn = document.getElementById("ModalBTN");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




// -------------------Data--------------
let users = [{
        id: "123456789",
        createdDate: "2021-01-06T00:00:00.000Z",
        status: "En validation",
        firstName: "Mohamed",
        lastName: "Taha",
        userName: "mtaha",
        registrationNumber: "2584",
    },
    {
        id: "987654321",
        createdDate: "2021-07-25T00:00:00.000Z",
        status: "Validé",
        firstName: "Hamid",
        lastName: "Orrich",
        userName: "horrich",
        registrationNumber: "1594",
    },
    {
        id: "852963741",
        createdDate: "2021-09-15T00:00:00.000Z",
        status: "Rejeté",
        firstName: "Rachid",
        lastName: "Mahidi",
        userName: "rmahidi",
        registrationNumber: "3576",
    }
]
// ------- Display Table----------------
let table = document.getElementById("Data");
let row, cell;

function ShowList() {
    for (let i = 0; i < users.length; i++) {
        row = table.insertRow();
        cell = row.insertCell();
        var today = new Date(users[i].createdDate);
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;
        switch (users[i].status) {
            case "En validation":
                var Class = "etat-envalid";
                var text = "En validation";
                break;
            case "Validé":
                var Class = "etat-valid";
                var text = "Validé";
                break;
            case "Rejeté":
                var Class = "etat-refuse";
                var text = "Rejeté";
                break;
            default:
                break;
        }
        cell.textContent = users[i].id;
        cell = row.insertCell();
        cell.textContent = today;
        cell = row.insertCell();
        cell.innerHTML = '<span class="etat ' + Class + '">' + text + '</span>';
        cell = row.insertCell();
        cell.textContent = users[i].firstName;
        cell = row.insertCell();
        cell.textContent = users[i].lastName;
        cell = row.insertCell();
        cell.textContent = users[i].userName;
        cell = row.insertCell();
        cell.textContent = users[i].registrationNumber;
        cell = row.insertCell();
        cell.innerHTML = '<button style="background-color: transparent;border: none;" onclick="Delete('+users[i].id+')"><img src="icon.png" alt="trash" width="15px"></button>';
    }

}

ShowList()
// var shw = document.getElementById('ModalBTN');
// shw.onclick = function (event) {
//     testRow()
//     ShowList()

// }

function testRow() {
    // document.querySelector("#Data").remove();
    const tbody = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    tbody.innerHTML = "";
}










users.push();




function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const firstName = data.get('firstName');
    const lastName = data.get('lastName');
    const status = data.get('status');
    const userName = data.get('userName');
    const createdDate = data.get('createdDate');
    const registrationNumber = data.get('registrationNumber');
    var id = Math.floor(1000 + Math.random() * 1000000000);
    var datee = new Date(createdDate).toISOString()
    var new_data = {
        id: id,
        createdDate: datee,
        status: status,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        registrationNumber: registrationNumber,
    }
    users.push(new_data);
    modal.style.display = "none";
    testRow()
    ShowList()



}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);







function Delete(params) { 
    users = users.filter(function (r) {
        return r.id !== params;
    });  
    testRow();
    ShowList();
}
