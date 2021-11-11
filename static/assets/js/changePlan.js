const plansContainer = document.getElementById('pills-tab-plans');
const htmlElementsObj = {};

$(document).ready(function () {
	hideItems();
});

$( window ).resize(function() {
	hideItems()
});

$('.rightArrow-icon').click(() => {
	changeOption(htmlElementsObj);
});

function hideItems(){
	const renderedArr = $('.plans-illustrator .nav-pills .nav-item');

	renderedArr.map((index, component) => {
		index > ($('#pills-tab-plans').width() > 300 ? 1 : 0) ? component.style.display = "none" : component.style.display = "initial" 
	});
}

function createHtmlArr(obj){
	const htmlArr = Object.values(obj);

	htmlArr.push(htmlArr[0]);
	htmlArr.splice(0,1);

	return htmlArr;
}

function changeOption(obj) {
	const arr = $('.plans-illustrator .nav-pills .nav-item');
	plansContainer.innerHTML = '';
	let content = '';


	arr.map((index, component) => {
		obj[index] = component.outerHTML;
	});

	const finalArr = createHtmlArr(obj);

	finalArr.map((component, index ) => {
		 content += component;
	});

	plansContainer.innerHTML = content;

	hideItems();
}
