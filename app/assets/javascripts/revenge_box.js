$(document).ready(function(){
  fetchPosts();
  deletePost();
  createPost();
  searchPost();
  editPost();
});

var $latestPosts = $('#latest-posts');

