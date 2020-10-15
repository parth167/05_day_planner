


//----define moment varibles used to show time----//
var date = moment().format("MMM Do YY");
// var currentTime = moment().format('H');
// console.log(currentTime);

//-------append date----------//
$("#currentDay").text(date);
//console.log(currentDay);


//---------background Updater------------------------//

var timeOfday = ["8","9", "10", "11", "12", "13", "14", "15", "16", "17"]
updatetime();
//-----function for time-----//
function updatetime() {
  var currentTime = moment().format('H');
  for(var i = 0; i < timeOfday.length; i++) {
    //------future time-------//
    if (parseInt(timeOfday[i]) > currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #58ce7b");


    }
    //------past time-------//
    else if (parseInt(timeOfday[i]) < currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: lightgray");

    }
    //------current time -------//
    else if (parseInt(timeOfday[i]) == currentTime) {
      $("#" + timeOfday[i]).attr("style", "background-color: #fc665e");
    
    }
  }
}

//--onclick event to save user input to local storage---//

function saveButton() {
   
  $(".event-input").each(function() {
  var events = $(this).attr("id");
  $(this).val(localStorage.getItem(events));
  });

  $(".saveBtn").on("click", function() {
      var data = $(this).siblings(".event-input").val();
      var dataId = $(this).siblings(".event-input").attr("id");

      localStorage.setItem(dataId, data);
     
  })
}

saveButton()
