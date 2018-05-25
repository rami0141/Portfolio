$(document).ready(function () {
    $(".alert").hide();
    $("#portfolio").hide();
    $("#contactMe").hide();

    var name = $("#name");
    var email = $("#email");
    var number = $("#number");
    var message = $("#message");

    $('#submit').click(function () {
  		event.preventDefault();

        if (!name.val().trim() || !email.val().trim() || !number.val().trim() || !message.val().trim())  {
            //alert("please fill out form")
            $('#error').modal('show');
            $(".thanks").hide(); 
            return;          
        }

  		var newMessage = {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	number: $("#number").val(),
	    	message: $("#message").val()
		}

    	$.post("/send", newMessage).done(function (data) {   		
    	});

        $('#error').modal('show');
        $(".thanks").fadeIn();
        $(".err").hide();
        $(".modal-title").hide();
        $("#name").val("");
        $("#email").val("");
        $("#number").val("");
        $("#message").val("");   
	});

    $('#motors').click(function () {
        $("#oo").hide();
        $("#mm").fadeIn();
    });

    $('#aaa').click(function () {
        $("#mm").hide();
        $("#oo").fadeIn();
    })

    $('#videos').click(function () {
        $("#mm").fadeIn();
        $("#oo").fadeIn();
    });

     $('.about').click(function () {
        $("#about").fadeIn();
        $("#portfolio").hide();
        $("#contactMe").hide();
    })

    $('.portfolio').click(function () {
        $("#about").hide();
        $("#portfolio").fadeIn();
        $("#contactMe").hide();
    });

     $('.contactMe').click(function () {
        $("#about").hide();
        $("#portfolio").hide();
        $("#contactMe").fadeIn();
    })

});