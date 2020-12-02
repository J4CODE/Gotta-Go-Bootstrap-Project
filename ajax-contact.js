$(function() {

	// This will Get the form.
	var form = $('#contact-form');

	// This gets the messages div.
	var formMessages = $('.form-message');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// This will stop the browser from submitting the form.
		e.preventDefault();

		// This Serializes the form data.
		var formData = $(form).serialize();

		// This will submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// This affirms the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// This will Set the message text.
			$(formMessages).text(response);

			// This will clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// This confirms the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// This will set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occurred. Please complete all fields or your message will not be sent. Thanks.');
			}
		});
	});

});