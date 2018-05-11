$(document).ready(function() {


// get ul element with list items to paginate
  const $nodePaginate = $('.student-list');

// the id, class, tag identying the tag name search should filter on
  const nodeSearch = 'h3';

// add the paginaiton-plugin paginaiton and content filtering features to selected $node
  paginationPlugin($nodePaginate, nodeSearch);

}); // end ready function
