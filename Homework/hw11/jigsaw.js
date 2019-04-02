

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


//Get random group of images
function getRandomInt(max){
    return Math.floor(Math.random()*Math.floor(max));
}
console.log(getRandomInt(3));

var n = getRandomInt(3); //should be 0, 1, or 2
console.log(n);
var set;
// chooses the image set
if (n == 0){
	set = "image1";
} 
else if (n == 1) {
	set = "image2";
}
else {
	set = "image3";
}

// dict of images from image set
console.log(set);
var imagesArray = [["img1-1.jpg", "img1-2.jpg", "img1-3.jpg", "img1-4.jpg", "img1-5.jpg", "img1-6.jpg", "img1-7.jpg", "img1-8.jpg", "img1-9.jpg", "img1-10.jpg", "img1-11.jpg", "img1-12.jpg"], ["img2-1.jpg", "img2-2.jpg", "img2-3.jpg", "img2-4.jpg", "img2-5.jpg", "img2-6.jpg", "img2-7.jpg", "img2-8.jpg", "img2-9.jpg", "img2-10.jpg", "img2-11.jpg", "img2-12.jpg"], ["img3-1.jpg", "img3-2.jpg", "img3-3.jpg", "img3-4.jpg", "img3-5.jpg", "img3-6.jpg", "img3-7.jpg", "img3-8.jpg", "img3-9.jpg", "img3-10.jpg", "img3-11.jpg", "img3-12.jpg"]];

console.log("n=",n);
// align image set number correctly
var s = n+1
console.log("s=",s);
//
var images = imagesArray[n];
// image grid array
var xygrid = ["00", "01", "02", "03", "10", "11", "12", "13", "20", "21", "22", "23"];
count = 0;
// assign images randomly to each image
while (count < 12){
	var m = Math.floor(Math.random() * images.length);
	var str = "images/"+"/image" + s.toString() + "/" + images[m];
    console.log("image set =",set,"image=",images[m],"this is",str);
    console.log(xygrid[count]);
    //document.getElementById(""+xygrid[count].toString()).src = str;
	document.getElementById(xygrid[count].toString()).src = str;
	images.splice(m, 1);
	count++;
}


var clock = setInterval(timer, 1000);
var secs = 0;
var mins = 0;
var hours = 0;
var time = document.getElementById("time");

function timer(){
  secs++;
  if (secs==60){
    secs=0;
    mins++;
  }
  else if (mins == 60){
    mins=0;
    hours++;
  }

  time.value = hours + ":" + mins + ":" + secs;
}

function stopTime(){
  clearInterval(clock);
    
  function check(){
    var i;
    for( i=0 ; i< imagesArray.length; i++){
        if (set == "image1"){
            if ($("#grid"+i).find("img").attr('src'.includes(imagesArray[0[i]])))
                console.log(imagesArray[0[i]]);
                alert("CORRECT!")
                return true
            }
            return false
        if (set == "image2"){
            if ($("#grid"+i.toString()).find("img").attr('src'.includes(imagesArray[0[i]])))
                {
                console.log(imagesArray[1[i]]);
                alert("CORRECT!")
                return true
            }
            return false
        }
        if (set == "image3"){
            if ($("#grid"+i.toString()).find("img").attr('src'.includes(imagesArray[0[i]])))
                {
                console.log(imagesArray[2[i]]);
                alert("CORRECT!")
                return true
            }
            return false;
        }


        }
  }
  var outcome = check();
  console.log(outcome);
  if (outcome ==true){
  alert("correct refresh to try again");
  }
  if(outcome == false){
      alert("false refresh to try again");
  }
}
