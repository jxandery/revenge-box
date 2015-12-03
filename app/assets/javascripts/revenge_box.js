$(document).ready(function(){
  fetchPosts();
  deletePost();
  createPost();
});

function editPost(){
  $('#edit-post').on('click', function(){
    // slide down a form that is already in the html
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
      },
      error: function() {
        alert('An idea title and body are required');
      }
    });
  });
}

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
      + "</p><p>Quality: "
      + post.quality
      + "&nbsp;&nbsp;&nbsp;"
      + "<button id='thumbs-up' class='btn btn-default btn-xs'>Thumbs Up</button>"
      + "<button id='thumbs-down' class='btn btn-default btn-xs'>Thumbs down</button>"
      + "</p><button id='edit-post' class='btn btn-default btn-xs'>Edit</button>"
      + "<button id='delete-post' class='btn btn-default btn-xs'>Delete</button></div>"
      + "<div class='form-group'><div class='row'><div class='col-sm-4'><h6>Edit Title</h6>"
      + "<input class='form-control' type='text' id='post-description'></div></div>"
      + "<div class='row'><div class='col-sm-8'><h6>Edit Body</h6><input class='form-control' "
      + " type='text' id='post-body'></div></div></div>"
      + "<input class='btn btn-default pull-right' id='edit-post' type='button' name='submit'"
      + " value='Update Idea'>"
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
      },
      error: function() {
        alert('An idea title and body are required');
      }
    });
  });
}

