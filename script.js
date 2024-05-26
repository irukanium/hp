$(".openbtn").click(function () {
    $(this).toggleClass('active');
    $('#menu').css('visibility','visible');
});

$(".openbtn").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});