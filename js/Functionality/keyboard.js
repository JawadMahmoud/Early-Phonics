$(function(){
    var $write = $('#write');
        // shift = false,
        // capslock = false;

    $('#keyboard button').click(function(){
        var $this = $(this),
            character = $this.text(); // If it's a lowercase letter, nothing happens to this variable
            console.log(character);

        // // Shift keys
        // if ($this.hasClass('left-shift') || $this.hasClass('right-shift')) {
        //     $('.letter').toggleClass('uppercase');
        //     $('.symbol span').toggle();
        //
        //     shift = (shift === true) ? false : true;
        //     capslock = false;
        //     return false;
        // }

        // Caps lock
        // if ($this.hasClass('capslock')) {
        //     $('.letter').toggleClass('uppercase');
        //     capslock = true;
        //     return false;
        // }

        // Delete
        if ($this.attr('id') === 'del-button') {
            //var html = $write.html();
            var val = $write.val();

            //$write.html(html.substr(0, html.length - 1));
            $write.val(val.substr(0, val.length - 1));
            return false;
        }

        // Special characters
        // if ($this.hasClass('symbol')) character = $('span:visible', $this).html();
        // if ($this.hasClass('space')) character = ' ';
        // if ($this.hasClass('tab')) character = "\t";
        // if ($this.hasClass('return')) character = "\n";

        // Uppercase letter
        // if ($this.hasClass('uppercase')) character = character.toUpperCase();

        // Remove shift once a key is clicked.
        // if (shift === true) {
        //     $('.symbol span').toggle();
        //     if (capslock === false) $('.letter').toggleClass('uppercase');
        //
        //     shift = false;
        // }

        // Add the character
        //$write.html($write.html() + character);     //textarea
        if ($write.val().length < 11) {
            $write.val($write.val() + character);
        } else {
            return false;
        }
               //input text
    });
});