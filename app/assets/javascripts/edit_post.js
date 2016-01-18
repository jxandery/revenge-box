function editParams(title, body) {
  $('.update-idea').on('click', function(){
    return { idea: { title: title, body: body }};
  });
}

function updatePost(post, title, body) {
  $('.post[data-id="' + post.id + '"] p.title').html("Title: " + title);
  $('.post[data-id="' + post.id + '"] p.body').html("Body: " + body);
}

function updateRecords(post, title, body) {
  $.ajax({
    type:       'PUT',
    url:        '/ideas/' + post.attr('data-id') + '.json',
    data:       editParams(title, body),
    success:    function(result){
      updatePost(result, title.val(), body.val());
    }
  });
}

function editPost(){
  $('.edit-post').on('click', function(){
    var $postId     = $(this).closest('.post').attr('data-id');
    var $editTitle  = $('#edit-description');
    var $editbody   = $('#edit-body');
    var $post       = $(this).closest('.post');

    togglePost($postId);
    updateRecords($post, $editTitle, $editbody);
  });
}

