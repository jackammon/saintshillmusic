import{u as B,r as P,o as E,g as L,w as F,a as c,c as p,b as n,d as t,F as w,e as $,V as j,f as W,h as f,t as m,i as J,j as K,k as C,l as H,m as _,n as Y,p as Q,q as v,s as N,v as Z,x as k,y as x,z as h,A as b,B as X,C as l,D as R,E as S,G as O,H as ee,I as te,J as se,K as ae,L as ne,M as le,N as oe,O as re,P as ie,Q as ce}from"./.pnpm-BGi-ANFX.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const ue={__name:"NavDrawer",props:{isOpen:Boolean},emits:["update:isOpen"],setup(a,{emit:o}){const s=B(),i=P(null),e=o,r=a,u=[{title:"Home",link:"/"},{title:"Music",link:"/music"},{title:"Merch",link:"/merch"},{title:"Links",link:"/links"},{title:"Live Recording",link:"/events"}];function d(y){e("update:isOpen",!1),s.push(y)}return E(()=>{L.set(i.value,{y:"-100%"}),L.set(".nav-link",{y:64,opacity:1})}),F(()=>r.isOpen,y=>{y?L.timeline().to(i.value,{y:"0%",duration:1,ease:"power4.inOut"}).to(".nav-link",{y:0,stagger:.1,ease:"power2.out",duration:.5},1/1.5):L.timeline().to(i.value,{y:"-100%",duration:1,ease:"power4.inOut"}).set(".nav-link",{y:64})}),(y,D)=>(c(),p("div",{class:"nav-drawer",ref_key:"drawer",ref:i},[n(J,{style:{"background-color":"#0054ff",color:"#fffdf9","margin-top":"84px"}},{default:t(()=>[(c(),p(w,null,$(u,(A,G)=>n(j,{key:G,onClick:yt=>d(A.link),style:{"padding-left":"0 !important","border-radius":"4px"}},{default:t(()=>[n(W,{color:a.isOpen?"#0054ff":"#e9e9e9",class:"text-left tab nav-link"},{default:t(()=>[f(m(A.title),1)]),_:2},1032,["color"])]),_:2},1032,["onClick"])),64))]),_:1})],512))}},de={key:0,class:"floating-footer"},pe={__name:"App",setup(a){const o=P(!1);B();const s=K(),i=C(()=>s.path==="/"?"white":o.value?"#e9e9e9":"black");return C(()=>s.path==="/"),(e,r)=>{const u=H("router-view");return c(),_(Y,{id:"app"},{default:t(()=>[n(Z,{flat:"",color:"rgba(0, 0, 0, 0.0)",class:"nav"},{default:t(()=>[n(Q,{style:{width:"100%"}}),n(v,{icon:"",size:"x-large",ripple:!1,variant:"plain",class:"hidden-md-and-up",onClick:r[0]||(r[0]=d=>o.value=!o.value),color:i.value},{default:t(()=>[n(N,{size:"35"},{default:t(()=>[f(m(o.value?"mdi-close":"mdi-menu"),1)]),_:1})]),_:1},8,["color"]),n(v,{icon:"",size:"x-large",ripple:!1,variant:"plain",class:"hidden-sm-and-down",onClick:r[1]||(r[1]=d=>o.value=!o.value),color:i.value,style:{"margin-top":"3px"}},{default:t(()=>[n(N,{size:"50"},{default:t(()=>[f(m(o.value?"mdi-close":"mdi-menu"),1)]),_:1})]),_:1},8,["color"])]),_:1}),n(ue,{isOpen:o.value,"onUpdate:isOpen":r[2]||(r[2]=d=>o.value=d)},null,8,["isOpen"]),o.value?(c(),p("div",de," Saints' Hill Music ")):k("",!0),n(X,{class:"pa-0 fill-height"},{default:t(()=>[n(x,{class:"fill-height app-padding",fluid:"",style:{"padding-top":"56px"}},{default:t(()=>[n(h,{align:"center",justify:"center"},{default:t(()=>[n(b,{class:"text-center"},{default:t(()=>[n(u)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}},me="/assets/landing-DOhp_muN.mp4",_e="/assets/logo_white-C7prNAZi.png",g=(a,o)=>{const s=a.__vccOpts||a;for(const[i,e]of o)s[i]=e;return s},fe={},T=a=>(R("data-v-b2638352"),a=a(),S(),a),he=T(()=>l("div",{class:"video-background"},[l("video",{autoplay:"",muted:"",loop:"",playsinline:""},[l("source",{src:me,type:"video/mp4"})]),l("div",{class:"video-overlay"})],-1)),be={class:"title"},ge={ref:"textElement"},ye=T(()=>l("img",{src:_e,alt:"Saints' Hill Music",class:"landing-img"},null,-1)),ve=[ye];function ke(a,o,s,i,e,r){return c(),_(x,null,{default:t(()=>[he,n(h,{class:"text-center"},{default:t(()=>[l("div",be,[l("div",ge,ve,512)])]),_:1})]),_:1})}const we=g(fe,[["render",ke],["__scopeId","data-v-b2638352"]]),$e={name:"Home",components:{Landing:we}};function xe(a,o,s,i,e,r){const u=H("Landing");return c(),p("div",null,[n(u)])}const Ae=g($e,[["render",xe]]);O.extend(ee);const Le={name:"AlbumRow",props:{album:{type:Object,required:!0}},setup(){const{mdAndUp:a}=te();return{mdAndUp:a,isRecordReleased:s=>{const i=O(),e=s.date?O(s.date):null;return e&&i.isSameOrAfter(e)}}}},Re=a=>(R("data-v-2b530151"),a=a(),S(),a),Se=["src"],Ve={class:"content"},Ie={class:"release-title"},Oe={class:"release-year"},Me={class:"release-info"},Ce=Re(()=>l("br",null,null,-1)),Ne={class:"release-credits"},Be={class:"release-location"},Pe={key:0,class:"buttons"};function He(a,o,s,i,e,r){return c(),_(h,{class:"album-row"},{default:t(()=>[n(b,{cols:i.mdAndUp?5:12,class:"gap-right"},{default:t(()=>[s.album.albumArt?(c(),p("img",{key:0,src:s.album.albumArt,alt:"Album Art",class:"minimal-shadow"},null,8,Se)):k("",!0)]),_:1},8,["cols"]),n(b,{cols:i.mdAndUp?7:12,class:"gap-left"},{default:t(()=>[l("div",Ve,[l("h2",Ie,m(s.album.title),1),l("p",Oe,m(s.album.year),1),l("p",Me,m(s.album.recordingInfo),1),Ce,l("div",Ne,[(c(!0),p(w,null,$(s.album.credits,(u,d)=>(c(),p("p",{key:d},m(u),1))),128))]),l("p",Be,m(s.album.location),1),s.album.urls?(c(),p("div",Pe,[n(v,{variant:"flat",disabled:"",size:"large",rounded:"0",color:"black",style:{"margin-right":"10px"}},{default:t(()=>[f(m(i.isRecordReleased(s.album)?"BUY":"PRE-ORDER"),1)]),_:1}),n(v,{variant:"flat",disabled:"",size:"large",rounded:"0",color:"black"},{default:t(()=>[f(m(i.isRecordReleased(s.album)?"BUY":"PRE-SAVE"),1)]),_:1})])):k("",!0)])]),_:1},8,["cols"])]),_:1})}const U=g(Le,[["render",He],["__scopeId","data-v-2b530151"]]),Te="/assets/family-C50c73pu.webp",Ue={components:{AlbumRow:U},data(){return{albums:[{id:1,albumArt:Te,title:"Family",year:"Releasing August, 30th",date:"2024-08-30",recordingInfo:"Recorded recorded at The Woodshed (Woodman's house) in Newberg, Oregon / Produced by Michael Rabb and Greg Woodman / Mastered by Michael Rabb / Artwork by Tracy White",credits:["Vocals, Guitar / Jacob Vigil","Vocals / Hannah Brown","Vocals / Molly Onyemaobim","Vocals / Lauren Fotenos","Vocals / Summer Lamb","Guitar / Nick Sullivan","Keys, Guitar / Jack Ammon","Keys, Guitar, Bass, Drums / Michael Rabb"],location:"These songs were written and recorded in Newberg, Oregon.",urls:{spotify:null,apple:null}}]}}};function qe(a,o,s,i,e,r){const u=U;return c(),_(x,null,{default:t(()=>[(c(!0),p(w,null,$(e.albums,d=>(c(),_(u,{key:d.id,album:d},null,8,["album"]))),128))]),_:1})}const ze=g(Ue,[["render",qe]]),De={},M=a=>(R("data-v-0d4c2f16"),a=a(),S(),a),Ge=M(()=>l("h1",{style:{"margin-bottom":"20px"}},"Family Live Album Recording",-1)),Ee=M(()=>l("h2",null,"August 31st @ Chehalem Cultural Center",-1)),Fe=M(()=>l("body",{style:{"text-align":"left"}},[f(" Join us on Saturday, August 31st, in the Chehalem Cultural Center Ballroom for the live recording of Saints’ Hill Music’s debut worship album. "),l("br"),l("br"),f("This is a unique opportunity to be part of a special evening where we capture the energy and spirit of live worship for the album. As this is a recording session, please be mindful that there may be brief pauses or retakes to ensure the best possible sound quality. "),l("br"),l("br"),f("Doors open at 6:30pm, and the recording will begin at 7pm. We look forward to worshiping together and creating something beautiful that will resonate far beyond this night. ")],-1));function je(a,o){return c(),_(x,{style:{"min-height":"100vh","padding-top":"20px","max-width":"1200px"}},{default:t(()=>[n(h,{style:{"margin-bottom":"-20px"}},{default:t(()=>[n(b,{style:{"text-align":"left"}},{default:t(()=>[Ge,Ee]),_:1})]),_:1}),n(h,null,{default:t(()=>[n(b,null,{default:t(()=>[Fe]),_:1})]),_:1}),n(h,{style:{"margin-bottom":"20px"}},{default:t(()=>[n(b,{style:{"text-align":"left","margin-top":"60px"}},{default:t(()=>[n(v,{variant:"tonal",size:"large",href:"https://www.saintshill.church/live-album-recording",target:"_blank",rel:"noopener noreferrer",style:{"font-family":"'Hanken Grotesk' !important",width:"100%","max-width":"400px"}},{default:t(()=>[f("Get Tickets")]),_:1})]),_:1})]),_:1})]),_:1})}const We=g(De,[["render",je],["__scopeId","data-v-0d4c2f16"]]),Je="/assets/lp_front-gzmd1qxx.webp",Ke="/assets/lp_back-RAjg2Mjo.webp",Ye="/assets/merch-0_yY_GT6.webp",Qe={data(){return{images:[{src:Je,alt:"Merch 1"},{src:Ke,alt:"Merch 2"},{src:Ye,alt:"Merch 3"}],currentIndex:0}}},q=a=>(R("data-v-61d9b1da"),a=a(),S(),a),Ze=q(()=>l("h1",null,'Family 12" Vinyl',-1)),Xe=q(()=>l("h2",null,"Pre-Order opens August 18th",-1));function et(a,o,s,i,e,r){return c(),_(x,null,{default:t(()=>[n(h,{class:"header"},{default:t(()=>[n(b,{style:{"text-align":"left"}},{default:t(()=>[Ze,Xe]),_:1})]),_:1}),n(h,null,{default:t(()=>[n(b,{cols:"12",class:"image-container"},{default:t(()=>[n(se,{cycle:"","hide-delimiters":"","show-arrows":"hover",interval:"5000"},{default:t(()=>[(c(!0),p(w,null,$(e.images,(u,d)=>(c(),_(ae,{key:d,src:u.src,alt:u.alt},null,8,["src","alt"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})}const tt=g(Qe,[["render",et],["__scopeId","data-v-61d9b1da"]]),st={name:"LinkItem",props:{title:{type:String,required:!0},subtitle:{type:String,required:!1},url:{type:String,required:!0},albumArt:{type:String,default:null},color:{type:String,required:!1}}},at={class:"link-content"},nt={class:"title"},lt=["src"],ot={key:1,class:"subtitle"};function rt(a,o,s,i,e,r){return c(),_(v,{href:s.url,class:"link-item",target:"_blank",color:"white",size:"x-large",rel:"noopener noreferrer"},{default:t(()=>[l("div",at,[l("span",nt,m(s.title),1),s.albumArt?(c(),p("img",{key:0,src:s.albumArt,alt:"Album Art",class:"album-art"},null,8,lt)):k("",!0),s.subtitle?(c(),p("span",ot,m(s.subtitle),1)):k("",!0)])]),_:1},8,["href"])}const z=g(st,[["render",rt],["__scopeId","data-v-d8daf53b"]]),it={name:"LinktreeLandingPage",components:{LinkItem:z},data(){return{profileImage:"path/to/your/profile-image.jpg",artistName:"SAINTS' HILL MUSIC",links:[{title:"Purchase Live Recording Tickets",subtitle:null,url:"https://www.saintshill.church/live-album-recording",color:"#0054ff"},{title:'Pre-Order "Family" On Vinyl',url:"https://saintshillmusic.com/merch",color:"#0054ff"}]}}},ct={class:"linktree-container"},ut={class:"header"},dt={class:"artist-name"},pt=ne('<div class="social-links" data-v-b12d06b0><a href="https://open.spotify.com/artist/artist_id" target="_blank" class="social-link" data-v-b12d06b0><i class="fab fa-spotify" data-v-b12d06b0></i></a><a href="https://music.apple.com/us/artist/artist_id" target="_blank" class="social-link" data-v-b12d06b0><i class="fab fa-apple" data-v-b12d06b0></i></a><a href="https://www.youtube.com/channel/channel_id" target="_blank" class="social-link" data-v-b12d06b0><i class="fab fa-youtube" data-v-b12d06b0></i></a></div>',1),mt={class:"links"},_t={key:0,class:"empty"};function ft(a,o,s,i,e,r){const u=z;return c(),p("div",ct,[l("div",ut,[l("h1",dt,m(e.artistName),1),pt]),l("div",mt,[(c(!0),p(w,null,$(e.links,(d,y)=>(c(),_(u,{key:y,title:d.title,subtitle:d.subtitle,url:d.url,"album-art":d.albumArt},null,8,["title","subtitle","url","album-art"]))),128)),e.links.length?k("",!0):(c(),p("div",_t,"come back soon for new updates"))])])}const I=g(it,[["render",ft],["__scopeId","data-v-b12d06b0"]]),ht=[{path:"/",name:"home",component:Ae},{path:"/music",name:"music",component:ze},{path:"/merch",name:"merch",component:tt},{path:"/events",name:"events",component:We},{path:"/family",name:"family",component:I},{path:"/updates",name:"updates",component:I},{path:"/links",name:"links",component:I},{path:"/:pathMatch(.*)*",redirect:"/"}],bt=le({history:oe(),routes:ht}),gt=re({theme:{defaultTheme:"light"}}),V=ie(pe);V.use(bt);V.use(gt);V.use(ce,{config:{id:"G-2BDMJ27MKS"}});V.mount("#app");
