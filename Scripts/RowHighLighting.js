
$(document).ready(function () {

    $('#data thead th').addClass('th');
    $('#data tbody tr:odd').addClass("silver");
   
    $('#data tbody tr').mouseover(function () {
        $(this).addClass('dataHover');
    });
    $('#data tbody tr').mouseout(function () {
        $(this).removeClass('dataHover');
    });

});
