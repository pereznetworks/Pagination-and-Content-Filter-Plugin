# Tech Degree - Project 2 - the Pagination and Content Filter using jQuery

    this is Project 2,
    part of TeamTreehouse, Tech Degree, Full Stack JavaScript, Unit 2

# SUMMARY:

  Current features

    for a selected HTML Collection node

      Pagination:

        Display of child elements, or items, based on Items-Per-Page.
        Pagination applied to a selected HTML parent element.
        Default is 10 Items-Per-Page , and 1st Page is initially displayed

      Search Form and Content Filter:

        using a search input field:
        on 'submit' display any html node child elements..
         whose targeted property or attribute field matches...
           text submitted into search-tool's input field

        'Live filtering':
          so the same, also
            filtering as text is typed into search input

# To use the Pagination method

      STEP 1: add the following lines to YOURapp.js

          const $nodePaginate = $('.myElementClass');  
              // select element with child elements to paginate

          const nodeSearch = "string of text"
              // must be a tag, id, or class
                // that selects a unique html element containing textContent
                   // that can be used to filter...
                     // all child elements of parent html element...
                        // selected in $nodePaginate

          pagination($nodePaginate, nodeSearch);  
              // implements and add the pagination to selected html node
                // also calls runSearchTool
                  // must pass the nodeSearch parameter


      STEP 2: add the css script src tags to the html page or template

          <link rel="stylesheet" href="css-dir/reset.css">
          <link rel="stylesheet" href="css-dir/design.css">


      STEP 3: add the javascript src tags to the html page or template

          requires at least jQuery 3.3.1

          <script src="js-dir-or-link-to-latest/jquery-3.3.1.min.js"></script>

          <script src="js-dir-to/search.js"></script>

          <script src="js-dir-to/paginatgion.js"></script>

          <script src="js-dir-or-link-to/YOURapp.js"></script>

# FUNCTION DETAIL pagination()

        This a simple function the calls 1 function:
          runSearchTool()

         1st argument or paramter, REQUIRED: $nodePaginate
            must be the HTML Collection node that is the direct parent of ...
                the child elements that need...
                 the pagination and content filtering features

         2nd argument or paramter, REQUIRED: nodeSearch
            must be a unique element, classname, id ...
              found once in each of $node's child elements,
                containing textContent that can be matched via string compare


# FUNCTION DETIAL runSearchTool():

    runSearchTool($node)

      calls appendSearchTool

          calls buildSearchTool, builds a html Form node called, 'searchTool'
            with an text input field and submit button
          adds the searchTool Form
           as a the first child element of the parent of the $node

      adds KEYUP event handler to the search input field

          same as submitting search input...
          doing with each char of text  typed

      adds SUBMIT handler to the search-tool form

          captures search input
          if search input is entered..
            hides all child elements of $node passed,
            removes pagination links  
            iterates through $node child elements
                if any child elements containing search input text
                  are set with an attribute id of search-result

          appendPageLinks links is called...
            to display and paginate search results

          after search results displayed,

          submitting blank or empty search input
           resets to original view of $node with corresponding page links


# FUNCTION DETIAL appendPageLinks():

      appendPageLinks() function,
        adds the pagination functionality
         for selected html elements child elements

          calls hideItems(), to hides all the child elements
            takes a $node as required argument
            a style attribute of display:none is added to each child element
            returns the $node

          calls showPage(), to show child elements for a given page
            takes a $node as required argument
            calls other smaller functions to...
              calc how many pages needed for all $node child elements
              set index and maxIndex for iterating through child elements
              for the each of $node's child elements
                any that have ID of search-result
                 for the specified page of elements
                  remove the style attribute of display:none
              returns the $node

          calls createPageLinks(),
          to create the html elements for a given number of page links
            takes a lengthOfArray, pageToShow and itemsPerPage
              returns a ul html element, with a set of li elements
                each li element,
                  contains an anchor tag with a href link to each page

          adds an event listener for each page link...
            each event listener as a handler function that ...
              removes the current page links
                and their respective event listeners
              and calls the appendPageLinks() function, passing $node,
               setting pageToShow to the pageLink clicked on..
                as well as the itemsPerPage
                 and whether or not $node is being filtered with search results


# JS src code

        js/searchContent.js
            - src for the runSearchTool() and content filtering functions

        js/pagination.js
            - src for the pagination(), appendPageLinks()...
              and other pagination functions

# CSS styling of elements for appendPageLinks():

        css/design.css, css styling includes,
            - styles for pagination buttons
            - and sample student-list/student-items/cf

        css/reset.css, a compatibility for older browsers

        other than pagination and content filter...
            css styling of your html sub-elements will be unchanged

# SAMPLE HTML with student list for appendPageLinks():

          - index.html, in the root dir,
            a sample is provided to for demonstration

          - student-list-examples/..,
              more html examples for demonstration

          - js/app.js, a sample app.js for demonstration
