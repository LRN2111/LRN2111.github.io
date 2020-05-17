// TYPE FILTERS
// variable for class of active type button. Set to 'all' on page load
var typeActive = "all"
// Save type filter buttons as jQuery collection
var $typebtns = $("#typeButtons > button");
// Function for all type filter buttons
$typebtns.click(function (event) {
    // store type class of clicked button in a variable 'typeActive'
    typeActive = $(this).attr("class").split(" ")[0];
    // remove 'active' class from all buttons, then add it to the present button
    $typebtns.removeClass("active");
    $(this).addClass("active");
});

// FLAVOUR FILTERS 
// variable for class of active flavour button. Set to 'all' on page load
var flavourActive = "all"
// Save flavour filter buttons as jQuery collection
var $flavourbtns = $("#flavourButtons > button");
// Function for all flavour filter buttons
$flavourbtns.click(function (event) {
    // store flavour class of clicked button in a variable 'flavourActive'
    flavourActive = $(this).attr("class").split(" ")[0];
    // remove 'active' class from all buttons, then add it to the present button
    $flavourbtns.removeClass("active");
    $(this).addClass("active");
});

// Make variable "criteria". This will contain array of active class for each category, but starts with "all" as each category
var criteria = ["all", "all"];

// Function for clicking each filter button
$(".filters > div > button").click(function () {
    // on initial button click, criteria variable updated to current active filter classes
    criteria = [typeActive, flavourActive];
    // each .content element has .selected class added
    $(".content").each(function (index, element) {
        $(element).addClass("selected");
    })
    // loops through each currently active class in criteria array
    // checks if there is a filter on the category
    // if so, .selected class remains on any element that does have the active class, but is otherwise removed 
    for (i = 0; i < criteria.length; i++) {
        if (criteria[i] !== "all") {
            $(".content").each(function (index, element) {
                if ($(element).hasClass(criteria[i])) {} else {
                    $(element).toggleClass("selected", false)
                }
            })
        }
    }
    // finally, this finds content elements that still have .selected class. These are shown. Any others are hidden. 
    $(".content").each(function (index, element) {
        if ($(element).hasClass("selected")) {
            $(element).show();
        } else {
            $(element).hide();
        }
    })
});
