
##WDI Group Project
###Maxim Kartuzov, Monju Miah, Harry Stirling

<a href="https://imgflip.com/gif/1p9kg4"><img src="https://i.imgflip.com/1p9kg4.gif" title="made at imgflip.com"/></a>

###"Time is money. Learn to touch type now "

#####Qwerty™  is a completely free service that trains you to become more productive, speeding up your WPM so you can work as fast as your thoughts.


<img src="/Users/MonjuMiah/Desktop/Group Project/Home.png">

The base of user experience is composed on improving ones typing skill using a desktop/laptop interface ONLY. we tried to make it fun using

Three big tab-buttons in the top-left corner are used for basic program modes: Current lesson, user score, speed and on top right a timer counter to indicate how long you have to complete the content.

In center of a window, the text to be typed is displayed. The counter will start when the first letter is typed. Upon completion of a level the  difficulty will increase going on to the next one. It will also save & populate users progress.

This will help you to learn touch typing with all ten fingers



##Planning

In this project we were assemebled in a group of three as part of a  group project. The requirements of this project were to build an JWT authenticated RESTful MEAN stack application using AngularJS, with a chosen CSS framework.

We came up with a concept of few ideas we wanted to run with and chose QWERTY as our chosen idea for this project. 

<img src='/Users/MonjuMiah/Desktop/Group Project/QWERTYA.jpg'>

We spent a couple of days carefully planning our Mongoose models, as they needed to be embedded within each other so that we could link and reference the right data on the front-end.



<img src='/Users/MonjuMiah/Desktop/Screen Shot 2017-05-18 at 15.33.42.png'>

Tasks were organised and delegated using a Trello board. We had three stand-ups and Git merges  on a daily basis to ascertain what had to be achieved and what still needed to be completed.


##Wire-Frames 

We also collaborated on the using sketch wireframes before starting to code, so that everyone approved the look of the app which also gave us a foundation/ reference of what our interface should portray.


<img src='/Users/MonjuMiah/Desktop/Group Project/Login.png'>

<img src='/Users/MonjuMiah/Desktop/Group Project/Register.png'>


##Challenges

* This was our first experience working within a team. We found some conflicts with our Git commits. In order to overcome we made sure that we were all woking on a different branch and merged to our secondary master branch which we made sure was as up-to-date as possible, with multiple merges per day and many commits.

* We also had a stumbling block with error handling in our registration form as it was not passing the error messages when data was.

* Getting live update of scores for each user on the leader board.

* Alert after level completion

* Taking on a new CSS framework(Tachyons) and manipulate our own style.

##Wins 

Complementing our strengths and weakness as a group. 

Getting the 'hang' of using Git Command in a team

Wrapping the text in Span to make it highlight green for when characters was typed correct and red when typed incorrectly was challenge but was also a great win

```
function splitIntoSpans(text) {
  return text.split('').map(function(n) {
    return '<span>' + n + '</span>';
  }).join('');
}
```

<img src='/Users/MonjuMiah/Desktop/Group Project/Screen Shot 2017-05-18 at 16.15.18.png'>




##Things We Want To Add

* Keyboard interface when typing the content.

* Sockets for multiplyer usage.

* WPM calculation 

##Technnologies Used

* SCSS
* AngularJS
* Node.js
* MongoDB
* Gulp
* Bower
* Tachyons
* Yarn
* jQuery

## MADE BY IPA MASTERS

<img src='/Users/MonjuMiah/Desktop/Group Project/TeamPhoto.jpg'>


