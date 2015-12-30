//getting the URL
var whereAmI = window.location.href; //gets the full location, hostname, pathname and hash
//Another way to get the full location of a page would be issuing the command document.URL;

//getting the parts of the URL
var pageHostName = window.location.hostname;
var pagePathName = window.location.pathname;
var pageAnchor = window.location.hash;
/*it's also possible to concatenate the parts of the href, such as hostname, 
pathname and hash to create a new href and then navigate to it*/

//setting values to the URL
window.location.href = 'http://www.google.com'; //navigate to the value
window.location.assign('http://www.google.com');
window.location.replace('http://www.google.com'); //exclude the initial site from the browser history

//reloading a page from the server
window.location.reload(true);

//reloading a page from the cache data
window.location.reload(false);
window.location.reload();

//another way to reload the page
window.location.href = window.location.href;