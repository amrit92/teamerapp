jQuery.fn.dataTableExt.oSort["num-html-asc"]=function(t,e){var i=t.replace(/<.*?>/g,""),n=e.replace(/<.*?>/g,"");return i=parseFloat(i),n=parseFloat(n),n>i?-1:i>n?1:0},jQuery.fn.dataTableExt.oSort["num-html-desc"]=function(t,e){var i=t.replace(/<.*?>/g,""),n=e.replace(/<.*?>/g,"");return i=parseFloat(i),n=parseFloat(n),n>i?1:i>n?-1:0};