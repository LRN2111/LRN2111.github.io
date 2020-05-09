/*
All code currently working - can filter by either diet or season, and 'Show all' button does show all.
Currently can't filter by both categories at once though. Somehow need it to retain options you've already clicked.
Make use of active class
$(element).show on anything that hasClass(dietClass) AND whatever active seasonClass is
add 'selected' class to filtered content?

START PAGE
All content has 'selected' class

Press a dietary filter button - 'selected' class removed if does not have dietClass
Then if has dietClass and 'selected' class, show element
Content - some have selected class, some don't 

Then press a season filter button - 'selected' class removed if does not have seasonClass. Nothing happens if wasn't already selected.
If has seasonClass and 'selected' class, show element

Still foresee an issue for 'show all' buttons - below code would give everything selected class, rather than just whatever wasn't already filtered.
if (dietClass === "all") {
    $(".content").addClass("selected);
}
Think about it tomorrow
-------

*/

// DIETARY FILTERS

// variable for class of active diet button. Set to 'all' on page load
var dietActive = "all"
// Save dietary filter buttons as jQuery collection
var $dietbtns = $("#dietaryButtons > button");
// Function for all dietary filter buttons
$dietbtns.click(function (event) {
    // store diet class of clicked button in a variable 'dietClass'
    var dietClass = $(this).attr("class").split(" ")[0];
    dietActive = $(this).attr("class").split(" ")[0];

    /*
    // if selected option is 'Show all", all content shown
    if (dietClass === "all") {
        $(".content").show();
    } else {
        // for each recipe with 'content' class, check if it has the dietClass of the button. If so, show it. If not, hide it
        $(".content").each(function (index, element) {
            if ($(element).hasClass(dietClass)) {
                $(element).show();
            } else {
                $(element).hide();
            }
        })
    };
    */
    
    // show only content elements with seasonActive class, then only show those that also have dietClass
    $(".content").each(function (index, element) {
        if ($(element).hasClass(seasonActive)) {
            if (dietClass === "all") {
                $(element).show();
            } else if ($(element).hasClass(dietClass)) {
                $(element).show();
            } else {
                $(element).hide();
            }
        }
    });
    
    // remove 'active' class from all buttons, then add it to the present button
    $dietbtns.removeClass("active");
    $(this).addClass("active");
});



// SEASON FILTERS 

// variable for class of active season button. Set to 'all' on page load
var seasonActive = "all"

// Save season filter buttons as jQuery collection
var $seasonbtns = $("#seasonButtons > button");

// Function for all season filter buttons
$seasonbtns.click(function (event) {
    // store season class of clicked button in a variable 'seasonClass'
    var seasonClass = $(this).attr("class").split(" ")[0];
    
    // show only content elements with dietActive class, then only show those that also have seasonClass
    $(".content").each(function (index, element) {
        if ($(element).hasClass(dietActive)) {
            if (seasonClass === "all") {
                $(element).show();
            } else if ($(element).hasClass(seasonClass)) {
                $(element).show();
            } else {
                $(element).hide();
            }
        }
    });
    
    // remove 'active' class from all buttons, then add it to the present button
    $seasonbtns.removeClass("active");
    $(this).addClass("active");
});



