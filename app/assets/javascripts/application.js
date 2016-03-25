$(function(){


  ///初期の設定
  var ore = $('#ore');
  var ure = $('#ure');
  $(window).on('scroll',function(){
  	// スクロール量を取得
  	var y = $(window).scrollTop();// Y方向 (縦)
    console.log(y);	//所得済み

    var move = function(){
      ore.animate({'left':'2px'},2000);
      ure.animate({'left':'2px'},2000);
    }

    if(y >= 200){
      move();
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

});
