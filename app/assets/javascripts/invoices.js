function update_subtotal() {
	var subtotal = 0;
	$('.price').each(function(i) {
		var price = $(this).html();

		if ( !isNaN(price) ) {
			subtotal += Number(price)
		}

	});

	subtotal = subtotal.toFixed(2);
	$('#subtotal').html(subtotal);

	update_balance();
}

function update_balance() {
	var total = Number($('#subtotal').html()) + Number($('#9').val());

	total = total.toFixed(2);
	$('.due').html(total);


}

function update_price() {
	var row = $(this).parents('.item-row');
	var price = row.find('.cost').val() * row.find('.qty').val();
	price = price.toFixed(2);

	if ( isNaN(price) ) {
		row.find('.price').html('isNaN');
	} else {
		row.find('.price').html(price);
	}

	update_subtotal();
}

function bind1() {
	$('.cost').blur(update_price);
	$('.qty').blur(update_price);
}
