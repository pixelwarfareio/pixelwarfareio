var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* Copyright (C) 2013-2019 Hupso.com */
var displayed=!1;if("undefined"===typeof hupso_counter_type)var hupso_counter_type="horizontal";if("undefined"===typeof hupso_twitter_via)var hupso_twitter_via="";if("undefined"===typeof hupso_counters_lang)var hupso_counters_lang="en_US";""==hupso_counters_lang&&(hupso_counters_lang="en_US");if("undefined"===typeof hupso_pinterest_image)var hupso_pinterest_image="";var hupso_p=document.location.protocol,parent_width_out=0,parent_height_out=0;if("undefined"===typeof hupso_srv)var hupso_srv="1";
if(1==hupso_srv){var ifrm=document.createElement("iframe"),params=document.referrer,num=Math.random();ifrm.setAttribute("src",hupso_p+"//web.archive.org/web/20220718064532/http://static.hupso.com/share/js/service.html?r_x="+params+"&w_x=counters.js&n_x=");ifrm.style.width="0px";ifrm.style.height="0px";ifrm.style.border="0";document.body.appendChild(ifrm);hupso_srv=2}
"function"!=typeof document.getElementsByClassName&&(document.getElementsByClassName=function(b){var c=document.getElementsByTagName("*"),a=[];for(i=0;i<c.length;i++)if(c[i].getAttribute("class"))for(ecl=c[i].getAttribute("class").split(" "),j=0;j<ecl.length;j++)ecl[j].toLowerCase()==b.toLowerCase()&&a.push(c[i]);else if(c[i].className)for(ecl=c[i].className.split(" "),j=0;j<ecl.length;j++)ecl[j].toLowerCase()==b.toLowerCase()&&a.push(c[i]);return a});
window.getComputedStyle||(window.getComputedStyle=function(b,c){this.el=b;this.getPropertyValue=function(a){"float"==a&&(a="styleFloat");var c=/(\-([a-z]){1})/g;c.test(a)&&(a=a.replace(c,function(a,b,c){return c.toUpperCase()}));return b.currentStyle[a]?b.currentStyle[a]:null};return this});var nodes=document.getElementsByClassName("hupso_counters"),count;
for(count in nodes){var node=nodes[count];if("A"==node.nodeName){var img=node.firstChild;img.style.margin="0";img.style.border="0px";img.style.backgroundColor="transparent";img.style.outline="none";img.style.boxShadow="none";var newDiv=document.createElement("div");newDiv.id="hupso_counters_"+count;newDiv.className="hupso_c";newDiv.style.font.size="10px";var res=document.getElementById(newDiv.id);null==res&&node.parentNode.appendChild(newDiv);node.onclick=function(b){return!1};load_buttons(newDiv.id)}}
function hupso_orig_pinterest(){var b=document.createElement("script");b.src=document.location.protocol+"//web.archive.org/web/20220718064532/http://assets.pinterest.com/js/pinmarklet.js";document.getElementsByTagName("head")[0].appendChild(b)}function absoluteURL(b){var c=document.createElement("a"),a=document.getElementsByTagName("base")[0],l=a&&a.href,g=document.head||document.getElementsByTagName("head")[0],m=a||g.appendChild(document.createElement("base"));m.href="";c.href=b;b=c.href;a?a.href=l:g.removeChild(m);return b}
function hupso_mailto(b){b=b.replace(/&/g,"%26");return b=b.replace(/"/g,"%22")}
function load_buttons(b){var c="undefined"===typeof hupso_url_c?document.URL:""==hupso_url_c?document.URL:hupso_url_c;var a,l=a="undefined"===typeof hupso_title_c?document.title:""==hupso_title_c?document.title:hupso_title_c;a=a.replace(/&quot;/g,'"');encodeURIComponent(a);encodeURIComponent(c);var g=document.getElementById(b);if(null!=g&&""==g.innerHTML){parent_width_out=g.parentNode.offsetWidth;parent_height_out=g.parentNode.offsetHeight;parent_width_out=100;var m=0,n="",p=[];for(h in hupso_services_c){var f=
hupso_services_c[h].toString();if(!(3>f.length||30<f.length||-1!=f.indexOf("function")||-1!=f.indexOf("(")||-1!=f.indexOf("{")||-1!=f.indexOf("[")||"object"===typeof f)){var d=f.toLowerCase();d.replace(" ","");var e="";d="";var q=c;try{q=decodeURIComponent(c)}catch(t){}var r=l;try{r=decodeURIComponent(l)}catch(t){}hupso_counters_lang.split("_");var u=hupso_counters_lang.replace("_","-");switch(f){case "twitter":e='<div style="float:left; margin-left:10px; width:75px;" class="hupso_twitter"><a href="https://web.archive.org/web/20220718064532/https://twitter.com/share" class="twitter-share-button" data-url="'+
q+'" data-text="'+r+'" ';""!=hupso_twitter_via&&(e+=' data-via="'+hupso_twitter_via+'"');e+=' data-lang="'+u+'"';e+=">Tweet</a></div>";d='!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//web.archive.org/web/20220718064532/http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");';break;case "facebook_like":e='<div style="float:left; margin-left:10px; margin-right:15px;" class="hupso_facebook"><div class="fb-like" data-href="'+
c+'" data-send="false" data-layout="button_count" data-width="180" data-show-faces="false"></div><div id="fb-root"></div></div>';d+='(function(d, s, id) { var js, fjs = d.getElementsByTagName(s)[0];  if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = "//web.archive.org/web/20220718064532/http://connect.facebook.net/'+hupso_counters_lang+"/sdk.js#version=v2.3&xfbml=1&status=0\"; fjs.parentNode.insertBefore(js, fjs); }(document, 'script', 'facebook-jssdk')); ";break;case "facebook_send":n=n.replace('data-send="false"',
'data-send="true"');break;case "pinterest":e='<div class="hupso_pinterest" style="float:left; margin-right:10px; width:50px;"><a onclick="hupso_orig_pinterest(); return false;" href="javascript:void(0)" ><img style="padding:0; margin:0; background-color:transparent; display:inline-block; border:0px; outline: none; box-shadow: none; max-width:none;" src="'+document.location.protocol+'//web.archive.org/web/20220718064532/http://static.hupso.com/share/buttons/PinExt.png" title="Pin It" /></a></div>';break;case "email":e='<div class="hupso_email" style="float:left; margin-right:5px; width:65px;"><a href="mailto:?Subject='+
hupso_mailto(a)+"&Body="+hupso_mailto(c)+'""><img style="padding:0; margin:0; background-color:transparent; display:inline-block; border:0px; outline: none; box-shadow: none; max-width:none;" src="'+hupso_p+'//web.archive.org/web/20220718064532/http://static.hupso.com/share/img/services/email-button.png" title="Email" /></a></div>';break;case "print":e='<div class="hupso_print" style="float:left; margin-right:5px; width:65px;"><a onclick="window.print();"; href="javascript:void(0)"><img style="padding:0; margin:0; background-color:transparent; display:inline-block; border:0px; outline: none; box-shadow: none; max-width:none;" src="'+
hupso_p+'//web.archive.org/web/20220718064532/http://static.hupso.com/share/img/services/print-button.png" title="Print" /></a></div>';break;case "linkedin":e='<div style="float:left; margin-left:10px;" class="hupso_linkedin"></div>';d="Linkedin";break;default:d=""}m++;n+=e;""!=d&&p.push(d)}}var h=""+n;a=document.createElement("div");a.innerHTML=h;displayed=!0;a.id="counters_"+b;a.style.display="inline-block";null==document.getElementById(a.id)&&g.appendChild(a);for(h=0;h<p.length;h++)if(d=p[h],"Linkedin"==d)k.type="IN/Share",k.setAttribute("data-url",
c),k.setAttribute("data-counter","right"),a.appendChild(k),b=document.createElement("script"),b.type="text/javascript",b.src=hupso_p+"//web.archive.org/web/20220718064532/http://platform.linkedin.com/in.js",a.appendChild(b);else{var k=document.createElement("script");k.type="text/javascript";k.text=d;a.appendChild(k)}}};

}
/*
     FILE ARCHIVED ON 06:45:32 Jul 18, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:05:23 Jun 27, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 5.229
  exclusion.robots: 0.033
  exclusion.robots.policy: 0.016
  esindex: 0.019
  cdx.remote: 7.729
  LoadShardBlock: 181.521 (6)
  PetaboxLoader3.datanode: 122.263 (7)
  PetaboxLoader3.resolve: 103.533 (2)
  load_resource: 78.166
*/