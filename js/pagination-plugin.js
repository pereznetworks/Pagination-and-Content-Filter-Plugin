
// function declarations

function calcPagesNeeded(lengthOfArray, itemsPerPage){
  let pagesNeeded = 0;
  // determine how many pages for this array of list of items
  if (Math.ceil( (lengthOfArray - 1) / itemsPerPage ) ==  0 ) {
    pagesNeeded = 1;
  } else {
    pagesNeeded = Math.ceil( (lengthOfArray - 1) / itemsPerPage );
  }
  return pagesNeeded;
}

function setIndex( pageToShow, itemsPerPage) {
  // setting index for iteration through array of list items
  // given a pageNum and perPage, find which number index should start at
  return index =  (pageToShow * itemsPerPage) - itemsPerPage;
}

function setMaxIndex(lengthOfArray, pageToShow, itemsPerPage){
  // given itemsPerPage, find which number index should stop at
  // for last page, make sure index does not go past end of array
  if (lengthOfArray < (pageToShow * itemsPerPage) ) {
    return lengthOfArray - 1;
  } else {
    return (pageToShow * itemsPerPage) - 1;
  }
}

function hideItems($node){
    // 'hide' all list items in the html Node by adding a style attribute of 'display:none;'
    $node.children().attr('style', 'display:none');
  }

function showPage($node, pageToShow, itemsPerPage, showSrchReslts) {

  /* takes a jquery html collection node of ul/li elements as an argument
     on given page, remove the style attribute for list items for that page
     return the html collection node of ul/li elements
     required argument: jquery html collection node
  */

  // get a starting index for this page of list items
  let index = setIndex( pageToShow, itemsPerPage);

  if (!showSrchReslts){

      // get the end index for this page of list of itemns
      let maxIndex = setMaxIndex($node.children().length, pageToShow, itemsPerPage);

      // iterate thru all list items in the node
      $node.children().each( function () {
          // iterate only through list items [index] thru [maxIndex]
          if (index <= maxIndex) {
            // remove the style attribute for this list item
           $node.children()[index].removeAttribute('style');
          } // end if
          // increment index
          index++;
      }); // end .each

    } else {

      // get the end index for this page of list of itemns
      let maxIndex = setMaxIndex($node.children('#search-result').length, pageToShow, itemsPerPage);

      $node.children('#search-result').each( function () {
        // iterate only through list items that have the the id of search-result
        if (index <= maxIndex) {
        // show only the 10 that corresond to the page number
         $node.children('#search-result')[index].removeAttribute('style');
           // remove the style attribute for this list item
         index++;
           // increment index
        } // end if

      }); // end .each
      //$('#noresults').remove('*')
    } // end if/else

  return $node;  // return the $node with the modified list items
} // end showPage function

function createPageLinks(lengthOfArray, pageToShow, itemsPerPage, showSrchReslts){

  /* takes number of pages needed return a div with a ul/li of page links
    required arguments: lengthOfArray, pageToShow, itemsPerPage
  */

  const pagesNeeded = calcPagesNeeded(lengthOfArray, itemsPerPage)

   //create the div for the pagelinks section, add a class, .pagination
  const pageLinks = document.createElement('div');
  pageLinks.setAttribute("class", "pagination");

  // create a ul for the list of links items, add a class, .paginationUl
  const pageLinksUl = document.createElement('ul');
  pageLinksUl.setAttribute("class", "paginationUl");

  for (let i = 0; i < pagesNeeded; i++) { // for each page

     //create a list item with an a tag and href link and textContent to respective page number
    let listItem = document.createElement('li');
    let aLink = document.createElement('a');
    aLink.setAttribute("href", "#");
    aLink.textContent = (i+1);
    aLink.setAttribute("value", (i+1));

    if (i === (pageToShow - 1)) {  // set to the link for page 1 or link 0 to a class of .active
      aLink.setAttribute("class", "active");
    }

    listItem.append(aLink);
    pageLinksUl.append(listItem);  // add the li to the ul

  }  // end for loop

  pageLinks.append(pageLinksUl);  // and the ul to the div

  return pageLinks;

} // end createPageLinks function

function appendPageLinks($node, pageToShow, itemsPerPage, showSrchReslts, nodeSearch) {

  /* adds pagination functionality
      calls showPage() with requried arguments to hide/show list items for a given page
      calls createPageLinks() with required arguments to add a set of page links
      adds a event listener for each page link to call appendPageLinks()
   */

  let perPage = 10;  // default itemsPerPage
  if (itemsPerPage) {
    perPage = itemsPerPage;
  } // if ItemsPerPage passed, use it

  let pageNum = 1; // by default show page 1
  if (pageToShow) {
    pageNum = pageToShow;
  } // if pageToShow passed, use it

  let lengthOfArray = 0;

  if (!showSrchReslts) {  // if not showing search results

    // getting the length of array of list items
    lengthOfArray = $node.children().length;

    // hide all html child elements from the ul that contain the list items
    hideItems($node);

    // take the node of list items, split up into as many pages needed for ItemsPerPage
    $node = showPage($node, pageNum, perPage);

  } else {

    lengthOfArray = $node.children('#search-result').length;

    // hide all html child elements from the ul that contain the list items
    hideItems($node);

    if (lengthOfArray == 0) {
      // if no search-results
        $node.append( buildNoResultsListItem() )
        // prepend "no matching results found " to $node
    } else {

      // take the node of list items, split up into as many pages needed for ItemsPerPage
      $node = showPage($node, pageNum, perPage, showSrchReslts);

    } // end if no search-results/else

  } // end if not showing search results

  $('.pagination').remove('*');
  $node.parent().append( createPageLinks(lengthOfArray, pageNum, perPage) );
  // initial run and each time after, create and append a new set of page links

  const paginationLinks = document.querySelectorAll('.pagination li a')
  // select the newly added pagelinks

  paginationLinks.forEach(a => {  // for each pagelink add an event listener

    a.addEventListener('click', function (){
      // if a page link clicked

      pageToShow = $(this)[0].getAttribute('value');
      // get the page number to show
      $('.pagination').remove('*');
      // remove the previous page links
      if (!showSrchReslts) {
        $node.append( appendPageLinks($node, pageToShow, itemsPerPage) );
      } else {
        $node.append( appendPageLinks($node, pageToShow, itemsPerPage, showSrchReslts) );
      }


      // call appendPageLinks, passing $node, pageToShow, default items per page

      // and append that list to the page.
      // When each link is clicked,
        //  we'll use the showPage function to display the corresponding page,

            // For example, clicking the link to page 2
              //  will tell the showPage function to display students 11 through 20.

      }); // end pagination event listener

   }); // end forEach paginationLinks


} // end appendPageLinks function

function paginationPlugin($nodePaginate, nodeSearch){
  // append Search Tool


    runSearchTool($nodePaginate, nodeSearch);
      // append Search Tool
      // and paginate and add Event Listener for each page link, add Search. Content Filter tool


}
