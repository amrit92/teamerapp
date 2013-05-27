/*
 * File:        ColVis.js
 * Version:     1.0.8
 * CVS:         $Id$
 * Description: Controls for column visiblity in DataTables
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Created:     Wed Sep 15 18:23:29 BST 2010
 * Modified:    $Date$ by $Author$
 * Language:    Javascript
 * License:     GPL v2 or BSD 3 point style
 * Project:     Just a little bit of fun :-)
 * Contact:     www.sprymedia.co.uk/contact
 *
 * Copyright 2010-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 */
(function(t){ColVis=function(t,e){return this.CLASS&&this.CLASS=="ColVis"||alert("Warning: ColVis must be initialised with the keyword 'new'"),"undefined"==typeof e&&(e={}),this.s={dt:null,oInit:e,fnStateChange:null,activate:"click",sAlign:"left",buttonText:"Show / hide columns",hidden:!0,aiExclude:[],abOriginal:[],bShowAll:!1,sShowAll:"Show All",bRestore:!1,sRestore:"Restore original",iOverlayFade:500,fnLabel:null,sSize:"auto",bCssPosition:!1},this.dom={wrapper:null,button:null,collection:null,background:null,catcher:null,buttons:[],restore:null},ColVis.aInstances.push(this),this.s.dt=t,this._fnConstruct(),this},ColVis.prototype={fnRebuild:function(){for(var t=this.dom.buttons.length-1;t>=0;t--)this.dom.buttons[t]!==null&&this.dom.collection.removeChild(this.dom.buttons[t]);this.dom.buttons.splice(0,this.dom.buttons.length),this.dom.restore&&this.dom.restore.parentNode(this.dom.restore),this._fnAddButtons(),this._fnDrawCallback()},_fnConstruct:function(){this._fnApplyCustomisation();var e,i,n=this;for(this.dom.wrapper=document.createElement("div"),this.dom.wrapper.className="ColVis TableTools",this.dom.button=this._fnDomBaseButton(this.s.buttonText),this.dom.button.className+=" ColVis_MasterButton",this.dom.wrapper.appendChild(this.dom.button),this.dom.catcher=this._fnDomCatcher(),this.dom.collection=this._fnDomCollection(),this.dom.background=this._fnDomBackground(),this._fnAddButtons(),e=0,i=this.s.dt.aoColumns.length;i>e;e++)this.s.abOriginal.push(this.s.dt.aoColumns[e].bVisible);this.s.dt.aoDrawCallback.push({fn:function(){n._fnDrawCallback.call(n)},sName:"ColVis"}),t(this.s.dt.oInstance).bind("column-reorder",function(t,s,o){for(e=0,i=n.s.aiExclude.length;i>e;e++)n.s.aiExclude[e]=o.aiInvertMapping[n.s.aiExclude[e]];var a=n.s.abOriginal.splice(o.iFrom,1)[0];n.s.abOriginal.splice(o.iTo,0,a),n.fnRebuild()})},_fnApplyCustomisation:function(){var t=this.s.oInit;typeof t.activate!="undefined"&&(this.s.activate=t.activate),typeof t.buttonText!="undefined"&&(this.s.buttonText=t.buttonText),typeof t.aiExclude!="undefined"&&(this.s.aiExclude=t.aiExclude),typeof t.bRestore!="undefined"&&(this.s.bRestore=t.bRestore),typeof t.sRestore!="undefined"&&(this.s.sRestore=t.sRestore),typeof t.bShowAll!="undefined"&&(this.s.bShowAll=t.bShowAll),typeof t.sShowAll!="undefined"&&(this.s.sShowAll=t.sShowAll),typeof t.sAlign!="undefined"&&(this.s.sAlign=t.sAlign),typeof t.fnStateChange!="undefined"&&(this.s.fnStateChange=t.fnStateChange),typeof t.iOverlayFade!="undefined"&&(this.s.iOverlayFade=t.iOverlayFade),typeof t.fnLabel!="undefined"&&(this.s.fnLabel=t.fnLabel),typeof t.sSize!="undefined"&&(this.s.sSize=t.sSize),typeof t.bCssPosition!="undefined"&&(this.s.bCssPosition=t.bCssPosition)},_fnDrawCallback:function(){for(var e=this.s.dt.aoColumns,i=0,n=e.length;n>i;i++)this.dom.buttons[i]!==null&&(e[i].bVisible?t("input",this.dom.buttons[i]).attr("checked","checked"):t("input",this.dom.buttons[i]).removeAttr("checked"))},_fnAddButtons:function(){for(var t,e=","+this.s.aiExclude.join(",")+",",i=0,n=this.s.dt.aoColumns.length;n>i;i++)e.indexOf(","+i+",")==-1?(t=this._fnDomColumnButton(i),this.dom.buttons.push(t),this.dom.collection.appendChild(t)):this.dom.buttons.push(null);this.s.bRestore&&(t=this._fnDomRestoreButton(),t.className+=" ColVis_Restore",this.dom.buttons.push(t),this.dom.collection.appendChild(t)),this.s.bShowAll&&(t=this._fnDomShowAllButton(),t.className+=" ColVis_ShowAll",this.dom.buttons.push(t),this.dom.collection.appendChild(t))},_fnDomRestoreButton:function(){var e=this,i=document.createElement("button"),n=document.createElement("span");return i.className=this.s.dt.bJUI?"ColVis_Button TableTools_Button ui-button ui-state-default":"ColVis_Button TableTools_Button",i.appendChild(n),t(n).html('<span class="ColVis_title">'+this.s.sRestore+"</span>"),t(i).click(function(){for(var t=0,i=e.s.abOriginal.length;i>t;t++)e.s.dt.oInstance.fnSetColumnVis(t,e.s.abOriginal[t],!1);e._fnAdjustOpenRows(),e.s.dt.oInstance.fnAdjustColumnSizing(!1),e.s.dt.oInstance.fnDraw(!1)}),i},_fnDomShowAllButton:function(){var e=this,i=document.createElement("button"),n=document.createElement("span");return i.className=this.s.dt.bJUI?"ColVis_Button TableTools_Button ui-button ui-state-default":"ColVis_Button TableTools_Button",i.appendChild(n),t(n).html('<span class="ColVis_title">'+this.s.sShowAll+"</span>"),t(i).click(function(){for(var t=0,i=e.s.abOriginal.length;i>t;t++)e.s.aiExclude.indexOf(t)===-1&&e.s.dt.oInstance.fnSetColumnVis(t,!0,!1);e._fnAdjustOpenRows(),e.s.dt.oInstance.fnAdjustColumnSizing(!1),e.s.dt.oInstance.fnDraw(!1)}),i},_fnDomColumnButton:function(e){var i=this,n=this.s.dt.aoColumns[e],s=document.createElement("button"),o=document.createElement("span"),a=this.s.dt;s.className=a.bJUI?"ColVis_Button TableTools_Button ui-button ui-state-default":"ColVis_Button TableTools_Button",s.appendChild(o);var r=this.s.fnLabel===null?n.sTitle:this.s.fnLabel(e,n.sTitle,n.nTh);return t(o).html('<span class="ColVis_radio"><input type="checkbox"/></span><span class="ColVis_title">'+r+"</span>"),t(s).click(function(n){var s=!t("input",this).is(":checked");n.target.nodeName.toLowerCase()=="input"&&(s=t("input",this).is(":checked"));var o=t.fn.dataTableExt.iApiIndex;t.fn.dataTableExt.iApiIndex=i._fnDataTablesApiIndex.call(i),!a.oFeatures.bServerSide||a.oScroll.sX===""&&a.oScroll.sY===""?i.s.dt.oInstance.fnSetColumnVis(e,s):(i.s.dt.oInstance.fnSetColumnVis(e,s,!1),i.s.dt.oInstance.fnAdjustColumnSizing(!1),i.s.dt.oInstance.oApi._fnScrollDraw(i.s.dt),i._fnDrawCallback()),t.fn.dataTableExt.iApiIndex=o,i.s.fnStateChange!==null&&i.s.fnStateChange.call(i,e,s)}),s},_fnDataTablesApiIndex:function(){for(var t=0,e=this.s.dt.oInstance.length;e>t;t++)if(this.s.dt.oInstance[t]==this.s.dt.nTable)return t;return 0},_fnDomBaseButton:function(e){var i=this,n=document.createElement("button"),s=document.createElement("span"),o=this.s.activate=="mouseover"?"mouseover":"click";return n.className=this.s.dt.bJUI?"ColVis_Button TableTools_Button ui-button ui-state-default":"ColVis_Button TableTools_Button",n.appendChild(s),s.innerHTML=e,t(n).bind(o,function(t){i._fnCollectionShow(),t.preventDefault()}),n},_fnDomCollection:function(){var e=document.createElement("div");return e.style.display="none",e.className=this.s.dt.bJUI?"ColVis_collection TableTools_collection ui-buttonset ui-buttonset-multi":"ColVis_collection TableTools_collection",this.s.bCssPosition||(e.style.position="absolute"),t(e).css("opacity",0),e},_fnDomCatcher:function(){var e=this,i=document.createElement("div");return i.className="ColVis_catcher TableTools_catcher",t(i).click(function(){e._fnCollectionHide.call(e,null,null)}),i},_fnDomBackground:function(){var e=this,i=document.createElement("div");return i.style.position="absolute",i.style.left="0px",i.style.top="0px",i.className="ColVis_collectionBackground TableTools_collectionBackground",t(i).css("opacity",0),t(i).click(function(){e._fnCollectionHide.call(e,null,null)}),this.s.activate=="mouseover"&&t(i).mouseover(function(){e.s.overcollection=!1,e._fnCollectionHide.call(e,null,null)}),i},_fnCollectionShow:function(){var e,i,n=this,s=t(this.dom.button).offset(),o=this.dom.collection,a=this.dom.background,r=parseInt(s.left,10),l=parseInt(s.top+t(this.dom.button).outerHeight(),10);this.s.bCssPosition||(o.style.top=l+"px",o.style.left=r+"px"),o.style.display="block",t(o).css("opacity",0);var h=t(window).height(),c=t(document).height(),u=t(window).width(),d=t(document).width();a.style.height=(h>c?h:c)+"px",a.style.width=(d>u?u:d)+"px";var p=this.dom.catcher.style;if(p.height=t(this.dom.button).outerHeight()+"px",p.width=t(this.dom.button).outerWidth()+"px",p.top=s.top+"px",p.left=r+"px",document.body.appendChild(a),document.body.appendChild(o),document.body.appendChild(this.dom.catcher),this.s.sSize=="auto"){var f=[];for(this.dom.collection.style.width="auto",e=0,i=this.dom.buttons.length;i>e;e++)this.dom.buttons[e]!==null&&(this.dom.buttons[e].style.width="auto",f.push(t(this.dom.buttons[e]).outerWidth()));for(iMax=Math.max.apply(window,f),e=0,i=this.dom.buttons.length;i>e;e++)this.dom.buttons[e]!==null&&(this.dom.buttons[e].style.width=iMax+"px");this.dom.collection.style.width=iMax+"px"}if(!this.s.bCssPosition){o.style.left=this.s.sAlign=="left"?r+"px":r-t(o).outerWidth()+t(this.dom.button).outerWidth()+"px";var m=t(o).outerWidth();t(o).outerHeight(),r+m>d&&(o.style.left=d-m+"px")}setTimeout(function(){t(o).animate({opacity:1},n.s.iOverlayFade),t(a).animate({opacity:.1},n.s.iOverlayFade,"linear",function(){jQuery.browser.msie&&jQuery.browser.version=="6.0"&&n._fnDrawCallback()})},10),this.s.hidden=!1},_fnCollectionHide:function(){var e=this;this.s.hidden||this.dom.collection===null||(this.s.hidden=!0,t(this.dom.collection).animate({opacity:0},e.s.iOverlayFade,function(){this.style.display="none"}),t(this.dom.background).animate({opacity:0},e.s.iOverlayFade,function(){document.body.removeChild(e.dom.background),document.body.removeChild(e.dom.catcher)}))},_fnAdjustOpenRows:function(){for(var t=this.s.dt.aoOpenRows,e=this.s.dt.oApi._fnVisbleColumns(this.s.dt),i=0,n=t.length;n>i;i++)t[i].nTr.getElementsByTagName("td")[0].colSpan=e}},ColVis.fnRebuild=function(t){var e=null;"undefined"!=typeof t&&(e=t.fnSettings().nTable);for(var i=0,n=ColVis.aInstances.length;n>i;i++)("undefined"==typeof t||e==ColVis.aInstances[i].s.dt.nTable)&&ColVis.aInstances[i].fnRebuild()},ColVis.aInstances=[],ColVis.prototype.CLASS="ColVis",ColVis.VERSION="1.0.8",ColVis.prototype.VERSION=ColVis.VERSION,typeof t.fn.dataTable=="function"&&typeof t.fn.dataTableExt.fnVersionCheck=="function"&&t.fn.dataTableExt.fnVersionCheck("1.7.0")?t.fn.dataTableExt.aoFeatures.push({fnInit:function(t){var e=typeof t.oInit.oColVis=="undefined"?{}:t.oInit.oColVis,i=new ColVis(t,e);return i.dom.wrapper},cFeature:"C",sFeature:"ColVis"}):alert("Warning: ColVis requires DataTables 1.7 or greater - www.datatables.net/download")})(jQuery);