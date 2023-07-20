/*
** sudyTpl for javascript template
 */
!function(a){a.fn.sudyTpl=function(b){var c={p:null,json:null,callback:function(){}},d=a.extend(!0,{},c,b);return this.each(function(){var b=a(this),c=a('[type="text/template"]',b),e=[];if(null!==d.json?e=d.json:null!==d.p&&(e=getImgJson(d.p)),e.length>0){var f=c.get(0).text,g=f.match(/<!--LoopBegin-->[\s\S]*?<!--LoopEnd-->/gi),h=[];return a.each(g,function(b,c){c=c.replace(/<!--[\s\S]*?-->/g,""),h[b]="",a.each(e,function(){h[b]+=c.replace(/\[%title%\]/g,this.title).replace(/(\/page\/main\d+\/|\/_upload[\s\S]*?\/template\d+\/)?\[%url%\]/g,this.url).replace(/(\/page\/main\d+\/|\/_upload[\s\S]*?\/template\d+\/)?\[%src%\]/g,this.src).replace(/\[%text%\]/g,this.text)}),f=f.replace(/<!--LoopBegin-->[\s\S]*?<!--LoopEnd-->/i,h[b])}),f=a.trim(f.replace(/(\n[\s|\t]*\r*\n)/g,"\n")),b.html(f),d.callback(b)}})}}(jQuery);

/*
sudyTouch for support touch
 */
!function(a){a.fn.sudyTouch=function(b){return this.each(function(){a(this).width(),a(this).height(),a(this).on("touchstart",function(c){var d=c.originalEvent.touches[0],e=Number(new Date),f=a(this).position();return a.data(this,"touchstart",{posX:d.pageX,posY:d.pageY,timer:e,startX:f.left,startY:f.top}),b.swipeStart&&b.swipeStart.call(this,f.left,f.top),c.stopPropagation()}).on("touchmove",function(c){var d=c.originalEvent.touches[0],e=Number(new Date),f=d.pageX-a.data(this,"touchstart").posX,g=d.pageY-a.data(this,"touchstart").posY;return deltaT=e-a.data(this,"touchstart").timer,a.data(this,"touchmove",{posX:d.pageX,posY:d.pageY,timer:e}),b.swipeMove&&(c.preventDefault(),b.swipeMove.call(this,f,g,deltaT)),(b.swipeRight||b.swipeLeft)&&Math.abs(f)>Math.abs(g)&&c.preventDefault(),(b.swipeTop||b.swipeBottom)&&Math.abs(g)>Math.abs(f)&&c.preventDefault(),c.stopPropagation()}).on("touchend",function(){var c=Number(new Date),d=a.data(this,"touchmove").posX-a.data(this,"touchstart").posX,f=a.data(this,"touchmove").posY-a.data(this,"touchstart").posY,g=c-a.data(this,"touchstart").timer;a.data(this,"touchend",{posX:a.data(this,"touchmove").posX,posY:a.data(this,"touchmove").posY,timer:c});var h=Math.atan2(-f,d);return(Math.abs(d)>30||Math.abs(f)>30)&&200>g&&(Math.abs(h)<Math.PI/4&&b.swipeRight&&b.swipeRight.call(this,d,f,g),Math.abs(h)>3*Math.PI/4&&b.swipeLeft&&b.swipeLeft.call(this,d,f,g),Math.PI/4<h&&h<3*Math.PI/4&&b.swipeTop&&b.swipeTop.call(this,d,f,g),3*-Math.PI/4<h&&h<-Math.PI/4&&b.swipeBottom&&b.swipeBottom.call(this,d,f,g)),b.swipeEnd&&b.swipeEnd.call(this,d,f,g),e.stopPropagation()})})}}(jQuery);

/*
** sudyfocus
 */
;
(function($) {
    $.fn.sudyfocus = function(opts) {
        var defaults = {
            p: null, // 窗口号或频道号
            json: [], // 文章的json数据
            title: {
                active: true, // 是否显示标题
                isAutoWidth: false, // 标题背景自动宽度
                href: false // 标题是否加文章链接
            },
            text: {
                active: false, // 是否显示文章简介
                isAutoHeight: false, // 简介背景自动高度
                href: false // 简介是否加文章链接
            },
            href: true, // 图片是否加链接
            zWidth: 420, // 窗口宽度
            zHeight: 270, // 窗口高度
            response: true, // 是否自适应缩放
            navigation: true, // 是否显示按钮，上一张、下一张
            isNavHover: true, // 导航按钮是否默认隐藏，鼠标经过时再显示
            pagination: false, // 是否显示按钮，1、2、3、4...
            thumbnail: false, // 是否显示缩略图
            effect: 'slide', // slide(滑动),fade(淡入),show(即显)
            speed: 500, // 切换速度
            crossfade: true, // 是否交叉淡入淡出
            start: 1, // 默认从第一个开始切换
            autoPlay: true, // 是否自动播放
            interval: 5000, // 自动播放时间间隔
            trigger:"click",
            bgColor:"#919191",
            zoom:false,
            callback: function(){},
            isMobile:false
        };
        var o = $.extend(true, {}, defaults, opts),
            zW = o.zWidth,
            zH = o.zHeight,
            r = zW / zH;
        if (o.p !== null && eval('typeof getImgJson') == "function")
            o.json = getImgJson(o.p).concat(o.json);

        function setfoucs(objs){
            $.each(objs, function(i, e) {
                // 若定义焦点信息，进行焦点定位计算
                if ("img_meta" in o.json[i] && !$.isEmptyObject(o.json[i].img_meta)) {
                    var g = $(e).find("img").eq(0),
                        fW = o.json[i].img_meta.focusWidth,
                        fH = o.json[i].img_meta.focusHeight,
                        fr = fW / fH,
                        rW = o.json[i].img_meta.realWidth,
                        rH = o.json[i].img_meta.realHeight,
                        rr = rW / rH,
                        pos = {
                            'X': o.json[i].img_meta.left,
                            'Y': o.json[i].img_meta.top
                        };
                    var temX = pos.X,
                        temY = pos.Y;
                    pos.X = 2 * temX + fW < rW ? 0 : 2 * temX + fW - rW;
                    pos.Y = 2 * temY + fH < rH ? 0 : 2 * temY + fH - rH;
                    fW = pos.X == 0 ? fW + 2 * temX : rW - pos.X;
                    fH = pos.Y == 0 ? fH + 2 * temY : rH - pos.Y;
                    fr = fW / fH;
                    var zoom, center = {};
                    if (fr < r) {
                        zoom = zW / fW;
                        rW = zoom * rW;
                        rH = rW / rr;
                        fW = zW;
                        fH = fW / fr;
                        center.X = zoom * pos.X + fW / 2;
                        center.Y = zoom * pos.Y + fH / 2;
                    } else {
                        zoom = zH / fH;
                        rH = zoom * rH;
                        rW = rH * rr;
                        fH = zH;
                        fW = fH * fr;
                        center.X = zoom * pos.X + fW / 2;
                        center.Y = zoom * pos.Y + fH / 2;
                    }
                    g.css({
                        "display": "block",
                        "width": rW + 'px',
                        "height": rH + 'px',
                        "position": "absolute",
                        "left": zW / 2 - center.X + "px",
                        "top": zH / 2 - center.Y + 'px'
                    });
                }
            });
        };
        return this.each(function() {
            // 构建初始化HTML元素
            var c = $(this),
                pre = c.children(),
                preJSON = [];
            $.each(pre, function(i, e) {
                var preData = {};
                preData.title = $(e).attr("data-focus-title") || '';
                preData.url = $(e).attr("data-focus-url") || '';
                preData.text = $(e).attr("data-focus-text") || '';
                preData.original = $(e).attr("original-src") || e.src;
                preData.src = e.src;
                preData.width = e.width;
                preData.height = e.height;
                preJSON.push(preData);
            });
            o.json = preJSON.concat(o.json);
            c.html(function(index, html) {
                var html = "";
                $.each(o.json, function() {
                    var zoom = "";
                    if(o.zoom){    
                        if(e.width/e.height > r){
                            zoom = 'style="width:100%; height:auto;"';
                        }else{
                            zoom = 'style="width:auto; height:100%;"';
                        }
                    }
                    html += '<img src="' + (this.original&&!o.isMobile?this.original:this.src) + '"'+ zoom +'>';
                });
                return html;
            });
            
            if (o.json.length < 1)
                return c.html('\u7a97\u53e3\u672a\u7ed1\u5b9a\u6216\u65e0\u6587\u7ae0');
            c.children().wrap('<div class="focus-item" />').end().wrapInner('<div class="focus-container'+ (o.zoom?' focus-zoom':'') +'"'+ (o.zoom?' style="background-color:'+o.bgColor+';"':'') +' />');
            var u = $(".focus-container", c),
                l = $(".focus-item", u).hide(),
                len = l.length;
            if (o.title.active)
                $('<div class="focus-title-bar"><div class="focus-title-bg"></div><h2 class="focus-title"></h2></div>').appendTo(c);
            if (o.text.active)
                $('<div class="focus-text-box"><div class="focus-text-bg"></div><div class="focus-text-inner"><p class="focus-text"></p></div></div>').appendTo(c);
            if (o.navigation && len >1 )
                $('<a class="focus-navigation focus-prev">&lt;</a><a class="focus-navigation focus-next">&gt;</a>').appendTo(c);
            if (o.pagination && len >1 ) {
                c.append(function(){
                    var j, k, p = $('<div class="focus-pagination"></div>');
                    for (j = 0; j < len; j++) {
                        k = j + 1;
                        p.append('<a class="focus-page focus-page-' + k + '"><span>' + k + '</span></a>');
                    }
                    return p;
                });
            }
            if (o.thumbnail && len >1 ) {
                c.append(function(){
                    var j, k, p = $('<div class="focus-thumbnail"></div>');
                    for (j = 0; j < len; j++) {
                        k = j + 1;
                        p.append('<a class="focus-thumb focus-thumb-' + k + '"><span><img src="' + o.json[j].src + '" /></span></a>');
                    }
                    return p;
                });
            }
            var $title = $(".focus-title-bar", c),
                $text = $(".focus-text-box", c),
                $nav = $(".focus-navigation", c),
                $pagi = $(".focus-pagination", c),
                $thumb = $(".focus-thumbnail", c),
                pages = $('.focus-page', $pagi),
                title = $('.focus-title', $title),
                thumbs = $('.focus-thumb', $thumb),
                text = $(".focus-text", $text);
            if (o.isNavHover) {
                $nav.hide();
                c.hover(function() {
                    $nav.show();
                }, function() {
                    $nav.hide();
                });
            }
            function resizeFocus(){
                c.css({
                    width: zW + 'px',
                    height: zH + 'px'
                }).addClass('focus-box');
                u.css({
                    width: zW + 'px',
                    height: zH + 'px',
                    visibility: 'visible'
                });
            }

            //自适应处理
            if(o.response){
                var W = c.parent().width();
                zW = W;
                zH = zW / r;
                $(window).resize(function(event) {
                    W = c.parent().width();
                    zW = W;
                    zH = zW / r;
                    resizeFocus()
                    // 图片焦点计算
                    setfoucs(l);
                });
            }

            resizeFocus();
            // 图片焦点计算
            setfoucs(l);
            var index = o.start > len ? len - 1 : o.start - 1,
                current = index;
            // 切换效果函数
            var play = {
                show: function() { // 即显效果
                    l.eq(current).hide().end().eq(index).show();
                },
                slide: function() { // 滑动切换效果
                    l.eq(current).show().end().eq(index).show();
                    if (len > 1) {
                        function slideNext() {
                            l.eq(index).css({
                                left: "100%"
                            });
                            l.eq(current).stop(true,true).animate({
                                left: "-100%"
                            }, o.speed);
                            l.eq(index).stop(true, false).animate({
                                left: "0%"
                            }, o.speed);
                        }

                        function slidePrev() {
                            l.eq(index).css({
                                left: "-100%"
                            });
                            l.eq(current).stop(true,true).animate({
                                left: "100%"
                            }, o.speed);
                            l.eq(index).stop(true, false).animate({
                                left: "0%"
                            }, o.speed);
                        }
                        if ((current == 0 && index == len - 1) || (current == len - 1 && index == 0)) {
                            if (current == 0 && index == len - 1)
                                slidePrev();
                            if (current == len - 1 && index == 0)
                                slideNext();
                        } else {
                            if (index > current)
                                slideNext();
                            if (index < current)
                                slidePrev();
                        }
                    }
                },
                fade: function() { // 淡入淡出效果
                    if (o.crossfade) { // 是否交叉过渡
                        l.eq(current).stop(true,true).fadeOut(o.speed).end().eq(index).fadeIn(o.speed);
                       
                    } else {
                        l.eq(current).stop(true,true).hide().end().eq(index).fadeIn(o.speed);
                    }
                }
            };
            // 内容显示函数

            function showIndex() {
                $title.hide();
                $text.hide();
                if (o.effect == 'slide') {
                    play.slide();
                } else if (o.effect == 'fade') {
                    play.fade();
                } else {
                    play.show();
                }
                pages.removeClass('focus-page-active').eq(index).addClass('focus-page-active');
                thumbs.removeClass('focus-thumb-active').eq(index).addClass('focus-thumb-active');
                var $titleHtml = $.trim(o.json[index].title || ""),
                    $textHtml = $.trim(o.json[index].text || "");
                    $url = $.trim(o.json[index].url || "");
                // 是否显示链接
                if ($url !== '' && $url !== '#') {
                    var $href = $('<a href="' + $url + '" target="_blank"></a>');
                    if (o.href && l.eq(index).find("a").length < 1)
                        l.eq(index).wrapInner($href);
                    if (o.title.href && $titleHtml !== "")
                        $titleHtml = $href.clone().html($titleHtml);
                    if (o.text.href && $textHtml !== "")
                        $textHtml = $href.clone().html($textHtml);
                }
                if ($titleHtml !== '') {
                    $title.show();
					
					
					
                    title.html($titleHtml);
                }
                if ($textHtml !== '') {
                    $text.show();
                    text.html($textHtml);
                }
                // 标题背景自动宽度
                if (o.title.isAutoWidth)
                    title.parent().css("width", title.outerWidth());
                // 内容背景自动高度
                if (o.text.isAutoHeight)
                    text.parent().parent().css("height", text.outerHeight());
                current = index;
                if(typeof o.callback === "function"){
                    o.callback.call(this, index, o);
                }
            }
            // 递增索引函数

            function playNext() {
                index++;
                if (index > len - 1) {
                    index = 0;
                }
                showIndex();
            }
            // 递减索引函数

            function playPrev() {
                index--;
                if (index < 0) {
                    index = len - 1;
                }
                showIndex();
            }
            // 自动播放
            function autoPlay() {
                var timer;
                c.hover(function() {
                    clearInterval(timer);
                }, function() {
                    timer = setInterval(function() {
                        playNext();
                    }, o.interval);
                }).trigger("mouseleave");
            }
			
			// 监视页面标签页是否处于激活状态
			/*window.addEventListener('visibilitychange',function(){
				if (document.visibilityState === 'visible') {
					var timer;
					c.hover(function() {
						clearInterval(timer);
					}, function() {
						timer = setInterval(function() {
							playNext();
						}, o.interval);
					}).trigger("mouseleave");
					
					
					
					console.log('前台')
				} else if (document.visibilityState === 'hidden') {
					console.log('后台')
				}
			})*/
			
            if (o.autoPlay)
                autoPlay();
            var prev = $('.focus-prev', c),
                next = $('.focus-next', c);
            // 上一个
            prev.click(function() {
                playPrev();
            });
            //下一个
            next.click(function() {
                playNext();
            });
            // 直接索引号
            pages.on(o.trigger,function() {
                index = $(this).index();
                showIndex();
            });

            // 缩略图索引
            thumbs.on(o.trigger,function() {
                index = $(this).index();
                showIndex();
            });

            // 是否支持触屏
            if($.fn.sudyTouch){
                u.sudyTouch({
                    "swipeStart": function(){
                        c.trigger('mouseenter');
                    },
                    "swipeLeft": function(){
                        playNext();
                    },
                    "swipeRight": function(){
                        playPrev();
                    },
                    "swipeEnd": function(){
                        c.trigger('mouseleave');
                    }
                });
            }

            //初始化
            showIndex();
        });
    };

})(jQuery);

/*
** other extends
 */
!function(a){a.fn.sudySelect=function(b){var c={handle:".select-name",selects:".select-list",trigger:"click",effect:"slide",speed:100,dir:"down",autoWidth:!0},d=a.extend(!0,{},c,b);return this.each(function(){function g(){"slide"==d.effect?e.stop(!0,!0).slideDown(d.speed):"fade"==d.effect?e.stop(!0,!0).fadeIn(d.speed):$vp.show()}function h(){"slide"==d.effect?e.stop(!0,!1).slideUp(d.speed):"fade"==d.effect?e.stop(!0,!1).fadeOut(d.speed):e.hide()}var b=a(this),c=a(this).find(d.handle),e=a(this).find(d.selects),f=c.outerHeight();d.autoWidth&&e.children().css({"padding-left":c.css("padding-left"),"padding-right":c.css("padding-right")}),"down"==d.dir?(b.addClass("select-down"),e.css({top:f+"px",bottom:"auto"})):"up"==d.dir&&(b.addClass("select-up"),e.css({bottom:f+"px",top:"auto"})),c.on(d.trigger,function(){"click"==d.trigger?(c.toggleClass("select-open"),c.hasClass("select-open")?g():h()):(c.addClass("select-open"),g()),e.children().removeClass("hover")}),b.on("mouseleave",function(){c.removeClass("select-open"),h()}),e.children().mouseenter(function(){a(this).addClass("hover").siblings().removeClass("hover")}),e.children().on("click",function(){c.text(a(this).text()),a(this).addClass("selected").siblings().removeClass("selected"),c.removeClass("select-open"),h()}).eq(0).trigger("click")})},a.fn.sudyPubdate=function(b){function e(a){var b=a;switch(a){case 1:b="\u4e00\u6708";break;case 2:b="\u4e8c\u6708";break;case 3:b="\u4e09\u6708";break;case 4:b="\u56db\u6708";break;case 5:b="\u4e94\u6708";break;case 6:b="\u516d\u6708";break;case 7:b="\u4e03\u6708";break;case 8:b="\u516b\u6708";break;case 9:b="\u4e5d\u6708";break;case 10:b="\u5341\u6708";break;case 11:b="\u5341\u4e00\u6708";break;case 12:b="\u5341\u4e8c\u6708"}return b}function f(a){var b=a;switch(a){case 1:b="Jan";break;case 2:b="Feb";break;case 3:b="Mar";break;case 4:b="Apr";break;case 5:b="May";break;case 6:b="Jun";break;case 7:b="Jul";break;case 8:b="Aug";break;case 9:b="Sep";break;case 10:b="Oct";case 11:b="Nov";break;case 12:b="Dec"}return b}var c={target:".pubdate",lang:"num",separator:"-",format:"\u5e74\u6708\u65e5",prefix_0:!0,tpl:'<div class="sudy-pubdate"><span class="pubdate-month">%m%\u6708</span><span class="pubdate-day">%d%</span></div>'},d=a.extend(!0,{},c,b);return this.each(function(){var c=(a(this),a(this).find(d.target)),g=a.trim(c.text()).split(d.separator),h=parseInt(g[d.format.indexOf("\u5e74")],10),i=parseInt(g[d.format.indexOf("\u6708")],10),j=parseInt(g[d.format.indexOf("\u65e5")],10);"en"==d.lang&&(i=f(i)),"cn"==d.lang&&(i=e(i)),"num"==d.lang&&d.prefix_0&&(i=10>i?"0"+i:i,j=10>j?"0"+j:j);var k=d.tpl.replace("%Y%",h).replace("%m%",i).replace("%d%",j);c.html(k)})},a.fn.sudyTab=function(b){var c={handle:".tab-menu > li",content:".tab-list > li,.tab-more > li",trigger:"mouseenter",start:1,autoPlay:{active:!1,interval:4e3,pauseHover:!0}},d=a.extend(!0,{},c,b);return this.each(function(){var b=a(this),c=a(this).find(d.handle),e=d.content.split(","),f=d.start-1,g=c.length,h=f;if(a.each(c,function(f,g){a(g).on(d.trigger,function(){h=f,c.removeClass("selected"),a(this).addClass("selected"),a.each(e,function(c,d){a(d,b).removeClass("active").hide(),a(d,b).eq(f).addClass("active").show()})})}),d.autoPlay.active){var i,h,j=function(a){c.eq(a).trigger(d.trigger),i=setTimeout(function(){a++,a>g-1&&(a=0),j(a)},d.autoPlay.interval)};j(f),b.hover(function(){clearTimeout(i)},function(){j(h)})}else c.eq(f).trigger(d.trigger)})},a.fn.sudyInput=function(b){var c={tip:".tip"},d=a.extend(!0,{},c,b);return this.each(function(){function f(){var a=e.val();a!==c.text()&&""!==a?c.hide():(c.show(),e.val(""))}var b=a(this),c=a(this).find(d.tip),e=a(this).find("input,textarea");b.click(function(){e.trigger("focus")}),e.focus(function(){c.hide()}),e.blur(function(){f()})})},a.fn.sudyClock=function(b){var c={format:"%Y%\u5e74%M%\u6708%D%\u65e5 %N% %H%:%m%:%s% %W% \u8ddd\u79bb100\u5468\u5e74\u56fd\u5e86\u8fd8\u6709 %CD% \u5929",hour12:!1,noon:"cn",week:"cn",countDown:"2049/10/1"},d=a.extend(!0,{},c,b),e=function(a){var b=parseInt(a);return 10>b&&(b="0"+b),b},f=function(){var a=new Date,b=a.getFullYear(),c=a.getMonth()+1,f=a.getDate(),g=a.getHours(),h=a.getMinutes(),i=a.getSeconds(),j="cn"==d.week?["\u661f\u671f\u65e5","\u661f\u671f\u4e00","\u661f\u671f\u4e8c","\u661f\u671f\u4e09","\u661f\u671f\u56db","\u661f\u671f\u4e94","\u661f\u671f\u516d"][a.getDay()]:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],k="cn"==d.noon?["\u4e0a\u5348","\u4e0b\u5348"][12>g?0:1]:["AM","PM"][12>g?0:1],l=0;return g=d.hour12&&g>12?g-12:g,l=Math.ceil((Date.parse(d.countDown)-a.getTime())/864e5),{Y:b,M:e(c),D:e(f),H:e(g),m:e(h),s:e(i),W:j,N:k,C:l}};return this.each(function(){function e(){c=d.format.replace("%Y%",f().Y).replace("%M%",f().M).replace("%D%",f().D).replace("%H%",f().H).replace("%m%",f().m).replace("%s%",f().s).replace("%W%",f().W).replace("%N%",f().N).replace("%CD%",f().C),b.html(c),setTimeout(function(){e()},500)}var c,b=a(this);e()})},a.fn.sudyLinks=function(b){var c={handle:".links-name",wrap:".links-wrap",trigger:"mouseenter",effect:"show",speed:300,hidePause:0,type:"elink",width:"block",position:!0},d=a.extend(!0,{},c,b);return this.each(function(){var h,b=a(this),c=a(this).find(d.handle),e=a(this).find(d.wrap),f=c.outerHeight(),i=e.outerHeight(),f=e.css("bottom");"block"==d.width&&(b.css("display","block"),c.css("display","block")),/\d+/.test(d.width)&&(b.css("width",d.width),c.css("display","block")),"elink"==d.type&&e.css("width",b.width()-2),b.on(d.trigger,function(){var g=b.offset().top,j=a(window).scrollTop(),k=g-j;i>k?e.css({bottom:"auto",top:f}):e.css({top:"auto",bottom:f}),clearTimeout(h),d.position&&b.css("position","relative"),c.addClass("wrap-open"),"slide"==d.effect?e.stop(!0,!0).hide().slideDown(d.speed):"fade"==d.effect?e.stop(!0,!0).hide().fadeIn(d.speed):e.show()}),b.mouseleave(function(){h=setTimeout(function(){d.position&&b.css("position","static"),c.removeClass("wrap-open"),"slide"==d.effect?e.stop(!0,!0).slideUp(d.speed):"fade"==d.effect?e.stop(!0,!0).fadeOut(d.speed):e.hide()},d.hidePause)})})},a.fn.sudyScroll=function(b){var c={width:200,height:100,display:2,step:2,dir:"y",auto:!0,speed:500,hoverPause:5e3,navigation:!0,navTrigger:"click",pagination:!0,pagTrigger:"mouseenter"},d=a.extend(!0,{},c,b);return this.each(function(){function n(){a(".page-index",l).eq(i).addClass("active").siblings().removeClass("active")}function o(){"x"==d.dir?(j=-i*d.step*d.width,b.stop().animate({left:j+"px"},d.speed)):(k=-i*d.step*d.height,b.stop().animate({top:k+"px"},d.speed)),n()}function p(){i++,i>h-1&&(i=0),o(i)}function q(){i--,0>i&&(i=h-1),o(i)}a(this).wrap('<div class="sudy-scroll-wrap">');var b=a(this),c=a(this).children(),e=c.length,f=a(this).parent(),g="scroll-"+Number(new Date),h=Math.ceil(e/d.step),i=0,j=0,k=0;d.step=d.step>d.display?d.display:d.step,f.wrap('<div class="sudy-scroll" id="'+g+'">');var l=a(this).parent().parent();if("x"==d.dir?(l.css({width:d.width*d.display+"px",height:d.height+"px"}),f.css({width:d.width*d.display+"px",height:d.height+"px"}),b.css({width:d.width*e+"px",height:d.height+"px",position:"absolute",left:"0px",top:"0px"}),c.css({width:d.width+"px",height:d.height+"px","float":"left",display:"inline-block"})):(l.css({width:d.width+"px",height:d.height*d.display+"px"}),f.css({width:d.width+"px",height:d.height*d.display+"px"}),b.css({width:d.width+"px",position:"absolute",left:"0px",top:"0px"}),c.css({width:d.width+"px",height:d.height+"px"})),d.navigation&&l.append('<div class="sudy-scroll-nav"><a href="javascript:;" class="nav-prev">&lt;</a><a href="javascript:;" class="nav-next">&gt;</a></div>'),d.pagination){var m='<div class="sudy-scroll-page">';a.each(new Array(h),function(a){m=m+'<a class="page-index page-'+a+'" href="javascript:;"><span>'+a+"</span></a>"}),l.append(m)}if(o(i),d.auto){var r;l.hover(function(){clearTimeout(r)},function(){r=setTimeout(function(){p(),l.trigger("mouseleave")},d.hoverPause)}).trigger("mouseleave")}a(".nav-next",l).on(d.navTrigger,function(){p()}),a(".nav-prev",l).on(d.navTrigger,function(){q()}),a(".page-index",l).on(d.pagTrigger,function(){i=a(this).index(),o(i)})})}}(jQuery);