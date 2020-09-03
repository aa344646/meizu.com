import {header} from './head.js';
import {ft} from './ft.js';
import $ from '../js/jquery.js'
import {cookie} from '../js/cookie.js'
$('header').html(header);
$('footer').html(ft);



(function(){
    let id =location.search.split('=')[1];
    $.ajax({
        type: "get",
        url:"../../interface/gdsdtl.php",
        data:{
            id:id
        },
        dataType: "json",
        success:function(res){
            let pic=JSON.parse(res.img);
            let template=`<div id="nav">
            <div>
                <span>${res.title}</span>
                <a href="" class="a1">概述&nbsp;&nbsp;&nbsp;|</a>
                <a href="" class="a2">参数</a>
            </div>
        </div>
    <section id="sec1">
        <div class="sec1_div1">
            <img src="${pic[4].src}" alt="">
            <div class="sec1_div1_div">
                <ul>
                    <li>
                        <a href=""><img src="${pic[0].src}" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="${pic[1].src}" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="${pic[2].src}" alt=""></a>
                    </li>
                    <li>
                        <a href=""><img src="${pic[3].src}" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sec1_div2">
            <div class="sec1_div2_1">
                <h1>${res.title}</h1>
                <p>6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段</p>
            </div>
            <div class="sec1_div2_2">
                <span class="span1">￥</span>
                <span class="span2">${res.price}</span>
                <span class="span3">加价购</span>
                <span class="span4">另加29元起，即可换购超值商品</span>
            </div>
            <div class="sec1_div2_3">
                <span>支持
                    花呗分期
                    顺丰发货
                    7天无理由退货（具体查看详情）</span>
                    <img src="../images/tl.jpg" alt="" id="imgtl">
                </div>
    
            </div>
        <div class="ss1">
            <div class="ss1_1">
                <span>型号</span>
                <div class="fk_fk">魅族17</div>
                <div class="fk_fk">魅族17Pro
                </div>
    
                <div class="fk_fk">【开学套餐】魅族17
                </div>
                <div class="fk_fk">  【开学套餐】17 Pro
                </div>
              
    
            </div>
            <div class="ss1_2">
                <span>颜色分类</span>
                <div class="fk_fk">松深入墨</div>
                <div class="fk_fk">十七度灰
                </div>
    
                <div class="fk_fk">AG星际灰 
                </div>
                <div class="fk_fk">  AG原野绿
                </div>
              
    
            </div>
            <div class="ss1_3">
                <span>选择套餐</span>
                <div class="fk_fk"> 官方标配</div>
                <div class="fk_fk">EP3C套餐
                </div>
    
                <div class="fk_fk">充电套餐
                </div>
                <div class="fk_fk">碎屏保套餐
                </div>
              
    
            </div>
            <div class="ss1_4">
                <br>
                <br>
                <span>数量</span>
                <div>
                    <button>-</button>
                    <input type="number" name="num" id="num" placeholder="" value="10">
                    <button>+</button>
                </div>
            </div>
            <div class="btn1">
                <button>立即购买</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button id="btn">加入购物车</button>
            </div>
    
        </div>
        </div>
    </section>
    `;
            $('header').after(template);
            $('#sec1').find('#btn').on("click",function(){
                addItem(res.id, res.price, $('#num').val());
                location.href="../html/shopcar.html";
            });
        }
    });

    function addItem(id, price, num) {
        let shop = cookie.get('shop'); // 从cookie中获取shop数据
        let product = {
            id: id,
            price: price,
            num: num
        };
        if (shop) { // 判断是否存有购物车数据
            shop = JSON.parse(shop);
            // 购物车中是否已经存在当前这件商品
            if (shop.some(elm => elm.id == id)) {
                // 修改数量
                shop.forEach(elm => {
                    elm.id === id ? elm.num = num : null;
                });
            } else {
                // 添加商品
                shop.push(product);
            }
        } else {
            shop = [];
            shop.push(product);
        }
        cookie.set('shop', JSON.stringify(shop), 1);
    }
})();
