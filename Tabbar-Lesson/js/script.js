$(function(){
  $('.menu-trigger').on('click', function(event){
    // .toggleClass( )は、指定されているclass（ここではactive）をトグル処理するメソッドです。
    // トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。
    $(this).toggleClass('active');

    // .fadeToggle( )は、要素のフェードイン・フェードアウトを切り替えるメソッドです。
    // このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。
    //ここでは、#sp-menuが開いたときに、.fadeToggle( )が処理されるように設定しています。
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});