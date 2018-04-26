var posts=[]; 
var uniq_id=0; 

//create new post object and add it to array
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
   
   // $('.posts p').remove();// or
   $('.posts').find('p').remove();
   $('.posts').find('form').remove();


    for(var i=0; i<posts.length; i++){
      $('.posts').append(
          '<p class=post data-id="' 
          + posts[i].id
          + ' "> '
          + posts[i].text 
          + '<button type="button" class="remove_post">Remove Post</button> '
          + '<form id="comment">  <input type="text" placeholder="name">'
          + '</br> <input type="text" placeholder="comment"> '
          + '<button type="button" class="remove_comment">Remove comment</button> '
          + '</form>' 
          + '</p>'
          + '</br>'
         
      );
      bind_remove_post_button(i);//bind all existing buttons!!!
      bind_remove_comment_button();
      bind_p();
    }
}

var post_a_post =function (){
   var  text= $('#post-name').val();
   addPost(text);
   renderPosts();
   $('input:text').val(''); //clear the input form 
}

$('.add-post').click(post_a_post);


var bind_remove_post_button = function (index){
  $('.remove_post').off();
  $('.remove_post').click(function (){
    posts.splice(index, 1);
    renderPosts();
  });
  
}
   
var bind_remove_comment_button = function (){
  $('.remove_comment').off();
  $('.remove_comment').click(function (){
   // $('this').closest('form').remove();
    $('#comment').remove();

  });
  }
  
/*
  var bind_p = function (){
    $('p').off();
    $('p').click(function(){
      $("this").attr(console.log($, '_blank');
    });
  }
*/

// $('this').closest('p').data().id;

