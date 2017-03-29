$(document).ready(function () {
	// this is the id of the form
	$("#raid-form").submit(function(e) {
		var url = 'https://sheets.googleapis.com/v4/spreadsheets/1WgBRT7onjhSzouNPcEdIvcb_Ae0Js7C3OOxXzVpAvhw/values/A%3AB:append?valueInputOption=USER_ENTERED&alt=json&key=AIzaSyAVgBnngVDj_8yq9LMlV5akpchmgFwEeqc';

		var data = { "values": [
	                    [ '666', '555' ]
	                 ]
	               }
	    $.ajax({
	           type: "POST",
	           url: url,
	           data:   data, //$("#raid-form").serialize(), // serializes the form's elements.
	           success: function(data) {
	               alert('success'); // show response from the php script.
	           }
	         });

	    e.preventDefault(); // avoid to execute the actual submit of the form.
	});
});