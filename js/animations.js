//selector variables//
var tCompose = $('#tweet-compose-main')
var tCharCount = $('#char-count')
var tSubmit = $('#tweet-submit')
var tFeed= $('#stream')
//class variables
var tActions = '.tweet-actions'
var tStats = '.stats'
var tReply = '.reply'
//function variables//
var tFunc = tweetFlex();

tSubmit.prop('disabled',true)
tSubmit.css({"background":"#1b95e0","opacity":".2"})

function startCompose(){
  $('#tweet-controls').show()
  tCompose.css('height','5rem')
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

  if(len === 140){
    tCharCount.css("color",""),
    tCompose.css("background","")
    tSubmit.prop('disabled',true)
    tSubmit.css({"background":"#1b95e0","opacity":".2"})
  }
  else if (len<=10 && len>=0){
    tCharCount.css("color","red"),
    tCompose.css("background","#fcc")
    tSubmit.prop('disabled',false)
    tSubmit.css({"background":"","opacity":""})
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

  tCharCount.text(len)
}
function tweet(){
  //Save message as variable
  var tMessage = tCompose.val();
  //Manage time of stweet
  localStorage.setItem('dateOfTweet',Date())
  var tTime = moment().format('h:mm a - DD MMM YY')
  //Reset tweet box
  tCompose.val('')
  tCharCount.text('140')
  tCompose.blur()
  tSubmit.prop('disabled',true)
  tSubmit.css({"background":"#1b95e0","opacity":".2"})
  tCharCount.css("color","")
  tCompose.css("background","")

  tFeed.prepend(`<div class="tweet">
    <div class="content">
      <img class="avatar" src="img/alagoon.jpg" />
      <strong class="fullname">Benito</strong>
      <span class="username">@buanito</span>
      <p class="tweet-text">${tMessage}</p>
        <div class="tweet-actions">
          <ul>
            <li><span class="icon action-reply"></span> Reply</li>
            <li><span class="icon action-retweet"></span> Retweet</li>
            <li><span class="icon action-favorite"></span> Favorite</li>
            <li><span class="icon action-more"></span> More</li>
          </ul>
        </div>
        <div class="stats">
          <div class="retweets">
            <p class="num-retweets">0</p>
            <p>RETWEETS</p>
          </div>
          <div class="favorites">
            <p class="num-favorites">0</p>
            <p>FAVORITES</p>
          </div>
          <div class="users-interact">
            <div>
            </div>
          </div>
          <div class="time">${tTime}</div>
        </div>
      <div class="reply">
        <img class="avatar" src="img/alagoon.jpg" />
        <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>
      </div></div></div>`)
}
function tweetFlex(){
  return {
    mo: function(){
      console.log(this)
      $(this).find(tActions).show()
    },
    ml: function(){
      $(this).find(tActions).hide()
    },
    cl: function(){
      // console.log($(this).children().children())
      $(this).find(tReply).slideToggle()
      $(this).find(tStats).slideToggle()
    }
}}

function relative_time() {

  var dater = localStorage.getItem('dateOfTweet')
  dater = (new Date(dater))
  var min = dater.getMinutes()
  var hours = dater.getHours()

  var min2 = new Date().getMinutes()
  var hours2 = new Date().getHours()

  var totalMin = min+(hours*60)
  var totalMin2 = min2+(hours2*60)

  var delta = totalMin2 - totalMin


      if (delta < 1) {
        return 'a few seconds ago';
      } else if(delta <60) {
        return delta+"m ago"
      } else if(delta >60 && delta<120) {
        return '1h'
      } else {
        return dater;
      }
  }




$(document).ready( function(){
// Compose Tweet
  tCompose.focus(startCompose)
  tCompose.blur(exitCompose)
  tCompose.keyup(countCompose)
  tCompose.keydown(countCompose)
// Add Tweet to Feed
  tSubmit.click(tweet)
  tFeed.on({mouseover: tFunc.mo,mouseleave:tFunc.ml,click:tFunc.cl},'.content')












});
