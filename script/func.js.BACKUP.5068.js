var E=E||{};var F=F||{};var C=C||{};var TF=TF||{};var E={W:$(window),b:true,m:true,mix:{x:0,y:0},z:['ensureVisible','getItem','selectIndex','selectItem','select','expandItem','getSelectedItem'],spe:plyLstId.nm!='Traditional'?{id:plyLstId.nm,html:'<span title="Charge Playlist" ><a href="#mix_s" >'+plyLstId.nm+'</a></span>',value:plyLstId.id,selected:true}:'',cbn:[' roots',' newRoots',' danceHall',' raggaDancehall',' specialhiphop',' rap...rapGame',' rap',' rnb',' latino...zouk',' slowBeat',' popDance',' house',' popRock',' rock...hardRock',' classic',' video',' trailers',' RunsenseMovie',' animeOAV',' Traditional',' Part1',' Part2',' More on Youtube'],srcsgq:['default','small','medium','large','hd720','hd1080','highres'],av:function(w,y){w?F.player.seekTo(F.player.getCurrentTime()+w,true):'',F.player.setPlaybackRate(y);},ck:function(d){$(d).val()?$(d).val(false):$(d).val(true);},kde:function(e){var x=e.which||e.keyCode;switch(x){case 48:E.av(false,0.75);return false;case 49:E.av(-0.4,0.25);;return false;case 50:E.av(false,0);return false;case 51:E.av(0.4,0.5);return false;case 52:E.av(-0.9,1);return false;case 54:E.av(0.9,1);return false;case 55:E.av(-1.3,1.5);return false;case 56:E.av(false,2);return false;case 57:E.av(1.3,1.75);return false;default:break;}},kpe:function(e){var v=e.originalEvent,x=e.which||e.keyCode;if(E.b) switch(x){case 99:WO('http://runsense.re/concert.html');return false;case 109:$('#lkyt').addClass('t');WO('http://youtube.runsense.re',"_self");return false;case 121:$('#lkyt').addClass('t');WO('http://runsense.re/runYT.html',"_self");return false;case 114:$('#lk').addClass('t');WO('http://runsense.re');return false;case 105:WO('./return.html',"_self");return false;case 104:WO('./runHipHop.html',"_self");return false;case 118:WO('./retour.html',"_self");return false;case 45:E.ck(F.z.c);return false;case 43:E.ck(F.z.a);return false;case 48:E.av(false,1);return false;case 49:E.av(-1.8,0.25);;return false;case 50:E.av(false,0);return false;case 51:E.av(1.8,0.5);return false;case 52:E.av(-2.7,1);return false;case 53:E.ck(F.z.m);return false;case 54:E.av(2.7,1);return false;case 55:E.av(-3.6,1.5);return false;case 56:E.av(false,2);return false;case 57:E.av(3.6,1.75);return false;case 97:E.kf(10);return false;case 98:E.kf(11);return false;case 99:E.kf(12);return false;case 100:E.kf(13);return false;case 101:E.kf(14);return false;case 102:E.kf(15);return false;case 103:E.kf(16);return false;case 104:E.kf(17);return false;case 105:E.kf(18);return false;case 106:E.kf(19);return false;case 46:var valm=F.b.e?F.mix.getCurrentTime()+30:F.plys.getCurrentTime()+30;F.b.a?{a:F.mix.seekTo(valm,true),b:F.plys.seekTo(valm,true)}:F.b.e?F.mix.seekTo(valm,false):F.plys.seekTo(valm,false);return false;default:break;}}};var F={a:[E.W.keydown(E.kde),E.W.keypress(E.kpe)],vbl:'#1',b:{a:true,b:false,c:false,d:false,e:true,f:false,g:false,h:false,p:false,r:false},z:{f:'#mix_pl',m:'#mute',w:'#sw',q:'#sgq',x:'#mix',b:'#mix_p',s:'#mix_s',a:"#asyn",y:"#sync",p:'#player',t:'#jqxTree',d:'#dec',o:'#pop',c:'#pSync'},sgq:'default',videoid:'',plyLstId:plyLstId.id,plys:null,player:null,mix:null,tmpVid:[],tbtl:[E.W.height(),E.W.width(),E.W.width()*0.72],uri:'',tmp:'',tbsrch:'1XqUyecMr7qu7PfV7VlsBR-ACRT63M6JpzIz-qR6N'};var C={a:$(F.z.t).css('width')==='200px'?[F.b.g=true,$(F.z.t).detach().appendTo($('#mob')),$(F.z.x).detach().prependTo($('#mob')),$("#lkyt").detach().appendTo($('#mobcmd')),$("#mix_j").detach().appendTo($('#mobcmd')),$("#mix_p").detach().appendTo($('#mobcmd')),$("#dec").detach().appendTo($('#mobcmd')),$("#sync").detach().appendTo($('#mobcmd')),$("#mix_s").detach().appendTo($('#mobcmd')),$("#sw").detach().appendTo($('#mobcmd')),$(F.z.q).detach().appendTo($('#mobcmd')),$("#lk").detach().appendTo($('#mobcmd'))]:'',b:E.W.resize(function(){$(F.z.t).animate({'height':(F.tbtl[0])}),$(F.z.t).animate({'width':(F.tbtl[1]*0.3)}),F.plys&&!F.b.g?[F.plys.setSize(F.tbtl[1]*67/100,F.tbtl[0]),F.mix.setSize(F.tbtl[1]*0.33,F.tbtl[0])]:F.plys&&F.b.g?[F.plys.setSize(F.tbtl[1],F.tbtl[0]),F.mix.setSize(F.tbtl[1]*0.6,F.tbtl[0])]:'';}).resize(),ps:function(){F.player.getPlayerState()==1?F.player.pauseVideo():F.player.playVideo();},bh:function(){F.b.h=true;},curi:function(id){F.uri='<iframe id="'+id+'" sandbox="Access-Control-Allow-Origin allow-scripts" type="text/html" width="250" height="50"src="http://www.youtube.com/embed/'+id+'?autoplay=0&origin=http://runsense.re"frameborder="0" enablejsapi="1" />';},treeExp:function(ev){var elmt=ev.args.element;var i=$(F.z.t).jqxTree(E.z[1],elmt);$(elmt).find("li").length<2?C.fexp(i,elmt):'',$(F.z.o).removeClass('pop'),$(F.z.s).addClass('anm_s'),$(F.z.b).addClass('anm_p');},fexp:function(i,e){var val=i.value;C.curi(val),$(F.z.t).jqxTree('addTo',{html:F.uri},e);},treeSlc:function(ev){ev.preventDefault(),ev.stopPropagation();var a=ev.args;var e=a.element;var mixpl=F.b.e?TF.idx[1].pl:TF.idx[0].pl;var i=$(F.z.t).jqxTree(E.z[1],e);var spl=i.label.split(/\s/);var pl=spl.join('');var bp=pl!='Part1'&&pl!='Part2'&&pl!='More'?true:TF.ptmr(true,pl);if(bp){var pe=e.parentElement.parentElement;var pi=$(F.z.t).jqxTree(E.z[1],pe);var lchd=$(e).find("li").length;lchd<=2&&lchd!=0?C.sA(i,spl,mixpl):[C.sR(i),C.rchg()];F.b.c=F.b.c?[false,C.idxPL(i,spl)].shift():'';}},
sA:function(i,spl,mixpl){F.videoid=i.value;var v=Number(spl[1]);idx=F.b.e?TF.idx[1].pl:TF.idx[0].pl;var arr=TF.getArr(idx);var c=mixpl!='From gadiamb';c&&F.b.a?[F.plys.playVideoAt(v),F.mix.playVideoAt(v)]:c&&F.b.e?F.mix.playVideoAt(v):c?F.plys.playVideoAt(v):F.b.a?[F.plys.loadVideoById(plyLstId.items[v],1,F.sgq),F.mix.loadVideoById(plyLstId.items[v],1,F.sgq)]:F.b.e?F.mix.loadVideoById(plyLstId.items[v],1,F.sgq):F.plys.loadVideoById(plyLstId.items[v],1,F.sgq);},sR:function(v){F.plyLstId=v.value;E.spe=v.label=='From gadiamb'?F.plyLstId:E.spe;var id=F.b.e?TF.idx[1].v:TF.idx[0].v;$(F.z.f).val(v.label);F.b.h=false;F.videoid='';},idxPL:function(i,spl){TF.idx=F.b.a?[{pl:F.plyLstId,v:spl[1]},{pl:F.plyLstId,v:spl[1]}]:F.b.e?[TF.idx[0],{pl:F.plyLstId,v:spl[1]}]:[{pl:F.plyLstId,v:spl[1]},TF.idx[1]];},rchg:function(){$(F.z.o).addClass('pop'),$(F.z.b).removeClass('anm_p'),$(F.z.s).removeClass('anm_s');TF.idx[1].v=(F.b.a||!F.b.e)&&(TF.lv==1)?100:(F.b.a||!F.b.e)?0:TF.idx[1].v;TF.idx[0].v=(F.b.a||F.b.e)&&(TF.lv==1)?100:(F.b.a||F.b.e)?0:TF.idx[0].v;F.b.a?[C.mixReady(),C.opr()]:F.b.e?C.mixReady():C.opr();},choPl:function(){F.player=F.b.e?F.mix:F.plys;try{$(F.z.s).jqxSlider('setValue',F.player.getVolume());F.player.isMuted()?$(F.z.m).jqxCheckBox('val',true):$(F.z.m).jqxCheckBox('val',false);}catch(e){;}return F.player;},cmd:function(act){var bw=$(F.z.w).jqxSwitchButton('val');var rtr=act?1:-1;var v=!F.b.a&&F.b.e?Number(TF.idx[1].v)+rtr:Number(TF.idx[0].v)+rtr;v=!v?1:v;C.check(!bw),$(F.z.w).val()?$(F.z.w).val(false):$(F.z.w).val(true);$(F.z.t).jqxTree(E.z[3],$('#'+v)[0]),$(F.z.t).jqxTree(E.z[0],$('#'+(v+4))[0]),$('#ap').addClass("chg");},opr:function(){F.plys?F.b.h&&!E.spe?'':E.spe?F.plys.loadVideoById(plyLstId.items[TF.idx[0].v]):[F.plys.loadPlaylist({list:F.plyLstId,listType:'playlist',index:TF.idx[0].v,startSeconds:1,suggestedQuality:F.sgq}),F.plys.playVideo()]:'',F.b.g&&F.plys?F.plys.setSize(F.tbtl[1],F.tbtl[0]):'',$('#lk ').addClass('smokVert');},mixReady:function(){E.spe=F.mix?E.spe?{s:false,a:TF.add(plyLstId.items),b:F.mix.loadVideoById(plyLstId.items[TF.idx[0].v])}.s:{s:E.spe,a:F.mix.loadPlaylist({list:F.plyLstId,startSeconds:1,index:TF.idx[1].v,listType:'playlist',suggestedQuality:F.sgq})}.s:'',$('#lk ').addClass('smokVert'),F.b.g&&F.mix?F.mix.setSize(F.tbtl[1]*0.6,F.tbtl[0]):'',F.mix?F.mix.unMute():'';},mixChange:function(event){C.choPl();var cfm=event.data;cfm==0?F.b.a||F.b.e?C.cmd(true):'':cfm==3?C.c3():cfm==-1?[$(F.z.s).removeClass('anm_s'),$(F.z.b).removeClass('anm_p')]:cfm==1&&!F.b.h?[TF.add(F.plys.getPlaylist()),$(F.z.b).addClass('anm_p'),C.bh()]:'',$(F.z.s).addClass('anm_s');},c3:function(){var rplc='#'+TF.idx[1].v;$(F.z.t).jqxTree(E.z[5],$(rplc)[0]),$(F.z.t).jqxTree(E.z[0],$(rplc)[0]);},errorP:function(e){var cfm=e.data;try{cfm==100?C.cmd(true):'';}catch(e){;}},ops:function(event){C.choPl();try{var cfm=event.data;cfm==0?F.b.a||!F.b.e?C.cmd(true):'':cfm==3?C.o3():cfm==-1?[$(F.z.s).removeClass('anm_s'),$(F.z.b).removeClass('anm_p')]:cfm==1&&!F.b.h?[TF.add(F.plys.getPlaylist()),$(F.z.b).addClass('anm_p'),C.bh()]:'';}catch(e){onYouTubeIframeAPIReady()}},o3:function(){var rplc='#'+TF.idx[0].v;$(F.z.t).jqxTree(E.z[5],$(rplc)[0]),$(F.z.t).jqxTree(E.z[0],$(rplc)[0]),$(F.z.o).removeClass('pop'),$(F.z.s).addClass('anm_s');},check:function(b){F.player=F.b.b?F.player:b&&F.b.g?{s:F.player,a:$('body').animate({'backgroundColor':'rgba(144,0,0,1)'})}.s:b&&!F.b.g?{s:F.plys,a:F.mix.setSize(F.tbtl[1]*0.33,F.tbtl[0]/2),b:F.plys.setSize(F.tbtl[1]*0.33,F.tbtl[0]/2),c:$(F.z.p).animate({'left':F.tbtl[2]*1/3},{'top':F.tbtl[0]/2},1008).delay(108),d:$(F.z.x).animate({'left':F.tbtl[2]*1/3},504).delay(207),e:$('body').animate({'backgroundColor':'rgba(144,0,0,1)'}).delay(153),f:$(F.z.p).animate({'left':F.tbtl[2]},1008).delay(504),g:$(F.z.x).animate({'left':'1px'},603).delay(306),h:F.mix.setSize(F.tbtl[1]*0.71,F.tbtl[0]),i:F.plys.setSize(F.tbtl[1]*0.27,F.tbtl[0])}.s:!b&&F.b.g?{s:F.player,a:$('body').animate({'backgroundColor':'rgba(0,0,1,1)'},504).delay(108)}.s:!b&&!F.b.g?{s:F.mix,a:$(F.z.p).animate({'left':'1px'},1107).delay(180),b:$('body').animate({'backgroundColor':'rgba(0,0,1,1)'},504).delay(108),c:F.plys?F.plys.setSize(F.tbtl[1]*0.71,F.tbtl[0]):'',d:$(F.z.x).animate({'left':F.tbtl[2]},2007).delay(360),e:F.mix?F.mix.setSize(F.tbtl[1]*0.27,F.tbtl[0]):''}.s:F.player;},dimTx:function(){F.plys.getOptions('cc','fontSize','-1'),F.mix.getOptions('cc','fontSize','-1');},addExt:function(listid){if(listid.split(/http:/i).length>1){WO(listid);}else{var ext=$('#add option:selected').text().replace(/ /g,'');TF.src.push({id:ext,label:ext,value:listid}),$(F.z.t).jqxTree('addTo',{id:ext,label:ext,value:listid}),$(F.z.t).jqxTree({source:TF.src}),$(F.z.t).jqxTree(E.z[3],$('#'+ext)[0]),$(F.z.t).jqxTree(E.z[0],$('#'+ext)[0]);}},srch:function(){var tcb=['C.refcb','C.refco'];var tab=['1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'];for(var k in tab){$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT nom,id,genre FROM  '+tab[k]+'&callback='+tcb[k]+'&key=AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',dataType:"jsonp"});}},refcb:function(json){try{C.handleError(json);}catch(e){;}$.each(json["rows"],function(){TF.src.push({id:this[1],html:'<span title="'+this[0]+'" ><a href="#mix_s" >'+this[0]+'</a></span>',value:this[1].substring(1)}),E.cbn.push(this[0]);});},refco:function(json){try{C.handleError(json);}catch(e){;}if(!E.spe){$.each(json["rows"],function(){$('#add').append($('<option>',{value:this[1].substring(1),text:this[0]}));});}},handleError:function(json){if(json["error"]){console.log("Error in Fusion Table call!"),$.each(json["error"]["errors"],function(){console.log("Domain: "+this["domain"]),console.log(" Reason: "+this["reason"]),console.log(" Message: "+this["message"]);});}}};
var TF={a:C.srch(),i:0,lv:0,idx:[{pl:plyLstId.nm,v:0},{pl:plyLstId.nm,v:0}],arr:[],emt:null,itms:[],ptbid:['PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'],src:[{id:'roots',html:'<span title="Roots Reggae" ><a href="#mix_s" >roots</a></span>',value:'PLrwe0-1smC6xL233WdVGDdaCugFfd5cbW'},{id:'newRoots',html:'<span title="NewRoots&..." ><a href="#mix_s" >newRoots</a></span>',value:'PLrwe0-1smC6ySPPPHuiS8Zto7t5V46G_L'},{id:'danceHall',html:'<span title="danceHall" ><a href="#mix_s" >danceHall</a></span>',value:'PLrwe0-1smC6yoRxfeKGPOpeFaEF6sK4nR'},{id:'raggaDancehall',html:'<span title="raggaDancehall" ><a href="#mix_s" >raggaDancehall</a></span>',value:'PLrwe0-1smC6yYH5HJwuWuwLwmm-X70tJl'},{id:'rap...rapGame',html:'<span title="Rap...GangstaRap" ><a href="#mix_s" >rap...rapGame</a></span>',value:'PLrwe0-1smC6zeAU3Yb9VPb2jjSf8hOWiI'},{id:'rap',html:'<span title="Charge Playlist" ><a href="#mix_s" >rap</a></span>',value:'PLrwe0-1smC6xg5rXKyup6THySQH168IeT'},{id:'specialhiphop',html:'<span title="Rap RBA" ><a href="#mix_s" >specialhiphop</a></span>',value:'PLrwe0-1smC6xH0EtS7-2W2K422EVR19bk'},{id:'rnb',html:'<span title="R&B" ><a href="#mix_s" >rnb</a></span>',value:'PLrwe0-1smC6zwo4Y7O4XBl3cpFzpiMAkH'},{id:'popDance',html:'<span title="popDance" ><a href="#mix_s" >popDance</a></span>',value:'PLrwe0-1smC6zQc1MWqG-0lse5W7g3V5Lv'},{id:'house',html:'<span title="house" ><a href="#mix_s" >house</a></span>',value:'PLrwe0-1smC6zhwAPv2lSvWTnGtZu_6mnt'},{id:'rock...hardRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >rock...hardRock</a></span>',value:'PLrwe0-1smC6w8At_JO2HcJdpucIqn6im1'},{id:'popRock',html:'<span title="Charge Playlist" ><a href="#mix_s" >popRock</a></span>',value:'PLrwe0-1smC6zUGVE59lT-r-r45B58Dwc7'},{id:'slowBeat',html:'<span title="Slow Beat" ><a href="#mix_s" >slowBeat</a></span>',value:'PLrwe0-1smC6yjAPZeG8-fQKbgxqVelz_O'},{id:'classic',html:'<span title="Charge Playlist" ><a href="#mix_s" >classic</a></span>',value:'PLrwe0-1smC6yM3zgEuDZdwyTNYX4wdiWI'},{id:'latino...zouk',html:'<span title="Latino Zouk" ><a href="#mix_s" >latino...zouk</a></span>',value:'PLrwe0-1smC6xvoITpy0zzwirUm2D_4n3b'},{id:'video',html:'<span title="shortMov..trailer..humor...doc..." ><a href="#mix_s" >video</a></span>',value:'PLrwe0-1smC6y5pjwm9-yE5C3DLxwjoQk3'},{id:'trailers',html:'<span title="Charge Playlist" ><a href="#mix_s" >trailers</a></span>',value:'PLrwe0-1smC6zsZmTmNmuL2Yy_xZ6H1rcW'},{id:'RunsenseMovie',html:'<span title="RunsenseMovie" ><a href="#mix_s" >RunsenseMovie</a></span>',value:'PLrwe0-1smC6y5R8h4H2XBpyx20W2looso'},{id:'animeOAV',html:'<span title="animeOAV" ><a href="#mix_s" >animeOAV</a></span>',value:'PLrwe0-1smC6zvvrHrY2aubo-bdxA0S5my'},{id:'Traditional',html:'<span title="Traditional" ><a href="#mix_s" >Traditional</a></span>',value:'PLrwe0-1smC6zGKsy0ggtEJWAQDaBC2n4i'},{id:'Top 40 Artists - Vevo',html:'<span title="Top 40 Artists - Vevo" ><a href="#mix_s" >Top 40 Artists - Vevo</a></span>',value:'PL9tY0BWXOZFvC7SwuIOJ7y7xx4hhpkcTT'},{id:'The Daily 40',html:'<span title="The Daily 40" ><a href="#mix_s" >The Daily 40</a></span>',value:'PLFgquLnL59akEDVznnoh3KT0EM5DVczAq'}],addPlus:function(){var idx=F.b.e?TF.idx[1].pl:TF.idx[0].pl;var i=TF.i;var g=TF.getArr(idx)[i];g?$(F.z.t).jqxTree('addTo',{id:i,label:'play '+i,value:g,items:[{id:'',label:' ',value:''}]},TF.elmt):'';TF.i=TF.i+1;},rstr:function(i){var idx=F.b.e?TF.idx[1].pl:TF.idx[0].pl;var it=$(F.z.t).jqxTree(E.z[6]);$(F.z.t).jqxTree({source:TF.src});$(F.z.t).jqxTree(E.z[3],$('#'+idx)[0]);},remakesource:function(itmi,b){var idx=F.b.e?TF.idx[1].pl:TF.idx[0].pl;var tmp=TF.itms;try{TF.itms=[];var arr=TF.getArr(idx);var l=arr.length;l=l>0?l:70;var mr=TF.lv*99;var mf=TF.lv==1?199:100;mf=mf<l?mf:l;var itr=l<100?[0,l]:[mr,mf];for(var i=itr[0];i<itr[1];i=i+1){TF.itms.push({id:i,label:'play '+i,value:arr[i],items:[{id:'',label:' ',value:''}]});}var f;var s=TF.src.slice();$.each(s,function(){this.items=null;if(this.id==itmi){this.id=itmi;this.html='<span title="Charged '+l+'" ><a href="#mix_s" >'+itmi+' '+itr+'</a></span>';f=this.value;this.expanded=true;this.selected=false;this.items=TF.itms;};});TF.lv==0?TF.itms.push({id:'Part1',label:' Part2',value:arr[itr[1]]}):{a:TF.itms.unshift({id:'Part1',label:' Part1',value:arr[itr[0]]}),b:TF.itms.push({id:'MoreonYoutube',label:'More on Youtube',value:''})};}catch(e){alert('e'+e);}finally{var r='#'+TF.idx[0].pl;$(F.z.t).jqxTree({source:s});F.b.p?$(F.z.t).jqxTree(E.z[3],$(r)[0]):$(F.z.t).jqxTree(E.z[5],$('#'+itr[0])[0]);}},
add:function(arr){F.b.b=true;var idx=F.b.e?TF.idx[1].pl:TF.idx[0].pl;TF.setArr(idx,arr);TF.i=1;var it=$(F.z.t).jqxTree(E.z[6]);var lg;if(it!=null){TF.elmt=it.element;$(F.z.t).jqxTree('addTo',{id:0,label:'play '+0,value:arr[0],items:[{id:'',label:' ',value:''}]},TF.elmt),TF.remakesource(TF.elmt.id),$(F.z.t).jqxTree('addTo',{id:37,html:'<span title="runYoutube " ><a href="http://runsense.re/runYT.html" >More on runUoutube </a></span>',value:''},TF.elmt),$(F.z.d).val(.36);}$(F.z.t).jqxTree(E.z[3],null);F.b.b=false;TF.i=0;},setArr:function(id,arr){TF.arr.push({pl:id,arr:arr});},getArr:function(id){var rtr;$.each(TF.arr,function(){rtr=this.pl==id?this.arr:rtr;});return rtr;},spe:function(){TF.src.push(E.spe),E.cbn.push('From gadiamb');TF.src[TF.src.length-2].selected=false;},ptmr:function(cmp,v){var pl=F.b.e?TF.idx[1]:TF.idx[0];TF.idx[0].pl;TF.lv=v=='Part2'?1:v=='Part1'?0:TF.lv;F.b.p=cmp?[true,TF.remakesource(pl.pl)].shift():false;if(v=='MoreonYoutube'){window.open('https://www.youtube.com/channel/UCjF-XgLv4k0S1xi0hYJF1Aw/playlists');}else{var rplc=cmp?'#'+pl.pl:v.charAt(0)==' '?'#'+v.substring(1):'#'+v;$(F.z.t).jqxTree(E.z[3],$(rplc)[0]),$(F.z.t).jqxTree(E.z[0],$(rplc)[0]);F.b.f=false;$(F.z.b).jqxSlider('setValue',1);};return false;},init:function(){var w=F.b.g?F.tbtl[1]*30/100:F.tbtl[1];F.plyLstId=E.spe?[plyLstId.id,TF.spe()].shift():F.plyLstId;$(F.z.t).jqxTree({source:TF.src,width:w,height:F.tbtl[0]});$(F.z.q).jqxListBox({selectedIndex:0,source:E.srcsgq,width:90,height:50}),$(F.z.b).jqxSlider({showButtons:false,width:F.tbtl[1]*0.09,min:0,max:2,ticksFrequency:0.25,value:1,step:0.25}),$(F.z.s).jqxSlider({showButtons:false,width:F.tbtl[1]*0.09,min:0,max:100,ticksFrequency:1,value:18,step:1}),$(F.z.w).jqxSwitchButton({height:27,width:81,checked:true,onLabel:'black',offLabel:'rouge'}),$(F.z.a).jqxCheckBox({width:25,height:25,checked:true}),$(F.z.c).jqxCheckBox({width:25,height:25,checked:true}),$(F.z.m).jqxCheckBox({width:25,height:25,checked:true}),$('#return').click(function(){var idx=$(F.z.f).val();i<=3?$('#return').attr("href", './return.html?pl='+idx):i<=9?$('#return').attr("href", './runHipHop.html?pl='+idx):$('#return').attr("href", './retour.html?pl='+idx);}),$('#bav').bind("click",function(e){C.cmd(false);}),$('#bap').bind("click",function(e){C.cmd(true);}),$('#up').bind("click",function(e){$(F.z.t).jqxTree('collapseAll');}),$(F.z.y).jqxButton({width:F.tbtl[1]*0.05,height:'20px'}),$(F.z.f).on('change',function(e){if(e.args?e.args.type:false){var v=$(F.z.f).val();var cmp=(v==' Part2')||(v==' Part1')||(v==' More on Youtube');TF.ptmr(cmp,v.split(/\s/).join(''));}}).on('mouseover',function(){E.b=false;}).on('blur',function(){E.b=true;}),$(F.z.t).bind(E.z[4],function(ev){F.b.c=true;C.treeSlc(ev);}),$(F.z.t).bind('expand',C.treeExp),$(F.z.b).on('change',function(event){F.b.e?F.mix.setPlaybackRate(event.args.value):F.plys.setPlaybackRate(event.args.value);}),$(F.z.q).on(E.z[4],function(event){var a=F.b.e?event.args:null;F.sgq=a?event.args:a.value;}),$(F.z.s).on('change',function(event){var n=Number(event.args.value);F.b.e?F.mix.setVolume(n):F.plys.setVolume(n);}),$(F.z.d).mouseenter(function(){var v=F.b.e?F.mix.getCurrentTime()-F.plys.getCurrentTime():F.plys.getCurrentTime()-F.mix.getCurrentTime();$(F.z.d).val(v);}),$(F.z.w).on('checked',function(event){C.check(true);}),$(F.z.w).on('unchecked',function(event){C.check(false)}),$(F.z.m).bind('change',function(event){F.player=F.b.e?F.mix:F.plys;event.args.checked?F.player.mute():F.player.unMute();}),$(F.z.f).jqxInput({source:E.cbn,width:90,height:25});$(F.z.a).bind('change',function(event){F.b.e=event.args.checked;C.choPl();$(F.z.s).jqxSlider('setValue',F.player.getVolume()),$(F.z.b).jqxSlider('setValue',F.player.getPlaybackRate());}),$(F.z.c).bind('change',function(e){F.b.a=e.args.checked;F.b.a?$(F.z.y).val('sync'):$(F.z.y).val('pause');}),$(F.z.y).on('click',function(){var valm=F.mix.getCurrentTime(),valp=F.plys.getCurrentTime();!F.b.a&&this.val=='sync'?[F.plys.seekTo(valm>valp?valp+$(F.z.d).val():valm,true),F.mix.seekTo(valm<valp?valm+$(F.z.d).val():valp,true)]:F.player.getPlayerState()==2?F.player.playVideo():F.player.pauseVideo();}),$(F.z.w).jqxSwitchButton({checked:true}),!E.spe?$(F.z.t).jqxTree(E.z[3],$('#'+TF.idx[0].pl)[0]):'';F.player=F.mix;E.srcsgq=null;TF.idx=[{pl:plyLstId.nm,v:0},{pl:plyLstId.nm,v:0}];F.b.h?'':onYouTubeIframeAPIReady;$(F.z.t).on('mousedown',function(e){var sl=window.getSelection?window.getSelection():document.selection?document.selection:false;sl&&sl.empty?sl.empty():sl.removeAllRanges();var w=e.originalEvent.clientX/100;var y=-e.originalEvent.clientY/1000;var z=1+y-E.mix.y;E.mix.y=y;E.m?{b:F.player.setPlaybackRate(F.player.getPlaybackRate()),a:F.plys.seekTo(F.mix.getCurrentTime()+w,true)}:F.player.setPlaybackRate(z<0.51?0.5:z<1.01?1:z<1.51?1.5:2);E.m=true;}).on('mouseup',function(e){var w=e.originalEvent.clientX/100;var y=-e.originalEvent.clientY/1000;var z=1+y-E.mix.y;F.plys.seekTo(F.mix.getCurrentTime()+w,true);F.player.setPlaybackRate(1);E.m=false;}).bind('mousewheel DOMMouseScroll',function(e){var w=e.originalEvent.wheelDelta/120;F.mix.seekTo(F.mix.getCurrentTime()+w,true);});}};TF.init();