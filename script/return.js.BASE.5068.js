onYouTubeIframeAPIReady=function(){FS.player=new YT.Player('yT',{events:{'onReady':FS.ready,'onStateChange':FS.change,'onError':FS.erreur}});};var env="music",ref='1-Qwx5eS6Nr_f95jE2CULs3dUs8ehx8re3bMyhS1T';var cmbSrc=['','danceHall','raggaDancehall','newRoots','roots','specialhiphop','latino...zouk','Traditional','video','indian','african',"k'pop",'arabe',"web serie","movie",'manga','animation','game','comics',"doc","humor tv","sports",'enfant'];if($('#page').css('color')=='rgb(255, 255, 255)'){env="vip";ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV';cmbSrc=['','Pop Rock','popDance','hardRock','classic','Slow beat','latino...zouk','R&B','Traditional','Electro House','trailers','indian','african',"k'pop",'arabe',"web serie","movie",'manga','animation','game','comics',"doc","humor tv","sports",'enfant'];}else if($('#page').css('color')=='rgb(255, 0, 0)'){env='hiphop';ref='1YsHjI8n5mu-xskHsiizmxL-BObg-VKgfMs57zH-B';cmbSrc=['','specialhiphop','rap...rapGame','rap','R&B','latino...zouk','Traditional','video','indian','african',"k'pop",'arabe',"web serie","movie",'manga','animation','game','comics',"doc","humor tv","sports",'enfant'];}
var FS=FS||{};FS={d:false,vid:'3nP6Tz45K_U',bs:false,bdb:true,bid:true,bpl:true,bmob:false,blist:false,ber:false,bpop:false,player:null,ur:null,bur:false,larg:0,fidx:0,rSv:null,fsv:null,idx:0,idxout:-1,genre:'',h:'',w:'',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',tableID:ref,msk:[],tbsrch:[],tbval:[],tbid:['#entrer','#tabsrch','#lrtrn','#genre','#choix','#menu','#lock'],pos:0,tbitms:[{id:0,items:[]}],tbsv:[],cmbSrc:cmbSrc,val:undefined,
	pVid:function(i){var it;if(FS.bpop){FS.vid=FS.fsv[i]['value'];FS.play(FS.vid);}else if(FS.bpl){if(FS.bid){it=$(FS.tbid[0]).jqxListBox('getItem', i);var tb=it['value'].split(/,/g);FS.vid=tb[1];$("#listitem"+i+"entrer").addClass('uslc');$(FS.tbid[1]).val(tb[0]);}else{it=$(FS.tbid[2]).jqxListBox('getItem', i);FS.idxout=it['index'];FS.vid=it['value'];$("#listitem"+i+"lrtrn").addClass('uslc');$(FS.tbid[1]).val(it['label']);}}if(FS.bpl){FS.play(FS.vid);}},
	lent:function(src){$(FS.tbid[0]).remove();$("#pl").append($("<div/>",{id:'entrer'}));var lrg;$(FS.tbid[0]).jqxListBox({allowDrop:true,source:src,width:FS.larg,height:FS.h*0.95,renderer:function(idx,lb,v){return lb.split(/,/g)[0];}});$(FS.tbid[0]).bind('select',function(event){FS.idx=event.args.index;var item=$(FS.tbid[0]).jqxListBox('getItem',FS.idx);var it=item['value'];var lb=it.split(/,/g);if(FS.bpop){FS.bid=true;var uri='https://www.youtube.com/playlist?list=';if(lb[1].charAt(0)=='*'){lb[1]=lb[1].substring(1);}else{uri="https://www.youtube.com/watch?v=";}window.open(uri+lb[1],"right & copyright","width=400,height=400");}else if(FS.bpl){FS.bid=true;FS.play(lb[1]);}var itms={label:lb[0],value:lb[1]};FS.tbsv.push(itms);if(!FS.bpop){$(FS.tbid[2]).jqxListBox('addItem',itms);}});$(FS.tbid[0]).mouseover(function(){$(FS.tbid[0]).removeClass("boxanm").on('mouseover','span',function(){$('.jqx-listitem-state-selected').attr('title',this.innerHTML);$(FS.tbid[1]).val(this.innerHTML);});}).mouseleave(function(){$(FS.tbid[0]).addClass("boxanm");});var items=$(FS.tbid[0]).jqxListBox('getItems');if(FS.bpop){$('#entrer').addClass('bcgpop');}else{$('#entrer').removeClass('bcgpop');}},
	bsip:function(){$(FS.tbid[1]).jqxInput({width:FS.larg-4,height:'auto',source:function(query,response){var dataAdapter=new $.jqx.dataAdapter({localdata:function(){data=[];return data;},datatype:"array"},{autoBind:true,formatData:function(data){data.name_startsWith=query;return data;},loadComplete:function(data){FS.ipcb(data);},beforeLoadComplete:function(records){;}})}});},
	clck:function(id,nb){var src=null;var rplc='#f'+FS.fidx;$(rplc).removeClass('visit');if(nb) FS.fidx=nb;$.each(FS.tbval,function(){if(this.id==id){src=this.tab;}});if(src===null){FS.tableID=id;FS.srch();}else{if(FS.genre){var s=[];$.each(src,function(){if(FS.genre==this[2]){if(FS.val){if(this[0].search(FS.val)!=-1){s.push(this);}}else{s.push(this);}}});FS.lent(s);}else if(FS.val){var s=[];$.each(src,function(){if(this[0].search(FS.val)!=-1){if(FS.genre){if(FS.genre==this[2]){s.push(this);}}else{s.push(this);}}});FS.lent(s);}else{FS.lent(src);}}var rplc='#f'+FS.fidx;$(rplc).addClass('visit');},
	play:function(id){FS.d=false;if(id.charAt(0)!='*'){FS.vid=id;FS.player.loadVideoById(id);FS.blist=false;}else{id=id.substring(1);FS.player.loadPlaylist({list:id,index:0,listType:'playlist'});FS.blist=true;};},
	srch:function(){var cb='';if(FS.bdb) cb='FS.dbcb';else cb='FS.refcb';var queryStr=[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM "+FS.tableID);var sql=encodeURIComponent(queryStr.join(" "));$.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+FS.gak,dataType:"jsonp"});},
	dbcb:function(json){try{FS.handleError(json);}catch(e){;}var rws=json["rows"];for(var i in rws) if(rws[i][0]){FS.tbsrch.push(rws[i]);}FS.fidx=FS.tbsrch.length-1;FS.tableID=FS.tbsrch[FS.fidx][1];FS.bdb=false;FS.srch();var choix=$(FS.tbid[4]);var ul=$('<ul/>').addClass("nav navbar-nav");var nb=0;$.each(FS.tbsrch,function(){if(this[0]){var li = $('<li/>').appendTo(ul);var a=$('<a/>').attr('id',"f"+nb).attr('href', "javascript:FS.clck('"+this[1]+"','"+nb+"');").text(this[0]).css('color','white').appendTo(li);nb=nb+1;}});ul.appendTo(choix);var rplc='#f'+FS.fidx;$(rplc).addClass('visit');},
	refcb:function(json){try{FS.handleError(json);}catch(e){;}FS.msk=json["rows"];FS.tbval.push({id:FS.tableID,tab:FS.msk});var source=[];if(FS.genre){$.each(FS.msk,function(){if(FS.genre==this[2]){if(FS.val){if(this[0].search(FS.val)!=-1){source.push(this);}}else{source.push(this);}}});}else if(FS.val){$.each(FS.msk,function(){if(this[0].search(FS.val)!=-1){if(FS.genre){if(FS.genre==this[2]){source.push(this);}}else{source.push(this);}}});}else{source=FS.msk;}if(source.length==0){source.push("choice another table");}FS.lent(source);if(!FS.bs){FS.vid=source[0][1];/*if(FS.bpl){FS.play(FS.vid);}*/FS.bs=true;}FS.idx=0;$(FS.tbid[0]).removeClass("boxanm");$(FS.tbid[0]).addClass("boxanm");json=[];},
	ipcb:function(data){FS.msk=[];FS.val=$(FS.tbid[1]).val().substring(1).toLowerCase();var rw=[];$.each(FS.tbval,function(){$.each(this.tab,function(){var cmp=this;if(this[0].search(FS.val)!=-1){FS.msk.push([this[0]+"/_/"+this[2],this[1]]);}});});FS.lent(FS.msk);},
	handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}},
	ready:function(event){if(FS.bmob) FS.player.setSize(FS.w*100,FS.h*0.9);else FS.player.setSize(FS.w*70,FS.h*0.89);try{FS.play(FS.vid);}finally{event.target.playVideo();$(FS.tbid[0]).addClass("boxanm");}},
	change:function(event){var f=event.data;if(f==0){if(!FS.blist){if(FS.bid){$("#listitem"+FS.idx+"entrer").removeClass('uslc');FS.idx=FS.idx+1;try{FS.pVid(FS.idx);}catch(ex){FS.pVid(0);FS.idx=0;}}else{$("#listitem"+FS.idxout+"lrtrn").removeClass('uslc');FS.idxout=FS.idxout+1;try{FS.pVid(FS.idxout);}catch(ex){FS.idxout=0;FS.pVid(FS.idxout);}}}else{FS.player.nextVideo();}FS.ber=false;}else if(f==YT.PlayerState.PLAYING&&!FS.d){try{var arr=FS.player.getPlaylist();if(arr!=null){FS.tbval.push({id:FS.vid,tab:arr});FS.d=true;}}catch(e){;}}},
	erreur:function(e){var it=$(FS.tbid[0]).jqxListBox('getItem',FS.idx);var tab=it['value'].split(/,/g);var val=tab[1];var pop;if(FS.blist){FS.player.nextVideo();}else if(!FS.ber){FS.ber=true;$(FS.tbid[0]).jqxListBox('removeAt',FS.idx);var items=$(FS.tbid[2]).jqxListBox('getItems');FS.idxout=items.length-1;$(FS.tbid[2]).jqxListBox('removeAt',FS.idxout);if(FS.bid){FS.pVid(FS.idx);}FS.idxout=FS.idxout-1;}else if(FS.bid){FS.pVid(FS.idx);}if(val.charAt(0)=='*'){val=substring(1);pop=window.open('http://runsense.re/svErr.html?env='+env+'&folder='+FS.tbsrch[FS.fidx][0]+'&style='+tab[2]+'&nom='+tab[0].replace('&','$').replace(/\s/g,'$')+'&val='+val,"right & copyright","width=400,height=400");}else{pop=window.open('http://runsense.re/svErr.html?env='+env+'&folder='+FS.tbsrch[FS.fidx][0]+'&style='+tab[2]+'&nom='+tab[0].replace('&','$').replace(/\s/g,'$')+'&val='+val,"right & copyright","width=400,height=400");}},
	opMn:function(){$(FS.tbid[4]).addClass('anm').removeClass('anom');},clMn:function(){$(FS.tbid[4]).addClass('anom').removeClass('anm');},
	popup:function(b){if(FS.bpop){$('#entrer').removeClass('bcgpop');if(b){$(FS.plSv).removeClass('onPlay');FS.bpop=false;}}else{FS.plSv='#f'+FS.fidx;if(FS.bid){FS.fsv=FS.msk;}else{FS.fsv=$(FS.tbid[2]).jqxListBox('getItems');;}$('#entrer').addClass('bcgpop');if(b){$(FS.plSv).addClass('onPlay');FS.bpop=true;}}}};
$(document).ready(function(){FS.h=$(window).height();FS.w=$(window).width()/100;FS.larg=FS.w*13;var size=FS.w*73;FS.srch();FS.bsip();if($("#lock").css('width')=='20px') FS.bmob=true;if(FS.bmob){$("<button/>",{id:'clear',text:'CLEAR',click:function(){rClick();}}).insertAfter('#lock');$("<button/>",{id:'tab',text:'Tabs',click:function(){if($(FS.tbid[4]).hasClass('anom')) FS.opMn();else FS.clMn();}}).insertAfter('#clear');$('#genre').appendTo('#dtc');$('#dtc').css('left',FS.w*45);$("<div/>",{id:'yT'}).appendTo("body");size=FS.w*100;FS.larg=FS.w*37;}else{$("<div/>",{id:'yT'}).appendTo("#dtc");$("#dtc").mouseover(function(){FS.opMn();}).mouseleave(function(){FS.clMn();});}$(window).resize(function(){if(FS.player!=null){FS.player.setSize(size,FS.h*0.89);}}).resize();$(FS.tbid[2]).jqxListBox({allowDrop:true,allowDrag:true,width:FS.larg,height:FS.h*0.95});$(FS.tbid[2]).bind('select',function(event){if(FS.bpl) FS.bid=false;var idx=event.args.index;FS.idxout=idx;FS.pVid(idx);});rClick=function(){var idx=$(FS.tbid[2]).jqxListBox('getSelectedIndex');$(FS.tbid[2]).jqxListBox('removeAt',idx);try{delete FS.tbsv[idx];}catch(e){;}$(FS.tbid[2]).jqxListBox('clearSelection');};$(FS.tbid[2]).mousedown(function(e){if(!e) rClick();});$(FS.tbid[3]).jqxComboBox({source:FS.cmbSrc,placeHolder:"genre",width:FS.w*11,height:'20px',autoOpen:true});$(FS.tbid[3]).on('open',function(event){try{FS.tbsv=$(FS.tbid[2]).jqxListBox('getItems');}finally{$(FS.tbid[2]).jqxListBox({allowDrop:true,source:[]});}});$(FS.tbid[3]).on('close',function(event){$(FS.tbid[2]).jqxListBox({allowDrop:true,source:FS.tbsv});});$(FS.tbid[5]).jqxMenu({ width:'27px',height:'27px',enableHover:true,autoOpen:true,autoCloseOnClick:true,easing:'easeInOutSine'});$(FS.tbid[5]).jqxMenu('minimize');$(FS.tbid[5]).on('itemclick',function(event){var txt=$(event.target).text();if(txt){if(txt=='Lock All'){if(FS.bpl){FS.bpl=false;$('body').css('background-color','#4d0000');}else{FS.bpl=true;$('body').css('background-color','black');}}else if(txt=='Throws in MixYoutube'){var url='./?ur="PLrwe0-1smC6xk5tCgYKl9x97VdFFfgwoH"&?val=';var itms=$(FS.tbid[2]).jqxListBox('getItems');for(i in itms){var val=itms[i];url+=val.value+',';}window.open(url,"right & copyright","location=0,menubar=0");}else if(txt=='Clear All'){var l=$(FS.tbid[2]).jqxListBox('getItems').length;while(l!=0){for(var i=0;i<=l;i++){$(FS.tbid[2]).jqxListBox('removeAt',i);}l=$(FS.tbid[2]).jqxListBox('getItems').length;}}else if(txt=='enable popOut'){FS.popup('b');}else if(txt=='Selekta gift'){ window.open("https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=JYMXh2ILVB1vpibvQdRhOquoNIgxPHgQF39NlnTdoTHJ8zsQbzKbekfy55S&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172");}$('.jqx-menu-minimized-button').click();}});$("#dropdownlistContentgenre").click(function(){if($(FS.tbid[3]).jqxComboBox('isOpened')) $(FS.tbid[3]).jqxComboBox('close');else $(FS.tbid[3]).jqxComboBox('open');});$(FS.tbid[3]).bind('select',function (event){var idx=event.args.index;var item=$(FS.tbid[3]).jqxComboBox('getItem',idx);FS.genre=item.label;FS.clck(FS.tableID);});$(FS.tbid[5]).css('width',FS.w*2);
$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};if($.urlParam('pl')!=null){var pl=$.urlParam('pl');for(var i in FS.cmbSrc){if(FS.cmbSrc[i]==pl){$(FS.tbid[3]).jqxComboBox('selectIndex',i);}}}
ref=undefined;$.urlParam=undefined;});$(window).resize(function(){if(FS.player!=null){FS.player.setSize(FS.w*100,FS.h*0.9);}}).resize();$(FS.tbid[0]).popupWindow({windowURL:'https://www.google.com',center:1,toolbar:0,createnew:0});