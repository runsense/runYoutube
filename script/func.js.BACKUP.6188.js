/*! * Runsense 97Kafr * MixYoutube * Copyright 2018, Dalleau Pascal * */var spe=plyLstId.nm!='reunion'?{id:plyLstId.nm,html:'<span title="Charge Playlist" ><a href="#mix_s" >'+plyLstId.nm+'</a></span>',value:plyLstId.id,selected:true}:'';var itrv=setInterval(function(){},100);;var done=false;var srcmxpl=[' roots',' newRoots',' danceHall',' raggaDancehall',' specialhiphop',' rap...rapGame',' rap',' rnb',' latino...zouk',' slowBeat',' popDance',' house',' popRock',' rock...hardRock',' classic',' video',' trailers',' Traditional'];var srcsgq=['default','small','medium','large','hd720','hd1080','highres'];var F=F||{};var F={vbl:'#1',bPsync:true,bdo:false,bclk:false,bchg:false,basyn:true,bmix:false,bm:false,tbid:['#mix_pl'/*0*/,'#mute'/*1*/,'#sw'/*2*/,'#sgq'/*3*/,'#mix'/*4*/,'#mix_p'/*5*/,'#mix_s'/*6*/,"#asyn"/*7*/,"#sync"/*8*/,'#player'/*9*/,'#jqxTree'/*10*/,'#dec'/*11*/,'#pop'/*12*/,'#pSync'/*13*/],sgq:'default',videoid:'',plyLstId:plyLstId.id,plys:null,player:null,mix:null,tmpVid:[],tbtl:[0/*h*/,0/*w*/,0/*tl*/],uri:'',tmp:'',tbsrch:'1XqUyecMr7qu7PfV7VlsBR-ACRT63M6JpzIz-qR6N',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',	treeExp:function(ev){var args=ev.args;var elmt=args.element;var i=$(F.tbid[10]).jqxTree('getItem',elmt);$(elmt).find("li").length<2?F.fexp(i,elmt):'';$(F.tbid[12]).removeClass('pop');$(F.tbid[6]).addClass('anm_s');$(F.tbid[5]).addClass('anm_p');},fexp:function(i,e){var val=i.value;TF.curi(val);var spl=i.label.split(/\s/g);$(F.tbid[10]).jqxTree('addTo',{html:F.uri},e);},	treeSlc:function(ev){ev.preventDefault();ev.stopPropagation();var a=ev.args;var e=a.element;var i=$(F.tbid[10]).jqxTree('getItem',e);var spl=i.label.split(/\s/g);var pl=$(e).find("li").length;var pe=e.parentElement.parentElement;var pi=$(F.tbid[10]).jqxTree('getItem',pe);var bsmpl=true;var chd=$(e).find("li");var baf=false;var mixpl=$(F.tbid[0]).jqxInput('val');if(pi!=null){if(pi.label!=mixpl){bsmpl=false;baf=true;}}if(baf){F.idxPL(i,spl);}var id=i.id;if(bsmpl){if(chd.length!=0){F.videoid=i.value;var v=Number(spl[1]);idx=F.basyn?TF.idx[1].pl:TF.idx[0].pl;var arr=TF.getArr(idx);if(mixpl=='From gadiamb'){if(F.bPsync){F.plys.loadVideoById(plyLstId.items[v]);F.mix.loadVideoById(plyLstId.items[v]);}else{if(!F.basyn){F.plys.loadVideoById(plyLstId.items[v]);}else{F.mix.loadVideoById(plyLstId.items[v]);}}}else{if(F.bPsync){F.plys.playVideoAt(v);F.mix.playVideoAt(v);}else{if(!F.basyn){F.plys.playVideoAt(v);}else{F.mix.playVideoAt(v);}}}}else if(chd.length==0){$(F.tbid[0]).jqxInput('val',id);F.plyLstId=i.value;done=false;F.videoid='';F.rchg();}}else{$(F.tbid[0]).jqxInput('val',pi.id);F.plyLstId=pi.value;done=false;F.videoid='';F.rchg();}if(F.bclk){F.bclk=false;F.idxPL(i,spl);}},idxPL:function(i,spl){if(F.bPsync){TF.idx[0]={pl:i.id,v:spl[1]};TF.idx[1]={pl:i.id,v:spl[1]};}else if(F.basyn){TF.idx[1]={pl:i.id,v:spl[1]};}else{TF.idx[0]={pl:i.id,v:spl[1]};};},	rchg:function(){$(F.tbid[12]).addClass('pop');$(F.tbid[5]).removeClass('anm_p');$(F.tbid[6]).removeClass('anm_s');TF.idx[1].v=0;TF.idx[0].v=0;F.bPsync?[F.mixReady(),F.opr()]:F.basyn?F.opr():F.mixReady();},	choPl:function(){F.player=F.basyn?F.mix:F.plys;try{$(F.tbid[6]).jqxSlider('setValue',F.player.getVolume());F.player.isMuted()?$(F.tbid[1]).jqxCheckBox('val',true):$(F.tbid[1]).jqxCheckBox('val',false);}catch(e){;}},	init:function(){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);},	cmd:function(act){var bw=$(F.tbid[2]).jqxSwitchButton('val');var rtr=act?1:-1;var v=!F.bPsync&&F.basyn?Number(TF.idx[1].v)+rtr:Number(TF.idx[0].v)+rtr;var rplc='#'+v;F.vbl='#'+(v+4);F.check(!bw);$(F.tbid[2]).jqxSwitchButton({checked:!bw});$(F.tbid[10]).jqxTree('selectItem',$(rplc)[0]);$(F.tbid[10]).jqxTree('ensureVisible',$(F.vbl)[0]);$('#ap').addClass("chg");},	opr:function(event){done&&!spe?'':spe?[TF.add(plyLstId.items),F.plys.loadVideoById(plyLstId.items[TF.idx[0].v])]:[F.plys.loadPlaylist({list:F.plyLstId,listType:'playlist',index:TF.idx[0].v,startSeconds:1,suggestedQuality:F.sgq}),event.target.playVideo(),F.plys.playVideo()];F.bm?F.plys.setSize(F.tbtl[1],F.tbtl[0]):'';$('#lk ').addClass('smokVert');F.plys.unMute();},	mixReady:function(){spe=spe?[false,TF.add(plyLstId.items),F.mix.loadVideoById(plyLstId.items[TF.idx[0].v])].shift():[spe,F.mix.loadPlaylist({list:F.plyLstId,startSeconds:1,index:TF.idx[1].v,listType:'playlist',suggestedQuality:F.sgq})].shift();$('#lk ').addClass('smokVert');F.bm?F.mix.setSize(F.tbtl[1]*0.6,F.tbtl[0]):'';F.mix.unMute();},	mixChange:function(event){F.choPl();var cfm=event.data;if(cfm==YT.PlayerState.PLAYING&&!done){try{var arr=F.plys.getPlaylist();if(arr!=null){TF.add(arr);done=true;}$(F.tbid[5]).addClass('anm_p');}catch(e){;}}else if(cfm==-1){$(F.tbid[6]).removeClass('anm_s');$(F.tbid[5]).removeClass('anm_p');}else if(cfm==0){F.cmd(true);}else if(cfm==3){var rplc='#'+TF.idx[1].v;$(F.tbid[10]).jqxTree('expandItem',$(rplc)[0]);$(F.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);}$(F.tbid[6]).addClass('anm_s');},errorP:function(e){var cfm=e.data;try{if(cfm==100){F.cmd(true);}}catch(e){TF.idx[1].v=0;TF.idx[0].v=0;onYouTubeIframeAPIReady();}},	ops:function(event){F.choPl();try{var cfm=event.data;if(cfm==YT.PlayerState.PLAYING&&!done){var arr=F.plys.getPlaylist();if(arr!=null) TF.add(arr);done=true;$(F.tbid[5]).addClass('anm_p');}else if(cfm==-1){$(F.tbid[6]).removeClass('anm_s');$(F.tbid[5]).removeClass('anm_p');}else if(cfm==0){F.cmd(true);}else if(cfm==3){var rplc='#'+TF.idx[0].v;$(F.tbid[10]).jqxTree('expandItem',$(rplc)[0]);$(F.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);$(F.tbid[12]).removeClass('pop');$(F.tbid[6]).addClass('anm_s');}}catch(e){onYouTubeIframeAPIReady()}},	check:function(b){F.bchg?'':b&&F.bm?$('body').animate({'backgroundColor':'rgba(144,0,0,1)'}):b&&!F.bm?[F.player=F.plys,F.mix.setSize(F.tbtl[1]*0.33,F.tbtl[0]/2),F.plys.setSize(F.tbtl[1]*0.33,F.tbtl[0]/2),$(F.tbid[9]).animate({'left':F.tbtl[2]*1/3},{'top':F.tbtl[0]/2},1008).delay(108),$(F.tbid[4]).animate({'left':F.tbtl[2]*1/3},504).delay(207),$('body').animate({'backgroundColor':'rgba(144,0,0,1)'}).delay(153),$(F.tbid[9]).animate({'left':F.tbtl[2]},1008).delay(504),$(F.tbid[4]).animate({'left':'1px'},603).delay(306),F.mix.setSize(F.tbtl[1]*0.71,F.tbtl[0]),F.plys.setSize(F.tbtl[1]*0.27,F.tbtl[0])]:!b&&F.bm?$('body').animate({'backgroundColor':'rgba(0,0,1,1)'},504).delay(108):!b&&!F.bm?[F.player=F.mix,$(F.tbid[9]).animate({'left':'1px'},1107).delay(180),$('body').animate({'backgroundColor':'rgba(0,0,1,1)'},504).delay(108),F.plys.setSize(F.tbtl[1]*0.71,F.tbtl[0]),$(F.tbid[4]).animate({'left':F.tbtl[2]},2007).delay(360),F.mix.setSize(F.tbtl[1]*0.27,F.tbtl[0])]:'';},dimTx:function(){F.plys.getOptions('cc','fontSize','-1');F.mix.getOptions('cc','fontSize','-1');},	addExt:function(listid){if(listid.split(/http:/i).length>1){window.open(listid);}else{var ext=$('#add option:selected').text().replace(/ /g,'');TF.src.push({id:ext,label:ext,value:listid});$(F.tbid[10]).jqxTree('addTo',{id:ext,label:ext,value:listid});$(F.tbid[10]).jqxTree('collapseAll');ext='#'+ext;$(F.tbid[10]).jqxTree('selectItem',$(ext)[0]);$(F.tbid[10]).jqxTree('ensureVisible',$(ext)[0]);}},	srch:function(){var tcb=['F.refcb','F.refco'];var tab=['1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'];var queryStr;for(var k in tab){queryStr=[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM  "+tab[k]+"	");var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+tcb[k]+"&key="+F.gak,dataType:"jsonp"});}},	refcb:function(json){try{F.handleError(json);}catch(e){;}var msk=json["rows"];$.each(msk,function(){var toP={id:this[1],html:'<span title="'+this[0]+'" ><a href="#mix_s" >'+this[0]+'</a></span>',value:this[1].substring(1)};TF.src.push(toP);srcmxpl.push(toP);});},	refco:function(json){try{F.handleError(json);}catch(e){;}var msk=json["rows"];if(!spe){$.each(msk,function(){$('#add').append($('<option>',{value:this[1].substring(1),text:this[0]}));});}},	handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}};	F.srch();$.ajax({sucess:function(){F.init();}});F.tbtl[0]=$(window).height();F.tbtl[1]=$(window).width();F.tbtl[2]=$(window).width()*0.72;$(F.tbid[10]).css('width')==='200px'?[F.bm=true,$(F.tbid[10]).detach().appendTo($('#mob')),$(F.tbid[4]).detach().prependTo($('#mob')),$("#lkyt").detach().appendTo($('#mobcmd')),$("#mix_j").detach().appendTo($('#mobcmd')),$("#mix_p").detach().appendTo($('#mobcmd')),$("#dec").detach().appendTo($('#mobcmd')),$("#sync").detach().appendTo($('#mobcmd')),$("#mix_s").detach().appendTo($('#mobcmd')),$("#sw").detach().appendTo($('#mobcmd')),$("#sgq").detach().appendTo($('#mobcmd')),$("#lk").detach().appendTo($('#mobcmd'))]:'';$(window).resize(function(){$(F.tbid[10]).animate({'height':(F.tbtl[0])});$(F.tbid[10]).animate({'width':(F.tbtl[1]*0.3)});F.plys!=null&&!F.bm?[F.plys.setSize(F.tbtl[1]*67/100,F.tbtl[0]),F.mix.setSize(F.tbtl[1]*0.33,F.tbtl[0])]:F.plys!=null&&F.bm?[F.plys.setSize(F.tbtl[1],F.tbtl[0]),F.mix.setSize(F.tbtl[1]*0.6,F.tbtl[0])]:'';}).resize();var TF=TF||{};var TF={i:0,idx:[{pl:'Traditional',v:0},{pl:'Traditional',v:0}],arr:[],elmt:null,itms:[],updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],src:[{id:'roots',html:'<span title="Roots Reggae" ><a href="#mix_s" >roots</a></span>',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',html:'<span title="NewRoots&..." ><a href="#mix_s" >newRoots</a></span>',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',html:'<span title="danceHall" ><a href="#mix_s" >danceHall</a></span>',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'raggaDancehall',html:'<span title="raggaDancehall" ><a href="#mix_s" >raggaDancehall</a></span>',value:'PLrwe0-1smC6yYH5HJwuWuwLwmm-X70tJl'},{id:'rap...rapGame',html:'<span title="Rap...GangstaRap" ><a href="#mix_s" >rap...rapGame</a></span>',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'rap',html:'<span title="Charge Playlist" ><a href="#mix_s" >rap</a></span>',value:'PLrwe0-1smC6xg5rXKyup6THySQH168IeT'},{id:'specialhiphop',html:'<span title="Rap RBA" ><a href="#mix_s" >specialhiphop</a></span>',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'rnb',html:'<span title="R&B" ><a href="#mix_s" >rnb</a></span>',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'popDance',html:'<span title="popDance" ><a href="#mix_s" >popDance</a></span>',value:'PLrwe0-1smC6zQc1MWqG-0lse5W7g3V5Lv'},{id:'house',html:'<span title="house" ><a href="#mix_s" >house</a></span>',value:'PLrwe0-1smC6zhwAPv2lSvWTnGtZu_6mnt'},{id:'rock...hardRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >rock...hardRock</a></span>',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'popRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >popRock</a></span>',value:'PLrwe0-1smC6zUGVE59lT-r-r45B58Dwc7'},{id:'slowBeat',html:'<span title="Slow Beat" ><a href="#mix_s" >slowBeat</a></span>',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'classic',html:'<span title="Charge Playlist" ><a href="#mix_s" >classic</a></span>',value:'PLrwe0-1smC6yM3zgEuDZdwyTNYX4wdiWI'},{id:'latino...zouk',html:'<span title="Latino Zouk" ><a href="#mix_s" >latino...zouk</a></span>',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'video',html:'<span title="shortMov..trailer..humor...doc..." ><a href="#mix_s" >video</a></span>',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'trailers',html:'<span title="Charge Playlist" ><a href="#mix_s" >trailers</a></span>',value:'PLrwe0-1smC6zsZmTmNmuL2Yy_xZ6H1rcW'},{id:'Traditional',html:'<span title="Traditional" ><a href="#mix_s" >Traditional</a></span>',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true}],	addPlus:function(){var idx=F.basyn?TF.idx[1].pl:idx=TF.idx[0].pl;var i=TF.i;if(TF.getArr(idx)[i]){$(F.tbid[10]).jqxTree('addTo',{id:i,label:'play '+i,value:TF.getArr(idx)[i],items:[{id:'',label:' ',value:''}]},TF.elmt);}TF.i=TF.i+1;},	curi:function(id){F.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},	remakesource:function(itm){var idx=F.basyn?TF.idx[1].pl:idx=TF.idx[0].pl;var tmp=TF.itms;try{TF.itms=[];var arr=TF.getArr(idx);for(var i=0;i<100;i=i+1){TF.itms.push({id:i,label:'play '+i,value:arr[i],items:[{id:'',label:' ',value:''}]});}var s=TF.src;$.each(s,function(){if(this.expanded==true){this.items=null;}if(this.id==itm.element.id){this.id=itm.element.id;this.html='<span title="Charge Playlist" ><a href="#mix_s" >'+itm.element.id+'</a></span>';this.expanded=true;this.selected=false;this.items=TF.itms;};});}finally{$(F.tbid[10]).jqxTree({source:s});$(F.tbid[10]).jqxTree('expandItem',$('#0')[0]);}},	add:function(arr){F.bchg=true;var idx=F.basyn?TF.idx[1].pl:idx=TF.idx[0].pl;TF.setArr(idx,arr);TF.i=1;var it=$(F.tbid[10]).jqxTree('getSelectedItem');var lg;if(it!=null){var elmt=it.element;$(F.tbid[10]).jqxTree('addTo',{id:0,label:'play '+0,value:arr[0],items:[{id:'',label:' ',value:''}]},elmt);TF.elmt=elmt;TF.remakesource(it);$(F.tbid[10]).jqxTree('addTo',{id:37,html:'<span title="runYoutube " ><a href="http://runsense.re/runYT.html" >More on runUoutube </a></span>',value:''},elmt);$(F.tbid[11]).val(.36);}$(F.tbid[10]).jqxTree('selectItem',null);F.bchg=false;TF.i=0;},setArr:function(id,arr){var o={pl:id,arr:arr};TF.arr.push(o);},getArr:function(id){var rtr;$.each(TF.arr,function(){rtr=this.pl==id?this.arr:rtr;});return rtr;},	rtrclk:function(){$('#return').click(function(){var idx=$(F.tbid[0]).jqxInput('val');for(var i=0;i<srcmxpl.length;i=i+1){var comp=srcmxpl[i].substring(1);if(comp==idx){if(i<=3){$('#return').attr("href", './return.html?pl='+idx);}else if(i<=9){$('#return').attr("href", './runHipHop.html?pl='+idx);}else{$('#return').attr("href", './retour.html?pl='+idx);}}}});},	init:function(){var w=F.bm?F.tbtl[1]*30/100:F.tbtl[1];F.plyLstId=spe?[plyLstId.id,TF.src[TF.src.length-1].selected=false,TF.src.push(spe),srcmxpl.push('From gadiamb')].shift():F.plyLstId;$(F.tbid[10]).jqxTree({source:TF.src,width:w,height:F.tbtl[0]});$(F.tbid[3]).jqxListBox({selectedIndex:0,source:srcsgq,width:90,height:50});srcsgq=null;$(F.tbid[5]).jqxSlider({showButtons:false,width:F.tbtl[1]*0.09,min:0,max:2,ticksFrequency:0.25,value:1,step:0.25});$(F.tbid[6]).jqxSlider({showButtons:false,width:F.tbtl[1]*0.09,min:0,max:100,ticksFrequency:1,value:18,step:1});$(F.tbid[2]).jqxSwitchButton({height:27,width:81,checked:true,onLabel:'Player',offLabel:'Mix'});$(F.tbid[7]).jqxCheckBox({width:25,height:25,checked:true});$(F.tbid[13]).jqxCheckBox({width:25,height:25,checked:true});$(F.tbid[1]).jqxCheckBox({width:25,height:25,checked:false});TF.rtrclk();$('#bav').bind("click",function(e){F.cmd();});$('#bap').bind("click",function(e){F.cmd(true);});$('#up').bind("click",function(e){var rplc="#0";$(F.tbid[10]).jqxTree('selectItem',$(rplc)[0]);});$(F.tbid[8]).jqxButton({width:F.tbtl[1]*0.05,height:'20px'});$(F.tbid[0]).jqxInput({placeHolder:"",minLength:1,source:srcmxpl,width:90,height:25});$(F.tbid[0]).on('close',function(){var v=this.value;F.bmix=F.basyn;v=v.substring(1);var rplc='#'+v;$(F.tbid[10]).jqxTree('selectItem',$(rplc)[0]);$(F.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);F.bmix=false;var rplc='#'+v;$(F.tbid[10]).jqxTree('selectItem',$(rplc)[0]);$(F.tbid[5]).jqxSlider('setValue',1);});$(F.tbid[0]).click(function(){$(F.tbid[0]).jqxInput({opened:true});});$('#jqxTree .jqx-tree-item').mouseenter(function(event){});$(F.tbid[10]).bind('select',function(ev){F.bclk=true;F.treeSlc(ev);});$(F.tbid[10]).bind('expand',function(ev){F.treeExp(ev);});$(F.tbid[5]).on('change',function(event){F.basyn?F.mix.setPlaybackRate(event.args.value):F.plys.setPlaybackRate(event.args.value);});$(F.tbid[3]).on('select',function(event){var a=F.basyn?event.args:null;F.sgq=a?event.args:a.value;});$(F.tbid[6]).on('change',function(event){F.basyn?F.mix.setVolume(Number(event.args.value)):F.plys.setVolume(Number(event.args.value));});$(F.tbid[11]).mouseenter(function(){var v=F.basyn?F.mix.getCurrentTime()-F.plys.getCurrentTime():F.plys.getCurrentTime()-F.mix.getCurrentTime();$(F.tbid[11]).val(v);});$(F.tbid[2]).on('checked',function (event){F.check(true);});$(F.tbid[2]).on('unchecked',function(event){F.check(false)});$(F.tbid[1]).bind('change',function(event){F.player=F.basyn?F.mix:F.plys;event.args.checked?F.player.mute():F.player.unMute();});$(F.tbid[7]).bind('change',function(event){var a=event.args;F.basyn=a.checked;F.choPl();$(F.tbid[6]).jqxSlider('setValue',F.player.getVolume());$(F.tbid[5]).jqxSlider('setValue',F.player.getPlaybackRate());});$(F.tbid[13]).bind('change',function(e){F.bPsync=e.args.checked;F.bPsync?$(F.tbid[8]).val('sync'):$(F.tbid[8]).val('pause');});$(F.tbid[8]).on('click',function(){if(F.bPsync){var valm=F.mix.getCurrentTime();var valp=F.plys.getCurrentTime();var dec=$(F.tbid[11]).val()-2;if(valm>valp){valm=valp+dec;F.mix.seekTo(valm,true);F.plys.seekTo(valp,true);}else{valp=valm+dec;F.plys.seekTo(valm,true);F.mix.seekTo(valp,true);clearInterval(itrv);}}else{F.player.getPlayerState()==2?F.player.playVideo():F.player.pauseVideo();itrv=setInterval(inter,100);}});$(F.tbid[2]).jqxSwitchButton({checked:true});F.player=F.mix;F.player=F.mix;!spe?$(F.tbid[10]).jqxTree('selectItem',$('#Traditional')[0]):'';}};TF.init();