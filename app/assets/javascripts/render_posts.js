function renderPost(post) {
  $('#latest-posts').append(
      "<br><br><div class='post' data-id='"
      + post.id
      + "'><h6>Thought up "
      + post.created_at
      + "</h6><p class='title'>Title: "
      + post.title
      + "</p><p class='body'>Body: " + post.body
      + "</p><p>Quality: "
      + post.quality
      + "&nbsp;&nbsp;&nbsp;"
      + "<button id='thumbs-up' class='btn btn-default btn-xs'>Thumbs Up</button>"
      + "<button id='thumbs-down' class='btn btn-default btn-xs'>Thumbs down</button>"
      + "</p><button class='edit-post' class='btn btn-default btn-xs'>Edit</button>"
      + "<button id='delete-post' class='btn btn-default btn-xs'>Delete</button>"
      + "<div class='edit form-group hidden-forms" + post.id + "'><div class='row'><div class='col-sm-4'><h6>Edit Title</h6>"
      + "<input class='form-control' type='text' id='edit-description'></div></div><div class='row'><div class='col-sm-8'>"
      + "<h6>Edit Body</h6><input class='form-control' type='text' id='edit-body'></div></div><input "
      + "class='btn btn-default pull-right edit-post update-idea' type='button' name='submit' value='Update Idea'></div></div>"
      );
  $('.edit').hide();
}

function fetchPosts() {
  $.ajax({
    type:       'GET',
    url:        '/ideas.json',
    success:    function(posts){
      $.each(posts, function(index, post) { renderPost(post) });
    }
  });
  editPost();
}

function togglePost(id) {
  $('.hidden-forms' + id).slideToggle();
}

function resetFields(title, body) {
  title.val('');
  body.val('');
}
