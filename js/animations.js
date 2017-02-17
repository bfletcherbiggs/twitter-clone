var tCompose = $('#tweet-compose-main')
var tCharCount = $('#char-count')
var tSubmit = $('#tweet-submit')
var tFeedNew = $('.tweet:first')
var tBtnTweet = $('#tweet-submit')

tSubmit.prop('disabled',true)
tSubmit.css({"background":"#1b95e0","opacity":".2"})

function startCompose(){
  $('#tweet-controls').show()
  tCompose.css('height','5rem')
  // tCompose.height(tCompose.height()*2.5)
}
function exitCompose(){
  if(this.value.length===0){
    $('#tweet-controls').hide()
    tCompose.css("height","")
  }


}
function countCompose(){
  var len = 140-this.value.length
  console.log(this.value.length)


  if (len<=10 && len>=0){
    tCharCount.css("color","red"),
    tCompose.css("background","#fcc")
  }
  else if (len<0){
    tSubmit.prop('disabled',true)
    tSubmit.css({"background":"#1b95e0","opacity":".2"})
  }
  else{
    tCharCount.css("color",""),
    tCompose.css("background","")
    tSubmit.prop('disabled',false)
    tSubmit.css({"background":"","opacity":""})
  }
    //To select only overwritten text, possibly cut it into two arrays/two spans or append <em></em> and add style to <em
    if(this.value.length === 0){
      tSubmit.prop('disabled',true)
      tSubmit.css({"background":"#1b95e0","opacity":".2"})
    }
  tCharCount.text(len)
}
function tweet(){
  tCompose.val('')
  tCharCount.text('140')
  tCompose.blur()
  tSubmit.prop('disabled',true)
  tSubmit.css({"background":"#1b95e0","opacity":".2"})
  tFeedNew.prepend('<div class="tweet"><div class="content"><img class="avatar" src="img/damenleeturks.jpg" /><strong class="fullname">My BFF</strong><span class="username">@mybff</span><p class="tweet-text">Today is an amazing day.</p><div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div><div class="stats">0</p><p>RETWEETS</p></div><div class="favorites"><p class="num-favorites">0</p><p>FAVORITES</p></div><div class="users-interact"><div><img src="img/alagoon.jpg" /><img src="img/vklimenko.jpg" /></div></div><div class="time">1:04 PM - 19 Sep 13</div></div><div class="reply"><img class="avatar" src="img/alagoon.jpg" /><textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea></div></div></div>')
}




$(document).ready( function(){
// Compose Tweet
  tCompose.focus(startCompose)
  tCompose.blur(exitCompose)
  tCompose.keyup(countCompose)
  tCompose.keydown(countCompose)
// Add Tweet to Feed
  tBtnTweet.click(tweet)










});
