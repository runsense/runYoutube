var F=F||{},F={player:null,vid:'*PLrwe0-1smC6zJ1CmdbhHnvLNqnb7tHqVo',d:true,b:{f:'',k:'',c:''},tbsv:[],ta:[],btv:null,ttl:'',play:function(id){F.d=false;F.b.f=id.charAt(0)!='*'?C.l(id):C.v(id);return true;},l:function(id){F.vid=id;F.player.loadVideoById(id);return false;},v:function(id){id=id.substring(1);F.player.loadPlaylist({list:id,index:0,listType:'playlist',showinfo:1});return true;},clb:function(t){$.each(t,function(){var inp=$("<input>").attr('value',this).attr('type',"button").attr('id','pl').attr('class','ui-btn-inline');inp.bind("click",function(){F.btv=this;if(this.id=='pl'){F.l(this.value);}else F.l(this.id);});F.ta.push(inp);});F.cpl();
$('.jqm-footer').listview('refresh');},cpl:function(){$('.jqm-footer').html(F.ta);$('.jqm-footer').refresh}};
var C=C||{},C={ready:function(e){F.v(F.vid);},change:function(e){var f=e.data;f==0?C.c0(f):f==1?C.c1(f):F.btv&&f==3?C.cd():'';},c1:function(f){var t=F.player.getPlaylist();F.tbsv=t;F.clb(t);},c0:function(f){var b=false;F.b.f?F.player.nextVideo():C.c2(F.idx,b,f);F.b.g=false;},cd:function(){F.btv.id=F.btv.value;setTimeout(function(){F.btv.value=F.player.getVideoData().title;},8000);},lent:function(src){F.infSv=[];$('#pl').append($('<div/>',{id:'entrer'}));},init:function(){$('.style').bind("click",function(){F.ta=[this.value+'</br>'];F.v(this.id);});$('.lk').bind("click",function(){$('.stl').css('display','none');var i=this.href.substr(-1);var u='#'+i;$(u).css('display','inline-block');});}}
C.init();