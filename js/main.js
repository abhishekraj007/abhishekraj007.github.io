
// {
// 	setTimeout(() => document.body.classList.add('render'), 60);
// }

setTimeout(function () {
	document.body.classList.add('render');
}, 60);

var userAgent, ieReg, ie;
userAgent = window.navigator.userAgent;
ieReg = /msie|Trident.*rv[ :]*11\./gi;
ie = ieReg.test(userAgent);




$(function () {

	if (ie) {
		console.log("this is IE my lord");
		$('body').removeClass('js');
	}

	function toggleChat() {
		var chatButton = document.querySelector('.chat-container');
		chatButton.classList.toggle('active');
	}

	function toggleLatestWork() {
		var latestProjectCard = document.querySelector('.latest-project');
		var latestProjectCloseText = document.querySelector('.latest-project__close span');

		latestProjectCloseText.innerText === "Latest work" ? latestProjectCloseText.innerText = "Close" : latestProjectCloseText.innerText = "Latest work";

		latestProjectCard.classList.toggle('hide');
	}

	var $contactForm = $('#chatForm');
	$contactForm.submit(function (e) {
		e.preventDefault();

		//get the name field value
		var name = $('#name').val();
		//get the name field value
		var email = $('#email').val();
		//get the name field value
		var phoneNumber = $('#phoneNumber').val();
		//get the comments
		var message = $('#message').val();

		$.ajax({
			url: 'https://formspree.io/abhishekrajinfo@gmail.com',
			method: 'POST',
			data: {
				name: name,
				_replyto: email,
				email: email,
				phoneNumber: phoneNumber,
				message: message,
				_subject: 'A Message From Your Website Visitor',
			},
			dataType: 'json',
			beforeSend: function () {
				console.log("sending");
				$('.chat-send').val("Sending...");
				$('.chat-send').attr('disabled', true);
			},
			success: function (data) {
				console.log("sent");
				// $contactForm.append('<div class="alert alert--success">Message sent!</div>');
				$('#name').val('');
				$('#email').val('');
				$('#phoneNumber').val('');
				$('#message').val('');
				$('.chat-send').val("Successfully sent");
				$('.chat-send').attr('disabled', false);
				$('.form-content').hide();
				$('.thank-you').fadeIn();
			},
			error: function (err) {
				console.log("something went wrong");
				$('.chat-send').val("Somthing went wrong :(");
			}
		});

	});

})

