var dateEl = $("#currentDay");

var currentTIme = $("<p>");

var time = setInterval(Timer, 1000);
function Timer() {
  var today = dayjs();
  currentTIme.text(today);
  currentTIme.appendTo(dateEl);
}

$(".saveBtn").on("click", function () {
  var targetVal = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, targetVal);
});

function hourStatus() {
  var currentHour = dayjs().hour();
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("-")[1]);

    if (blockTime < currentHour) {
      $(this).addClass("past");
    } else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}
// for (var i = 9; i < 17; i++) {
//   console.log(
//     $("#hour-" + i + " .description").val(localStorage.getItem("hour-" + i))
//   );
// }
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));

hourStatus();
