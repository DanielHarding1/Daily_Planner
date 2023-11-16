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
