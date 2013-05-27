/*
 * File:        AutoFill.js
 * Version:     1.1.2
 * CVS:         $Id$
 * Description: AutoFill for DataTables
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Created:     Mon  6 Sep 2010 16:54:41 BST
 * Modified:    $Date$ by $Author$
 * Language:    Javascript
 * License:     GPL v2 or BSD 3 point
 * Project:     DataTables
 * Contact:     www.sprymedia.co.uk/contact
 *
 * Copyright 2010-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 *
 */
var AutoFill;(function(t){AutoFill=function(e,i){return this.CLASS&&this.CLASS=="AutoFill"?t.fn.dataTableExt.fnVersionCheck("1.7.0")?(this.s={filler:{height:0,width:0},border:{width:2},drag:{startX:-1,startY:-1,startTd:null,endTd:null,dragging:!1},screen:{interval:null,y:0,height:0,scrollTop:0},scroller:{top:0,bottom:0},columns:[]},this.dom={table:null,filler:null,borderTop:null,borderRight:null,borderBottom:null,borderLeft:null,currentTarget:null},this.fnSettings=function(){return this.s},this._fnInit(e,i),this):(alert("Warning: AutoFill requires DataTables 1.7 or greater - www.datatables.net/download"),void 0):(alert("Warning: AutoFill must be initialised with the keyword 'new'"),void 0)},AutoFill.prototype={_fnInit:function(e,i){var n,s,o=this;for(this.s.dt=e.fnSettings(),this.dom.table=this.s.dt.nTable,n=0,s=this.s.dt.aoColumns.length;s>n;n++)this._fnAddColumn(n);"undefined"!=typeof i&&typeof i.aoColumnDefs!="undefined"&&this._fnColumnDefs(i.aoColumnDefs),"undefined"!=typeof i&&typeof i.aoColumns!="undefined"&&this._fnColumnsAll(i.aoColumns);var a=document.createElement("div");a.className="AutoFill_filler",document.body.appendChild(a),this.dom.filler=a,a.style.display="block",this.s.filler.height=t(a).height(),this.s.filler.width=t(a).width(),a.style.display="none";var r,l=document.body;o.s.dt.oScroll.sY!==""&&(o.s.dt.nTable.parentNode.style.position="relative",l=o.s.dt.nTable.parentNode),r=document.createElement("div"),r.className="AutoFill_border",l.appendChild(r),this.dom.borderTop=r,r=document.createElement("div"),r.className="AutoFill_border",l.appendChild(r),this.dom.borderRight=r,r=document.createElement("div"),r.className="AutoFill_border",l.appendChild(r),this.dom.borderBottom=r,r=document.createElement("div"),r.className="AutoFill_border",l.appendChild(r),this.dom.borderLeft=r,t(a).mousedown(function(t){return this.onselectstart=function(){return!1},o._fnFillerDragStart.call(o,t),!1}),t("tbody>tr>td",this.dom.table).live("mouseover mouseout",function(t){o._fnFillerDisplay.call(o,t)})},_fnColumnDefs:function(t){var e,i,n,s,o,a;for(e=t.length-1;e>=0;e--)for(a=t[e].aTargets,i=0,s=a.length;s>i;i++)if(typeof a[i]=="number"&&a[i]>=0)this._fnColumnOptions(a[i],t[e]);else if(typeof a[i]=="number"&&a[i]<0)this._fnColumnOptions(this.s.dt.aoColumns.length+a[i],t[e]);else if(typeof a[i]=="string")for(n=0,o=this.s.dt.aoColumns.length;o>n;n++)(a[i]=="_all"||this.s.dt.aoColumns[n].nTh.className.indexOf(a[i])!=-1)&&this._fnColumnOptions(n,t[e])},_fnColumnsAll:function(t){for(var e=0,i=this.s.dt.aoColumns.length;i>e;e++)this._fnColumnOptions(e,t[e])},_fnAddColumn:function(t){this.s.columns[t]={enable:!0,read:this._fnReadCell,write:this._fnWriteCell,step:this._fnStep,complete:null}},_fnColumnOptions:function(t,e){typeof e.bEnable!="undefined"&&(this.s.columns[t].enable=e.bEnable),typeof e.fnRead!="undefined"&&(this.s.columns[t].read=e.fnRead),typeof e.fnWrite!="undefined"&&(this.s.columns[t].write=e.fnWrite),typeof e.fnStep!="undefined"&&(this.s.columns[t].step=e.fnStep),typeof e.fnCallback!="undefined"&&(this.s.columns[t].complete=e.fnCallback)},_fnTargetCoords:function(e){var i=t(e).parents("tr")[0];return{x:t("td",i).index(e),y:t("tr",i.parentNode).index(i)}},_fnUpdateBorder:function(e,i){var n,s=this.s.border.width,o=t(e).offset(),a=t(i).offset(),r=o.left-s,l=a.left+t(i).outerWidth(),h=o.top-s,c=a.top+t(i).outerHeight(),u=a.left+t(i).outerWidth()-o.left+2*s,d=a.top+t(i).outerHeight()-o.top+2*s;if(this.s.dt.oScroll.sY!==""){var p=t(this.s.dt.nTable.parentNode).offset(),f=t(this.s.dt.nTable.parentNode).scrollTop(),m=t(this.s.dt.nTable.parentNode).scrollLeft();r-=p.left-m,l-=p.left-m,h-=p.top-f,c-=p.top-f}n=this.dom.borderTop.style,n.top=h+"px",n.left=r+"px",n.height=this.s.border.width+"px",n.width=u+"px",n=this.dom.borderBottom.style,n.top=c+"px",n.left=r+"px",n.height=this.s.border.width+"px",n.width=u+"px",n=this.dom.borderLeft.style,n.top=h+"px",n.left=r+"px",n.height=d+"px",n.width=this.s.border.width+"px",n=this.dom.borderRight.style,n.top=h+"px",n.left=l+"px",n.height=d+"px",n.width=this.s.border.width+"px"},_fnFillerDragStart:function(e){var i=this,n=this.dom.currentTarget;this.s.drag.dragging=!0,i.dom.borderTop.style.display="block",i.dom.borderRight.style.display="block",i.dom.borderBottom.style.display="block",i.dom.borderLeft.style.display="block";var s=this._fnTargetCoords(n);this.s.drag.startX=s.x,this.s.drag.startY=s.y,this.s.drag.startTd=n,this.s.drag.endTd=n,this._fnUpdateBorder(n,n),t(document).bind("mousemove.AutoFill",function(t){i._fnFillerDragMove.call(i,t)}),t(document).bind("mouseup.AutoFill",function(t){i._fnFillerFinish.call(i,t)}),this.s.screen.y=e.pageY,this.s.screen.height=t(window).height(),this.s.screen.scrollTop=t(document).scrollTop(),this.s.dt.oScroll.sY!==""&&(this.s.scroller.top=t(this.s.dt.nTable.parentNode).offset().top,this.s.scroller.bottom=this.s.scroller.top+t(this.s.dt.nTable.parentNode).height()),this.s.screen.interval=setInterval(function(){var e=t(document).scrollTop(),n=e-i.s.screen.scrollTop;i.s.screen.y+=n,i.s.screen.height-i.s.screen.y+e<50?t("html, body").animate({scrollTop:e+50},240,"linear"):i.s.screen.y-e<50&&t("html, body").animate({scrollTop:e-50},240,"linear"),i.s.dt.oScroll.sY!==""&&(i.s.screen.y>i.s.scroller.bottom-50?t(i.s.dt.nTable.parentNode).animate({scrollTop:t(i.s.dt.nTable.parentNode).scrollTop()+50},240,"linear"):i.s.screen.y<i.s.scroller.top+50&&t(i.s.dt.nTable.parentNode).animate({scrollTop:t(i.s.dt.nTable.parentNode).scrollTop()-50},240,"linear"))},250)},_fnFillerDragMove:function(e){if(e.target&&e.target.nodeName.toUpperCase()=="TD"&&e.target!=this.s.drag.endTd){var i=this._fnTargetCoords(e.target);if(i.x!=this.s.drag.startX&&(e.target=t("tbody>tr:eq("+i.y+")>td:eq("+this.s.drag.startX+")",this.dom.table)[0],i=this._fnTargetCoords(e.target)),i.x==this.s.drag.startX){var n=this.s.drag;n.endTd=e.target,i.y>=this.s.drag.startY?this._fnUpdateBorder(n.startTd,n.endTd):this._fnUpdateBorder(n.endTd,n.startTd),this._fnFillerPosition(e.target)}}this.s.screen.y=e.pageY,this.s.screen.scrollTop=t(document).scrollTop(),this.s.dt.oScroll.sY!==""&&(this.s.scroller.scrollTop=t(this.s.dt.nTable.parentNode).scrollTop(),this.s.scroller.top=t(this.s.dt.nTable.parentNode).offset().top,this.s.scroller.bottom=this.s.scroller.top+t(this.s.dt.nTable.parentNode).height())},_fnFillerFinish:function(){t(document).unbind("mousemove.AutoFill"),t(document).unbind("mouseup.AutoFill"),this.dom.borderTop.style.display="none",this.dom.borderRight.style.display="none",this.dom.borderBottom.style.display="none",this.dom.borderLeft.style.display="none",this.s.drag.dragging=!1,clearInterval(this.s.screen.interval);var e,n=this._fnTargetCoords(this.s.drag.startTd),s=this._fnTargetCoords(this.s.drag.endTd),o=[];if(n.y<=s.y)for(e=!0,i=n.y;i<=s.y;i++)o.push(t("tbody>tr:eq("+i+")>td:eq("+n.x+")",this.dom.table)[0]);else for(e=!1,i=n.y;i>=s.y;i--)o.push(t("tbody>tr:eq("+i+")>td:eq("+n.x+")",this.dom.table)[0]);var a=n.x,r=!1,l=[],h=this.s.columns[a].read.call(this,this.s.drag.startTd),c=this._fnPrep(h);for(i=0,iLen=o.length;iLen>i;i++){i==iLen-1&&(r=!0);var u=this.s.columns[a].read.call(this,o[i]),d=this.s.columns[a].step.call(this,o[i],c,i,e,"SPRYMEDIA_AUTOFILL_STEPPER");this.s.columns[a].write.call(this,o[i],d,r),l.push({td:o[i],newValue:d,oldValue:u})}this.s.columns[a].complete!==null&&this.s.columns[a].complete.call(this,l)},_fnPrep:function(t){var e=t.match(/[\d\.]+/g);if(!e||e.length===0)return{iStart:0,sStr:t,sPostFix:""};var i=e[e.length-1],n=parseInt(i,10),s=new RegExp("^(.*)"+i+"(.*?)$"),o=i.match(/\./)?"."+i.split(".")[1]:"";return{iStart:n,sStr:t.replace(s,"$1SPRYMEDIA_AUTOFILL_STEPPER$2"),sPostFix:o}},_fnStep:function(t,e,i,n,s){var o=n?e.iStart+i:e.iStart-i;return isNaN(o)&&(o=""),e.sStr.replace(s,o+e.sPostFix)},_fnReadCell:function(e){var i=t("input",e);return i.length>0?t(i).val():(i=t("select",e),i.length>0?t(i).val():e.innerHTML)},_fnWriteCell:function(e,i,n){var s=t("input",e);if(s.length>0)return t(s).val(i),void 0;if(s=t("select",e),s.length>0)return t(s).val(i),void 0;var o=this.s.dt.oInstance.fnGetPosition(e);this.s.dt.oInstance.fnUpdate(i,o[0],o[2],n)},_fnFillerDisplay:function(e){if(!this.s.drag.dragging){var i=e.target.nodeName.toLowerCase()=="td"?e.target:t(e.target).parents("td")[0],n=this._fnTargetCoords(i).x;if(this.s.columns[n].enable){var s=this.dom.filler;e.type=="mouseover"?(this.dom.currentTarget=i,this._fnFillerPosition(i),s.style.display="block"):e.relatedTarget&&e.relatedTarget.className.match(/AutoFill/)||(s.style.display="none")}}},_fnFillerPosition:function(e){var i=t(e).offset(),n=this.dom.filler;n.style.top=i.top-this.s.filler.height/2-1+t(e).outerHeight()+"px",n.style.left=i.left-this.s.filler.width/2-1+t(e).outerWidth()+"px"}},AutoFill.prototype.CLASS="AutoFill",AutoFill.VERSION="1.1.2",AutoFill.prototype.VERSION=AutoFill.VERSION})(jQuery);