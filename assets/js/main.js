(function ($) {
    $(document).ready(function () {

        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            type: "GET",
            success: function (data) {
                // $('#load-data').append(data.id + "<br>" + data.title + "<br>" + data.body); //single data
                $.each( data, function(key, value){
                    $('#load-data').append(value.id+"."+ " "+ value.title+"<br>"+value.body+"<br> <br>");
                });
                
            }
        });
    });


})(jQuery);