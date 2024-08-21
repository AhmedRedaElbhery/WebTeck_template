
$(document).ready(function () {

    /*alert("alert");*/


    $(window).on('load', function () {
        $(".container").fadeOut(2);
        $(".head").fadeOut(2);
        $(".container").fadeIn(1000);
        $(".head").fadeIn(800);
    });

    var b = false;
    $("#icon").click(function () {
        $("#list").css({
            marginLeft: "-93%",
        });
        b = true;
    });

    $("#exit").click(function () {
        $("#list").css({
            marginLeft: "-150%",
        });
        b = false;

        $(".Home").children("div").hide();
        $(".Services").children("div").hide();
    });


    $("#exit").hover(function () {
        $("#exit").css({
            color: "black",
        });

    }, function () {
        $("#exit").css({
            color: color,
        });
    });

    $(document).click(function (event) {
        if (b === true) {
            if (!$(event.target).closest("#list").length) {
                if (!$(event.target).closest("#icon").length) {
                    $("#list").css({
                        marginLeft: "-150%",
                    });
                    b = false;
                    $(".Home").children("div").hide();
                    $(".Services").children("div").hide();


                }

            }
        }
    });


    $(".Home").children("div").hide();

    $(".Home .p i").click(function () {
        $(".Home .father").toggle();
        $(".Home .child2").hide();


        $(".Home .father .child1 i").click(function () {
            $(".Home .child2").toggle();


        });
    });

    $(".Services").children("div").hide();

    $(".Services .p i").click(function () {
        $(".Services .father").toggle();
        $(".Services .child2").hide();


        $(".Services .father .child1 i").click(function () {
            $(".Services .child2").toggle();


        });
    });



    $("#tel").click(function () {
        window.location.href = "tel:+25862323258";
    });

    var color = "#08ad2d";

    $("#btn1").click(function () {
        $(":root").css("--main-color", "#3e66f3");
        color = "#3e66f3";
    });

    $("#btn2").click(function () {
        $(":root").css("--main-color", "#08ad2d");
        color = "#08ad2d";
    });

    $("#btn3").click(function () {
        $(":root").css("--main-color", "#8a2be2");
        color = "#8a2be2";
    });

    $("#btn4").click(function () {
        $(":root").css("--main-color", "#fc3737");
        color = "#fc3737";
    });



    var t = 1;
    $(".up").hide()
    $(".c").fadeOut();
    $(".btn-color").click(function () {
        if (t % 2 === 0) {
            $(".btn-color").css("marginRight", "3px");
            $(".c").toggle(1000);
            t += 1;
        }
        else {
            $(this).css("marginRight", "203px");
            t += 1;
            $(".c").toggle(1000);
        }

    });

    $(".a").hover(function () {

        $(this).css({
            color: color,
        });
    },
        function () {
            $(".a").css({
                color: "white",
            });
        }
    );

    window.onscroll = function () {

        if (window.scrollY >= 600) {
            $(".up").show();
            $("#1").css({
                position: "fixed",
                top: -28,
                backgroundColor: "#141d38",
                width: "99.9%",

                height: "70px",
            });
        }
        else {
            $(".up").hide();
            $("#1").css({
                position: "static",
                backgroundColor: "#16181d",
            });
        }

        $(".up").click(function () {
            $(".up").hide();
            window.scrollTo({ top: 0 });
        });
    };





    /*-----------------------------------*/


    $(".person").hover(function () {
        $(this).css({
            backgroundColor: color,
            height: "550px",
        });

        $(this).find(".icons").css({
            display: "block",
            color: "black",
        });

    }, function () {
        $(this).css({
            backgroundColor: "#16181d",
            height: "500px",
        });

        $(this).find(".icons").css({
            display: "none",

        });

    }
    );


    /*--------------------------------------*/
    $(".h").hide();

    $(".s").click(function () {

        if ($(this).next().is(":visible")) {
            $(this).next().hide();

            $(".s").css({
                backgroundColor: '#16181d',
            });

        }
        else {

            $(".h").hide();
            $(this).next().show();

            $(".s").css({
                backgroundColor: '#16181d',
            });

            $(this).css({
                backgroundColor: color,
            });
        }

    });
});

