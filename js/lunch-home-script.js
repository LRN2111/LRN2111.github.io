// DIETARY FILTERS
// variable for class of active diet button. Set to 'all' on page load
var dietActive = "all"
// Save dietary filter buttons as jQuery collection
var $dietbtns = $("#dietaryButtons > button");
// Function for all dietary filter buttons
$dietbtns.click(function (event) {
    // store diet class of clicked button in a variable 'dietActive'
    dietActive = $(this).attr("class").split(" ")[0];
    // remove 'active' class from all buttons, then add it to the present button
    $dietbtns.removeClass("active");
    $(this).addClass("active");
});

// BASE FILTERS 
// variable for class of active base button. Set to 'all' on page load
var baseActive = "all"
// Save base filter buttons as jQuery collection
var $basebtns = $("#baseButtons > button");
// Function for all base filter buttons
$basebtns.click(function (event) {
    // store base class of clicked button in a variable 'baseActive'
    baseActive = $(this).attr("class").split(" ")[0];
    // remove 'active' class from all buttons, then add it to the present button
    $basebtns.removeClass("active");
    $(this).addClass("active");
});

// Make variable "criteria". This will contain array of active class for each category, but starts with "all" as each category
var criteria = ["all", "all", "all"];

// Function for clicking each filter button
$(".filters > div > button").click(function () {
    // on initial button click, criteria variable updated to current active filter classes
    criteria = [dietActive, baseActive];
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
