$(document).ready(function(){
  fetchPosts();
  createPost();

});

function renderPosts() {
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
    var postParams      = {
      idea: {
        title: postDescription,
        body: 'known for the moment'
      }
    }

    $('#post-description').val('');

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

