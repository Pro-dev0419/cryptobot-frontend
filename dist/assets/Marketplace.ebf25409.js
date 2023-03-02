import{_ as $}from"./DefaultLayout.c6723f83.js";import{d as l,_ as c,o as i,f as g,b as p,t as x,K as h,r as t,c as B,w as a,J as n,D as S,g as r}from"./index.a5400c82.js";const k=l({name:"ProgressBar",components:{},props:{percent:{required:!0,default:0,type:String}},setup(){}}),w={class:"relative w-full bg-[#ffffff4b] h-0.5 rounded"};function C(e,o,u,d,f,m){return i(),g("div",w,[p("div",{class:"absolute bg-primary h-full",style:h("width:"+e.percent+"%")},x(e.percent)+"%",5)])}var D=c(k,[["render",C]]);const P=l({name:"Marketplace",props:{},emits:[],setup(){const e=n(()=>[{index:"1",name:"Bitcoin",category:"crypto",popularity:"40",revenue:"$33",minStartBalance:"$10",price:"$50",profileTrader:"Info",subscribe:"Subscribe"},{index:"2",name:"Aptos",category:"crypto",popularity:"70",revenue:"$53",minStartBalance:"$15",price:"$70",profileTrader:"Info",subscribe:"Subscribe"}]);return{tableFields:n(()=>[{value:"index",text:"NO"},{value:"name",text:"Name"},{value:"category",text:"Category"},{value:"popularity",text:"Popularity"},{value:"revenue",text:"Revenue"},{value:"minStartBalance",text:" Min Starting Balance"},{value:"price",text:"Price"},{value:"profileTrader",text:"Profile Trader/Info"},{value:"subscribe",text:"Subscribe"}]),marketplaceData:e}},components:{Card:S,DefaultLayout:$,ProgressBar:D}}),N=p("button",{class:"bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-1 px-4 rounded-full"}," Subscribe ",-1);function T(e,o,u,d,f,m){const b=t("progress-bar"),_=t("easy-data-table"),y=t("Card"),v=t("DefaultLayout");return i(),B(v,null,{default:a(()=>[r(y,null,{default:a(()=>[r(_,{class:"min-w-full",items:e.marketplaceData,headers:e.tableFields,"hide-footer":""},{"item-popularity":a(s=>[r(b,{percent:s.popularity},null,8,["percent"])]),"item-subscribe":a(s=>[N]),_:1},8,["items","headers"])]),_:1})]),_:1})}var L=c(P,[["render",T]]);export{L as default};
