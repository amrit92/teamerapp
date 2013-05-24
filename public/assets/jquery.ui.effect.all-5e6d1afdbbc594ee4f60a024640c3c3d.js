/*!
 * jQuery UI Effects 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
(function(t,e){var i="ui-effects-";t.effects={effect:{}},/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
function(t,e){function i(t,e,i){var n=u[e.type]||{};return null==t?i||!e.def?null:e.def:(t=n.floor?~~t:parseFloat(t),isNaN(t)?e.def:n.mod?(t+n.mod)%n.mod:0>t?0:n.max<t?n.max:t)}function n(e){var i=h(),n=i._rgba=[];return e=e.toLowerCase(),f(l,function(t,s){var a,o=s.re.exec(e),r=o&&s.parse(o),l=s.space||"rgba";return r?(a=i[l](r),i[c[l].cache]=a[c[l].cache],n=i._rgba=a._rgba,!1):void 0}),n.length?(n.join()==="0,0,0,0"&&t.extend(n,a.transparent),i):a[e]}function s(t,e,i){return i=(i+1)%1,1>6*i?t+6*(e-t)*i:1>2*i?e:2>3*i?t+6*(e-t)*(2/3-i):t}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1]*2.55,t[2]*2.55,t[3]*2.55,t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],h=t.Color=function(e,i,n,s){return new t.Color.fn.parse(e,i,n,s)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},u={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},d=h.support={},p=t("<p>")[0],f=t.each;p.style.cssText="background-color:rgba(1,1,1,.5)",d.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(c,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),h.fn=t.extend(h.prototype,{parse:function(s,o,r,l){if(s===e)return this._rgba=[null,null,null,null],this;(s.jquery||s.nodeType)&&(s=t(s).css(o),o=e);var u=this,d=t.type(s),p=this._rgba=[];return o!==e&&(s=[s,o,r,l],d="array"),"string"===d?this.parse(n(s)||a._default):"array"===d?(f(c.rgba.props,function(t,e){p[e.idx]=i(s[e.idx],e)}),this):"object"===d?(s instanceof h?f(c,function(t,e){s[e.cache]&&(u[e.cache]=s[e.cache].slice())}):f(c,function(e,n){var a=n.cache;f(n.props,function(t,e){if(!u[a]&&n.to){if("alpha"===t||s[t]==null)return;u[a]=n.to(u._rgba)}u[a][e.idx]=i(s[t],e,!0)}),u[a]&&t.inArray(null,u[a].slice(0,3))<0&&(u[a][3]=1,n.from&&(u._rgba=n.from(u[a])))}),this):void 0},is:function(t){var e=h(t),i=!0,n=this;return f(c,function(t,s){var a,o=e[s.cache];return o&&(a=n[s.cache]||s.to&&s.to(n._rgba)||[],f(s.props,function(t,e){return o[e.idx]!=null?i=o[e.idx]===a[e.idx]:void 0})),i}),i},_space:function(){var t=[],e=this;return f(c,function(i,n){e[n.cache]&&t.push(i)}),t.pop()},transition:function(t,e){var n=h(t),s=n._space(),a=c[s],o=this.alpha()===0?h("transparent"):this,r=o[a.cache]||a.to(o._rgba),l=r.slice();return n=n[a.cache],f(a.props,function(t,s){var a=s.idx,o=r[a],h=n[a],c=u[s.type]||{};null!==h&&(null===o?l[a]=h:(c.mod&&(h-o>c.mod/2?o+=c.mod:o-h>c.mod/2&&(o-=c.mod)),l[a]=i((h-o)*e+o,s)))}),this[s](l)},blend:function(e){if(this._rgba[3]===1)return this;var i=this._rgba.slice(),n=i.pop(),s=h(e)._rgba;return h(t.map(i,function(t,e){return(1-n)*s[e]+n*t}))},toRgbaString:function(){var e="rgba(",i=t.map(this._rgba,function(t,e){return null==t?e>2?1:0:t});return i[3]===1&&(i.pop(),e="rgb("),e+i.join()+")"},toHslaString:function(){var e="hsla(",i=t.map(this.hsla(),function(t,e){return null==t&&(t=e>2?1:0),e&&3>e&&(t=Math.round(100*t)+"%"),t});return i[3]===1&&(i.pop(),e="hsl("),e+i.join()+")"},toHexString:function(e){var i=this._rgba.slice(),n=i.pop();return e&&i.push(~~(255*n)),"#"+t.map(i,function(t){return t=(t||0).toString(16),t.length===1?"0"+t:t}).join("")},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}}),h.fn.parse.prototype=h.fn,c.hsla.to=function(t){if(t[0]==null||t[1]==null||t[2]==null)return[null,null,null,t[3]];var e,i,n=t[0]/255,s=t[1]/255,a=t[2]/255,o=t[3],r=Math.max(n,s,a),l=Math.min(n,s,a),h=r-l,c=r+l,u=.5*c;return e=l===r?0:n===r?60*(s-a)/h+360:s===r?60*(a-n)/h+120:60*(n-s)/h+240,i=0===h?0:.5>=u?h/c:h/(2-c),[Math.round(e)%360,i,u,null==o?1:o]},c.hsla.from=function(t){if(t[0]==null||t[1]==null||t[2]==null)return[null,null,null,t[3]];var e=t[0]/360,i=t[1],n=t[2],a=t[3],o=.5>=n?n*(1+i):n+i-n*i,r=2*n-o;return[Math.round(s(r,o,e+1/3)*255),Math.round(s(r,o,e)*255),Math.round(s(r,o,e-1/3)*255),a]},f(c,function(n,s){var a=s.props,o=s.cache,l=s.to,c=s.from;h.fn[n]=function(n){if(l&&!this[o]&&(this[o]=l(this._rgba)),n===e)return this[o].slice();var s,r=t.type(n),u="array"===r||"object"===r?n:arguments,d=this[o].slice();return f(a,function(t,e){var n=u["object"===r?t:e.idx];null==n&&(n=d[e.idx]),d[e.idx]=i(n,e)}),c?(s=h(c(d)),s[o]=d,s):h(d)},f(a,function(e,i){h.fn[e]||(h.fn[e]=function(s){var a,o=t.type(s),l="alpha"===e?this._hsla?"hsla":"rgba":n,h=this[l](),c=h[i.idx];return"undefined"===o?c:("function"===o&&(s=s.call(this,c),o=t.type(s)),null==s&&i.empty?this:("string"===o&&(a=r.exec(s),a&&(s=c+parseFloat(a[2])*(a[1]==="+"?1:-1))),h[i.idx]=s,this[l](h)))})})}),h.hook=function(e){var i=e.split(" ");f(i,function(e,i){t.cssHooks[i]={set:function(e,s){var a,o,r="";if("transparent"!==s&&(t.type(s)!=="string"||(a=n(s)))){if(s=h(a||s),!d.rgba&&s._rgba[3]!==1){for(o="backgroundColor"===i?e.parentNode:e;(""===r||"transparent"===r)&&o&&o.style;)try{r=t.css(o,"backgroundColor"),o=o.parentNode}catch(l){}s=s.blend(r&&"transparent"!==r?r:"_default")}s=s.toRgbaString()}try{e.style[i]=s}catch(l){}}},t.fx.step[i]=function(e){e.colorInit||(e.start=h(e.elem,i),e.end=h(e.end),e.colorInit=!0),t.cssHooks[i].set(e.elem,e.start.transition(e.end,e.pos))}})},h.hook(o),t.cssHooks.borderColor={expand:function(t){var e={};return f(["Top","Right","Bottom","Left"],function(i,n){e["border"+n+"Color"]=t}),e}},a=t.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery),function(){function i(e){var i,n,s=e.ownerDocument.defaultView?e.ownerDocument.defaultView.getComputedStyle(e,null):e.currentStyle,a={};if(s&&s.length&&s[0]&&s[s[0]])for(n=s.length;n--;)i=s[n],typeof s[i]=="string"&&(a[t.camelCase(i)]=s[i]);else for(i in s)typeof s[i]=="string"&&(a[i]=s[i]);return a}function n(e,i){var n,s,o={};for(n in i)s=i[n],e[n]!==s&&(a[n]||(t.fx.step[n]||!isNaN(parseFloat(s)))&&(o[n]=s));return o}var s=["add","remove","toggle"],a={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};t.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(e,i){t.fx.step[i]=function(t){(t.end!=="none"&&!t.setAttr||t.pos===1&&!t.setAttr)&&(jQuery.style(t.elem,i,t.end),t.setAttr=!0)}}),t.fn.addBack||(t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.effects.animateClass=function(e,a,o,r){var l=t.speed(a,o,r);return this.queue(function(){var a,o=t(this),r=o.attr("class")||"",h=l.children?o.find("*").addBack():o;h=h.map(function(){var e=t(this);return{el:e,start:i(this)}}),a=function(){t.each(s,function(t,i){e[i]&&o[i+"Class"](e[i])})},a(),h=h.map(function(){return this.end=i(this.el[0]),this.diff=n(this.start,this.end),this}),o.attr("class",r),h=h.map(function(){var e=this,i=t.Deferred(),n=t.extend({},l,{queue:!1,complete:function(){i.resolve(e)}});return this.el.animate(this.diff,n),i.promise()}),t.when.apply(t,h.get()).done(function(){a(),t.each(arguments,function(){var e=this.el;t.each(this.diff,function(t){e.css(t,"")})}),l.complete.call(o[0])})})},t.fn.extend({addClass:function(e){return function(i,n,s,a){return n?t.effects.animateClass.call(this,{add:i},n,s,a):e.apply(this,arguments)}}(t.fn.addClass),removeClass:function(e){return function(i,n,s,a){return arguments.length>1?t.effects.animateClass.call(this,{remove:i},n,s,a):e.apply(this,arguments)}}(t.fn.removeClass),toggleClass:function(i){return function(n,s,a,o,r){return"boolean"==typeof s||s===e?a?t.effects.animateClass.call(this,s?{add:n}:{remove:n},a,o,r):i.apply(this,arguments):t.effects.animateClass.call(this,{toggle:n},s,a,o)}}(t.fn.toggleClass),switchClass:function(e,i,n,s,a){return t.effects.animateClass.call(this,{add:i,remove:e},n,s,a)}})}(),function(){function n(e,i,n,s){return t.isPlainObject(e)&&(i=e,e=e.effect),e={effect:e},null==i&&(i={}),t.isFunction(i)&&(s=i,n=null,i={}),("number"==typeof i||t.fx.speeds[i])&&(s=n,n=i,i={}),t.isFunction(n)&&(s=n,n=null),i&&t.extend(e,i),n=n||i.duration,e.duration=t.fx.off?0:"number"==typeof n?n:n in t.fx.speeds?t.fx.speeds[n]:t.fx.speeds._default,e.complete=s||i.complete,e}function s(e){return!e||"number"==typeof e||t.fx.speeds[e]?!0:"string"!=typeof e||t.effects.effect[e]?t.isFunction(e)?!0:"object"!=typeof e||e.effect?!1:!0:!0}t.extend(t.effects,{version:"1.10.3",save:function(t,e){for(var n=0;n<e.length;n++)e[n]!==null&&t.data(i+e[n],t[0].style[e[n]])},restore:function(t,n){var s,a;for(a=0;a<n.length;a++)n[a]!==null&&(s=t.data(i+n[a]),s===e&&(s=""),t.css(n[a],s))},setMode:function(t,e){return"toggle"===e&&(e=t.is(":hidden")?"show":"hide"),e},getBaseline:function(t,e){var i,n;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=t[1]/e.width}return{x:n,y:i}},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper"))return e.parent();var i={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},n=t("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),s={width:e.width(),height:e.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return e.wrap(n),(e[0]===a||t.contains(e[0],a))&&t(a).focus(),n=e.parent(),e.css("position")==="static"?(n.css({position:"relative"}),e.css({position:"relative"})):(t.extend(i,{position:e.css("position"),zIndex:e.css("z-index")}),t.each(["top","left","bottom","right"],function(t,n){i[n]=e.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(s),n.css(i).show()},removeWrapper:function(e){var i=document.activeElement;return e.parent().is(".ui-effects-wrapper")&&(e.parent().replaceWith(e),(e[0]===i||t.contains(e[0],i))&&t(i).focus()),e},setTransition:function(e,i,n,s){return s=s||{},t.each(i,function(t,i){var a=e.cssUnit(i);a[0]>0&&(s[i]=a[0]*n+a[1])}),s}}),t.fn.extend({effect:function(){function e(e){function n(){t.isFunction(a)&&a.call(s[0]),t.isFunction(e)&&e()}var s=t(this),a=i.complete,r=i.mode;(s.is(":hidden")?"hide"===r:"show"===r)?(s[r](),n()):o.call(s[0],i,n)}var i=n.apply(this,arguments),s=i.mode,a=i.queue,o=t.effects.effect[i.effect];return t.fx.off||!o?s?this[s](i.duration,i.complete):this.each(function(){i.complete&&i.complete.call(this)}):a===!1?this.each(e):this.queue(a||"fx",e)},show:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="show",this.effect.call(this,i)}}(t.fn.show),hide:function(t){return function(e){if(s(e))return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="hide",this.effect.call(this,i)}}(t.fn.hide),toggle:function(t){return function(e){if(s(e)||"boolean"==typeof e)return t.apply(this,arguments);var i=n.apply(this,arguments);return i.mode="toggle",this.effect.call(this,i)}}(t.fn.toggle),cssUnit:function(e){var i=this.css(e),n=[];return t.each(["em","px","%","pt"],function(t,e){i.indexOf(e)>0&&(n=[parseFloat(i),e])}),n}})}(),function(){var e={};t.each(["Quad","Cubic","Quart","Quint","Expo"],function(t,i){e[i]=function(e){return Math.pow(e,t+2)}}),t.extend(e,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),t.each(e,function(e,i){t.easing["easeIn"+e]=i,t.easing["easeOut"+e]=function(t){return 1-i(1-t)},t.easing["easeInOut"+e]=function(t){return.5>t?i(2*t)/2:1-i(-2*t+2)/2}})}()})(jQuery),/*!
 * jQuery UI Effects Blind 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){var e=/up|down|vertical/,i=/up|left|vertical|horizontal/;t.effects.effect.blind=function(n,s){var a,o,r,l=t(this),h=["position","top","bottom","left","right","height","width"],c=t.effects.setMode(l,n.mode||"hide"),u=n.direction||"up",d=e.test(u),p=d?"height":"width",f=d?"top":"left",m=i.test(u),g={},v="show"===c;l.parent().is(".ui-effects-wrapper")?t.effects.save(l.parent(),h):t.effects.save(l,h),l.show(),a=t.effects.createWrapper(l).css({overflow:"hidden"}),o=a[p](),r=parseFloat(a.css(f))||0,g[p]=v?o:0,m||(l.css(d?"bottom":"right",0).css(d?"top":"left","auto").css({position:"absolute"}),g[f]=v?r:o+r),v&&(a.css(p,0),m||a.css(f,r+o)),a.animate(g,{duration:n.duration,easing:n.easing,queue:!1,complete:function(){"hide"===c&&l.hide(),t.effects.restore(l,h),t.effects.removeWrapper(l),s()}})}}(jQuery),/*!
 * jQuery UI Effects Bounce 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/bounce-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.bounce=function(e,i){var n,s,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"effect"),h="hide"===l,c="show"===l,u=e.direction||"up",d=e.distance,p=e.times||5,f=2*p+(c||h?1:0),m=e.duration/f,g=e.easing,v="up"===u||"down"===u?"top":"left",b="up"===u||"left"===u,y=o.queue(),_=y.length;for((c||h)&&r.push("opacity"),t.effects.save(o,r),o.show(),t.effects.createWrapper(o),d||(d=o["top"===v?"outerHeight":"outerWidth"]()/3),c&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,b?2*-d:2*d).animate(a,m,g)),h&&(d/=Math.pow(2,p-1)),a={},a[v]=0,n=0;p>n;n++)s={},s[v]=(b?"-=":"+=")+d,o.animate(s,m,g).animate(a,m,g),d=h?2*d:d/2;h&&(s={opacity:0},s[v]=(b?"-=":"+=")+d,o.animate(s,m,g)),o.queue(function(){h&&o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}),_>1&&y.splice.apply(y,[1,0].concat(y.splice(_,f+1))),o.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Clip 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/clip-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.clip=function(e,i){var n,s,a,o=t(this),r=["position","top","bottom","left","right","height","width"],l=t.effects.setMode(o,e.mode||"hide"),h="show"===l,c=e.direction||"vertical",u="vertical"===c,d=u?"height":"width",p=u?"top":"left",f={};t.effects.save(o,r),o.show(),n=t.effects.createWrapper(o).css({overflow:"hidden"}),s=o[0].tagName==="IMG"?n:o,a=s[d](),h&&(s.css(d,0),s.css(p,a/2)),f[d]=h?a:0,f[p]=h?0:a/2,s.animate(f,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){h||o.hide(),t.effects.restore(o,r),t.effects.removeWrapper(o),i()}})}}(jQuery),/*!
 * jQuery UI Effects Drop 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/drop-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.drop=function(e,i){var n,s=t(this),a=["position","top","bottom","left","right","opacity","height","width"],o=t.effects.setMode(s,e.mode||"hide"),r="show"===o,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l?"pos":"neg",u={opacity:r?1:0};t.effects.save(s,a),s.show(),t.effects.createWrapper(s),n=e.distance||s["top"===h?"outerHeight":"outerWidth"](!0)/2,r&&s.css("opacity",0).css(h,"pos"===c?-n:n),u[h]=(r?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+n,s.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,a),t.effects.removeWrapper(s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Explode 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/explode-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.explode=function(e,i){function n(){y.push(this),y.length===u*d&&s()}function s(){p.css({visibility:"visible"}),t(y).remove(),m||p.hide(),i()}var a,o,r,l,h,c,u=e.pieces?Math.round(Math.sqrt(e.pieces)):3,d=u,p=t(this),f=t.effects.setMode(p,e.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/d),b=Math.ceil(p.outerHeight()/u),y=[];for(a=0;u>a;a++)for(l=g.top+a*b,c=a-(u-1)/2,o=0;d>o;o++)r=g.left+o*v,h=o-(d-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*b}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:b,left:r+(m?h*v:0),top:l+(m?c*b:0),opacity:m?0:1}).animate({left:r+(m?0:h*v),top:l+(m?0:c*b),opacity:m?1:0},e.duration||500,e.easing,n)}}(jQuery),/*!
 * jQuery UI Effects Fade 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fade-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.fade=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"toggle");n.animate({opacity:s},{queue:!1,duration:e.duration,easing:e.easing,complete:i})}}(jQuery),/*!
 * jQuery UI Effects Fold 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/fold-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.fold=function(e,i){var n,s,a=t(this),o=["position","top","bottom","left","right","height","width"],r=t.effects.setMode(a,e.mode||"hide"),l="show"===r,h="hide"===r,c=e.size||15,u=/([0-9]+)%/.exec(c),d=!!e.horizFirst,p=l!==d,f=p?["width","height"]:["height","width"],m=e.duration/2,g={},v={};t.effects.save(a,o),a.show(),n=t.effects.createWrapper(a).css({overflow:"hidden"}),s=p?[n.width(),n.height()]:[n.height(),n.width()],u&&(c=parseInt(u[1],10)/100*s[h?0:1]),l&&n.css(d?{height:0,width:c}:{height:c,width:0}),g[f[0]]=l?s[0]:c,v[f[1]]=l?s[1]:0,n.animate(g,m,e.easing).animate(v,m,e.easing,function(){h&&a.hide(),t.effects.restore(a,o),t.effects.removeWrapper(a),i()})}}(jQuery),/*!
 * jQuery UI Effects Highlight 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/highlight-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.highlight=function(e,i){var n=t(this),s=["backgroundImage","backgroundColor","opacity"],a=t.effects.setMode(n,e.mode||"show"),o={backgroundColor:n.css("backgroundColor")};"hide"===a&&(o.opacity=0),t.effects.save(n,s),n.show().css({backgroundImage:"none",backgroundColor:e.color||"#ffff99"}).animate(o,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===a&&n.hide(),t.effects.restore(n,s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Pulsate 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/pulsate-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.pulsate=function(e,i){var n,s=t(this),a=t.effects.setMode(s,e.mode||"show"),o="show"===a,r="hide"===a,l=o||"hide"===a,h=(e.times||5)*2+(l?1:0),c=e.duration/h,u=0,d=s.queue(),p=d.length;for((o||!s.is(":visible"))&&(s.css("opacity",0).show(),u=1),n=1;h>n;n++)s.animate({opacity:u},c,e.easing),u=1-u;s.animate({opacity:u},c,e.easing),s.queue(function(){r&&s.hide(),i()}),p>1&&d.splice.apply(d,[1,0].concat(d.splice(p,h+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Scale 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/scale-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.puff=function(e,i){var n=t(this),s=t.effects.setMode(n,e.mode||"hide"),a="hide"===s,o=parseInt(e.percent,10)||150,r=o/100,l={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};t.extend(e,{effect:"scale",queue:!1,fade:!0,mode:s,complete:i,percent:a?o:100,from:a?l:{height:l.height*r,width:l.width*r,outerHeight:l.outerHeight*r,outerWidth:l.outerWidth*r}}),n.effect(e)},t.effects.effect.scale=function(e,i){var n=t(this),s=t.extend(!0,{},e),a=t.effects.setMode(n,e.mode||"effect"),o=parseInt(e.percent,10)||(parseInt(e.percent,10)===0?0:"hide"===a?0:100),r=e.direction||"both",l=e.origin,h={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},c={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};s.effect="size",s.queue=!1,s.complete=i,"effect"!==a&&(s.origin=l||["middle","center"],s.restore=!0),s.from=e.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:h),s.to={height:h.height*c.y,width:h.width*c.x,outerHeight:h.outerHeight*c.y,outerWidth:h.outerWidth*c.x},s.fade&&("show"===a&&(s.from.opacity=0,s.to.opacity=1),"hide"===a&&(s.from.opacity=1,s.to.opacity=0)),n.effect(s)},t.effects.effect.size=function(e,i){var n,s,a,o=t(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],c=["fontSize"],u=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],d=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=t.effects.setMode(o,e.mode||"effect"),f=e.restore||"effect"!==p,m=e.scale||"both",g=e.origin||["middle","center"],v=o.css("position"),b=f?r:l,y={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),n={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},e.mode==="toggle"&&"show"===p?(o.from=e.to||y,o.to=e.from||n):(o.from=e.from||("show"===p?y:n),o.to=e.to||("hide"===p?y:n)),a={from:{y:o.from.height/n.height,x:o.from.width/n.width},to:{y:o.to.height/n.height,x:o.to.width/n.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(b=b.concat(u),o.from=t.effects.setTransition(o,u,a.from.y,o.from),o.to=t.effects.setTransition(o,u,a.to.y,o.to)),a.from.x!==a.to.x&&(b=b.concat(d),o.from=t.effects.setTransition(o,d,a.from.x,o.from),o.to=t.effects.setTransition(o,d,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(b=b.concat(c).concat(h),o.from=t.effects.setTransition(o,c,a.from.y,o.from),o.to=t.effects.setTransition(o,c,a.to.y,o.to)),t.effects.save(o,b),o.show(),t.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(s=t.effects.getBaseline(g,n),o.from.top=(n.outerHeight-o.outerHeight())*s.y,o.from.left=(n.outerWidth-o.outerWidth())*s.x,o.to.top=(n.outerHeight-o.to.outerHeight)*s.y,o.to.left=(n.outerWidth-o.to.outerWidth)*s.x),o.css(o.from),("content"===m||"both"===m)&&(u=u.concat(["marginTop","marginBottom"]).concat(c),d=d.concat(["marginLeft","marginRight"]),h=r.concat(u).concat(d),o.find("*[width]").each(function(){var i=t(this),n={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&t.effects.save(i,h),i.from={height:n.height*a.from.y,width:n.width*a.from.x,outerHeight:n.outerHeight*a.from.y,outerWidth:n.outerWidth*a.from.x},i.to={height:n.height*a.to.y,width:n.width*a.to.x,outerHeight:n.height*a.to.y,outerWidth:n.width*a.to.x},a.from.y!==a.to.y&&(i.from=t.effects.setTransition(i,u,a.from.y,i.from),i.to=t.effects.setTransition(i,u,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=t.effects.setTransition(i,d,a.from.x,i.from),i.to=t.effects.setTransition(i,d,a.to.x,i.to)),i.css(i.from),i.animate(i.to,e.duration,e.easing,function(){f&&t.effects.restore(i,h)})})),o.animate(o.to,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){o.to.opacity===0&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),t.effects.restore(o,b),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):t.each(["top","left"],function(t,e){o.css(e,function(e,i){var n=parseInt(i,10),s=t?o.to.left:o.to.top;return"auto"===i?s+"px":n+s+"px"})})),t.effects.removeWrapper(o),i()}})}}(jQuery),/*!
 * jQuery UI Effects Shake 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/shake-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.shake=function(e,i){var n,s=t(this),a=["position","top","bottom","left","right","height","width"],o=t.effects.setMode(s,e.mode||"effect"),r=e.direction||"left",l=e.distance||20,h=e.times||3,c=2*h+1,u=Math.round(e.duration/c),d="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=s.queue(),b=v.length;for(t.effects.save(s,a),s.show(),t.effects.createWrapper(s),f[d]=(p?"-=":"+=")+l,m[d]=(p?"+=":"-=")+2*l,g[d]=(p?"-=":"+=")+2*l,s.animate(f,u,e.easing),n=1;h>n;n++)s.animate(m,u,e.easing).animate(g,u,e.easing);s.animate(m,u,e.easing).animate(f,u/2,e.easing).queue(function(){"hide"===o&&s.hide(),t.effects.restore(s,a),t.effects.removeWrapper(s),i()}),b>1&&v.splice.apply(v,[1,0].concat(v.splice(b,c+1))),s.dequeue()}}(jQuery),/*!
 * jQuery UI Effects Slide 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/slide-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.slide=function(e,i){var n,s=t(this),a=["position","top","bottom","left","right","width","height"],o=t.effects.setMode(s,e.mode||"show"),r="show"===o,l=e.direction||"left",h="up"===l||"down"===l?"top":"left",c="up"===l||"left"===l,u={};t.effects.save(s,a),s.show(),n=e.distance||s["top"===h?"outerHeight":"outerWidth"](!0),t.effects.createWrapper(s).css({overflow:"hidden"}),r&&s.css(h,c?isNaN(n)?"-"+n:-n:n),u[h]=(r?c?"+=":"-=":c?"-=":"+=")+n,s.animate(u,{queue:!1,duration:e.duration,easing:e.easing,complete:function(){"hide"===o&&s.hide(),t.effects.restore(s,a),t.effects.removeWrapper(s),i()}})}}(jQuery),/*!
 * jQuery UI Effects Transfer 1.10.3
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/transfer-effect/
 *
 * Depends:
 *	jquery.ui.effect.js
 */
function(t){t.effects.effect.transfer=function(e,i){var n=t(this),s=t(e.to),a=s.css("position")==="fixed",o=t("body"),r=a?o.scrollTop():0,l=a?o.scrollLeft():0,h=s.offset(),c={top:h.top-r,left:h.left-l,height:s.innerHeight(),width:s.innerWidth()},u=n.offset(),d=t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({top:u.top-r,left:u.left-l,height:n.innerHeight(),width:n.innerWidth(),position:a?"fixed":"absolute"}).animate(c,e.duration,e.easing,function(){d.remove(),i()})}}(jQuery);