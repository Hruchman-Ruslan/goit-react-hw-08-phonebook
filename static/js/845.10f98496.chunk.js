(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[845],{9133:function(n,e,t){"use strict";t.d(e,{__:function(){return l},jc:function(){return d},jj:function(){return h},xD:function(){return u},zx:function(){return x}});var r,o,i,a,s,f=t(168),p=t(9549),c=t(5705),u=(0,p.Z)(c.l0)(r||(r=(0,f.Z)(["\n  display: flex;\n  gap: 40px;\n"]))),l=p.Z.label(o||(o=(0,f.Z)(["\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: baseline;\n  gap: 40px;\n  padding: 40px;\n\n  filter: drop-shadow(0px 0px 20px #a201ff);\n"]))),d=(0,p.Z)(c.gN)(i||(i=(0,f.Z)(["\n  display: block;\n\n  font-size: 20px;\n  font-weight: 700;\n  margin: auto;\n  color: #00ffff;\n  background-color: transparent;\n  outline: 1px solid aqua;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n\n  &:hover,\n  &:focus {\n    filter: drop-shadow(0px 0px 20px #a201ff);\n  }\n"]))),x=p.Z.button(a||(a=(0,f.Z)(["\n  display: block;\n  margin: auto;\n  font-size: 18px;\n  font-weight: 700;\n  color: #a201ff;\n\n  padding: 8px;\n\n  border: 2px solid purple;\n  border-radius: 8px;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n\n  &:hover,\n  &:focus {\n    filter: drop-shadow(0px 0px 20px #a201ff);\n    color: #a201ff;\n    border: 2px solid #00ffff;\n  }\n\n  animation: glow 5s ease-in-out infinite;\n\n  @keyframes glow {\n    0%,\n    100% {\n      color: aqua;\n      text-shadow: 0 0 12px aqua, 0 0 50px aqua, 0 0 100px aqua;\n    }\n    10%,\n    90% {\n      color: #a201ff;\n      text-shadow: none;\n    }\n  }\n"]))),h=(0,p.Z)(c.Bc)(s||(s=(0,f.Z)(["\n  position: absolute;\n  top: 100%;\n  filter: drop-shadow(0px 0px 20px red);\n  color: red;\n"])))},6331:function(n,e,t){"use strict";t.d(e,{x:function(){return i}});var r,o=t(168),i=t(9549).Z.p(r||(r=(0,o.Z)(["\n  filter: drop-shadow(0px 0px 30px #00ffff);\n  font-weight: 700;\n\n  margin-top: 40px;\n"])))},6938:function(n,e,t){"use strict";t.d(e,{$0:function(){return f},Dx:function(){return p}});t(8861);var r,o,i,a=t(168),s=t(9549),f=s.Z.section(r||(r=(0,a.Z)(["\n  padding-top: 60px;\n  padding-bottom: 60px;\n\n  text-align: center;\n  align-items: center;\n\n  filter: drop-shadow(0px 0px 20px #a201ff);\n"]))),p=s.Z.h1(o||(o=(0,a.Z)(["\n  color: brown;\n  font-weight: 900;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n"])));s.Z.h2(i||(i=(0,a.Z)(["\n  color: brown;\n  font-weight: 900;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n"]))),t(9133),t(6331)},6845:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return z}});var r,o,i,a,s,f,p=t(6938),c=t(168),u=t(9549),l=u.Z.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 40px;\n\n  margin-top: 40px;\n"]))),d=u.Z.li(o||(o=(0,c.Z)([""]))),x=u.Z.p(i||(i=(0,c.Z)(["\n  display: block;\n  font-weight: 700;\n"]))),h=u.Z.button(a||(a=(0,c.Z)(["\n  display: block;\n  margin: auto;\n  font-size: 18px;\n  font-weight: 700;\n\n  padding: 8px 28px;\n  color: #a201ff;\n\n  border: 2px solid purple;\n  border-radius: 8px;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n\n  &:hover,\n  &:focus {\n    filter: drop-shadow(0px 0px 20px #a201ff);\n    color: #a201ff;\n    border: 2px solid #00ffff;\n  }\n"]))),m=t(8260),g=t(184),b=function(){var n=(0,m.g)(),e=n.handleDelete,t=n.contactsFilterName;return(0,g.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.name,o=n.number;return(0,g.jsxs)(d,{children:[(0,g.jsxs)(x,{children:[r,": ",o]}),(0,g.jsx)(h,{type:"button",onClick:function(){return e(t)},children:"Delete"})]},t)}))})},w=u.Z.label(s||(s=(0,c.Z)(["\n  color: brown;\n  font-weight: 900;\n  font-size: 20px;\n"]))),y=u.Z.input(f||(f=(0,c.Z)(["\n  display: block;\n\n  font-size: 20px;\n  font-weight: 700;\n  margin: auto;\n  color: purple;\n  background-color: transparent;\n  outline: 1px solid aqua;\n\n  margin-top: 20px;\n\n  filter: drop-shadow(0px 0px 20px #00ffff);\n\n  &:hover,\n  &:focus {\n    filter: drop-shadow(0px 0px 20px #a201ff);\n  }\n"]))),j=function(){var n=(0,m.g)(),e=n.filter,t=n.handleFilter;return(0,g.jsxs)(w,{children:["Filter contacts by name",(0,g.jsx)(y,{type:"text",onChange:t,value:e})]})},Z=t(5705),v=t(6727),_=t(9133),k=(0,v.Ry)().shape({name:(0,v.Z_)().min(5,"must be at least 3 characters long").max(12,"must be no more than 12 characters").required("This field is required"),number:(0,v.Z_)().matches(/^(?:\+38)?(?:\(0\d{2}\)|0\d{2})[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/,"Please enter a valid phone number +380").required("A phone number is required")}),q={name:"",number:""},T=function(){var n=(0,m.g)().handleNotificationForm;return(0,g.jsx)(Z.J9,{validationSchema:k,onSubmit:function(e,t){var r=t.resetForm;n(e),r()},initialValues:q,children:(0,g.jsxs)(_.xD,{children:[(0,g.jsxs)(_.__,{children:["Name",(0,g.jsx)(_.jc,{type:"text",name:"name"}),(0,g.jsx)(_.jj,{name:"name",component:"p"})]}),(0,g.jsxs)(_.__,{children:["Number",(0,g.jsx)(_.jc,{type:"tel",name:"number"}),(0,g.jsx)(_.jj,{name:"number",component:"p"})]}),(0,g.jsx)(_.zx,{type:"submit",children:"Add Contacts"})]})})},C=t(2791),F=t(2007),O=t.n(F),D=t(6331),N=function(n){var e=n.message;return(0,g.jsx)(D.x,{children:e})};N.protoTypes={message:O().string.isRequired};var P=t(9434),R=t(3634);function z(){var n=(0,m.g)(),e=n.contacts,t=n.isLoading,r=n.error,o=(0,P.I0)();return(0,C.useEffect)((function(){o((0,R.yF)())}),[o]),(0,g.jsxs)(p.$0,{children:[(0,g.jsx)(T,{}),(0,g.jsx)(j,{}),t&&!r&&(0,g.jsx)("b",{children:"Request in progress..."}),e.length>0?(0,g.jsx)(b,{}):(0,g.jsx)(N,{message:"There is no feedback"})]})}},8260:function(n,e,t){"use strict";t.d(e,{g:function(){return d}});var r=t(1413),o=t(9434),i=t(6916),a=function(n){return n.contacts.items},s=function(n){return n.filter},f=function(n){return n.contacts.isLoading},p=function(n){return n.contacts.error},c=(0,i.P1)([a,s],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),u=t(3634),l=t(4808),d=function(){var n=(0,o.I0)(),e=(0,o.v9)(a),t=(0,o.v9)(s),i=(0,o.v9)(f),d=(0,o.v9)(p),x=(0,o.v9)(c);return{contacts:e,filter:t,isLoading:i,error:d,dispatch:n,handleDelete:function(e){return n((0,u.GK)(e))},contactsFilterName:x,handleFilter:function(e){n((0,l.W)(e.target.value))},handleNotificationForm:function(t){e.find((function(n){return n.number===t.number}))?alert("Sorry ".concat(t.name,", this number is already registered, please enter another one.")):n((0,u.uK)((0,r.Z)({},t)))}}}},888:function(n,e,t){"use strict";var r=t(9047);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,a){if(a!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},2007:function(n,e,t){n.exports=t(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=845.10f98496.chunk.js.map