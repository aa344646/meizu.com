import $ from './jquery.js';
import './jquery.lazyload.js';
import{cookie}from"../js/cookie.js";
// import { ajax } from 'jquery';//

$(document).ready(function () { 
    if(cookie.get('isLogined')){
       $(".icon1").attr("src","../images/img/dricon.png");
     }else{
        $("#tc").text(null);
        // $('.userdiv').css("height","60px");
     }
});
$(".yhicon").on("mouseover",function(){
    $(".userdiv").addClass('addhet');
  
})
$(".userdiv").on("mouseout",function(){
    $(".addhet").removeClass('addhet');
    
})
$(".userdiv").on("mouseover",function(){
    $(".userdiv").addClass('addhet');
})


$(".exit1").on("click",function(){
    cookie.remove('isLogined');
 
    
})

    $(".nav_dhl>ul>li").on("mouseover", function () {
        let src1 = "../images/img/img/header/1/";
        let src2 = "../images/img/img/header/2/";
        let src3 = "../images/img/img/header/3/";
        let src4 = "../images/img/img/header/4/";
        let index = $(this).index()
        if (index == 0) {
            $(".hed1>li>img").each(function (i) {
                //    console.log( $(".hed1>li>img").attr("src").replace("1","2"));
                // this.src = "../images/img/img/header/2" + i+1 + ".jpg";
                var s = i + 1;
                this.src = src1 + s + ".jpg";
                $(".ycdiv").addClass('het');
                $('.nav').addClass('bgcolor');
                $(".nav_dhl>ul>li").css("color","black");
                $('.ycdiv>ul>li').attr('class', 'liq');
            });
        }
        if (index == 1) {
            $(".hed1>li>img").each(function (i) {
                //    console.log( $(".hed1>li>img").attr("src").replace("1","2"));
                // this.src = "../images/img/img/header/2" + i+1 + ".jpg";
                var s = i + 1;
                this.src = src2 + s + ".jpg";
                $(".ycdiv").addClass('het');
                $(".nav_dhl>ul>li").css("color","black");
                $('.ycdiv>ul>li').attr('class', 'liq');
                $('.nav').addClass('bgcolor');
            });
        }
        if (index == 2) {
            $(".hed1>li>img").each(function (i) {
                //    console.log( $(".hed1>li>img").attr("src").replace("1","2"));
                // this.src = "../images/img/img/header/2" + i+1 + ".jpg";
                var s = i + 1;
                this.src = src3 + s + ".jpg";
                $(".ycdiv").addClass('het');
                $(".nav_dhl>ul>li").css("color","black");
                $('.ycdiv>ul>li').attr('class', 'liq');
                $('.nav').addClass('bgcolor');
            });
        }
        if (index == 3) {
            $(".hed1>li>img").each(function (i) {
                //    console.log( $(".hed1>li>img").attr("src").replace("1","2"));
                // this.src = "../images/img/img/header/2" + i+1 + ".jpg";
                var s = i + 1;
                this.src = src4 + s + ".jpg";
                $(".nav_dhl>ul>li").css("color","black");
                $(".ycdiv").addClass('het');
                $('.ycdiv>ul>li').attr('class', 'liq');
                $('.nav').addClass('bgcolor');
            });
        }
        if (index == 9) {
            $(".hed1>li>img").each(function (i) {
                //    console.log( $(".hed1>li>img").attr("src").replace("1","2"));
                // this.src = "../images/img/img/header/2" + i+1 + ".jpg";
                $(".ycdiv").addClass('het');
                $('.nav').addClass('bgcolor');
                $(".hed1>li").removeClass();
                $(".nav_dhl>ul>li").css("color","black");
                this.src = "../images/img/img/header/1/appxz.jpg";
            });
        }
    });
    
    $(".ycdiv").on("mouseover", function () {
        var s = $(".ycdiv");
        s.addClass('het');
        $('.nav').addClass('bgcolor');
        $(".nav_dhl>ul>li").css("color","black");
        // s.removeClass('het');
    });
    $(".ycdiv").on("mouseout", function () {
    
        $(".ycdiv").removeClass('het');
        $('.nav').removeClass('bgcolor');
        $(".nav_dhl>ul>li").css("color","white");
    });
    $("img.lazy").lazyload({
        placeholder: "../images/img/load.gif",
        effect: "fadeIn",
    })
    


///轮播

var t;
var index = 0;
/////自动播放

    setInterval(function(){
        index++;
        $("#lunbobox>ul>li").eq(index).css({
            "background": "rgba(153, 153, 153, 0)",
            "border": "1px solid #ffffff"
        }).siblings().css({
            "background": "#ffffff",
            "border": ""
        })
        $(".lunbo>a ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
       
        if (index == 7) {
            index = -1
        }
     }, 3500);
   
 


              









    
    




