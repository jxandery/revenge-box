function deletePost() {
  $latestPosts.delegate('#delete-post', 'click', function() {
    var $post = $(this).closest('.post');
    $.ajax({
      type:       'DELETE',
      url:        '/ideas/' + $post.attr('data-id') + '.json',
      success:    function(){ $post.remove() },
      error:      function() { $post.remove() }
    });
  });
}

