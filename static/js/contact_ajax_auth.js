$(document).ready(function(){


    $('#contact').on('click', function(e){
        e.preventDefault();

        var uniqueid = (new Date()).getTime().toString();

        $first = $('#first').val();
        $last = $('#last').val();
        $email = $('#email').val();
        $subject = $('#subject').val();
        $message = $('#message').val();
        console.log(uniqueid)
        console.log("id is calling")

        if( $('#first').val() == "" || $('#last').val() == "" || $('#email').val() == "" || $('#subject').val() == "" || $('message').val() == "")
             {
            $('#error').text("Please fill the fields*");
             return false;
          }

         if(IsEmail($email)==false){
          $('#error').text("Invalid Email ID");
          return false;
         }

        else{
            $.ajax({
                type: "POST",
                url : "/contact/contact",
                enctype: "multipart/form-data",
                cache : false,
                data: {
                    uniqueid,
                    first_name: $first,
                    last_name: $last,
                    email_address: $email,
                    subject:$subject,
                    description:$message,
                    csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()

                },

                success: function(data){
                 $('#success').text(data);


                }
            });

          }

       });

    });

  /*Email validation*/

 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}
