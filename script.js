window.onload = () => {
  let check = 2;
  let music = document.createElement("audio");
  music.setAttribute("src", "http://neuro-network.tk/scary.mp3");
  music.setAttribute("id", "radio-player");
  music.setAttribute("loop", "true");


  radio_btn.addEventListener('click', function () {


    if (check % 2 == 0) {
      music.play();
      music.muted = false;
      radio_btn.innerHTML = "Stop Music";
      check++;
    } else {
      music.muted = true;
      radio_btn.innerHTML = "Play Music";
      check++;
    }
  });

  let n = 2;

  $('#optimize_btn').click(function () {
    if (n % 2 === 0) {
      $('*').css('box-shadow', 'none');
      $('.hand1').css('box-shadow', 'none');
      $('.hand2').css('box-shadow', 'none');
      n++;
      $('#optimize_btn').html('Unoptimize Ghost');
    } else {
      $('.body').css('box-shadow', '0 0 20px white');
      $('.hand1').css('box-shadow', '0 0 20px white');
      $('.hand2').css('box-shadow', '0 0 20px white');
      $('.pumpkin').css('box-shadow', '0 0px 20px #a14907, 0 0 30px -4px red');
      $('.part').css('box-shadow', '0 0 20px white');
      $('#optimize_btn').html('Optimize Ghost');
      $('.pumpkin .eye').css('box-shadow', '0 0 50px #ffbe20');
      $('.pumpkin .mouth').css('box-shadow', '0 0 50px #ffbe20');
      $('.hat_outer').css('box-shadow', '1px 1px 10px yellow, -1px -1px 10px yellow');
      $('.eye1').css('box-shadow', '0 0 10px #4d4d4d');
      $('.mouth1').css('box-shadow', '0 0 10px #4d4d4d');
      n++;
    }
  });


};