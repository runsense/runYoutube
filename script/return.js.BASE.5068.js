var E=E||{};E={W:$(window),b:true,Y:$('yT'),z:['.jqx-menu-minimized-button','.jqx-menu-dropdown','tabsrch','getSelectedIndex','selectIndex','getItems','removeAt','getItem','select','List','Info'],env:'',ref:'',cmbSrc:[],tbsv:[],rf:['danceHall','raggaDancehall','newRoots','roots'],hf:['specialhiphop','rap...rapGame','rap','R&B'],vf:['popDance','Electro House','hardRock'],sf:['Pop Rock','classic','Slow beat','latino...zouk','Traditional'],af:['arabe','indian','african',"k'pop"],mf:['trailers','movie','animation','video','manga','humor','web serie','game','comics','doc','sports','enfant'],cbx:function(){$(F.tbid[3]).jqxComboBox({source:E.cmbSrc,placeHolder:'genre',width:F.w*13,height:'20px',autoOpen:true})},r:function(){E.env='music',E.ref='1-Qwx5eS6Nr_f95jE2CULs3dUs8ehx8re3bMyhS1T',E.cmbSrc=E.rf.concat(E.af);},h:function(){E.env='hiphop',E.ref='1YsHjI8n5mu-xskHsiizmxL-BObg-VKgfMs57zH-B',E.cmbSrc=E.hf.concat(E.af);},v:function(){E.env='vip',E.ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV',E.cmbSrc=E.vf.concat(E.af);},s:function(){E.env='slow',E.ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV',E.cmbSrc=E.sf.concat(E.af);},m:function(){E.cmbSrc=E.mf.concat(E.af);},stap:function(){var i=$(F.tbid[0]).jqxListBox(E.z[3]);i=i>0?i+1:i==-1?0:1;$('#listitem'+i+'entrer').addClass('uslc'),$(F.tbid[0]).jqxListBox(E.z[4],i);},av:function(){$(F.tbid[3]).jqxComboBox('open');var i=$(F.tbid[3]).jqxComboBox(E.z[3]);i=i>0?i:8;$(F.tbid[3]).jqxComboBox(E.z[4],i-1);$(F.tbid[0]).jqxListBox(E.z[4],0),$.ajax({success:function(){$(F.tbid[3]).jqxComboBox('close');}});},ap:function(){$(F.tbid[3]).jqxComboBox('open');var i=$(F.tbid[3]).jqxComboBox(E.z[3]);$(F.tbid[3]).jqxComboBox(E.z[4],i+1);$(F.tbid[0]).jqxListBox(E.z[4],0),$.ajax({success:function(){$(F.tbid[3]).jqxComboBox('close');}});},srch:function(){$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT nom,id,genre,info FROM '+F.tableID+'&callback=E.refcb&key=AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',dataType:'jsonp'});},refcb:function(json){try{C.handleError(json);}catch(e){;}F.msk=json['rows'];F.vid=F.msk[0][1];F.tbval=[{id:F.tableID,tab:F.msk}];F.genre?C.cg(F.msk):F.val?C.cv(F.msk):C.lent(F.msk);F.idx=0;$(F.tbid[0]).removeClass('boxanm'),$(F.tbid[0]).addClass('boxanm');json=[];F.b.j=false;},d:function(){E.W.keypress(E.kpe);F.h=E.W.height();F.w=E.W.width()/100;C.bsip();F.b.e=$('#lock').css('width')=='20px'?{s:true,a:$('<button/>',{id:'clear',text:'CLEAR',click:rClick()}).insertAfter('#lock'),c:$('<button/>',{id:'tab',text:'Tabs',click:tClick()}).insertAfter('#clear'),d:$('#genre').appendTo('#dtc'),e:$('#dtc').css('left',F.w*45),f:$('<div/>',{id:'yT'}).appendTo('body')}.s:{s:false,a:$('<div/>',{id:'yT'}).appendTo('#dtc'),b:$('#dtc').mouseover(function(){C.opMn();}).mouseleave(function(){C.clMn();})}.s;size=F.b.e?F.w*100:F.w*73,F.larg=F.b.e?F.w*37:F.w*13;E.W.resize(function(){F.player?F.player.setSize(F.w*70,F.h*0.87):'',E.Y.animate({'left':F.larg});}).resize(),$(F.tbid[2]).jqxListBox({allowDrop:true,allowDrag:true,width:F.larg,height:F.h*0.95,source:E.tbsv}),$(F.tbid[2]).bind(E.z[8],function(event){F.b.c=F.b.d?false:F.b.c;var lab=event.args.item.label;if(lab.match(/(for\s)/)){lab=lab.replace(/(for\s)/g,'');if(lab.match('at ')){var flb=lab.replace(/(at\s)/,'');var sp=flb.split(/(\s\*\s)/g);var lb=sp[0].replace(/\s/,'');var lp=sp[2];var sv,i=0;if(lp.match(/(style)\s/)){lb=lb.split(/\(/g)[0];var j=0;var sc=lp.replace(/(style)|\s/g,'');$.each(F.cmbSrc,function(){i=i?i:this==sc?j:i;j++;});$(F.tbid[3]).jqxComboBox(E.z[4],i);}else{F.val=lp.split(/\s/)[0];}$.each(F.tbsrch,function(){sv=!sv&&this[0].match(new RegExp(lb,'g'))?[this[1],i]:sv;i++;});if(lb.match(new RegExp(E.env,'g'))||(!lb.match(/_/)&&E.env=='music')){C.clck(sv[0],sv[1]);}else{lb.match(new RegExp('vip','g'))?E.v():lb.match(new RegExp('hiphop','g'))?E.h():E.r();C.clck(sv[0],sv[1]);}}else{var tmp=[];$.each(F.tbval,function(){$.each(this.tab,function(){this[0].split(lab).length>1?tmp.push([this[0],this[1]]):'';});});$(F.tbid[0]).jqxListBox({source:tmp});}}else if(lab.match(/(in\s)/)){var tmp=[];var lg=lab.length;lab=lab.replace(/(in\s)/g,'').slice(0,lg*0.75);$.each(F.tbval,function(){$.each(this.tab,function(){String(this[0]).split(lab)[1]?tmp.push([this[0],this[1]]):'';});});$(F.tbid[0]).jqxListBox({source:tmp});C.l(tmp[0][1]);}else{F.idxout=event.args.index;C.pVid(F.idxout);}});tClick=function(){$(F.tbid[4]).hasClass('anom')?C.opMn():C.clMn();};rClick=function(){var idx=$(F.tbid[2]).jqxListBox(E.z[3]);$(F.tbid[2]).jqxListBox(E.z[6],idx),$(F.tbid[2]).jqxListBox('clearSelection');};$(F.tbid[2]).mousedown(function(e){!e?rClick():'';}),$(F.tbid[3]).focus(function(){E.b=false;}).blur(function(){E.b=true;}),$(F.tbid[3]).on('open',function(event){$(F.tbid[2]).jqxListBox({allowDrop:true,source:[]});}).on('close',function(event){var t=F.b.k?F.tbInf:E.tbsv;$(F.tbid[2]).jqxListBox({allowDrop:true,source:t});$('#gv').html('style '+F.genre).on('click',function(){$(F.tbid[3]).jqxComboBox('open');});}),$(F.tbid[2]).on('mouseover',function(event){$(F.tbid[2]).removeClass('bsh');F.b.j?$(F.tbid[2]).jqxListBox({allowDrop:true,source:E.tbsv}):'';}).on('mouseleave',function(event){$(F.tbid[2]).addClass('bsh');F.b.j?$(F.tbid[2]).jqxListBox({source:F.tbInf}):'';}).on('mouseover','span',function(){F.rSv=$('#lk').html();$('#lk').html(this.innerHTML).delay(108);}),$(F.tbid[5]).jqxMenu({width:'27px',height:'27px',enableHover:true,autoOpen:true,autoCloseOnClick:true,easing:'easeInOutSine'}),$(F.tbid[5]).jqxMenu('minimize'),$(F.tbid[5]).on('itemclick',function(event){var txt=$(event.target).text();txt=='Lock All'?E.ml():txt=='Throws in MixYoutube'?{a:E.mt(),b:$(E.txt[0]).click()}:txt=='Clear All'?{a:E.mc(),b:$(E.txt[0]).click()}:txt=='Selekta gift'?{a:window.open('https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=JYMXh2ILVB1vpibvQdRhOquoNIgxPHgQF39NlnTdoTHJ8zsQbzKbekfy55S&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172'),b:$(E.txt[0]).click()}:'';}),$('#dropdownlistContentgenre').click(function(){$(F.tbid[3]).jqxComboBox('isOpened')?$(F.tbid[3]).jqxComboBox('close'):$(F.tbid[3]).jqxComboBox('open');}),$(F.tbid[3]).bind(E.z[8],function(event){var idx=event.args.index;var item=$(F.tbid[3]).jqxComboBox(E.z[7],idx);F.genre=item.label;C.clck(F.tableID,F.fidx);}),$(F.tbid[5]).css('width',F.w*2);$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};$.urlParam('pl')!=null?E.url:'';delete E;delete $.urlParam;E.ps=C.ps;$(F.tbid[1]).focus(function(){E.b=false;}).blur(function(){E.b=true;});E.stav=function(){var i=$(F.tbid[0]).jqxListBox(E.z[3])-1;$('#listitem'+i+'entrer').removeClass('uslc'),$(F.tbid[0]).jqxListBox(E.z[4],i);};E.W.resize(function(){F.player==null?'':F.b.e?F.player.setSize(F.w*100,F.h*0.9):[F.player.setSize(F.w*70,F.h*0.87),E.Y.animate({'left':F.larg})];}).resize();C.wClean();$("#ckCh").jqxCheckBox({width:25,height:25,checked:true}),$("#ckCh").on('change',function(e){F.b.i=e.args.checked;}),$('#gv').html('Maloya!!').click(function(){$(F.tbid[3]).jqxComboBox('open');}),$('#lk').html(E.z[10]).on('click',C.rgtCh),$('#gs').html('E-SHOP').on('click',function(){E.b=false;$('#gs').html('');}).blur(function(){E.b=true;});$('#gl').html('Lindigo - LafrkindMada').on('click',function(){var v=$('#gs').text()+'+'+$('#gl').html();window.open('https://www.google.com/search?pws=0&complete=0&tbs=qdr%3Ay&q='+v.replace(/\s|[&]/g,'+'));});},dbcb:function(){F.tbsrch=E.env=='music'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['artist','1Ja_6bLQbpoMqbL2vX0i6A5rN53IT7s-XeiWP8402'],['old','1r6eb8UWRN88-3tvCbz181jUmh_bxQm9f3IivX5K5'],['years','1J9TUfwN9VMpYvWl2gCjsldvtK3IZLmvTzoAr3z1r'],['Month','1V0kRCH3sBxKyo9FJwPe6d9ZLekJwMYbrMg9mD9Nj'],['new','1kq0OAsaUzPfwURfw7SKOFxQYshDoEgg8VeYPw2E8']]:E.env=='vip'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['v_artist','15mUxl-MiKadJC6XM9boP4dfIdU3PreZ-c9rkwaAV'],['v_old','1gtRuzFpEFYTth83K_CpKdA9FrkcT3JKX4fdDtwAw'],['v_years','1s5tNdyM8V0iZzOcugbh7f7Wb_0AUM-SlcK66at-s'],['v_Month','1gbxeEvcoJA_c26AwHzU0z99R7Jz6M96Q_A3S4k7O'],['v_new','12DBysOuvrvpKkCWI7g-avoHFXpE_JGY40E1Ison1']]:E.env=='hiphop'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['h_artist','1r2SNM3HkXXvypD7VNdDoNhN5ljcDkYl9fem87vKI'],['h_old','1J6Lmz6Eg5_BjVKegT-HzeM1yseG84OJhk_rRMd7s'],['h_years','1tqthNx3znr5u7PYpEPVKSepmu4LOryestwuPu0wp'],['h_Month','1AeZ7P47eZeau50gIJNc2Tj8P0LJ74rs_JbQRN7Vl'],['h_new','1nQhTkAsLWoQK6Vc6lSilYUjFPwlOJBRNvH69NzCF']]:E.env=='slow'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['s_artist','12WGHUWfM7Bw7KrIpTXoLtwp6dGV6uiqY5ERdGvTa'],['s_old','114lDXsFY3naAPIwpI7eW27GgyMMEmuRNODebBFQz'],['s_years','1plJNc7xZpl5BLaYDeQ9VFuxeIAzFLwob_Pk0TgLk'],['s_Month','1nhqWPyVbYbxCv-a4BxsGdXggs5YWlcuTDvV4QmSB'],['s_new','1-nKub0GQmkUts7ZnIdeA-HCTvbVqIJ7dMqxocye-']]:'';	E.cbx();	F.fidx=F.tbsrch.length-1;F.tableID=F.tbsrch[F.fidx][1];E.srch();var choix=$(F.tbid[4]);$('.navbar-nav').html('');;var ul=$('<ul/>').addClass('nav navbar-nav');var nb=0;$.each(F.tbsrch,function(){if(this[0]){var li=$('<li/>').appendTo(ul);var a=$('<a/>').attr('id','f'+nb).attr('href', "javascript:C.clck('"+this[1]+"','"+nb+"');").text(this[0]).css('color','white').appendTo(li);nb=nb+1;}}),ul.appendTo(choix),$('#f'+F.fidx).addClass('visit');},url:function(){var pl=$.urlParam('pl');for(var i in F.cmbSrc){F.cmbSrc[i]==pl?$(F.tbid[3]).jqxComboBox(E.z[4],i):'';}},ml:function(){F.b.d=F.b.d?{s:false,a:$('body').css('background-color','#4d0000')}.s:{s:true,a:$('body').css('background-color','black')}.s;},mt:function(){var url='./index.html?val=';$.each($(F.tbid[2]).jqxListBox(E.z[5]),function(){url+=this.value+',';});window.open(url,'_self','location=0,menubar=1');},mc:function(){var l=$(F.tbid[2]).jqxListBox(E.z[5]).length;while(l!=0){for(var i=0;i<=l;i++){$(F.tbid[2]).jqxListBox(E.z[6],i);}l=$(F.tbid[2]).jqxListBox(E.z[5]).length;}},ps:'',stav:'',stap:'',av:'',ap:'',kpe:function(e){var x=e.which||e.keyCode;if(E.b){switch(x){case 99:$(E.z[0]).click();$('.jqx-menu ul').addClass(E.z[2]);window.open('http://runsense.re/concert.html');return false;case 108:E.ml();return false;case 109:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://youtube.runsense.re',"_self");return false;case 121:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://runsense.re/runYT.html',"_self");return false;case 114:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://runsense.re');return false;case 105:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./return.html',"_self").delay(2700);return false;case 104:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./runHipHop.html',"_self").delay(2700);return false;case 118:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./retour.html',"_self");return false;case 116:$(E.z[0]).click(),E.mt();return false;case 48:C.opMn(),C.clck('1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A','0');return false;case 49:C.opMn(),C.clck('1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W','1');return false;case 50:C.opMn(),C.clck('15mUxl-MiKadJC6XM9boP4dfIdU3PreZ-c9rkwaAV','2');return false;case 51:C.opMn(),C.clck('1gtRuzFpEFYTth83K_CpKdA9FrkcT3JKX4fdDtwAw','3');return false;case 52:C.opMn(),C.clck('1s5tNdyM8V0iZzOcugbh7f7Wb_0AUM-SlcK66at-s','4');return false;case 53:C.opMn(),C.clck('1EllAjbmPHJpEnPZsSlJOdfSiMIQNd4w91DikQr9f','5');return false;case 54:C.opMn(),C.clck('12DBysOuvrvpKkCWI7g-avoHFXpE_JGY40E1Ison1','6');return false;case 32:C.ps();return false;case 38:E.stav();return false;case 40:E.stap();return false;case 37:E.av();return false;case 39:E.ap();return false;default:break;}}}};
var F=F||{};F={tm:$('#page').css('color')=='rgb(255, 255, 255)'?E.v():$('#page').css('color')=='rgb(255, 0, 0)'?E.h():$('#page').css('color')=='rgb(0, 255, 0)'?E.s():E.r(),d:false,vid:'3nP6Tz45K_U',b:{a:true,b:true,c:true,d:true,e:false,f:false,g:false,h:false,i:true,j:null,k:true},player:null,ur:null,larg:0,fidx:0,rSv:null,fsv:null,idx:0,idxout:-1,genre:'',h:'',w:'',tableID:E.ref,msk:[],tbsrch:[],tbval:[],tbid:['#entrer','#tabsrch','#lrtrn','#genre','#choix','#menu','#lock'],pos:0,tbitms:[{id:0,items:[]}],infSv:[],tbInf:[],cmbSrc:E.cmbSrc,val:null};var C=C||{};var C={tm:E.dbcb(),shRgt:function(b){b?$('#lk').html(E.z[10]):$('#lk').html(E.z[9]);var trtr=b?F.tbInf:E.tbsv;$(F.tbid[2]).jqxListBox({source:trtr});F.b.k=!b;},pVid:function(i,b){F.vid=F.b.d?C.spVid(i,b):'';C.play(F.vid);},ps:function(){F.player.getPlayerState()==1?F.player.pauseVideo():F.player.playVideo();},spVid:function(i,b){var it;z=b?0:i;if(F.b.c){it=$(F.tbid[0]).jqxListBox(E.z[7],i);var tb=it['value'].split(/[,]/g);return {s:tb[1],a:$('#listitem'+z+'entrer').addClass('uslc'),b:$(F.tbid[1]).val(String(tb[0])),e:$(F.tbid[1]).addClass(E.z[2]),c:$('#gv').html(tb[2]),d:$('#gl').html(tb[0])}.s;}else{it=$(F.tbid[2]).jqxListBox(E.z[7],i);F.idxout=it['index'];return {s:it['value'],a:$('#listitem'+i+'lrtrn').addClass('uslc'),b:$(F.tbid[1]).val(it['label'])}.s;}},getInf:function(){F.tbInf=[];var f=F.infSv[F.idx];var sp=f?f.split(/[;]/g):null;$.each(sp,function(){C.infPart(this);});if(f?f.match(/date/):false){f.replace(/(date:)/,''),F.tbInf.push('place'),$.each(f.split(/\|/),function(){F.tbInf.push('in '+this);});}$(F.tbid[2]).jqxListBox({source:F.tbInf});},infPart:function(sp){var s=sp.split(/[:]|[,]/g);sp[0]?[F.tbInf.push('for '+s.shift()),$.each(s,function(){F.tbInf.push('in '+this);})]:'';},lent:function(src){F.infSv=[];$(F.tbid[0]).remove();$('#pl').append($('<div/>',{id:'entrer'})),$(F.tbid[0]).jqxListBox({source:src,width:F.larg,height:F.h*0.95,renderer:function(idx,lb,v){var spl=lb.split(/[,]/g);F.infSv.push(spl[3]);F.b.k?C.getInf():'';return spl[0];}});$(F.tbid[0]).bind(E.z[8],function(event){F.idx=event.args.index;F.b.k?C.getInf():'';var item=$(F.tbid[0]).jqxListBox(E.z[7],F.idx);var it=item['value'];var lb=it.split(/[,]/g);F.b.a=F.b.d?C.play(lb[1]):false;F.b.c=F.b.d?{s:true,a:$(F.tbid[1]).val(lb[0]),c:$('#gv').html(lb[2]),d:$('#gl').html(lb[0])}.s:F.b.c;var itms={label:lb[0],value:lb[1]};E.tbsv.push(itms),$(F.tbid[2]).jqxListBox('addItem',itms),$('#lk').html(E.z[10]);}),$(F.tbid[0]).mouseover(function(){$(F.tbid[0]).removeClass('boxanm').on('mouseover','span',function(){this.title=this.innerHTML;});}).mouseleave(function(){$(F.tbid[0]).addClass('boxanm');});var items=$(F.tbid[0]).jqxListBox(E.z[5]);$('#entrer').removeClass('bcgpop');},bsip:function(){$(F.tbid[1]).jqxInput({width:F.larg-4,height:'auto',source:function(query,response){var dataAdapter=new $.jqx.dataAdapter({localdata:function(){data=[];return data;},datatype:'array'},{autoBind:true,formatData:function(data){data.name_startsWith=query;return data;},loadComplete:C.wr})}});$(F.tbid[1]).bind('click',function(){C.wr();});},wr:function(data){var tmp=$(F.tbid[1]).val().substring(1).toLowerCase();F.val=tmp==F.val?{s:' ',a:F.tbid([1]).val(' ')}.s:tmp;F.val.split('https://www.youtube.com/')[1]?C.ytLk():Number(F.val)?C.nbcb(F.val):C.ipcb(F.val);},ytLk:function(){var v=F.val.match(/(v=)/)?F.val.split('v=')[1]:'';var l=F.val.split('list=')[1];F.idxout=l?'*'+l:v;F.idxout=F.idxout.includes('&')?F.idxout.split('&')[0]:F.idxout;C.play(F.idxout);l?E.tbsv.unshift({label:'External playlist',value:'*'+l}):v?E.tbsv.unshift({label:'External video',value:v}):'';$(F.tbid[2]).jqxListBox({allowDrop:true,source:E.tbsv});F.b.k?$('#lk').click():'';},clck:function(id,nb){nb==1?E.m():E.env=='music'?E.r():E.env=='hiphop'?E.h():E.env=='vip'?E.v():E.env=='slow'?E.s():'';E.cbx();F.b.a=false;var src;F.val=F.b.j?F.val:null;$('#f'+F.fidx).removeClass('visit');F.fidx=nb?nb:F.fidx;F.b.i?$.each(F.tbval,function(){src=this.id==id?this.tab:src;}):'',!src?C.cg__(id):C.cg(src),$('#f'+F.fidx).addClass('visit'),F.b.j?C.l(F.val):'';},cg__:function(id){F.tableID=id;E.srch();},cg:function(src){F.genre?C.cg_(src):F.val?C.cv(src):C.lent(src);},cg_:function(src){var s=[];$.each(src,function(){F.genre==this[2]&&!F.val?s.push(this):F.val&&this[0].search(F.val)!=-1?s.push(this):'';});C.lent(s);},cv:function(src){var s=[];$.each(src,function(){this[0].search(F.val)!=-1?s.push(this):'';});C.lent(s);},rgtCh:function(){C.shRgt(F.b.k);},play:function(id){F.d=false;F.b.f=id.charAt(0)!='*'?C.l(id):C.v(id);return true;},l:function(id){F.vid=id;F.player.loadVideoById(id);return false;},v:function(id){id=id.substring(1);F.player.loadPlaylist({list:id,index:0,listType:'playlist'});return true;},nbcb:function(d){F.player.seekTo(d*0.1,true)},ipcb:function(d){F.msk=[];$.each(F.tbval,function(){$.each(this.tab,function(){this[0].toLowerCase().search(F.val)!=-1?F.msk.push([this[0],this[1]]):'';});}),C.lent(F.msk);},handleError:function(json){if(json['error']!=undefined){var e=json['error']['errors'];C.he(e);}},he:function(){console.log('Error in Fusion Table call!');$.each(row,function(){console.log('Domain: '+error[row]['domain']);console.log(' Reason: '+error[row]['reason']);console.log(' Message: '+error[row]['message']);});},ready:function(e){F.b.e?F.player.setSize(F.w*100,F.h*0.9):F.player.setSize(F.w*70,F.h*0.87);try{C.play(F.vid);}finally{e.target.playVideo();$(F.tbid[0]).addClass('boxanm');}},change:function(e){var f=e.data;f==0?C.c0(f):f==1&&F.b.f&&!F.d?C.c1(f):'',F.b.k?C.getInf():'';},c1:function(f){var t=F.player.getPlaylist();E.tbsv=t;F.d=E.tbsv?{s:true,a:F.tbval.push({id:F.vid,tab:E.tbsv})}.s:F.d;!F.b.k?[C.rgtCh(),C.rgtCh()]:C.rgtCh();},c0:function(f){var x,b=false;F.b.f?F.player.nextVideo():C.cl(x,b,f);F.b.g=false;},cl:function(x,b,f){if(F.b.c){x=F.idx;b=x>9?true:false;$('#listitem'+x+'entrer').removeClass('uslc'),$(F.tbid[1]).removeClass(E.z[2]);F.idx=x+1;$(F.tbid[0]).jqxListBox('ensureVisible',F.idx,b);try{C.pVid(x+1,b);}catch(ex){C.pVid(0,true);F.idx=0;}}else{x=F.idxout;$('#listitem'+x+'lrtrn').removeClass('uslc');F.idxout=x+1;try{C.pVid(F.idxout,b);}catch(ex){F.idxout=0;C.pVid(0,true);}}},erreur:function(e){var x;var it=$(F.tbid[0]).jqxListBox(E.z[7],F.idx+1);var tab=it['value'].split(/,/g);F.vid=tab[1];C.play(F.vid);$(F.tbid[1]).val(tab[0]),$('#gl').html(tab[0])},opMn:function(){$(F.tbid[4]).addClass('anm').removeClass('anom');},clMn:function(){$(F.tbid[4]).addClass('anom').removeClass('anm');},wClean:function(){var d=new Date();var t=d.getTime();var h=d.getUTCHours();var m=(60-d.getMinutes())*60000;var w=h<3?3-h:h<16?13-(h-3):27-h;w=(w-1)*3600000-m;window.setTimeout(function(){F.tbval=[];F.b.h?F.wClean():'';},w);}};
E.d();