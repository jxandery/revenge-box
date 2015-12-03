$(document).ready(function(){
  fetchPosts();
  deletePost();
  createPost();
});

function deletePost() {
  $('#latest-posts').delegate('#delete-post', 'click', function() {
    var $post = $(this).closest('.post');
    $.ajax({
      type: 'DELETE',
      url: '/ideas/' + $post.attr('data-id') + '.json',
      success: function(){
        $post.remove()
      },
      error: function() {
        $post.remove()
          console.log('the post was already deleted')
      }
    });
  });
}

function renderPost(post) {
  $('#latest-posts').append(
      "<br><br><div class='post' data-id='"
      + post.id
      + "'><h6>Thought up "
      + post.created_at
      + "</h6><p>Title: "
      + post.title
      + "</p><p>Body: " + post.body
      + "</p><p>Quality: " + post.quality
      + "</p><button id='delete-post' class='btn btn-default btn-xs'>Delete</button></div>"
      );
}

function fetchPosts() {
  $.ajax({
    type: 'GET',
    url: '/ideas.json',
    success: function(posts){
      $.each(posts, function(index, post){
        renderPost(post);
      });
    }
  });
}

function createPost(){
  $('#create-post').on('click', function(){
    var postDescription = $('#post-description').val();
    var postBody = $('#post-body').val();
    var postParams      = {
      idea: {
        title: postDescription,
        body: postBody
      }
    }

    $('#post-description').val('');
    $('#post-body').val('');

    $.ajax({
      type: 'POST',
      url: '/ideas.json',
      data: postParams,
      success: function(post){
        renderPost(post);
      }
    });
  });
}

