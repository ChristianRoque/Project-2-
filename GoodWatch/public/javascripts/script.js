document.addEventListener(
	'DOMContentLoaded',
	() => {
		console.log('IronGenerator JS imported successfully!');
	},
	false
);

var span = document.getElementById('close');
var modal = document.getElementById('modal01');

function onClick(element) {
	modal.style.display = 'block';
	document.getElementById('img01').src = element.src;
	document.getElementsByClassName('modal-content').innerHTML = this.alt;
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};

function close() {
	modal.style.display = 'none';
}

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// 	modal.style.display = 'none';
// };

// When the user clicks anywhere outside of the modal, close it

// // Get the modal

// // Get the button that opens the modal
// var btn = document.getElementById('myBtn');

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName('close')[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
// 	modal.style.display = 'block';
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
// 	modal.style.display = 'none';
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
// 	if (event.target == modal) {
// 		modal.style.display = 'none';
// 	}
// };
