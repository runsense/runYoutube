var bm=false;if($('#jqxTree').css('width')==='100%'){bnm=true;}var FuncInit=FuncInit||{};var FuncInit={idmute:'#mute',idsw:'#sw',idsgq:'#sgq',idmp:'#mix_p',idms:'#mix_s',idasyn:"#asyn",idplyr:'#player',bblck:false,bchg:false,basyn:true,bmix:false,sgq:'default',idtree:'#jqxTree',videoid:'',plyLstId:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',plys:null,mix:null,player:null,tmpVid:[],h:0,w:0,tl:0,fact:1,uri:'',srcsgq:['default','small','medium','large','hd720','hd1080','highres'],src:[{id:'roots',label:'roots',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW',	items:[{id:'rootsnew',label:'rootsnew',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'oldroots',label:'oldroots',value:''},{id:'oldreggae',label:'oldreggae',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'oldreggaefr',label:'oldreggaefr',value:''},{id:'newreggae',label:'newreggae',value:''},{id:'newreggaefr',label:'newreggaefr',value:''}]},{id:'newRoots',label:'newRoots',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L',items:[{id:'newRootsnew',label:'newRootsnew',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'oldnewRoots',label:'oldnewRoots',value:''},{id:'oldnewRootsfr',label:'oldnewRootsfr',value:''},{id:'newRootsrnbnew',label:'newRootsrnbnew',value:''}]},{id:'danceHall',label:'danceHall',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR',items:[{id:'danceHallnew',label:'danceHallnew',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'olddanceHall',label:'olddanceHall',value:''},{id:'olddanceHallfr',label:'olddanceHallfr',value:''},{id:'danceHallnewfr',label:'danceHallnewfr',value:''},{id:'danceHallrnbnew',label:'danceHallrnbnew',value:''},{id:'danceHallrnbnewfr',label:'danceHallrnbnewfr',value:''},{id:'electrodanceHall',label:'electrodanceHall',value:''}]},{id:'luv',label:'luv',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O',items:[{id:'newluv',label:'newluv',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'oldluv',label:'oldluv',value:''}]},{id:'rnb',label:'rnb',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH',items:[{id:'newrnb',label:'newrnb',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'oldrnb',label:'oldrnb',value:''},{id:'oldRNBfr',label:'oldfr',value:''},{id:'newfr',label:'newfr',value:''},{id:'electro',label:'electro',value:''}]},{id:'rap',label:'rap',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE',items:[{id:'newrap',label:'new',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},{id:'oldrap',label:'old',value:''},{id:'reggae',label:'reggae',value:''},{id:'electro',label:'electro',value:''},{id:'rapsoul',label:'rapsoul',value:''}]},{id:'electro',label:'electro',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1',items:[{id:'newe',label:'new electro',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'olde',label:'old electro',value:''},{id:'oldh',label:'old house',value:''},{id:'newh',label:'new house',value:''},{id:'electrofr',label:'electrofr',value:''}]},{id:'specialhiphop',label:'specialhiphop',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk',items:[{id:'newhh',label:'new hip-hop',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'oldhh',label:'old hip-hop',value:''},{id:'mxtp',label:'Mixtape',value:''},{id:'rapsoul',label:'rapsoul',value:''}]},{id:'sprg',label:'island special',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b',items:[{id:'soca',label:'soca',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'mixatpe',label:'mixtape',value:''},{id:'lc',label:'latino cubain',value:''},{id:'z',label:'zook',value:''}]},{id:'vid',label:'video',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3',items:[{id:'newvid',label:'new',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'bollywood',label:'bollywood',value:''},{id:'m',label:'music',value:''}]},{id:'fr',label:'fr',value:'',items:[{id:'newfr',label:'new',value:''},{id:'oldfr',label:'old',value:''}]},{id:'97kafr',label:'97kafr',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI',items:[{id:'new97',label:'new',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'old97',label:'old',value:''}]},{id:'reunion',label:'reunion',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true,items:[{id:'oldr',label:'old',value:''},{id:'newr',label:'new',value:''}]}],tmp:'',rchg:function(){ FuncInit.mix.destroy(); FuncInit.plys.destroy();onYouTubeIframeAPIReady();},choPl:function(){if(FuncInit.basyn) FuncInit.player=FuncInit.mix;else FuncInit.player=FuncInit.plys;try{var vol=FuncInit.player.getVolume();$(FuncInit.idms).jqxSlider('setValue',FuncInit.player.getVolume());}catch(e){;}},init:function(){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);/*if(!bm){$(FuncInit.idtree).mouseleave(function(e){e.stopPropagation();if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*0.9,FuncInit.h);};$(FuncInit.idtree).animate({'width':FuncInit.w*0.05}).delay(306);});$(FuncInit.idtree).mouseenter(function(){if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*0.67,FuncInit.h);};$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)}).delay(306);});}*/}};FuncInit.init();FuncInit.h=$(window).height();FuncInit.w=$(window).width();FuncInit.tl=$(window).width()*81/100;if(!bm){$(window).resize(function(){$(FuncInit.idtree).animate({'height':(FuncInit.h)});$(FuncInit.idtree).animate({'width':(FuncInit.w*0.3)});if(FuncInit.plys!=null){FuncInit.plys.setSize(FuncInit.w*67/100,FuncInit.h);}}).resize();}var FuncTree=FuncTree||{};var FuncTree={bchk:false,bgrow:false,bms:true,updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],curi:function(id){FuncInit.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},add:function(arr){var it=$(FuncInit.idtree).jqxTree('getSelectedItem');if(it!=null){var elmt=it.element;var lg=arr.length;var felmt=[];for(var i=lg-1;i>=0;i--){var rplc='#'+i;$(FuncInit.idtree).jqxTree('addTo',{id:i,label:'play '+i,value:arr[i],items:[{id:'',label:' ',value:''}]},elmt);var itm=$(FuncInit.idtree).jqxTree('getItem',$(rplc)[0]);felmt[i]=itm.element;}};$(FuncInit.idtree).jqxTree('expandItem',elmt); FuncInit.mix.playVideoAt(felmt[0].value);$(FuncInit.idtree).jqxTree('expandItem',felmt[felmt.length-1]);$(FuncInit.idtree).jqxTree('collapseAll');},init:function(){var w=FuncInit.w*30/100;if(!bm){w=FuncInit.w;};$(FuncInit.idtree).jqxTree({source:FuncInit.src,width:w,height:FuncInit.h});$(FuncInit.idsgq).jqxListBox({selectedIndex:0,source:FuncInit.srcsgq,width:81,height:50});$(FuncInit.idmp).jqxSlider({width:'15%',min:0,max:2,ticksFrequency:0.25,value:1,step:0.25});$(FuncInit.idms).jqxSlider({width:'15%',min:0,max:100,ticksFrequency:1,value:36,step:1});$(FuncInit.idsw).jqxSwitchButton({height:27,width:81,checked:true});$(FuncInit.idasyn).jqxCheckBox({width:25,height:25,checked:true});$(FuncInit.idmute).jqxCheckBox({width:25,height:25,checked:false});}};onYouTubeIframeAPIReady=function(){var w=FuncInit.w; FuncInit.plys=new YT.Player('player',{height:FuncInit.h,width:w*0.71,videoId:FuncInit.videoid,events:{'onReady':opr,'onStateChange':ops}}); FuncInit.mix=new YT.Player('mix',{height:'50px',width:'200px',events:{'onReady':mixReady,'onStateChange':mixChange}});};var done=false;opr=function(event){if(!done){FuncInit.plys.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',index:0,startSeconds:1,suggestedQuality:FuncInit.sgq});event.target.playVideo();}else FuncInit.plys.playVideo();};ops=function(event){FuncInit.choPl();try{if(event.data==YT.PlayerState.PLAYING&&!done){var arr=FuncInit.plys.getPlaylist();FuncInit.plys.setVolume(27);FuncTree.add(arr);done=true;}}catch(e){onYouTubeIframeAPIReady()}};FuncTree.init();$('#jqxTree .jqx-tree-item').mouseenter(function(event){var text=event.target.textContent;});mixReady=function(){FuncInit.mix.loadPlaylist({list:FuncInit.plyLstId,listType:'playlist',suggestedQuality:FuncInit.sgq});};mixChange=function(event){FuncInit.choPl();if(event.data==YT.PlayerState.PLAYING){//if(FuncInit.bchg) FuncTree.add(arr);else FuncInit.bchg=true;FuncInit.player.setVolume(18);}};$(FuncInit.idtree).bind('select',function(ev){var a=ev.args;var e=a.element;var i=$(FuncInit.idtree).jqxTree('getItem',e);var spl=i.label.split(' ');if(spl[0]==='play'){FuncInit.videoid=i.value;FuncInit.player.playVideoAt(spl[1]);$(FuncInit.idtree).jqxTree('expandItem',e);}else{FuncInit.plyLstId=i.value;done=false;FuncInit.videoid='';FuncInit.rchg();}});$('#jqxTree').bind('expand',function(event){var args=event.args;var elmt=args.element;var i=$(FuncInit.idtree).jqxTree('getItem',elmt);var val=i.value;FuncTree.curi(val);var spl=i.label.split(' ');if(spl[0]==='play'){$(FuncInit.idtree).jqxTree('addTo',{html:FuncInit.uri},elmt);}});$(FuncInit.idmp).on('change',function(event){FuncInit.player.setPlaybackRate(event.args.value);});$(FuncInit.idsgq).on('select',function(event){var a=event.args;if(a) FuncInit.sgq=a.value;});$(FuncInit.idms).on('change',function(event){FuncInit.player.setVolume(event.args.value);});$(FuncInit.idsw).on('checked',function (event){$('#mix').animate({'left':'1px'}).delay(180);$('body').animate({'backgroundColor':'white'}).delay(90);FuncInit.mix.setSize(FuncInit.w*0.67,FuncInit.h);$(FuncInit.idplyr).animate({'left':FuncInit.tl});FuncInit.plys.setSize(200,50);$(FuncInit.idasyn).jqxCheckBox('val',true);});$(FuncInit.idsw).on('unchecked',function (event){$(FuncInit.idplyr).animate({'left':'1px'}).delay(180);$('body').animate({'backgroundColor':'black'}).delay(90);FuncInit.plys.setSize(FuncInit.w*0.67,FuncInit.h);$('#mix').animate({'left':FuncInit.tl}).delay(360);FuncInit.mix.setSize(200,50);$(FuncInit.idasyn).jqxCheckBox('val',false);}); $('#mix_pl').change(function(){var v=this.value;if(FuncInit.basyn) FuncInit.bmix=true;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);$(rplc).focus();FuncInit.bmix=false;var rplc='#'+v;$('#jqxTree').jqxTree('selectItem',$(rplc)[0]);var to=$('#sTo').val();$(FuncInit.idmp).jqxSlider('setValue',1);});$('#sTo').change(function(){FuncInit.player.seekTo(this.value,true);});$('#sTo').mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getCurrentTime();else this.value=FuncInit.plys.getCurrentTime();});$('#mix_pl').mouseenter(function(){if(FuncInit.basyn) this.value=FuncInit.mix.getPlaylistIndex();else this.value=FuncInit.plys.getPlaylistIndex();});$(FuncInit.idmute).bind('change',function(event){if(event.args.checked) FuncInit.player.mute();else FuncInit.player.unMute();});$(FuncInit.idasyn).bind('change',function(event){if(FuncInit.player.isMuted()) $(FuncInit.idmute).jqxCheckBox('val',true);else $(FuncInit.idmute).jqxCheckBox('val',false); FuncInit.basyn=event.args.checked;FuncInit.choPl();$(FuncInit.idmp).jqxSlider('setValue',FuncInit.player.getPlaybackRate());});