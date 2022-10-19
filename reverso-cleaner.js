document.getElementsByTagName('body')[0].classList.remove("rude");
document.getElementsByTagName('body')[0].classList.remove("rude-lock");
document.getElementsByTagName('header')[0].remove();
document.getElementById('register-popup-bottom').remove();
document.getElementById('subtop-content').remove();
document.getElementsByClassName('right-content')[0].remove();
document.getElementById('blocked-rude-results-banner').remove();
document.getElementById('blocked-results-banner').remove();
document.getElementById('footer').remove();
document.getElementById('bottom-mega-rca-box').remove();
document.getElementById('dapp-banner-wrapper').remove();
for (const item of document.getElementsByClassName('example')) { item.classList.remove("blocked"); }
document.getElementById('search-options').remove();
document.getElementById('global-options').remove();
