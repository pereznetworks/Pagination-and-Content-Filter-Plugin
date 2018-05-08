$(document).ready(function() {


// get ul element with list items to paginate
  const $node = $('.student-list');

// add the paginaiton-plugin paginaiton and content filtering features to selected $node
  paginationPlugin($node);

}); // end ready function
