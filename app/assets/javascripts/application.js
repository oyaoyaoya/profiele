$(function(){


  ///初期の設定
  var menubar = $("#menubar")
  var ore = $('#ore');
  var ure = $('#ure');
  var ptext = $('#pright')

  $(window).on('scroll',function(){
  	// スクロール量を取得
  	var y = $(window).scrollTop();// Y方向 (縦)
    //固定
    var fixed = function(){
      menubar.css({'position':'fixed','z-index':'5','background':'rgba(255,255,255,0,6);',
    });
      menubar.fadeIn(2000);
    }


　　　//動き
    var move = function(){
      ore.animate({'left':'2px'},2000);
      ure.animate({'left':'2px'},2000);
    }

    //fadein
    var fadein = function(){
       ptext.fadeIn(2000);
    }

    //メニュー固定発動
     if (y >= 90){
       fixed();
     }


　　//動き発動
    if(y >= 200){
      move();

    }

   //fadeIn発動
   　if (y >=250){
      fadein();
   }



  });


//クリック時に暗くなる
var mlink = $("#mlink");
var blink =$("#blink");

mlink.on('click',function(){
  $(this).css('-webkit-filter','grayscale(70%)');
  blink.css('-webkit-filter','');
});

blink.on('click',function(){
   $(this).css('-webkit-filter','grayscale(70%)');
   mlink.css('-webkit-filter','');
});

//topに戻る↑
    var btt =$("#back-to-top");
    //back-to-topを消す
    btt.hide();
    //スクロールがある程度進んだら、back-to-topを表示する。スクロールが戻ったら、非表示
    $(window).scroll(function(){
      if ($(this).scrollTop()>300){
          btt.fadeIn();
      }else{
          btt.fadeOut();
      }
    });
    //back-to-topがクリックされたら、上に戻る
    $("#back-to-top a").click(function(){
      $('body').animate({
          scrollTop:0
      },500);
      return false;
    });

});
