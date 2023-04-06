$(document).ready(function() {

    $("#search").keyup(function() {

        // removes all white spaces:
        let searchValue = $.trim(this.value);

        let searchValueIsEmpty = searchValue === "";
        if (searchValueIsEmpty) {

            // Show all contents:
            $('.item').show();

        } else {
            // Hide all contents before searching:
            $('.item').hide();
            // show all div contents that have the search value in its content:
            $(".item:contains(" + searchValue + ")").show();
        }
    });

});