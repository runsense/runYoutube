var env,ref,cmbSrc;var E=E||{};E={r:function(){env='music',ref='1-Qwx5eS6Nr_f95jE2CULs3dUs8ehx8re3bMyhS1T',cmbSrc=['','danceHall','raggaDancehall','newRoots','roots','specialhiphop','latino...zouk','Traditional','video','indian','african',"k'pop",'arabe','web serie','movie','manga','animation','game','comics','doc','humor tv','sports','enfant'];},h:function(){env='hiphop',ref='1YsHjI8n5mu-xskHsiizmxL-BObg-VKgfMs57zH-B',cmbSrc=['','specialhiphop','rap...rapGame','rap','R&B','latino...zouk','Traditional','video','indian','african',"k'pop",'arabe','web serie','movie','manga','animation','game','comics','doc','humor tv','sports','enfant'];},v:function(){env='vip',ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV',cmbSrc=['','Pop Rock','popDance','hardRock','classic','Slow beat','latino...zouk','R&B','Traditional','Electro House','trailers','indian','african',"k'pop",'arabe','web serie','movie','manga','animation','game','comics','doc','humor tv','sports','enfant'];},d:function(){FS.h=$(window).height(),FS.w=$(window).width()/100,FS.larg=FS.w*13;var size=FS.w*73;FS.srch(),FS.bsip();FS.b[4]=$('#lock').css('width')=='20px'?[true,$('<button/>',{id:'clear',text:'CLEAR',click:rClick()}).insertAfter('#lock'),$('<button/>',{id:'tab',text:'Tabs',click:tClick()}).insertAfter('#clear'),$('#genre').appendTo('#dtc'),$('#dtc').css('left',FS.w*45),$('<div/>',{id:'yT'}).appendTo('body'),size=FS.w*100,FS.larg=FS.w*37].shift():[false,$('<div/>',{id:'yT'}).appendTo('#dtc'),$('#dtc').mouseover(function(){FS.opMn();}).mouseleave(function(){FS.clMn();})].shift();$(window).resize(function(){FS.player?FS.player.setSize(size,FS.h*0.89):'';}).resize(),$(FS.tbid[2]).jqxListBox({allowDrop:true,allowDrag:true,width:FS.larg,height:FS.h*0.95}),$(FS.tbid[2]).bind('select',function(event){FS.b[2]=FS.b[3]?false:FS.b[2];var idx=event.args.index;FS.idxout=idx;FS.pVid(idx);});tClick=function(){$(FS.tbid[4]).hasClass('anom')?FS.opMn():FS.clMn();};rClick=function(){var idx=$(FS.tbid[2]).jqxListBox('getSelectedIndex');$(FS.tbid[2]).jqxListBox('removeAt',idx),delete FS.tbsv[idx],$(FS.tbid[2]).jqxListBox('clearSelection');};$(FS.tbid[2]).mousedown(function(e){!e?rClick():'';}),$(FS.tbid[3]).jqxComboBox({source:FS.cmbSrc,placeHolder:'genre',width:FS.w*11,height:'20px',autoOpen:true}),$(FS.tbid[3]).on('open',function(event){try{FS.tbsv=$(FS.tbid[2]).jqxListBox('getItems');}finally{$(FS.tbid[2]).jqxListBox({allowDrop:true,source:[]});}}),$(FS.tbid[3]).on('close',function(event){$(FS.tbid[2]).jqxListBox({allowDrop:true,source:FS.tbsv});}),$(FS.tbid[5]).jqxMenu({ width:'27px',height:'27px',enableHover:true,autoOpen:true,autoCloseOnClick:true,easing:'easeInOutSine'}),$(FS.tbid[5]).jqxMenu('minimize'),$(FS.tbid[5]).on('itemclick',function(event){var txt=$(event.target).text();txt=='Lock All'?E.ml():txt=='Throws in MixYoutube'?{a:E.mt(),b:$('.jqx-menu-minimized-button').click()}:txt=='Clear All'?{a:E.mc(),b:$('.jqx-menu-minimized-button').click()}:txt=='Selekta gift'?{a:window.open('https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=JYMXh2ILVB1vpibvQdRhOquoNIgxPHgQF39NlnTdoTHJ8zsQbzKbekfy55S&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172'),b:$('.jqx-menu-minimized-button').click()}:'';}),$('#dropdownlistContentgenre').click(function(){$(FS.tbid[3]).jqxComboBox('isOpened')?$(FS.tbid[3]).jqxComboBox('close'):$(FS.tbid[3]).jqxComboBox('open');}),$(FS.tbid[3]).bind('select',function(event){var idx=event.args.index;var item=$(FS.tbid[3]).jqxComboBox('getItem',idx);FS.genre=item.label;FS.clck(FS.tableID);}),$(FS.tbid[5]).css('width',FS.w*2);$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};$.urlParam('pl')!=null?E.url:'';delete E;delete $.urlParam;},url:function(){var pl=$.urlParam('pl');for(var i in FS.cmbSrc){FS.cmbSrc[i]==pl?$(FS.tbid[3]).jqxComboBox('selectIndex',i):'';}},ml:function(){FS.b[3]=FS.b[3]?[false,$('body').css('background-color','#4d0000')].shift():[true,$('body').css('background-color','black')].shift();},mt:function(){var url='./index.html?val=';$.each($(FS.tbid[2]).jqxListBox('getItems'),function(){url+=this.value+',';});window.open(url,'_self','location=0,menubar=1');},mc:function(){var l=$(FS.tbid[2]).jqxListBox('getItems').length;while(l!=0){for(var i=0;i<=l;i++){$(FS.tbid[2]).jqxListBox('removeAt',i);}l=$(FS.tbid[2]).jqxListBox('getItems').length;}}};$('#page').css('color')=='rgb(255, 255, 255)'?E.v():$('#page').css('color')=='rgb(255, 0, 0)'?E.h():E.r();var FS=FS||{};FS={d:false,vid:'3nP6Tz45K_U',b:[false,true,true,true,false,false,false],bs:false,bdb:true,bid:true,bpl:true,bmob:false,blist:false,ber:false,sbs:function(){FS.b[0]=true;},player:null,ur:null,bur:false,larg:0,fidx:0,rSv:null,fsv:null,idx:0,idxout:-1,genre:'',h:'',w:'',gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',tableID:ref,msk:[],tbsrch:[],tbval:[],tbid:['#entrer','#tabsrch','#lrtrn','#genre','#choix','#menu','#lock'],pos:0,tbitms:[{id:0,items:[]}],tbsv:[],cmbSrc:cmbSrc,val:null,pVid:function(i,b){FS.vid=FS.b[3]?FS.spVid(i,b):'';FS.play(FS.vid);},spVid:function(i,b){var it;z=b?0:i;if(FS.b[2]){it=$(FS.tbid[0]).jqxListBox('getItem',i);var tb=it['value'].split(/,/g);return [tb[1],$('#listitem'+z+'entrer').addClass('uslc'),$(FS.tbid[1]).val(tb[0]),$(FS.tbid[1]).addClass('tabsrch')].shift();}else{it=$(FS.tbid[2]).jqxListBox('getItem', i);FS.idxout=it['index'];return [it['value'],$('#listitem'+i+'lrtrn').addClass('uslc'),$(FS.tbid[1]).val(it['label'])].shift();}},lent:function(src){$(FS.tbid[0]).remove(),$('#pl').append($('<div/>',{id:'entrer'}));var lrg;$(FS.tbid[0]).jqxListBox({allowDrop:true,source:src,width:FS.larg,height:FS.h*0.95,renderer:function(idx,lb,v){return lb.split(/,/g)[0];}}),$(FS.tbid[0]).bind('select',function(event){FS.idx=event.args.index;var item=$(FS.tbid[0]).jqxListBox('getItem',FS.idx);var it=item['value'];var lb=it.split(/,/g);FS.b[2]=FS.b[3]?[true,FS.play(lb[1])].shift():FS.b[2];var itms={label:lb[0],value:lb[1]};FS.tbsv.push(itms);$(FS.tbid[2]).jqxListBox('addItem',itms);}),$(FS.tbid[0]).mouseover(function(){$(FS.tbid[0]).removeClass('boxanm').on('mouseover','span',function(){this.title=this.innerHTML;});}).mouseleave(function(){$(FS.tbid[0]).addClass('boxanm');});var items=$(FS.tbid[0]).jqxListBox('getItems');$('#entrer').removeClass('bcgpop');},bsip:function(){$(FS.tbid[1]).jqxInput({width:FS.larg-4,height:'auto',source:function(query,response){var dataAdapter=new $.jqx.dataAdapter({localdata:function(){data=[];return data;},datatype:'array'},{autoBind:true,formatData:function(data){data.name_startsWith=query;return data;},loadComplete:function(data){FS.ipcb(data);}})}});},clck:function(id,nb){var src;$('#f'+FS.fidx).removeClass('visit');FS.fidx=nb?nb:FS.fidx;$.each(FS.tbval,function(){src=this.id==id?this.tab:src;}),!src?FS.cg__(id):FS.cg(src),$('#f'+FS.fidx).addClass('visit');},cg__:function(id){FS.tableID=id;FS.srch();},cg:function(src){FS.genre?FS.cg_(src):FS.val?FS.cv(src):FS.lent(src);},cg_:function(src){var s=[];$.each(src,function(){FS.genre==this[2]&&!FS.val?s.push(this):FS.val&&this[0].search(FS.val)!=-1?s.push(this):'';});FS.lent(s);},cv:function(src){var s=[];$.each(src,function(){this[0].search(FS.val)!=-1?s.push(this):'';});FS.lent(s);},play:function(id){FS.d=false;FS.b[5]=id.charAt(0)!='*'?FS.l(id):FS.v(id);},l:function(id){FS.vid=id;FS.player.loadVideoById(id);return false;},v:function(id){id=id.substring(1);FS.player.loadPlaylist({list:id,index:0,listType:'playlist'});return true;},srch:function(){var cb=FS.b[1]?'FS.dbcb':'FS.refcb';var queryStr=['SELECT nom,id,genre',' FROM '+FS.tableID];var sql=encodeURIComponent(queryStr.join(' '));$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql='+sql+'&callback='+cb+'&key='+FS.gak,dataType:'jsonp'});},dbcb:function(json){try{FS.handleError(json);}catch(e){;}var rws=json['rows'];for(var i in rws){rws[i][0]?FS.tbsrch.push(rws[i]):'';}FS.fidx=FS.tbsrch.length-1,FS.tableID=FS.tbsrch[FS.fidx][1];FS.b[1]=false;FS.srch();var choix=$(FS.tbid[4]);var ul=$('<ul/>').addClass('nav navbar-nav');var nb=0;$.each(FS.tbsrch,function(){if(this[0]){var li=$('<li/>').appendTo(ul);var a=$('<a/>').attr('id','f'+nb).attr('href', "javascript:FS.clck('"+this[1]+"','"+nb+"');").text(this[0]).css('color','white').appendTo(li);nb=nb+1;}}),ul.appendTo(choix),$('#f'+FS.fidx).addClass('visit');},refcb:function(json){try{FS.handleError(json);}catch(e){;}FS.msk=json['rows'];FS.tbval.push({id:FS.tableID,tab:FS.msk}),FS.genre?FS.cg(FS.msk):FS.val?FS.cv(FS.msk):FS.lent(FS.msk);FS.vid=!FS.b[0]?[FS.msk[0][1],FS.sbs()].shift():FS.vid;FS.idx=0;$(FS.tbid[0]).removeClass('boxanm'),$(FS.tbid[0]).addClass('boxanm');json=[];},ipcb:function(data){FS.msk=[];FS.val=$(FS.tbid[1]).val().substring(1).toLowerCase();$.each(FS.tbval,function(){$.each(this.tab,function(){this[0].search(FS.val)!=-1?FS.msk.push([this[0]+'/_/'+this[2],this[1]]):'';});}),FS.lent(FS.msk);},handleError:function(json){if(json['error']!=undefined){var e=json['error']['errors'];FS.he(e);}},he:function(){console.log('Error in Fusion Table call!');$.each(row,function(){console.log('Domain: '+error[row]['domain']);console.log(' Reason: '+error[row]['reason']);console.log(' Message: '+error[row]['message']);});},ready:function(e){FS.b[4]?FS.player.setSize(FS.w*100,FS.h*0.9):FS.player.setSize(FS.w*70,FS.h*0.89);try{FS.play(FS.vid);}finally{e.target.playVideo();$(FS.tbid[0]).addClass('boxanm');}},change:function(e){var f=e.data;f==0?FS.c0(f):f==1&&!FS.d?FS.c1(f):'';},c1:function(x,b,f){var x,b=false;var arr=FS.player.getPlaylist();FS.d=arr?[true,FS.tbval.push({id:FS.vid,tab:arr})]:FS.d;},c0:function(x,b,f){var x,b=false;FS.b[5]?FS.player.nextVideo():FS.cl(x,b,f);FS.b[6]=false;},cl:function(x,b,f){if(FS.b[2]){b=x>9?true:false;x=FS.idx;$('#listitem'+x+'entrer').removeClass('uslc'),$(FS.tbid[1]).removeClass('tabsrch');FS.idx=x+1;$(FS.tbid[0]).jqxListBox('ensureVisible',FS.idx,b);try{FS.pVid(x+1,b);}catch(ex){FS.pVid(0,true);FS.idx=0;}}else{x=FS.idxout;$('#listitem'+x+'lrtrn').removeClass('uslc');FS.idxout=x+1;try{FS.pVid(FS.idxout,b);}catch(ex){FS.idxout=0;FS.pVid(0,true);}}},erreur:function(e){var x,it=$(FS.tbid[0]).jqxListBox('getItem',FS.idx);var tab=it['value'].split(/,/g);var val=tab[1];!FS.b[6]?FS.eber(x):FS.b[5]?FS.player.nextVideo():FS.b[2]?FS.pVid(x,false):'';},eber:function(x){x=FS.idx;FS.b[6]=true;$(FS.tbid[0]).jqxListBox('removeAt',x);var items=$(FS.tbid[2]).jqxListBox('getItems');FS.idxout=items.length-1;$(FS.tbid[2]).jqxListBox('removeAt',FS.idxout);FS.b[2]?FS.pVid(x,false):'';FS.idxout=FS.idxout-1;},opMn:function(){$(FS.tbid[4]).addClass('anm').removeClass('anom');},clMn:function(){$(FS.tbid[4]).addClass('anom').removeClass('anm');}};$(document).ready(E.d());$(window).resize(function(){FS.player!=null?FS.player.setSize(FS.w*100,FS.h*0.9):'';}).resize();
