//var posts=[]; 
var posts = [
  {
    text: "Hello world 1", comments: [
      "Man, this is a comment 1!" ,
       "Man, this is a comment 2!" ,
      "Man, this is a comment 3!" 
    ]
  },
  {
    text: "Hello world 2", comments: [
      "Man, this is a comment 4!" ,
       "Man, this is a comment 5!" ,
      "Man, this is a comment 6!" 
    ]
  },
  {
    text: "Hello world 3", comments: [
      "Man, this is a comment 7!" ,
       "Man, this is a comment 8!" ,
      "Man, this is a comment 9!" 
    ]
  }
];

//  add new post object to array
var addPost= function(input){
  posts.push({text:input, comments:[]});
}

//log the array
var renderPosts=function(){
   
   $('.posts').empty();
   //$('.posts').find('.post').remove();

   var comment_container =  '<div class="comment-container">' 
   + '<ul class="comment-list"> </ul>'
   + '<input type="text" placeholder="comment"> '
   + '<button type="button" class=" btn btn-primary post-comment"> Post Comment </button>'
   + '</div>' 

    for(var i=0; i<posts.length; i++){
      $('.posts').append(
          '<li class= "post"> '
          + '<a href="#" class="post-text">' + posts[i].text + '</a>'
          + '<button type="button" class="btn btn-primary remove-post">Remove Post</button> '
          + '<a href="#" class="toggle-comments">Toggle Comments </a> ' 
          + comment_container
          + '</li>' );
    }

}

var renderComments = function() {
  for( var i=0; i< posts.length; i++){
  var $post=$('.posts').find('.post').eq(i);

    for(var j=0; j<posts[i].comments.length; j++){
      $post.find('.comment-list').append(
      '<li >'+ posts[i].comments[j] + 
      '<button class="btn btn-primary delete-comment"> delete comment </button> </li>');
    }
  }
}

//console.log(posts)
renderPosts();
renderComments();


/********  event binding   ***************/


$('.add-post').click(function () {
  var user_input = $('#post-name').val();
  addPost(user_input);
  //$('.posts').append('<li>'+ user_input + '<button> remove post </button> </li>' )
  renderPosts();
  renderComments();

})

//remove post 
$('.posts').on( 'click', '.remove-post', function(){
    //  var index= $(this).closest('p').data().id;
    var index= $(this).closest('li').index();
    posts.splice(index,1)
    $(this).closest('li').remove();
   //renderPosts();
   //renderComments();
});

//post comment
$('.posts').on('click', '.post-comment', function(){
  var comment= $(this).siblings('input').val();
  var index= $(this).closest('li').index();
  posts[index].comments.push(comment);
  //console.log(posts)
  $('.comment-list').append( '<li class="comment">' + comment +
   '<button class="btn btn-primary delete-comment"> delete comment </button> </li>');
  //renderComments();
} )

//delete comment
$('.posts').on('click', '.delete-comment', function(){
  var index_com= $(this).closest('.comment').index();
  var index_post= $(this).closest('.post').index();
  posts[index_post].comments.splice(index_com,1)
  $(this).closest('li').remove();
})

//toggle comment
$('.posts').on('click', '.toggle-comments', function () {
  var $clickedPost = $(this).closest('.post');
  $clickedPost.find('.comment-container').toggleClass('show');
});

//show post in new tab 
$('.posts').on('click', '.post-text', function(){
   var w = window.open();
    var post_text = $(this).html();

    var $commentList= $(this).siblings('.comment-container').find('.comment-list')
    var comments= $commentList.html();
   // $(w.document.body).html(post_text);
    w.document.write(post_text);
    w.document.write(comments);
})








