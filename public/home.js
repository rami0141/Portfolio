$(document).ready(function () {

    $('#submit').click(function () {
  		event.preventDefault();
  		var newMessage = {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	number: $("#number").val(),
	    	message: $("#message").val()
		}
    	$.post("/send", newMessage).done(function (data) {
    	});
    	
    	$("#name").val("");
    	$("#email").val("");
    	$("#number").val("");
    	$("#message").val("");
	})
});