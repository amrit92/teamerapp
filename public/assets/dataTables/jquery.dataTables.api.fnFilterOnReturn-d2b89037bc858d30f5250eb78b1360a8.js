jQuery.fn.dataTableExt.oApi.fnFilterOnReturn=function(){var t=this;return this.each(function(e){$.fn.dataTableExt.iApiIndex=e;var i=$("input",t.fnSettings().aanFeatures.f);return i.unbind("keyup").bind("keypress",function(n){n.which==13&&($.fn.dataTableExt.iApiIndex=e,t.fnFilter(i.val()))}),this}),this};