var img = {

    imageNum: 5,
    imageNumWidth: 189,
    num: 0,
    count: document.getElementById("imagebg").getElementsByTagName("li").length,

    present: document.getElementById("present"),
    imagebg: document.getElementById("imagebg"),
    imagebg_li: document.getElementById("imagebg").getElementsByTagName("li"),
    small_pic: document.getElementById("small_pic"),

    imgRolling: document.getElementById("imgRolling"),
    scrollbg: document.getElementById("scrollbg"),

    left_btn: document.getElementById("left_btn"),
    right_btn: document.getElementById("right_btn"),

    small_pic_html: [],

    animate: null,
    autoplay: null,

    init: function() {
        // img.imagebg.innerHTML = img.imagebg.innerHTML + img.imagebg.innerHTML + img.imagebg.innerHTML;
        for (var i = 0; i < img.imagebg_li.length; i++) {
            //console.log(img.imagebg_li[i]+" is OK")
            if (i != 0) {
                img.small_pic_html.push("<li onclick='img.play(" + i + ")'><img src='" + img.imagebg_li[i].getAttribute("data-sPic") + "' /></li>");
                img.imagebg.getElementsByTagName("li")[i].style.display = "none";
            } else {
                img.small_pic_html.push("<li onclick='img.play(" + i + ")' class='presently'><img src='" + img.imagebg_li[i].getAttribute("data-sPic") + "' /></li>");
            }
            //console.log(img.small_pic_html);
        }
        //console.log(img.small_pic_html)
        img.small_pic.innerHTML = img.small_pic_html.join("");
        img.present.style.left = "77px";
        img.small_pic.style.left = "0px";
        img.imagebg_li[0].style.filter = "alpha(opacity=100)";
        img.imagebg_li[0].style.opacity = 1;

        img.left_btn.onclick = function() {
            img.play(img.num - 1);
        }
        img.right_btn.onclick = function() {
            img.play(img.num + 1)
        };

        img.autoplay = setInterval(function() {
            img.play(img.num + 1)
        },
        5000);

        img.imgRolling.onmouseover = function() {
            clearInterval(img.autoplay);
        }
        img.imgRolling.onmouseout = function() {
            img.autoplay = setInterval(function() {
                img.play(img.num + 1)
            },
            5000);
        }

    },

    play: function(i) {
        var small_pic_left = parseInt(img.small_pic.style.left);
        var present_left = parseInt(img.present.style.left);
        var op = 0;

        if (i == img.num || img.animate != null || i > img.count * 3 || i < -1) {
            return;
        }

        for (var x = 0; x < img.imagebg_li.length; x++) {

            img.small_pic.getElementsByTagName("li")[x].className = "";
            img.imagebg_li[x].style.filter = "alpha(opacity=" + op * 10 + ")";
            img.imagebg_li[x].style.opacity = op / 10;
            img.imagebg_li[x].style.display = "none";
        }

        if (i > (img.count * 3 - 1)) {
            i -= img.count;
            img.num -= img.count;

            img.small_pic.style.left = small_pic_left + img.imageNumWidth * (i - img.count) + "px";
            img.small_pic.getElementsByTagName("li")[i].className = "presently";

            small_pic_left = parseInt(img.small_pic.style.left);
            present_left = parseInt(img.present.style.left);

        } else if (i < 0) {
            i += img.count;
            img.num += img.count;

            img.small_pic.style.left = small_pic_left - img.imageNumWidth * img.count + "px";
            img.small_pic.getElementsByTagName("li")[i].className = "presently";

            small_pic_left = parseInt(img.small_pic.style.left);
            present_left = parseInt(img.present.style.left);
        }

        if (i > img.num) {
            //如果比当前大;
            img.imagebg_li[i].style.display = "block";
            if (parseInt(img.present.style.left) > 700) {
                //如果活动框到了最右边--完成
                //小图片向左
                img.animate = setInterval(function() {
                    if (parseInt(img.small_pic.style.left) > (small_pic_left - img.imageNumWidth * (i - img.num) + img.imageNumWidth * (i - img.num) / 10)) {
                        img.small_pic.style.left = parseInt(img.small_pic.style.left) - img.imageNumWidth * (i - img.num) / 10 + "px";
                        img.imagebg_li[i].style.filter = "alpha(opacity=" + (++op) * 11 + ")";
                        img.imagebg_li[i].style.opacity = op / 9;
                    } else {
                        img.small_pic.style.left = small_pic_left - img.imageNumWidth * (i - img.num) + "px";
                        img.small_pic.getElementsByTagName("li")[i].className = "presently";
                        clearInterval(img.animate);
                        img.num = i;
                        img.animate = null;
                    }
                },
                30);
            } else {
                //活动框向右--完成
                img.animate = setInterval(function() {
                    if (parseInt(img.present.style.left) < (present_left + img.imageNumWidth * (i - img.num) - img.imageNumWidth * (i - img.num) / 10)) {
                        img.present.style.left = parseInt(img.present.style.left) + img.imageNumWidth * (i - img.num) / 10 + "px";
                        //为了IE联盟
                        img.imagebg_li[i].style.filter = "alpha(opacity=" + (++op) * 11 + ")"; //"alpha(opacity=100)";
                        //为了火狐部落
                        img.imagebg_li[i].style.opacity = op / 9;
                    } else {
                        img.present.style.left = present_left + img.imageNumWidth * (i - img.num) + "px";
                        img.small_pic.getElementsByTagName("li")[i].className = "presently";
                        clearInterval(img.animate);
                        img.num = i;
                        img.animate = null;
                    }
                },
                30);
            }

        } else if (i < img.num) {
            img.imagebg_li[i].style.display = "block";
            //如果比当前小;
            if (parseInt(img.present.style.left) < 100) {
                //如果活动框到了最左边
                //小图片向右
                img.animate = setInterval(function() {
                    //console.log(small_pic_left+"+"+ img.imageNumWidth*(img.num-i))
                    if (parseInt(img.small_pic.style.left) < (small_pic_left - img.imageNumWidth * (i - img.num) + img.imageNumWidth * (i - img.num) / 10)) {
                        img.small_pic.style.left = parseInt(img.small_pic.style.left) - img.imageNumWidth * (i - img.num) / 10 + "px";
                        img.imagebg_li[i].style.filter = "alpha(opacity=" + (++op) * 11 + ")";
                        img.imagebg_li[i].style.opacity = op / 9;
                    } else {
                        img.small_pic.style.left = small_pic_left - img.imageNumWidth * (i - img.num) + "px";
                        img.small_pic.getElementsByTagName("li")[i].className = "presently";
                        clearInterval(img.animate);
                        img.num = i;
                        img.animate = null;
                    }
                },
                30);
            } else {
                //活动框向左
                img.animate = setInterval(function() {
                    if (parseInt(img.present.style.left) > (present_left - img.imageNumWidth * (img.num - i) + img.imageNumWidth * (img.num - i) / 10)) {
                        img.present.style.left = parseInt(img.present.style.left) - img.imageNumWidth * (img.num - i) / 10 + "px";
                        img.imagebg_li[i].style.filter = "alpha(opacity=" + (++op) * 11 + ")";
                        img.imagebg_li[i].style.opacity = op / 9;
                    } else {
                        img.present.style.left = present_left - img.imageNumWidth * (img.num - i) + "px";
                        img.small_pic.getElementsByTagName("li")[i].className = "presently";
                        clearInterval(img.animate);
                        img.num = i;
                        img.animate = null;
                    }
                },
                30);
            }
        }
    }

}

img.init();
img.play(0);
//阻止事件冒泡
function estop(e) {
    var e = arguments.callee.caller.arguments[0] || event;
    if (e && e.stopPropagation) {
        //因此它支持W3C的stopPropagation()方法
        e.stopPropagation();
    } else {
        //否则，我们需要使用IE的方式来取消事件冒泡
        window.event.cancelBubble = true;
        return false;
    }
}