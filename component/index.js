$(document).ready(function () {
    var d = new Date();
    $('#month').text(new Date().getMonth() + 1);
    $('#date').text(new Date().getDate());
    $('#year').text(new Date().getFullYear());
    var month = (d.getMonth() + 1).toString();
    var date = (d.getDate()).toString();
    var year = (d.getFullYear()).toString();
    for(let i = 1; i <= 3; i++)
    {
        switch(i)
        {
            case 1: var url = "http://numbersapi.com/" + month + "/trivia?notfound=floor&fragment";
                    $.get(url, function(data) {
                        $("#month-text").text("is " + data);
                    });
                    break;
            case 2: var url = "http://numbersapi.com/" + date + "/trivia?notfound=floor&fragment";
                    $.get(url, function(data) {
                        $("#date-text").text("is " +  data);
                    });
                    break;
            case 3: var url = "http://numbersapi.com/" + year + "/trivia?";
                    $.get(url, function(data) {
                        $("#year-text").text(data); 
                    });
                    break;
        }

    }
    document.getElementById('input').value='';
    $("#btn").click(function(){
        var str = $("#input").val();
        var url = "https://www.bing.com/search?q="+str;
        window.open(url);
    });
    $("#copyright").html('@ Microsoft '+ new Date().getFullYear());
});