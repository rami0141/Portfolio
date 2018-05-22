$(document).ready(function () {
$(".alert").hide();
    var name = $("#name");
    var email = $("#email");
    var number = $("#number");
    var message = $("#message");

    $('#submit').click(function () {
  		event.preventDefault();

        if (!name.val().trim() || !email.val().trim() || !number.val().trim() || !message.val().trim())  {
            //alert("please fill out form")
            $('#error').modal('show'); 
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

        $('#myModal').modal('show'); 
        $("#name").val("");
        $("#email").val("");
        $("#number").val("");
        $("#message").val("");   
	});


});