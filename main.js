var posts=[]; 
var uniq_id=0; 

// create new post object and add it to array
var addPost= function(input){
  var newpost = {
    text:input,
    id: uniq_id
  }
  posts.push(newpost);
  uniq_id ++;
  
}

//log the array
var renderPosts=function(){
   
   // $('.posts p').remove(); // or
   $('.posts').find('p').remove();

    for(var i=0; i<posts.length; i++){
      $('.posts').append(
          '<p class=post data-id="' 
          + posts[i].id
          + ' "> '
          + posts[i].text 
          + '<button type="button" class="btn btn-primary remove-post">Remove Post</button> '
          // + comment_container
          + '</p>'
          + '</br>'
      );


      var comment_container=  '<form id="comment">  <input type="text" placeholder="name">'
      + '</br> <input type="text" placeholder="comment"> '
      + '<button type="button" class="remove_comment">Remove comment</button> '
      + '</form>' 


    }
}



/********  event binding   ***************/


$('.add-post').click(function () {
  var user_input = $('#post-name').val()
  addPost(user_input)
  //$('.posts').append('<li>'+ user_input + '<button> remove post </button> </li>' )
  renderPosts()
})

//remove post 
$('.posts').on( 'click', '.remove-post', function(){
    //  var index= $(this).closest('p').data().id;
    var index= $(this).closest('p').index();
    posts.splice(index,1)
    $(this).closest('p').remove();
});





















/* extenion 3
  var bind_p = function (){
    $('p').off();
    $('p').click(function(){
      $("this").attr(console.log($, '_blank');
    });
  }
*/









