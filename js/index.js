

$(function(){
  var menuwidth  = 200; // 边栏宽度
  var menuspeed  = 400; // 边栏滑出耗费时间

  var $bdy       = $('body');
  var $container = $('#pgcontainer');
  var $burger    = $('#hamburgermenu');
  var negwidth   = "-"+menuwidth+"px";
  var poswidth   = menuwidth+"px";

  $('.menubtn').on('click',function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    } else {
      jsAnimateMenu('open');
    }
  });

  $('.overlay').on('click', function(e){
    if($bdy.hasClass('openmenu')) {
      jsAnimateMenu('close');
    }
  });

  function jsAnimateMenu(tog) {
    if(tog == 'open') {
      $bdy.addClass('openmenu');
      
      $container.animate({marginRight: 200, marginLeft: -200}, menuspeed);
      $burger.animate({width: poswidth}, menuspeed);
      $('.overlay').animate({right: poswidth}, menuspeed);
    }
    
    if(tog == 'close') {
      $bdy.removeClass('openmenu');
      
      $container.animate({marginRight: "0", marginLeft: "0"}, menuspeed);
      $burger.animate({width: "0"}, menuspeed);
      $('.overlay').animate({right: "0"}, menuspeed);
    }
  }
});

/*
window.onscroll = function(){ 
    var t = document.documentElement.scrollTop || document.body.scrollTop;  

    if(t>780 && t<1020){
        $('.huojian').show().addClass('animated rotateInUpRight');
        $('.f_gdleft,.f_gdright,.ren,.shipin,.xiangji').show().addClass('animated-s fadeIn');
    }

    if(t>1150 && t<1450){
        $('.bigy').show().addClass('animated fadeIn');
        setTimeout(function(){
            $('.dash_dash').show().addClass('animated fadeIn');
        },500)
        setTimeout(function(){
            $('.countries_icon').show().addClass('animated fadeIn');
        },1000)
    }
    if(t>1650 && t<1800){
        

        $('.sanren').show().addClass('animated-s fadeIn');
        $('.l_gd').show().addClass('animated-s fadeIn');
        $('.l_d').show().addClass('animated-s fadeIn');
        setTimeout(function(){
            $('.c_usd,.c_rub,.c_gbp,.c_jpy,.c_eur').show().addClass('animated-s fadeIn');
        },1000)
    }

    if(t>1900 && t<2100){
        $('.d_pc').show().addClass('animated-s fadeIn');
        $('.d_gd').show().addClass('animated-s fadeIn');
        $('.d_dian').show().addClass('animated-s fadeIn');
        setTimeout(function(){
            $('.d_xz').show().addClass('animated fadeIn');
        },1000)
        setTimeout(function(){
            $('.d_iphone').show().addClass('animated fadeIn');
        },2000)
        setTimeout(function(){
            $('.d_pad').show().addClass('animated fadeIn');
        },3000)
    }

    if(t>2200 && t<2400){
        $('.e_box').show().addClass('animated fadeIn');
        $('.e_gd1').show().addClass('animated fadeIn');
        $('.e_gd2').show().addClass('animated fadeIn');
        setTimeout(function(){
            $('.e_02,.e_03,.e_05,.e_06').show().addClass('animated fadeIn');
        },500)
        setTimeout(function(){
            $('.e_01,.e_04,.e_07').show().addClass('animated fadeIn');
        },1500)
    }
    if(t>2600 && t<2800){
        $('.f_diqiu').show().addClass('animated-s fadeIn');
        $('.f_gd').show().addClass('animated-s fadeIn');
        setTimeout(function(){
            $('.f_01').show().addClass('animated fadeIn');
        },1000)
        setTimeout(function(){
            $('.f_02').show().addClass('animated fadeIn');
        },2000)
        setTimeout(function(){
            $('.f_03').show().addClass('animated fadeIn');
        },3000)
        setTimeout(function(){
            $('.f_04').show().addClass('animated fadeIn');
        },4000)
    }
} 
    $('#codeHover').on('click',function(e){
        e.stopPropagation();
        $('body').append('<div class="weixinMask" style="width:100%;height:100%;position:fixed;top:0;z-index:99999;background:rgba(0,0,0,0.6)"></div>');
        $('.weixin_img').css({'display':'block','position':'fixed','top':'50%','left':'50%','marginLeft':-150,'marginTop':-150,'zIndex':999999});
        $('body').on('click',function(){
            $('.weixinMask').remove();
            $('.weixin_img').hide();
        })
    })

    $(function(){
        $(window).scroll(function(){
            if($(document).scrollTop()>=100){
                $(".login_header").addClass("position");
            }else{
                $(".login_header").removeClass("position");
            }
        })
    })*/