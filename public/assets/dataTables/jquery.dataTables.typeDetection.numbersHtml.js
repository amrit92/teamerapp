jQuery.fn.dataTableExt.aTypes.unshift(function(t){t=typeof t.replace=="function"?t.replace(/<.*?>/g,""):t,t=$.trim(t);var e,i="0123456789-",n="0123456789.",s=!1;if(e=t.charAt(0),i.indexOf(e)==-1)return null;for(var o=1;o<t.length;o++){if(e=t.charAt(o),n.indexOf(e)==-1)return null;if("."==e){if(s)return null;s=!0}}return"num-html"});