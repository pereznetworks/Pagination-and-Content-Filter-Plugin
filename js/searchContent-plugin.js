// search and content filtering functions

function buildSearchTool($node){

  // create element div, class of search-tool, containing a form,
    // form, id of search-tool, with default or requested attributes
      // an input text field, an input submit button
        // responds enter text and hit enter, responds to enter text and click button with mouse
        // or enter text and tap on button using touch screen
  // TODO: provide API to change textContent and attributes of search tools elements

  const searchTool = document.createElement('div');
  searchTool.setAttribute('class', 'search-tool');

  const searchForm = document.createElement('form');
  searchForm.setAttribute('id', 'search-tool');
  searchTool.append(searchForm);

  const searchInput =  document.createElement('input');
  searchInput.setAttribute('id', 'searchInput');
  searchInput.setAttribute('type', 'text');
  searchInput.setAttribute('placeholder', 'Search ...');

  const searchButton =  document.createElement('input');
  searchButton.setAttribute('id', 'searchButton');
  searchButton.setAttribute('type', 'submit');
  searchButton.setAttribute('value', 'submit');
  searchButton.setAttribute('name', 'Search');

  searchForm.append(searchInput);
  searchForm.append(searchButton);

  return searchTool; // return complete search tool

}

function buildNoResultsListItem($node) {
  const noresultsListItem = document.createElement('li');
  noresultsListItem.setAttribute('class', 'listItem')

  const noresultsDetails =  document.createElement('div');
  noresultsDetails.setAttribute('class', 'listItem-details');

  const noresultsh3 = document.createElement('h3');
  noresultsh3.textContent = "No results."

  noresultsDetails.append(noresultsh3);
  noresultsListItem.append(noresultsDetails);

  return noresultsListItem;

}

function appendSearchTool($node) {

    $('.search-tool').remove('*')
  // remove search-tool if there is one already
    $('.pagination').remove('*');
  // remove the previous page links
    $node.parent()[0].firstElementChild.append( buildSearchTool() );
  // call buildSearchTool and append to parent of $node, before (or above) $node

}

function runSearchTool($node, searchInput){

  appendSearchTool($node)  // add search tool (yes, it's a form )

  document.getElementById('search-tool').addEventListener('submit', function(e) {
    // on submit, capture text typed into search input field
    e.preventDefault();

    // reset from previous search results
    // iterate thru all list items in the node
    $node.children().each( function () {
         this.removeAttribute('id', 'search-result');
    }); // end .each

    let SrchResltsObject = {};
    let searchParam = $('#search-tool input')[0].value.toLowerCase();
    console.log(`search paramater entered: ${searchParam}`);

      if (searchParam){
        hideItems($node);  // hide all, adds style='display:none;' attribute
        let matches = 0;
        $('.pagination').remove('*'); // remove paginaiton links

        for (let i = 0; i < $node.children('li').length; i++) {
        // iterate through each of $node's elements
          if ( $node.children('li')[i].textContent.toLowerCase().includes(searchParam) ) {
          // if any of the element's tags include the word or phrase "seachParam"
            $node.children('li')[i].setAttribute('id','search-result');
            // remove the style attribute
            matches++;

          }
        }

        SrchResltsObject.pageToShow = 1;
        SrchResltsObject.itemsPerPage = 10;
        SrchResltsObject.show = true;

        $node.append(appendPageLinks($node, SrchResltsObject.pageToShow, SrchResltsObject.itemsPerPage, SrchResltsObject.show));

        // when a search result is shown

        //first, make sure that a previous hint is removed
        $('#resetHint').remove('*');

        // then put up a new one
        const resetHint = document.createElement('span');
        resetHint.setAttribute('id', 'resetHint');
        resetHint.setAttribute('style', 'float:right;')
        resetHint.textContent = 'submit empty search to reset....';
        document.querySelector('.search-tool').append(resetHint);


      } else {

        // reset from search results, to pagination of all $node's elements
        paginationPlugin($node);
      }

    });  // end add event listener to search-tool button

  }
