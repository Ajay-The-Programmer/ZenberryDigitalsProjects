//Is the user authenticated?
if (localStorage.getItem('AuthenticationState') === null) {
    window.open("../login.html", "_self");
}
//Is their authentication token still valid?
else if (Date.now > new Date(localStorage.getItem('AuthenticationExpires'))) {
    window.open("../login.html", "_self");
} else {


    //The user is authenticated and the authentication has not expired.


    function toggleMenu() {
        let vertical = document.querySelector('.vertical');
        let toggle = document.querySelector('.toggle');
        vertical.classList.toggle('active');
        toggle.classList.toggle('active');

    }

    function leftNavFunction() {


        let img = document.querySelector(".menuicone");
        let changeDash = document.querySelector(".section");
        let admin = document.querySelector(".user");
        var x = document.getElementById("panel");

        let vertical = document.querySelector('.toggle')
        if (vertical.classList.value == "toggle active") {
            changeDash.style.width = "78%";
            changeDash.style.left = "260px";

            x.style.width = "99%";
            x.style.left = "30px";

            admin.style.width = "78%";
            admin.style.left = "260px";
            img.src = "closemenu.png ";
        } else {
            changeDash.style.width = "92%";
            changeDash.style.left = "83px";

            x.style.width = "100%";
            x.style.left = "1px";

            admin.style.width = "92%";
            admin.style.left = "83px";
            img.src = "menu.png ";
        }
    }

    function panel() {
        var x = document.getElementById("panel");
        let changeDash = document.querySelector(".bdy");


        if (x.style.display === "") {
            x.style.display = "block";
            changeDash.style.display = "none";

        } else {
            x.style.display = ""
            changeDash.style.display = "block";
        }
    }


    function permission(event) {
        event.preventDefault();
        let per = document.getElementById("p1");
        let per2 = per.style.display;

        if (per.style.display == "flex") {
            per.style.display = "none";

        } else {

            per.style.display = "flex";
        }
    }
    logout = () => {

        localStorage.clear();
        window.open("../login.html", "_self");

    }
}