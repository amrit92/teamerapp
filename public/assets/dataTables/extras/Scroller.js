/**
 * @summary     Scroller
 * @description Virtual rendering for DataTables
 * @file        Scroller.js
 * @version     1.1.0
 * @author      Allan Jardine (www.sprymedia.co.uk)
 * @license     GPL v2 or BSD 3 point style
 * @contact     www.sprymedia.co.uk/contact
 *
 * @copyright Copyright 2011-2012 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 */
(function(t,e,i){var n=function(e,s){return!this instanceof n?(alert("Scroller warning: Scroller must be initialised with the 'new' keyword."),void 0):("undefined"==typeof s&&(s={}),this.s={dt:e,tableTop:0,tableBottom:0,redrawTop:0,redrawBottom:0,rowHeight:null,autoHeight:!0,viewportHeight:0,viewportRows:0,stateTO:null,drawTO:null},this.s=t.extend(this.s,n.oDefaults,s),this.dom={force:i.createElement("div"),scroller:null,table:null},this.s.dt.oScroller=this,this._fnConstruct(),void 0)};n.prototype={fnRowToPixels:function(t){return t*this.s.rowHeight},fnPixelsToRow:function(t){return parseInt(t/this.s.rowHeight,10)},fnScrollToRow:function(e,i){var n=this.fnRowToPixels(e);"undefined"==typeof i||i?t(this.dom.scroller).animate({scrollTop:n}):t(this.dom.scroller).scrollTop(n)},fnMeasure:function(e){this.s.autoHeight&&this._fnCalcRowHeight(),this.s.viewportHeight=t(this.dom.scroller).height(),this.s.viewportRows=parseInt(this.s.viewportHeight/this.s.rowHeight,10)+1,this.s.dt._iDisplayLength=this.s.viewportRows*this.s.displayBuffer,this.s.trace&&console.log("Row height: "+this.s.rowHeight+" "+"Viewport height: "+this.s.viewportHeight+" "+"Viewport rows: "+this.s.viewportRows+" "+"Display rows: "+this.s.dt._iDisplayLength),("undefined"==typeof e||e)&&this.s.dt.oInstance.fnDraw()},_fnConstruct:function(){var e=this;this.dom.force.style.position="absolute",this.dom.force.style.top="0px",this.dom.force.style.left="0px",this.dom.force.style.width="1px",this.dom.scroller=t("div."+this.s.dt.oClasses.sScrollBody,this.s.dt.nTableWrapper)[0],this.dom.scroller.appendChild(this.dom.force),this.dom.scroller.style.position="relative",this.dom.table=t(">table",this.dom.scroller)[0],this.dom.table.style.position="absolute",this.dom.table.style.top="0px",this.dom.table.style.left="0px",t(this.s.dt.nTableWrapper).addClass("DTS"),this.s.loadingIndicator&&t(this.dom.scroller.parentNode).css("position","relative").append('<div class="DTS_Loading">'+this.s.dt.oLanguage.sLoadingRecords+"</div>"),this.s.rowHeight&&this.s.rowHeight!="auto"&&(this.s.autoHeight=!1),this.fnMeasure(!1),t(this.dom.scroller).scroll(function(){e._fnScroll.call(e)}),t(this.dom.scroller).bind("touchstart",function(){e._fnScroll.call(e)}),this.s.dt.aoDrawCallback.push({fn:function(){e.s.dt.bInitialised&&e._fnDrawCallback.call(e)},sName:"Scroller"}),this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(t,i){i.iScroller=e.dom.scroller.scrollTop},"Scroller_State")},_fnScroll:function(){var e,i=this,n=this.dom.scroller.scrollTop;if(!this.s.dt.bFiltered&&!this.s.dt.bSorted&&(this.s.trace&&console.log("Scroll: "+n+"px - boundaries: "+this.s.redrawTop+" / "+this.s.redrawBottom+". "+" Showing rows "+this.fnPixelsToRow(n)+" to "+this.fnPixelsToRow(n+t(this.dom.scroller).height())+" in the viewport, with rows "+this.s.dt._iDisplayStart+" to "+this.s.dt._iDisplayEnd+" rendered by the DataTable"),this._fnInfo(),clearTimeout(this.s.stateTO),this.s.stateTO=setTimeout(function(){i.s.dt.oApi._fnSaveState(i.s.dt)},250),n<this.s.redrawTop||n>this.s.redrawBottom)){var s=(this.s.displayBuffer-1)/2*this.s.viewportRows;e=parseInt(n/this.s.rowHeight,10)-s,0>e?e=0:e+this.s.dt._iDisplayLength>this.s.dt.fnRecordsDisplay()?(e=this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength,0>e&&(e=0)):0!==e%2&&e++,e!=this.s.dt._iDisplayStart&&(this.s.tableTop=t(this.s.dt.nTable).offset().top,this.s.tableBottom=t(this.s.dt.nTable).height()+this.s.tableTop,this.s.dt.oFeatures.bServerSide?(clearTimeout(this.s.drawTO),this.s.drawTO=setTimeout(function(){i.s.dt._iDisplayStart=e,i.s.dt.oApi._fnCalculateEnd(i.s.dt),i.s.dt.oApi._fnDraw(i.s.dt)},this.s.serverWait)):(this.s.dt._iDisplayStart=e,this.s.dt.oApi._fnCalculateEnd(this.s.dt),this.s.dt.oApi._fnDraw(this.s.dt)),this.s.trace&&console.log("Scroll forcing redraw - top DT render row: "+e))}},_fnDrawCallback:function(){var e=this,i=this.dom.scroller.scrollTop,n=i+this.s.viewportHeight;this.dom.force.style.height=this.s.rowHeight*this.s.dt.fnRecordsDisplay()+"px";var s=this.s.rowHeight*this.s.dt._iDisplayStart;this.s.dt._iDisplayStart===0?s=0:this.s.dt._iDisplayStart===this.s.dt.fnRecordsDisplay()-this.s.dt._iDisplayLength&&(s=this.s.rowHeight*this.s.dt._iDisplayStart),this.dom.table.style.top=s+"px",this.s.tableTop=s,this.s.tableBottom=t(this.s.dt.nTable).height()+this.s.tableTop,this.s.redrawTop=i-(i-this.s.tableTop)*this.s.boundaryScale,this.s.redrawBottom=i+(this.s.tableBottom-n)*this.s.boundaryScale,this.s.trace&&console.log("Table redraw. Table top: "+s+"px "+"Table bottom: "+this.s.tableBottom+" "+"Scroll boundary top: "+this.s.redrawTop+" "+"Scroll boundary bottom: "+this.s.redrawBottom+" "+"Rows drawn: "+this.s.dt._iDisplayLength),setTimeout(function(){e._fnInfo.call(e)},0),this.s.dt.oFeatures.bStateSave&&this.s.dt.oLoadedState!==null&&typeof this.s.dt.oLoadedState.iScroller!="undefined"&&(this.s.dt.sAjaxSource!==null&&this.s.dt.iDraw==2||this.s.dt.sAjaxSource===null&&this.s.dt.iDraw==1)&&setTimeout(function(){t(e.dom.scroller).scrollTop(e.s.dt.oLoadedState.iScroller),e.s.redrawTop=e.s.dt.oLoadedState.iScroller-e.s.viewportHeight/2},0)},_fnCalcRowHeight:function(){var e=this.s.dt.nTable.cloneNode(!1),n=t('<div class="'+this.s.dt.oClasses.sWrapper+' DTS">'+'<div class="'+this.s.dt.oClasses.sScrollWrapper+'">'+'<div class="'+this.s.dt.oClasses.sScrollBody+'"></div>'+"</div>"+"</div>")[0];t(e).append("<tbody><tr><td>&nbsp;</td></tr></tbody>"),t("div."+this.s.dt.oClasses.sScrollBody,n).append(e),i.body.appendChild(n),this.s.rowHeight=t("tbody tr",e).outerHeight(),i.body.removeChild(n)},_fnInfo:function(){if(this.s.dt.oFeatures.bInfo){var e,i=this.s.dt,n=this.dom.scroller.scrollTop,s=this.fnPixelsToRow(n)+1,o=i.fnRecordsTotal(),a=i.fnRecordsDisplay(),r=this.fnPixelsToRow(n+t(this.dom.scroller).height()),l=r>a?a:r,h=i.fnFormatNumber(s),u=i.fnFormatNumber(l),c=i.fnFormatNumber(o),d=i.fnFormatNumber(a);e=i.fnRecordsDisplay()===0&&i.fnRecordsDisplay()==i.fnRecordsTotal()?i.oLanguage.sInfoEmpty+i.oLanguage.sInfoPostFix:i.fnRecordsDisplay()===0?i.oLanguage.sInfoEmpty+" "+i.oLanguage.sInfoFiltered.replace("_MAX_",c)+i.oLanguage.sInfoPostFix:i.fnRecordsDisplay()==i.fnRecordsTotal()?i.oLanguage.sInfo.replace("_START_",h).replace("_END_",u).replace("_TOTAL_",d)+i.oLanguage.sInfoPostFix:i.oLanguage.sInfo.replace("_START_",h).replace("_END_",u).replace("_TOTAL_",d)+" "+i.oLanguage.sInfoFiltered.replace("_MAX_",i.fnFormatNumber(i.fnRecordsTotal()))+i.oLanguage.sInfoPostFix;var p=i.aanFeatures.i;if("undefined"!=typeof p)for(var f=0,m=p.length;m>f;f++)t(p[f]).html(e)}}},n.oDefaults={trace:!1,rowHeight:"auto",serverWait:200,displayBuffer:9,boundaryScale:.5,loadingIndicator:!1},n.prototype.CLASS="Scroller",n.VERSION="1.1.0",n.prototype.VERSION=n.VERSION,typeof t.fn.dataTable=="function"&&typeof t.fn.dataTableExt.fnVersionCheck=="function"&&t.fn.dataTableExt.fnVersionCheck("1.9.0")?t.fn.dataTableExt.aoFeatures.push({fnInit:function(t){var e=typeof t.oInit.oScroller=="undefined"?{}:t.oInit.oScroller,i=new n(t,e);return i.dom.wrapper},cFeature:"S",sFeature:"Scroller"}):alert("Warning: Scroller requires DataTables 1.9.0 or greater - www.datatables.net/download"),t.fn.dataTable.Scroller=n})(jQuery,window,document);