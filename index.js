
$(document).ready(function(){
  function getQuote(){
    var quotes = [
      
"I'm not offended by homosexuality. In the '60s I made love to many, many women -- often outdoors in the mud and the rain -- and it's possible that a man slipped in. There'd be no way of knowing",

"I find it offensive. Au naturale, baby. That's how I like them. Swing low, sweet chariots.",
      
"Everywhere I look it's Betty White this and Betty White that. Finally a kid who's not talking about Betty White. Of course I follow him." ,
      
"The only difference between me and a homeless man is this job. I will do whatever it takes to survive. Like I did when I was a homeless man.",
      
"I run a small fake-ID company from my car with a laminating machine that I swiped from the sheriff's station.",
      
"A lot of jazz cats are blind. But they can play the piano like nobody's business. I'd like to put the piano in front of Pam without her glasses and see what happens. I'd also like to see her topless." ,
      
 "Nobody steals from Creed Bratton and gets away with it. The last person to do this disappeared. His name?...Creed Bratton.",
      
      "I'm a pretty normal guy. I do one weird thing. I like to go in the women's room for number 2.",
      
       "When Pam gets Michael's new chair, I get Pam's old chair. Then I'll have two chairs. Only one to go.",
      
      "Did one of you tell Stanley that I have asthma? 'Cause I don't. If this gets out, they won't let me scuba. And if I can't scuba, what am I working toward?",
      
      "Everything's cool dude.",
      
      "I've been involved in a number of cults, both as a leader and a follower. You have more fun as a follower. But you make more money as a leader.",
      
      
      "Okay. Team Building. On this side of the room: Stanley, Phylis, Jim, Ted, Elroy. And this side of the room: Pam, Meredith, Phylis, Creed.",
      
      "Two eyes, two ears. A chin. A mouth. Ten fingers, two nipples. A butt, two knee caps, a penis. I've just described to you the Lochness Monster. And the reward for its capture? All the riches in Scotland. So I have one question: why are you here?",
      
      "If my parents see this, I am toast.",
      
      "The Taliban is the worst...great heroin though.",
      
      "A wheel wants to spin, Pam.",
      
      "A beautiful morning at Dunder Mifflin, or like a like to call it, Great Bratton.",

      "Best Edward James Olmos costume I've ever seen...like freaky good.",
 
      
      "I've done a lot more for a lot less.",
      
      "You ever notice you can only ooze two things? Sexuality and pus. Man, I tell ya.",
      
      "Have you tried making everything smaller?"];
    var randNum = Math.floor((Math.random()*quotes.length));
    var randQuote = quotes[randNum];
    $(".quotes").text(randQuote);
    $(".ql").addClass("fa fa-quote-left");
    $(".qr").addClass("fa fa-quote-right"); 
       $("#tweetQuote").on("click", function tweet(url, text) {
      url = encodeURIComponent(url);
      text = randQuote;
      window.open("https://twitter.com/intent/tweet?original_referer=" + url + "&text=" + text + "&url=" + url, "_blank");
    });
  }
   
  $(".quote-button").on("click", function(){
      getQuote();  
    }); 
  

});