/*!
 * Runsense 97Kafr
 *
 * Copyright 2018, Dalleau Pascal
 *
 */
 var bm=false;if($('#jqxTree').css('width')==='100%'){bnm=true;}var FuncInit=FuncInit||{};

var FuncInit={basyn:false,bmix:false,idtree:'#jqxTree',idplyr:'#player',videoid:'',plyLstId:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',plys:null,mix:null,player:null,tmpVid:[],h:0,w:0,tl:0,fact:1,uri:'',src:[{id:'roots',label:'roots',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',label:'newRoots',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',label:'danceHall',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'luv',label:'luv',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'rnb',label:'rnb',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'rap',label:'rap',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},{id:'electro',label:'electro',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'sphh',label:'special hip-hop',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'sprg',label:'special reggae',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'vid',label:'video',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'97kafr',label:'97kafr',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'reunion',label:'reunion',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true}],tmp:'',rchg:function(){if(FuncInit.basyn) FuncInit.mix.destroy();
else FuncInit.plys.destroy();
onYouTubeIframeAPIReady();
},init:function(){var tag=document.createElement('script');
tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
if(!bm){$(FuncInit.idtree).mouseleave(function(){if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*0.9,FuncInit.h);
};

$(FuncInit.idtree).animate({'width':FuncInit.w*0.05});
});
$(FuncInit.idtree).mouseenter(function(){if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*0.67,FuncInit.h);
};
$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});
});
}}};
FuncInit.init();
FuncInit.h=$(window).height();
FuncInit.w=$(window).width();
FuncInit.tl=$(window).width()*61/100;if(!bm){$(window).resize(function(){$(FuncInit.idtree).animate({'height':(FuncInit.h)});
$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});
if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*67/100,FuncInit.h);
}}).resize();
}var FuncTree=FuncTree||{};
var FuncTree={bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],curi:function(id){FuncInit.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},
add:function(arr){$(FuncInit.idtree).jqxTree('collapseAll');
	var it=$(FuncInit.idtree).jqxTree('getSelectedItem');
	var elmt=it.element;var lg=arr.length;var elmt=$(FuncInit.idtree).jqxTree('getSelectedItem');
	var felmt=[];for(var i=lg-1;i>=0;i--){var rplc='#'+i;$(FuncInit.idtree).jqxTree('addTo',{id:i,label:'play '+i,value:arr[i],items:[{id:'',label:' ',value:''}]},elmt);
	var itm=$(FuncInit.idtree).jqxTree('getItem',$(rplc)[0]);
	felmt[i]=itm.element;};
	$(FuncInit.idtree).jqxTree('expandItem',elmt);
	$(FuncInit.idtree).jqxTree('expandItem',felmt[felmt.length-1]);
	$(FuncInit.idtree).mouseenter();
	}
,init:function(){var w=FuncInit.w*30/100;if(!bm){w=FuncInit.w;};
$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:w,height:FuncInit.h});
$('#mix_p').jqxSlider({showButtons: false,width:'15%',min:0,max:2,ticksFrequency:0.25,value:1,step:0.25});
$('#mix_s').jqxSlider({showButtons: false,width:'15%',min:0,max:100,ticksFrequency:1,value:36,step:1});
$('#sw').jqxSwitchButton({height:27,width:81,checked:true});
$("#asyn").jqxCheckBox({width:25,height:25,checked:false});
}};
onYouTubeIframeAPIReady=function(){var w=FuncInit.w;FuncInit.plys=new YT.Player('player',{height:FuncInit.h,width:w,videoId:FuncInit.videoid,events:{'onReady':onPlayerReady,'onStateChange':onPlayerStateChange}});
FuncInit.mix=new YT.Player('mix',{height:'50px',width:'200px',events:{'onReady':mixReady,'onStateChange':mixChange}});
FuncInit.player=FuncInit.plys;};
var done=false;onPlayerReady=function(event){if(!done){FuncInit.plys.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,startSeconds:1,suggestedQuality:'default'});
FuncInit.plys.setVolume(19);
event.target.playVideo();
}else FuncInit.plys.playVideo();
};
onPlayerStateChange=function(event){if(event.data==YT.PlayerState.PLAYING&&!done){done=true;var arr=FuncInit.plys.getPlaylist();
FuncTree.add(arr);
}};
FuncTree.init();
$('#jqxTree .jqx-tree-item').mouseenter(function(event){var text=event.target.textContent;});
mixFrame=function(id){FuncInit.mix=new YT.Player('mix',{height:'50px',width:'200px',videoId:id,events:{'onReady':mixReady,'onStateChange':mixChange}});
};
mixReady=function(){FuncInit.mix.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,suggestedQuality:'default'});
if(FuncInit.basyn) FuncInit.mix.setVolume($('#mix_s').jqxSlider('value'));
else FuncInit.mix.setVolume(0);
};
mixChange=function(){};
$(FuncInit.idtree).bind('select',function(ev){ev.stopPropagation();

var a=ev.args;var e=a.element;var i=$(FuncInit.idtree).jqxTree('getItem',e);
var spl=i.label.split(' ');
var player;if(FuncInit.bmix) player=FuncInit.mix;else player=FuncInit.plys;if(spl[0]==='play'){FuncInit.videoid=i.value;player.playVideoAt(spl[1]);
$(FuncInit.idtree).jqxTree('expandItem',e);
}else{FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();
}});
$('#jqxTree').bind('expand',function(event){var args=event.args;var elmt=args.element;var i=$(FuncInit.idtree).jqxTree('getItem',elmt);
var val=i.value;
FuncTree.curi(val);
var spl=i.label.split(' ');
if(spl[0]==='play'){$(FuncInit.idtree).jqxTree('addTo',{html:FuncInit.uri},elmt);
}$(FuncInit.idtree).mouseenter();
});
$('#mix_p').on('change',function(event){FuncInit.player.setPlaybackRate(event.args.value);
});
$('#mix_s').on('change',function(event){FuncInit.player.setVolume(event.args.value);
});
$('#sw').on('checked',function (event){$('#mix').animate({'left':'1px'});
FuncInit.mix.setSize(FuncInit.w*0.81,FuncInit.h);
var tl=FuncInit.tl+'px';$('#player').animate({'left':tl});
FuncInit.plys.setSize(200,50);$("#asyn").jqxCheckBox('val',true);
});
$('#sw').on('unchecked',function (event){$('#player').animate({'left':'1px'},{'zIndex':'1'});
FuncInit.plys.setSize(FuncInit.w*0.81,FuncInit.h);
$('#mix').animate({'left':FuncInit.tl},{'zIndex':'-1'});
FuncInit.mix.setSize(200,50);$("#asyn").jqxCheckBox('val',false);
});
 $('#mix_pl').change(function(){var v=this.value;if(FuncInit.basyn){FuncInit.bmix=true;FuncInit.mix.playVideoAt(v);
var rplc='#'+v;var tid=$(rplc)[0];$('#jqxTree').jqxTree('selectItem',tid);
$(rplc).focus();
FuncInit.bmix=false;}else{FuncInit.plys.playVideoAt(v);
var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',tid);
}var to=$('#sTo').val();
FuncInit.plys.seekTo(to,false);
$(FuncInit.idtree).mouseenter();
$('#mix_p').jqxSlider('setValue',1);
});
$('#sTo').change(function(){FuncInit.player.seekTo(this.value,true);
});
$('#sTo').mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getCurrentTime();
else this.value=FuncInit.plys.getCurrentTime();
});
$('#mix_pl').mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getPlaylistIndex();
else this.value=FuncInit.plys.getPlaylistIndex();
});
$("#asyn").bind('change',function(event){FuncInit.basyn=event.args.checked;if(FuncInit.basyn) FuncInit.player=FuncInit.mix;else FuncInit.player=FuncInit.plys;$('#mix_s').jqxSlider('setValue',FuncInit.player.getVolume());$('#mix_p').jqxSlider('setValue',FuncInit.player.getPlaybackRate());
});
