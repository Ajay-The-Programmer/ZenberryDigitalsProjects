let users = [{

        name: "Ajay",
        userId: "23",
        email: "ajdevkar@hotmail.com",
        phoneNumber: "7798325001",
        ipAddress: "192.178.40.1",
        location: "Jalgaon",
    },
    {

        name: "Chetan",
        userId: "24",
        email: "ajay@gmail.com",
        phoneNumber: "8080941296",
        ipAddress: "193.188.41.1",
        location: "Mumbai",
    },
    {

        name: "Aishwarya",
        userId: "25",
        email: "more@gmail.com",
        phoneNumber: "9758468126",
        ipAddress: "194.198.41.1",
        location: "Nasik",
    }, {

        name: "Bhavin",
        userId: "26",
        email: "joshi@gmail.com",
        phoneNumber: "8012479583",
        ipAddress: "195.200.41.1",
        location: "Pune",
    }
];

display(users);

function display(users) {

    let tabledata = "";
    users.forEach(function(userlist) {

        tabledata +=
            ` <tr>
                <td>${userlist.userId}</td>
                <th scope="row">${userlist.name}</th>
                <td>${userlist.email}</td>
                <td>${userlist.phoneNumber}</td>
                <td>${userlist.ipAddress}</td>
                <td>${userlist.location}</td>
                <td class="three" style="text-align: center;">
                    <button type="button" class="btn btn-primary btn-sm">Edit</button>
                    <button type="button" class="btn btn-danger btn-sm">Activity</button>
                    <button type="button" class="btn btn-success btn-sm">Roles</button>
                </td>
            </tr>`
    });
    document.getElementsByClassName("tablebody")[0].innerHTML = tabledata;
}

function searchUser() {
    let result = document.getElementById("search").value;
    let newData;
    newData = users.filter(function(user) {
        let name = user.name.toUpperCase().indexOf(result.toUpperCase());
        let email = user.email.toUpperCase().indexOf(result.toUpperCase());
        let number = user.phoneNumber.indexOf(result);
        let location = user.location.toUpperCase().indexOf(result.toUpperCase());
        let ipAdd = user.ipAddress.indexOf(result);
        let id = user.userId.indexOf(result);
        if (name > -1) {
            return name != -1;

        } else if (email > -1) {
            return email != -1;

        } else if (number > -1) {
            return number != -1;

        } else if (location > -1) {
            return location != -1;

        } else if (ipAdd > -1) {
            return ipAdd != -1;

        } else if (id > -1) {
            return id != -1;

        }

    });

    display(newData);

}