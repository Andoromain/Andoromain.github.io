import{z as p,g,a as s,A as a,B as h,C as d,c as i,h as f,k as m,l as y,m as x,u as C}from"./index-BJ2Vy_5J.js";import{h as v}from"./render-DjCLUGvI.js";import{L as Q}from"./logo-Cul9yXER.js";const _=p({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:r}){const{proxy:{$q:t}}=g(),e=s(h,a);if(e===a)return console.error("QPage needs to be a deep child of QLayout"),a;if(s(d,a)===a)return console.error("QPage needs to be child of QPageContainer"),a;const c=i(()=>{const n=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof o.styleFn=="function"){const u=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return o.styleFn(n,u)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-n+"px":t.screen.height===0?n!==0?`calc(100vh - ${n}px)`:"100vh":t.screen.height-n+"px"}}),l=i(()=>`q-page${o.padding===!0?" q-layout-padding":""}`);return()=>f("main",{class:l.value,style:c.value},v(r.default))}}),k={__name:"IndexPage",setup(o){return(r,t)=>(y(),m(_,{class:"flex flex-center"},{default:x(()=>t[0]||(t[0]=[C("img",{alt:"Quasar logo",src:Q,style:{width:"200px",height:"200px"}},null,-1)])),_:1}))}};export{k as default};
