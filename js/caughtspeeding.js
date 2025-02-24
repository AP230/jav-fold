function caughtSpeeding (x,y){


  var isBirthday = x;
  var speed = y;

  if(isBirthday){
         speed -=5;
   }


if(speed <= 60) {
  console.log(0);
}
else if ( speed <=81) {
  console.log(1);
}
else {
  console.log(2);
}

}

caughtSpeeding(true, 65); //should be 0
caughtSpeeding(false, 65); //should be 1
caughtSpeeding(false, 200); //should be 2