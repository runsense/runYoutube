var Z=Z||{},Z={s:'#tabsrch',r:'#lrtrn',m:'#menu',e:'#entrer',g:'#genre',h:'#choix',i:'#lk',k:'#lock',rb:true,ob:function(rr){var t={},i=0;$.each(rr,function(){var r=F.msk[i++][0].replace(/\s/g,'');t[r]=this;});return t;}};var b=false,E=E||{},F=F||{},C=C||{};E={W:$(window),b:true,Y:$('yT'),dbV:'',z:['.jqx-menu-minimized-button','.jqx-menu-dropdown','tabsrch','getSelectedIndex','selectIndex','getItems','removeAt','getItem','select','List','info'],env:'',ref:'',cmbSrc:[],tbsv:[],rf:['','danceHall','raggaDancehall','newRoots','roots','Soca','Live','doc'],hf:['','specialhiphop','rap...rapGame','rap','R&B','Freestyle','Mix'],vf:['','popDance','Electro House','hardRock','Live','Mix','Lyrics'],sf:['','Pop Rock','classic','Slow beat','latino...zouk','Traditional','Live'],af:['arabe','indian','african','Latino',"k'pop"],mf:['','trailers','movie','anime','video','Live','Latino','manga','humor','web serie','game','comics','doc','sports','enfant'],cbx:function(){$(Z.g).jqxComboBox({source:E.cmbSrc,placeHolder:'Choice Style',width:F.w*13,height:'20px',autoOpen:true});},r:function(){E.env='music',E.ref='1-Qwx5eS6Nr_f95jE2CULs3dUs8ehx8re3bMyhS1T',E.cmbSrc=E.rf.concat(E.af);},h:function(){E.env='hiphop',E.ref='1YsHjI8n5mu-xskHsiizmxL-BObg-VKgfMs57zH-B',E.cmbSrc=E.hf.concat(E.af);},v:function(){E.env='vip',E.ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV',E.cmbSrc=E.vf.concat(E.sf).concat(E.af);},s:function(){E.env='slow',E.ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV',E.cmbSrc=E.sf.concat(E.vf).concat(E.af);},m:function(){E.cmbSrc=E.mf.concat(E.af);},stap:function(){var i=$(Z.e).jqxListBox(E.z[3]);i=i>0?i+1:i==-1?0:1;$('#listitem'+i+'entrer').addClass('uslc'),$(Z.e).jqxListBox(E.z[4],i);},av:function(){$(Z.g).jqxComboBox('open');var i=$(Z.g).jqxComboBox(E.z[3]);i=i>0?i:8;$(Z.g).jqxComboBox(E.z[4],i-1);$(Z.e).jqxListBox(E.z[4],0),$.ajax({success:function(){$(Z.g).jqxComboBox('close');}});},ap:function(){$(Z.g).jqxComboBox('open');var i=$(Z.g).jqxComboBox(E.z[3]);$(Z.g).jqxComboBox(E.z[4],i+1);$(Z.e).jqxListBox(E.z[4],0),$.ajax({success:function(){$(Z.g).jqxComboBox('close');}});},srch:function(){$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT '+E.dbV+' FROM '+F.tableID+'&callback=E.refcb&key=AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',dataType:'jsonp'});},refcb:function(json){try{C.handleError(json);}catch(e){;}E.dbV==E.z[10]?E.rInf(json):E.rTb(json);},rInf:function(json){F.infSv=json['rows'];C.getInf();F.infOb=Z.ob(F.infSv);},rTb:function(json){F.msk=json['rows'];F.vid=F.msk[0][1];F.tbval[F.tableID]=F.msk;F.genre?C.cg(F.msk):F.val?C.cv(F.msk):C.lent(F.msk);F.idx=0;$(Z.e).removeClass('boxanm'),$(Z.e).addClass('boxanm');json=[];F.b.j=false;E.cbx();},rFor:function(lab){$(E.z[0]).click();$('.jqx-menu ul').addClass(E.z[2]);window.open('http://runsense.re?land='+lab)},d:function(){E.W.keypress(E.kpe);F.h=E.W.height();F.w=E.W.width()/100;C.bsip();F.b.e=$('#lock').css('width')=='20px'?{s:true,a:$('<button/>',{id:'clear',text:'CLEAR',click:rClick()}).insertAfter('#lock'),c:$('<button/>',{id:'tab',text:'Tabs',click:tClick()}).insertAfter('#clear'),d:$('#genre').appendTo('#dtc'),e:$('#dtc').css('left',F.w*45),f:$('<div/>',{id:'yT'}).appendTo('body')}.s:{s:false,a:$('<div/>',{id:'yT'}).appendTo('#dtc'),b:$('#dtc').mouseover(function(){C.opMn();}).mouseleave(function(){C.clMn();})}.s;size=F.b.e?F.w*100:F.w*73,F.larg=F.b.e?F.w*37:F.w*13;E.W.resize(function(){F.player?F.player.setSize(F.w*70,F.h*0.87):'',E.Y.animate({'left':F.larg});}).resize(),$(Z.r).jqxListBox({allowDrop:true,allowDrag:true,width:F.larg,height:F.h*0.95,source:E.tbsv}),$(Z.r).bind(E.z[8],function(event){F.b.c=false;var lab=event.args.item.label;F.idxout=lab.match(/(in\s)/)?{s:F.idxout,a:E.rFor(lab)}.s:{s:event.args.index,a:C.pVid(event.args.index)}.s;});tClick=function(){$(Z.h).hasClass('anom')?C.opMn():C.clMn();};rClick=function(){var idx=$(Z.r).jqxListBox(E.z[3]);$(Z.r).jqxListBox(E.z[6],idx),$(Z.r).jqxListBox('clearSelection');};$(Z.r).mousedown(function(e){!e?rClick():'';}),$(Z.g).focus(function(){E.b=false;}).blur(function(){E.b=true;}),$(Z.g).on('open',function(event){$(Z.r).jqxListBox({allowDrop:true,source:[]});}).on('close',function(event){var t=F.b.k?F.tbInf:E.tbsv;$(Z.r).jqxListBox({allowDrop:true,source:t});$('#gv').html(F.genre).on('click',function(){$(Z.g).jqxComboBox('open');});}),$(Z.r).on('mouseover',function(event){$(Z.r).removeClass('bsh');F.b.j?$(Z.r).jqxListBox({allowDrop:true,source:E.tbsv}):'';$(Z.r).removeClass('anr');}).on('mouseleave',function(event){$(Z.r).addClass('anr');F.b.j?$(Z.r).jqxListBox({source:F.tbInf}):'';}).on('mouseover','span',function(){F.rSv=$(Z.i).html(),$(Z.i).html(this.innerHTML),C.opMn();}).on('mouseleave','span',function(){$(Z.i).html(F.rSv),C.clMn();}),$(Z.r).addClass('anr'),$(Z.m).jqxMenu({width:'27px',height:'27px',enableHover:true,autoOpen:true,autoCloseOnClick:true,easing:'easeInOutSine'}).on('mouseover','span',function(){$(Z.m).removeClass('anm');}).on('mouseleave','span',function(){$(Z.m).addClass('anm');}),$(Z.m).addClass('anm'),$(Z.m).jqxMenu('minimize'),
$(Z.m).on('itemclick',function(event){var txt=$(event.target).text();txt=='Lock All'?E.ml():txt=='Throws in Mixyoutube'?{a:E.mt(),b:$(E.txt[0]).click()}:txt=='Clear All'?{a:E.mc(),b:$(E.txt[0]).click()}:txt=='Selekta gift'?{a:window.open('https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=JYMXh2ILVB1vpibvQdRhOquoNIgxPHgQF39NlnTdoTHJ8zsQbzKbekfy55S&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172'),b:$(E.txt[0]).click()}:'';}),$('#dropdownlistContentgenre').click(function(){$(Z.g).jqxComboBox('isOpened')?$(Z.g).jqxComboBox('close'):$(Z.g).jqxComboBox('open');}),$(Z.g).bind(E.z[8],function(event){var idx=event.args.index;var item=$(Z.g).jqxComboBox(E.z[7],idx);F.genre=item.label;C.clck(F.tableID,F.fidx);}),$(Z.m).css('width',F.w*2);$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};$.urlParam('pl')!=null?E.url:'';delete E;delete $.urlParam;E.ps=C.ps;$(Z.s).focus(function(){E.b=false;}).blur(function(){E.b=true;});E.W.resize(function(){F.player==null?'':F.b.e?F.player.setSize(F.w*100,F.h*0.9):[F.player.setSize(F.w*70,F.h*0.87),E.Y.animate({'left':F.larg})];}).resize();$("#ckCh").jqxCheckBox({width:25,height:25,checked:true}),$("#ckCh").on('change',function(e){F.b.i=e.args.checked;}),$('#gv').html('Reunion Music!!').click(function(){$(Z.g).jqxComboBox('open');}),$(Z.i).html(E.z[10]).on('click',C.rgtCh),$('#gs').html('E-SHOP').on('click',function(){E.b=false;$('#gs').html('');}).blur(function(){E.b=true;});$('#gl').html('lodèr mon péi').on('click',function(){var v=$('#gs').text()+'+'+$('#gl').html();window.open('https://www.google.com/search?pws=0&complete=0&tbs=qdr%3Ay&q='+v.replace(/\s|[&]/g,'+'));});delete b;},dbcb:function(a,b){F.tbsrch=E.env=='music'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['artist','1Ja_6bLQbpoMqbL2vX0i6A5rN53IT7s-XeiWP8402'],['old','1r6eb8UWRN88-3tvCbz181jUmh_bxQm9f3IivX5K5'],['years','1J9TUfwN9VMpYvWl2gCjsldvtK3IZLmvTzoAr3z1r'],['Month','1V0kRCH3sBxKyo9FJwPe6d9ZLekJwMYbrMg9mD9Nj'],['new','1kq0OAsaUzPfwURfw7SKOFxQYshDoEgg8VeYPw2E8']]:E.env=='vip'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['vip_artist','15mUxl-MiKadJC6XM9boP4dfIdU3PreZ-c9rkwaAV'],['vip_old','1gtRuzFpEFYTth83K_CpKdA9FrkcT3JKX4fdDtwAw'],['vip_years','1s5tNdyM8V0iZzOcugbh7f7Wb_0AUM-SlcK66at-s'],['vip_Month','1nhqWPyVbYbxCv-a4BxsGdXggs5YWlcuTDvV4QmSB'],['vip_new','1-nKub0GQmkUts7ZnIdeA-HCTvbVqIJ7dMqxocye-']]:E.env=='hiphop'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['hiphop_artist','1r2SNM3HkXXvypD7VNdDoNhN5ljcDkYl9fem87vKI'],['hiphop_old','1J6Lmz6Eg5_BjVKegT-HzeM1yseG84OJhk_rRMd7s'],['hiphop_years','1tqthNx3znr5u7PYpEPVKSepmu4LOryestwuPu0wp'],['hiphop_Month','1AeZ7P47eZeau50gIJNc2Tj8P0LJ74rs_JbQRN7Vl'],['hiphop_new','1nQhTkAsLWoQK6Vc6lSilYUjFPwlOJBRNvH69NzCF']]:E.env=='slow'?[['chaine','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['video','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['slow_artist','12WGHUWfM7Bw7KrIpTXoLtwp6dGV6uiqY5ERdGvTa'],['slow_old','114lDXsFY3naAPIwpI7eW27GgyMMEmuRNODebBFQz'],['slow_years','1plJNc7xZpl5BLaYDeQ9VFuxeIAzFLwob_Pk0TgLk'],['slow_Month','1nhqWPyVbYbxCv-a4BxsGdXggs5YWlcuTDvV4QmSB'],['slow_new','1-nKub0GQmkUts7ZnIdeA-HCTvbVqIJ7dMqxocye-']]:'';F.tableID=F.tbsrch[F.fidx][1];E.dbV='nom,id,genre';E.srch();$('.navbar-nav').html('');var ul=$('<ul/>').addClass('nav navbar-nav');var nb=0;$.each(F.tbsrch,function(){if(this[0]){var li=$('<li/>').appendTo(ul);var a=$('<a/>').attr('id','f'+nb).attr('href', "javascript:F.genre='';F.genre='';C.clck('"+this[1]+"','"+nb+"');").text(this[0]).css('color','white').appendTo(li);nb=nb+1;}}),ul.appendTo($(Z.h)),$('#f'+F.fidx).addClass('visit');a?C.clck(a,b):'';},url:function(){var pl=$.urlParam('pl');for(var i in F.cmbSrc){F.cmbSrc[i]==pl?$(Z.g).jqxComboBox(E.z[4],i):'';}},ml:function(){F.b.d=F.b.d?{s:false,a:$('body').css('background-color','#4d0000')}.s:{s:true,a:$('body').css('background-color','black')}.s;},mt:function(){var u='./index.html?val=';$.each(E.tbsv,function(){u+=this?this.value+',':'';});window.open(u,'_self','location=0,menubar=1');},mc:function(){var l=$(Z.r).jqxListBox(E.z[5]).length;while(l!=0){for(var i=0;i<=l;i++){$(Z.r).jqxListBox(E.z[6],i);}l=$(Z.r).jqxListBox(E.z[5]).length;}},kpe:function(e){var x=e.which||e.keyCode;if(E.b){switch(x){case 99:$(E.z[0]).click();$('.jqx-menu ul').addClass(E.z[2]);window.open('http://runsense.re');return false;case 108:E.ml();return false;case 109:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://youtube.runsense.re');return false;case 121:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://runsense.re/runYT.html');return false;case 111:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://runsense.re');return false;case 82:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./return.html',"_self").delay(2700);return false;case 114:E.r();E.dbcb();return false;case 72:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./runHipHop.html',"_self").delay(2700);return false;case 104:E.h();E.dbcb();return false;case 86:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./retour.html',"_self");return false;case 118:E.v();E.dbcb();return false;case 83:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./runSlow.html',"_self");return false;case 115:E.s();E.dbcb();return false;case 116:$(E.z[0]).click(),E.mt();return false;case 48:C.opMn(),C.clck('1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A','0');return false;case 49:C.opMn(),C.clck('1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W','1');return false;case 50:C.opMn(),C.clck('15mUxl-MiKadJC6XM9boP4dfIdU3PreZ-c9rkwaAV','2');return false;case 51:C.opMn(),C.clck('1gtRuzFpEFYTth83K_CpKdA9FrkcT3JKX4fdDtwAw','3');return false;case 52:C.opMn(),C.clck('1s5tNdyM8V0iZzOcugbh7f7Wb_0AUM-SlcK66at-s','4');return false;case 53:C.opMn(),C.clck('1EllAjbmPHJpEnPZsSlJOdfSiMIQNd4w91DikQr9f','5');return false;case 54:C.opMn(),C.clck('12DBysOuvrvpKkCWI7g-avoHFXpE_JGY40E1Ison1','6');return false;return false;default:break;}}}};
F={tm:$('#page').css('color')=='rgb(255, 255, 255)'?E.v():$('#page').css('color')=='rgb(255, 0, 0)'?E.h():$('#page').css('color')=='rgb(0, 255, 0)'?E.s():E.r(),d:false,vid:'lrJhNmw1duE',b:{a:true,b:true,c:true,d:true,e:false,f:false,g:false,h:false,i:true,j:null,k:true,l:false},player:null,ur:null,larg:0,fidx:6,rSv:null,fsv:null,idx:0,idxout:-1,genre:'',tg:[],h:'',w:'',tableID:E.ref,msk:[],tbsrch:[],tbval:{},pos:0,tbitms:[{id:0,items:[]}],infOb:{},infSv:[],tbInf:[],cmbSrc:E.cmbSrc,val:null};C={tm:E.dbcb(),rgtCh:function(){E.dbV=E.z[10];Z.rb=!Z.rb&&F.infSv[0]?true:false;Z.rb?'':E.srch();$(Z.i).html(E.z[10]);F.b.k=true;$(Z.r).jqxListBox({source:F.b.k?F.tbInf:E.tbsv});},pVid:function(i,b){F.vid=F.b.d?C.spVid(i,b):'';C.play(F.vid);},ps:function(){F.player.getPlayerState()==1?F.player.pauseVideo():F.player.playVideo();},spVid:function(i,b){var it;z=b?0:i;if(F.b.c){it=$(Z.e).jqxListBox(E.z[7],i);var tb=it['value'].split(/[,]/g);return {s:tb[1],a:$('#listitem'+z+'entrer').addClass('uslc'),b:$(Z.s).val(String(tb[0])),e:$(Z.s).addClass(E.z[2]),c:$('#gv').html(tb[2]),d:$('#gl').html(tb[0])}.s;}else{it=$(Z.r).jqxListBox(E.z[7],i);F.idxout=it['index'];return {s:it['value'],a:$('#listitem'+i+'lrtrn').addClass('uslc'),b:$(Z.s).val(it['label'])}.s;}},rDe:function(val){$.each(val.split(/\|/),function(){F.tbInf.push('in '+this);});},rCl:function(val){var lb=val.split(/,/);lb=lb[2]?[lb.slice(0,lb.length-2),lb[lb.length-1]]:lb;F.tbInf.push({label:lb[0],value:lb[1]});},getInf:function(v){F.tbInf=[];var f=v?String(F.infOb[v]):F.infSv[0]?String(F.infSv[F.idx]):'';var sp=f?f.split(/[;]/g):[];sp[0]&&sp[0].match(/de\s|\|/)?C.rDe(sp.shift()):$.each(sp,function(){this?C.rCl(this):'';});$(Z.r).jqxListBox({source:F.tbInf});},lent:function(src){Z.rb=true;F.infSv=[];$(Z.e).remove(),$('#pl').append($('<div/>',{id:'entrer'})),$(Z.e).jqxListBox({source:src,width:F.larg,height:F.h*0.95,renderer:function(idx,lb,v){var spl=lb.split(/[,]/g);return spl[0];}});$(Z.e).bind(E.z[8],function(event){F.b.c=true;F.idx=event.args.index;F.b.k?C.getInf(F.genre?F.tg[F.idx]:''):'';var item=$(Z.e).jqxListBox(E.z[7],F.idx);var it=item['value'];var lb=it.split(/[,]/g);F.b.a=F.b.d?C.play(lb[1]):false;F.b.d?{a:$(Z.s).val(lb[0]),c:$('#gv').html(lb[2]),d:$('#gl').html(lb[0])}:'';var itms={label:lb[0],value:lb[1]};E.tbsv.push(itms),$(Z.r).jqxListBox('addItem',itms),$(Z.i).html(E.z[10]);}).on('mouseover','span',function(){var t=this.innerHTML;this.title=t;Z.rb?C.rgtCh():C.getInf(t.replace(/\s/g,''));$(Z.e).removeClass('boxanm');}).on('mouseleave','span',function(){$(Z.e).addClass('boxanm');});var items=$(Z.e).jqxListBox(E.z[5]);$('#entrer').removeClass('bcgpop');},bsip:function(){$(Z.s).jqxInput({width:F.larg-4,height:'auto',source:function(query,response){var dataAdapter=new $.jqx.dataAdapter({localdata:function(){data=[];return data;},datatype:'array'},{autoBind:true,formatData:function(data){data.name_startsWith=query;return data;},loadComplete:C.wr})}});$(Z.s).bind('click',function(){C.wr();});},wr:function(data){var tmp=$(Z.s).val().substring(1).toLowerCase();F.val=tmp==F.val?{s:' ',a:$(Z.s).val(' ')}.s:tmp;Number(F.val)?C.nbcb():F.val?C.ipcb(F.val):'';},clck:function(id,nb){nb==1?E.m():E.env=='music'?E.r():E.env=='hiphop'?E.h():E.env=='vip'?E.v():E.env=='slow'?E.s():'';E.cbx(),F.b.a=false;var src;F.val=F.b.j?F.val:null,$('#f'+F.fidx).removeClass('visit'),F.fidx=nb?nb:F.fidx;src=F.b.i?F.tbval[id]:'';!src?C.cg__(id):C.cg(src),$('#f'+F.fidx).addClass('visit'),F.b.j?C.l(F.val):'';F.tbInf=[];},cg__:function(id){F.tableID=id;E.dbV='nom,id,genre';E.srch();},cg:function(src){F.genre?C.cg_(src):F.val?C.cv(src):C.lent(src);},cg_:function(src){var s=[],i=0;F.tg=[];$.each(src,function(){F.genre==this[2]&&!F.val?[s.push(this),F.tg.push(i)]:F.val&&this[0].search(F.val)!=-1?s.push(this):'';i=i+1;});C.lent(s);},cv:function(src){var s=[];$.each(src,function(){this[0].match(F.val)!=-1?s.push(this):'';});C.lent(s);},play:function(id){F.d=false;F.b.f=id.charAt(0)!='*'?C.l(id):C.v(id);return true;},l:function(id){F.vid=id;F.player.loadVideoById(id);return false;},v:function(id){id=id.substring(1);F.player.loadPlaylist({list:id,index:0,listType:'playlist'});return true;},nbcb:function(d){F.player.seekTo(d*0.1,true)},ipcb:function(d){F.msk=[];var tb=F.tbval[F.tableID];$.each(tb,function(){this[0].toLowerCase().search(F.val)!=-1?F.msk.push([this[0],this[1]]):'';});C.lent(F.msk);},handleError:function(json){if(json['error']!=undefined){var e=json['error']['errors'];C.he(e);}},he:function(){console.log('Error in Fusion Table call!');$.each(row,function(){console.log('Domain: '+error[row]['domain']);console.log(' Reason: '+error[row]['reason']);console.log(' Message: '+error[row]['message']);});},ready:function(e){F.b.e?F.player.setSize(F.w*100,F.h*0.9):F.player.setSize(F.w*70,F.h*0.87);F.player.loadVideoById(F.vid);},change:function(e){var f=e.data;b?'':f==0?C.c0(f):f==1&&F.b.f&&!F.d?C.c1(f):'',b?'':F.b.k?C.getInf(F.genre?F.tg[F.idx]:''):'';},c1:function(f){var t=F.player.getPlaylist();E.tbsv=t;F.d=E.tbsv?true:F.d;F.tbval[F.vid]=E.tbsv;},c0:function(f){var x,b=false;F.b.f?F.player.nextVideo():C.cl(x,b,f);F.b.g=false;},cl:function(x,b,f){if(F.b.c){x=F.idx;b=x>9?true:false;$('#listitem'+x+'entrer').removeClass('uslc'),$(Z.s).removeClass(E.z[2]);F.idx=x+1;$(Z.e).jqxListBox('ensureVisible',F.idx,b);try{C.pVid(x+1,b);}catch(ex){C.pVid(0,true);F.idx=0;}}else{x=F.idxout;$('#listitem'+x+'lrtrn').removeClass('uslc');F.idxout=x+1;try{C.pVid(F.idxout,b);}catch(ex){F.idxout=0;C.pVid(0,true);}}},erreur:function(e){F.b.f?F.player.nextVideo():C.er(e);},er:function(e){var x;F.idx=F.idx+1;var it=$(Z.e).jqxListBox(E.z[7],F.idx);var tab=it['value'].split(/,/g);F.vid=tab[1];e.data==150?C.CgYt(F.vid):'',C.play(F.vid);$(Z.s).val(tab[0]),$('#gl').html(tab[0]);},CgYt:function(v){$('#gv').html('No Right..get on Youtube'),$('#gs').html('itune');},opMn:function(){$(Z.h).addClass('anm').removeClass('anom');},clMn:function(){$(Z.h).addClass('anom').removeClass('anm');}};E.d();
