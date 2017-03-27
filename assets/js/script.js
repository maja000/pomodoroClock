var workVal;
var breakVal;
var dMin;
var dSec;
var myVar;
var myVar2;


workVal = parseInt($('#workVal').html());
breakVal = parseInt($('#breakVal').html());
var audio = new Audio("http://www.soundjay.com/misc/bell-ringing-04.wav");


$(document).ready(function() {

   Display(25,00);
   GetDate();
  
  $('#addWork').click(function() {
   workVal = parseInt($('#workVal').html());
  
   $('#workVal').html(workVal + 1);
    if (workVal === 60) {
    $('#workVal').html(60);
  }//if
    Display(workVal+1,00);
    
  });
  
  
  $('#minWork').click(function() {
  workVal = parseInt($('#workVal').html());
    
  $('#workVal').html(workVal - 1);
  
 // if (workVal === 1) {//
   // $('#workVal').html(1);
  //}
  if(workVal==0){ $('#workVal').html(0); } 
  Display(workVal-1,00);
    
});
   
  $('#addBreak').click(function() {
  breakVal = parseInt($('#breakVal').html());
  $('#breakVal').html(breakVal + 1);

  if (breakVal === 30) {
    $('#breakVal').html(30);
  }
});
  
  $('#minBreak').click(function() {
  breakVal = parseInt($('#breakVal').html());
  $('#breakVal').html(breakVal - 1);
    if (breakVal === 1) {
    $('#breakVal').html(1);
  }
    
});
  
   $("#stop").click(function(){clearInterval(myVar);  clearInterval(myVar2);});
  
  $("#start").click(function(){
    dMin=parseInt($('#workVal').html());
   Start(dMin,00);
  });
   
  $("#reset").click(function(){
     clearInterval(myVar);
     clearInterval(myVar2);
      Display(00,00);
    $('#breakVal').html(0);
    $('#workVal').html(0);
  });
  
 
});//doc


function GetDate(){
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
var newDate = new Date();

newDate.setDate(newDate.getDate());
  
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

}//function Date

function Display(minutes1,seconds1){
$("#min").html(( minutes1 < 10 ? "0" : "" ) + minutes1);
$("#sec").html(( seconds1 < 10&& seconds1 >=0 ? "0" : "" ) + seconds1);
}//Display


function Start(minutes,seconds){

  var breakInterval=parseInt($('#breakVal').html());
  console.log(breakInterval);
$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
$("#sec").html(( seconds < 10&& seconds >=0 ? "0" : "" ) + seconds);
 
 var counter=(minutes*60)+seconds-1;
   
  myVar=setInterval( function() {
     if(counter==0){ clearInterval(myVar);audio.play();Druga(breakInterval,00);}
     
         if(seconds==00){
              minutes=minutes-1;
	            $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
              seconds=60;
            }//if
    
    seconds--;
    counter--;
  
    $("#sec").html(( seconds < 10&& seconds >=0 ? "0" : "" ) + seconds);
  },1000);//setinterval

}//function

function Druga(minutes,seconds){
  
 $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
$("#sec").html(( seconds < 10&& seconds >=0 ? "0" : "" ) + seconds);
 
 var counter=(minutes*60)+seconds-1;
  
  myVar2=setInterval( function() {
     if(counter==0){ clearInterval(myVar2);}
     
         if(seconds==00){
              minutes=minutes-1;
	            $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
              seconds=60;
            }//if
    
    seconds--;
    counter--;
  
    $("#sec").html(( seconds < 10&& seconds >=0 ? "0" : "" ) + seconds);
  },1000);//setinterval
}