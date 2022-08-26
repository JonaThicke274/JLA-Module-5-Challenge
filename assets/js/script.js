// Assigns current day, date, and local time to a variable
var currentDate = moment().format("LLLL")
// Dynamically makes the html content of the id #currentDay as the variable with the current dates info
$("#currentDay").html(currentDate)

// Iterate through the time blocks and apply color-code
var checkTimeBlocks = function() {
    // Assigns current hour to variable to check against
    currentHour = moment().hour()
}
// Call/get info from local storage to populate textarea elements

// Clear localstorage if it is a new date?