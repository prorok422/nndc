$(function () {


    // $.ajax({
    //     url: "http://frontend-test.pingbull.com/pages/stepan.bondarenkoo@gmail.com/comments",
    //     type: 'GET',
    //     data: {
    //         count: 5,
    //         // offset: -1 * (currentCommentsCount + 1)
    //     },
    //     success: function(comment){
    //         $("#comments").html(comment);
    //     }
    // });

    // $.getJSON( "http://frontend-test.pingbull.com/pages/stepan.bondarenkoo@gmail.com/comments", { count: 5/*, offset: -1*/}, function(data) {
    //     var items = [];
    //
    //     $.each(data, function(key, val){
    //         items.push('<li id="' + key + '">' + val.content + '<img src="' + val.author.avatar + '" alt=""><span>' + val.author.name + '</span> <ul> <li></li></ul></li>');
    //     });
    //
    //     $('<ul/>', {
    //         'class': 'my-new-list',
    //         html: items.join('')
    //     }).appendTo('#comments');
    // });

    $.ajax({
        url: "http://frontend-test.pingbull.com/pages/stepan.bondarenkoo@gmail.com/comments",
        type: 'GET',
        data: {
            //         count: 5,
            //         // offset: -1 * (currentCommentsCount + 1)
        },
        success: function (data) {
            var items = [];
            $.each(data, function (key, value) {
                // var i = key;
                items.push('<li id="' + value.id + '">' + value.content + '</li>');
                console.log( "!!!!! " + value.content );
                if (value.children  != 0){
                    var items2 = [];
                    $.each( value.children, function( key, value ) {
                        items2.push('<li id="' + value.id + '">' + value.content + '</li>');
                        console.log( key + ": " + value.content );
                    });
                }
            });

            $('<ul/>', {
                class: "resr",
                html: items.join('')
            }).appendTo('#comments');
        }
    });
});
