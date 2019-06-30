$(document).ready(function(){

    toastr.options.positionClass = 'toast-bottom-left';
 
   $('#Reply').on('click',function(){

    var msgText = $('#Message');
 
       var msg = msgText.val()
       if (msg == '') {
           toastr.error("Message can not be empty")
           return;
       }
 
       var data = {
           "msg": msg
       }
       $.ajax({
           url: '/chatbot',
           data: JSON.stringify(data),
           method: 'POST',
           success: function (res) {
               drawMessage(res)
           },
           error: function (err) {
               if (err.desc == null)
                   err.desc = "Something went wrong"
               toastr.error(err.desc)
           }
       });
 
   });
 });
 
 
   var msgContent = $('#MessageContent');
 
   function drawMessage(res) {
       msgContent.append("<div class='col-md-6 owner-message'><p>"+res.ques+"</p><p class='time'>"+res.time+"</p></div>");
       msgContent.append("<div class='col-md-6 guest-message'><p>"+res.res+"</p><p class='time'>"+res.time+"</p></div>")
       msgText.val('')
   }