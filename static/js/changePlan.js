const arr = $('.plans-illustrator .nav-pills .nav-item');
let x = arr.length - 1;

$(document).ready(function () {
	changeOption(x);
});

$('.plans-illustrator .nav-pills span').click(() => {
	changeOption(x);
});

function changeOption(indexNumber) {
	arr.map((index, component) => {
		index === indexNumber
			? (component.style.display = 'none')
			: (component.style.display = 'initial');
	});

	if (x != arr.length - 1) {
		x++;
	} else {
		x = 0;
	}
}
