import{_ as h,d as x,r as y,o as l,c as _,w as b,k as i,z as v,D as w,g as k,b as e,f as d,F as S,l as K,t as A,h as C,s as p,v as u,I as D,a as c}from"./index.a5400c82.js";import{_ as V}from"./DefaultLayout.c6723f83.js";const $="http://localhost:3003/api",P=x({name:"Kucoin",props:{},emits:[],setup(){const t=i([]),s=i(null),r=i(null),o=i(null),m=v();return{errors:t,apiKey:s,apiSecret:r,apiPassword:o,handleSubmit:async n=>{n.preventDefault(),s.value&&r.value&&await D.post(`${$}/apikey/kucoin`,{user_id:m.user.user.id,key:s.value,secret:r.value,password:o.value}),t.value=[],s.value||t.value.push("Api Key required."),r.value||t.value.push("Api Secret required."),o.value||t.value.push("Api Secret required.")}}},components:{Card:w,DefaultLayout:V}}),B=e("h2",{class:"text-3xl mb-2"},"Kucoin",-1),L=e("p",{class:"text-lg mb-2"},"Please fill your api keys to connect the bots to your account",-1),N={class:"w-full"},U={class:"space-y-4 md:space-y-6"},q={key:0},F={class:"text-red-500"},T={class:"flex items-center"},z=e("label",{for:"apikey",class:"w-28 mb-2 text-sm font-medium text-gray-900 text-white"},[c(" Api Key "),e("span",{class:"text-red-500"},"*")],-1),E={class:"flex items-center"},I=e("label",{for:"apisecret",class:"w-28 mb-2 text-sm font-medium text-gray-900 text-white"},[c("Api Secret "),e("span",{class:"text-red-500"},"*")],-1),M={class:"flex items-center"},W=e("label",{for:"apipassword",class:"w-28 mb-2 text-sm font-medium text-gray-900 text-white"},[c("Api Password "),e("span",{class:"text-red-500"},"*")],-1),j=e("button",{type:"submit",class:"bg-transparent hover:bg-emerald-500 text-emerald-600 font-semibold hover:text-white py-2 px-10 ml-28 border border-emerald-500 hover:border-transparent rounded-lg"}," Send",-1);function G(t,s,r,o,m,f){const n=y("Card"),g=y("DefaultLayout");return l(),_(g,null,{default:b(()=>[B,L,k(n,{class:"!h-fit py-1"},{default:b(()=>[e("div",N,[e("div",U,[t.errors.length?(l(),d("p",q,[e("ul",null,[(l(!0),d(S,null,K(t.errors,a=>(l(),d("li",F,A(a),1))),256))])])):C("",!0),e("form",{class:"space-y-4 md:space-y-6",action:"#",onSubmit:s[3]||(s[3]=(...a)=>t.handleSubmit&&t.handleSubmit(...a))},[e("div",T,[z,p(e("input",{type:"apikey",name:"apikey",id:"apikey","onUpdate:modelValue":s[0]||(s[0]=a=>t.apiKey=a),class:"bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500"},null,512),[[u,t.apiKey]])]),e("div",E,[I,p(e("input",{type:"apisecret",name:"apisecret",id:"apisecret","onUpdate:modelValue":s[1]||(s[1]=a=>t.apiSecret=a),class:"bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500"},null,512),[[u,t.apiSecret]])]),e("div",M,[W,p(e("input",{type:"apipassword",name:"apipassword",id:"apipassword","onUpdate:modelValue":s[2]||(s[2]=a=>t.apiPassword=a),class:"bg-opacity-25 border border-gray-300 sm:text-sm rounded-lg block flex-1 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-gray-500"},null,512),[[u,t.apiPassword]])]),j],32)])])]),_:1})]),_:1})}var O=h(P,[["render",G]]);export{O as default};
