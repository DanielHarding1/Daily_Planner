var dateEl = $("#currentDay");

var currentTIme = $("<p>");

var time = setInterval(Timer, 1000);
function Timer() {
  var today = dayjs();
  currentTIme.text(today);
  currentTIme.appendTo(dateEl);
}

$(".savebtn").on("click", function () {
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

hourStatus();
