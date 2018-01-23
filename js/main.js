
{
	setTimeout(() => document.body.classList.add('render'), 60);


	function toggleChat() {
		var chatButton = document.querySelector('.chat-container');
		chatButton.classList.toggle('active');
	}

	function toggleLatestWork() {
		var latestProjectCard = document.querySelector('.latest-project');

		latestProjectCard.classList.toggle('hide');
	}

	// chatButton.addEventListner('click', () => {
	// })


}

