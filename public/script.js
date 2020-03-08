$(document).ready(function(){
    $('#quoteButton').click(function (evt) {
    //define the containers of the info we target
    var quote = $('#quoteContainer p').text();
    var quoteGenius = $('#quoteGenius').text();
    //prevent browser's default action
    evt.preventDefault();
    //set a new quote
    var timeAnimation = 500;
    var quoteContainer = $('#quoteContainer');
    $.get(
        "http://localhost:8000/api/quote", function (data) {
            //fade out animation with callback
            quoteContainer.fadeOut(timeAnimation, function () {
                quoteContainer.html('');
                quoteContainer.append('<p>' + data.quote + '</p>' + '<p id="quoteGenius">' + '-' + data.author + '</p>');                
                //fadein animation.
                quoteContainer.fadeIn(timeAnimation);

            })
        });

});//end quoteButton function
});