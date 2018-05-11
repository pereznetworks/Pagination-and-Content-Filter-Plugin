# Tech Degree - Project 2 - the Pagination and Content Filter jQuery plugin

    this is Project 2, TeamTreehouse, Tech Degree, Full Stack JavaScript, Unit 2

# SUMMARY:

  Current features

    for a selected HTML Collecton node

      Pagination:

        Display of child elements, or items, based on Items-Per-Page.
        Pagination applied to a selected HTML parent element.
        Default is 10 Items-Per-Page , and 1st Page is initially displayed

      Search Form and Content Filter:

        display of of any of child element whose targeted search element's text-content field matches text submitted into search-tool's input field

        'Live filtering' : filtering of search results as text is typed into search input

# TO USE Pagination Plugin

      STEP 1: add the following lines to YOURapp.js

          const $nodePaginate = $('.myElementClass');  
              // select element with elements to paginate

          const nodeSearch = "string of text"
              // must be a tag, id, or class
                // that selects a unique html element containing textContent
                   // that can be used to filter child elements of $nodePaginate

          runSearchTool($nodePaginate);  
              // implements and add the content filtering and pagination to selected html node


      STEP 2: add the css script src tags to the html page or template as follows


          <link rel="stylesheet" href="css-dir/reset.css">
          <link rel="stylesheet" href="css-dir/design.css">


      STEP 3: add the javascript src tags to the html page or template as follows


          * this plugin requires the latest jQuery

          <script src="js-dir-or-link-to-latest/jquery-latest-version.min.js"></script>

          <script src="js-dir-to/search-plugin.js"></script>

          <script src="js-dir-to/paginatgion-plugin.js"></script>

          <script src="js-dir-or-link-to/YOURapp.js"></script>

# FUNCTION DETAIL pagination-plugin()

        This a simple function the calls 1 function:
          runSearchTool()

         1st argument, REQUIRED: $nodePaginate
            must be the HTML Collection node that is the direct parent of ...
                the content that needs the pagination and content filtering features

         2nd argument, REQUIRED: nodeSearch
            must be a unique element found once in each of $node's child elements, containing textContent

        is called by runSearchTool, to reset view of $nodePaginate after being filtered


# FUNCTION DETIAL runSearchTool():

    runSearchTool($node)

      calls appendSearchTool

          calls buildSearchTool, builds a html Form node, with an text input field and submit button
          adds searchTool Form as a the first child element of $node's parent element

      adds KEYUP event handler to the search input field

          prevent default is set tp keep html dom from being refreshed with original view of html page

          as text is typed into search input field
          each of $node's child nodeSearch element textContent field is compared with the search input
          any that match are set with an  ID attribute of search-result
          any that do not match are hidden

        $node, modified or not, is passed to append

            in which appendPageLinks() is used to add as many corresponding pagelinks
            1 pagelink for every 10 search results
            the first 10 are shown as page 1  

              allows the initial call to runSearchTool, to display and paginate all $node's child elements

              when there are search results, a search results flag is set to true
                then $node child elements with ID of search-result view is paginated

      adds SUBMIT handler to the search-tool form

          prevent default is set tp keep html dom from being refreshed with original view of html page

          captures search input
          if search input is not blank or is not empty
            hides all child elements of $node passed, adding style="display:none;" attribute
            removes pagination links  
            iterates through $node child elements
                if any child elements containing search input text
                  are set with an attribute id of search-result

          appendPageLinks links is called to display and paginate search results

          after search results displayed,

            a reset hint is displayed under the search input and submit button
                once reset, the hint no longer displays

            a new search, clears previous search results and clears search result page links

          submitting blank, or empty, search resets to original view of $node with corresponding page links


# FUNCTION DETIAL appendPageLinks():

      appendPageLinks() function,
        adds the pagination functionality for selected html elements child elements

          calls hideItems(), to hides all the child elements
            takes a $node as required argument
            a style attribute of display:none is dynamically added to each child element
            returns the $node

          calls showPage(), to show child elements for a given page
            takes a $node as required argument
            calls other smaller functions to...
              calc how many pages needed for all $node child elements
              set index and maxIndex for iterating through $node's child elements
              for the each of $node's child elements
                any that have ID of search-result
                 for the specified page
                  remove the style attribute of display:none from the child element
              returns the $node

          calls createPageLinks(), to create the html elements for a given number of page links
            takes a lengthOfArray, pageToShow and itemsPerPage as required elements
              returns a ul html element, with a set of li elements
                each li element, contains an anchor tag with a href link to each page

          adds an event listener for each page link...
            each event listener as a handler function that ...
              removes the current page links and their respective event listeners
              and calls the appendPageLinks() function, passing $node,
              setting pageToSho to the pageLink clicked on..
              as well as the itemsPerPage
              and whether or not $node is being filter with search results


# JS src code

        js/searchContent-plugin.js
            - src for the runSearchTool() function

        js/pagination-plugin.js
            - src for the pagination-plugin(), and appendPageLinks() functions

# CSS styling of elements for appendPageLinks():

        css/design.css, css styling includes,
            - styles for pagination buttons
            - and sample student-list/student-items/cf

        css/reset.css, a compatibility for older browsers

        other than pagination and content filter...
            css styling of your html sub-elements will be unchanged

# SAMPLE HTML with student list for appendPageLinks():

          - index.html, in the root dir,
            a sample is provided to demonstrate the implementation of the pagination-plugin

          - student-list-examples/.., more html examples to demonstrate the pagination-plugin

          - js/app.js, a sample app.js to demonstrate the pagination-plugin
