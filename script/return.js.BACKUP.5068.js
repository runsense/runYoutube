var E=E||{};E={W:$(window),b:true,Y:$('yT'),z:['.jqx-menu-minimized-button','.jqx-menu-dropdown','tabsrch','getSelectedIndex','selectIndex','getItems','removeAt','getItem','select'],env:'',ref:'',cmbSrc:[],rf:['danceHall','raggaDancehall','newRoots','roots'],hf:['specialhiphop','rap...rapGame','rap','R&B'],vf:['Pop Rock','popDance','Electro House','hardRock','classic','Slow beat'],tf:['latino...zouk','Traditional'],af:['video','movie','manga','animation','humor','web serie','game','comics','doc','sports','enfant','arabe','indian','african',"k'pop"],r:function(){E.env='music',E.ref='1-Qwx5eS6Nr_f95jE2CULs3dUs8ehx8re3bMyhS1T',E.cmbSrc=[''].concat(E.rf).concat(E.hf).concat(E.tf).concat(E.vf).concat(E.af);},h:function(){E.env='hiphop',E.ref='1YsHjI8n5mu-xskHsiizmxL-BObg-VKgfMs57zH-B',E.cmbSrc=[''].concat(E.hf).concat(E.rf).concat(E.vf).concat(E.tf).concat(E.af);},v:function(){E.env='vip',E.ref='1lXEVG0Im_6elVj27FGK8jJCkNNuIGSlMouzPSBQV',E.cmbSrc=[''].concat(E.vf).concat(E.tf).concat(E.hf).concat(E.rf).concat(E.af);},d:function(){F.h=E.W.height(),F.w=E.W.width()/100,F.larg=F.w*13;var size=F.w*73;E.dbcb(),F.bsip();F.b[4]=$('#lock').css('width')=='20px'?[true,$('<button/>',{id:'clear',text:'CLEAR',click:rClick()}).insertAfter('#lock'),$('<button/>',{id:'tab',text:'Tabs',click:tClick()}).insertAfter('#clear'),$('#genre').appendTo('#dtc'),$('#dtc').css('left',F.w*45),$('<div/>',{id:'yT'}).appendTo('body'),size=F.w*100,F.larg=F.w*37].shift():[false,$('<div/>',{id:'yT'}).appendTo('#dtc'),$('#dtc').mouseover(function(){F.opMn();}).mouseleave(function(){F.clMn();})].shift();E.W.resize(function(){F.player?F.player.setSize(F.w*70,F.h*0.89):'',E.Y.animate({'left':F.larg});}).resize(),$(F.tbid[2]).jqxListBox({allowDrop:true,allowDrag:true,width:F.larg,height:F.h*0.95}),$(F.tbid[2]).bind(E.z[8],function(event){F.b[2]=F.b[3]?false:F.b[2];F.idxout=event.args.index;F.pVid(F.idxout);});tClick=function(){$(F.tbid[4]).hasClass('anom')?F.opMn():F.clMn();};rClick=function(){var idx=$(F.tbid[2]).jqxListBox(E.z[3]);$(F.tbid[2]).jqxListBox(E.z[6],idx),delete F.tbsv[idx],$(F.tbid[2]).jqxListBox('clearSelection');};$(F.tbid[2]).mousedown(function(e){!e?rClick():'';}),$(F.tbid[3]).jqxComboBox({source:F.cmbSrc,placeHolder:'genre',width:F.w*11,height:'20px',autoOpen:true}),$(F.tbid[3]).on('open',function(event){try{F.tbsv=$(F.tbid[2]).jqxListBox(E.z[5]);}finally{$(F.tbid[2]).jqxListBox({allowDrop:true,source:[]});}}),$(F.tbid[3]).on('close',function(event){$(F.tbid[2]).jqxListBox({allowDrop:true,source:F.tbsv});}),$(F.tbid[5]).jqxMenu({ width:'27px',height:'27px',enableHover:true,autoOpen:true,autoCloseOnClick:true,easing:'easeInOutSine'}),$(F.tbid[5]).jqxMenu('minimize'),$(F.tbid[5]).on('itemclick',function(event){var txt=$(event.target).text();txt=='Lock All'?E.ml():txt=='Throws in MixYoutube'?{a:E.mt(),b:$(E.txt[0]).click()}:txt=='Clear All'?{a:E.mc(),b:$(E.txt[0]).click()}:txt=='Selekta gift'?{a:window.open('https://www.paypal.com/fr/cgi-bin/webscr?cmd=_flow&SESSION=JYMXh2ILVB1vpibvQdRhOquoNIgxPHgQF39NlnTdoTHJ8zsQbzKbekfy55S&dispatch=5885d80a13c0db1f8e263663d3faee8dcce3e160f5b9538489e17951d2c62172'),b:$(E.txt[0]).click()}:'';}),$('#dropdownlistContentgenre').click(function(){$(F.tbid[3]).jqxComboBox('isOpened')?$(F.tbid[3]).jqxComboBox('close'):$(F.tbid[3]).jqxComboBox('open');}),$(F.tbid[3]).bind(E.z[8],function(event){var idx=event.args.index;var item=$(F.tbid[3]).jqxComboBox(E.z[7],idx);F.genre=item.label;F.clck(F.tableID,F.fidx);}),$(F.tbid[5]).css('width',F.w*2);$.urlParam=function(name){var results=new RegExp('[\?&]'+name+'=([^&#]*)').exec(window.location.href);try{return results[1]||0;}catch(e){return null;}};$.urlParam('pl')!=null?E.url:'';delete E;delete $.urlParam;},dbcb:function(){F.tbsrch=E.env=='music'?[['Anex charge','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['Movie of','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['Top Artist','1Ja_6bLQbpoMqbL2vX0i6A5rN53IT7s-XeiWP8402'],['L.Years','1r6eb8UWRN88-3tvCbz181jUmh_bxQm9f3IivX5K5'],['L.Month','1J9TUfwN9VMpYvWl2gCjsldvtK3IZLmvTzoAr3z1r'],['New','1kq0OAsaUzPfwURfw7SKOFxQYshDoEgg8VeYPw2E8'],['inMonth','1qVlIpJErsKeUFeRRZGjSpHfcKxfmkCQBlFNKhfXH']]:E.env=='vip'?[['Anex charge','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['Movie of','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['Top Artist','15mUxl-MiKadJC6XM9boP4dfIdU3PreZ-c9rkwaAV'],['L.Years','1gtRuzFpEFYTth83K_CpKdA9FrkcT3JKX4fdDtwAw'],['L.Month','1s5tNdyM8V0iZzOcugbh7f7Wb_0AUM-SlcK66at-s'],['New','12DBysOuvrvpKkCWI7g-avoHFXpE_JGY40E1Ison1'],['inMonth','1EllAjbmPHJpEnPZsSlJOdfSiMIQNd4w91DikQr9f']]:E.env=='hiphop'?[['Anex charge','1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A'],['Movie of','1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W'],['Top Artist','1r2SNM3HkXXvypD7VNdDoNhN5ljcDkYl9fem87vKI'],['L.Years','1J6Lmz6Eg5_BjVKegT-HzeM1yseG84OJhk_rRMd7s'],['L.Month','1tqthNx3znr5u7PYpEPVKSepmu4LOryestwuPu0wp'],['New','1nQhTkAsLWoQK6Vc6lSilYUjFPwlOJBRNvH69NzCF'],['inMonth','18raJ8Ng0c29JTPwM54uDxouJNf5dpNFQRKYPXXlL']]:'';F.fidx=F.tbsrch.length-1,F.tableID=F.tbsrch[F.fidx][1];F.srch();var choix=$(F.tbid[4]);var ul=$('<ul/>').addClass('nav navbar-nav');var nb=0;$.each(F.tbsrch,function(){if(this[0]){var li=$('<li/>').appendTo(ul);var a=$('<a/>').attr('id','f'+nb).attr('href', "javascript:F.clck('"+this[1]+"','"+nb+"');").text(this[0]).css('color','white').appendTo(li);nb=nb+1;}}),ul.appendTo(choix),$('#f'+F.fidx).addClass('visit');},url:function(){var pl=$.urlParam('pl');for(var i in F.cmbSrc){F.cmbSrc[i]==pl?$(F.tbid[3]).jqxComboBox(E.z[4],i):'';}},ml:function(){F.b[3]=F.b[3]?[false,$('body').css('background-color','#4d0000')].shift():[true,$('body').css('background-color','black')].shift();},mt:function(){var url='./index.html?val=';$.each($(F.tbid[2]).jqxListBox(E.z[5]),function(){url+=this.value+',';});window.open(url,'_self','location=0,menubar=1');},mc:function(){var l=$(F.tbid[2]).jqxListBox(E.z[5]).length;while(l!=0){for(var i=0;i<=l;i++){$(F.tbid[2]).jqxListBox(E.z[6],i);}l=$(F.tbid[2]).jqxListBox(E.z[5]).length;}},ps:'',stav:'',stap:'',av:'',ap:'',kpe:function(e){var x=e.which||e.keyCode;if(E.b){switch(x){case 99:$(E.z[0]).click();$('.jqx-menu ul').addClass(E.z[2]);window.open('http://runsense.re/concert.html');return false;case 108:E.ml();return false;case 109:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://youtube.runsense.re',"_self");return false;case 121:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://runsense.re/runYT.html',"_self");return false;case 114:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('http://runsense.re');return false;case 105:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./return.html',"_self").delay(2700);return false;case 104:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./runHipHop.html',"_self").delay(2700);return false;case 118:$(E.z[0]).click(),$(E.z[1]).addClass(E.z[2]);window.open('./retour.html',"_self");return false;case 116:$(E.z[0]).click(),E.mt();return false;case 48:F.opMn(),F.clck('1T0BfA6ltQWg18UVSTTN5J-xtX5OjsAY3MJV1au6A','0');return false;case 49:F.opMn(),F.clck('1D3bgTUrvc-G1ZWQzmKbforG-GqRz83uFz7xhOL9W','1');return false;case 50:F.opMn(),F.clck('15mUxl-MiKadJC6XM9boP4dfIdU3PreZ-c9rkwaAV','2');return false;case 51:F.opMn(),F.clck('1gtRuzFpEFYTth83K_CpKdA9FrkcT3JKX4fdDtwAw','3');return false;case 52:F.opMn(),F.clck('1s5tNdyM8V0iZzOcugbh7f7Wb_0AUM-SlcK66at-s','4');return false;case 53:F.opMn(),F.clck('1EllAjbmPHJpEnPZsSlJOdfSiMIQNd4w91DikQr9f','5');return false;case 54:F.opMn(),F.clck('12DBysOuvrvpKkCWI7g-avoHFXpE_JGY40E1Ison1','6');return false;case 32:F.ps();return false;case 38:E.stav();return false;case 40:E.stap();return false;case 37:E.av();return false;case 39:E.ap();return false;default:break;}}}};
$('#page').css('color')=='rgb(255, 255, 255)'?E.v():$('#page').css('color')=='rgb(255, 0, 0)'?E.h():E.r();E.W.keypress(E.kpe);var F=F||{};F={d:false,vid:'3nP6Tz45K_U',b:[false,true,true,true,false,false,false,false],sbs:function(){F.b[0]=true;},player:null,ur:null,bur:false,larg:0,fidx:0,rSv:null,fsv:null,idx:0,idxout:-1,genre:'',h:'',w:'',tableID:E.ref,msk:[],tbsrch:[],tbval:[],tbid:['#entrer','#tabsrch','#lrtrn','#genre','#choix','#menu','#lock'],pos:0,tbitms:[{id:0,items:[]}],tbsv:[],cmbSrc:E.cmbSrc,val:null,pVid:function(i,b){F.vid=F.b[3]?F.spVid(i,b):'';F.play(F.vid);},ps:function(){F.player.getPlayerState()==1?F.player.pauseVideo():F.player.playVideo();},spVid:function(i,b){var it;z=b?0:i;if(F.b[2]){it=$(F.tbid[0]).jqxListBox(E.z[7],i);var tb=it['value'].split(/,/g);return [tb[1],$('#listitem'+z+'entrer').addClass('uslc'),$(F.tbid[1]).val(tb[0]),$(F.tbid[1]).addClass(E.z[2])].shift();}else{it=$(F.tbid[2]).jqxListBox(E.z[7],i);F.idxout=it['index'];return [it['value'],$('#listitem'+i+'lrtrn').addClass('uslc'),$(F.tbid[1]).val(it['label'])].shift();}},lent:function(src){$(F.tbid[0]).remove(),$('#pl').append($('<div/>',{id:'entrer'}));var lrg;$(F.tbid[0]).jqxListBox({allowDrop:true,source:src,width:F.larg,height:F.h*0.95,renderer:function(idx,lb,v){return lb.split(/,/g)[0];}}),$(F.tbid[0]).bind(E.z[8],function(event){F.idx=event.args.index;var item=$(F.tbid[0]).jqxListBox(E.z[7],F.idx);var it=item['value'];var lb=it.split(/,/g);F.b[2]=F.b[3]?[true,F.play(lb[1])].shift():F.b[2];var itms={label:lb[0],value:lb[1]};F.tbsv.push(itms);$(F.tbid[2]).jqxListBox('addItem',itms);}),$(F.tbid[0]).mouseover(function(){$(F.tbid[0]).removeClass('boxanm').on('mouseover','span',function(){this.title=this.innerHTML;});}).mouseleave(function(){$(F.tbid[0]).addClass('boxanm');});var items=$(F.tbid[0]).jqxListBox(E.z[5]);$('#entrer').removeClass('bcgpop');},bsip:function(){$(F.tbid[1]).jqxInput({width:F.larg-4,height:'auto',source:function(query,response){var dataAdapter=new $.jqx.dataAdapter({localdata:function(){data=[];return data;},datatype:'array'},{autoBind:true,formatData:function(data){data.name_startsWith=query;return data;},loadComplete:function(data){F.ipcb(data);}})}});},clck:function(id,nb){var src;$('#f'+F.fidx).removeClass('visit');F.fidx=nb?nb:F.fidx;$.each(F.tbval,function(){src=this.id==id?this.tab:src;}),!src?F.cg__(id):F.cg(src),$('#f'+F.fidx).addClass('visit');},cg__:function(id){F.tableID=id;F.srch();},cg:function(src){F.genre?F.cg_(src):F.val?F.cv(src):F.lent(src);},cg_:function(src){var s=[];$.each(src,function(){F.genre==this[2]&&!F.val?s.push(this):F.val&&this[0].search(F.val)!=-1?s.push(this):'';});F.lent(s);},cv:function(src){var s=[];$.each(src,function(){this[0].search(F.val)!=-1?s.push(this):'';});F.lent(s);},play:function(id){F.d=false;F.b[5]=id.charAt(0)!='*'?F.l(id):F.v(id);},l:function(id){F.vid=id;F.player.loadVideoById(id);return false;},v:function(id){id=id.substring(1);F.player.loadPlaylist({list:id,index:0,listType:'playlist'});return true;},srch:function(){var cb='F.refcb';$.ajax({url:'https://www.googleapis.com/fusiontables/v1/query?sql=SELECT nom,id,genre FROM '+F.tableID+'&callback=F.refcb&key=AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',dataType:'jsonp'});},refcb:function(json){try{F.handleError(json);}catch(e){;}F.msk=json['rows'];F.tbval.push({id:F.tableID,tab:F.msk}),F.genre?F.cg(F.msk):F.val?F.cv(F.msk):F.lent(F.msk);F.vid=!F.b[0]?[F.msk[0][1],F.sbs()].shift():F.vid;F.idx=0;$(F.tbid[0]).removeClass('boxanm'),$(F.tbid[0]).addClass('boxanm');json=[];},ipcb:function(data){F.msk=[];F.val=$(F.tbid[1]).val().substring(1).toLowerCase();$.each(F.tbval,function(){$.each(this.tab,function(){this[0].search(F.val)!=-1?F.msk.push([this[0]+'/_/'+this[2],this[1]]):'';});}),F.lent(F.msk);},handleError:function(json){if(json['error']!=undefined){var e=json['error']['errors'];F.he(e);}},he:function(){console.log('Error in Fusion Table call!');	$.each(row,function(){console.log('Domain: '+error[row]['domain']);console.log(' Reason: '+error[row]['reason']);console.log(' Message: '+error[row]['message']);});},ready:function(e){F.b[4]?F.player.setSize(F.w*100,F.h*0.9):F.player.setSize(F.w*70,F.h*0.89);try{F.play(F.vid);}finally{e.target.playVideo();$(F.tbid[0]).addClass('boxanm');}},change:function(e){var f=e.data;f==0?F.c0(f):f==1&&!F.d?F.c1(f):'';},c1:function(f){var arr=F.player.getPlaylist();F.d=arr?[true,F.tbval.push({id:F.vid,tab:arr})]:F.d;},c0:function(f){var x,b=false;F.b[5]?F.player.nextVideo():F.cl(x,b,f);F.b[6]=false;},cl:function(x,b,f){if(F.b[2]){x=F.idx;b=x>9?true:false;$('#listitem'+x+'entrer').removeClass('uslc'),$(F.tbid[1]).removeClass(E.z[2]);F.idx=x+1;$(F.tbid[0]).jqxListBox('ensureVisible',F.idx,b);try{F.pVid(x+1,b);}catch(ex){F.pVid(0,true);F.idx=0;}}else{x=F.idxout;$('#listitem'+x+'lrtrn').removeClass('uslc');F.idxout=x+1;try{F.pVid(F.idxout,b);}catch(ex){F.idxout=0;F.pVid(0,true);}}},erreur:function(e){var x,it=$(F.tbid[0]).jqxListBox(E.z[7],F.idx+1);var tab=it['value'].split(/,/g);F.vid=tab[1];F.play(F.vid);;},opMn:function(){$(F.tbid[4]).addClass('anm').removeClass('anom');},clMn:function(){$(F.tbid[4]).addClass('anom').removeClass('anm');},wClean:function(){var d=new Date();var t=d.getTime();var h=d.getUTCHours();var m=(60-d.getMinutes())*60000;var w=h<3?3-h:h<16?13-(h-3):27-h;w=(w-1)*3600000-m;window.setTimeout(function(){F.tbval=[];F.b[7]?F.wClean():'';},w);}};E.ps=F.ps;$(F.tbid[1]).focus(function(){E.b=false;}).blur(function(){E.b=true;});E.stav=function(){var i=$(F.tbid[0]).jqxListBox(E.z[3])-1;$('#listitem'+i+'entrer').removeClass('uslc'),$(F.tbid[0]).jqxListBox(E.z[4],i);};E.stap=function(){var i=$(F.tbid[0]).jqxListBox(E.z[3]);i=i>0?i+1:i==-1?0:1;$('#listitem'+i+'entrer').addClass('uslc'),$(F.tbid[0]).jqxListBox(E.z[4],i);};E.av=function(){$(F.tbid[3]).jqxComboBox('open');var i=$(F.tbid[3]).jqxComboBox(E.z[3]);i=i>0?i:8;$(F.tbid[3]).jqxComboBox(E.z[4],i-1);$(F.tbid[0]).jqxListBox(E.z[4],0),$.ajax({success:function(){$(F.tbid[3]).jqxComboBox('close');}});};E.ap=function(){$(F.tbid[3]).jqxComboBox('open');var i=$(F.tbid[3]).jqxComboBox(E.z[3]);$(F.tbid[3]).jqxComboBox(E.z[4],i+1);$(F.tbid[0]).jqxListBox(E.z[4],0),$.ajax({success:function(){$(F.tbid[3]).jqxComboBox('close');}});};
$(document).ready(E.d());E.W.resize(function(){F.player==null?'':F.b[4]?F.player.setSize(F.w*100,F.h*0.9):F.player.setSize(F.w*70,F.h*0.89),E.Y.animate({'left':F.larg});}).resize();F.wClean();