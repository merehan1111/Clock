
deg = 6;
    const hr = document.querySelector('#hr')
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');
    
function playAudio() {
  voice.play();
}

    setInterval(() => {
      let day = new Date();
      let hh = day.getHours();
      let mm = day.getMinutes();
      let ss = day.getSeconds();
      let hRotation = 30*hh+ mm/2;
      let mRotation = 6*mm;
      let sRotation = 6*ss;

      hr.style.transform = `rotateZ(${hRotation}deg)`;
      mn.style.transform = `rotateZ(${mRotation}deg)`;
      sc.style.transform = `rotateZ(${sRotation}deg)`;
      
     let sound = new Audio("Tiktok clock sound effect(MP3_160K).mp3");
     sound.play();

    }, 1000);
    