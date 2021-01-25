//The user is authenticated and the authentication has not expired.


// Creating Function which call when User click on submit button or submit Form..!
document.getElementById("myFormData").onsubmit = (e) => {
    e.preventDefault();
    //accessing all input data which came from Input TextBox
    let name = document.getElementById("inputName").value;
    var email = document.getElementById("inputEmail").value;
    let inputNumber = document.getElementById("inputNumber").value;
    let inputText = document.getElementById("inputText").value;
    let password = document.getElementById("inputPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value;


    if (password == confirmPassword && password.length >= 8 & confirmPassword.length >= 8) {
        //Accessing CheckBox Values

        var markedCheckbox = document.getElementsByName("pl");
        let checkboxValue = " ";
        for (var checkbox of markedCheckbox) {
            if (checkbox.checked) {
                checkboxValue += checkbox.value + ", ";
            }
        }
        // console.log(checkboxValue);

        //Accessing Select Options Data

        let sel = document.getElementById("floatingSelect");
        let optionsValue = sel.options[sel.selectedIndex].text;
        // console.log(optionsValue);

        //Creating one single object and assign all data which accessed
        let data = {
            name: name,
            email: email,
            mobile: inputNumber,
            userId: inputText,
            userType: optionsValue,
            checkBoxValue: checkboxValue,
            password: password,
        };
        /////////////////////////////////////////

        //send data to post method by function call
        sendData(data);

        /////////////////////////////////////////

        document.getElementById("successMSG").innerHTML = "Form Submited Successfully"

        document.getElementById("inputName").value = "";
        document.getElementById("inputEmail").value = "";
        document.getElementById("inputNumber").value = "";
        document.getElementById("inputText").value = "";
        document.getElementById("inputPassword").value = "";
        document.getElementById("confirmPassword").value = "";

    } else {
        console.log("password wrong");

        document.getElementById("inputPassword").value = "";
        document.getElementById("confirmPassword").value = "";
        alert("Your password did not match..! Please Enter Correct Password ");
    }
};

//Function for Confirm Password

document.getElementById("confirmPassword").onkeyup = () => {
    let password = document.getElementById("inputPassword").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    // let temp = password.includes(confirmPassword);

    if (password.includes(confirmPassword)) {
        document.getElementById("pwdmsg").innerHTML = "";
    } else {
        document.getElementById("pwdmsg").innerHTML =
            "your password is not matching.";
    }
};

document.getElementById("inputNumber").onkeyup = () => {
    var temp = document.getElementById("inputNumber").value;


    var numbers = /^[0-9]+$/;
    if (temp.match(numbers)) {
        document.getElementById("number").innerHTML = " ";

        if (temp.length != 10) {
            document.getElementById("error").innerHTML = "Please Enter Valid Mobile Number";

        } else {
            document.getElementById("error").innerHTML = "";
        }
        return true;


    } else {
        document.getElementById("number").innerHTML = "Please Enter Number Only";
        return false;
    }

}