document.getElementsByTagName('body')[0].hidden = true;

function deleteByClassName(className) {
	try {
		document.getElementsByClassName(className)[0].remove();
	} catch (err) {
		console.log('Reverso Cleaner: No elements of class "' + className + '" were found.');
	}
}

function deleteById(ElementId) {
	try {
		document.getElementById(ElementId).remove();
	} catch (err) {
		console.log('Reverso Cleaner: No elements with ID "' + ElementId + '" were found.');
	}
}

let bodyRude = ['rude', 'rude-lock'];
for (const item of bodyRude) {
	document.getElementsByTagName('body')[0].classList.remove(item);
}

let IdList = [
	'add-example2',
	'add-example3',
	'blocked-results-banner',
	'blocked-rude-results-banner',
	'bottom-mega-rca-box',
	'bottom-suggestions',
	'colloquial',
	'dapp-banner',
	'dapp-banner-wrapper',
	'footer',
	'history-home-badges',
	'register-popup-bottom',
	'search-options',
	'sitemaps',
	'subtop-content',
	'synonyms-button',
	'top-suggestions',
	'translate-links',
	'translationNotFound'
];
for (const item of IdList) {
	deleteById(item);
}

let classList = [
	'buttons-after-examples',
	'home-banners-wrapper',
	'more-suggestions',
	'other-content',
	'premium-banner',
	'right-content'
];
for (const item of classList) {
	deleteByClassName(item);
}

try {
	document.getElementsByTagName('header')[0].remove(); 
} catch (err) {
	console.log('Reverso Cleaner: No header was found.');
}

for (const item of document.getElementsByClassName('example')) {
	item.classList.remove("blocked");
}

try {
	document.getElementsByClassName('more-button')[0].click();
} catch (err) {
	console.log('Reverso Cleaner: No more-button was found.');
}

document.getElementsByTagName('body')[0].hidden = false;
