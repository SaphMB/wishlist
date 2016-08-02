/* Exercise 1: Wish list */
function addToList(item) {
	var script = '<li>' + item + '<span class=\'label pending\'>Pending</span>' + '</li>';
	$('#items').append(script);
};

$(document).on('click', '#add-to-list', function () {
	addToList($('#item').val());
	$('#item').val('');
	$('#item').focus();
});

$(document).on('click', '.pending', function () {
	var li_node = $(this).parent();
	li_node.append('<span class\'label success\'>Done!</span>');
	li_node.addClass('completed');
	$(this).remove();
});

function updateTotal() {
	var pending = $('.total').length;
	var completed = $('.total').length;
	var script = $('.total').text('Pending: ' + pending + ' Completed: ' + completed);
};