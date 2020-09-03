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
                    console.log(pic[0].src);
                    template+=`
                    <li class="item">
                    <div class="p-box">
                        <input type="checkbox" id="p1">
                    </div>
                    <div class="p-img">
                        <img src="${pic[0].src}" alt="">
                    </div>
                    <div class="p-title">
                        Apple Pro 13.3英寸笔记本电脑（四核八代i5 8G 256G固态硬盘）
                    </div>
                    <div class="p-num">
                        <input type="number" value="${elm.num}" min="1" max="10">
                    </div>
                    <div class="p-price">
                        单价:13488.00
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
            }
        });

    }
})();