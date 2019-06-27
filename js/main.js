$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
   TweenMax.to(".card1", 0, {//對.test進行1秒的動作
       x: 500,//往右250px
       ease: Linear.easeNone
   });
   TweenMax.to(".card2", 0, {//對.test進行1秒的動作
       x: 500,//往右250px
       ease: Linear.easeNone
   });
   TweenMax.to(".card3", 0, {//對.test進行1秒的動作
       x: 500,//往右250px
       ease: Linear.easeNone
   });
   TweenMax.to(".card4", 0, {//對.test進行1秒的動作
       x: 500,//往右250px
       ease: Linear.easeNone
   });
   TweenMax.to(".card5", 0, {//對.test進行1秒的動作
       x: 500,//往右250px
       ease: Linear.easeNone
   });
   TweenMax.to(".progress-bar", 0, {//對.test進行1秒的動作
       width: 0,//往右250px
       ease: Linear.easeNone
   });

   $('.card0 .btn-next').click(function(event){
      turnNext(0)
   });
   $('.card1 .btn-next').click(function(event){
      turnNext(1)
   });
   $('.card2 .btn-next').click(function(event){
     turnNext(2)
   });
   $('.card3 .btn-next').click(function(event){
      turnNext(3)
   });
   $('.card4 .btn-next').click(function(event){
      turnNext(4)
   });
   $('.card1 .btn-prev').click(function(event){
     turnPrev(1)
   });
   $('.card2 .btn-prev').click(function(event){
     turnPrev(2)
   });
   $('.card3 .btn-prev').click(function(event){
     turnPrev(3)
   });
   $('.card4 .btn-prev').click(function(event){
     turnPrev(4)
   });
   $('.card5 .btn-prev').click(function(event){
     turnPrev(5)
   });

   $(".btn-over").click(function(event) {
     save();
   });
});

function turnNext(n) {
  var i=1;
  if(n==1){
    if($("input[name='a2'][value='no']").is(':checked')){
      i++;
      if($("input[name='a3'][value='no']").is(':checked')){
        i++;
        if($("input[name='a1'][value='senior']").is(':checked')==false){
          i++;
        }
      }
    }
  }
  if(n==2){
    if($("input[name='a3'][value='no']").is(':checked')){
      i++;
      if($("input[name='a1'][value='senior']").is(':checked')==false){
        i++;
      }
    }
  }
  if(n==3){
    if($("input[name='a1'][value='senior']").is(':checked')==false){
      i++;
    }
  }
  TweenMax.to(".progress-bar", 0, {//對.test進行1秒的動作
      width:100*(n+i),
      ease: Linear.easeNone
  });
  TweenMax.to(".card"+n, 0.5, {//對.test進行1秒的動作
      x: -500,//往右250px
      ease: Linear.easeNone
  });
  TweenMax.to(".card"+(n+i), 0.5, {//對.test進行1秒的動作
      x: 0,//往右250px
      ease: Linear.easeNone
  });
}

function turnPrev(n) {
  var i=1;
  if(n==5){
    if($("input[name='a1'][value='senior']").is(':checked')==false){
      i++;
      if($("input[name='a3'][value='no']").is(':checked')){
        i++;
        if($("input[name='a2'][value='no']").is(':checked')){
          i++;
        }
      }
    }
  }

  if(n==4){
    if($("input[name='a3'][value='no']").is(':checked')){
      i++;
      if($("input[name='a2'][value='no']").is(':checked')){
        i++;
      }
    }
  }
  if(n==3){
    if($("input[name='a2'][value='no']").is(':checked')){
      i++;
    }
  }
  TweenMax.to(".progress-bar", 0, {//對.test進行1秒的動作
      width:100*(n-i),
      ease: Linear.easeNone
  });
  TweenMax.to(".card"+n, 0.5, {//對.test進行1秒的動作
      x: 500,//往右250px
      ease: Linear.easeNone
  });
  TweenMax.to(".card"+(n-i), 0.5, {//對.test進行1秒的動作
      x: 0,//往右250px
      ease: Linear.easeNone
  });
}

function save(){
  let postRUL = "https://script.google.com/macros/s/AKfycbyMA19abd5QgoOVdKc9XKby98IYUCxXIFhNFui6uzDiWCKdNPjT/exec";
  let param = new Object();
  param.method = "write";
  param.grade = $("input[name='a1']:checked").val();
  param.team = $("input[name='a2']:checked").val();
  param.club = $("input[name='a3']:checked").val();
  param.activity = $("input[name='a4']:checked").val();
  param.food = $("input[name='a5']:checked").val();
  param.academic = $("input[name='a6']:checked").val();
  param.promote = $("input[name='a7']:checked").val();
  param.artistic = $("input[name='a8']:checked").val();
  param.rule = $("input[name='a9']:checked").val();
  param.team_money = $("input[name='a10']:checked").val();
  param.team_rule = $("input[name='a11']:checked").val();
  param.team_help = $("input[name='a12']:checked").val();
  param.club_money = $("input[name='a13']:checked").val();
  param.club_cooperation = $("input[name='a14']:checked").val();
  param.club_help = $("input[name='a15']:checked").val();
  param.graduation_money = $("input[name='a16']:checked").val();
  param.graduation_activity = $("input[name='a17']:checked").val();
  param.say =  $("textarea[name='say']").val();
  param.sheetUrl = "https://docs.google.com/spreadsheets/d/1h8s9kNoH9-phSfJw4zz_i7gHsrHI0LpVNRRCPoBjfgo/edit#gid=0";
  param.sheetTag = "工作表1";
  $.post(postRUL, param, function(data){
    console.log(data);
    if(data.result=="success"){
      if(alert('成功，感謝您的填寫')){read();}
      else{location.reload();}
    }else{
      alert("失敗");
    }
  });
}
