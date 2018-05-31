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
            $('.modal').modal('show');
            $(".err").fadeIn();
            $(".thanks").hide();
            $(".demo").hide(); 
            $("#oo").hide();
            $("#mm").hide();
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

        $('.modal').modal('show');
        $(".thanks").fadeIn();
        $("#oo").hide();
        $("#mm").hide();
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
        $(".demo").fadeIn();
        $(".thanks").hide();
        $(".err").hide();
        $(".modal-title").hide();
    });

    $('#aaa').click(function () {
        $("#mm").hide();
        $("#oo").fadeIn();
        $(".demo").fadeIn();
        $(".thanks").hide();
        $(".err").hide();
        $(".modal-title").hide();
    })

    $('#videos').click(function () {
        $("#mm").fadeIn();
        $("#oo").fadeIn();
        $(".demo").fadeIn();
        $(".thanks").hide();
        $(".err").hide();
        $(".modal-title").hide();
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
    });

    // This function closes the navbar collapse menu after clicking on a link
    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});