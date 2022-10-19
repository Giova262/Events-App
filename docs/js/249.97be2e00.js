"use strict";(globalThis["webpackChunkhistoria_frontend"]=globalThis["webpackChunkhistoria_frontend"]||[]).push([[249],{7638:(e,a,t)=>{t.r(a),t.d(a,{default:()=>J});var o=t(3673),l=t(8880),n=t(2323);const r=e=>((0,o.dD)("data-v-78ec5099"),e=e(),(0,o.Cn)(),e),i={class:"row bg-black flex flex-center text-white"},s=r((()=>(0,o._)("div",{class:"col-12 bg-black"},[(0,o._)("div",{class:"sliding-background"})],-1))),c={class:"col-12 row"},d={class:"col-2 q-mx-md q-my-sm"},u={class:"col q-mx-md q-py-xs0"},m=(0,o.Uk)("Cargar"),p={class:"col-12 row"},v={class:"text-caption bg-grey-3 text-grey-9 text-center q-px-sm"},b={class:"q-pa-sm q-ma-none"},w={class:"text-green-9 text-bold jg-text-16 text-center"},g={class:"text-blue-9 jg-text-14"},f={class:"text-caption text-grey-8 jg-text-12"},y=r((()=>(0,o._)("div",{class:"absolute-full flex flex-center bg-negative text-white"}," Cannot load image ",-1)));function x(e,a,t,r,x,h){const k=(0,o.up)("q-input"),_=(0,o.up)("q-item-label"),q=(0,o.up)("q-item-section"),C=(0,o.up)("q-item"),Z=(0,o.up)("q-virtual-scroll"),Q=(0,o.up)("q-popup-edit"),P=(0,o.up)("q-tooltip"),W=(0,o.up)("q-btn"),E=(0,o.up)("q-img"),S=(0,o.up)("q-card-section"),z=(0,o.up)("q-space"),V=(0,o.up)("q-card-actions"),j=(0,o.up)("q-card"),N=(0,o.up)("q-separator"),I=(0,o.up)("ModificarEvento"),H=(0,o.up)("q-dialog"),U=(0,o.up)("q-page"),T=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(U,{class:""},{default:(0,o.w5)((()=>[(0,o._)("div",i,[s,(0,o._)("div",c,[(0,o._)("div",d,[(0,o.Wm)(k,{dark:"",color:"orange",filled:"",dense:"",clearable:"",modelValue:e.personaSelected.nombre,"onUpdate:modelValue":a[2]||(a[2]=a=>e.personaSelected.nombre=a),label:"Filtrar por persona"},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{modelValue:e.personaSelected,"onUpdate:modelValue":a[1]||(a[1]=a=>e.personaSelected=a),"auto-save":""},{default:(0,o.w5)((t=>[(0,o.Wm)(k,{modelValue:e.buscarPersonaInput,"onUpdate:modelValue":a[0]||(a[0]=a=>e.buscarPersonaInput=a),dense:"",autofocus:"",counter:"",clearable:"",onKeyup:(0,l.D2)(t.set,["enter"])},null,8,["modelValue","onKeyup"]),(0,o.Wm)(Z,{style:{"max-height":"300px"},items:e.opcionesPersonasComputed,separator:""},{default:(0,o.w5)((({item:a,index:t})=>[((0,o.wg)(),(0,o.j4)(C,{key:t,dense:""},{default:(0,o.w5)((()=>[(0,o.wy)(((0,o.wg)(),(0,o.j4)(q,{onClick:()=>e.onPersonaClick(a)},{default:(0,o.w5)((()=>[(0,o.Wm)(_,{class:"text-grey-9"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(a.nombre),1)])),_:2},1024),(0,o.Wm)(_,{class:"text-grey-6"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(a.id),1)])),_:2},1024)])),_:2},1032,["onClick"])),[[T]])])),_:2},1024))])),_:1},8,["items"])])),_:1},8,["modelValue"])])),_:1},8,["modelValue"])]),(0,o._)("div",u,[(0,o.Wm)(W,{flat:"",filled:"",color:"green-5",onClick:e.onCargarGrilla,round:"",size:"sm",icon:"play_arrow",class:"bg-white q-my-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(P,null,{default:(0,o.w5)((()=>[m])),_:1})])),_:1},8,["onClick"])])]),(0,o._)("div",p,[e.isReady?((0,o.wg)(),(0,o.j4)(Z,{key:0,items:e.eventos,"virtual-scroll-horizontal":!0,class:"q-pt-md q-pb-xl bg-transparent",style:{width:"100%","z-index":"9"}},{default:(0,o.w5)((({item:a,index:t})=>[((0,o.wg)(),(0,o.iD)("div",{key:t,class:"row items-center"},[(0,o.Wm)(j,{class:"my-card",flat:"",bordered:"",style:{height:"78vh !important"}},{default:(0,o.w5)((()=>[(0,o._)("div",v,(0,n.zw)(a.nombrePersona),1),(0,o._)("div",b,[(0,o._)("div",w,(0,n.zw)(a.day)+"/"+(0,n.zw)(a.month)+"/"+(0,n.zw)(a.year),1),(0,o._)("div",g,(0,n.zw)(a.nombreEvento),1),(0,o._)("div",f," ("+(0,n.zw)(a.id)+") "+(0,n.zw)(a.titulo),1)]),a.foto?((0,o.wg)(),(0,o.j4)(E,{key:0,src:a.foto,loading:"",fetchpriority:"",fit:"contain",height:"240px",class:"bg-black"},{error:(0,o.w5)((()=>[y])),_:2},1032,["src"])):((0,o.wg)(),(0,o.j4)(E,{key:1,src:"defecto.jpg",height:"240px"})),(0,o.Wm)(S,{class:"text-grey-8 scroll jg-text-12 bg-grey-2",style:{height:"240px !important"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(a.descripcion),1)])),_:2},1024),(0,o.Wm)(V,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z),(0,o.Wm)(W,{flat:"",color:"dark",label:"Editar",onClick:()=>e.onModificarClick(a),class:"col-6 fit"},null,8,["onClick"])])),_:2},1024)])),_:2},1024),(0,o.Wm)(N,{vertical:"",spaced:""})]))])),_:1},8,["items"])):(0,o.kq)("",!0),(0,o.Wm)(H,{modelValue:e.abrirEditar,"onUpdate:modelValue":a[3]||(a[3]=a=>e.abrirEditar=a)},{default:(0,o.w5)((()=>[e.eventoSeleccionado?((0,o.wg)(),(0,o.j4)(I,{key:0,idEvento:e.eventoSeleccionado.id,onOnresetview:e.onresetview},null,8,["idEvento","onOnresetview"])):(0,o.kq)("",!0)])),_:1},8,["modelValue"])])])])),_:1})}t(3610);var h=t(8825),k=t(1959),_=t(8339),q=t(7917),C=t(6951),Z=t(2930);const Q=(0,o.aZ)({name:"PageIndex",components:{ModificarEvento:Z.Z},setup(e,{root:a,emit:t}){(0,h.Z)(),(0,_.tv)();const l=(0,k.iH)(!1),n=(0,k.iH)(!1),r=(0,k.iH)([]),i=((0,k.iH)([]),(0,k.iH)([])),s=(0,k.iH)(null),c=(0,k.iH)({nombre:"Todos",id:-1}),d=(0,k.iH)(null),u=(0,o.Fl)((()=>{let e=i.value;return d.value&&(e=e.filter((e=>e.nombre.toLowerCase().includes(d.value.toLowerCase())))),e}));function m(){r.value=[]}async function p(){m();const e=await q.Z.getEventosCompletos();e&&(e.data.forEach((e=>{e.abrir=!1,r.value.push(e)})),v())}function v(){r.value.sort(((e,a)=>Number(e.year)===Number(a.year)?Number(e.month)===Number(a.month)?Number(e.day)<Number(a.day)?-1:Number(e.day)>Number(a.day)?1:0:Number(e.month)<Number(a.month)?-1:1:Number(e.year)<Number(a.year)?-1:1))}async function b(e){m();const a=await q.Z.getEventosByPersona(e);a&&(a.data.forEach((e=>{e.abrir=!1,r.value.push(e)})),v())}async function w(){const e=await C.Z.getPersonas();e&&(i.value=e.data,i.value.unshift({nombre:"Todos",id:-1}))}function g(e){s.value=e,n.value=!0}function f(){console.log("onresetview")}function y(e){c.value={...e}}async function x(){if(l.value=!1,c.value)switch(c.value.nombre){case"Todos":await p();break;default:await b(c.value.id);break}l.value=!0}return(0,o.bv)((async()=>{await w(),l.value=!0})),{onCargarGrilla:x,onPersonaClick:y,onresetview:f,onModificarClick:g,buscarPersonaInput:d,eventoSeleccionado:s,abrirEditar:n,eventos:r,isReady:l,expanded:(0,k.iH)(!1),personaSelected:c,opcionesPersonas:i,opcionesPersonasComputed:u}}});var P=t(4260),W=t(4379),E=t(4842),S=t(4522),z=t(8478),V=t(3414),j=t(2035),N=t(2350),I=t(8516),H=t(8240),U=t(8870),T=t(151),D=t(4027),M=t(5589),L=t(9367),B=t(2025),F=t(5869),G=t(4390),K=t(677),O=t(7518),R=t.n(O);const A=(0,P.Z)(Q,[["render",x],["__scopeId","data-v-78ec5099"]]),J=A;R()(Q,"components",{QPage:W.Z,QInput:E.Z,QPopupEdit:S.Z,QVirtualScroll:z.Z,QItem:V.Z,QItemSection:j.Z,QItemLabel:N.Z,QSelect:I.Z,QBtn:H.Z,QTooltip:U.Z,QCard:T.Z,QImg:D.Z,QCardSection:M.Z,QCardActions:L.Z,QSpace:B.Z,QSeparator:F.Z,QDialog:G.Z}),R()(Q,"directives",{ClosePopup:K.Z})}}]);