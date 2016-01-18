function postParams(title, body) {
  return { idea: { title: title, body: body } };
}

function createRecord(title, body) {
  $.ajax({
    type: 'POST',
    url: '/ideas.json',
    data: postParams(title.val(), body.val()),
    success: function(result){ renderPost(result) },
    error: function() { alert('An idea title and body are required') }
  });
}

function createPost(){
  $('#create-post').on('click', function(){
    var $postTitle  = $('#post-description');
    var $postBody   = $('#post-body');

    createRecord($postTitle, $postBody);
    resetFields($postTitle, $postBody);
  });
}

