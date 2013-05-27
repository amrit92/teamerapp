/*
 * jQuery UI Slider Access
 * By: Trent Richardson [http://trentrichardson.com]
 * Version 0.3
 * Last Modified: 10/20/2012
 * 
 * Copyright 2011 Trent Richardson
 * Dual licensed under the MIT and GPL licenses.
 * http://trentrichardson.com/Impromptu/GPL-LICENSE.txt
 * http://trentrichardson.com/Impromptu/MIT-LICENSE.txt
 * 
 */
(function(t){t.fn.extend({sliderAccess:function(e){return e=e||{},e.touchonly=e.touchonly!==void 0?e.touchonly:!0,e.touchonly!==!0||"ontouchend"in document?t(this).each(function(){var i=t(this),s=t.extend({},{where:"after",step:i.slider("option","step"),upIcon:"ui-icon-plus",downIcon:"ui-icon-minus",text:!1,upText:"+",downText:"-",buttonset:!0,buttonsetTag:"span",isRTL:!1},e),n=t("<"+s.buttonsetTag+' class="ui-slider-access">'+'<button data-icon="'+s.downIcon+'" data-step="'+(s.isRTL?s.step:s.step*-1)+'">'+s.downText+"</button>"+'<button data-icon="'+s.upIcon+'" data-step="'+(s.isRTL?s.step*-1:s.step)+'">'+s.upText+"</button>"+"</"+s.buttonsetTag+">");n.children("button").each(function(){var e=t(this);e.button({text:s.text,icons:{primary:e.data("icon")}}).click(function(t){var s=e.data("step"),n=i.slider("value"),o=n+=1*s,a=i.slider("option","min"),r=i.slider("option","max"),l=i.slider("option","slide")||function(){},h=i.slider("option","stop")||function(){};t.preventDefault(),a>o||o>r||(i.slider("value",o),l.call(i,null,{value:o}),h.call(i,null,{value:o}))})}),i[s.where](n),s.buttonset&&(n.removeClass("ui-corner-right").removeClass("ui-corner-left").buttonset(),n.eq(0).addClass("ui-corner-left"),n.eq(1).addClass("ui-corner-right"));var o=n.css({marginLeft:s.where=="after"&&!s.isRTL||s.where=="before"&&s.isRTL?10:0,marginRight:s.where=="before"&&!s.isRTL||s.where=="after"&&s.isRTL?10:0}).outerWidth(!0)+5,a=i.outerWidth(!0);i.css("display","inline-block").width(a-o)}):t(this)}})})(jQuery);