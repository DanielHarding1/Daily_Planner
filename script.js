var dateEl = $("#currentDay");
var today = dayjs();
var currentTIme = $("<p>");
currentTIme.text(today);
currentTIme.appendTo(dateEl);

console.log(dayjs());
