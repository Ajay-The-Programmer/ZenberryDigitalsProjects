document.getElementById("logForm").onsubmit = (e) => {
    e.preventDefault();

    loginApi();


}


checkLogInInfo = (privateData) => {

    let d = new Date();
    let a = 1;
    let userError = document.getElementsByClassName("userError")[0];
    let idError = document.getElementsByClassName("idError")[0];
    let passError = document.getElementsByClassName("passError")[0];
    let userName = document.getElementById("userName").value;
    let userPassword = document.getElementById("userPassword").value;


    for (let count = 0; count < privateData.length; count++) {

        if (privateData[count].email == userName.value || privateData[count].password == userPassword.value) {

            if (privateData[count].email == userName.value) {

                if (privateData[count].password == userPassword.value) {



                    passError.innerHTML = "";
                    idError.innerHTML = "";
                    userError.innerHTML = "";
                    userName.value = "";
                    userPassword.value = "";

                    localStorage.setItem("AuthenticationState", "Authenticated");

                    //This authentication key will expire in 1 hour.
                    localStorage.setItem("AuthenticationExpires",
                        Date.prototype.addHours = function(h) {
                            var copiedDate = new Date();
                            copiedDate.setTime(this.getTime(1000));
                            return copiedDate;
                        })

                    //Push the user over to the next page.
                    window.open("pages/DashBoard.html", "_self");

                    // window.location.href = "DashBoard.html";

                    return true;


                } else {

                    passError.innerHTML = "password is incorrect";
                    idError.innerHTML = " ";
                    userError.innerHTML = " ";
                    userPassword.value = "";


                    return false;

                }

            } else {

                idError.innerHTML = "UserID is incorrect";
                passError.innerHTML = " ";
                userError.innerHTML = " ";
                userName.value = "";

            }

        } else {
            if (a == privateData.length) {

                userError.innerHTML = "You are not user ";
                idError.innerHTML = "";
                passError.innerHTML = "";
                userName.value = "";
                userPassword.value = "";


            }

            a++;
        }
    }
    // Date.prototype.addHours = function(h) {
    //     var copiedDate = new Date();
    //     copiedDate.setTime(this.getTime() + (h * 60 * 60 * 1000));
    //     return copiedDate;
    // }
}