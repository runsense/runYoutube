/*! * Runsense 97Kafr * * Copyright 2018, Dalleau Pascal * */var bm=false;if($('#jqxTree').css('width')==='100%'){bnm=true;}var FuncInit=FuncInit||{};var FuncInit={idmute:'#mute',idsw:'#sw',idsgq:'#sgq',idmp:'#mix_p',idms:'#mix_s',idasyn:"#asyn",idplyr:'#player',bblck:false,bchg:false,basyn:true,bmix:false,sgq:'default',idtree:'#jqxTree',videoid:'',plyLstId:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',plys:null,mix:null,player:null,tmpVid:[],h:0,w:0,tl:0,fact:1,uri:'',srcsgq:['default','small','medium','large','hd720','hd1080','highres'],src:[{id:'roots',label:'roots',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',label:'newRoots',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',label:'danceHall',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'luv',label:'luv',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'rnb',label:'rnb',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'rap',label:'rap',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},{id:'electro',label:'electro',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'specialhiphop',label:'specialhiphop',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'Ile',label:'Ile',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'video',label:'video',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'popRock',label:'popRock',value:'PLrwe0-1smC6zQc1MWqG-0lse5W7g3V5Lv'},{id:'97kafr',label:'97kafr',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'reunion',label:'reunion',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true}],tmp:'',anim:function(id,anm,tim){$(id).addClass(anm);var wait = window.setTimeout(function(){$(id).removeClass(anm)},tim);},rchg:function(){ FuncInit.mix.destroy(); FuncInit.plys.destroy();onYouTubeIframeAPIReady();},choPl:function(){if(FuncInit.basyn) FuncInit.player=FuncInit.mix;else FuncInit.player=FuncInit.plys;try{var vol=FuncInit.player.getVolume();$(FuncInit.idms).jqxSlider('setValue',FuncInit.player.getVolume());}catch(e){;}},init:function(){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);}};FuncInit.init();FuncInit.h=$(window).height();FuncInit.w=$(window).width();FuncInit.tl=$(window).width()*81/100;if(!bm){$(window).resize(function(){$(FuncInit.idtree).animate({'height':(FuncInit.h)});$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*67/100,FuncInit.h);}}).resize();}var FuncTree=FuncTree||{};var FuncTree={bchk:false,bgrow:false,bms:true,i:1,arr:[],elmt:null,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],addPlus:function(){var i=FuncTree.i;if(FuncTree.arr[i]) $(FuncInit.idtree).jqxTree('addTo',{id:i,label:'play '+i,value:FuncTree.arr[i],items:[{id:'',label:' ',value:''}]},FuncTree.elmt);FuncTree.i=FuncTree.i+1;},curi:function(id){FuncInit.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},init:function(){var w=FuncInit.w*30/100;if(!bm){w=FuncInit.w;};$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:w,height:FuncInit.h});$(FuncInit.idsgq).jqxListBox({selectedIndex:0,source:FuncInit.srcsgq,width:81,height:50});$(FuncInit.idmp).jqxSlider({width:'15%',min:0,max:2,ticksFrequency:0.25,value:1,step:0.25});$(FuncInit.idms).jqxSlider({width:'15%',min:0,max:100,ticksFrequency:1,value:36,step:1});$(FuncInit.idsw).jqxSwitchButton({height:27,width:81,checked:true});$(FuncInit.idasyn).jqxCheckBox({width:25,height:25,checked:true});$(FuncInit.idmute).jqxCheckBox({width:25,height:25,checked:false});$('#mix_pl').change(function(){var v=this.value;if(FuncInit.basyn) FuncInit.bmix=true;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);$(rplc).focus();FuncInit.bmix=false;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);var to=$('#sTo').val();$(FuncInit.idmp).jqxSlider('setValue',1);});$('#sTo').change(function(){player.seekTo(this.value,true);});$('#sTo').mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getCurrentTime();else this.value=FuncInit.plys.getCurrentTime();});$('#mix_pl').mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getPlaylistIndex();else this.value=FuncInit.plys.getPlaylistIndex();});}};onYouTubeIframeAPIReady=function(){var w=FuncInit.w; FuncInit.plys=new YT.Player('player',{height:FuncInit.h,width:w*0.71,videoId:FuncInit.videoid,events:{'onReady':opr,'onStateChange':ops}}); FuncInit.mix=new YT.Player('mix',{height:'50px',width:'200px',events:{'onReady':mixReady,'onStateChange':mixChange}});try{FuncInit.player.setPlaybackRate(1);}catch(e){$(FuncInit.idmp).jqxSlider('setValue',1);}};var done=false;opr=function(event){if(!done){FuncInit.plys.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,startSeconds:1,suggestedQuality:FuncInit.sgq});event.target.playVideo();}else FuncInit.plys.playVideo();};ops=function(event){FuncInit.choPl();try{if(event.data==YT.PlayerState.PLAYING&&!done){var arr=FuncInit.plys.getPlaylist();FuncInit.plys.setVolume(27);add(arr);done=true;}}catch(e){onYouTubeIframeAPIReady()}};FuncTree.init();$('#jqxTree .jqx-tree-item').mouseenter(function(event){});mixReady=function(){FuncInit.mix.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',suggestedQuality:FuncInit.sgq});};mixChange=function(event){FuncInit.choPl();if(event.data==YT.PlayerState.PLAYING){try{FuncInit.player.setVolume(18);}catch(e){;}}};$(FuncInit.idtree).bind('select',function(ev){var a=ev.args;var e=a.element;var i=$(FuncInit.idtree).jqxTree('getItem',e);var spl=i.label.split(' ');if(spl[0]==='play'){FuncInit.videoid=i.value;FuncInit.player.playVideoAt(spl[1]);$(FuncInit.idtree).jqxTree('expandItem',e);}else{FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();}});$('#jqxTree').bind('expand',function(event){var args=event.args;var elmt=args.element;var i=$(FuncInit.idtree).jqxTree('getItem',elmt);var val=i.value;FuncTree.curi(val);var spl=i.label.split(' ');if(spl[0]==='play'){$(FuncInit.idtree).jqxTree('addTo',{html:FuncInit.uri},elmt);}});$(FuncInit.idmp).on('change',function(event){FuncInit.player.setPlaybackRate(event.args.value);});$(FuncInit.idsgq).on('select',function(event){if(FuncInit.basyn) $(FuncInit.idsw).click();if(FuncInit.basyn) var a=event.args;if(a) FuncInit.sgq=a.value;});$(FuncInit.idms).on('change',function(event){if (FuncInit.basyn) anim(FuncInit.idasyn,'bounce',2);FuncInit.anim('mix','bounce',2);FuncInit.player.setVolume(event.args.value);});$(FuncInit.idsw).on('checked',function (event){if(! FuncInit.bchg){FuncInit.player=FuncInit.plys;$('#mix').animate({'left':'1px'}).delay(180);$('body').animate({'backgroundColor':'white'}).delay(90);FuncInit.mix.setSize(FuncInit.w*0.67,FuncInit.h);$(FuncInit.idplyr).animate({'left':FuncInit.tl});FuncInit.plys.setSize(200,50);$(FuncInit.idasyn).jqxCheckBox('val',!FuncInit.basyn);}});$(FuncInit.idsw).on('unchecked',function (event){if(! FuncInit.bchg){FuncInit.player=FuncInit.mix;$(FuncInit.idplyr).animate({'left':'1px'}).delay(180);$('body').animate({'backgroundColor':'black'}).delay(90);FuncInit.plys.setSize(FuncInit.w*0.67,FuncInit.h);$('#mix').animate({'left':FuncInit.tl}).delay(360);FuncInit.mix.setSize(200,50);$(FuncInit.idasyn).jqxCheckBox('val',!FuncInit.basyn);}});$(FuncInit.idmute).bind('change',function(event){if(event.args.checked) FuncInit.player.mute();else FuncInit.player.unMute();});$(FuncInit.idasyn).bind('change',function(event){if(FuncInit.player.isMuted()) $(FuncInit.idmute).jqxCheckBox('val',true);else $(FuncInit.idmute).jqxCheckBox('val',false);$(FuncInit.idms).jqxSlider('setValue',FuncInit.player.getPlaybackRate());FuncInit.basyn=event.args.checked;FuncInit.choPl();$(FuncInit.idmp).jqxSlider('setValue',FuncInit.player.getPlaybackRate());});add=function(arr){FuncInit.bchg=true;FuncTree.arr=arr;FuncTree.i=1;var it=$(FuncInit.idtree).jqxTree('getSelectedItem');var lg;if(it!=null){var elmt=it.element;lg=arr.length-1;$(FuncInit.idtree).jqxTree('addTo',{id:0,label:'play '+0,value:arr[0],items:[{id:'',label:' ',value:''}]},elmt);FuncTree.elmt=elmt;for(var i in FuncTree.arr) FuncTree.addPlus();FuncInit.mix.playVideoAt(elmt.value);var rplc='#'+lg;var itm=$(FuncInit.idtree).jqxTree('getItem',$(rplc)[0]);$(FuncInit.idtree).jqxTree('expandItem',elmt);}$(FuncInit.idtree).jqxTree('selectItem',null);FuncInit.bchg=false;};$(FuncInit.idsw).jqxSwitchButton({checked:true});