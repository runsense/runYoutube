var F=F||{},F={player:null,vid:'*PLrwe0-1smC6zJ1CmdbhHnvLNqnb7tHqVo',d:true,b:{f:'',k:'',c:''},tbsv:[],ta:[],btv:null,ttl:'',
	play:function(id){F.d=false;F.b.f=id.charAt(0)!='*'?C.l(id):C.v(id);return true;},
l:function(id){F.vid=id;F.player.loadVideoById(id);return false;},
v:function(id){id=id.substring(1);F.player.loadPlaylist({list:id,index:0,listType:'playlist',showinfo:1});return true;},
clb:function(t){
$.each(t,function(){
		var inp=$("<input>").attr('value',this).attr('type',"button").attr('id','pl').attr('class','ui-btn-inline');
		inp.bind("click",function(){
			if(this.id=='pl'){
				F.l(this.value);				
			}else
				F.l(this.id);			
		});
           F.ta.push(inp);		  
	}); F.cpl();},
cpl:function(){$('.jqm-footer').html(F.ta);$('.jqm-footer').refresh}};
var C=C||{},C={ready:function(e){F.v(F.vid);},
change:function(e){var f=e.data;f==0?C.c0(f):f==1?C.c1(f):'';F.btv.id=F.btv.value;F.btv.value=F.player.getVideoData().title;},
c1:function(f){var t=F.player.getPlaylist();F.tbsv=t;F.clb(t);},
c0:function(f){var b=false;F.b.f?F.player.nextVideo():C.c2(F.idx,b,f);F.b.g=false;},
lent:function(src){F.infSv=[];$('#pl').append($('<div/>',{id:'entrer'}));},
init:function(){
	$('.style').bind("click",function(){
	F.ta=['click for Appear</br>'];
	F.v(this.id);	
});}
}
C.init();
