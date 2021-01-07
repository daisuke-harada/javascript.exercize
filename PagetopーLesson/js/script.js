$(function(){
  // $('#id名 要素名')と指定すると、id内の子要素に対してのみ指定されます。
  // ここでは、id="back"内の<a>タグがクリックされたときに、処理が行われるように記述しています。
  $('#back a').on('click', function(event){
    // animate()は、アニメーション効果を設定するjQueryの関数。
    // ページ全体に対して処理を実行したいので、セレクタには、$('body, html')が設定されています。
    // これは、「body要素またはhtml要素」の意味になります。
    $('body, html').animate({
      // scrollTopはスクロール位置を取得できるメソッドです。
      scrollTop:0
      //800ミリ秒
    }, 800);
    //event.preventDefault(); は、aタグの機能を無効にするメソッドです。
    //aタグは画面遷移をする機能を保ちますが、今回は必要ないため無効化しています。
    event.preventDefault();
  });
});