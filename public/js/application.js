
$(document).ready(function() {
  $('form').submit(function(e){
    e.preventDefault()
     var userInput = $(this).serialize();
     console.log(userInput);
    var ajaxRequest = $.ajax({ 
      url: "/grandma",
      type: "POST",
      data: userInput
    }).success(function(data){
    	console.log(data);
      $("#grandma_says").html(data);
    });
  });
});


I would like to be able to check if the 
request failed or was succesful and have 
console log based on the response. How
do we do this?