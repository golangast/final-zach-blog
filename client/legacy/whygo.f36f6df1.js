import{_ as t,a as e,b as n,c as r,i as a,s as o,d as s,S as i,e as c,t as u,f as h,g as l,h as f,l as d,j as p,k as y,m as g,o as v,p as m,q as b}from"./client.8c340416.js";function w(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=e(t);if(r){var s=e(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return n(this,a)}}function E(t){var e,n,r,a,o,s,i,w,E,I,R,M,k,S,L,T,z,x,W,j,D,P,G,A,B,C,O,q,H,U="type Guitarist struct{Guitarist } //object\n\nfunc(m Musician) Run(){} // method\n\ntype Musician interface { Run()} //interface that uses the method\n",V="func Service(Musician){\n    fmt.Println(Musician)\n}\n";return{c:function(){e=c("h3"),n=u("I Love Go because of it's simplicity."),r=h(),a=c("br"),o=h(),s=c("div"),i=c("p"),w=u("What does this mean? I am referring to its api and it's ability to uncouple code.\r\nWhy is this important? Many developers are bound to the constraints\r\nto their language and tech stack.  The point is so that when your \r\nproject gets bigger you are not constrained to what you have already\r\ncreated.  \r\n"),E=c("br"),I=u("\r\nAn example of what I am referring to."),R=h(),M=c("pre"),k=c("code"),S=u(U),L=u("\r\n\r\n\r\nThe three bits of code that are stated are pretty simple.\r\nbut they are the building blocks to uncoupling code.\r\n"),T=c("ul"),z=c("li"),x=u("1. struct"),W=h(),j=c("li"),D=u("2. method"),P=h(),G=c("li"),A=u("3. interface"),B=u("\r\n\r\n\r\nThese are the components needed to uncouple your code.  \r\n\r\nLets say you are building a Service on Musican.\r\n"),C=c("pre"),O=c("code"),q=u(V),H=u("\r\n\r\nWe used the interface Musician to allow for any struct with run() to be passed.\r\nSo if we needed to pass another struct of data in we can.\r\n\r\nThis allows for not having to think about your data or concrete data type.\r\nSomething many languages you are tied to.\r\n\r\nI will go further in the next blog about packages and utilizing this method."),this.h()},l:function(t){e=l(t,"H3",{});var c=f(e);n=d(c,"I Love Go because of it's simplicity."),c.forEach(p),r=y(t),a=l(t,"BR",{}),o=y(t),s=l(t,"DIV",{class:!0});var u=f(s);i=l(u,"P",{});var h=f(i);w=d(h,"What does this mean? I am referring to its api and it's ability to uncouple code.\r\nWhy is this important? Many developers are bound to the constraints\r\nto their language and tech stack.  The point is so that when your \r\nproject gets bigger you are not constrained to what you have already\r\ncreated.  \r\n"),E=l(h,"BR",{}),I=d(h,"\r\nAn example of what I am referring to."),h.forEach(p),R=y(u),M=l(u,"PRE",{class:!0});var g=f(M);k=l(g,"CODE",{class:!0});var v=f(k);S=d(v,U),v.forEach(p),g.forEach(p),L=d(u,"\r\n\r\n\r\nThe three bits of code that are stated are pretty simple.\r\nbut they are the building blocks to uncoupling code.\r\n"),T=l(u,"UL",{});var m=f(T);z=l(m,"LI",{});var b=f(z);x=d(b,"1. struct"),b.forEach(p),W=y(m),j=l(m,"LI",{});var _=f(j);D=d(_,"2. method"),_.forEach(p),P=y(m),G=l(m,"LI",{});var F=f(G);A=d(F,"3. interface"),F.forEach(p),m.forEach(p),B=d(u,"\r\n\r\n\r\nThese are the components needed to uncouple your code.  \r\n\r\nLets say you are building a Service on Musican.\r\n"),C=l(u,"PRE",{class:!0});var J=f(C);O=l(J,"CODE",{class:!0});var K=f(O);q=d(K,V),K.forEach(p),J.forEach(p),H=d(u,"\r\n\r\nWe used the interface Musician to allow for any struct with run() to be passed.\r\nSo if we needed to pass another struct of data in we can.\r\n\r\nThis allows for not having to think about your data or concrete data type.\r\nSomething many languages you are tied to.\r\n\r\nI will go further in the next blog about packages and utilizing this method."),u.forEach(p),this.h()},h:function(){g(k,"class","svelte-8hzrl0"),g(M,"class","svelte-8hzrl0"),g(O,"class","svelte-8hzrl0"),g(C,"class","svelte-8hzrl0"),g(s,"class","body svelte-8hzrl0")},m:function(t,c){v(t,e,c),m(e,n),v(t,r,c),v(t,a,c),v(t,o,c),v(t,s,c),m(s,i),m(i,w),m(i,E),m(i,I),m(s,R),m(s,M),m(M,k),m(k,S),m(s,L),m(s,T),m(T,z),m(z,x),m(T,W),m(T,j),m(j,D),m(T,P),m(T,G),m(G,A),m(s,B),m(s,C),m(C,O),m(O,q),m(s,H)},p:b,i:b,o:b,d:function(t){t&&p(e),t&&p(r),t&&p(a),t&&p(o),t&&p(s)}}}var I=function(e){t(c,i);var n=w(c);function c(t){var e;return r(this,c),e=n.call(this),a(s(e),t,null,E,o,{}),e}return c}();export default I;