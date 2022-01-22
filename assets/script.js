// global variables
let currentHour = moment();
let future = moment().add(1);
let past = moment().subtract(1);
// functions

// this will save the tasks to local storage
function saveTask() {
  console.log($(this).parent());
  const time = $(this).parent().attr("id");
  const task = $(this).siblings("textarea").val();
  console.log(task);

  localStorage.setItem(time, task);
}

//this will tell the user the current hour and change the color have it indicate the current hour
//1. get current hour
//2. get time blocks,
//3. loop through time blocks
//4. while looping it needs to know what hourTimeBlock is for
//5. if we have current hourTimeBlock, then run comparison (less,greater,equal)
//6. update past,present,future classes on css
function updateTimeBlockStyling() {
  // sets hour. turns string to number
  const currentHour = parseInt(moment().format("H"));
  // current hour is what's returned from moment

  const timeBlocks = $("#timeBlocks").children();
  console.log(timeBlocks);

  // checks array length and loops through it
  for (let index = 0; index < timeBlocks.length; index++) {
    //get one timeblock out of array
    const block = timeBlocks[index];
    console.log(block);
    const blockHour = parseInt(block.dataset.hour);
    let className = "";
    //compare current hour to timeblock hour
    if (blockHour === currentHour) {
      className = "present";
    } else if (blockHour < currentHour) {
      className = "past";
    } else {
      className = "future";
    }
    $(`#hour${blockHour} .js-task`).addClass(className);
  }
}

updateTimeBlockStyling();

// show current date
$("#currentDay").text(moment().format("MMMM Do, YYYY"));

// retrieve tasks from local storage
//this is done for each hour block we create
$("#hour9 .js-task").val(localStorage.getItem("hour9"));
$("#hour10 .js-task").val(localStorage.getItem("hour10"));
$("#hour11 .js-task").val(localStorage.getItem("hour11"));
$("#hour12 .js-task").val(localStorage.getItem("hour12"));
$("#hour13 .js-task").val(localStorage.getItem("hour13"));
$("#hour14 .js-task").val(localStorage.getItem("hour14"));
$("#hour15 .js-task").val(localStorage.getItem("hour15"));
$("#hour16 .js-task").val(localStorage.getItem("hour16"));
$("#hour17 .js-task").val(localStorage.getItem("hour17"));
$("#hour18 .js-task").val(localStorage.getItem("hour18"));

// user clicks save button
$(".js-saveBtn").on("click", saveTask);
