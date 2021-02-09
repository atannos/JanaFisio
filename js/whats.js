$(document).ready(function() {
    $("#btn").click(function(){
        var question = $("#question").val();

        var win = window.open('https://api.whatsapp.com/send?phone=558197868729&text=' + question, '_blank');
        win.focus();

    })
});