import{A,B as q,C as I,_ as z,d as O,r as L,o as E,c as F,w as V,x as T,k as i,D as j,b as s,E as C,a as f,s as m,v as h,t as b,g as G,y as H}from"./index.a5400c82.js";let g;function $(e,t){for(const n of Object.keys(t))e[n]=t[n];return e}function Y(){const e=I();if(!!e)return g||A(!0).run(()=>{const{$router:n}=e.proxy;g=q($({},n.currentRoute)),n.afterEach(p=>{$(g,p)})}),g}function J(){const e=I();if(!e)throw new Error("No current instance found");const{proxy:t}=e;return t.$router}const D="http://213.194.169.88:8080",K=O({name:"Login",props:{inModal:{default:!1,type:Boolean}},emits:["loginResult"],setup(e,{emit:t}){const n=J(),p=Y(),u=T(),c=i(),d=i(),v=i(),o=i(""),y=i(!1),w=i(),a=i({botName:"Athenea1",url:D,username:"freq",password:"freq"}),S=l=>{t("loginResult",l)},M=()=>{var r;const l=(r=w.value)==null?void 0:r.checkValidity();return c.value=l||a.value.username!=="",d.value=l||a.value.password!=="",l},R=()=>{a.value.url=D,a.value.username="",a.value.password="",c.value=null,d.value=null,o.value=""},P=l=>{l.preventDefault(),R()},B=()=>{o.value="",H(u.nextBotId).login(a.value).then(()=>{var U,k;const r=u.nextBotId;if(u.addBot({botName:a.value.botName,botId:r,botUrl:a.value.url}),u.selectedBot===""&&(console.log(`selecting bot ${r}`),u.selectBot(r)),S(!0),u.allRefreshFull(),e.inModal===!1)if(typeof((U=p.query)==null?void 0:U.redirect)=="string"){const N=n.resolve({path:(k=p.query)==null?void 0:k.redirect});N.route.name!=="404"?n.push(N.route.path):n.push("/")}else n.push("/")}).catch(r=>{y.value=!1,console.error(r),r.response&&r.response.status===401?(c.value=!1,d.value=!1,o.value="Connected to bot, however Login failed, Username or Password wrong."):(v.value=!1,o.value=`Login failed.
Please verify that the bot is running, the Bot API is enabled and the URL is reachable.
You can verify this by navigating to ${a.value.url}/api/v1/ping to make sure the bot API is reachable`,a.value.url!==window.location.origin&&(y.value=!0)),console.error(o.value),S(!1)})};return{nameState:c,pwdState:d,urlState:v,errorMessage:o,auth:a,checkFormValidity:M,resetLogin:R,handleReset:P,handleOk:l=>{l.preventDefault(),B()},handleSubmit:B,formRef:w,errorMessageCORS:y}},components:{Card:j}}),Q={class:"space-y-1"},W=s("br",null,null,-1),X=s("br",null,null,-1),Z=s("br",null,null,-1),_=s("br",null,null,-1),x=s("button",{type:"reset"},"Reset ",-1),ee=s("br",null,null,-1);function te(e,t,n,p,u,c){const d=L("router-link"),v=L("DefaultLayout");return E(),F(v,null,{default:V(()=>[s("div",Q,[s("form",{ref:"formRef",novalidate:"",onSubmit:t[5]||(t[5]=C((...o)=>e.handleSubmit&&e.handleSubmit(...o),["stop","prevent"])),onReset:t[6]||(t[6]=(...o)=>e.handleReset&&e.handleReset(...o))},[f(" Bot Name "),m(s("input",{class:"bg-inherit rounded-lg focus:outline","onUpdate:modelValue":t[0]||(t[0]=o=>e.auth.botName=o),placeholder:"nombre del bot"},null,512),[[h,e.auth.botName,void 0,{lazy:!0}]]),s("p",null,"Botname is: "+b(e.auth.botName),1),W,f(" API Url "),m(s("input",{class:"bg-inherit","onUpdate:modelValue":t[1]||(t[1]=o=>e.auth.url=o),placeholder:"direccion del bot"},null,512),[[h,e.auth.url,void 0,{lazy:!0}]]),s("p",null,"Bot Url is: "+b(e.auth.url),1),X,f(" Username "),m(s("input",{class:"bg-inherit","onUpdate:modelValue":t[2]||(t[2]=o=>e.auth.username=o),placeholder:"username"},null,512),[[h,e.auth.username,void 0,{lazy:!0}]]),s("p",null,"Username is: "+b(e.auth.username),1),Z,f(" Password "),m(s("input",{class:"bg-inherit","onUpdate:modelValue":t[3]||(t[3]=o=>e.auth.password=o),placeholder:"password"},null,512),[[h,e.auth.password,void 0,{lazy:!0}]]),s("p",null,"Username password is: "+b(e.auth.password),1),_,x,ee,s("button",{onSubmit:t[4]||(t[4]=C((...o)=>e.handleSubmit&&e.handleSubmit(...o),["stop","prevent"]))},"Submmit",32),G(d,{to:"/"},{default:V(()=>[f("Go to Home")]),_:1})],544)])]),_:1})}var ne=z(K,[["render",te]]);export{ne as default};
