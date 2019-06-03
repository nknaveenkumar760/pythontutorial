

/*Newsletter code*/

$(document).ready(function(){
    $('#sbscription').on('click', function(e) {
       e.preventDefault();

     console.log("email call")
      $email = $('#email').val();
      console.log($email)
       if($.trim(email).length == 0) {
         $('#info').html('Please enter correct Email address')
       }
       if(validateEmail($email)) {

      $.ajax({

        type:'POST',
        url: '/newsletter/sbscription',
        data: {
                 email: $email,
                 csrfmiddlewaretoken: $('input[name=csrfmiddlewaretoken]').val()
                   },
        success: function(data){
            console.log(data);
             $('#info').html(data);
       }
    });

  }
        else {

          $('#info').html('Invalid Email Address Enter correct Email')


         }



  });

});


function validateEmail($email) {

    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    if (filter.test($email)) {
        return true;
    }
    else {
        return false;
   }
}

