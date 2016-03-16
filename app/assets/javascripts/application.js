// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
$(function(){
  $('.effect div, .effect div').css("opacity","0");
  $(window).scroll(function (){
    $(".effect").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $("i, div",this).css("opacity","1" );
        $("i",this).css({
          "font-size": "100px",
          "padding": "0 20px 40px"
        });
      } else {
        $("i, div",this).css("opacity","0" );
        $("i",this).css({
          "font-size": "20px",
          "padding": "20px"
        });
      }
    });
  });
});

jQuery(function($){

    tabs = function(options) {

        var defaults = {
            selector: '.tabs',
            selectedClass: 'selected'
        };

        if(typeof options == 'string') defaults.selector = options;
        var options = $.extend(defaults, options);

        return $(options.selector).each(function(){

            var obj = this;
            var targets = Array();

            function show(i){
                $.each(targets,function(index,value){
                    $(value).hide();
                })
                $(targets[i]).fadeIn('fast');
                $(obj).children().removeClass(options.selectedClass);
                selected = $(obj).children().get(i);
                $(selected).addClass(options.selectedClass);
            };

            $('a',this).each(function(i){
                targets.push($(this).attr('href'));
                $(this).click(function(e){
                    e.preventDefault();
                    show(i);
                });
            });

            show(0);

        });
    }
    // initialize the function
    // as a parameter we are sending a selector. For this particular script we must select the unordered (or ordered) list item element
    tabs('nav ul');

});
