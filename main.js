var posts=[]; 

//  add new post object to array
var addPost= function(input){
  posts.push({text:input});
}

//log the array
var renderPosts=function(){
   
   $('.posts').empty();
   //$('.posts').find('.post').remove();

   var comment_container=  '<div class="comment-div">' 
   + '<ul class="comment-list"> </ul>'
   + '<input type="text" placeholder="comment"> '
   + '<button type="button" class="remove_comment"> Remove comment </button>'
   + '</div>' 

    for(var i=0; i<posts.length; i++){
      $('.posts').append(
          '<li class= "post"> '
          + posts[i].text 
          + '<button type="button" class="btn btn-primary remove-post">Remove Post</button> '
          + comment_container
          + '</li>' );
    }

}



/********  event binding   ***************/


$('.add-post').click(function () {
  var user_input = $('#post-name').val();
  addPost(user_input);
  //$('.posts').append('<li>'+ user_input + '<button> remove post </button> </li>' )
  renderPosts();
})

//remove post 
$('.posts').on( 'click', '.remove-post', function(){
    //  var index= $(this).closest('p').data().id;
    var index= $(this).closest('li').index();
    posts.splice(index,1)
    $(this).closest('li').remove();
});























/* extenion 3
  var bind_p = function (){
    $('p').off();
    $('p').click(function(){
      $("this").attr(console.log($, '_blank');
    });
  }
*/









