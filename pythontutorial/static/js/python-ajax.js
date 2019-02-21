/*python - overview*/
$(document).ready(function(){
    $('#overview').on('click', function(evt) {
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

/*python-environment*/

$(document).ready(function(){
    $('#environment').on('click', function(evt) {
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
    $('#syntex').on('click', function(evt) {
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

/*
variable types*/

$(document).ready(function(){
    $('#variable').on('click', function(evt) {
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
    $('#operators').on('click', function(evt) {
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
    $('#decisionmaking').on('click', function(evt) {
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
    $('#loops').on('click', function(evt) {
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
    $('#numbers').on('click', function(evt) {
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
    $('#string').on('click', function(evt) {
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
    $('#list').on('click', function(evt) {
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
    $('#tuples').on('click', function(evt) {
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
    $('#dictionay').on('click', function(evt) {
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
    $('#datetime').on('click', function(evt) {
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
    $('#function').on('click', function(evt) {
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
    $('#modules').on('click', function(evt) {
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
    $('#files').on('click', function(evt) {
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

/*
Exceptions*/

$(document).ready(function(){
    $('#exception').on('click', function(evt) {
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
