$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://desolate-inlet-6608.herokuapp.com/ideas',
    success: function(){
      console.log('it worked')
    }
  });
});
