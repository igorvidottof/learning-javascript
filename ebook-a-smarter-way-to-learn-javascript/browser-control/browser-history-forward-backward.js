//using browser history to go through the pages
history.back(); //goes back one page
history.forward(); //goes forward one page

//defining the number of pages to go back or forward
history.go(-2); //goes back two pages
history.go(3); //goes forward three pages

/*
" There is no reliable way to find out how many items, backward and forward, there are in
the history." 
*/

//getting the URL where the user clicked the link to get to the current page
var whereUserCameFrom = document.referrer;