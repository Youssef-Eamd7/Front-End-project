function checkPass() {
    let pass = document.getElementById('password').value;
    let confirm = document.getElementById('confirm').value;

    if (pass !== confirm) {
        let error = 'Password and confirm password dose not match.';
        document.getElementById('pass-error').innerHTML = error;
    }
}
$("#contactForm").validate({
    rules: {
        firstname: {
            minlength: 2
        },

        lastname: {
            minlength: 2
        },

    },
    messages: {
        firstname: {
            required: 'Must enter first name.',
            minlength: 'First name at least 2 characters.'
        },
        lastname: {
            required: 'Must enter last name.',
            minlength: 'Last name at least 2 characters.'
        },
        subject: 'Must enter subject.',
        message: 'Must enter your message.'
    },
    submitHandler: function(form) {
        form.submit();
    }
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 || $(this).scrollTop() < 600) {
            $('.social').fadeIn();
        } else {
            $('.social').fadeOut();
        }
        if ($(this).scrollTop() > 100) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();

        }
    });

    $('#back-to-top').on('click', function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0,
        }, 1000);

    });


    $('.required').focus(function() {
        $(this).animate({
            fontSize: '12px',
            paddingLeft: '-5px'
        });
    });

    $('.required').blur(function() {
        if ($(this).val() === '') {
            // $(this).next('span').fadeIn();
            $(this).attr('placeholder', 'This filed is required.');
            $(this).addClass('my-class');
        } else {
            $(this).removeClass('my-class');
            // $(this).next('span').fadeOut();
            $(this).animate({
                fontSize: '16px',
            });
        }
    });


});