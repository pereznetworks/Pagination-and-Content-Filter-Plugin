# Tech Degree - Project 2 - the Pagination and Content Filter plugin function

    this is Project 2, TeamTreehouse, Tech Degree, Full Stack JavaScript, Unit 2

TODO: finish documentation

TODO: add keyup to search tool

# SUMMARY:

  Current features

    for a selected HTML Collecton node

      Pagination:

        Display of child elements, or items, based on Items-Per-Page.
        Pagination applied to a selected HTML parent element.
        Default is 10 Items-Per-Page.

      Search Form and Content Filter:

        Search and display of child elements with text-content matching text submitted into search-tool input.

# FUNCTION DETAIL pagination-plugin()

    EXAMPLE OF USAGE:

        const $node = $('.student-list');
              // get ul element with class="student-list"

        paginationPlugin($node);
              // implement the pagination and content filtering features for child elements of selected $node

    SUMMARY

        This a simple function the calls 2 functions:
          runSearchTool()
          appendPageLinks()

         1st argument, REQUIRED: $node
            must be the HTML Collection node that is the direct parent of ...
                the content that needs the pagination and content filtering features

         2nd optional argument: pageToShow
            sets the default page that will show when $node content is initially paginated  

         3rd optional argument: itemsPerPage
            set the default number of child elements, of $node, that will be displayed per page

         OPTIONAL:
            call runSearchTool and appendPageLinks() directly
              see FUNCTION DETAIL appendPageLinks():
              and see FUNCTION DETAIL runSearchTool();

# FUNCTION DETIAL runSearchTool():

    TODO: finish documentation

    runSearchTool($node)

      todo: display 'no results found' when search input results in no matches

      calls appendSearchTool($node)
        calls buildSearchTool() builds a form with text input field and submit button
        appends search form to parent of selected HTML, $node
        adds an Event Listener to the form

      captures search input
      if search input is not blank or is not empty
        hides all child elements of $node passed, adding style="display:none;" attribute
        removes pagination links  
        iterates through $node child elements
            if any child elements contain text that include search input
              remove style="display:none;" attribute

        after search results displayed, a reset hint is displayed under the search input and submit button
          once reset, the hint no longer displays

        adds new set of page links for search results

        a new search, clears previous search results and clears search result page links

        submitting blank, or empty, search resets to pagination of all child elements
            by calling pagination-plugin()


# FUNCTION DETIAL appendPageLinks():

    TODO: update documentation

      appendPageLinks() function,
        adds the pagination functionality for selected html elements child elements
        for selected parent html element node, $node
          treats the $node as an array of child elements

          calls hideItems(), to hides the child elements
            takes a $node as required argument
            the parent html element node is not modified
            a style attribute of display:none is dynamically added to each child element
            returns the $node

          calls showPage(), to show child elements for a given page
            takes a $node as required argument
            calls other smaller functions to...
              calc how many pages needed for all $node child elements
              set index and maxIndex for iterating through $node's child elements
              for the $node's child elements
                removes the style attribute of display:none from the child elements for the specified page
              returns the $node

          calls createPageLinks(), to create the html elements for a given number of page links
            takes a lengthOfArray, pageToShow and itemsPerPage as required elements
              returns a ul html element, with a set of li elements
                each li element, contains an anchor tag with a href link to each page

          adds an event listener for each page link...
          each event listener responds to a click event on a page link...
            removing the current page links and their respective event listeners
            and calls the appendPageLinks() function, passing $node, pageToShow, itemsPerPage as arguments


      REQUIRED PARAMETERS appendPageLinks():

        must select the parent element with child element that will be paginated

        // example : select the parent element containing child elements paginate
          $NODE = $('.myParentElementClass');
            // using a class name just as an example

        // then use it twice in the initial call to the plugin:
          $NODE.append( appendPageLinks($NODE) );
          // notice the 2 instances of '$NODE'

      OPTIONAL PARAMETERS, DEFAULTS SETTINGS:  appendPageLinks():

        pageToShow = 1
        itemsPerPage =  10

        can change both of the above defaults ....
          if initial call of plugin has all 3 arguments, ..
            arguments must be in order as declared ...

            example: to initially display page 1 and always display 20 items per page

        $node.append( appendPageLinks($node, 1, 20) );

      TO USE appendPageLinks():

        to use this plugin, follow 3 steps:

        step 1: add the following lines to YOURapp.js

          const $node = $('.myElementClass');  // select element with elements to paginate

          $node.append( appendPageLinks($node) );  // paginate and add Event Listener for each page

        step 2: add the css script src tags to the html page or template as follows

           <link rel="stylesheet" href="css-dir/reset.css">
           <link rel="stylesheet" href="css-dir/design.css">

        step 3: add the javascript src tags to the html page or template as follows

           * this plugin requires the latest jQuery

           <script src="js-dir-or-link-to-latest/jquery-latest-version.min.js"></script>
           <script src="js-dir-to/paginatgion-plugin.js"></script>
           <script src="js-dir-or-link-to/YOURapp.js"></script>


TODO: update documentation for the following sections

# JS src code appendPageLinks():

        js/pagination-plugin.js, src for the pagination-plugin

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
