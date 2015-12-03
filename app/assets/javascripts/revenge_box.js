$(document).ready(function(){
  $.ajax({
    type: 'GET',
    url: 'https://desolate-inlet-6608.herokuapp.com/ideas.json',
    success: function(posts){
      $.each(posts, function(index, post){
        $('#latest-posts').append(
            "<div class='post' data-id='"
            + post.id
            + "'><h6>Published on "
            + post.created_at
            + "</h6><p>"
            + post.title
            + ":" + post.body
            + "</p></div>"
            )

      });
    }
  });
});
