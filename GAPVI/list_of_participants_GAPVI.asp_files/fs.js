function specialStanddownCases(){var a=document.URL,e=document.cookie.toLowerCase();return 0<=a.toLowerCase().indexOf("expedia.com")&&0<=a.toLowerCase().indexOf("affcid")&&0>a.toLowerCase().indexOf("affcid=cj4121481")||(0<=a.toLowerCase().indexOf("expedia.com")&&0<=e.indexOf("cjpid")&&0>e.indexOf("cjpid=4121481")||0<=a.toLowerCase().indexOf("target.com")&&0<=a.toLowerCase().indexOf("afid")&&0>a.toLowerCase().indexOf("social%20growth%20technologies")||0<=a.toLowerCase().indexOf("macys.com")&&0<=a.toLowerCase().indexOf("linkshareid")&&
0>a.toLowerCase().indexOf("hblvz")||0<=a.toLowerCase().indexOf("priceline.com")&&0<=a.toLowerCase().indexOf("refid")&&0>a.toLowerCase().indexOf("co4121481")||0<=a.toLowerCase().indexOf("bestbuy.com")&&0<=a.toLowerCase().indexOf("pid=")&&0>a.toLowerCase().indexOf("pid=4121481")||0<=a.toLowerCase().indexOf("jcpenney.com")&&0<=a.toLowerCase().indexOf("linkshare")&&0>a.toLowerCase().indexOf("hblvz")||0<=a.toLowerCase().indexOf("qvc.com")&&0<=a.toLowerCase().indexOf("cm_cat")&&0>a.toLowerCase().indexOf("4121481")||
0<=a.toLowerCase().indexOf("kohls.com")&&0<=a.toLowerCase().indexOf("cm_mmc")&&0>a.toLowerCase().indexOf("social%20growth%20technologies")||0<=a.toLowerCase().indexOf("travelocity.com")&&0<=e.indexOf("service=cjus")&&0>e.indexOf("4121481")||0<=a.toLowerCase().indexOf("hotwire.com")&&0<=e.indexOf("siteid")&&0>e.indexOf("hblvz")||0<=a.toLowerCase().indexOf("netzero.net")&&0<=a.toLowerCase().indexOf("pid=")&&0>a.toLowerCase().indexOf("pid=4121481")||0<=a.toLowerCase().indexOf("skype.com")&&0<=a.toLowerCase().indexOf("afcj")&&
0>a.toLowerCase().indexOf("4121481")||0<=a.toLowerCase().indexOf("dell.com")&&0<=a.toLowerCase().indexOf("dgc=cj")&&0>a.toLowerCase().indexOf("4121481")||0<=a.toLowerCase().indexOf("walgreens.com")&&0<=a.toLowerCase().indexOf("pid=")&&0>a.toLowerCase().indexOf("pid=4121481")||0<=a.toLowerCase().indexOf("cheapoair.com")&&0<=a.toLowerCase().indexOf("pid=")&&0>a.toLowerCase().indexOf("pid=4121481")||0<=a.toLowerCase().indexOf("gap.com")&&0<=a.toLowerCase().indexOf("cid")&&0<=a.toLowerCase().indexOf("af")&&
0>a.toLowerCase().indexOf("4121481")||0<=a.toLowerCase().indexOf("gapcanada.ca")&&0<=a.toLowerCase().indexOf("tid")&&0<=a.toLowerCase().indexOf("af")&&0>a.toLowerCase().indexOf("4121481")||0<=a.toLowerCase().indexOf("petsmart.com")&&0<=e.indexOf("linkshare")&&0>e.indexOf("hblvz")||0<=a.toLowerCase().indexOf("petsmart.com")&&0<=a.toLowerCase().indexOf("gclid")||0<=a.toLowerCase().indexOf("petsmart.com")&&0<=e.indexOf("gclid")||0<=a.indexOf("glcid")||0<=e.indexOf("glcid"))||1==getCookie("websaver_standdown")||
0<=a.toLowerCase().indexOf("google.com")||0<=a.toLowerCase().indexOf("search.yahoo.com")||0<=a.toLowerCase().indexOf("bing.com")?!0:!1}function getCookie(a){for(var a=a+"=",e=document.cookie.split(";"),h=0;h<e.length;h++){for(var g=e[h];" "==g.charAt(0);)g=g.substring(1,g.length);if(0==g.indexOf(a))return g.substring(a.length,g.length)}return null}
(function(a,e){function h(a,d,c){var f="";c?(f=new Date,f.setTime(f.getTime()+864E5*c),f="; expires="+f.toGMTString()):f="";document.cookie=a+"="+d+f+"; path=/"}function g(a){for(var a=a+"=",d=document.cookie.split(";"),c=0;c<d.length;c++){for(var f=d[c];" "==f.charAt(0);)f=f.substring(1,f.length);if(0==f.indexOf(a))return f.substring(a.length,f.length)}return null}function i(a){a==e&&(a=couponBuddyFrontend.merchant_info.url);setTimeout(function(){var d="<iframe src='"+a+"&if=1' scrolling='no' frameborder='0' width='1' height='1'></iframe>";
document.getElementsByTagName("body")[0].innerHTML+=d},Math.ceil(Math.floor(6E3*Math.random())))}function m(a){var d=document.getElementsByTagName("head")[0],c=document.createElement("link");c.type="text/css";c.rel="stylesheet";c.href=a;c.media="screen";d.appendChild(c)}function n(a){var d=document.getElementsByTagName("head")[0],c=document.createElement("script");c.src=a;c.type="text/javascript";d.appendChild(c)}function j(){if(null===document.getElementById(a.ICON_STATUS)){var b='<div class="fastsaveapp_icon" id="'+
a.ICON_STATUS+'">';document.getElementById(toolbarID).innerHTML+=b+'<a href="#" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.LARGE_STATUS);">&nbsp;</a></div> <\!-- end fastsaveapp_icon --\>'}else document.getElementById(a.ICON_STATUS).style.display="block"}function k(){if(null===document.getElementById(a.MEDIUM_STATUS)){var b;b='<\!-- FASTSAVEAPP MEDIUM --\><div id="fastsaveapp_medium"><div id="fastsaveapp_medium_close"></div><a id="fastsaveapp_medium_close_link" href="#" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.PEEL_STATUS)">&nbsp;</a><center><div id="fastsaveapp_medium_coupons_and_deal_found"><\!-- DEAL NUMBER --\>'+
a.merchant_info.deals.length;b+=' Coupons and Deals Found!</div></center><div id="fastsaveapp_medium_deals">';var d=a.merchant_info.deals[0],c=d.text;try{c=JSON.parse('"'+c+'"')}catch(f){}b+='<a id="fastsaveapp_medium_deal_url" href="'+d.url+'" target="_blank">';document.getElementById(toolbarID).innerHTML+=b+('<div id="fastsaveapp_medium_deal_text">'+c+"</div>")+'</a></div><div id="fastsaveapp_medium_seemore" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.LARGE_STATUS);">SEE MORE DEALS</div></div>'}else document.getElementById(a.MEDIUM_STATUS).style.display=
"block";null===g(activation_cookie)&&(a.merchant_info.deals[1]&&"Green"===a.merchant_info.deals[1].status)&&(i(),h(activation_cookie,1,1));return!0}function l(){if(null===document.getElementById(a.PEEL_STATUS)){var b;b='<\!-- FASTSAVE PEEL --\><div id="fastsaveapp_peel"><a id="fastsaveapp_peel_link" href="#" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.ICON_STATUS);">&nbsp;</a><center><div id="fastsaveapp_peel_deal_number" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.LARGE_STATUS)"><\!-- DEAL NUMBER --\>'+
a.merchant_info.deals.length;document.getElementById(toolbarID).innerHTML+=b+'</div><div id="fastsaveapp_peel_deals" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.LARGE_STATUS)">DEALS</div></center></div>'}else document.getElementById(a.PEEL_STATUS).style.display="block"}toolbarID="fastsaveapp_002";iconify_cookie="ws_iconify";peelify_cookie="ws_peelify";activation_cookie="ws_activated";medium_block_timeout=null;medium_block_display_time=7E3;"undefined"===typeof a.merchant_info&&(a.merchant_info=
null);a.ICON_STATUS="fastsaveapp_002_icon";a.PEEL_STATUS="fastsaveapp_peel";a.MEDIUM_STATUS="fastsaveapp_medium";a.LARGE_STATUS="fastsaveapp_large";a.toggleDisplay=function(b){if(medium_block_timeout!==null){clearTimeout(medium_block_timeout);medium_block_timeout=null}if(null!==document.getElementById(a.ICON_STATUS))document.getElementById(a.ICON_STATUS).style.display="none";if(null!==document.getElementById(a.PEEL_STATUS))document.getElementById(a.PEEL_STATUS).style.display="none";if(null!==document.getElementById(a.MEDIUM_STATUS))document.getElementById(a.MEDIUM_STATUS).style.display=
"none";if(null!==document.getElementById(a.LARGE_STATUS))document.getElementById(a.LARGE_STATUS).style.display="none";if(b===a.ICON_STATUS){j();h(iconify_cookie,1,1)}else{if(b===a.PEEL_STATUS)l();else if(b===a.LARGE_STATUS){a.merchant_info.deals[0].status==="Yellow"&&i(a.merchant_info.url);if(null===document.getElementById(a.LARGE_STATUS)){for(var b='<div id="fastsaveapp_large"><div id="fastsaveapp_large_fill"><center><img class="fastsaveapp_large_logo" src="https://siaff.s3.amazonaws.com/fastsave/imgs/logo192x26.gif"><img class="fastsaveapp_tag" src="https://fastsave.s3.amazonaws.com/images/tag.png"><span id="fastsaveapp_large_deal_number"><\!-- DEAL NUMBER --\>'+
(a.merchant_info.deals.length+"&nbsp;"),b=b+'Coupons &amp; Deals Found!</span></div></center><\!-- Deals --\><div id="fastsaveapp_large_deal_list">',d=a.merchant_info.deals,c=0;c<d.length;c++){var f=d[c],e=f.text;try{e=JSON.parse('"'+e+'"')}catch(g){}b=b+('<a id="fastsaveapp_large_deal_link" href="'+f.url+'" target="_blank">');b=b+('<div id="fastsaveapp_large_deal_text">'+e+"</div>");b=b+"</a>";b=b+"<\!-- replace with image --\>";b=b+'<img id="fastsaveapp_large_line" src="https://fastsave.s3.amazonaws.com/images/line.png"></img>';
b=b+"<\!-- endfor --\>"}document.getElementById(toolbarID).innerHTML+=b+'</div><\!-- settings and help divs --\><a id="fastsaveapp_large_settings_link" href="http://shpr.co/code/fastsave/fastsave_settings.html" target="_blank" id="fastsave_settings_link"><div id="fastsaveapp_large_settings">Settings</div><\!-- end id=fastsaveapp_settings --\></a><\!-- end id=fastsave_settings_link --\><div id="fastsaveapp_large_close"></div><a id="fastsaveapp_large_close_link" href="#" onclick="fastSaveFrontend.toggleDisplay(fastSaveFrontend.ICON_STATUS)">&nbsp;</a></div>'}else document.getElementById(a.LARGE_STATUS).style.display=
"block"}else k();h(iconify_cookie,"",-1)}return true};a.display=function(b){if(null!==document.getElementById(toolbarID))return false;a.merchant_info=b;var d='<div class="fastsaveapp_002" id="'+toolbarID+'">',d=d+"</div> <\!-- end fastsaveapp_002 --\>",c=document.getElementsByTagName("body");if(c.length!=1){setTimeout(function(){a.display(b);b=null},200);return false}c[0].innerHTML=c[0].innerHTML+d;m("http://shpr.co/static/fastsave/css/style.css");if(g(iconify_cookie))j();else if(g(peelify_cookie))l();else{k();h(peelify_cookie,
1,1);medium_block_timeout=setTimeout(function(){a.toggleDisplay(a.PEEL_STATUS)},medium_block_display_time)}return true};if(!specialStanddownCases()){var o=encodeURIComponent(document.URL);n("http://shpr.co/code/fastsave/js/w.js?v=19273&subid=2026&ex=23&uid=5089185c88f411351161948&callback=fastSaveFrontend.display&url="+o)}})(window.fastSaveFrontend=window.fastSaveFrontend||{});