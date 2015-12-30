//opening a blank popup
var annoyingWindow = window.open();

//giving content to the popup
var windowContent = '<div>I am really, really, boring hehe</div>';
annoyingWindow.document.write(windowContent);

//The most common way to do the operation above
var popupSize = '"width=320,height=300,left=500,top=250"';
var annoyingWindow = window.open('https://www.google.com.br/ads', 'google-ads', popupSize);
/*
The sequence of parameters has to be exactly the same as the example above.
window.open(page, name, size & position);
We can specify empty strings ('') as parameters if we need to.
*/

//closing a popup
annoyingWindow.close();