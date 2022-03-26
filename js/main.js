$(document).ready(function () {
    $(".designImg").click(function () {
        $(".design_text").show();
        $(".designImg").hide();
    })
    $(".design_text").click(function () {
        $(".designImg").show();
        $(".design_text").hide();
    })
    $(".devImg").click(function () {
        $(".devImg").hide();
        $(".dev_text").show();
    })
    $(".dev_text").click(function () {
        $(".dev_text").hide();
        $(".devImg").show();
    })
    $(".manageImg").click(function () {
        $(".manageImg").hide();
        $(".manage_text").show();

    })
    $(".manage_text").click(function () {
        $(".manage_text").hide();
        $(".manageImg").show();
    })
    $(".portfolio-item1").mouseover(function () {
        $(".overlay1").show();

    })
    $(".portfolio-item1").mouseout(function () {
        $(".overlay1").hide();

    })
    $(".portfolio-item2").mouseover(function () {
        $(".overlay2").show();

    })
    $(".portfolio-item2").mouseout(function () {
        $(".overlay2").hide();

    })
    $(".portfolio-item3").mouseover(function () {
        $(".overlay3").show();

    })
    $(".portfolio-item3").mouseout(function () {
        $(".overlay3").hide();

    })
    $(".portfolio-item4").mouseover(function () {
        $(".overlay4").show();

    })
    $(".portfolio-item4").mouseout(function () {
        $(".overlay4").hide();

    })
    $(".portfolio-item5").mouseover(function () {
        $(".overlay5").show();

    })
    $(".portfolio-item5").mouseout(function () {
        $(".overlay5").hide();

    })
    $(".portfolio-item6").mouseover(function () {
        $(".overlay6").show();

    })
    $(".portfolio-item6").mouseout(function () {
        $(".overlay6").hide();

    })
    $(".portfolio-item7").mouseover(function () {
        $(".overlay7").show();

    })
    $(".portfolio-item7").mouseout(function () {
        $(".overlay7").hide();

    })
    $(".portfolio-item8").mouseover(function () {
        $(".overlay8").show();

    })
   
    $(".portfolio-item8").mouseout(function () {
        $(".overlay8").hide();

    })
})

let button = document.querySelector(".button");
button.addEventListener('click', function (e) {

    let namee = document.querySelector(".nameInput");
    e.preventDefault();
    if (namee.value.trim().length <= 0) {
        alert(`You have not entered anything all the details`)
     
    } else {
        alert(`Thank you ${namee.value} for contacting us!`);
    }

})