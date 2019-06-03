/*python - overview*/
$(document).ready(function(){
    $('#htmloverview').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('#pythontutorial').html(description);
            }
        });
    });
  });

/*python-environment*/

$(document).ready(function(){
    $('#htmltag').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*python-basic syntex*/

$(document).ready(function(){
    $('#htmlelements').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*variable types*/

$(document).ready(function(){
    $('#htmlattrubute').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Basic operators*/

$(document).ready(function(){
    $('#htmlformatting').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Decision Making*/

$(document).ready(function(){
    $('#htmlphrasetag').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*loops*/

$(document).ready(function(){
    $('#htmlmetatag').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Numbers*/

$(document).ready(function(){
    $('#htmlcomments').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Strings*/

$(document).ready(function(){
    $('#htmlimage').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Lists*/

$(document).ready(function(){
    $('#htmltable').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Tuples*/

$(document).ready(function(){
    $('#htmllist').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Dictionarys*/

$(document).ready(function(){
    $('#htmltextlink').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Date & Time*/

$(document).ready(function(){
    $('#htmlimagelink').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Functions*/

$(document).ready(function(){
    $('#htmlemaillink').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Modules*/

$(document).ready(function(){
    $('#htmlframe').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Files I/O*/

$(document).ready(function(){
    $('#htmliframe').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlblock').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlbackground').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlcolors').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlfonts').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlforms').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlmultimedia').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#marquees').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmlheader').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });


/*Exceptions*/

$(document).ready(function(){
    $('#htmlsheet').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmljavascript').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });

/*Exceptions*/

$(document).ready(function(){
    $('#htmllayout').on('click', function(evt) {
       evt.preventDefault();
        console.log("its working.")
        $.ajax({
            type: "GET",
            contentType: "application/json",
            url: $(evt.currentTarget).attr("href"),
            data: { },

            success: function(data)
            {
            console.log(data[0].title)
            console.log(data[0].description)
             var title = data[0].title
             var description = data[0].description
             $('#title').html(title);
             $('.pythontutorial').html(description);
            }
        });
    });
  });
