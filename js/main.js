// 按下回到頂多按鈕時回到頂端
//  click
// animate 動畫 fadeIn
// scrollTop 元素的上方
//  jqReady
$(document).ready(function () {
    // jqclick
    $('#back-to-top').click(function (e) { 
        $('html,body').animate({scrollTop: 0},1000);
        
    });
});