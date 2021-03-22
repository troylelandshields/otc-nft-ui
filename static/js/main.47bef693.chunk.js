(this["webpackJsonpotc-nft-ui"]=this["webpackJsonpotc-nft-ui"]||[]).push([[0],{120:function(e,t){},135:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);n(87),n(88);var r=n(1),c=n.n(r),a=n(36),o=n.n(a),s=(n(94),n(4)),i=n(5),u=n(7),l=n(6),j=n(143),d=n(17),h=n(140),b=n(79),p=n(144),O=n(146),f=n(35),x={apiHost:"https://otc-nft-api.herokuapp.com",env:"rinkeby",paymentProcessorAddr:"0xEE87d4C59F9DDb1d52Ff241Eb0d4Fbbae391C935",ethAPIProvider:"https://eth-rinkeby.alchemyapi.io/v2/sl7kpn-EhhbJ_6B39V4uuMQNzGRjl-ei"},v=n(12);var m=function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{children:Object(v.jsxs)(b.a,{children:["Over the Counter: NFTs for the Masses ",x.env?"(".concat(x.env,")"):null]})}),Object(v.jsx)(p.a,{sticky:"top",children:Object(v.jsxs)(O.a,{defaultActiveKey:"home",children:[Object(v.jsx)(O.a.Link,{as:f.b,eventKey:"home",to:"/",children:"Home"}),Object(v.jsx)(O.a.Link,{as:f.b,eventKey:"counterfeit",to:"/counterfeit",children:"Counterfeit"})]})})]})},y=n(45),k=n.n(y);var w=function(e){return Object(v.jsxs)(h.a,{children:[Object(v.jsxs)(b.a,{className:"col-md-4",children:["Step 1: ",Object(v.jsx)("a",{href:"https://testnets.opensea.io/assets",children:"Find an NFT"})," you love or want to sell."]}),Object(v.jsx)(b.a,{className:"col-md-4",children:"Step 2: Put the URL into the Counterfeit page."}),Object(v.jsx)(b.a,{className:"col-md-4",children:"Step 3: Profit."})]})},g=n(3),C=n.n(g),I=n(42),T=n(33),E=n(145),D=n(142),P=n(51);var S=function(e){var t=Object(r.useState)(""),n=Object(T.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(""),s=Object(T.a)(o,2),i=s[0],u=s[1],l=Object(r.useState)(!1),j=Object(T.a)(l,2),d=j[0],h=j[1],b=Object(r.useState)(!1),p=Object(T.a)(b,2),O=p[0],f=p[1],m=Object(r.useState)(null),y=Object(T.a)(m,2),w=y[0],g=y[1],S=Object(r.useState)(null),N=Object(T.a)(S,2),A=N[0],F=N[1];Object(r.useEffect)((function(){h(!!w)}),[w]),Object(r.useEffect)((function(){if(window.ethereum){var e=new P.a.providers.Web3Provider(window.ethereum);F(e)}}),[w]),Object(r.useEffect)((function(){(function(){var e=Object(I.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=2;break}return e.abrupt("return");case 2:return e.t0=f,e.next=5,A.listAccounts();case 5:e.t1=e.sent,e.t2=e.t1>0,(0,e.t0)(e.t2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A]);var G=function(){var e=Object(I.a)(C.a.mark((function e(t){var n,r,a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(i,c),e.prev=2,e.next=5,k.a.post("".concat(x.apiHost,"/api/v1/preview"),{Type:"contract",ContractAddr:c,CounterfeitTokenID:i});case 5:n=e.sent,r=n.data,a=P.a.utils.formatEther(r.TotalPriceInWei+""),console.log(a),r.etherValue=a,g(r),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Error occurred when attempting to go to checkout.",e.t0),alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.");case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(I.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:f(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error requesting accounts",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(I.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=A.getSigner(),e.next=4,n.sendTransaction({to:x.paymentProcessorAddr,value:P.a.BigNumber.from(w.TotalPriceInWei+"")});case 4:return r=e.sent,e.next=7,k.a.post("".concat(x.apiHost,"/api/v1/mint/").concat(w.OrderID),{OrderID:w.OrderID,PaymentTransactionID:r.hash,DestinationAddress:r.from});case 7:alert("Success! You'll have a newly minted NFT shortly"),a(""),u(""),g(null),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.log("Error finishing transaction",e.t0),alert("Uhhh, something went wrong... contact me about getting this worked out.");case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)("div",{children:[Object(v.jsxs)(E.a,{children:[Object(v.jsxs)(E.a.Group,{controlId:"counterfeitContractAddr",children:[Object(v.jsx)(E.a.Label,{children:"Contract Address"}),Object(v.jsx)(E.a.Control,{disabled:d,value:c,onChange:function(e){return a(e.target.value)},type:"text",placeholder:"Copy an ERC721 contract's ethereum address"}),Object(v.jsx)(E.a.Text,{className:"text-muted",children:"If this is wrong I don't want to be right."})]}),Object(v.jsxs)(E.a.Group,{controlId:"counterfeitTokenId",children:[Object(v.jsx)(E.a.Label,{children:"Token ID"}),Object(v.jsx)(E.a.Control,{disabled:d,value:i,onChange:function(e){return u(e.target.value)},type:"text",placeholder:"Input the Token ID you want"})]}),d?Object(v.jsx)(D.a,{variant:"default",onClick:function(e){e.preventDefault(),a(""),u(""),g(null)},children:"Clear"}):Object(v.jsx)(D.a,{variant:"primary",onClick:G,children:"Go to Checkout"})]}),w?Object(v.jsxs)("div",{children:[Object(v.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}}),Object(v.jsxs)(E.a,{children:[Object(v.jsxs)(E.a.Group,{controlId:"totalPrice",children:[Object(v.jsx)(E.a.Label,{children:"Total Price"}),Object(v.jsx)(E.a.Control,{disabled:!0,type:"text",value:w.etherValue+" ETH"})]}),Object(v.jsx)(E.a.Group,{controlId:"connectWallet",children:Object(v.jsx)(D.a,{disabled:O,variant:"primary",onClick:L,children:"1. Connect Wallet"})}),Object(v.jsx)(E.a.Group,{children:Object(v.jsx)(D.a,{disabled:!O,variant:"primary",onClick:H,children:"2. Finish Transaction to Mint NFT"})})]})]}):null]})},N=(n(135),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(v.jsx)(j.a,{children:Object(v.jsxs)("div",{children:[Object(v.jsx)(m,{}),Object(v.jsx)(d.a,{exact:!0,path:"/",component:w}),Object(v.jsx)(d.a,{path:"/counterfeit",component:S})]})})}}]),n}(r.Component));o.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(f.a,{children:Object(v.jsx)(N,{})})}),document.getElementById("root"))},94:function(e,t,n){}},[[136,1,2]]]);
//# sourceMappingURL=main.47bef693.chunk.js.map