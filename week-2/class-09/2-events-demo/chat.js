// Here's the constructor for the individual comments
var Comment  = function(userName, text) {
  this.userName = userName;
  this.text = text;
};

Comment.prototype.render = function() {
  var liEl = document.createElement('li');
  liEl.innerHTML = '<img width="100px" src="img/' + this.userName + '.jpg"> <b>' + this.userName + ': </b><em>' + this.text + '</em>';
  return liEl;
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Just setting up some variables for DOM access
var comments = document.getElementById('comments');
var chatForm = document.getElementById('chat-form');
var clearComments = document.getElementById('clear-comments');
var commentData = [];

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This is a global function to render all of the new instances
var renderAllComments = function() {
  comments.innerHTML = '';
  commentData.forEach(function(comment) {
    comments.appendChild(comment.render());
  });
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// This function handles the submission of comments
function handleCommentSubmit(event) {
  console.log(event);
  event.preventDefault(); //gotta have it. prevents page reload

   if (!event.target.says.value || !event.target.who.value) {
    return alert('Fields cannot be empty!');
   }

   var commenter = event.target.who.value;
   var remark = event.target.says.value;

   if (commenter === 'Emily') {
    remark = 'YOLO SWAG 420!!!!';
   }

   var newComment = new Comment(commenter, remark);

   console.log('Comment by ' + event.target.who.value + ' at ' + Date());
   event.target.who.value = null;
   event.target.says.value = null;

   commentData.push(newComment);
   renderAllComments();
};

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for comment submission form
chatForm.addEventListener('submit', handleCommentSubmit);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++
// Event listener for the 'Clear all comments' button
clearComments.addEventListener('click', function() {
  console.log('You just cleared the comments!');
  comments.innerHTML = '';
  commentData = [];
});
