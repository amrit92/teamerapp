/*
 * File:        KeyTable.js
 * Version:     1.1.7
 * CVS:         $Idj$
 * Description: Keyboard navigation for HTML tables
 * Author:      Allan Jardine (www.sprymedia.co.uk)
 * Created:     Fri Mar 13 21:24:02 GMT 2009
 * Modified:    $Date$ by $Author$
 * Language:    Javascript
 * License:     GPL v2 or BSD 3 point style
 * Project:     Just a little bit of fun :-)
 * Contact:     www.sprymedia.co.uk/contact
 *
 * Copyright 2009-2011 Allan Jardine, all rights reserved.
 *
 * This source file is free software, under either the GPL v2 license or a
 * BSD style license, available at:
 *   http://datatables.net/license_gpl2
 *   http://datatables.net/license_bsd
 */
function KeyTable(t){function e(t){return function(e,i,s){if(null!==e&&"number"!=typeof e||null!==i&&"number"!=typeof i||"function"!=typeof s)if("object"==typeof e&&"function"==typeof i){var o=f(e);n(t,o[0],o[1],i)}else alert("Unhandable event type was added: x"+e+"  y:"+i+"  z:"+s);else n(t,e,i,s)}}function i(t){return function(e,i,n){if(null!==e&&typeof arguments[0]!="number"||null!==i&&typeof arguments[1]!="number")if(typeof arguments[0]=="object"){var o=f(e);typeof arguments[1]=="function"?s(t,o[0],o[1],i):s(t,o[0],o[1])}else alert("Unhandable event type was removed: x"+e+"  y:"+i+"  z:"+n);else typeof arguments[2]=="function"?s(t,e,i,n):s(t,e,i)}}function n(t,e,i,n){N[t].push({x:e,y:i,fn:n})}function s(t,e,i,n){for(var s=0,o=0,a=N[t].length;a-s>o;o++)if("undefined"!=typeof n)N[t][o-s].x==e&&N[t][o-s].y==i&&N[t][o-s].fn==n&&(N[t].splice(o-s,1),s++);else if(N[t][o-s].x==e&&N[t][o-s].y==i)return N[t].splice(o,1),1;return s}function o(t,e,i){for(var n=0,s=N[t],o=0;o<s.length;o++)(s[o].x==e&&s[o].y==i||s[o].x===null&&s[o].y==i||s[o].x==e&&s[o].y===null||s[o].x===null&&s[o].y===null)&&(s[o].fn(p(e,i),e,i),n++);return n}function a(t,e){if(k!=t){"undefined"==typeof e&&(e=!0),null!==k&&l(k),jQuery(t).addClass(M),jQuery(t).parent().addClass(M);var i;if(P){i=P.fnSettings();for(var n=b(t)[1],s=S;n>=i.fnDisplayEnd();)i._iDisplayLength>=0?i._iDisplayStart+i._iDisplayLength<i.fnRecordsDisplay()&&(i._iDisplayStart+=i._iDisplayLength):i._iDisplayStart=0,P.oApi._fnCalculateEnd(i);for(;n<i._iDisplayStart;)i._iDisplayStart=i._iDisplayLength>=0?i._iDisplayStart-i._iDisplayLength:0,i._iDisplayStart<0&&(i._iDisplayStart=0),P.oApi._fnCalculateEnd(i);P.oApi._fnDraw(i),S=s}var a=f(t);k=t,C=a[0],T=a[1];var r,h,u,d,p,y,_;if(e&&(r=document.documentElement.clientHeight,h=document.documentElement.clientWidth,u=document.body.scrollTop||document.documentElement.scrollTop,d=document.body.scrollLeft||document.documentElement.scrollLeft,p=t.offsetHeight,y=t.offsetWidth,_=v(t),!P||typeof i.oScroll=="undefined"||i.oScroll.sX===""&&i.oScroll.sY===""||(_[1]-=$(i.nTable.parentNode).scrollTop(),_[0]-=$(i.nTable.parentNode).scrollLeft()),_[1]+p>u+r?m(_[1]+p-r):_[1]<u&&m(_[1]),_[0]+y>d+h?g(_[0]+y-h):_[0]<d&&g(_[0])),P&&typeof i.oScroll!="undefined"&&(i.oScroll.sX!==""||i.oScroll.sY!=="")){var w=i.nTable.parentNode;r=w.clientHeight,h=w.clientWidth,u=w.scrollTop,d=w.scrollLeft,p=t.offsetHeight,y=t.offsetWidth,t.offsetTop+p>r+u?w.scrollTop=t.offsetTop+p-r:t.offsetTop<u&&(w.scrollTop=t.offsetTop),t.offsetLeft+y>h+d?w.scrollLeft=t.offsetLeft+y-h:t.offsetLeft<d&&(w.scrollLeft=t.offsetLeft)}c(),o("focus",C,T)}}function r(){l(k),C=null,T=null,k=null,d()}function l(t){jQuery(t).removeClass(M),jQuery(t).parent().removeClass(M),o("blur",C,T)}function h(){for(var t=this;t.nodeName!="TD";)t=t.parentNode;a(t),c()}function u(t){if(D.block||!S)return!0;if(t.metaKey||t.altKey||t.ctrlKey)return!0;var e,i,n,s=x.getElementsByTagName("tr")[0].getElementsByTagName("td").length;if(P){var l=P.fnSettings();n=l.aiDisplay.length;var h=b(k);if(null===h)return;C=h[0],T=h[1]}else n=x.getElementsByTagName("tr").length;var u=t.keyCode==9&&t.shiftKey?-1:t.keyCode;switch(u){case 13:return t.preventDefault(),t.stopPropagation(),o("action",C,T),!0;case 27:if(!o("esc",C,T))return r(),void 0;e=C,i=T;break;case-1:case 37:if(C>0)e=C-1,i=T;else{if(!(T>0))return-1==u&&_?(I=!0,w.focus(),setTimeout(function(){I=!1},0),S=!1,r(),!0):!1;e=s-1,i=T-1}break;case 38:if(!(T>0))return!1;e=C,i=T-1;break;case 9:case 39:if(s-1>C)e=C+1,i=T;else{if(!(n-1>T))return 9==u&&_?(I=!0,w.focus(),setTimeout(function(){I=!1},0),S=!1,r(),!0):!1;e=0,i=T+1}break;case 40:if(!(n-1>T))return!1;e=C,i=T+1;break;default:return!0}return a(p(e,i)),!1}function c(){S||(S=!0)}function d(){S=!1}function p(t,e){if(P){var i=P.fnSettings();return typeof i.aoData[i.aiDisplay[e]]!="undefined"?i.aoData[i.aiDisplay[e]].nTr.getElementsByTagName("td")[t]:null}return jQuery("tr:eq("+e+")>td:eq("+t+")",x)[0]}function f(t){if(P){var e=P.fnSettings();return[jQuery("td",t.parentNode).index(t),jQuery("tr",t.parentNode.parentNode).index(t.parentNode)+e._iDisplayStart]}return[jQuery("td",t.parentNode).index(t),jQuery("tr",t.parentNode.parentNode).index(t.parentNode)]}function m(t){document.documentElement.scrollTop=t,document.body.scrollTop=t}function g(t){document.documentElement.scrollLeft=t,document.body.scrollLeft=t}function v(t){var e=0,i=0;if(t.offsetParent)for(e=t.offsetLeft,i=t.offsetTop,t=t.offsetParent;t;)e+=t.offsetLeft,i+=t.offsetTop,t=t.offsetParent;return[e,i]}function b(t){for(var e=P.fnSettings(),i=0,n=e.aiDisplay.length;n>i;i++)for(var s=e.aoData[e.aiDisplay[i]].nTr,o=s.getElementsByTagName("td"),a=0,r=o.length;r>a;a++)if(o[a]==t)return[a,i];return null}function y(t,e){if(D=e,"undefined"==typeof t&&(t={}),typeof t.focus=="undefined"&&(t.focus=[0,0]),typeof t.table=="undefined"?t.table=jQuery("table.KeyTable")[0]:$(t.table).addClass("KeyTable"),typeof t.focusClass!="undefined"&&(M=t.focusClass),typeof t.datatable!="undefined"&&(P=t.datatable),typeof t.initScroll=="undefined"&&(t.initScroll=!0),typeof t.form=="undefined"&&(t.form=!1),_=t.form,x=t.table.getElementsByTagName("tbody")[0],_){var i=document.createElement("div");w=document.createElement("input"),i.style.height="1px",i.style.width="0px",i.style.overflow="hidden",typeof t.tabIndex!="undefined"&&(w.tabIndex=t.tabIndex),i.appendChild(w),t.table.parentNode.insertBefore(i,t.table.nextSibling),jQuery(w).focus(function(){I||(S=!0,I=!1,typeof t.focus.nodeName!="undefined"?a(t.focus,t.initScroll):a(p(t.focus[0],t.focus[1]),t.initScroll),setTimeout(function(){w.blur()},0))}),S=!1}else typeof t.focus.nodeName!="undefined"?a(t.focus,t.initScroll):a(p(t.focus[0],t.focus[1]),t.initScroll),c();jQuery.browser.mozilla||jQuery.browser.opera?jQuery(document).bind("keypress",u):jQuery(document).bind("keydown",u),P?jQuery("tbody td",P.fnSettings().nTable).live("click",h):jQuery("td",x).live("click",h),jQuery(document).click(function(e){for(var i=e.target,n=!1;i;){if(i==t.table){n=!0;break}i=i.parentNode}n||r()})}this.block=!1,this.event={remove:{}},this.fnGetCurrentPosition=function(){return[C,T]},this.fnGetCurrentData=function(){return k.innerHTML},this.fnGetCurrentTD=function(){return k},this.fnSetPosition=function(t,e){"object"==typeof t&&t.nodeName?a(t):a(p(t,e))};var _,w,x=null,k=null,C=null,T=null,D=null,M="focus",S=!1,N={action:[],esc:[],focus:[],blur:[]},P=null,I=!1;for(var E in N)E&&(this.event[E]=e(E),this.event.remove[E]=i(E));y(t,this)}