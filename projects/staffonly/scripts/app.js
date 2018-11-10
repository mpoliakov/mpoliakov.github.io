$(function() {
    // $('#food-photos').fadeTo('slow', 0.3, function()
    // {
    //     $(this).css('background-image', 'url(/images/food/2.jpg)');
    // }).delay(1000).fadeTo('slow', 1);

    //$('#food-photos').cycle();

    if ($('#food-photo').length > 0) {
        var images = new Array('images/food/1.jpg','images/food/2.jpg','images/food/3.jpg','images/food/4.jpg');
        var nextimage = 1;
        doSlideshow();

        function doSlideshow(){
            if (nextimage >= images.length)
            {
                nextimage = 0;
            }
            
            $('#food-photo').fadeTo('slow', 0, function()
            {
                $('#food-photo').css('background-image','url("' + images[nextimage++] + '")');

                setTimeout(doSlideshow, 5000);

            }).delay(1000).fadeTo('slow', 1);

            // $('#food-photo')
            //     .css('background-image','url("' + images[nextimage++] + '")')
            //     .fadeIn(5000, function() {
            //     //.fadeTo('slow', function() {
            //         setTimeout(doSlideshow, 2000);
            //     });
        }
    }

    if ($('#interior-photo').length > 0) {
        var images = new Array('images/interior/1.jpg','images/interior/2.jpg','images/interior/3.jpg','images/interior/4.jpg');
        var nextimage = 1;
        doSlideshow();

        function doSlideshow(){
            if (nextimage >= images.length)
            {
                nextimage = 0;
            }
            
            $('#interior-photo').fadeTo('slow', 0, function()
            {
                $('#interior-photo').css('background-image','url("' + images[nextimage++] + '")');

                setTimeout(doSlideshow, 5000);

            }).delay(1000).fadeTo('slow', 1);
        }
    }
});