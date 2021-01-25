//The user is authenticated and the authentication has not expired.


////////////////////Get API////////////////////

accessData();

///////////////////////////////////////////////


function display(users) {

    let tabledata = "";
    users.forEach(function(userlist) {
        tabledata +=
            ` <tr>
        <td>${userlist.userId}</td>
        <th scope="row">${userlist.name}</th>
        <td>${userlist.email}</td>
        <td>${userlist.mobile}</td>
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
    newData = temp.filter(function(user) {
        let name = user.name.toUpperCase().indexOf(result.toUpperCase());
        let email = user.email.toUpperCase().indexOf(result.toUpperCase());
        let number = user.phoneNumber.indexOf(result);
        //  let location = user.location.toUpperCase().indexOf(result.toUpperCase());
        //  let ipAdd = user.ipAddress.indexOf(result);
        let userId = user.userId.indexOf(result);
        if (name > -1) {
            return name != -1;

        } else if (email > -1) {
            return email != -1;

        } else if (number > -1) {
            return number != -1;
        }
        // } else if (location > -1) {
        //     return location != -1;

        // } else if (ipAdd > -1) {
        //     return ipAdd != -1;

        // } else if (userId > -1) {
        //     return id != -1;

        // }

        display(newData);

    })
}