import {header} from './head.js';
import {ft} from './ft.js';


import{cookie} from '../js/cookie.js'
import $ from '../js/jquery.js'

$('header').html(header);

$('footer').html(ft);



(function() {
    let shop = cookie.get('shop');
    if (shop) {
        shop = JSON.parse(shop); //  有cookie数据 才转JSON

        let idList = shop.map(elm => elm.id).join(); // 获取所有id

        $.ajax({
            type: "get",
            url: "../../interface/getitems.php",
            data: {
                idList: idList
            },
            dataType: "json",
            success: function(res) {
                var template = '';
             
                res.forEach((elm, i) => {
                    let pic = JSON.parse(elm.img);

                    template+=`
                    <li class="item">
                    <div class="p-box">
                        <input type="checkbox">
                    </div>
                    <div class="p-img">
                        <img src="${pic[0].src}" alt="">
                    </div>
                    <div class="p-title">
                        Apple Pro 13.3英寸笔记本电脑（四核八代i5 8G 256G固态硬盘）
                    </div>
                    <div class="p-num">
                        <input type="number" value="${elm.num}" size="${elm.price}">
                    </div>
                    <div class="p-price">
                        单价:${elm.price}
                    </div>
                    <div class="p-sum">
                        总价:13488.00
                    </div>
                    <div class="p-del">
                        <a href="javascript:;">删除</a>
                    </div>
                </li>`;
             
                    let arr = shop.filter(val => val.id == elm.id);
               
                });

                $('.itemlist').append(template);
                



                $(".itemlist").on("click", "input[type=checkbox]", function () {

                    var fl = true;
                    //input的点击事件
                    //循环每一个商品
                    $(".itemlist input[type=checkbox]").each(function () {
                        //如果当前对象没有选中
                        if ($(this).prop("checked") == false) {
                            //默认没有被选中
                            fl = false;
                        }
                    });
                    //如果子按钮全选中则全选按钮选中。
    
                    $("#check1").prop("checked", fl);

                
                  
                });

                $("#check1").on("click",function(){
                    if($("#check1").prop("checked")){
                        $(".itemlist").find("input[type=checkbox]").prop("checked","ture");  
                    }else{
                         $(".itemlist").find("input[type=checkbox]").prop("checked",false); 
                    }
                 });


                 $("#butt").on("click",function(){

                    let sum=0;
                $(".itemlist").each(function () {

                    if($(this).find(".p-box input").prop("checked")==true){
                        sum=parseInt($(this).find(".p-num input").prop("value"))*parseInt($(this).find(".p-num input").prop("size"))
                        console.log($(this).find(".p-num input").prop("value"));
                    
                    }
                            
                        });
                    
                       
               
                    alert("购买一共花费了"+sum+"元");
                });



                $(".p-del").on("click",function(){
                    $(this).parent().remove();
                });






                
            }
        });

    }
})();