var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};
var plyLstId={nm:'reunion',id:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',items:['3nP6Tz45K_U']};if($.urlParam('ur')!=null){plyLstId.id=$.urlParam('ur');plyLstId.nm="Personal"+plyLstId.id;}if($.urlParam('val')!=null){plyLstId.items=$.urlParam('val').split(',');plyLstId.id='PLrwe0-1smC6xk5tCgYKl9x97VdFFfgwoH';if($.urlParam('nm')!=null){plyLstId.nm=$.urlParam('nm');}else{plyLstId.nm="From gadiamb";}}onYouTubeIframeAPIReady=function(){var w=FI.tbtl[1];if(spe){FI.plys=new YT.Player('player',{height:FI.tbtl[0],width:w*0.71,videoId:plyLstId.items[0],events:{'onReady':FI.opr,'onStateChange':FI.ops,'onError':FI.errorP,'onApiChange':FI.dimTx}});FI.mix=new YT.Player('mix',{height:FI.tbtl[0],width:FI.tbtl[1]*0.27,videoId:plyLstId.items[0],events:{'onReady':FI.mixReady,'onStateChange':FI.mixChange,'onError':FI.errorP,'onApiChange':FI.dimTx}});$(FI.tbid[5]).jqxSlider('setValue',1);$(FI.tbid[6]).jqxSlider('setValue',1);}else{FI.plys=new YT.Player('player',{height:FI.tbtl[0],width:w*0.71,events:{'onReady':FI.opr,'onStateChange':FI.ops,'onError':FI.errorP,'onApiChange':FI.dimTx}});FI.mix=new YT.Player('mix',{height:FI.tbtl[0],width:FI.tbtl[1]*0.27,events:{'onReady':FI.mixReady,'onStateChange':FI.mixChange,'onError':FI.errorP,'onApiChange':FI.dimTx}});$(FI.tbid[5]).jqxSlider('setValue',1);$(FI.tbid[6]).jqxSlider('setValue',1);}};inter=function(){$(FI.tbid[11]).val(FI.player.getCurrentTime());};