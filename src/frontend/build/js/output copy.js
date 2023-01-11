
//DOM for Slider
const slider = document.getElementById("my-slider");
let value =  Number(slider.value);
const valueText = document.getElementById("value");
//DOM for Video Background
const videoElem = document.getElementById("video");
//DOM For Html element
const titleElem = document.getElementById("title");
const artistElem = document.getElementById("artist");
const linkElem = document.getElementById("link");
const ranSongElem = document.getElementById('ranSong');
const findButton = document.getElementById("button");
const reset = document.getElementById("reset");
const cardElem = document.getElementById('card1');

function display(){
  let depressedVid = [];
  let sadVid = []
//   let netVid = [net2];
  let upVid = [];
  let happyVid = []
  let euVid = [];
//   let rageVid = [rage rage4];
  let randomNum = Math.floor(Math.random()*4);
  if(value == 0){
      let num = Math.floor(Math.random()*12)
      getSong(num);
      ranSongElem.innerText = "Random 💔Depressed💔 Song";
      videoElem.setAttribute('src',`background/${depressedVid[randomNum]}.mp4`);
    }
    else if(value ==1){
        let num = Math.floor(Math.random()*12)
        getSong(num);
        ranSongElem.innerText = "Random 😭Sad😢 Song"
        videoElem.setAttribute('src',`background/${sadVid[randomNum]}.mp4`);
    }
    else if(value ==2){
        let num = Math.floor(Math.random()*16)
        getSong(num);
        ranSongElem.innerText = "Random 😢Neutral🙃 Song"
        videoElem.setAttribute('src',`background/${netVid[randomNum]}.mp4`);
    }
    else if(value ==3){
        let num = Math.floor(Math.random()*18)
        getSong(num);
        ranSongElem.innerText = "Random 😊Uplifting😄 Song"
        videoElem.setAttribute('src',`background/${upVid[randomNum]}.mp4`);
    }
    else if(value ==4){
        let num = Math.floor(Math.random()*14)
        getSong(num);
        ranSongElem.innerText = "Random 😜Happy😁 Song"
        videoElem.setAttribute('src',`background/${happyVid[randomNum]}.mp4`);
    }
    else if(value ==5){
        let num = Math.floor(Math.random()*12)
        getSong(num);
        ranSongElem.innerText = "Random 😆Euphoric🥰 Song"
        videoElem.setAttribute('src',`background/${euVid[randomNum]}.mp4`);
    }
    else if(value ==6){
        let num = Math.floor(Math.random()*14)
        getSong(num);
        ranSongElem.innerText = "Random 😤Rage😈 Song"
        videoElem.setAttribute('src',`background/${rageVid[randomNum]}.mp4`);
    }
}
    async function getSong() {
      try {
        //await and fetch the data from the database
        const response = await fetch(`http://localhost:8080/songs/findBy/+${value}`)
        //await and parse the response into a JavaScript Object
        const responseJSON = await response.json(); 
        let num = Math.floor(Math.random()*responseJSON.length);
        //responseJSON is an array of data, use index to indicate which one to use
        titleElem.innerHTML = `${responseJSON[num].song_name}`;
        artistElem.innerText = `${responseJSON[num].artist}`;
        //linkElem.href = `${responseJSON[num].link}`;
        linkElem.setAttribute("src", `${responseJSON[num].link}`)

      }
      //catching an error and console log
      catch (e) {
        console.log(e)
      }
    }


findButton.addEventListener("click", function() {
    ask.classList.toggle('active');
    output.classList.toggle('active');
    ask1.classList.toggle('active');
    output1.classList.toggle('active');
    display();
});


reset.addEventListener("click",function(){
    ask.classList.toggle('active');
    output.classList.toggle('active');
    ask1.classList.toggle('active');
    output1.classList.toggle('active');
    videoElem.setAttribute('src',` `);
    cardElem.style.color = 'black';
});

//function to change the slider's value
slider.addEventListener("input", function() {
    if(this.value == 0){
        valueText.innerText = "💔Depressed💔";
        value = this.value;
    }
    else if(this.value == 1){
        valueText.innerText = "😭Sad😢"
        value = this.value;
    }
    else if(this.value == 2){
        valueText.innerText = "😢Neutral🙃"
        value = this.value;
    }
    else if(this.value == 3){
        valueText.innerText = "😊Uplifting😄"
        value = this.value;
    }
    else if(this.value == 4) {
        valueText.innerText = "😜Happy😁"
        value = this.value;
    }
    else if(this.value == 5){
        valueText.innerText = "😆Euphoric🥰"
        value = this.value;
    }
    else if(this.value == 6) {
        valueText.innerText = "😤Rage😈"
        value = this.value;
    }
  });

//this will change the color of the heading's underline
var i = 0;
function change() {
var colorPicker = ['#FEFCF3','#FBFACD',"#7F669D",'#F7A4A4','#FEBE8C',"#BCE29E",'#B1B2FF','#D0B8A8',"#A7D2CB",'#ECC5FB','#BA94D1',"#FFF5E4",'#CDF0EA','#F9F9F9',"#F675A8",'#AF7AB3','#E4D192',"#AF7AB3",'#6E85B7','#FFB3B3',"#CDF0EA",'#F6C6EA','#F4BFBF',"#D18CE0",'#FFF89A','#FF8AAE',"#F3C5C5",'#E7FBBE','#6867AC',"#D3DEDC",'#B983FF','#99FEFF'];
document.documentElement.style.setProperty('--border', colorPicker[i]); 
i = (i + 1) % colorPicker.length;
}
setInterval(change, 800);