"use strict";(self.webpackChunkorebishop=self.webpackChunkorebishop||[]).push([[921],{58757:function(e,t,s){var r=s(29439),l=s(72791),i=s(58617),n=s(57689),a=s(80184);t.Z=function(e){var t=e.prevLocation,s=e.title,o=(0,n.TH)(),c=(0,l.useState)(""),d=(0,r.Z)(c,2),x=d[0],m=d[1];return(0,l.useEffect)((function(){m(o.pathname.split("/")[1])}),[o]),(0,a.jsxs)("div",{className:"w-full py-10 xl:py-10 flex flex-col gap-3",children:[(0,a.jsx)("h1",{className:"text-5xl text-primeColor font-titleFont font-bold",children:s}),(0,a.jsxs)("p",{className:"text-sm font-normal text-lightText capitalize flex items-center",children:[(0,a.jsxs)("span",{children:[" ",""===t?"Home":t]}),(0,a.jsx)("span",{className:"px-1",children:(0,a.jsx)(i.yoF,{})}),(0,a.jsx)("span",{className:"capitalize font-semibold text-primeColor",children:x})]})]})}},73921:function(e,t,s){s.r(t),s.d(t,{default:function(){return h}});var r=s(29439),l=s(72791),i=s(59434),n=s(11087),a=s(72971),o=s(58757),c=s(50485),d=s(50595),x=s(70828),m=s(80184),p=function(e){var t=e.item,s=(0,i.I0)();return(0,m.jsxs)("div",{className:"w-full grid grid-cols-5 mb-4 border py-2",children:[(0,m.jsxs)("div",{className:"flex col-span-5 mdl:col-span-2 items-center gap-4 ml-4",children:[(0,m.jsx)(x.sQZ,{onClick:function(){return s((0,c.wz)(t._id))},className:"text-primeColor hover:text-red-500 duration-300 cursor-pointer"}),(0,m.jsx)("img",{className:"w-32 h-32",src:t.image,alt:"productImage"}),(0,m.jsx)("h1",{className:"font-titleFont font-semibold",children:t.name})]}),(0,m.jsxs)("div",{className:"col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 px-4 mdl:px-0 gap-6 mdl:gap-0",children:[(0,m.jsxs)("div",{className:"flex w-1/3 items-center text-lg font-semibold",children:["$",t.price]}),(0,m.jsxs)("div",{className:"w-1/3 flex items-center gap-6 text-lg",children:[(0,m.jsx)("span",{onClick:function(){return s((0,c.Vi)({_id:t._id}))},className:"w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300",children:"-"}),(0,m.jsx)("p",{children:t.quantity}),(0,m.jsx)("span",{onClick:function(){return s((0,c.Qd)({_id:t._id}))},className:"w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300",children:"+"})]}),(0,m.jsx)("div",{className:"w-1/3 flex items-center font-titleFont font-bold text-lg",children:(0,m.jsxs)("p",{children:["$",t.quantity*t.price]})})]})]})},h=function(){var e=(0,i.I0)(),t=(0,i.v9)((function(e){return e.orebiReducer.products})),s=(0,l.useState)(""),x=(0,r.Z)(s,2),h=x[0],u=x[1],f=(0,l.useState)(""),b=(0,r.Z)(f,2),g=b[0],j=b[1];return(0,l.useEffect)((function(){var e=0;t.map((function(t){return e+=t.price*t.quantity})),u(e)}),[t]),(0,l.useEffect)((function(){h<=200?j(30):h<=400?j(25):h>401&&j(20)}),[h]),(0,m.jsxs)("div",{className:"max-w-container mx-auto px-4",children:[(0,m.jsx)(o.Z,{title:"Cart"}),t.length>0?(0,m.jsxs)("div",{className:"pb-20",children:[(0,m.jsxs)("div",{className:"w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold",children:[(0,m.jsx)("h2",{className:"col-span-2",children:"Product"}),(0,m.jsx)("h2",{children:"Price"}),(0,m.jsx)("h2",{children:"Quantity"}),(0,m.jsx)("h2",{children:"Sub Total"})]}),(0,m.jsx)("div",{className:"mt-5",children:t.map((function(e){return(0,m.jsx)("div",{children:(0,m.jsx)(p,{item:e})},e._id)}))}),(0,m.jsx)("button",{onClick:function(){return e((0,c.s9)())},className:"py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300",children:"Reset cart"}),(0,m.jsxs)("div",{className:"flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0",children:[(0,m.jsxs)("div",{className:"flex items-center gap-4",children:[(0,m.jsx)("input",{className:"w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400",type:"text",placeholder:"Coupon Number"}),(0,m.jsx)("p",{className:"text-sm mdl:text-base font-semibold",children:"Apply Coupon"})]}),(0,m.jsx)("p",{className:"text-lg font-semibold",children:"Update Cart"})]}),(0,m.jsx)("div",{className:"max-w-7xl gap-4 flex justify-end mt-4",children:(0,m.jsxs)("div",{className:"w-96 flex flex-col gap-4",children:[(0,m.jsx)("h1",{className:"text-2xl font-semibold text-right",children:"Cart totals"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{className:"flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium",children:["Subtotal",(0,m.jsxs)("span",{className:"font-semibold tracking-wide font-titleFont",children:["$",h]})]}),(0,m.jsxs)("p",{className:"flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium",children:["Shipping Charge",(0,m.jsxs)("span",{className:"font-semibold tracking-wide font-titleFont",children:["$",g]})]}),(0,m.jsxs)("p",{className:"flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium",children:["Total",(0,m.jsxs)("span",{className:"font-bold tracking-wide text-lg font-titleFont",children:["$",h+g]})]})]}),(0,m.jsx)("div",{className:"flex justify-end",children:(0,m.jsx)(n.rU,{to:"/paymentgateway",children:(0,m.jsx)("button",{className:"w-52 h-10 bg-primeColor text-white hover:bg-black duration-300",children:"Proceed to Checkout"})})})]})})]}):(0,m.jsxs)(a.E.div,{initial:{y:30,opacity:0},animate:{y:0,opacity:1},transition:{duration:.4},className:"flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20",children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{className:"w-80 rounded-lg p-4 mx-auto",src:d.UYY,alt:"emptyCart"})}),(0,m.jsxs)("div",{className:"max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg",children:[(0,m.jsx)("h1",{className:"font-titleFont text-xl font-bold uppercase",children:"Your Cart feels lonely."}),(0,m.jsx)("p",{className:"text-sm text-center px-10 -mt-2",children:"Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy."}),(0,m.jsx)(n.rU,{to:"/shop",children:(0,m.jsx)("button",{className:"bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300",children:"Continue Shopping"})})]})]})]})}}}]);
//# sourceMappingURL=921.f6e74f36.chunk.js.map