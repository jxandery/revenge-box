function searchPost() {
  $('#filter').keyup(function() {
    var filter = $(this).val();
    $latestPosts.each(function() {
      if ($(this).text().search(new RegExp(filter, 'i')) < 0 ) {
        $(this).fadeOut();
      } else {
        $(this).show();
      }
    });
  });
}
