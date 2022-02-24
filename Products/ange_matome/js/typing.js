// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.value').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}

$(window).on('load',function(){
    let time = 1000;

    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(time).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェードアウト

    //=====ここからローディングエリア（splashエリア）をフェードアウトした後に動かしたいJSをまとめる    
    $("#splash").delay(time).fadeOut(100,function(){//ローディング画面を3秒（3000ms）待機してからフェードアウト
    
    $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与 
	
        //印象編 8-10テキストがタイピング風に出現
        var element = $(".value");
        element.each(function () {
            var text = $(this).html();
            var textbox = "";
            text.split('').forEach(function (t) {
                if (t !== " ") {
                    textbox += '<span>' + t + '</span>';
                } else {
                    textbox += t;
                }
            });
            $(this).html(textbox);
        });
        TextTypingAnime();/* アニメーション用の関数を呼ぶ*/

    });
});