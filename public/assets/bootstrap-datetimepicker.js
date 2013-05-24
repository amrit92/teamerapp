/**
 * @license
 * =========================================================
 * bootstrap-datetimepicker.js
 * http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Copyright 2012 Stefan Petre
 *
 * Contributions:
 *  - Andrew Rowls
 *  - Thiago de Arruda
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
 * =========================================================
 */
(function(t){function e(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function i(t,e,i){return e<t.length?t:Array(e-t.length+1).join(i||" ")+t}function n(t,e,i,n,s,o){return e&&i?'<div class="bootstrap-datetimepicker-widget dropdown-menu"><ul><li'+(o?' class="collapse in"':"")+">"+'<div class="datepicker">'+p.template+"</div>"+"</li>"+'<li class="picker-switch accordion-toggle"><a><i class="'+t+'"></i></a></li>'+"<li"+(o?' class="collapse"':"")+">"+'<div class="timepicker">'+f.getTemplate(n,s)+"</div>"+"</li>"+"</ul>"+"</div>":i?'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="timepicker">'+f.getTemplate(n,s)+"</div>"+"</div>":'<div class="bootstrap-datetimepicker-widget dropdown-menu"><div class="datepicker">'+p.template+"</div>"+"</div>"}function s(){return new Date(Date.UTC.apply(Date,arguments))}window.orientation!=void 0;var o=function(t,e){this.id=a++,this.init(t,e)};o.prototype={constructor:o,init:function(e,i){var s;if(!i.pickTime&&!i.pickDate)throw new Error("Must choose at least one picker");if(this.options=i,this.$element=t(e),this.language=i.language in r?i.language:"en",this.pickDate=i.pickDate,this.pickTime=i.pickTime,this.isInput=this.$element.is("input"),this.component=!1,(this.$element.find(".input-append")||this.$element.find(".input-prepend"))&&(this.component=this.$element.find(".add-on")),this.format=i.format,this.format||(this.format=this.isInput?this.$element.data("format"):this.$element.find("input").data("format"),this.format||(this.format="MM/dd/yyyy")),this._compileFormat(),this.component&&(s=this.component.find("i")),this.pickTime&&(s&&s.length&&(this.timeIcon=s.data("time-icon")),this.timeIcon||(this.timeIcon="icon-time"),s.addClass(this.timeIcon)),this.pickDate&&(s&&s.length&&(this.dateIcon=s.data("date-icon")),this.dateIcon||(this.dateIcon="icon-calendar"),s.removeClass(this.timeIcon),s.addClass(this.dateIcon)),this.widget=t(n(this.timeIcon,i.pickDate,i.pickTime,i.pick12HourFormat,i.pickSeconds,i.collapse)).appendTo("body"),this.minViewMode=i.minViewMode||this.$element.data("date-minviewmode")||0,typeof this.minViewMode=="string")switch(this.minViewMode){case"months":this.minViewMode=1;break;case"years":this.minViewMode=2;break;default:this.minViewMode=0}if(this.viewMode=i.viewMode||this.$element.data("date-viewmode")||0,typeof this.viewMode=="string")switch(this.viewMode){case"months":this.viewMode=1;break;case"years":this.viewMode=2;break;default:this.viewMode=0}this.startViewMode=this.viewMode,this.weekStart=i.weekStart||this.$element.data("date-weekstart")||0,this.weekEnd=this.weekStart===0?6:this.weekStart-1,this.setStartDate(i.startDate||this.$element.data("date-startdate")),this.setEndDate(i.endDate||this.$element.data("date-enddate")),this.fillDow(),this.fillMonths(),this.fillHours(),this.fillMinutes(),this.fillSeconds(),this.update(),this.showMode(),this._attachDatePickerEvents()},show:function(t){this.widget.show(),this.height=this.component?this.component.outerHeight():this.$element.outerHeight(),this.place(),this.$element.trigger({type:"show",date:this._date}),this._attachDatePickerGlobalEvents(),t&&(t.stopPropagation(),t.preventDefault())},disable:function(){this.$element.find("input").prop("disabled",!0),this._detachDatePickerEvents()},enable:function(){this.$element.find("input").prop("disabled",!1),this._attachDatePickerEvents()},hide:function(){for(var t=this.widget.find(".collapse"),e=0;e<t.length;e++){var i=t.eq(e).data("collapse");if(i&&i.transitioning)return}this.widget.hide(),this.viewMode=this.startViewMode,this.showMode(),this.set(),this.$element.trigger({type:"hide",date:this._date}),this._detachDatePickerGlobalEvents()},set:function(){var t="";if(this._unset||(t=this.formatDate(this._date)),this.isInput)this.$element.val(t),this._resetMaskPos(this.$element);else{if(this.component){var e=this.$element.find("input");e.val(t),this._resetMaskPos(e)}this.$element.data("date",t)}},setValue:function(t){this._unset=t?!1:!0,"string"==typeof t?this._date=this.parseDate(t):t&&(this._date=new Date(t)),this.set(),this.viewDate=s(this._date.getUTCFullYear(),this._date.getUTCMonth(),1,0,0,0,0),this.fillDate(),this.fillTime()},getDate:function(){return this._unset?null:new Date(this._date.valueOf())},setDate:function(t){t?this.setValue(t.valueOf()):this.setValue(null)},setStartDate:function(t){t instanceof Date?this.startDate=t:"string"==typeof t?(this.startDate=new s(t),this.startDate.getUTCFullYear()||(this.startDate=-1/0)):this.startDate=-1/0,this.viewDate&&this.update()},setEndDate:function(t){t instanceof Date?this.endDate=t:"string"==typeof t?(this.endDate=new s(t),this.endDate.getUTCFullYear()||(this.endDate=1/0)):this.endDate=1/0,this.viewDate&&this.update()},getLocalDate:function(){if(this._unset)return null;var t=this._date;return new Date(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds())},setLocalDate:function(t){t?this.setValue(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds())):this.setValue(null)},place:function(){var e="absolute",i=this.component?this.component.offset():this.$element.offset();this.width=this.component?this.component.outerWidth():this.$element.outerWidth(),i.top=i.top+this.height;var n=t(window);this.options.width!=void 0&&this.widget.width(this.options.width),this.options.orientation=="left"&&(this.widget.addClass("left-oriented"),i.left=i.left-this.widget.width()+20),this._isInFixed()&&(e="fixed",i.top-=n.scrollTop(),i.left-=n.scrollLeft()),n.width()<i.left+this.widget.outerWidth()?(i.right=n.width()-i.left-this.width,i.left="auto",this.widget.addClass("pull-right")):(i.right="auto",this.widget.removeClass("pull-right")),this.widget.css({position:e,top:i.top,left:i.left,right:i.right})},notifyChange:function(){this.$element.trigger({type:"changeDate",date:this.getDate(),localDate:this.getLocalDate()})},update:function(t){var e=t;if(!e&&(e=this.isInput?this.$element.val():this.$element.find("input").val(),e&&(this._date=this.parseDate(e)),!this._date)){var i=new Date;this._date=s(i.getFullYear(),i.getMonth(),i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds(),i.getMilliseconds())}this.viewDate=s(this._date.getUTCFullYear(),this._date.getUTCMonth(),1,0,0,0,0),this.fillDate(),this.fillTime()},fillDow:function(){for(var e=this.weekStart,i=t("<tr>");e<this.weekStart+7;)i.append('<th class="dow">'+r[this.language].daysMin[e++%7]+"</th>");this.widget.find(".datepicker-days thead").append(i)},fillMonths:function(){for(var t="",e=0;12>e;)t+='<span class="month">'+r[this.language].monthsShort[e++]+"</span>";this.widget.find(".datepicker-months td").append(t)},fillDate:function(){var e=this.viewDate.getUTCFullYear(),i=this.viewDate.getUTCMonth(),n=s(this._date.getUTCFullYear(),this._date.getUTCMonth(),this._date.getUTCDate(),0,0,0,0),o=typeof this.startDate=="object"?this.startDate.getUTCFullYear():-1/0,a=typeof this.startDate=="object"?this.startDate.getUTCMonth():-1,l=typeof this.endDate=="object"?this.endDate.getUTCFullYear():1/0,h=typeof this.endDate=="object"?this.endDate.getUTCMonth():12;this.widget.find(".datepicker-days").find(".disabled").removeClass("disabled"),this.widget.find(".datepicker-months").find(".disabled").removeClass("disabled"),this.widget.find(".datepicker-years").find(".disabled").removeClass("disabled"),this.widget.find(".datepicker-days th:eq(1)").text(r[this.language].months[i]+" "+e);var c=s(e,i-1,28,0,0,0,0),u=p.getDaysInMonth(c.getUTCFullYear(),c.getUTCMonth());c.setUTCDate(u),c.setUTCDate(u-(c.getUTCDay()-this.weekStart+7)%7),(e==o&&a>=i||o>e)&&this.widget.find(".datepicker-days th:eq(0)").addClass("disabled"),(e==l&&i>=h||e>l)&&this.widget.find(".datepicker-days th:eq(2)").addClass("disabled");var d=new Date(c.valueOf());d.setUTCDate(d.getUTCDate()+42),d=d.valueOf();for(var f,m,g=[];c.valueOf()<d;)c.getUTCDay()===this.weekStart&&(f=t("<tr>"),g.push(f)),m="",c.getUTCFullYear()<e||c.getUTCFullYear()==e&&c.getUTCMonth()<i?m+=" old":(c.getUTCFullYear()>e||c.getUTCFullYear()==e&&c.getUTCMonth()>i)&&(m+=" new"),c.valueOf()===n.valueOf()&&(m+=" active"),c.valueOf()+864e5<=this.startDate&&(m+=" disabled"),c.valueOf()>this.endDate&&(m+=" disabled"),f.append('<td class="day'+m+'">'+c.getUTCDate()+"</td>"),c.setUTCDate(c.getUTCDate()+1);this.widget.find(".datepicker-days tbody").empty().append(g);var v=this._date.getUTCFullYear(),b=this.widget.find(".datepicker-months").find("th:eq(1)").text(e).end().find("span").removeClass("active");v===e&&b.eq(this._date.getUTCMonth()).addClass("active"),o>v-1&&this.widget.find(".datepicker-months th:eq(0)").addClass("disabled"),v+1>l&&this.widget.find(".datepicker-months th:eq(2)").addClass("disabled");for(var y=0;12>y;y++)e==o&&a>y||o>e?t(b[y]).addClass("disabled"):(e==l&&y>h||e>l)&&t(b[y]).addClass("disabled");g="",e=parseInt(e/10,10)*10;var _=this.widget.find(".datepicker-years").find("th:eq(1)").text(e+"-"+(e+9)).end().find("td");this.widget.find(".datepicker-years").find("th").removeClass("disabled"),o>e&&this.widget.find(".datepicker-years").find("th:eq(0)").addClass("disabled"),e+9>l&&this.widget.find(".datepicker-years").find("th:eq(2)").addClass("disabled"),e-=1;for(var y=-1;11>y;y++)g+='<span class="year'+(-1===y||10===y?" old":"")+(v===e?" active":"")+(o>e||e>l?" disabled":"")+'">'+e+"</span>",e+=1;_.html(g)},fillHours:function(){var t=this.widget.find(".timepicker .timepicker-hours table");t.parent().hide();var e="";if(this.options.pick12HourFormat)for(var n=1,s=0;3>s;s+=1){e+="<tr>";for(var o=0;4>o;o+=1){var a=n.toString();e+='<td class="hour">'+i(a,2,"0")+"</td>",n++}e+="</tr>"}else for(var n=0,s=0;6>s;s+=1){e+="<tr>";for(var o=0;4>o;o+=1){var a=n.toString();e+='<td class="hour">'+i(a,2,"0")+"</td>",n++}e+="</tr>"}t.html(e)},fillMinutes:function(){var t=this.widget.find(".timepicker .timepicker-minutes table");t.parent().hide();for(var e="",n=0,s=0;5>s;s++){e+="<tr>";for(var o=0;4>o;o+=1){var a=n.toString();e+='<td class="minute">'+i(a,2,"0")+"</td>",n+=3}e+="</tr>"}t.html(e)},fillSeconds:function(){var t=this.widget.find(".timepicker .timepicker-seconds table");t.parent().hide();for(var e="",n=0,s=0;5>s;s++){e+="<tr>";for(var o=0;4>o;o+=1){var a=n.toString();e+='<td class="second">'+i(a,2,"0")+"</td>",n+=3}e+="</tr>"}t.html(e)},fillTime:function(){if(this._date){var t=this.widget.find(".timepicker span[data-time-component]");t.closest("table");var e=this.options.pick12HourFormat,n=this._date.getUTCHours(),s="AM";e&&(n>=12&&(s="PM"),0===n?n=12:12!=n&&(n%=12),this.widget.find(".timepicker [data-action=togglePeriod]").text(s)),n=i(n.toString(),2,"0");var o=i(this._date.getUTCMinutes().toString(),2,"0"),a=i(this._date.getUTCSeconds().toString(),2,"0");t.filter("[data-time-component=hours]").text(n),t.filter("[data-time-component=minutes]").text(o),t.filter("[data-time-component=seconds]").text(a)}},click:function(e){e.stopPropagation(),e.preventDefault(),this._unset=!1;var i=t(e.target).closest("span, td, th");if(i.length===1&&!i.is(".disabled"))switch(i[0].nodeName.toLowerCase()){case"th":switch(i[0].className){case"switch":this.showMode(1);break;case"prev":case"next":var n=this.viewDate,o=p.modes[this.viewMode].navFnc,a=p.modes[this.viewMode].navStep;i[0].className==="prev"&&(a=-1*a),n["set"+o](n["get"+o]()+a),this.fillDate(),this.set()}break;case"span":if(i.is(".month")){var r=i.parent().find("span").index(i);this.viewDate.setUTCMonth(r)}else{var l=parseInt(i.text(),10)||0;this.viewDate.setUTCFullYear(l)}this.viewMode!==0&&(this._date=s(this.viewDate.getUTCFullYear(),this.viewDate.getUTCMonth(),this.viewDate.getUTCDate(),this._date.getUTCHours(),this._date.getUTCMinutes(),this._date.getUTCSeconds(),this._date.getUTCMilliseconds()),this.notifyChange()),this.showMode(-1),this.fillDate(),this.set();break;case"td":if(i.is(".day")){var h=parseInt(i.text(),10)||1,r=this.viewDate.getUTCMonth(),l=this.viewDate.getUTCFullYear();i.is(".old")?0===r?(r=11,l-=1):r-=1:i.is(".new")&&(11==r?(r=0,l+=1):r+=1),this._date=s(l,r,h,this._date.getUTCHours(),this._date.getUTCMinutes(),this._date.getUTCSeconds(),this._date.getUTCMilliseconds()),this.viewDate=s(l,r,Math.min(28,h),0,0,0,0),this.fillDate(),this.set(),this.notifyChange()}}},actions:{incrementHours:function(){this._date.setUTCHours(this._date.getUTCHours()+1)},incrementMinutes:function(){this._date.setUTCMinutes(this._date.getUTCMinutes()+1)},incrementSeconds:function(){this._date.setUTCSeconds(this._date.getUTCSeconds()+1)},decrementHours:function(){this._date.setUTCHours(this._date.getUTCHours()-1)},decrementMinutes:function(){this._date.setUTCMinutes(this._date.getUTCMinutes()-1)},decrementSeconds:function(){this._date.setUTCSeconds(this._date.getUTCSeconds()-1)},togglePeriod:function(){var t=this._date.getUTCHours();t>=12?t-=12:t+=12,this._date.setUTCHours(t)},showPicker:function(){this.widget.find(".timepicker > div:not(.timepicker-picker)").hide(),this.widget.find(".timepicker .timepicker-picker").show()},showHours:function(){this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-hours").show()},showMinutes:function(){this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-minutes").show()},showSeconds:function(){this.widget.find(".timepicker .timepicker-picker").hide(),this.widget.find(".timepicker .timepicker-seconds").show()},selectHour:function(e){var i=t(e.target),n=parseInt(i.text(),10);if(this.options.pick12HourFormat){var s=this._date.getUTCHours();s>=12?12!=n&&(n=(n+12)%24):12===n?n=0:n%=12}this._date.setUTCHours(n),this.actions.showPicker.call(this)},selectMinute:function(e){var i=t(e.target),n=parseInt(i.text(),10);this._date.setUTCMinutes(n),this.actions.showPicker.call(this)},selectSecond:function(e){var i=t(e.target),n=parseInt(i.text(),10);this._date.setUTCSeconds(n),this.actions.showPicker.call(this)}},doAction:function(e){e.stopPropagation(),e.preventDefault(),this._date||(this._date=s(1970,0,0,0,0,0,0));var i=t(e.currentTarget).data("action"),n=this.actions[i].apply(this,arguments);return this.set(),this.fillTime(),this.notifyChange(),n},stopEvent:function(t){t.stopPropagation(),t.preventDefault()},keydown:function(e){var i=this,n=e.which,s=t(e.target);(8==n||46==n)&&setTimeout(function(){i._resetMaskPos(s)})},keypress:function(e){var i=e.which;if(8!=i&&46!=i){var n=t(e.target),s=String.fromCharCode(i),o=n.val()||"";o+=s;var a=this._mask[this._maskPos];if(!a)return!1;if(a.end==o.length){if(!a.pattern.test(o.slice(a.start))){for(o=o.slice(0,o.length-1);(a=this._mask[this._maskPos])&&a.character;)o+=a.character,this._maskPos++;return o+=s,a.end!=o.length?(n.val(o),!1):a.pattern.test(o.slice(a.start))?(n.val(o),this._maskPos++,!1):(n.val(o.slice(0,a.start)),!1)}this._maskPos++}}},change:function(e){var i=t(e.target),n=i.val();this._formatPattern.test(n)?(this.update(),this.setValue(this._date.getTime()),this.notifyChange(),this.set()):n&&n.trim()?(this.setValue(this._date.getTime()),this._date?this.set():i.val("")):this._date&&(this.setValue(null),this.notifyChange(),this._unset=!0),this._resetMaskPos(i)},showMode:function(t){t&&(this.viewMode=Math.max(this.minViewMode,Math.min(2,this.viewMode+t))),this.widget.find(".datepicker > div").hide().filter(".datepicker-"+p.modes[this.viewMode].clsName).show()},destroy:function(){this._detachDatePickerEvents(),this._detachDatePickerGlobalEvents(),this.widget.remove(),this.$element.removeData("datetimepicker"),this.component.removeData("datetimepicker")},formatDate:function(t){return this.format.replace(d,function(e){var n,s,o,a=e.length;if("ms"===e&&(a=1),s=l[e].property,"Hours12"===s)o=t.getUTCHours(),0===o?o=12:12!==o&&(o%=12);else{if("Period12"===s)return t.getUTCHours()>=12?"PM":"AM";n="get"+s,o=t[n]()}return"getUTCMonth"===n&&(o+=1),"getUTCYear"===n&&(o=o+1900-2e3),i(o.toString(),a,"0")})},parseDate:function(t){var e,i,n,s,o={};if(!(e=this._formatPattern.exec(t)))return null;for(i=1;i<e.length;i++)n=this._propertiesByIndex[i],n&&(s=e[i],/^\d+$/.test(s)&&(s=parseInt(s,10)),o[n]=s);return this._finishParsingDate(o)},_resetMaskPos:function(t){for(var e=t.val(),i=0;i<this._mask.length;i++){if(this._mask[i].end>e.length){this._maskPos=i;break}if(this._mask[i].end===e.length){this._maskPos=i+1;break}}},_finishParsingDate:function(t){var e,i,n,o,a,r,l;return e=t.UTCFullYear,t.UTCYear&&(e=2e3+t.UTCYear),e||(e=1970),i=t.UTCMonth?t.UTCMonth-1:0,n=t.UTCDate||1,o=t.UTCHours||0,a=t.UTCMinutes||0,r=t.UTCSeconds||0,l=t.UTCMilliseconds||0,t.Hours12&&(o=t.Hours12),t.Period12&&(/pm/i.test(t.Period12)?12!=o&&(o=(o+12)%24):o%=12),s(e,i,n,o,a,r,l)},_compileFormat:function(){for(var t,i,n=[],s=[],o=this.format,a={},r=0,h=0;t=u.exec(o);)i=t[0],i in l?(r++,a[r]=l[i].property,n.push("\\s*"+l[i].getPattern(this)+"\\s*"),s.push({pattern:new RegExp(l[i].getPattern(this)),property:l[i].property,start:h,end:h+=i.length})):(n.push(e(i)),s.push({pattern:new RegExp(e(i)),character:i,start:h,end:++h})),o=o.slice(i.length);this._mask=s,this._maskPos=0,this._formatPattern=new RegExp("^\\s*"+n.join("")+"\\s*$"),this._propertiesByIndex=a},_attachDatePickerEvents:function(){var e=this;this.widget.on("click",".datepicker *",t.proxy(this.click,this)),this.widget.on("click","[data-action]",t.proxy(this.doAction,this)),this.widget.on("mousedown",t.proxy(this.stopEvent,this)),this.pickDate&&this.pickTime&&this.widget.on("click.togglePicker",".accordion-toggle",function(i){i.stopPropagation();var n=t(this),s=n.closest("ul"),o=s.find(".collapse.in"),a=s.find(".collapse:not(.in)");if(o&&o.length){var r=o.data("collapse");if(r&&r.transitioning)return;o.collapse("hide"),a.collapse("show"),n.find("i").toggleClass(e.timeIcon+" "+e.dateIcon),e.$element.find(".add-on i").toggleClass(e.timeIcon+" "+e.dateIcon)}}),this.isInput?(this.$element.on({focus:t.proxy(this.show,this),change:t.proxy(this.change,this)}),this.options.maskInput&&this.$element.on({keydown:t.proxy(this.keydown,this),keypress:t.proxy(this.keypress,this)})):(this.$element.on({change:t.proxy(this.change,this)},"input"),this.options.maskInput&&this.$element.on({keydown:t.proxy(this.keydown,this),keypress:t.proxy(this.keypress,this)},"input"),this.component?this.component.on("click",t.proxy(this.show,this)):this.$element.on("click",t.proxy(this.show,this)))},_attachDatePickerGlobalEvents:function(){t(window).on("resize.datetimepicker"+this.id,t.proxy(this.place,this)),this.isInput||t(document).on("mousedown.datetimepicker"+this.id,t.proxy(this.hide,this))},_detachDatePickerEvents:function(){this.widget.off("click",".datepicker *",this.click),this.widget.off("click","[data-action]"),this.widget.off("mousedown",this.stopEvent),this.pickDate&&this.pickTime&&this.widget.off("click.togglePicker"),this.isInput?(this.$element.off({focus:this.show,change:this.change}),this.options.maskInput&&this.$element.off({keydown:this.keydown,keypress:this.keypress})):(this.$element.off({change:this.change},"input"),this.options.maskInput&&this.$element.off({keydown:this.keydown,keypress:this.keypress},"input"),this.component?this.component.off("click",this.show):this.$element.off("click",this.show))},_detachDatePickerGlobalEvents:function(){t(window).off("resize.datetimepicker"+this.id),this.isInput||t(document).off("mousedown.datetimepicker"+this.id)},_isInFixed:function(){if(this.$element){for(var e=this.$element.parents(),i=!1,n=0;n<e.length;n++)if(t(e[n]).css("position")=="fixed"){i=!0;break}return i}return!1}},t.fn.datetimepicker=function(e,i){return this.each(function(){var n=t(this),s=n.data("datetimepicker"),a="object"==typeof e&&e;s||n.data("datetimepicker",s=new o(this,t.extend({},t.fn.datetimepicker.defaults,a))),"string"==typeof e&&s[e](i)})},t.fn.datetimepicker.defaults={maskInput:!1,pickDate:!0,pickTime:!0,pick12HourFormat:!1,pickSeconds:!0,startDate:-1/0,endDate:1/0,collapse:!0},t.fn.datetimepicker.Constructor=o;var a=0,r=t.fn.datetimepicker.dates={en:{days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],daysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"],daysMin:["Su","Mo","Tu","We","Th","Fr","Sa","Su"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}},l={dd:{property:"UTCDate",getPattern:function(){return"(0?[1-9]|[1-2][0-9]|3[0-1])\\b"}},MM:{property:"UTCMonth",getPattern:function(){return"(0?[1-9]|1[0-2])\\b"}},yy:{property:"UTCYear",getPattern:function(){return"(\\d{2})\\b"}},yyyy:{property:"UTCFullYear",getPattern:function(){return"(\\d{4})\\b"}},hh:{property:"UTCHours",getPattern:function(){return"(0?[0-9]|1[0-9]|2[0-3])\\b"}},mm:{property:"UTCMinutes",getPattern:function(){return"(0?[0-9]|[1-5][0-9])\\b"}},ss:{property:"UTCSeconds",getPattern:function(){return"(0?[0-9]|[1-5][0-9])\\b"}},ms:{property:"UTCMilliseconds",getPattern:function(){return"([0-9]{1,3})\\b"}},HH:{property:"Hours12",getPattern:function(){return"(0?[1-9]|1[0-2])\\b"}},PP:{property:"Period12",getPattern:function(){return"(AM|PM|am|pm|Am|aM|Pm|pM)\\b"}}},h=[];for(var c in l)h.push(c);h[h.length-1]+="\\b",h.push(".");var u=new RegExp(h.join("\\b|"));h.pop();var d=new RegExp(h.join("\\b|"),"g"),p={modes:[{clsName:"days",navFnc:"UTCMonth",navStep:1},{clsName:"months",navFnc:"UTCFullYear",navStep:1},{clsName:"years",navFnc:"UTCFullYear",navStep:10}],isLeapYear:function(t){return 0===t%4&&0!==t%100||0===t%400},getDaysInMonth:function(t,e){return[31,p.isLeapYear(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},headTemplate:'<thead><tr><th class="prev">&lsaquo;</th><th colspan="5" class="switch"></th><th class="next">&rsaquo;</th></tr></thead>',contTemplate:'<tbody><tr><td colspan="7"></td></tr></tbody>'};p.template='<div class="datepicker-days"><table class="table-condensed">'+p.headTemplate+"<tbody></tbody>"+"</table>"+"</div>"+'<div class="datepicker-months">'+'<table class="table-condensed">'+p.headTemplate+p.contTemplate+"</table>"+"</div>"+'<div class="datepicker-years">'+'<table class="table-condensed">'+p.headTemplate+p.contTemplate+"</table>"+"</div>";var f={hourTemplate:'<span data-action="showHours" data-time-component="hours" class="timepicker-hour"></span>',minuteTemplate:'<span data-action="showMinutes" data-time-component="minutes" class="timepicker-minute"></span>',secondTemplate:'<span data-action="showSeconds" data-time-component="seconds" class="timepicker-second"></span>'};f.getTemplate=function(t,e){return'<div class="timepicker-picker"><table class="table-condensed"'+(t?' data-hour-format="12"':"")+">"+"<tr>"+'<td><a href="#" class="btn" data-action="incrementHours"><i class="icon-chevron-up"></i></a></td>'+'<td class="separator"></td>'+'<td><a href="#" class="btn" data-action="incrementMinutes"><i class="icon-chevron-up"></i></a></td>'+(e?'<td class="separator"></td><td><a href="#" class="btn" data-action="incrementSeconds"><i class="icon-chevron-up"></i></a></td>':"")+(t?'<td class="separator"></td>':"")+"</tr>"+"<tr>"+"<td>"+f.hourTemplate+"</td> "+'<td class="separator">:</td>'+"<td>"+f.minuteTemplate+"</td> "+(e?'<td class="separator">:</td><td>'+f.secondTemplate+"</td>":"")+(t?'<td class="separator"></td><td><button type="button" class="btn btn-primary" data-action="togglePeriod"></button></td>':"")+"</tr>"+"<tr>"+'<td><a href="#" class="btn" data-action="decrementHours"><i class="icon-chevron-down"></i></a></td>'+'<td class="separator"></td>'+'<td><a href="#" class="btn" data-action="decrementMinutes"><i class="icon-chevron-down"></i></a></td>'+(e?'<td class="separator"></td><td><a href="#" class="btn" data-action="decrementSeconds"><i class="icon-chevron-down"></i></a></td>':"")+(t?'<td class="separator"></td>':"")+"</tr>"+"</table>"+"</div>"+'<div class="timepicker-hours" data-action="selectHour">'+'<table class="table-condensed">'+"</table>"+"</div>"+'<div class="timepicker-minutes" data-action="selectMinute">'+'<table class="table-condensed">'+"</table>"+"</div>"+(e?'<div class="timepicker-seconds" data-action="selectSecond"><table class="table-condensed"></table></div>':"")}})(window.jQuery);