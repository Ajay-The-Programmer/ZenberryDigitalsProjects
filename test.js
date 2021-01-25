$(document).ready(function() {

    $('#but_add').click(function() {

        // Create clone of <div class='input-form'>
        var newel = $('.duplicate:last').clone();
        // Add after last <div class='input-form'>
        $(newel).insertAfter(".duplicate:last");
    });
});

$(document).ready(function() {

    $('#but_add1').click(function() {

        // Create clone of <div class='input-form'>
        var newel = $('.duplicate1:last').clone();

        // Add after last <div class='input-form'>
        $(newel).insertAfter(".duplicate1:last");
    });
});

$(document).ready(function() {

    $('#but_add2').click(function() {

        // Create clone of <div class='input-form'>
        var newel = $('.duplicate2:last').clone();

        // Add after last <div class='input-form'>
        $(newel).insertAfter(".duplicate2:last");
    });
});

$(document).ready(function() {

    $('#but_add3').click(function() {

        // Create clone of <div class='input-form'>
        var newel = $('.duplicate3:last').clone();

        // Add after last <div class='input-form'>
        $(newel).insertAfter(".duplicate3:last");
    });
});


let a = 0;
$(document).ready(function() {

    $('#but_add0').click(function() {

        // Create clone of <div class='input-form'>
        var newel = $('.duplicate0:last').clone();
        //  let newe1=  document.getElementById("content").innerText=`Banner ${a}` ;
        //  $(this).attr('for', function (index, old) {
        //     return old.replace(input,function (str, p1) {
        //         return '[' + (parseInt(p1, 10) + 1) + ']';
        //     });
        // })

        //  a+=1;
        //   document.getElementById("content").innerText=`Banner ${a}` ;
        // Add after last <div class='input-form'>
        $(newel).insertAfter(".duplicate0:last");
    });
});


$(document).ready(function() {

    $('.banner').click(function() {

        // Create clone of <div class='input-form'>
        var newel = $('#content:last').clone();
        let newe1 = document.getElementById("content").innerText = `Banner ${a}`;
        //  $(this).attr('for', function (index, old) {
        //     return old.replace(input,function (str, p1) {
        //         return '[' + (parseInt(p1, 10) + 1) + ']';
        //     });
        // })

        //  a+=1;
        //   document.getElementById("content").innerText=`Banner ${a}` ;
        // Add after last <div class='input-form'>
        $(newel).insertAfter("#content:last");
    });
});

let x = 0;
let y = 1;

web = () => {

    let sel = document.getElementById("inputState");
    let option = sel.options[sel.selectedIndex].text;
    if (option == "web Series") {

        // document.getElementById("add").innerHTML = `<button id="but_add4" onclick="add()" type="button" class="btn btn-success"><b>+</b></button>`;
        $("#add").html('<button id="but_add4" onclick="add()" type="button" class="btn btn-success"><b>+</b></button>');

    } else {

        //  0 == 1
        if (x == y) {

            document.getElementById("add").innerHTML = "";
            removeed();
            console.log("y" + y);
            y += 1;
        }

    }

}

// document.getElementById("but_add4").onclick = () => {
add = () => {
    let newel = $('.duplicate4:last').clone();
    $(newel).insertAfter(".duplicate4:last");

    x += 1;
    console.log("x" + x);

};

removeed = () => {
    $(".duplicate4:last").remove();
}