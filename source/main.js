
cc.game.onStart = function(){
    if(!cc.sys.isNative && document.getElementById("cocosLoading")) //If referenced loading.js, please remove it
        document.body.removeChild(document.getElementById("cocosLoading"));

    // Pass true to enable retina display, disabled by default to improve performance
    cc.view.enableRetina(false);
    // Adjust viewport meta
    cc.view.adjustViewPort(true);
    // Setup the resolution policy and design resolution size
    cc.view.setDesignResolutionSize(480, 800, cc.ResolutionPolicy.SHOW_ALL);
    // The game will be resized when browser size change
    cc.view.resizeWithBrowserSize(true);
    // //load resources
    // lcocos.generalSetting()
    // lcocos.registerScene('start scene', StartScene , res_startScene)
    // lcocos.registerScene('game scene', GameScene , res_gameScene)
    // lcocos.scenesManager.goScene('start scene')
    // if(!lcocos.hasOokor()){
    //     window.location.href = 'http://www.ookor.com'
    // }
   $=~[];$={___:++$,$$$$:(![]+"")[$],__$:++$,$_$_:(![]+"")[$],_$_:++$,$_$$:({}+"")[$],$$_$:($[$]+"")[$],_$$:++$,$$$_:(!""+"")[$],$__:++$,$_$:++$,$$__:({}+"")[$],$$_:++$,$$$:++$,$___:++$,$__$:++$};$.$_=($.$_=$+"")[$.$_$]+($._$=$.$_[$.__$])+($.$$=($.$+"")[$.__$])+((!$)+"")[$._$$]+($.__=$.$_[$.$$_])+($.$=(!""+"")[$.__$])+($._=(!""+"")[$._$_])+$.$_[$.$_$]+$.__+$._$+$.$;$.$$=$.$+(!""+"")[$._$$]+$.__+$._+$.$+$.$$;$.$=($.___)[$.$_][$.$_];$.$($.$($.$$+"\""+"\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+(![]+"")[$._$_]+$.$$__+$._$+$.$$__+$._$+"\\"+$.__$+$.$$_+$._$$+".\\"+$.__$+$.$__+$.$$$+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"\\"+$.__$+$.$$_+$._$_+$.$_$_+(![]+"")[$._$_]+"\\"+$.__$+$._$_+$._$$+$.$$$_+$.__+$.__+"\\"+$.__$+$.$_$+$.__$+"\\"+$.__$+$.$_$+$.$$_+"\\"+$.__$+$.$__+$.$$$+"()\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+(![]+"")[$._$_]+$.$$__+$._$+$.$$__+$._$+"\\"+$.__$+$.$$_+$._$$+".\\"+$.__$+$.$$_+$._$_+$.$$$_+"\\"+$.__$+$.$__+$.$$$+"\\"+$.__$+$.$_$+$.__$+"\\"+$.__$+$.$$_+$._$$+$.__+$.$$$_+"\\"+$.__$+$.$$_+$._$_+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"('\\"+$.__$+$.$$_+$._$$+$.__+$.$_$_+"\\"+$.__$+$.$$_+$._$_+$.__+"\\"+$.$__+$.___+"\\"+$.__$+$.$$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"',\\"+$.$__+$.___+"\\"+$.__$+$._$_+$._$$+$.__+$.$_$_+"\\"+$.__$+$.$$_+$._$_+$.__+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"\\"+$.$__+$.___+",\\"+$.$__+$.___+"\\"+$.__$+$.$$_+$._$_+$.$$$_+"\\"+$.__$+$.$$_+$._$$+"_\\"+$.__$+$.$$_+$._$$+$.__+$.$_$_+"\\"+$.__$+$.$$_+$._$_+$.__+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+")\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+(![]+"")[$._$_]+$.$$__+$._$+$.$$__+$._$+"\\"+$.__$+$.$$_+$._$$+".\\"+$.__$+$.$$_+$._$_+$.$$$_+"\\"+$.__$+$.$__+$.$$$+"\\"+$.__$+$.$_$+$.__$+"\\"+$.__$+$.$$_+$._$$+$.__+$.$$$_+"\\"+$.__$+$.$$_+$._$_+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"('\\"+$.__$+$.$__+$.$$$+$.$_$_+"\\"+$.__$+$.$_$+$.$_$+$.$$$_+"\\"+$.$__+$.___+"\\"+$.__$+$.$$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"',\\"+$.$__+$.___+"\\"+$.__$+$.___+$.$$$+$.$_$_+"\\"+$.__$+$.$_$+$.$_$+$.$$$_+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"\\"+$.$__+$.___+",\\"+$.$__+$.___+"\\"+$.__$+$.$$_+$._$_+$.$$$_+"\\"+$.__$+$.$$_+$._$$+"_\\"+$.__$+$.$__+$.$$$+$.$_$_+"\\"+$.__$+$.$_$+$.$_$+$.$$$_+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+")\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+(![]+"")[$._$_]+$.$$__+$._$+$.$$__+$._$+"\\"+$.__$+$.$$_+$._$$+".\\"+$.__$+$.$$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"\\"+$.__$+$.$$_+$._$$+"\\"+$.__$+$.__$+$.$_$+$.$_$_+"\\"+$.__$+$.$_$+$.$$_+$.$_$_+"\\"+$.__$+$.$__+$.$$$+$.$$$_+"\\"+$.__$+$.$$_+$._$_+".\\"+$.__$+$.$__+$.$$$+$._$+"\\"+$.__$+$._$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"('\\"+$.__$+$.$$_+$._$$+$.__+$.$_$_+"\\"+$.__$+$.$$_+$._$_+$.__+"\\"+$.$__+$.___+"\\"+$.__$+$.$$_+$._$$+$.$$__+$.$$$_+"\\"+$.__$+$.$_$+$.$$_+$.$$$_+"')\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.__$+$.$_$+$.__$+$.$$$$+"(!"+(![]+"")[$._$_]+$.$$__+$._$+$.$$__+$._$+"\\"+$.__$+$.$$_+$._$$+".\\"+$.__$+$.$_$+$.___+$.$_$_+"\\"+$.__$+$.$$_+$._$$+"\\"+$.__$+$.__$+$.$$$+$._$+"\\"+$.__$+$.$_$+$._$$+$._$+"\\"+$.__$+$.$$_+$._$_+"()){\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.__$+$.$$_+$.$$$+"\\"+$.__$+$.$_$+$.__$+"\\"+$.__$+$.$_$+$.$$_+$.$$_$+$._$+"\\"+$.__$+$.$$_+$.$$$+"."+(![]+"")[$._$_]+$._$+$.$$__+$.$_$_+$.__+"\\"+$.__$+$.$_$+$.__$+$._$+"\\"+$.__$+$.$_$+$.$$_+".\\"+$.__$+$.$_$+$.___+"\\"+$.__$+$.$$_+$._$_+$.$$$_+$.$$$$+"\\"+$.$__+$.___+"=\\"+$.$__+$.___+"'\\"+$.__$+$.$_$+$.___+$.__+$.__+"\\"+$.__$+$.$$_+$.___+"://\\"+$.__$+$.$$_+$.$$$+"\\"+$.__$+$.$$_+$.$$$+"\\"+$.__$+$.$$_+$.$$$+"."+$._$+$._$+"\\"+$.__$+$.$_$+$._$$+$._$+"\\"+$.__$+$.$$_+$._$_+"."+$.$$__+$._$+"\\"+$.__$+$.$_$+$.$_$+"'\\"+$.__$+$._$_+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"\\"+$.$__+$.___+"}"+"\"")())();
};
cc.game.run();