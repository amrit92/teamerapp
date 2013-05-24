/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";t(function(){t.support.transition=function(){var t=function(){var t,e=document.createElement("bootstrap"),i={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in i)if(e.style[t]!==void 0)return i[t]}();return t&&{end:t}}()})}(window.jQuery),/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.prototype.close=function(e){function i(){s.trigger("closed").remove()}var s,n=t(this),a=n.attr("data-target");a||(a=n.attr("href"),a=a&&a.replace(/.*(?=#[^\s]*$)/,"")),s=t(a),e&&e.preventDefault(),s.length||(s=n.hasClass("alert")?n:n.parent()),s.trigger(e=t.Event("close")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.on(t.support.transition.end,i):i())};var s=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var s=t(this),n=s.data("alert");n||s.data("alert",n=new i(this)),"string"==typeof e&&n[e].call(s)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=s,this},t(document).on("click.alert.data-api",e,i.prototype.close)}(window.jQuery),/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,i){this.$element=t(e),this.options=t.extend({},t.fn.button.defaults,i)};e.prototype.setState=function(t){var e="disabled",i=this.$element,s=i.data(),n=i.is("input")?"val":"html";t+="Text",s.resetText||i.data("resetText",i[n]()),i[n](s[t]||this.options[t]),setTimeout(function(){"loadingText"==t?i.addClass(e).attr(e,e):i.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons-radio"]');t&&t.find(".active").removeClass("active"),this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=function(i){return this.each(function(){var s=t(this),n=s.data("button"),a="object"==typeof i&&i;n||s.data("button",n=new e(this,a)),"toggle"==i?n.toggle():i&&n.setState(i)})},t.fn.button.defaults={loadingText:"loading..."},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.button.data-api","[data-toggle^=button]",function(e){var i=t(e.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle")})}(window.jQuery),/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.options.pause=="hover"&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.prototype={cycle:function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(e){var i=this.getActiveIndex(),s=this;if(!(e>this.$items.length-1||0>e))return this.sliding?this.$element.one("slid",function(){s.to(e)}):i==e?this.pause().cycle():this.slide(e>i?"next":"prev",t(this.$items[e]))},pause:function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){return this.sliding?void 0:this.slide("next")},prev:function(){return this.sliding?void 0:this.slide("prev")},slide:function(e,i){var s,n=this.$element.find(".item.active"),a=i||n[e](),o=this.interval,r="next"==e?"left":"right",l="next"==e?"first":"last",h=this;if(this.sliding=!0,o&&this.pause(),a=a.length?a:this.$element.find(".item")[l](),s=t.Event("slide",{relatedTarget:a[0],direction:r}),!a.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(h.$indicators.children()[h.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(s),s.isDefaultPrevented())return;a.addClass(e),a[0].offsetWidth,n.addClass(r),a.addClass(r),this.$element.one(t.support.transition.end,function(){a.removeClass([e,r].join(" ")).addClass("active"),n.removeClass(["active",r].join(" ")),h.sliding=!1,setTimeout(function(){h.$element.trigger("slid")},0)})}else{if(this.$element.trigger(s),s.isDefaultPrevented())return;n.removeClass("active"),a.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return o&&this.cycle(),this}}};var i=t.fn.carousel;t.fn.carousel=function(i){return this.each(function(){var s=t(this),n=s.data("carousel"),a=t.extend({},t.fn.carousel.defaults,"object"==typeof i&&i),o="string"==typeof i?i:a.slide;n||s.data("carousel",n=new e(this,a)),"number"==typeof i?n.to(i):o?n[o]():a.interval&&n.pause().cycle()})},t.fn.carousel.defaults={interval:5e3,pause:"hover"},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(e){var i,s,n=t(this),a=t(n.attr("data-target")||(i=n.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),o=t.extend({},a.data(),n.data());a.carousel(o),(s=n.attr("data-slide-to"))&&a.data("carousel").pause().to(s).cycle(),e.preventDefault()})}(window.jQuery),/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,i){this.$element=t(e),this.options=t.extend({},t.fn.collapse.defaults,i),this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.prototype={constructor:e,dimension:function(){var t=this.$element.hasClass("width");return t?"width":"height"},show:function(){var e,i,s,n;if(!this.transitioning&&!this.$element.hasClass("in")){if(e=this.dimension(),i=t.camelCase(["scroll",e].join("-")),s=this.$parent&&this.$parent.find("> .accordion-group > .in"),s&&s.length){if(n=s.data("collapse"),n&&n.transitioning)return;s.collapse("hide"),n||s.data("collapse",null)}this.$element[e](0),this.transition("addClass",t.Event("show"),"shown"),t.support.transition&&this.$element[e](this.$element[0][i])}},hide:function(){var e;!this.transitioning&&this.$element.hasClass("in")&&(e=this.dimension(),this.reset(this.$element[e]()),this.transition("removeClass",t.Event("hide"),"hidden"),this.$element[e](0))},reset:function(t){var e=this.dimension();return this.$element.removeClass("collapse")[e](t||"auto")[0].offsetWidth,this.$element[null!==t?"addClass":"removeClass"]("collapse"),this},transition:function(e,i,s){var n=this,a=function(){i.type=="show"&&n.reset(),n.transitioning=0,n.$element.trigger(s)};this.$element.trigger(i),i.isDefaultPrevented()||(this.transitioning=1,this.$element[e]("in"),t.support.transition&&this.$element.hasClass("collapse")?this.$element.one(t.support.transition.end,a):a())},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var i=t.fn.collapse;t.fn.collapse=function(i){return this.each(function(){var s=t(this),n=s.data("collapse"),a=t.extend({},t.fn.collapse.defaults,s.data(),"object"==typeof i&&i);n||s.data("collapse",n=new e(this,a)),"string"==typeof i&&n[i]()})},t.fn.collapse.defaults={toggle:!0},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.collapse.data-api","[data-toggle=collapse]",function(e){var i,s=t(this),n=s.attr("data-target")||e.preventDefault()||(i=s.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),a=t(n).data("collapse")?"toggle":s.data();s[t(n).hasClass("in")?"addClass":"removeClass"]("collapsed"),t(n).collapse(a)})}(window.jQuery),/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";function e(){t(".dropdown-backdrop").remove(),t(s).each(function(){i(t(this)).removeClass("open")})}function i(e){var i,s=e.attr("data-target");return s||(s=e.attr("href"),s=s&&/#/.test(s)&&s.replace(/.*(?=#[^\s]*$)/,"")),i=s&&t(s),i&&i.length||(i=e.parent()),i}var s="[data-toggle=dropdown]",n=function(e){var i=t(e).on("click.dropdown.data-api",this.toggle);t("html").on("click.dropdown.data-api",function(){i.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(){var s,n,a=t(this);if(!a.is(".disabled, :disabled"))return s=i(a),n=s.hasClass("open"),e(),n||("ontouchstart"in document.documentElement&&t('<div class="dropdown-backdrop"/>').insertBefore(t(this)).on("click",e),s.toggleClass("open")),a.focus(),!1},keydown:function(e){var n,a,o,r,l;if(/(38|40|27)/.test(e.keyCode)&&(n=t(this),e.preventDefault(),e.stopPropagation(),!n.is(".disabled, :disabled"))){if(o=i(n),r=o.hasClass("open"),!r||r&&e.keyCode==27)return e.which==27&&o.find(s).focus(),n.click();a=t("[role=menu] li:not(.divider):visible a",o),a.length&&(l=a.index(a.filter(":focus")),e.keyCode==38&&l>0&&l--,e.keyCode==40&&l<a.length-1&&l++,~l||(l=0),a.eq(l).focus())}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var i=t(this),s=i.data("dropdown");s||i.data("dropdown",s=new n(this)),"string"==typeof e&&s[e].call(i)})},t.fn.dropdown.Constructor=n,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.dropdown.data-api",e).on("click.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.dropdown.data-api",s,n.prototype.toggle).on("keydown.dropdown.data-api",s+", [role=menu]",n.prototype.keydown)}(window.jQuery),/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
!function(t){"use strict";var e=function(e,i){this.options=i,this.$element=t(e).delegate('[data-dismiss="modal"]',"click.dismiss.modal",t.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};e.prototype={constructor:e,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var e=this,i=t.Event("show");this.$element.trigger(i),this.isShown||i.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.backdrop(function(){var i=t.support.transition&&e.$element.hasClass("fade");e.$element.parent().length||e.$element.appendTo(document.body),e.$element.show(),i&&e.$element[0].offsetWidth,e.$element.addClass("in").attr("aria-hidden",!1),e.enforceFocus(),i?e.$element.one(t.support.transition.end,function(){e.$element.focus().trigger("shown")}):e.$element.focus().trigger("shown")}))},hide:function(e){e&&e.preventDefault(),e=t.Event("hide"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),t.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal())},enforceFocus:function(){var e=this;t(document).on("focusin.modal",function(t){e.$element[0]===t.target||e.$element.has(t.target).length||e.$element.focus()})},escape:function(){var t=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&t.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var e=this,i=setTimeout(function(){e.$element.off(t.support.transition.end),e.hideModal()},500);this.$element.one(t.support.transition.end,function(){clearTimeout(i),e.hideModal()})},hideModal:function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(e){var i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&i;if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?t.proxy(this.$element[0].focus,this.$element[0]):t.proxy(this.hide,this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one(t.support.transition.end,e):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e):e()):e&&e()}};var i=t.fn.modal;t.fn.modal=function(i){return this.each(function(){var s=t(this),n=s.data("modal"),a=t.extend({},t.fn.modal.defaults,s.data(),"object"==typeof i&&i);n||s.data("modal",n=new e(this,a)),"string"==typeof i?n[i]():a.show&&n.show()})},t.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),s=i.attr("href"),n=t(i.attr("data-target")||s&&s.replace(/.*(?=#[^\s]+$)/,"")),a=n.data("modal")?"toggle":t.extend({remote:!/#/.test(s)&&s},n.data(),i.data());e.preventDefault(),n.modal(a).one("hide",function(){i.focus()})})}(window.jQuery),/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("tooltip",t,e)};e.prototype={constructor:e,init:function(e,i,s){var n,a,o,r,l;for(this.type=e,this.$element=t(i),this.options=this.getOptions(s),this.enabled=!0,o=this.options.trigger.split(" "),l=o.length;l--;)r=o[l],"click"==r?this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this)):"manual"!=r&&(n="hover"==r?"mouseenter":"focus",a="hover"==r?"mouseleave":"blur",this.$element.on(n+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.leave,this)));this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(e){return e=t.extend({},t.fn[this.type].defaults,this.$element.data(),e),e.delay&&typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),e},enter:function(e){var i,s=t.fn[this.type].defaults,n={};return this._options&&t.each(this._options,function(t,e){s[t]!=e&&(n[t]=e)},this),i=t(e.currentTarget)[this.type](n).data(this.type),i.options.delay&&i.options.delay.show?(clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show),void 0):i.show()},leave:function(e){var i=t(e.currentTarget)[this.type](this._options).data(this.type);return this.timeout&&clearTimeout(this.timeout),i.options.delay&&i.options.delay.hide?(i.hoverState="out",this.timeout=setTimeout(function(){i.hoverState=="out"&&i.hide()},i.options.delay.hide),void 0):i.hide()},show:function(){var e,i,s,n,a,o,r=t.Event("show");if(this.hasContent()&&this.enabled){if(this.$element.trigger(r),r.isDefaultPrevented())return;switch(e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),a=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,e.detach().css({top:0,left:0,display:"block"}),this.options.container?e.appendTo(this.options.container):e.insertAfter(this.$element),i=this.getPosition(),s=e[0].offsetWidth,n=e[0].offsetHeight,a){case"bottom":o={top:i.top+i.height,left:i.left+i.width/2-s/2};break;case"top":o={top:i.top-n,left:i.left+i.width/2-s/2};break;case"left":o={top:i.top+i.height/2-n/2,left:i.left-s};break;case"right":o={top:i.top+i.height/2-n/2,left:i.left+i.width}}this.applyPlacement(o,a),this.$element.trigger("shown")}},applyPlacement:function(t,e){var i,s,n,a,o=this.tip(),r=o[0].offsetWidth,l=o[0].offsetHeight;o.offset(t).addClass(e).addClass("in"),i=o[0].offsetWidth,s=o[0].offsetHeight,"top"==e&&s!=l&&(t.top=t.top+l-s,a=!0),"bottom"==e||"top"==e?(n=0,t.left<0&&(n=t.left*-2,t.left=0,o.offset(t),i=o[0].offsetWidth,s=o[0].offsetHeight),this.replaceArrow(n-r+i,i,"left")):this.replaceArrow(s-l,s,"top"),a&&o.offset(t)},replaceArrow:function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},setContent:function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},hide:function(){function e(){var e=setTimeout(function(){i.off(t.support.transition.end).detach()},500);i.one(t.support.transition.end,function(){clearTimeout(e),i.detach()})}var i=this.tip(),s=t.Event("hide");return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(i.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?e():i.detach(),this.$element.trigger("hidden"),this)},fixTitle:function(){var t=this.$element;(t.attr("title")||typeof t.attr("data-original-title")!="string")&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var e=this.$element[0];return t.extend({},typeof e.getBoundingClientRect=="function"?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},getTitle:function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||(typeof i.title=="function"?i.title.call(e[0]):i.title)},tip:function(){return this.$tip=this.$tip||t(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var i=e?t(e.currentTarget)[this.type](this._options).data(this.type):this;i.tip().hasClass("in")?i.hide():i.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var s=t(this),n=s.data("tooltip"),a="object"==typeof i&&i;n||s.data("tooltip",n=new e(this,a)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery),/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */
!function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:e,setContent:function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](i),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,e=this.$element,i=this.options;return t=(typeof i.content=="function"?i.content.call(e[0]):i.content)||e.attr("data-content")},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var i=t.fn.popover;t.fn.popover=function(i){return this.each(function(){var s=t(this),n=s.data("popover"),a="object"==typeof i&&i;n||s.data("popover",n=new e(this,a)),"string"==typeof i&&n[i]()})},t.fn.popover.Constructor=e,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(window.jQuery),/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */
!function(t){"use strict";function e(e,i){var s,n=t.proxy(this.process,this),a=t(e).is("body")?t(window):t(e);this.options=t.extend({},t.fn.scrollspy.defaults,i),this.$scrollElement=a.on("scroll.scroll-spy.data-api",n),this.selector=(this.options.target||(s=t(e).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=t("body"),this.refresh(),this.process()}e.prototype={constructor:e,refresh:function(){var e,i=this;this.offsets=t([]),this.targets=t([]),e=this.$body.find(this.selector).map(function(){var e=t(this),s=e.data("target")||e.attr("href"),n=/^#\w/.test(s)&&t(s);return n&&n.length&&[[n.position().top+(!t.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},process:function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,s=i-this.$scrollElement.height(),n=this.offsets,a=this.targets,o=this.activeTarget;if(e>=s)return o!=(t=a.last()[0])&&this.activate(t);for(t=n.length;t--;)o!=a[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(a[t])},activate:function(e){var i,s;this.activeTarget=e,t(this.selector).parent(".active").removeClass("active"),s=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',i=t(s).parent("li").addClass("active"),i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate")}};var i=t.fn.scrollspy;t.fn.scrollspy=function(i){return this.each(function(){var s=t(this),n=s.data("scrollspy"),a="object"==typeof i&&i;n||s.data("scrollspy",n=new e(this,a)),"string"==typeof i&&n[i]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.defaults={offset:10},t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */
!function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype={constructor:e,show:function(){var e,i,s,n=this.element,a=n.closest("ul:not(.dropdown-menu)"),o=n.attr("data-target");o||(o=n.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),n.parent("li").hasClass("active")||(e=a.find(".active:last a")[0],s=t.Event("show",{relatedTarget:e}),n.trigger(s),s.isDefaultPrevented()||(i=t(o),this.activate(n.parent("li"),a),this.activate(i,i.parent(),function(){n.trigger({type:"shown",relatedTarget:e})})))},activate:function(e,i,s){function n(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),o?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),s&&s()}var a=i.find("> .active"),o=s&&t.support.transition&&a.hasClass("fade");o?a.one(t.support.transition.end,n):n(),a.removeClass("in")}};var i=t.fn.tab;t.fn.tab=function(i){return this.each(function(){var s=t(this),n=s.data("tab");n||s.data("tab",n=new e(this)),"string"==typeof i&&n[i]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
!function(t){"use strict";var e=function(e,i){this.$element=t(e),this.options=t.extend({},t.fn.typeahead.defaults,i),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=t(this.options.menu),this.shown=!1,this.listen()};e.prototype={constructor:e,select:function(){var t=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(t)).change(),this.hide()},updater:function(t){return t},show:function(){var e=t.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:e.top+e.height,left:e.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(){var e;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(e=t.isFunction(this.source)?this.source(this.query,t.proxy(this.process,this)):this.source,e?this.process(e):this)},process:function(e){var i=this;return e=t.grep(e,function(t){return i.matcher(t)}),e=this.sorter(e),e.length?this.render(e.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(t){return~t.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(t){for(var e,i=[],s=[],n=[];e=t.shift();)e.toLowerCase().indexOf(this.query.toLowerCase())?~e.indexOf(this.query)?s.push(e):n.push(e):i.push(e);return i.concat(s,n)},highlighter:function(t){var e=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return t.replace(new RegExp("("+e+")","ig"),function(t,e){return"<strong>"+e+"</strong>"})},render:function(e){var i=this;return e=t(e).map(function(e,s){return e=t(i.options.item).attr("data-value",s),e.find("a").html(i.highlighter(s)),e[0]}),e.first().addClass("active"),this.$menu.html(e),this},next:function(){var e=this.$menu.find(".active").removeClass("active"),i=e.next();i.length||(i=t(this.$menu.find("li")[0])),i.addClass("active")},prev:function(){var t=this.$menu.find(".active").removeClass("active"),e=t.prev();e.length||(e=this.$menu.find("li").last()),e.addClass("active")},listen:function(){this.$element.on("focus",t.proxy(this.focus,this)).on("blur",t.proxy(this.blur,this)).on("keypress",t.proxy(this.keypress,this)).on("keyup",t.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",t.proxy(this.keydown,this)),this.$menu.on("click",t.proxy(this.click,this)).on("mouseenter","li",t.proxy(this.mouseenter,this)).on("mouseleave","li",t.proxy(this.mouseleave,this))},eventSupported:function(t){var e=t in this.$element;return e||(this.$element.setAttribute(t,"return;"),e=typeof this.$element[t]=="function"),e},move:function(t){if(this.shown){switch(t.keyCode){case 9:case 13:case 27:t.preventDefault();break;case 38:t.preventDefault(),this.prev();break;case 40:t.preventDefault(),this.next()}t.stopPropagation()}},keydown:function(e){this.suppressKeyPressRepeat=~t.inArray(e.keyCode,[40,38,9,13,27]),this.move(e)},keypress:function(t){this.suppressKeyPressRepeat||this.move(t)},keyup:function(t){switch(t.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}t.stopPropagation(),t.preventDefault()},focus:function(){this.focused=!0},blur:function(){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(t){t.stopPropagation(),t.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(e){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),t(e.currentTarget).addClass("active")},mouseleave:function(){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var i=t.fn.typeahead;t.fn.typeahead=function(i){return this.each(function(){var s=t(this),n=s.data("typeahead"),a="object"==typeof i&&i;n||s.data("typeahead",n=new e(this,a)),"string"==typeof i&&n[i]()})},t.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},t.fn.typeahead.Constructor=e,t.fn.typeahead.noConflict=function(){return t.fn.typeahead=i,this},t(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(){var e=t(this);e.data("typeahead")||e.typeahead(e.data())})}(window.jQuery),/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */
!function(t){"use strict";var e=function(e,i){this.options=t.extend({},t.fn.affix.defaults,i),this.$window=t(window).on("scroll.affix.data-api",t.proxy(this.checkPosition,this)).on("click.affix.data-api",t.proxy(function(){setTimeout(t.proxy(this.checkPosition,this),1)},this)),this.$element=t(e),this.checkPosition()};e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e,i=t(document).height(),s=this.$window.scrollTop(),n=this.$element.offset(),a=this.options.offset,o=a.bottom,r=a.top,l="affix affix-top affix-bottom";"object"!=typeof a&&(o=r=a),"function"==typeof r&&(r=a.top()),"function"==typeof o&&(o=a.bottom()),e=this.unpin!=null&&s+this.unpin<=n.top?!1:null!=o&&n.top+this.$element.height()>=i-o?"bottom":null!=r&&r>=s?"top":!1,this.affixed!==e&&(this.affixed=e,this.unpin="bottom"==e?n.top-s:null,this.$element.removeClass(l).addClass("affix"+(e?"-"+e:"")))}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var s=t(this),n=s.data("affix"),a="object"==typeof i&&i;n||s.data("affix",n=new e(this,a)),"string"==typeof i&&n[i]()})},t.fn.affix.Constructor=e,t.fn.affix.defaults={offset:0},t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)})})}(window.jQuery);