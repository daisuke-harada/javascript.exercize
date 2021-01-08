/*$()関数では、特定の属性を持つ要素や属性値を絞り込むことができます。*/
/*id=tab-contents要素子供の要素であり、 class=tabが適用されている要素であり、id=tab1ではない要素が適用される。*/
/* .hideは特定のHTML要素を非表示にする。
$('#tab-contents .tab[id != "tab1"]').hide();

/*id=tab-menu要素の中のaのclassをクリックした時*/
$('#tab-menu a').on('click', function(event){

    //tab classた設定されている要素が一旦削除される。
    $("#tab-contents .tab").hide();

    // activeクラスが削除される。
    $("#tab-menu .active").removeClass("active");

    // クリックされたものにactiveクラスが適用される。
    $(this).addClass("active");

    // .attr()は、HTML要素の属性を取得したり設定できるメソッドです。
    // .show()は要素を表示するメソッドである。
    // 取得したhref属性の中身が表示される。
    $($(this).attr("href")).show();
    event.preventDefault();
});