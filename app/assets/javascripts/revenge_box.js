$(document).ready(function(){
  fetchPosts();
  deletePost();
  createPost();
  searchPost();
  editPost();
});

function searchPost() {
  $('#filter').keyup(function() {
    var filter = $(this).val();
    $('#latest-posts').each(function() {
      if ($(this).text().search(new RegExp(filter, 'i')) < 0 ) {
        $(this).fadeOut();
      } else {
        $(this).show();
      }
    });
  });
}

function editPost(){
  // when the edit post button is clicked slide down the form
  $('.edit-post').on('click', function(){
    var $postId = $(this).closest('.post').attr('data-id');
    $('.hidden-forms' + $postId).slideToggle();
    //
    // when the update idea button is clicked
    // save the values entered into the form
    // delete the current post
    // create a new post with the saved values
    $('.update-idea').on('click', function(){
      console.log(this);
      var editDescription = $('#edit-description').val();
      var editBody = $('#edit-body').val();
      var editParams      = {
        idea: {
          title: editDescription,
          body: editBody
        }
      }

      var $post = $(this).closest('.post');

      //delete post
      $.ajax({
        type: 'DELETE',
        url: '/ideas/' + $post.attr('data-id') + '.json',
        success: function(){
          $post.remove()
        },
        error: function() {
          $post.remove()
        }
      });

      // create post
      $.ajax({
        type: 'POST',
        url: '/ideas.json',
        data: editParams,
        success: function(post){
          alert('post udpated');
          renderPost(post);
          editPost();
        },
        error: function() {
          alert('An idea title and body are required');
        }
      });
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
      + "</p><button class='edit-post' class='btn btn-default btn-xs'>Edit</button>"
      + "<button id='delete-post' class='btn btn-default btn-xs'>Delete</button>"
      //edit forms
      + "<div class='edit form-group hidden-forms" + post.id + "'><div class='row'><div class='col-sm-4'><h6>Edit Title</h6>"
      + "<input class='form-control' type='text' id='edit-description'></div></div><div class='row'><div class='col-sm-8'>"
      + "<h6>Edit Body</h6><input class='form-control' type='text' id='edit-body'></div></div><input "
      + "class='btn btn-default pull-right edit-post update-idea' type='button' name='submit' value='Update Idea'></div></div>"
      );
  $('.edit').hide();
}

function fetchPosts() {
  $.ajax({
    type: 'GET',
    url: '/ideas.json',
    success: function(posts){
      $.each(posts, function(index, post){
        renderPost(post);
      });
      editPost();
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

