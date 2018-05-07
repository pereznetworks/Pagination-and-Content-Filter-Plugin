$(document).ready(function() {


// get ul element with list items to paginate
  const $ulList = $('.student-list');

// append Search Tool
  runSearchTool($ulList);

// paginate and add Event Listener for each page link, add Search. Content Filter tool
  $ulList.append( appendPageLinks($ulList) );

// use search paramaters entered into search input field
// display search results

}); // end ready function
