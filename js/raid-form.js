$(document).ready(function () {

	$("#raid-form").submit(function(e) {
		var url = '';

		var data = {};

	    $.ajax({
	           type: "POST",
	           url: url,
	           data:   data,
	           success: function(data) {
	               alert('success');
	           }
	         });

	    e.preventDefault();
	});
});