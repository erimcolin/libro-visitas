var mediumText = document.getElementById('medium-text');
var smallText = document.getElementById('small-text');
var textColor = document.getElementById('text-color');
var bgColor = document.getElementById('background-color');
var textLeft = document.getElementsByClassName('align-text');
var textCenter = document.getElementsByClassName('align-text');
var textRight = document.getElementsByClassName('align-text');

var commentText = document.getElementById('exampleFormControlTextarea1');
var commentPreview = document.getElementById('comment-preview');

// bigText.addEventListener('click', bigSize);
mediumText.addEventListener('click', mediumSize);
smallText.addEventListener('click', smallSize);
textColor.addEventListener('click', colorText);
bgColor.addEventListener('click', backColor);
textLeft.addEventListener('click', leftText);
textCenter.addEventListener('click', centerText);
textRight.addEventListener('click', rigthText);

// textarea
commentText.addEventListener('keyup', updatePreview);

function updatePreview(){
  var commentText = event.target.value   //  commentText.value  //jalar el textarea por ID
}


function bigSize(){
  if (this.value === 'large'){
    bigText.style.fontSize = '50px';
  }
};
