$(document).ready(function(){
    $(".designImg").click(function(){
        $(".design_text").show();
        $(".designImg").hide();
    })
    $(".design_text").click(function(){
        $(".designImg").show();
        $(".design_text").hide();
    })
    $(".devImg").click(function(){
        $(".devImg").hide();
        $(".dev_text").show();
    })
    $(".dev_text").click(function(){
        $(".dev_text").hide();
        $(".devImg").show();
    })
})


