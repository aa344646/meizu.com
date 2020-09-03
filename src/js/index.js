
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
   
 

              
     (function(){
        $.ajax({
            type: "get",
            url:"../../interface/getproduct.php",
            dataType: "json",
            success:function(res){
                let temp='';
                let tt=[];
                let pr=[];
                let srcarr=[];
                res.forEach((elm,i)=>{
                    let pic=JSON.parse(elm.img);
                    tt.push(elm.title)
                    pr.push(elm.price)
                    srcarr.push(pic)
                });
                console.log(tt);
                console.log(pr);

      temp=`<div id="sec2">
                    <div class="sec2_img1">
                        <span class="sec2_icon">赠品</span>
                        <span class="box_info">
                            <span class="ft1">${tt[0]}</span>
                            <span class="ft2">限时领券至高立省200+赠全新壳膜套装</span>
                            <span class="ft3">￥${pr[0]}</span>
                        </span>
                        <div class="sec2_logo1">
                        <a href="./gdsdtl.html?id=1"><img class="imgq" src="${srcarr[0][4].src}" alt=""></a>
                        </div>
                    </div>
                    <div class="sec2_img2">
                        <span class="sec2_icon1">赠品</span>
                        <span class="box_info1">
                            <span class="f1">${tt[1]}</span>
                            <span class="f2">限时领券至高立省200+赠全新壳膜套装</span>
                            <span class="f3">￥${pr[1]}</span>
                        </span>
                        <div class="sec2_logo2">
                        <a href="./gdsdtl.html?id=4"> <img class="imgq" src="${srcarr[1][4].src}" alt=""></a>
                        </div>
                    </div>
                </div>
                <div id="sec3">
                    <div class="sec3_div">
                        <ul>
                            <li>
                            <a href="./gdsdtl.html?id=5">   <img class="imgq" src="../images/img/img/sec3/sec3_1.png" alt=""></a>
                                <span class="box_1">
                                    <span class="box_sp1">${tt[2]}</span>
                                    <span class="box_sp2">以梦为舰热爱起航</span>
                                    <span class="box_sp3">￥${pr[2]}</span>
                                </span>
                            </li>
                            <li>
                            <a href="./gdsdtl.html?id=6">   <img class="imgq" src="${srcarr[2][4].src}" alt=""></a>
                                <span class="box_1">
                                    <span class="box_sp1">${tt[3]}</span>
                                    <span class="box_sp2">6.5英寸极边全面屏|骁龙855旗舰处理器</span>
                                    <span class="box_sp3">￥${pr[3]}</span>
                                </span>
                            </li>
                            <li>
                            <a href="./gdsdtl.html?id=2">    <img class="imgq" src="${srcarr[3][4].src}" alt=""></a>
                                <span class="box_1">
                                    <span class="box_sp1">${tt[4]}
                                    </span>
                                    <span class="box_sp2">以梦为舰热爱起航</span>
                                    <span class="box_sp3">￥${pr[4]}</span>
                                </span>
                            </li>
                            <li>
                            <a href="./gdsdtl.html?id=3">   <img class="imgq" src="${srcarr[1][4].src}" alt=""></a>
                                <span class="box_1">
                                    <span class="box_sp1">${tt[5]}</span>
                                    <span class="box_sp2">高通骁龙855 Plus|索尼480OWAl三摄
                                    </span>
                                    <span class="box_sp3">￥${pr[5]}</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>`;
            


                $('#sec1_img').after(temp);
              
            }
        });
    })();
    
    








    
    




