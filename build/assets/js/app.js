!function e(r,o,n){function t(f,i){if(!o[f]){if(!r[f]){var c="function"==typeof require&&require;if(!i&&c)return c(f,!0);if(u)return u(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var l=o[f]={exports:{}};r[f][0].call(l.exports,(function(e){return t(r[f][1][e]||e)}),l,l.exports,e,r,o,n)}return o[f].exports}for(var u="function"==typeof require&&require,f=0;f<n.length;f++)t(n[f]);return t}({1:[function(e,r,o){$((function(){e("./modules/svg4everybody")(),e("./modules/scroll2ancor")()}))},{"./modules/scroll2ancor":2,"./modules/svg4everybody":3}],2:[function(e,r,o){r.exports=function(){$((function(){return $(".header-menu__item[href*=\\#]").on("click",(function(e){e.preventDefault();let r=$(this);$("html, body").stop().animate({scrollTop:$(r.attr("href")).offset().top-0+"px"},1e3)})),!1}))}},{}],3:[function(e,r,o){r.exports=function(){$((function(){svg4everybody()}))}},{}]},{},[1]);