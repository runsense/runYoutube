var tag=document.createElement('script');tag.src="https://www.youtube.com/iframe_api";
var firstScriptTag=document.getElementsByTagName('script')[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);
var h='';var w='';var done=false;
var funcSrch=funcSrch||{};
funcSrch={vid:'3nP6Tz45K_U',vnm:'',bs:false,bdb:true,player:null,idx:0,bid:true,gre:'',
    gak:'AIzaSyCBrcqXgjh0hzFBS-nxUHMYUwvSEhFafng',
    tableID:'1AEwxOyi_yhIbmq6ymIougg5hL0uPxA6TBEH_OiGk',msk:[],tbsrch:[],
    pVid:function(i){var it;if(funcSrch.bid) {
            it=$("#entrer").jqxListBox('getItem', i);var tb=it['value'].split(',');funcSrch.vid=tb[1];funcSrch.vnm=tb[0];}
        else {
            it=$("#lrtrn").jqxListBox('getItem', i);
            funcSrch.vid=it['value'];
           }
       funcSrch.player.loadVideoById(funcSrch.vid);},
    clck:function(id){funcSrch.tableID= id;funcSrch.srch();}, 
    yTsrch:function(rch){
        $.ajax({type: 'GET',crossDomain: true,
            url:"https://www.youtube.com/results?search_query="+rch, 
                dataType: "xml",
            success:"funcSrch.fnshyTsrch"}); 
    },
    fnshyTsrch:function(xml){
        alert(xml);
    },
    srch:function(){var cb='';
        if(funcSrch.bdb) cb='funcSrch.dbcb';else cb='funcSrch.refcb';
        var queryStr =[];queryStr.push("SELECT nom,id,genre");queryStr.push(" FROM "+funcSrch.tableID);
        var sql = encodeURIComponent(queryStr.join(" "));
        $.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback="+cb+"&key="+funcSrch.gak, 
                dataType: "jsonp"});                
    },
    ipsrch:function(){
        funcSrch.msk=[];
        for(i in funcSrch.tbsrch){
        var queryStr =[];queryStr.push("SELECT nom, id, genre");queryStr.push(" FROM "+funcSrch.tbsrch[i][1]);
        var sql = encodeURIComponent(queryStr.join(" "));
        $.ajax({url:"https://www.googleapis.com/fusiontables/v1/query?sql="+sql+"&callback=funcSrch.ipcb&key="+funcSrch.gak, 
                dataType: "jsonp"});}
      },
    dbcb:function(json){try{funcSrch.handleError(json);}catch(e){;}
        var rws=json["rows"];
        for(var i in rws) if(rws[i][0]) funcSrch.tbsrch.push(rws[i]);
        var l=funcSrch.tbsrch.length;
        funcSrch.tableID=funcSrch.tbsrch[l-1][1];
        funcSrch.bdb=false;funcSrch.srch();
        var choix=$('#choix');var ul=$('<ul/>').addClass("nav navbar-nav");
        $.each(funcSrch.tbsrch,function(){
            if(this[0]){var li = $('<li/>').appendTo(ul);
              var a=$('<a/>').attr('href', "javascript:funcSrch.clck('"+this[1]+"');").text(this[0]).css('color','white').appendTo(li);
            }
        });
        ul.appendTo(choix);
    },
    refcb:function(json){
        try{funcSrch.handleError(json);}catch(e){;}
        funcSrch.msk=json["rows"];var source=[];
        for(var i in funcSrch.msk)
        {
           var src=funcSrch.msk[i];
           if(funcSrch.gre){if(funcSrch.gre==src[2]) source.push(funcSrch.msk[i]);}
           else source.push(funcSrch.msk[i]);
        }
        if(source.length==0) source.push("choice another table");
                $("#entrer").jqxListBox({allowDrop:true, source:source, width:w*13,height:h});
                $('#entrer').bind('select', function (event){
                var args = event.args;var item = $('#entrer').jqxListBox('getItem', args.index);var it=item['value'];var lb=it.split(',');
                funcSrch.vnm=lb[0].replace(' ','+');funcSrch.bid=true;funcSrch.player.loadVideoById(lb[1]);$("#lrtrn").jqxListBox('addItem',{label:lb[0],value:lb[1]});
            });
            if(!funcSrch.bs){funcSrch.vid=source[0][1];funcSrch.player.loadVideoById(funcSrch.vid);funcSrch.bs=true;} 
            json=new array();
    },
    ipcb:function(json){
        try{funcSrch.handleError(json);}catch(e){;}
        var rw=json["rows"];var val=$('#tabsrch').val();        
        for(var i in rw) if(rw[i][0].contains(val)) funcSrch.msk.push(rw[i][2]+"/_/"+rw[i][0]);              
        funcSrch.fnshipsrch();           
    },
    fnshipsrch:function(){
      $("#entrer").jqxListBox({allowDrop:true, source:funcSrch.msk, width:w*13,height:h});  
    },
    handleError:function(json){if(json["error"]!=undefined){var error=json["error"]["errors"];console.log("Error in Fusion Table call!");for(var row in error){console.log("Domain: "+error[row]["domain"]);console.log(" Reason: "+error[row]["reason"]);console.log(" Message: "+error[row]["message"]);}}}
}; 
function onYouTubeIframeAPIReady(){
    funcSrch.player=new YT.Player('yT',{events:{'onReady':onPlayerReady,'onStateChange':onPlayerStateChange,'onError':erreur}});
};
function onPlayerReady(event){funcSrch.player.setSize(w*70,h);funcSrch.player.loadVideoById(funcSrch.vid);event.target.playVideo();
}
function onPlayerStateChange(event){    
    if(event.data==0) {funcSrch.idx=funcSrch.idx+1;funcSrch.pVid(funcSrch.idx);}
    //if(!done){done=true;funcSrch.idx++;funcSrch.pVid(funcSrch.idx);alert(funcSrch.idx);}
};               
erreur=function(event){
     alert(event.data);
    funcSrch.idx++;funcSrch.pVid(funcSrch.idx);
    //funcSrch.yTsrch(funcSrch.vnm);    
};  
$(document).ready(function(){
    h=$(window).height();w=$(window).width()/100;
    $(window).resize(function(){if(funcSrch.player!=null){funcSrch.player.setSize(w*70,h);}}).resize();
    funcSrch.srch();$("#tabsrch").jqxInput({ width: w*13, height: 'auto'});
    $('#tabsrch').on('change',function(event){if(event.args.type==='keyboard') funcSrch.ipsrch();});
    $("#lrtrn").jqxListBox({allowDrop: true,allowDrag: true, width:w*13,height:h });
    $('#lrtrn').bind('select',function(event){var args = event.args;funcSrch.bid=false;funcSrch.pVid(args.index);}); 
    rClick=function(){var idx = $("#lrtrn").jqxListBox('getSelectedIndex');$("#lrtrn").jqxListBox('removeAt',idx);};
    $("#dtc").mouseover(function(){funcSrch.player.setSize(w*70,h*0.85);$("#choix").addClass('anm').removeClass('anom');})
             .mouseleave(function(){funcSrch.player.setSize(w*70,h);$("#choix").addClass('anom').removeClass('anm');});
var src=['rap','r&b','poprock','electro','gangsta','dancehall','reggae','ile'];
$("#genre").jqxComboBox({ source: src, placeHolder: "genre", width:w*13, height: '25px' });
$('#genre').bind('select', function (event) {
    var args = event.args;
                    var item = $('#genre').jqxComboBox('getItem', args.index);
                    funcSrch.gre=item.label;funcSrch.srch();
});
});
 