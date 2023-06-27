"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[236],{2390:function(n,e,t){t.d(e,{__:function(){return l},jc:function(){return d},jj:function(){return m},xD:function(){return p},zx:function(){return x}});var o,r,a,i,s,f=t(168),c=t(9549),u=t(5705),p=(0,c.Z)(u.l0)(o||(o=(0,f.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),l=c.Z.label(r||(r=(0,f.Z)(["\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: baseline;\n  gap: 40px;\n  padding: 40px;\n\n  filter: drop-shadow(0px 0px 20px #a201ff);\n"]))),d=(0,c.Z)(u.gN)(a||(a=(0,f.Z)(["\n  display: block;\n\n  font-size: 20px;\n  font-weight: 700;\n  margin: auto;\n  color: #00ffff;\n  background-color: transparent;\n  outline: 1px solid aqua;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n\n  &:hover,\n  &:focus {\n    filter: drop-shadow(0px 0px 20px #a201ff);\n  }\n"]))),x=c.Z.button(i||(i=(0,f.Z)(["\n  display: block;\n  margin: auto;\n  font-size: 18px;\n  font-weight: 700;\n  color: #a201ff;\n\n  padding: 8px;\n\n  border: 2px solid purple;\n  border-radius: 8px;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n\n  &:hover,\n  &:focus {\n    filter: drop-shadow(0px 0px 20px #a201ff);\n    color: #a201ff;\n    border: 2px solid #00ffff;\n  }\n\n  animation: glow 5s ease-in-out infinite;\n\n  @keyframes glow {\n    0%,\n    100% {\n      color: aqua;\n      text-shadow: 0 0 12px aqua, 0 0 50px aqua, 0 0 100px aqua;\n    }\n    10%,\n    90% {\n      color: #a201ff;\n      text-shadow: none;\n    }\n  }\n"]))),m=(0,c.Z)(u.Bc)(s||(s=(0,f.Z)(["\n  position: absolute;\n  top: 100%;\n  filter: drop-shadow(0px 0px 20px red);\n  color: red;\n"])))},8236:function(n,e,t){t.r(e),t.d(e,{default:function(){return l}});var o=t(5705),r=t(6727),a=t(2390),i=t(8260),s=t(1984),f=t(184),c=(0,r.Ry)().shape({name:(0,r.Z_)().required(),email:(0,r.Z_)().email()}),u={name:"",email:"",password:""},p=function(){var n=(0,i.g)().dispatch;return(0,f.jsx)(o.J9,{validationSchema:c,onSubmit:function(e,t){var o=t.resetForm;n((0,s.z2)(e)),o()},initialValues:u,children:(0,f.jsxs)(a.xD,{children:[(0,f.jsxs)(a.__,{children:["Name",(0,f.jsx)(a.jc,{type:"text",name:"name"}),(0,f.jsx)(a.jj,{name:"name",component:"p"})]}),(0,f.jsxs)(a.__,{children:["Email",(0,f.jsx)(a.jc,{type:"text",name:"email"}),(0,f.jsx)(a.jj,{name:"email",component:"p"})]}),(0,f.jsxs)(a.__,{children:["Password",(0,f.jsx)(a.jc,{type:"password",name:"password"}),(0,f.jsx)(a.jj,{name:"password",component:"p"})]}),(0,f.jsx)(a.zx,{type:"submit",children:"Register"})]})})};function l(){return(0,f.jsx)("div",{children:(0,f.jsx)(p,{})})}},8260:function(n,e,t){t.d(e,{g:function(){return d}});var o=t(1413),r=t(9434),a=t(6916),i=function(n){return n.contacts.items},s=function(n){return n.filter},f=function(n){return n.contacts.isLoading},c=function(n){return n.contacts.error},u=(0,a.P1)([i,s],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),p=t(3634),l=t(4808),d=function(){var n=(0,r.I0)(),e=(0,r.v9)(i),t=(0,r.v9)(s),a=(0,r.v9)(f),d=(0,r.v9)(c),x=(0,r.v9)(u);return{contacts:e,filter:t,isLoading:a,error:d,dispatch:n,handleDelete:function(e){return n((0,p.GK)(e))},contactsFilterName:x,handleFilter:function(e){n((0,l.W)(e.target.value))},handleNotificationForm:function(t){e.find((function(n){return n.number===t.number}))?alert("Sorry ".concat(t.name,", this number is already registered, please enter another one.")):n((0,p.uK)((0,o.Z)({},t)))}}}}}]);
//# sourceMappingURL=236.3984bad9.chunk.js.map