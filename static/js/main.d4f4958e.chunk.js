(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},200:function(e,t,n){"use strict";n.r(t);n(85);var c=n(0),s=n.n(c),r=n(37),a=n.n(r),i=(n(90),n(91),n(92),"ADD-TODO"),l="DELETE-TODO",o="ADD_COUNT",d="TOGGLE_CHECK",j=n(22),b=n(1);var u=function(e){var t=Object(j.c)((function(e){return e.CounterReducer})),n=Object(j.b)(),c=function(e){e<=0&&(e=0),n({type:o,payload:{counter:e}})};return Object(b.jsxs)("div",{className:"mt-5",children:[Object(b.jsx)("h1",{children:"Counter"}),Object(b.jsx)("p",{className:"fs-3",children:t.counter}),Object(b.jsxs)("div",{className:"d-flex justify-content-around",children:[Object(b.jsx)("button",{className:"btn btn-primary",onClick:function(){return c(t.counter+1)},children:"Increment"}),Object(b.jsx)("button",{className:"btn btn-primary ms-3",onClick:function(){return c(t.counter-1)},children:"Decrement"}),Object(b.jsx)("button",{className:"btn btn-danger ms-3",onClick:function(){return c(0)},children:"Reset"})]})]})},m=n(14),h=(n(97),function(){return Object(b.jsxs)("div",{className:"d-flex justify-content-between p-3 bg-primary text-white align-items-center",children:[Object(b.jsx)("p",{className:"mb-0",children:"LOGO"}),Object(b.jsxs)("ul",{className:"d-flex justify-content-around mb-0",children:[Object(b.jsx)(m.b,{to:"/",children:Object(b.jsx)("li",{className:"ms-3  hovLink",children:"Home"})}),Object(b.jsx)(m.b,{to:"/shop",children:Object(b.jsx)("li",{className:"ms-3  hovLink",children:"Shop"})}),Object(b.jsx)(m.b,{to:"/counter",children:Object(b.jsx)("li",{className:"ms-3  hovLink",children:"Counter"})}),Object(b.jsx)(m.b,{to:"/todo",children:Object(b.jsx)("li",{className:"ms-3  hovLink",children:"Todo List"})}),Object(b.jsx)(m.b,{to:"/login",children:Object(b.jsx)("li",{className:"ms-3  hovLink",children:"Login"})}),Object(b.jsx)(m.b,{to:"/register",children:Object(b.jsx)("li",{className:"ms-3  hovLink",children:"Register"})})]})]})}),x=n(54),O=n.n(x),f=n(79),p=n(7),v=(n(100),function(e){var t=e.product,n=t.title,c=t.image,s=t.id,r=t.price;return Object(b.jsx)("div",{className:"wid d-flex  mb-3  align-items-center shadows hov",children:Object(b.jsx)(m.b,{to:"shop/product-details/".concat(s),children:Object(b.jsxs)("div",{className:"d-flex flex-column align-items-center justify-content-center",children:[Object(b.jsx)("figure",{className:"w-50",children:Object(b.jsx)("img",{className:"w-100",src:c,alt:""})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:"fw-bold",children:n}),Object(b.jsxs)("p",{children:["Price: EGP ",r]})]})]})})})}),g=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!0),a=Object(p.a)(r,2),i=a[0],l=a[1];Object(c.useEffect)((function(){o()}),[]);var o=function(){var e=Object(f.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(e){return s(e)}),(function(e){return console.log("error",e)})).finally((function(){return l(!1)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"mt-5",children:i?Object(b.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(b.jsx)("span",{className:"sr-only"})}):Object(b.jsx)("div",{className:"d-flex flex-wrap justify-content-around",children:n.map((function(e){return Object(b.jsx)(v,{product:e},e.id)}))})})},N=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Home Page"})})},w=n(3),y=(n(101),function(e){var t=e.match.params.id,n=Object(c.useState)({}),s=Object(p.a)(n,2),r=s[0],a=s[1],i=Object(c.useState)(!0),l=Object(p.a)(i,2),o=l[0],d=l[1];Object(c.useEffect)((function(){j()}));var j=function(){fetch("https://fakestoreapi.com/products/".concat(t)).then((function(e){return e.json()})).then((function(e){return a(e)})).finally((function(){return d(!1)}))},u=r.title,m=r.category,h=r.description,x=r.image,O=r.price,f=r.rating;return console.log(r),Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(b.jsx)("span",{className:"sr-only"})}):Object(b.jsxs)("div",{className:"w-75 d-flex flex-column justify-content-center align-items-center",children:[Object(b.jsx)("figure",{className:"w-25",children:Object(b.jsx)("img",{className:"w-100",src:x,alt:""})}),Object(b.jsx)("h3",{children:u}),Object(b.jsxs)("p",{children:["Price: EGP ",O]}),Object(b.jsxs)("p",{children:["Category: ",m]}),Object(b.jsxs)("p",{children:["Description: ",h]}),Object(b.jsxs)("p",{children:["rate: ",null===f||void 0===f?void 0:f.rate," count: ",null===f||void 0===f?void 0:f.count]})]})})}),C=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),a=Object(p.a)(r,2),o=a[0],u=a[1],m=Object(j.c)((function(e){return e.TodoReducer.todoList})),h=Object(j.b)(),x=function(e,t){h(function(e,t,n){return{type:l,payload:{title:e,content:t,isChecked:n}}}(e,t))};return Object(b.jsxs)("div",{className:"w-100 mt-5",children:[Object(b.jsxs)("form",{className:"d-flex flex-column w-25 mx-auto justify-content-center",children:[Object(b.jsx)("input",{placeholder:"Enter Todo Title",value:o,onChange:function(e){return u(e.target.value)}}),Object(b.jsx)("input",{className:"mt-3 mb-3",placeholder:"Enter todo Description",value:n,onChange:function(e){return s(e.target.value)}}),Object(b.jsx)("button",{className:"btn btn-primary",type:"submit",onClick:function(e){e.preventDefault(),h({type:i,payload:{title:o,content:n,isChecked:!1}}),s(""),u("")},disabled:!o||!n,children:"ADD"})]}),Object(b.jsx)("div",{className:"w-75 mx-auto mt-5 shadow p-3",children:(null===m||void 0===m?void 0:m.length)>0?m.map((function(e,t){return Object(b.jsxs)("div",{className:"d-flex justify-content-between align-items-center ".concat(e.isChecked?"text-decoration-line-through":""),children:[Object(b.jsxs)("div",{className:"d-flex align-items-center",children:[Object(b.jsx)("input",{type:"checkbox",value:e.isChecked,onChange:function(t){return h((n=e.title,c=e.desc,s=t.target.checked,{type:d,payload:{title:n,content:c,isChecked:s}}));var n,c,s}}),Object(b.jsxs)("div",{className:"ms-3",children:[Object(b.jsx)("p",{className:"fw-bold p-0 m-0 ",children:e.title}),Object(b.jsx)("p",{children:e.content})]})]}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){return x(e.title,e.content)},children:"Delete"})]},t)})):Object(b.jsx)("h1",{children:"No TODOS"})})]})},k=n(17),S=n(6),D=n(13),L=function(){var e=D.a({email:D.c().email().required(),password:D.c().required()}),t=Object(S.f)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(e){return console.log(JSON.stringify(e,null,4))},validationSchema:e});return Object(b.jsx)("div",{className:"w-100 ",children:Object(b.jsx)("form",{className:"w-75 mx-auto text-start shadow p-5",onSubmit:t.handleSubmit,children:Object(b.jsxs)("div",{className:"w-50 mx-auto",children:[Object(b.jsxs)("div",{className:"d-flex flex-column w-75 ",children:[Object(b.jsx)("label",{className:"fw-bold",children:"Email"}),Object(b.jsx)("input",Object(k.a)({id:"email",name:"email",type:"email"},t.getFieldProps("email"))),t.touched.email&&t.errors.email&&Object(b.jsx)("div",{className:"text-danger",children:t.errors.email}),Object(b.jsx)("label",{className:"fw-bold mt-3",children:"Password"}),Object(b.jsx)("input",Object(k.a)({name:"password",type:"password",id:"password"},t.getFieldProps("password"))),t.touched.password&&t.errors.password&&Object(b.jsx)("div",{className:"text-danger",children:t.errors.password})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center mt-3",children:[Object(b.jsx)("input",{name:"rememberMe",value:t.values.rememberMe,onChange:t.handleChange,type:"checkbox",id:"rememberMe"}),Object(b.jsx)("label",{className:"ms-3 fw-bold",children:"Remember Me"})]}),Object(b.jsx)("button",{className:"btn btn-primary mt-3",type:"submit",children:"Login"})]})})})},P={username:"",email:"",password:"",confirmPassword:"",active:!1,gender:"",hobbies:[""]},E=function(e){return console.log(JSON.stringify(e,null,4))},F=D.a({username:D.c().required(),email:D.c().email("Please enter a valid email address").required("Email field is required"),password:D.c().required("Password field is required").min(4,"Must be atleast 4 character").matches(/(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,"Must be UpperCase, LowerCase, Numbers and Special characters"),confirmPassword:D.c().required().when("password",{is:function(e){return!!e},then:D.c().oneOf([D.b("password")],"Password Don't match")})}),T=function(){return Object(b.jsx)("div",{className:"text-start shadow p-5 mb-3 mt-0 pt-3 w-50 mx-auto",children:Object(b.jsx)(S.e,{initialValues:P,onSubmit:E,validationSchema:F,className:"d-flex flex-column",children:function(e){return Object(b.jsxs)(S.d,{className:"d-flex flex-column",children:[Object(b.jsx)(S.b,{name:"username",children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:"fw-bold",children:"Username"}),Object(b.jsx)("input",Object(k.a)({placeholder:"Username"},e.field)),Object(b.jsx)(S.a,{name:"username",children:function(e){return Object(b.jsx)("div",{className:"text-danger",children:e})}})]})}}),Object(b.jsx)(S.b,{name:"email",children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:"fw-bold mt-3",children:"Email"}),Object(b.jsx)("input",Object(k.a)({placeholder:"email"},e.field)),Object(b.jsx)(S.a,{name:"email",children:function(e){return Object(b.jsx)("div",{className:"text-danger",children:e})}})]})}}),Object(b.jsx)(S.b,{name:"password",children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:"fw-bold mt-3",children:"Password"}),Object(b.jsx)("input",Object(k.a)({type:"password",placeholder:"password"},e.field)),Object(b.jsx)(S.a,{name:"password",children:function(e){return Object(b.jsx)("div",{className:"text-danger",children:e})}})]})}}),Object(b.jsx)(S.b,{name:"confirmPassword",children:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:"fw-bold mt-3",children:"Confirm password"}),Object(b.jsx)("input",Object(k.a)({type:"password",placeholder:"confirm password"},e.field)),Object(b.jsx)(S.a,{name:"confirmPassword",children:function(e){return Object(b.jsx)("div",{className:"text-danger",children:e})}})]})}}),Object(b.jsx)(S.b,{name:"active",children:function(e){return Object(b.jsxs)("div",{className:"d-flex fw-bold mt-3  align-items-center",children:[Object(b.jsx)("input",Object(k.a)({type:"checkbox"},e.field)),Object(b.jsx)("label",{className:"ms-3",children:"Active"}),Object(b.jsx)(S.a,{name:"active",children:function(e){return Object(b.jsx)("div",{className:"text-danger",children:e})}})]})}}),Object(b.jsx)("p",{className:"mb-0 mt-3 fw-bold",children:"Gender"}),Object(b.jsx)(S.b,{name:"gender",children:function(e){return Object(b.jsxs)("div",{className:"d-flex flex-column  mb-3",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"type",value:"male",onChange:function(){return e.form.setFieldValue("gender","male")}}),Object(b.jsx)("label",{className:"ms-3",children:"Male"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"radio",name:"type",value:"female",onChange:function(){return e.form.setFieldValue("gender","female")}}),Object(b.jsx)("label",{className:"ms-3",children:"Female"})]})]})}}),Object(b.jsx)(S.c,{name:"hobbies",children:function(e){console.log(e);var t=e.push,n=e.remove,c=e.form.values.hobbies;return console.log(c),Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)("label",{className:"fw-bold ",children:"Hobbies"}),c.map((function(e,t){return Object(b.jsxs)("div",{children:[Object(b.jsx)(S.b,{name:"hobbies[".concat(t,"]")}),Object(b.jsx)("button",{className:"btn ms-3 btn-danger",type:"button",onClick:function(){return n(t)},children:"Delete Hobby"})]},t)})),Object(b.jsx)("button",{className:"btn btn-warning",type:"button",onClick:function(){return t("")},children:"Add Hobby"})]})})}}),Object(b.jsx)("button",{className:"btn btn-primary mt-3",children:"Submit"})]})}})})};var M=function(){return Object(b.jsxs)(m.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{className:"d-flex justify-content-center text-center align-items-center",children:[Object(b.jsx)(w.a,{name:"ASD",path:"/counter",params:{testvalue:"hello"},component:u}),Object(b.jsx)(w.a,{exact:!0,path:"/shop",component:g}),Object(b.jsx)(w.a,{path:"/shop/product-details/:id",component:y}),Object(b.jsx)(w.a,{exact:!0,path:"/",component:N}),Object(b.jsx)(w.a,{path:"/todo",component:C}),Object(b.jsx)(w.a,{path:"/login",component:L}),Object(b.jsx)(w.a,{path:"/register",component:T})]})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,201)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))},A=n(42),R=n(5),G={title:"",content:"",isChecked:!1},H=[],J=!1;var U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return J=!1,H.map((function(e){return e.title===t.payload.title&&(alert("This todo already there"),J=!0),J})),J||H.push(t.payload),{todoList:Object(R.a)(H)};case d:return H.map((function(e){e.title===t.payload.title&&(e.isChecked=t.payload.isChecked)})),{todoList:Object(R.a)(H)};case l:return H=H.filter((function(e){return e.title!==t.payload.title})),{todoList:Object(R.a)(H)};default:return e}},V={counter:0};var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return t.type===o?{counter:t.payload.counter}:e},B=Object(A.a)({TodoReducer:U,CounterReducer:I}),_=Object(A.b)(B);a.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(j.a,{store:_,children:Object(b.jsx)(M,{})})}),document.getElementById("root")),q()},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},97:function(e,t,n){}},[[200,1,2]]]);
//# sourceMappingURL=main.d4f4958e.chunk.js.map