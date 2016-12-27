$(document).ready(function() {
    $('#send_message').click(function(e){
        e.preventDefault();
        var error = false;
        var fio = $("#fio").val();
        var company = $("#company").val();
        var tel = $("#tel").val();
        var email = $("#email").val();

        if((fio.length == 0)||(tel.length == 0)){
            var error = true;
            $('#email_error').fadeOut(500);
            $('#email_error').fadeIn(500);
        }else{
            $('#email_error').fadeOut(500);
        }

         if(error == false){
            $('#send_message').attr({'disabled' : 'true', 'value' : '' });

             $.post("/send_email.php", $("#contact_form").serialize(),function(result){
                 if(result == 'sent'){
                     $('#mail_success').fadeIn(500);
                }else{
                     $('#mail_fail').fadeIn(500);
                    $('#send_message').removeAttr('disabled').attr('value', '');
                }
            });
        }
    });
});