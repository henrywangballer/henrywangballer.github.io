var card1_child_id = 0;
var card2_child_id = 0;
var card3_child_id = 0;

function addCard(card_id) {
	var tweet;
	var c_id = "";

	if (card_id == 'card1') {
		card1_child_id++;
		c_id = card_id + "_" + card1_child_id;
	} else if (card_id == 'card2') {
		card2_child_id++;
		c_id = card_id + "_" + card2_child_id;
	} else if (card_id == 'card3') {
		card3_child_id++;
		c_id = card_id + "_" + card3_child_id;
	}

	console.log(c_id);

	var tweet = $('<div class="card" id=' + c_id + ' style="width: 12rem;"><input type="button" class="btn btn-danger" id=' + c_id + ' value="-" onclick="removeCard(this.id)" /><img class="card-img-top" src="twitter.png" alt="Twitter logo"><h5 class="card-title">Tweet</h5><p class="card-text">Sample tweet will go here!</p></div>');
	tweet.appendTo('#' + card_id);
}

function removeCard(card_id) {
	console.log(card_id);

	if (card_id.startsWith('card1')) {
		card1_child_id--;
	} else if (card_id.startsWith('card2')) {
		card2_child_id--;
	} else if (card_id.startsWith('card3')) {
		card3_child_id--;
	}
	document.getElementById(card_id).remove();
}