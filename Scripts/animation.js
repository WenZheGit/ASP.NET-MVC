$(function () {
    var state = true;
    $("#button1").click(function () {
        if (state) {
            $("#effect1").animate({
                height: 510
            }, 1000);
        } else {
            $("#effect1").animate({
                height: 300
            }, 1000);
        }
        state = !state;
    });
});

$(function () {
    var state = true;
    $("#button2").click(function () {
        if (state) {
            $("#effect2").animate({
                height: 510
            }, 1000);
        } else {
            $("#effect2").animate({
                height: 300
            }, 1000);
        }
        state = !state;
    });
});

$(function () {
    var state = true;
    $("#button3").click(function () {
        if (state) {
            $("#effect3").animate({
                height: 510
            }, 1000);
        } else {
            $("#effect3").animate({
                height: 300
            }, 1000);
        }
        state = !state;
    });
});