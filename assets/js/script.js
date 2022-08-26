// Assigns current day, date, and local time to a variable
var currentDate = moment().format("LLLL");
// Dynamically makes the html content of the id #currentDay as the variable with the current dates info
$("#currentDay").html(currentDate);

// Iterate through the time blocks and apply color-code
var checkTimeBlocks = function() {
    // Assigns current hour to variable to check against
    currentHour = moment().hour();
    
    // Function for iterating through each time block to color-code
    $(".time-block").each(function (){
        // Assign variable to check against currentHour based on id
        hourBlock = parseInt($(this).attr("id").split("time")[1]);
        // Removes any preexisting color code classes when setInterval calls checkTimeBlocks
        $(this).removeClass("past present future");
        // Assigns class for color coding
        if (hourBlock < currentHour) {
            $(this).addClass("past");
        }
        else if (hourBlock === currentHour) {
            $(this).addClass("present");
        }
        else if (hourBlock > currentHour) {
            $(this).addClass("future");
        }
        
    });
};

// Function for saving tasks in each time block
$(".saveBtn").on("click", function() {
    // Assign variables to push to local storage
    var time = $(this).parent().attr("id");
    var tasks = $(this).siblings(".description").val();

    localStorage.setItem(time, tasks)
    console.log("item saved!")
})
// Load info from localStorage to populate saved tasks/text

// Clear localstorage if it is a new date?

// Calls checkTimeBlocks on page load-in
checkTimeBlocks();
// If user leaves page on, checkTimeBlocks calls every 15 minutes to update colors
setInterval(checkTimeBlocks, (1000 * 60) * 15);