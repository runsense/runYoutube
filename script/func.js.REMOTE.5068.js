var spe;if(plyLstId.nm!='reunion'){spe={id:plyLstId.nm,html:'<span title="Charge Playlist" ><a href="#mix_s" >'+plyLstId.nm+'</a></span>',value:plyLstId.id,selected:true};};var itrv=setInterval(function(){},100);;var done=false;var srcmxpl=[' roots',' newRoots',' danceHall',' raggaDancehall',' specialhiphop',' rap...rapGame',' rap',' rapHipHop',' rnb',' latino...zouk',' slowBeat',' popDance',' house',' popRock',' rock...hardRock',' classic',' video',' trailers',' Traditional'];var srcsgq=['default','small','medium','large','hd720','hd1080','highres'];var FI=FI||{};var FI={bPsync:true,bdo:false,bclk:false,bchg:false,basyn:true,bmix:false,bm:false,tbid:['#mix_pl'/*0*/,'#mute'/*1*/,'#sw'/*2*/,'#sgq'/*3*/,'#mix'/*4*/,'#mix_p'/*5*/,'#mix_s'/*6*/,"#asyn"/*7*/,"#sync"/*8*/,'#player'/*9*/,'#jqxTree'/*10*/,'#dec'/*11*/,'#pop'/*12*/,'#pSync'/*13*/],sgq:'default',videoid:'',plyLstId:plyLstId.id,plys:null,player:null,mix:null,tmpVid:[],tbtl:[0/*h*/,0/*w*/,0/*tl*/],uri:'',tmp:'',tbsrch:'1XqUyecMr7qu7PfV7VlsBR-ACRT63M6JpzIz-qR6N',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',	treeExp:function(ev){var args=ev.args;var elmt=args.element;var i=$(FI.tbid[10]).jqxTree('getItem',elmt);if($(elmt).find("li").length<2){var val=i.value;TF.curi(val);var spl=i.label.split(' ');$(FI.tbid[10]).jqxTree('addTo',{html:FI.uri},elmt);}$(FI.tbid[12]).removeClass('pop');$(FI.tbid[6]).addClass('anm_s');$(FI.tbid[5]).addClass('anm_p');},	treeSlc:function(ev){var a=ev.args;var e=a.element;var i=$(FI.tbid[10]).jqxTree('getItem',e);var spl=i.label.split(' ');var pl=$(e).find("li").length;var pe=e.parentElement.parentElement;var pi=$(FI.tbid[10]).jqxTree('getItem',pe);var bsmpl=true;var chd=$(e).find("li");var baf=false;if(pi!=null){if(pi.label!=$(FI.tbid[0]).jqxInput('val')){bsmpl=false;baf=true;}}if(baf){FI.idxPL(i,spl);}var id=i.id;if(bsmpl){if(chd.length!=0){FI.videoid=i.value;var v=Number(spl[1]);if(FI.basyn){idx=TF.idx[1].pl;}else{idx=TF.idx[0].pl;}var arr=TF.getArr(idx);if(FI.bPsync){FI.plys.playVideoAt(v);FI.mix.playVideoAt(v);}else{if(!FI.basyn){FI.plys.playVideoAt(v);}else{FI.mix.playVideoAt(v);}}}else if(chd.length==0){$(FI.tbid[0]).jqxInput('val',id);FI.plyLstId=i.value;done=false;FI.videoid='';FI.rchg();}}else{$(FI.tbid[0]).jqxInput('val',pi.id);FI.plyLstId=pi.value;done=false;FI.videoid='';FI.rchg();}if(FI.bclk){FI.bclk=false;FI.idxPL(i,spl);}},	idxPL:function(i,spl){if(FI.bPsync){TF.idx[0]={pl:i.id,v:spl[1]};TF.idx[1]={pl:i.id,v:spl[1]};}else if(FI.basyn){TF.idx[1]={pl:i.id,v:spl[1]};}else{TF.idx[0]={pl:i.id,v:spl[1]};};},	rchg:function(){$(FI.tbid[12]).addClass('pop');$(FI.tbid[5]).addClass('anm_p');$(FI.tbid[6]).removeClass('anm_s');TF.idx[1].v=0;TF.idx[0].v=0;if(FI.bPsync){FI.mixReady();FI.opr();}else if(FI.basyn){FI.opr();}else{FI.mixReady();}},	choPl:function(){if(FI.basyn) FI.player=FI.mix;else FI.player=FI.plys;try{$(FI.tbid[6]).jqxSlider('setValue',FI.player.getVolume());if(FI.player.isMuted()) $(FI.tbid[1]).jqxCheckBox('val',true);else $(FI.tbid[1]).jqxCheckBox('val',false);}catch(e){;}},	init:function(){var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);FI.srch();},	cmd:function(act){var bw=$(FI.tbid[2]).jqxSwitchButton('val');var rtr;if(act) rtr=+1;else rtr=-1;var rplc;if(FI.bPsync){$('#av').addClass("chg");var v=Number(TF.idx[0].v);TF.idx[0].v=v+rtr;v=Number(TF.idx[1].v);TF.idx[1].v=v+rtr;if(bw){rplc='#'+TF.idx[0].v;FI.uncheck();$(FI.tbid[2]).jqxSwitchButton({checked:false});}else{rplc='#'+TF.idx[1].v;FI.check();$(FI.tbid[2]).jqxSwitchButton({checked:true});}}else{if(!FI.basyn){var v=Number(TF.idx[0].v);TF.idx[0].v=v+rtr;rplc='#'+TF.idx[0].v;FI.uncheck();$(FI.tbid[2]).jqxSwitchButton({checked:false});}else{var v=Number(TF.idx[1].v);TF.idx[1].v=v+rtr;rplc='#'+TF.idx[1].v;FI.check();$(FI.tbid[2]).jqxSwitchButton({checked:true});}}$(FI.tbid[10]).jqxTree('selectItem',$(rplc)[0]);$(FI.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);$('#ap').addClass("chg");},	opr:function(event){if(spe){TF.add(plyLstId.items);try{FI.plys.play(plyLstId.items[0]);}finally{event.target.playVideo();}}else{if(!done){FI.plys.loadPlaylist({list:FI.plyLstId,listType:'playlist',index:TF.idx[0].v,startSeconds:1,suggestedQuality:FI.sgq});event.target.playVideo();if(FI.bm) FI.plys.setSize(FI.tbtl[1],FI.tbtl[0]);}FI.plys.playVideo();}$('#lk ').addClass('smokVert');FI.plys.unMute();},	mixReady:function(){if(spe){TF.add(plyLstId.items);try{FI.mix.play(plyLstId.items[0]);}finally{event.target.playVideo();}}else{FI.mix.loadPlaylist({list:FI.plyLstId,startSeconds:1,index:TF.idx[1].v,listType:'playlist',suggestedQuality:FI.sgq});$('#lk ').addClass('smokVert');}if(FI.bm){FI.mix.setSize(FI.tbtl[1]*0.6,FI.tbtl[0]);}FI.mix.unMute();},	mixChange:function(event){FI.choPl();var cfm=event.data;if(cfm==YT.PlayerState.PLAYING&&!done){try{var arr=FI.plys.getPlaylist();if(arr!=null){TF.add(arr);done=true;}}catch(e){;}}else if(cfm==0){FI.cmd(true);}else if(cfm==3){var rplc='#'+TF.idx[1].v;$(FI.tbid[10]).jqxTree('expandItem',$(rplc)[0]);$(FI.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);}},	errorP:function(e){var cfm=e.data;try{if(cfm==100){FI.cmd(true);}}catch(e){TF.idx[1].v=0;TF.idx[0].v=0;onYouTubeIframeAPIReady();}},	ops:function(event){FI.choPl();try{var cfm=event.data;if(cfm==YT.PlayerState.PLAYING&&!done){var arr=FI.plys.getPlaylist();if(arr!=null) TF.add(arr);done=true;}else if(cfm==0){FI.cmd(true);}else if(cfm==3){var rplc='#'+TF.idx[0].v;$(FI.tbid[10]).jqxTree('expandItem',$(rplc)[0]);$(FI.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);$(FI.tbid[12]).removeClass('pop');$(FI.tbid[6]).addClass('anm_s');$(FI.tbid[5]).addClass('anm_p');}}catch(e){onYouTubeIframeAPIReady()}},	check:function(){if(!FI.bchg){if(!FI.bm){FI.player=FI.plys;FI.mix.setSize(FI.tbtl[1]*0.33,FI.tbtl[0]/2);FI.plys.setSize(FI.tbtl[1]*0.33,FI.tbtl[0]/2);$(FI.tbid[9]).animate({'left':FI.tbtl[2]*1/3},{'top':FI.tbtl[0]/2},1008).delay(108);$(FI.tbid[4]).animate({'left':FI.tbtl[2]*1/3},504).delay(207);$('body').animate({'backgroundColor':'rgba(144,0,0,1)'}).delay(153);$(FI.tbid[9]).animate({'left':FI.tbtl[2]},1008).delay(504);$(FI.tbid[4]).animate({'left':'1px'},603).delay(306);FI.mix.setSize(FI.tbtl[1]*0.71,FI.tbtl[0]);FI.plys.setSize(FI.tbtl[1]*0.27,FI.tbtl[0]);}else $('body').animate({'backgroundColor':'rgba(144,0,0,1)'});}},	uncheck:function(){if(!FI.bchg){if(!FI.bm){FI.player=FI.mix;$(FI.tbid[9]).animate({'left':'1px'},1107).delay(180);$('body').animate({'backgroundColor':'rgba(0,0,1,1)'},504).delay(108);FI.plys.setSize(FI.tbtl[1]*0.71,FI.tbtl[0]);$(FI.tbid[4]).animate({'left':FI.tbtl[2]},2007).delay(360);FI.mix.setSize(FI.tbtl[1]*0.27,FI.tbtl[0]);}else $('body').animate({'backgroundColor':'rgba(0,0,1,1)'},504).delay(108);}},	dimTx:function(){FI.plys.getOptions('cc','fontSize','-1');FI.mix.getOptions('cc','fontSize','-1');},	addExt:function(listid){if(listid.split('http:').length>1){window.open(listid);}else{var ext=$('#add option:selected').text().replace(/ /g,'');TF.src.push({id:ext,label:ext,value:listid});$(FI.tbid[10]).jqxTree('addTo',{id:ext,label:ext,value:listid});$(FI.tbid[10]).jqxTree('collapseAll');ext='#'+ext;$(FI.tbid[10]).jqxTree('selectItem',$(ext)[0]);$(FI.tbid[10]).jqxTree('ensureVisible',$(ext)[0]);}},	srch:function(){var cb='FI.refcb';var queryStr=[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM  1fOokG9vr5dJi-XcE8MTgfUdcPtxbDzZ4qtPsbxZM	");var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+FI.gak,dataType:"jsonp"});},	refcb:function(json){try{FI.handleError(json);}catch(e){;}var msk=json["rows"];if(msk.length==0) msk.push("choice another table");$.each(msk,function(){$('#add').append($('<option>',{value:this[1].substring(1),text:this[0]}));});},	handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}};	FI.init();FI.tbtl[0]=$(window).height();FI.tbtl[1]=$(window).width();FI.tbtl[2]=$(window).width()*0.72;if($(FI.tbid[10]).css('width')==='200px'){FI.bm=true;$(FI.tbid[10]).detach().appendTo($('#mob'));$(FI.tbid[4]).detach().prependTo($('#mob'));$("#lkyt").detach().appendTo($('#mobcmd'));$("#mix_j").detach().appendTo($('#mobcmd'));$("#mix_p").detach().appendTo($('#mobcmd'));$("#dec").detach().appendTo($('#mobcmd'));$("#sync").detach().appendTo($('#mobcmd'));$("#mix_s").detach().appendTo($('#mobcmd'));$("#sw").detach().appendTo($('#mobcmd'));$("#sgq").detach().appendTo($('#mobcmd'));$("#lk").detach().appendTo($('#mobcmd'));}$(window).resize(function(){$(FI.tbid[10]).animate({'height':(FI.tbtl[0])});$(FI.tbid[10]).animate({'width':(FI.tbtl[1]*0.3)});if(FI.plys!=null) if(!FI.bm){FI.plys.setSize(FI.tbtl[1]*67/100,FI.tbtl[0]);FI.mix.setSize(FI.tbtl[1]*0.33,FI.tbtl[0]);}else{FI.plys.setSize(FI.tbtl[1],FI.tbtl[0]);FI.mix.setSize(FI.tbtl[1]*0.6,FI.tbtl[0]);}}).resize();var TF=TF||{};var TF={i:0,idx:[{pl:'Traditional',v:0},{pl:'Traditional',v:0}],arr:[],elmt:null,itms:[],updBackG:"body",ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],src:[{id:'roots',html:'<span title="Roots Reggae" ><a href="#mix_s" >roots</a></span>',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',html:'<span title="NewRoots&..." ><a href="#mix_s" >newRoots</a></span>',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',html:'<span title="danceHall" ><a href="#mix_s" >danceHall</a></span>',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'raggaDancehall',html:'<span title="raggaDancehall" ><a href="#mix_s" >raggaDancehall</a></span>',value:'PLrwe0-1smC6yYH5HJwuWuwLwmm-X70tJl'},{id:'rap...rapGame',html:'<span title="Rap...GangstaRap" ><a href="#mix_s" >rap...rapGame</a></span>',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'rap',html:'<span title="Charge Playlist" ><a href="#mix_s" >rap</a></span>',value:'PLrwe0-1smC6xg5rXKyup6THySQH168IeT'},{id:'rapHipHop',html:'<span title="Rap Hip-Hop" ><a href="#mix_s" >rapHipHop</a></span>',value:'PLrwe0-1smC6xiPucN4OZ_Uu2pQ5fJz2uE'},{id:'specialhiphop',html:'<span title="Rap RBA" ><a href="#mix_s" >specialhiphop</a></span>',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'rnb',html:'<span title="R&B" ><a href="#mix_s" >rnb</a></span>',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'popDance',html:'<span title="popDance" ><a href="#mix_s" >popDance</a></span>',value:'PLrwe0-1smC6zQc1MWqG-0lse5W7g3V5Lv'},{id:'house',html:'<span title="house" ><a href="#mix_s" >house</a></span>',value:'PLrwe0-1smC6zhwAPv2lSvWTnGtZu_6mnt'},{id:'rock...hardRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >rock...hardRock</a></span>',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'popRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >popRock</a></span>',value:'PLrwe0-1smC6zUGVE59lT-r-r45B58Dwc7'},{id:'slowBeat',html:'<span title="Slow Beat" ><a href="#mix_s" >slowBeat</a></span>',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'classic',html:'<span title="Charge Playlist" ><a href="#mix_s" >classic</a></span>',value:'PLrwe0-1smC6yM3zgEuDZdwyTNYX4wdiWI'},{id:'latino...zouk',html:'<span title="Latino Zouk" ><a href="#mix_s" >latino...zouk</a></span>',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'video',html:'<span title="shortMov..trailer..humor...doc..." ><a href="#mix_s" >video</a></span>',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'trailers',html:'<span title="Charge Playlist" ><a href="#mix_s" >trailers</a></span>',value:'PLrwe0-1smC6zsZmTmNmuL2Yy_xZ6H1rcW'},{id:'Traditional',html:'<span title="Traditional" ><a href="#mix_s" >Traditional</a></span>',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i',selected:true}],	addPlus:function(){var idx;if(FI.basyn) idx=TF.idx[1].pl;else idx=TF.idx[0].pl;var i=TF.i;if(TF.getArr(idx)[i]){$(FI.tbid[10]).jqxTree('addTo',{id:i,label:'play '+i,value:TF.getArr(idx)[i],items:[{id:'',label:' ',value:''}]},TF.elmt);}TF.i=TF.i+1;},	curi:function(id){FI.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},	remakesource:function(itm){var idx;if(FI.basyn) idx=TF.idx[1].pl;else idx=TF.idx[0].pl;var tmp=TF.itms;try{TF.itms=[];var arr=TF.getArr(idx);for(var i=0;i<arr.length-1;i=i+1) TF.itms.push({id:i,label:'play '+i,value:arr[i],items:[{id:'',label:' ',value:''}]});var s=TF.src;$.each(s,function(){if(this.expanded==true){this.items=null;}if(this.id==itm.element.id){this.id=itm.element.id;this.html='<span title="Charge Playlist" ><a href="#mix_s" >'+itm.element.id+'</a></span>';this.expanded=true;this.selected=false;this.items=TF.itms;};});}finally{$(FI.tbid[10]).jqxTree({source:s});$(FI.tbid[10]).jqxTree('expandItem',$('#0')[0]);}},	add:function(arr){FI.bchg=true;if(FI.basyn) idx=TF.idx[1].pl;else idx=TF.idx[0].pl;TF.setArr(idx,arr);TF.i=1;var it=$(FI.tbid[10]).jqxTree('getSelectedItem');var lg;if(it!=null){var elmt=it.element;$(FI.tbid[10]).jqxTree('addTo',{id:0,label:'play '+0,value:arr[0],items:[{id:'',label:' ',value:''}]},elmt);TF.elmt=elmt;TF.remakesource(it);$(FI.tbid[10]).jqxTree('addTo',{id:37,html:'<span title="runYoutube " ><a href="http://runsense.re/runYT.html" >More on runUoutube </a></span>',value:''},elmt);$(FI.tbid[11]).val(.36);}$(FI.tbid[10]).jqxTree('selectItem',null);FI.bchg=false;TF.i=0;},	setArr:function(id,arr){var o={pl:id,arr:arr};TF.arr.push(o);},	getArr:function(id){var rtr;$.each(TF.arr,function(){if(this.pl==id) rtr=this.arr;});return rtr;},	rtrclk:function(){$('#return').click(function(){var idx=$(FI.tbid[0]).jqxInput('val');for(var i=0;i<srcmxpl.length;i=i+1){var comp=srcmxpl[i].substring(1);if(comp==idx){if(i<=3){$('#return').attr("href", './return.html?pl='+idx);}else if(i<=9){$('#return').attr("href", './runHipHop.html?pl='+idx);}else{$('#return').attr("href", './retour.html?pl='+idx);}}}});},	init:function(){var w=FI.tbtl[1]*30/100;if(!FI.bm){w=FI.tbtl[1];};if(spe){FI.plyLstId=plyLstId.id;var l=TF.src.length-1;TF.src[l].selected=false;TF.src.push(spe);}	$(FI.tbid[10]).jqxTree({source:TF.src,width:w,height:FI.tbtl[0]});$(FI.tbid[3]).jqxListBox({selectedIndex:0,source:srcsgq,width:90,height:50});srcsgq=null;$(FI.tbid[5]).jqxSlider({showButtons:false,width:FI.tbtl[1]*0.09,min:0,max:2,ticksFrequency:0.25,value:1,step:0.25});$(FI.tbid[6]).jqxSlider({showButtons:false,width:FI.tbtl[1]*0.09,min:0,max:100,ticksFrequency:1,value:22,step:1});$(FI.tbid[2]).jqxSwitchButton({height:27,width:81,checked:true,onLabel:'Player',offLabel:'Mix'});$(FI.tbid[7]).jqxCheckBox({width:25,height:25,checked:true});$(FI.tbid[13]).jqxCheckBox({width:25,height:25,checked:true});$(FI.tbid[1]).jqxCheckBox({width:25,height:25,checked:false});	TF.rtrclk();$('#bav').bind("click",function(e){e.stopPropagation();FI.cmd();});$('#bap').bind("click",function(e){e.stopPropagation();FI.cmd(true);});$('#up').bind("click",function(e){var rplc="#0";$(FI.tbid[10]).jqxTree('selectItem',$(rplc)[0]);});$(FI.tbid[8]).jqxButton({width:FI.tbtl[1]*0.05,height:'20px'});$(FI.tbid[0]).jqxInput({placeHolder:"",minLength:1,source:srcmxpl,width:90,height:25});$(FI.tbid[0]).on('close',function(){var v=this.value;if(FI.basyn){FI.bmix=true;}v=v.substring(1);var rplc='#'+v;$(FI.tbid[10]).jqxTree('selectItem',$(rplc)[0]);$(FI.tbid[10]).jqxTree('ensureVisible',$(rplc)[0]);FI.bmix=false;var rplc='#'+v;$(FI.tbid[10]).jqxTree('selectItem',$(rplc)[0]);$(FI.tbid[5]).jqxSlider('setValue',1);});$(FI.tbid[0]).click(function(){$(FI.tbid[0]).jqxInput({opened:true});});$('#jqxTree .jqx-tree-item').mouseenter(function(event){});$(FI.tbid[10]).bind('select',function(ev){FI.bclk=true;FI.treeSlc(ev);});$(FI.tbid[10]).bind('expand',function(ev){FI.treeExp(ev);});$(FI.tbid[5]).on('change',function(event){if(FI.basyn) FI.mix.setPlaybackRate(event.args.value);else FI.plys.setPlaybackRate(event.args.value);});$(FI.tbid[3]).on('select',function(event){if(FI.basyn) var a=event.args;if(a) FI.sgq=a.value;});$(FI.tbid[6]).on('change',function(event){if(FI.basyn) FI.mix.setVolume(Number(event.args.value));else FI.plys.setVolume(Number(event.args.value));});$(FI.tbid[11]).mouseenter(function(){var v;if(FI.basyn) v=FI.mix.getCurrentTime()-FI.plys.getCurrentTime();else v=FI.plys.getCurrentTime()-FI.mix.getCurrentTime();$(FI.tbid[11]).val(v);});$(FI.tbid[2]).on('checked',function (event){FI.check();});$(FI.tbid[2]).on('unchecked',function(event){FI.uncheck();});$(FI.tbid[1]).bind('change',function(event){if(FI.basyn) FI.player=FI.mix;if(event.args.checked) FI.player.mute();else FI.player.unMute();});$(FI.tbid[7]).bind('change',function(event){var a=event.args;if(a.checked) FI.basyn=true;else FI.basyn=false;FI.choPl();$(FI.tbid[6]).jqxSlider('setValue',FI.player.getVolume());$(FI.tbid[5]).jqxSlider('setValue',FI.player.getPlaybackRate());});$(FI.tbid[13]).bind('change',function(e){FI.bPsync=e.args.checked;if(FI.bPsync){$(FI.tbid[8]).val('sync');}else{$(FI.tbid[8]).val('pause');}});$(FI.tbid[8]).on('click',function(){if(FI.bPsync){var valm=FI.mix.getCurrentTime();var valp=FI.plys.getCurrentTime();var dec=$(FI.tbid[11]).val()-2;if(valm>valp){valm=valp;FI.mix.seekTo(valm+dec,true);FI.plys.seekTo(valm,true);}else{FI.plys.seekTo(valm+dec,true);FI.mix.seekTo(valm,true);clearInterval(itrv);}}else{if(FI.player.getPlayerState()==2){FI.player.playVideo();}else{FI.player.pauseVideo();}itrv=setInterval(inter,100);}});$(FI.tbid[2]).jqxSwitchButton({checked:true});FI.player=FI.mix;}};TF.init();