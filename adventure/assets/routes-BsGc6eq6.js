import{a as e,i as t,r as n}from"./index-CpaMwQzR.js";var r=e(t(),1);function i(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a(e){if(Array.isArray(e))return e}function o(e){if(Array.isArray(e))return i(e)}function s(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function l(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=C(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function d(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function p(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function m(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function h(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?g(Object(n),!0).forEach(function(t){d(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(e,t){return a(e)||p(e,t)||C(e,t)||m()}function y(e){return o(e)||f(e)||C(e)||h()}function b(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function x(e){var t=b(e,`string`);return typeof t==`symbol`?t:t+``}function S(e){"@babel/helpers - typeof";return S=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},S(e)}function C(e,t){if(e){if(typeof e==`string`)return i(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}var ee=function(){},te={},ne={},re=null,ie={mark:ee,measure:ee};try{typeof window<`u`&&(te=window),typeof document<`u`&&(ne=document),typeof MutationObserver<`u`&&(re=MutationObserver),typeof performance<`u`&&(ie=performance)}catch{}var ae=(te.navigator||{}).userAgent,oe=ae===void 0?``:ae,w=te,T=ne,se=re,ce=ie;w.document;var E=!!T.documentElement&&!!T.head&&typeof T.addEventListener==`function`&&typeof T.createElement==`function`,le=~oe.indexOf(`MSIE`)||~oe.indexOf(`Trident/`),ue,de=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,fe=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,pe={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},me={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},he=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],D=`classic`,ge=`duotone`,_e=`sharp`,ve=`sharp-duotone`,ye=`chisel`,be=`etch`,xe=`graphite`,Se=`jelly`,Ce=`jelly-duo`,we=`jelly-fill`,Te=`mosaic`,Ee=`notdog`,De=`notdog-duo`,Oe=`pixel`,ke=`slab`,Ae=`slab-duo`,je=`slab-press`,Me=`slab-press-duo`,Ne=`thumbprint`,Pe=`utility`,Fe=`utility-duo`,Ie=`utility-fill`,Le=`vellum`,Re=`whiteboard`,ze=`Classic`,Be=`Duotone`,Ve=`Sharp`,He=`Sharp Duotone`,Ue=`Chisel`,We=`Etch`,Ge=`Graphite`,Ke=`Jelly`,qe=`Jelly Duo`,Je=`Jelly Fill`,Ye=`Mosaic`,Xe=`Notdog`,Ze=`Notdog Duo`,Qe=`Pixel`,$e=`Slab`,et=`Slab Duo`,tt=`Slab Press`,nt=`Slab Press Duo`,rt=`Thumbprint`,it=`Utility`,at=`Utility Duo`,ot=`Utility Fill`,st=`Vellum`,ct=`Whiteboard`,lt=[D,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re];ue={},d(d(d(d(d(d(d(d(d(d(ue,D,ze),ge,Be),_e,Ve),ve,He),ye,Ue),be,We),xe,Ge),Se,Ke),Ce,qe),we,Je),d(d(d(d(d(d(d(d(d(d(ue,Te,Ye),Ee,Xe),De,Ze),Oe,Qe),ke,$e),Ae,et),je,tt),Me,nt),Ne,rt),Pe,it),d(d(d(d(ue,Fe,at),Ie,ot),Le,st),Re,ct);var ut={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},dt={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},ft=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),pt={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},mt=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ht={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},gt=[`kit`];d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var _t={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},vt={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},yt={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},bt={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},xt,St={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},Ct=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];xt={},d(d(d(d(d(d(d(d(d(d(xt,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),d(d(d(d(d(d(d(d(d(d(xt,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),d(d(d(d(xt,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),d(d({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var wt={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},Tt={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},Et={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},Dt=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(Ct,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Ot=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],kt=[1,2,3,4,5,6,7,8,9,10],At=kt.concat([11,12,13,14,15,16,17,18,19,20]),jt=[].concat(y(Object.keys(Tt)),Ot,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,St.GROUP,St.SWAP_OPACITY,St.PRIMARY,St.SECONDARY],kt.map(function(e){return`${e}x`}),At.map(function(e){return`w-${e}`})),Mt={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},O=`___FONT_AWESOME___`,Nt=16,Pt=`fa`,Ft=`svg-inline--fa`,k=`data-fa-i2svg`,It=`data-fa-pseudo-element`,Lt=`data-fa-pseudo-element-pending`,Rt=`data-prefix`,zt=`data-icon`,Bt=`fontawesome-i2svg`,Vt=`async`,Ht=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Ut=[`::before`,`::after`,`:before`,`:after`],Wt=function(){try{return!0}catch{return!1}}();function A(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[D]}})}var Gt=_({},pe);Gt[D]=_(_(_(_({},{"fa-duotone":`duotone`}),pe[D]),ht.kit),ht[`kit-duotone`]);var Kt=A(Gt),qt=_({},pt);qt[D]=_(_(_(_({},{duotone:`fad`}),qt[D]),bt.kit),bt[`kit-duotone`]);var Jt=A(qt),Yt=_({},Et);Yt[D]=_(_({},Yt[D]),yt.kit);var Xt=A(Yt),Zt=_({},wt);Zt[D]=_(_({},Zt[D]),_t.kit),A(Zt);var Qt=de,$t=`fa-layers-text`,en=fe;A(_({},ut));var tn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],nn=me,rn=[].concat(y(gt),y(jt)),j=w.FontAwesomeConfig||{};function an(e){var t=T.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function on(e){return e===``?!0:e===`false`?!1:e===`true`||e}T&&typeof T.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=v(e,2),n=t[0],r=t[1],i=on(an(n));i!=null&&(j[r]=i)});var sn={styleDefault:`solid`,familyDefault:D,cssPrefix:Pt,replacementClass:Ft,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};j.familyPrefix&&(j.cssPrefix=j.familyPrefix);var M=_(_({},sn),j);M.autoReplaceSvg||(M.observeMutations=!1);var N={};Object.keys(sn).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(t){M[e]=t,cn.forEach(function(e){return e(N)})},get:function(){return M[e]}})}),Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){M.cssPrefix=e,cn.forEach(function(e){return e(N)})},get:function(){return M.cssPrefix}}),w.FontAwesomeConfig=N;var cn=[];function ln(e){return cn.push(e),function(){cn.splice(cn.indexOf(e),1)}}var P=Nt,F={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function un(e){if(e&&E){var t=T.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=T.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return T.head.insertBefore(t,r),e}}var dn=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function fn(){for(var e=12,t=``;e-->0;)t+=dn[Math.random()*62|0];return t}function I(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pn(e){return e.classList?I(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function mn(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function hn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${mn(e[n])}" `},``).trim()}function gn(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function _n(e){return e.size!==F.size||e.x!==F.x||e.y!==F.y||e.rotate!==F.rotate||e.flipX||e.flipY}function vn(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function yn(e){var t=e.transform,n=e.width,r=n===void 0?Nt:n,i=e.height,a=i===void 0?Nt:i,o=e.startCentered,s=o!==void 0&&o,c=``;return c+=s&&le?`translate(${t.x/P-r/2}em, ${t.y/P-a/2}em) `:s?`translate(calc(-50% + ${t.x/P}em), calc(-50% + ${t.y/P}em)) `:`translate(${t.x/P}em, ${t.y/P}em) `,c+=`scale(${t.size/P*(t.flipX?-1:1)}, ${t.size/P*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var bn=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function xn(){var e=Pt,t=Ft,n=N.cssPrefix,r=N.replacementClass,i=bn;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var Sn=!1;function Cn(){N.autoAddCss&&!Sn&&(un(xn()),Sn=!0)}var wn={mixout:function(){return{dom:{css:xn,insertCss:Cn}}},hooks:function(){return{beforeDOMElementCreation:function(){Cn()},beforeI2svg:function(){Cn()}}}},L=w||{};L[O]||(L[O]={}),L[O].styles||(L[O].styles={}),L[O].hooks||(L[O].hooks={}),L[O].shims||(L[O].shims=[]);var R=L[O],Tn=[],En=function(){T.removeEventListener(`DOMContentLoaded`,En),Dn=1,Tn.map(function(e){return e()})},Dn=!1;E&&(Dn=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),Dn||T.addEventListener(`DOMContentLoaded`,En));function On(e){E&&(Dn?setTimeout(e,0):Tn.push(e))}function kn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?mn(e):`<${t} ${hn(r)}>${a.map(kn).join(``)}</${t}>`}function An(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var jn=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Mn=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:jn(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Nn(e){return y(e).length===1?e.codePointAt(0).toString(16):null}function Pn(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fn(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=Pn(t);typeof R.hooks.addPack==`function`&&!r?R.hooks.addPack(e,Pn(t)):R.styles[e]=_(_({},R.styles[e]||{}),i),e===`fas`&&Fn(`fa`,t)}var In=R.styles,Ln=R.shims,Rn=Object.keys(Xt),zn=Rn.reduce(function(e,t){return e[t]=Object.keys(Xt[t]),e},{}),Bn=null,Vn={},Hn={},Un={},Wn={},Gn={};function Kn(e){return~rn.indexOf(e)}function qn(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Kn(i)?i:null}var Jn=function(){var e=function(e){return Mn(In,function(t,n,r){return t[r]=Mn(n,e,{}),t},{})};Vn=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),Hn=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Gn=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in In||N.autoFetchSvg,n=Mn(Ln,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Un=n.names,Wn=n.unicodes,Bn=tr(N.styleDefault,{family:N.familyDefault})};ln(function(e){Bn=tr(e.styleDefault,{family:N.familyDefault})}),Jn();function Yn(e,t){return(Vn[e]||{})[t]}function Xn(e,t){return(Hn[e]||{})[t]}function z(e,t){return(Gn[e]||{})[t]}function Zn(e){return Un[e]||{prefix:null,iconName:null}}function Qn(e){var t=Wn[e],n=Yn(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function B(){return Bn}var $n=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var t=D,n=Rn.reduce(function(e,t){return e[t]=`${N.cssPrefix}-${t}`,e},{});return lt.forEach(function(r){(e.includes(n[r])||e.some(function(e){return zn[r].includes(e)}))&&(t=r)}),t}function tr(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?D:t,r=Kt[n][e];if(n===ge&&!e)return`fad`;var i=Jt[n][e]||Jt[n][r],a=e in R.styles?e:null;return i||a||null}function nr(e){var t=[],n=null;return e.forEach(function(e){var r=qn(N.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function rr(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var ir=Dt.concat(mt);function ar(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=rr(e.filter(function(e){return ir.includes(e)})),a=rr(e.filter(function(e){return!ir.includes(e)})),o=v(i.filter(function(e){return r=e,!he.includes(e)}),1)[0],s=o===void 0?null:o,c=er(i),l=_(_({},nr(a)),{},{prefix:tr(s,{family:c})});return _(_(_({},l),lr({values:e,family:c,styles:In,config:N,canonical:l,givenPrefix:r})),or(n,r,l))}function or(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Zn(i):{},o=z(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!In.far&&In.fas&&!N.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var sr=lt.filter(function(e){return e!==D||e!==ge}),cr=Object.keys(Et).filter(function(e){return e!==D}).map(function(e){return Object.keys(Et[e])}).flat();function lr(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===ge,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&sr.includes(n)&&(Object.keys(s).find(function(e){return cr.includes(e)})||l.autoFetchSvg)&&(r.prefix=ft.get(n).defaultShortPrefixId,r.iconName=z(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=B()||`fas`),r}var ur=function(){function e(){s(this,e),this.definitions={}}return l(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=_(_({},e.definitions[n]||{}),t[n]),Fn(n,t[n]);var r=Xt[D][n];r&&Fn(r,t[n]),Jn()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),dr=[],V={},H={},fr=Object.keys(H);function pr(e,t){var n=t.mixoutsTo;return dr=e,V={},Object.keys(H).forEach(function(e){fr.indexOf(e)===-1&&delete H[e]}),dr.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),S(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){V[e]||(V[e]=[]),V[e].push(r[e])})}e.provides&&e.provides(H)}),n}function mr(e,t){var n=[...arguments].slice(2);return(V[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function U(e){var t=[...arguments].slice(1);(V[e]||[]).forEach(function(e){e.apply(null,t)})}function W(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return H[e]?H[e].apply(null,t):void 0}function hr(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||B();if(t)return t=z(n,t)||t,An(gr.definitions,n,t)||An(R.styles,n,t)}var gr=new ur,G={noAuto:function(){N.autoReplaceSvg=!1,N.observeMutations=!1,U(`noAuto`)},config:N,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return E?(U(`beforeI2svg`,e),W(`pseudoElements2svg`,e),W(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,On(function(){_r({autoReplaceSvgRoot:t}),U(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(S(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=tr(e[0]);return{prefix:n,iconName:z(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${N.cssPrefix}-`)>-1||e.match(Qt))){var r=ar(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||B(),iconName:z(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=B();return{prefix:i,iconName:z(i,e)||e}}}},library:gr,findIconDefinition:hr,toHtml:kn},_r=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?T:e;(Object.keys(R.styles).length>0||N.autoFetchSvg)&&E&&N.autoReplaceSvg&&G.dom.i2svg({node:t})};function vr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return kn(e)})}}),Object.defineProperty(e,"node",{get:function(){if(E){var t=T.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function yr(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(_n(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=gn(_(_({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function br(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${N.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:_(_({},i),{},{id:o}),children:r}]}]}function xr(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function Sr(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[N.replacementClass,a?`${N.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:_(_({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!xr(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[k]=``);var v=_(_({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:_({},l.styles)}),y=r.found&&n.found?W(`generateAbstractMask`,v)||{children:[],attributes:{}}:W(`generateAbstractIcon`,v)||{children:[],attributes:{}},b=y.children,x=y.attributes;return v.children=b,v.attributes=x,s?br(v):yr(v)}function Cr(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=_(_({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[k]=``);var l=_({},a.styles);_n(i)&&(l.transform=yn({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=gn(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function wr(e){var t=e.content,n=e.extra,r=_(_({},n.attributes),{},{class:n.classes.join(` `)}),i=gn(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var Tr=R.styles;function Er(e){var t=e[0],n=e[1],r=v(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${N.cssPrefix}-${nn.GROUP}`},children:[{tag:`path`,attributes:{class:`${N.cssPrefix}-${nn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${N.cssPrefix}-${nn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Dr={found:!1,width:512,height:512};function Or(e,t){!Wt&&!N.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function kr(e,t){var n=t;return t===`fa`&&N.styleDefault!==null&&(t=B()),new Promise(function(r,i){if(n===`fa`){var a=Zn(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&Tr[t]&&Tr[t][e]){var o=Tr[t][e];return r(Er(o))}Or(e,t),r(_(_({},Dr),{},{icon:N.showMissingIcons&&e&&W(`missingIconAbstract`)||{}}))})}var Ar=function(){},jr=N.measurePerformance&&ce&&ce.mark&&ce.measure?ce:{mark:Ar,measure:Ar},Mr=`FA "7.3.1"`,Nr=function(e){return jr.mark(`${Mr} ${e} begins`),function(){return Pr(e)}},Pr=function(e){jr.mark(`${Mr} ${e} ends`),jr.measure(`${Mr} ${e}`,`${Mr} ${e} begins`,`${Mr} ${e} ends`)},Fr={begin:Nr,end:Pr},Ir=function(){};function Lr(e){return typeof(e.getAttribute?e.getAttribute(k):null)==`string`}function Rr(e){var t=e.getAttribute?e.getAttribute(Rt):null,n=e.getAttribute?e.getAttribute(zt):null;return t&&n}function zr(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function Br(){return N.autoReplaceSvg===!0?Gr.replace:Gr[N.autoReplaceSvg]||Gr.replace}function Vr(e){return T.createElementNS(`http://www.w3.org/2000/svg`,e)}function Hr(e){return T.createElement(e)}function Ur(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Vr:Hr:t;if(typeof e==`string`)return T.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Ur(e,{ceFn:n}))}),r}function Wr(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Gr={replace:function(e){var t=e[0];if(t.parentNode){if(e[1].forEach(function(e){t.parentNode.insertBefore(Ur(e),t)}),t.getAttribute(k)===null&&N.keepOriginalSource){var n=T.createComment(Wr(t));t.parentNode.replaceChild(n,t)}else t.remove()}},nest:function(e){var t=e[0],n=e[1];if(~pn(t).indexOf(N.replacementClass))return Gr.replace(e);var r=RegExp(`${N.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===N.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return kn(e)}).join(`
`);t.setAttribute(k,``),t.innerHTML=a}};function Kr(e){e()}function qr(e,t){var n=typeof t==`function`?t:Ir;if(e.length===0)n();else{var r=Kr;N.mutateApproach===Vt&&(r=w.requestAnimationFrame||Kr),r(function(){var t=Br(),r=Fr.begin(`mutate`);e.map(t),r(),n()})}}var Jr=!1;function Yr(){Jr=!0}function Xr(){Jr=!1}var Zr=null;function Qr(e){if(se&&N.observeMutations){var t=e.treeCallback,n=t===void 0?Ir:t,r=e.nodeCallback,i=r===void 0?Ir:r,a=e.pseudoElementsCallback,o=a===void 0?Ir:a,s=e.observeMutationsRoot,c=s===void 0?T:s;Zr=new se(function(e){if(!Jr){var t=B();I(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Lr(e.addedNodes[0])&&(N.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&N.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Lr(e.target)&&~tn.indexOf(e.attributeName)){if(e.attributeName===`class`&&Rr(e.target)){var r=ar(pn(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Rt,a||t),s&&e.target.setAttribute(zt,s)}else zr(e.target)&&i(e.target)}})}}),E&&Zr.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function $r(){Zr&&Zr.disconnect()}function ei(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function ti(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=ar(pn(e));return i.prefix||=B(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Xn(i.prefix,e.innerText)||Yn(i.prefix,Nn(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ni(e){return I(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function ri(){return{iconName:null,prefix:null,transform:F,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ti(e),r=n.iconName,i=n.prefix,a=n.rest,o=ni(e),s=mr(`parseNodeAttributes`,{},e);return _({iconName:r,prefix:i,transform:F,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?ei(e):[],attributes:o}},s)}var ai=R.styles;function oi(e){var t=N.autoReplaceSvg===`nest`?ii(e,{styleParser:!1}):ii(e);return~t.extra.classes.indexOf($t)?W(`generateLayersText`,e,t):W(`generateSvgReplacementMutation`,e,t)}function si(){return[].concat(y(mt),y(Dt))}function ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!E)return Promise.resolve();var n=T.documentElement.classList,r=function(e){return n.add(`${Bt}-${e}`)},i=function(e){return n.remove(`${Bt}-${e}`)},a=N.autoFetchSvg?si():he.concat(Object.keys(ai));a.includes(`fa`)||a.push(`fa`);var o=[`.${$t}:not([${k}])`].concat(a.map(function(e){return`.${e}:not([${k}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=I(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Fr.begin(`onTree`),l=s.reduce(function(e,t){try{var n=oi(t);n&&e.push(n)}catch(e){Wt||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){qr(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;oi(e).then(function(e){e&&qr([e],t)})}function ui(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:hr(t||{}),i=n.mask;return i&&=(i||{}).icon?i:hr(i||{}),e(r,_(_({},n),{},{mask:i}))}}var di=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,v=e.iconName,y=e.icon;return vr(_({type:`icon`},e),function(){return U(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),Sr({icons:{main:Er(y),mask:s?Er(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:v,transform:_(_({},F),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},fi={mixout:function(){return{icon:ui(di)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=ci,e.nodeCallback=li,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?T:t,r=e.callback;return ci(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([kr(n,r),o.iconName?kr(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=v(o,2),u=l[0],d=l[1];t([e,Sr({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=gn(a);o.length>0&&(n.style=o);var s;return _n(i)&&(s=W(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},pi={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return vr({type:`layer`},function(){U(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${N.cssPrefix}-layers`].concat(y(r)).join(` `)},children:n}]})}}}},mi={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return vr({type:`counter`,content:e},function(){return U(`beforeDOMElementCreation`,{content:e,params:t}),wr({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${N.cssPrefix}-layers-counter`].concat(y(a))}})})}}}},hi={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?F:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return vr({type:`text`,content:e},function(){return U(`beforeDOMElementCreation`,{content:e,params:t}),Cr({content:e,transform:_(_({},F),r),extra:{attributes:s,styles:l,classes:[`${N.cssPrefix}-layers-text`].concat(y(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(le){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Cr({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},gi=RegExp(`"`,`ug`),_i=[1105920,1112319],vi=_(_(_(_({},{FontAwesome:{normal:`fas`,400:`fas`}}),dt),Mt),vt),yi=Object.keys(vi).reduce(function(e,t){return e[t.toLowerCase()]=vi[t],e},{}),bi=Object.keys(yi).reduce(function(e,t){var n=yi[t];return e[t]=n[900]||y(Object.entries(n))[0][1],e},{});function xi(e){return Nn(y(e.replace(gi,``))[0]||``)}function Si(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(gi,``),r=n.codePointAt(0),i=r>=_i[0]&&r<=_i[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Ci(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(yi[n]||{})[i]||bi[n]}function wi(e,t){var n=`${Lt}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=I(e.children).filter(function(e){return e.getAttribute(It)===t})[0],o=w.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(en),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Ci(s,l),p=xi(d),m=c[0].startsWith(`FontAwesome`),h=Si(o),g=Yn(f,p),v=g;if(m){var y=Qn(p);y.iconName&&y.prefix&&(g=y.iconName,f=y.prefix)}if(g&&!h&&(!a||a.getAttribute(Rt)!==f||a.getAttribute(zt)!==v)){e.setAttribute(n,v),a&&e.removeChild(a);var b=ri(),x=b.extra;x.attributes[It]=t,kr(g,f).then(function(i){var a=Sr(_(_({},b),{},{icons:{main:i,mask:$n()},prefix:f,iconName:v,extra:x,watchable:!0})),o=T.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return kn(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Ti(e){return Promise.all([wi(e,`::before`),wi(e,`::after`)])}function Ei(e){return e.parentNode!==document.head&&!~Ht.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(It)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Di=function(e){return!!e&&Ut.some(function(t){return e.includes(t)})},Oi=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=u(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Di(a)){var o=Ut.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function ki(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(E){var n;if(t)n=e;else if(N.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=u(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=u(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,d=u(Oi(l.selectorText)),f;try{for(d.s();!(f=d.n()).done;){var p=f.value;r.add(p)}}catch(e){d.e(e)}finally{d.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){N.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var m=Array.from(r).join(`, `);try{n=e.querySelectorAll(m)}catch{}}return new Promise(function(e,t){var r=I(n).filter(Ei).map(Ti),i=Fr.begin(`searchPseudoElements`);Yr(),Promise.all(r).then(function(){i(),Xr(),e()}).catch(function(){i(),Xr(),t()})})}}var Ai={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ki,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?T:t;N.searchPseudoElements&&ki(n)}}},ji=!1,Mi={mixout:function(){return{dom:{unwatch:function(){Yr(),ji=!0}}}},hooks:function(){return{bootstrap:function(){Qr(mr(`mutationObserverCallbacks`,{}))},noAuto:function(){$r()},watch:function(e){var t=e.observeMutationsRoot;ji?Xr():Qr(mr(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Ni=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Pi={mixout:function(){return{parse:{transform:function(e){return Ni(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Ni(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:_({},a.outer),children:[{tag:`g`,attributes:_({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:_(_({},t.icon.attributes),a.path)}]}]}}}},Fi={x:0,y:0,width:`100%`,height:`100%`};function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Li(e){return e.tag===`g`?e.children:[e]}pr([wn,fi,pi,mi,hi,Ai,Mi,Pi,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?ar(n.split(` `).map(function(e){return e.trim()})):$n();return r.prefix||=B(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=vn({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:_(_({},Fi),{},{fill:`white`})},p=c.children?{children:c.children.map(Ii)}:{},m={tag:`g`,attributes:_({},d.inner),children:[Ii(_({tag:c.tag,attributes:_(_({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:_({},d.outer),children:[m]},g=`mask-${a||fn()}`,v=`clip-${a||fn()}`,y={tag:`mask`,attributes:_(_({},Fi),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},b={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:v},children:Li(u)},y]};return t.push(b,{tag:`rect`,attributes:_({fill:`currentColor`,"clip-path":`url(#${v})`,mask:`url(#${g})`},Fi)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;w.matchMedia&&(t=w.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:_(_({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=_(_({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:_(_({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:_(_({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:_(_({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:_(_({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:_(_({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:G}),G.noAuto;var K=G.config;G.library,G.dom;var Ri=G.parse;G.findIconDefinition,G.toHtml;var zi=G.icon;G.layer,G.text,G.counter;var q=n();function Bi(e){return e-=0,e===e}function Vi(e){return Bi(e)?e:(e=e.replace(/[_-]+(.)?/g,(e,t)=>t?t.toUpperCase():``),e.charAt(0).toLowerCase()+e.slice(1))}var Hi=(e,t)=>r.createElement(`stop`,{key:`${t}-${e.offset}`,offset:e.offset,stopColor:e.color,...e.opacity!==void 0&&{stopOpacity:e.opacity}});function Ui(e){return e.charAt(0).toUpperCase()+e.slice(1)}var J=new Map,Wi=1e3;function Gi(e){if(J.has(e))return J.get(e);let t={},n=0,r=e.length;for(;n<r;){let i=e.indexOf(`;`,n),a=i===-1?r:i,o=e.slice(n,a).trim();if(o){let e=o.indexOf(`:`);if(e>0){let n=o.slice(0,e).trim(),r=o.slice(e+1).trim();if(n&&r){let e=Vi(n);t[e.startsWith(`webkit`)?Ui(e):e]=r}}}n=a+1}if(J.size===Wi){let e=J.keys().next().value;e&&J.delete(e)}return J.set(e,t),t}function Ki(e,t,n={}){if(typeof t==`string`)return t;let r=(t.children||[]).map(t=>{let r=t;return(`fill`in n||n.gradientFill)&&t.tag===`path`&&`fill`in t.attributes&&(r={...t,attributes:{...t.attributes,fill:void 0}}),Ki(e,r)}),i=t.attributes||{},a={};for(let[e,t]of Object.entries(i))switch(!0){case e===`class`:a.className=t;break;case e===`style`:a.style=Gi(String(t));break;case e.startsWith(`aria-`):case e.startsWith(`data-`):a[e.toLowerCase()]=t;break;default:a[Vi(e)]=t}let{style:o,role:s,"aria-label":c,gradientFill:l,...u}=n;if(o&&(a.style=a.style?{...a.style,...o}:o),s&&(a.role=s),c&&(a[`aria-label`]=c,a[`aria-hidden`]=`false`),l){a.fill=`url(#${l.id})`;let{type:t,stops:n=[],...i}=l;r.unshift(e(t===`linear`?`linearGradient`:`radialGradient`,{...i,id:l.id},n.map(Hi)))}return e(t.tag,{...a,...u},...r)}var qi=Ki.bind(null,r.createElement),Ji=(e,t)=>{let n=(0,r.useId)();return e||(t?n:void 0)},Yi=class{constructor(e=`react-fontawesome`){this.enabled=!1;let t=!1;try{t=typeof process<`u`&&!1}catch{}this.scope=e,this.enabled=t}log(...e){this.enabled&&console.log(`[${this.scope}]`,...e)}warn(...e){this.enabled&&console.warn(`[${this.scope}]`,...e)}error(...e){this.enabled&&console.error(`[${this.scope}]`,...e)}};typeof process<`u`&&{}.FA_VERSION;var Xi=`searchPseudoElementsFullScan`in K&&typeof K.searchPseudoElementsFullScan==`boolean`?`7.0.0`:`6.0.0`,Zi=Number.parseInt(Xi)>=7,Qi=()=>Zi,$i=`fa`,Y={beat:`fa-beat`,fade:`fa-fade`,beatFade:`fa-beat-fade`,bounce:`fa-bounce`,shake:`fa-shake`,spin:`fa-spin`,spinPulse:`fa-spin-pulse`,spinReverse:`fa-spin-reverse`,pulse:`fa-pulse`,flip360:`fa-flip-360`,buzz:`fa-buzz`,float:`fa-float`,jello:`fa-jello`,spinSnap:`fa-spin-snap`,spinSnap4:`fa-spin-snap-4`,spinSnap8:`fa-spin-snap-8`,swing:`fa-swing`,wag:`fa-wag`},ea={left:`fa-pull-left`,right:`fa-pull-right`},ta={90:`fa-rotate-90`,180:`fa-rotate-180`,270:`fa-rotate-270`},na={"2xs":`fa-2xs`,xs:`fa-xs`,sm:`fa-sm`,lg:`fa-lg`,xl:`fa-xl`,"2xl":`fa-2xl`,"1x":`fa-1x`,"2x":`fa-2x`,"3x":`fa-3x`,"4x":`fa-4x`,"5x":`fa-5x`,"6x":`fa-6x`,"7x":`fa-7x`,"8x":`fa-8x`,"9x":`fa-9x`,"10x":`fa-10x`},X={border:`fa-border`,fixedWidth:`fa-fw`,flip:`fa-flip`,flipHorizontal:`fa-flip-horizontal`,flipVertical:`fa-flip-vertical`,inverse:`fa-inverse`,rotateBy:`fa-rotate-by`,swapOpacity:`fa-swap-opacity`,widthAuto:`fa-width-auto`,canvasSquare:`fa-canvas-square`,canvasRoomy:`fa-canvas-roomy`},ra={default:`fa-layers`};function ia(e){let t=K.cssPrefix||K.familyPrefix||$i;return t===$i?e:e.replace(new RegExp(String.raw`(?<=^|\s)${$i}-`,`g`),`${t}-`)}function aa(e){let{beat:t,fade:n,beatFade:r,bounce:i,shake:a,spin:o,spinPulse:s,spinReverse:c,pulse:l,fixedWidth:u,inverse:d,border:f,flip:p,size:m,rotation:h,pull:g,swapOpacity:_,rotateBy:v,widthAuto:y,canvasSquare:b,canvasRoomy:x,flip360:S,buzz:C,float:ee,jello:te,spinSnap:ne,spinSnap4:re,spinSnap8:ie,swing:ae,wag:oe,className:w}=e,T=[];return w&&T.push(...w.split(` `)),t&&T.push(Y.beat),n&&T.push(Y.fade),r&&T.push(Y.beatFade),i&&T.push(Y.bounce),a&&T.push(Y.shake),o&&T.push(Y.spin),c&&T.push(Y.spinReverse),s&&T.push(Y.spinPulse),l&&T.push(Y.pulse),u&&T.push(X.fixedWidth),d&&T.push(X.inverse),f&&T.push(X.border),p===!0&&T.push(X.flip),(p===`horizontal`||p===`both`)&&T.push(X.flipHorizontal),(p===`vertical`||p===`both`)&&T.push(X.flipVertical),m!=null&&T.push(na[m]),h!=null&&h!==0&&T.push(ta[h]),g!=null&&T.push(ea[g]),_&&T.push(X.swapOpacity),Qi()?(v&&T.push(X.rotateBy),y&&T.push(X.widthAuto),b&&T.push(X.canvasSquare),x&&T.push(X.canvasRoomy),S&&T.push(Y.flip360),C&&T.push(Y.buzz),ee&&T.push(Y.float),te&&T.push(Y.jello),ne&&T.push(Y.spinSnap),re&&T.push(Y.spinSnap4),ie&&T.push(Y.spinSnap8),ae&&T.push(Y.swing),oe&&T.push(Y.wag),(K.cssPrefix||K.familyPrefix||$i)===$i?T:T.map(ia)):T}var oa=e=>typeof e==`object`&&`icon`in e&&!!e.icon;function sa(e){if(e)return oa(e)?e:Ri.icon(e)}function ca(e){return Object.keys(e)}var la=new Yi(`FontAwesomeIcon`),ua={border:!1,className:``,mask:void 0,maskId:void 0,fixedWidth:!1,inverse:!1,flip:!1,icon:void 0,listItem:!1,pull:void 0,pulse:!1,rotation:void 0,rotateBy:!1,size:void 0,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:``,titleId:void 0,transform:void 0,swapOpacity:!1,widthAuto:!1,canvasSquare:!1,canvasRoomy:!1,flip360:!1,buzz:!1,float:!1,jello:!1,spinSnap:!1,spinSnap4:!1,spinSnap8:!1,swing:!1,wag:!1},da=new Set(Object.keys(ua)),fa=r.forwardRef((e,t)=>{let n={...ua,...e},{icon:r,mask:i,symbol:a,title:o,titleId:s,maskId:c,transform:l}=n,u=Ji(c,!!i),d=Ji(s,!!o),f=sa(r);if(!f)return la.error(`Icon lookup is undefined`,r),null;let p=aa(n),m=typeof l==`string`?Ri.transform(l):l,h=sa(i),g=zi(f,{...p.length>0&&{classes:p},...m&&{transform:m},...h&&{mask:h},symbol:a,title:o,titleId:d,maskId:u});if(!g)return la.error(`Could not find icon`,f),null;let{abstract:_}=g,v={ref:t};for(let e of ca(n))da.has(e)||(v[e]=n[e]);return qi(_[0],v)});fa.displayName=`FontAwesomeIcon`,`${ra.default}${X.fixedWidth}`;var pa={prefix:`fas`,iconName:`file-pdf`,icon:[576,512,[],`f1c1`,`M96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l80 0 0-112c0-35.3 28.7-64 64-64l176 0 0-165.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L96 0zM357.5 176L264 176c-13.3 0-24-10.7-24-24L240 58.5 357.5 176zM240 380c-11 0-20 9-20 20l0 128c0 11 9 20 20 20s20-9 20-20l0-28 12 0c33.1 0 60-26.9 60-60s-26.9-60-60-60l-32 0zm32 80l-12 0 0-40 12 0c11 0 20 9 20 20s-9 20-20 20zm96-80c-11 0-20 9-20 20l0 128c0 11 9 20 20 20l32 0c28.7 0 52-23.3 52-52l0-64c0-28.7-23.3-52-52-52l-32 0zm20 128l0-88 12 0c6.6 0 12 5.4 12 12l0 64c0 6.6-5.4 12-12 12l-12 0zm88-108l0 128c0 11 9 20 20 20s20-9 20-20l0-44 28 0c11 0 20-9 20-20s-9-20-20-20l-28 0 0-24 28 0c11 0 20-9 20-20s-9-20-20-20l-48 0c-11 0-20 9-20 20z`]},Z={name:`MIKE "DEMO" DEMOPOULOS (they/them)`,title:`Strategic Partnerships & Go-To-Market Leader`,location:`Hudson, Wisconsin, USA`,email:`hey.demo@mikedemo.email`,phone:`612.807.3601`,linkedin:`in/mikedemopoulos`,site:`mikedemo.com`},Q={lobby:{id:`lobby`,name:`THE ATRIUM`,desc:[`A dim lobby lit by a single amber CRT. A brass plaque reads:`,`  "Strategic partnerships, alliances, and go-to-market leader across`,`   cloud infrastructure, hosting, SaaS, and open-source ecosystems."`,`> Builds partner motions, opens new channels, and converts executive`,`  relationships, ecosystem credibility, and technical insight into`,`  revenue growth, market expansion, and faster execution.`,`> Known for identifying new markets, leading cross-functional`,`  initiatives, and aligning commercial, product, technical, and`,`  customer teams around scalable partner-led growth.`,`Corridors lead in every direction. A humming server rack sits north.`],exits:{north:`cloud`,east:`guild`,south:`forge`,west:`academy`,up:`council`},items:[`plaque`,`crt`],loot:`BUSINESS CARD`},cloud:{id:`cloud`,name:`THE CLOUD DECK — hosting.com`,desc:[`Apr 2025 - Present · Remote · PARTNERSHIPS LEAD, NORTH AMERICA`,`High-performance clouds hum overhead, carrying business-critical apps.`,`> Manage 500+ VIP and enterprise accounts across North America, closing`,`  five-figure MRR growth through renewals, upgrades, and expansion.`,`> Maintain roughly 90% success across quoted renewal, upgrade, and`,`  expansion opportunities within six months of quote delivery.`,`> Built a targeted partner outreach motion around major international`,`  events, converting agency and MSP outreach into meetings or replies`,`  with clear next steps at roughly an 80% rate.`,`> Translate between clients, partners, and technical stakeholders to`,`  unblock complex issues and move opportunities toward expansion.`,`> Trained 19 incoming CSMs during restructuring, transferring account`,`  knowledge and documenting processes across teams.`,`> Integrated AI-enabled workflows into research, meeting prep, follow-up,`,`  and account planning to scale partner and enterprise management.`],exits:{south:`lobby`,east:`guild`},items:[`rack`],loot:`AGENCY LEDGER`},guild:{id:`guild`,name:`THE PARTNER GUILD — Codeable`,desc:[`Jun 2021 - Dec 2024 · Remote · HEAD OF PARTNERSHIPS`,`A vast hall of partner banners, each stitched with a hosting logo.`,`> Opened access to new customer segments and shifted company go-to-market`,`  direction by identifying web hosting as a strategic market beyond an`,`  initial base of major WordPress hosts.`,`> Expanded distribution through native WP Toolkit integrations inside`,`  cPanel and Plesk, reaching ecosystems serving millions of sites.`,`> Led the cPanel / Plesk partner initiative from business case and RFP`,`  through agency selection, testing, rollout, and launch across both`,`  major hosting control panel ecosystems.`,`> Translated a new-market concept into an executable partner motion by`,`  aligning internal stakeholders, partners, and technical workstreams.`,`> Cut applicant-to-approval time from ~10 months to 3 weeks on a flow`,`  handling ~1,000-2,000 applications per month, without losing quality.`],exits:{west:`lobby`,north:`cloud`,south:`treasury`},items:[`banners`],loot:`TUNE KEY`},treasury:{id:`treasury`,name:`THE TREASURY — Open Source Matters (Joomla)`,desc:[`Jan 2013 - Dec 2018 · Global / Remote`,`OPEN SOURCE GOVERNANCE, FUNDRAISING & FINANCIAL STEWARDSHIP`,`Ledgers stacked to the ceiling behind a worn boardroom table.`,`> Led fundraising efforts that raised more than $1M for the Joomla project.`,`> Directed sponsorship strategy across 5 Joomla conferences, securing`,`  30+ sponsors over three consecutive years.`,`> Served on the board during a governance transition, steering fundraising`,`  and financial planning for an international open-source community with`,`  an annual budget of nearly $700K at the time.`],exits:{north:`guild`,west:`forge`},items:[`ledgers`],loot:`TREASURER SEAL`},forge:{id:`forge`,name:`THE EVANGELIST'S FORGE — InMotion Hosting / BoldGrid`,desc:[`Oct 2016 - Jun 2021 · Remote`,`BUSINESS DEVELOPMENT SPECIALIST – PRODUCT EVANGELIST`,`A stage, a mic, and a wall of conference badges from a dozen countries.`,`> Directly sourced roughly 80% of qualified M&A opportunities that`,`  ultimately closed, including six- and seven-figure deal values.`,`> Turned major industry events into go-to-market campaigns rather than`,`  passive sponsorships, often booking 85+ meetings around a single event`,`  such as CloudFest to reach decision-makers and improve event ROI.`,`> Extended that event and ecosystem strategy across dozens of`,`  international events annually.`,`> Built trusted relationships across hosts, agencies, partners, and`,`  community stakeholders that opened pipeline and market visibility.`,`> Drove product adoption through speaking and partner engagement for`,`  native Plesk and cPanel integrations.`],exits:{north:`lobby`,east:`treasury`,west:`studio`},items:[`mic`,`badges`],loot:`EVANGELIST MIC`},studio:{id:`studio`,name:`THE WORKSHOP — Projects & Community`,desc:[`Half lab, half green room. Agents hum on one bench, pride flags on the other.`,``,`APPLIED AI WORKFLOWS / AGENT TOOLING · MikeDemo.dev · Aug 2026 - Present`,`> Built practical AI workflow tools for day-to-day business use, including`,`  forks of 16 open-source AI libraries for execution and experimentation.`,`> Designed browser-based and local workflow paths across 6 use cases,`,`  weighing lower-cost and privacy-first deployment options.`,`> Applied human-in-the-loop safeguards and orchestration across 10 agents.`,`  (skills.mikedemo.dev)`,``,`BUGLE CROWNS — AWS AGENTIC FOOTBALL CUP · Sep 2026 - Present`,`> Designed a 5-agent system to test multi-agent orchestration, efficiency,`,`  and decision-quality tradeoffs under competitive constraints.`,`  (mikedemo.dev/bugle-crowns)`,``,`COMMUNITY: Out in Tech volunteer since 2021 (2 Digital Corps projects as`,`project manager) · CloudFest Hackathon contributor, 6 events 2021-2025,`,`one overall winning accessibility project · Lead Organizer of the Global`,`Pride Parties at WordCamp Asia, Europe & US, growing a recurring series`,`from ~75 to 700 registrations in two years.`],exits:{east:`forge`,north:`academy`},items:[`terminal`],loot:`LEGACY CODEBASE`},academy:{id:`academy`,name:`THE ACADEMY — Education & Certifications`,desc:[`Chalk dust and neural nets.`,`> The Art Institutes Minnesota, 2005 — Web Page, Digital/Multimedia`,`  and Information Resources Design.`,``,`CERTIFICATIONS:`,`> MIT Professional Education, Jan-Apr 2025 — No Code AI and Machine`,`  Learning: Building Data Science Solutions. Top 1% of cohort.`,`> Out in Tech Leadership Institute, Sep 2026 — LGBTQ+ technology`,`  leadership development, New York City.`,`> The Community MBA, CMX, Feb 2021 — community and ecosystem building.`,`> Disney's Approach to Leadership Excellence, Disney Institute, Oct 2020.`,`> Presentation Advantage, FranklinCovey, Dec 2016.`,``,`SKILLS unlocked:`,`> Strategic Partnerships · Strategic Alliances · Channel Partnerships ·`,`  Partner Go-to-Market Strategy.`,`> Business Development · Executive Stakeholder Management ·`,`  Cross-Functional Leadership · Technical-Commercial Translation.`,`> Cloud Infrastructure · Hosting · WordPress · AI-Enabled Workflows.`],exits:{east:`lobby`,south:`studio`,up:`council`},items:[`diploma`],loot:`MIT CREDENTIAL`},council:{id:`council`,name:`THE COUNCIL CHAMBER — Forbes Agency Council`,desc:[`Jan 2026 - Present · COUNCIL MEMBER; LEAD, WEB HOSTING & INFRASTRUCTURE GROUP`,`A high round table above the clouds. Printing presses churn below.`,`> Leads the Web Hosting & Infrastructure Group within the invite-only`,`  Forbes Agency Council, shaping discussions on hosting, infrastructure,`,`  and agency trends.`,`> Published 2 bylined Forbes.com articles and contributed to 18 additional`,`  Forbes Agency Council pieces.`,`> Strengthened personal and company visibility through ongoing industry`,`  commentary and executive peer engagement.`,``,`PUBLISHED (Forbes, 2026):`,`  "The Lifespan Of SSL Certificates Is Shrinking, And Agencies Must Adapt"`,`  "Green Website Hosting: What Agencies Should Know, And Where To Start"`],exits:{down:`lobby`},items:[`press`],loot:`FORBES PEN`}},ma={plaque:`Brass, well polished. Partnerships, alliances, go-to-market. Still going.`,crt:`An amber monitor showing a blinking cursor. It's waiting for you, too.`,rack:`Blade servers for business-critical workloads. Uptime is a love language.`,banners:`Partner banners for cPanel and Plesk, hung the week WP Toolkit shipped.`,ledgers:`Joomla fundraising records. More than $1M raised, every line balanced.`,mic:`Worn foam windscreen. It has told the BoldGrid story on many stages.`,badges:`Lanyards from CloudFest, WordCamps, and Joomla World Conferences.`,terminal:`A local agent swarm, ten of them, arguing politely about a football match.`,diploma:`MIT Professional Education, 2025. Top 1% of the cohort.`,press:`A Forbes press proof, ink still wet on an SSL certificate op-ed.`},ha=[`COMMANDS:`,`  LOOK              re-read the current room`,`  GO <dir>          n / s / e / w / up / down`,`  <dir>             shortcut, e.g. NORTH or N`,`  EXAMINE <thing>   inspect an object`,`  TAKE <thing>      pick up the artifact here`,`  INVENTORY / I     list artifacts collected`,`  MAP               show known locations`,`  CONTACT           reach the real human`,`  RESUME            full career summary dump`,`  CLEAR             wipe the screen`,`  HELP              this list`],$={council:{x:0,y:0,short:`FORBES`},cloud:{x:1,y:0,short:`CLOUD`},academy:{x:0,y:1,short:`ACADEMY`},lobby:{x:1,y:1,short:`ATRIUM`},guild:{x:2,y:1,short:`GUILD`},studio:{x:0,y:2,short:`WORKSHOP`},forge:{x:1,y:2,short:`FORGE`},treasury:{x:2,y:2,short:`TREASURY`}},ga=(()=>{let e=new Set,t=[];for(let n of Object.values(Q))for(let r of Object.values(n.exits)){let i=[n.id,r].sort().join(`|`);e.has(i)||(e.add(i),t.push([n.id,r]))}return t})(),_a=96,va=58,ya=30,ba=74,xa=26,Sa=e=>ya+e*_a+ba/2,Ca=e=>ya+e*va+xa/2,wa=Math.max(...Object.values($).map(e=>e.x))+1,Ta=Math.max(...Object.values($).map(e=>e.y))+1,Ea=60+(wa-1)*_a+ba,Da=60+(Ta-1)*va+xa;function Oa({current:e,visited:t,onTravel:n}){let r=new Set(t),i=Q[e],a=new Map(Object.entries(i.exits).map(([e,t])=>[t,e]));return(0,q.jsxs)(`div`,{className:`crt-map`,children:[(0,q.jsxs)(`div`,{className:`crt-map-title`,children:[(0,q.jsx)(`span`,{children:`SECTOR MAP`}),(0,q.jsxs)(`span`,{children:[t.length,`/`,Object.keys($).length,` EXPLORED`]})]}),(0,q.jsxs)(`svg`,{viewBox:`0 0 ${Ea} ${Da}`,className:`crt-map-svg`,role:`img`,"aria-label":`Explored map`,children:[ga.map(([t,n])=>{let i=$[t],a=$[n];if(!i||!a)return null;let o=r.has(t)&&r.has(n),s=t===e||n===e;return!r.has(t)&&!r.has(n)?null:(0,q.jsx)(`line`,{x1:Sa(i.x),y1:Ca(i.y),x2:Sa(a.x),y2:Ca(a.y),className:`crt-map-link`,"data-state":o?s?`live`:`known`:`hint`},`${t}-${n}`)}),Object.entries($).map(([t,i])=>{let o=t===e,s=r.has(t),c=a.get(t),l=o?`here`:s?`seen`:c?`adjacent`:`unknown`,u=s||c?i.short:`??????`,d=ya+i.x*_a,f=ya+i.y*va;return(0,q.jsxs)(`g`,{className:`crt-map-node`,"data-state":l,onClick:c&&!o?()=>n(c):void 0,style:c&&!o?{cursor:`pointer`}:void 0,children:[(0,q.jsx)(`rect`,{x:d,y:f,width:ba,height:xa,rx:3}),(0,q.jsx)(`text`,{x:d+ba/2,y:f+xa/2+3.5,textAnchor:`middle`,children:u}),c&&!o?(0,q.jsx)(`title`,{children:`Go ${c} to ${u}`}):null]},t)})]})]})}var ka={n:`north`,north:`north`,s:`south`,south:`south`,e:`east`,east:`east`,w:`west`,west:`west`,u:`up`,up:`up`,d:`down`,down:`down`},Aa=Object.values(Q).filter(e=>e.loot).length;function ja(e,t){let n=[{text:``},{text:`== ${e.name} ==`,tone:`head`},...e.desc.map(e=>({text:e}))];return e.loot&&!t.includes(e.loot)&&n.push({text:`You notice an artifact here: ${e.loot}. (TAKE ${e.loot.split(` `)[0]})`,tone:`loot`}),n.push({text:`EXITS: ${Object.keys(e.exits).join(`, `).toUpperCase()}`,tone:`sys`}),n}function Ma(){let[e,t]=(0,r.useState)(`lobby`),[n,i]=(0,r.useState)([]),[a,o]=(0,r.useState)(``),[s,c]=(0,r.useState)([]),[l,u]=(0,r.useState)(-1),[d,f]=(0,r.useState)([`lobby`]),[p,m]=(0,r.useState)(!0),[h,g]=(0,r.useState)([{text:`MIKEDEMO SYSTEMS v2.026 — 64K CORE READY`,tone:`sys`},{text:`LOADING CURRICULUM VITAE ......... OK`,tone:`sys`},{text:``},{text:`${Z.name} — ${Z.title}`,tone:`head`},{text:`A TEXT ADVENTURE THROUGH A CAREER.`,tone:`head`},{text:``},{text:`Type HELP for commands. Collect all artifacts to win.`,tone:`sys`},...ja(Q.lobby,[])]),_=Q[e],v=(0,r.useRef)(null),y=(0,r.useRef)(null);(0,r.useEffect)(()=>{v.current?.scrollTo({top:v.current.scrollHeight})},[h]);let b=(0,r.useMemo)(()=>n.length===Aa,[n]);function x(e){g(t=>[...t,...e])}function S(e){let r=_.exits[e];if(!r)return x([{text:`You can't go ${e} from here.`,tone:`err`}]);t(r);let i=!d.includes(r);i&&f(e=>[...e,r]),x(ja(Q[r],n)),i&&x([{text:`MAP UPDATED — ${d.length+1}/${Object.keys($).length} sectors charted.`,tone:`sys`}])}function C(t){let r=t.trim().toLowerCase();if(x([{text:`> ${t}`,tone:`cmd`}]),!r)return;let[a,...o]=r.split(/\s+/),s=o.join(` `);if(ka[a]&&a!==`go`)return S(ka[a]);switch(a){case`go`:case`move`:case`walk`:return ka[s]?S(ka[s]):x([{text:`Go where? Try GO NORTH.`,tone:`err`}]);case`look`:case`l`:return x(ja(_,n));case`examine`:case`x`:case`inspect`:{let e=Object.keys(ma).find(e=>s.includes(e));return e&&_.items?.includes(e)?x([{text:ma[e]}]):x([{text:`You see nothing special about "${s||`that`}".`,tone:`err`}])}case`take`:case`get`:case`grab`:if(!_.loot)return x([{text:`There's nothing to take here.`,tone:`err`}]);if(n.includes(_.loot))return x([{text:`You already have it.`,tone:`err`}]);if(!s||_.loot.toLowerCase().includes(s.split(` `)[0])){let e=[...n,_.loot];i(e),x([{text:`Acquired: ${_.loot}  [${e.length}/${Aa}]`,tone:`loot`}]),e.length===Aa&&x([{text:``},{text:`*** ALL ARTIFACTS RECOVERED ***`,tone:`head`},{text:`You have assembled a full career: partnerships, platforms,`,tone:`loot`},{text:`open source stewardship, and a Forbes byline.`,tone:`loot`},{text:`Hire the player: ${Z.email}`,tone:`loot`}]);return}return x([{text:`No "${s}" here.`,tone:`err`}]);case`inventory`:case`inv`:case`i`:return x(n.length?[{text:`INVENTORY [${n.length}/${Aa}]:`,tone:`sys`},...n.map(e=>({text:`  · ${e}`}))]:[{text:`Your pack is empty. Artifacts await.`,tone:`sys`}]);case`map`:return m(e=>!e),x([{text:`SECTOR MAP ${p?`HIDDEN`:`SHOWN`}.`,tone:`sys`},{text:`CHARTED SECTORS:`,tone:`sys`},...Object.values(Q).map(t=>d.includes(t.id)?{text:`  ${t.id===e?`»`:` `} ${t.name}`}:{text:`    ?????? (unexplored)`,tone:`sys`})]);case`contact`:case`hire`:return x([{text:`TRANSMISSION CHANNELS:`,tone:`sys`},{text:`  EMAIL     ${Z.email}`},{text:`  PHONE     ${Z.phone}`},{text:`  LINKEDIN  ${Z.linkedin}`},{text:`  WEB       ${Z.site}`},{text:`  BASE      ${Z.location}`}]);case`resume`:case`cv`:return x([{text:`FULL DUMP:`,tone:`sys`},...Object.values(Q).flatMap(e=>[{text:``},{text:`== ${e.name} ==`,tone:`head`},...e.desc.map(e=>({text:e}))])]);case`clear`:case`cls`:return g([{text:`Screen cleared.`,tone:`sys`}]);case`help`:case`?`:return x(ha.map(e=>({text:e,tone:`sys`})));default:return x([{text:`I don't know how to "${a}". Type HELP.`,tone:`err`}])}}function ee(e){e.preventDefault();let t=a;c(e=>[t,...e].slice(0,50)),u(-1),o(``),C(t)}return(0,q.jsx)(`main`,{className:`crt-shell min-h-screen px-3 py-4 sm:px-6 sm:py-8`,onClick:()=>{window.matchMedia(`(pointer: fine)`).matches&&y.current?.focus()},children:(0,q.jsxs)(`div`,{className:`mx-auto flex h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col crt-frame`,children:[(0,q.jsxs)(`header`,{className:`flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-b border-[var(--phos-dim)] px-3 py-2 text-[0.65rem] tracking-[0.2em] sm:text-xs`,children:[(0,q.jsx)(`h1`,{className:`m-0 min-w-0 text-[0.65rem] font-normal tracking-[0.2em] sm:text-xs`,children:`Mike Demopoulos — Interactive CV & Text Adventure`}),(0,q.jsxs)(`div`,{className:`flex items-center gap-2 sm:gap-3`,children:[(0,q.jsx)(`span`,{className:`hidden sm:inline`,children:_.name}),(0,q.jsxs)(`a`,{href:`/adventure/Mike_Demopoulos_CV.pdf`,target:`_blank`,rel:`noopener noreferrer`,className:`crt-key pdf-key inline-flex items-center gap-1`,"aria-label":`Open PDF version of CV`,children:[(0,q.jsx)(fa,{icon:pa,size:`sm`}),(0,q.jsx)(`span`,{children:`PDF CV`})]}),(0,q.jsxs)(`span`,{children:[n.length,`/`,Aa,` `,b?`· COMPLETE`:``]})]})]}),p?(0,q.jsxs)(`section`,{"aria-labelledby":`map-heading`,children:[(0,q.jsx)(`h2`,{id:`map-heading`,className:`sr-only`,children:`Explored sector map`}),(0,q.jsx)(Oa,{current:e,visited:d,onTravel:e=>C(e)})]}):null,(0,q.jsx)(`h2`,{className:`sr-only`,children:`Terminal output`}),(0,q.jsx)(`div`,{ref:v,className:`crt-screen flex-1 overflow-y-auto px-3 py-3 sm:px-5`,children:h.map((e,t)=>(0,q.jsx)(`p`,{"data-tone":e.tone??`body`,className:`crt-line`,children:e.text||`\xA0`},t))}),(0,q.jsxs)(`form`,{onSubmit:ee,className:`flex items-center gap-2 border-t border-[var(--phos-dim)] px-3 py-2 sm:px-5`,children:[(0,q.jsx)(`span`,{"aria-hidden":!0,className:`crt-prompt`,children:`>`}),(0,q.jsx)(`input`,{ref:y,value:a,onChange:e=>o(e.target.value),onKeyDown:e=>{if(e.key===`ArrowUp`){e.preventDefault();let t=Math.min(l+1,s.length-1);t>=0&&(u(t),o(s[t]??``))}else if(e.key===`ArrowDown`){e.preventDefault();let t=l-1;u(t),o(t>=0?s[t]??``:``)}},"aria-label":`Enter a command`,autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,spellCheck:!1,className:`crt-input min-w-0 flex-1`,placeholder:`type a command…`})]}),(0,q.jsx)(`h2`,{className:`sr-only`,children:`Command shortcuts and navigation`}),(0,q.jsxs)(`nav`,{className:`flex flex-wrap gap-1.5 border-t border-[var(--phos-dim)] px-3 py-2 sm:px-5`,children:[[`look`,`help`,`map`,`inventory`,`contact`,`resume`].map(e=>(0,q.jsx)(`button`,{type:`button`,className:`crt-key`,onClick:()=>C(e),children:e.toUpperCase()},e)),Object.keys(_.exits).map(e=>(0,q.jsx)(`button`,{type:`button`,className:`crt-key`,onClick:()=>C(e),children:e.toUpperCase()},e))]})]})})}export{Ma as component};