(this["webpackJsonpotc-nft-ui"]=this["webpackJsonpotc-nft-ui"]||[]).push([[0],{107:function(e,t,a){},132:function(e,t){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);a(100),a(101);var n=a(1),r=a.n(n),c=a(44),o=a.n(c),s=(a(107),a(4)),i=a(5),l=a(8),u=a(7),d=a(158),j=a(18),b=a(153),h=a(91),p=a(159),x=a(161),m=a(40),O={apiHost:"https://otc-nft-api.herokuapp.com",env:"rinkeby",ethAPIProvider:"https://eth-rinkeby.alchemyapi.io/v2/sl7kpn-EhhbJ_6B39V4uuMQNzGRjl-ei"},f=a(6);var v=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h1",{children:"Over the Counter: NFTs for the Masses"})," ",O.env?"(".concat(O.env,")"):null]})}),Object(f.jsx)(p.a,{sticky:"top",children:Object(f.jsxs)(x.a,{defaultActiveKey:"home",children:[Object(f.jsx)(x.a.Link,{as:m.b,eventKey:"home",to:"/",children:"Home"}),Object(f.jsx)(x.a.Link,{as:m.b,eventKey:"counterfeit",to:"/counterfeit",children:"Counterfeit"}),Object(f.jsx)(x.a.Link,{as:m.b,eventKey:"custom",to:"/custom",children:"Custom NFT"})]})})]})},g=a(41),y=a.n(g);var w=function(e){return Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(h.a,{className:"col-md-4",children:["Step 1: ",Object(f.jsx)("a",{href:"https://testnets.opensea.io/assets",target:"_blank",rel:"noreferrer",children:"Find an NFT"})," you love or want to sell."]}),Object(f.jsx)(h.a,{className:"col-md-4",children:"Step 2: Put the URL into the Counterfeit page."}),Object(f.jsx)(h.a,{className:"col-md-4",children:"Step 3: Profit."})]})},T=a(3),k=a.n(T),C=a(31),N=a(20),I=a(58),D=a(160),F=a(156),L=a(71),P=a(43),S=a.n(P),_=a(154);var E=function(e){var t=function(e,t,a){if(t){if(function(e){var t=e.split(".").pop();return!!t&&"glb"===t.toLowerCase()}(t))return Object(f.jsx)("model-viewer",{"max-width":"250px","auto-rotate":"true",autoplay:"true","camera-controls":"true",src:t,"ar-status":"not-presenting"});if(function(e){var t=e.split(".").pop();return!!t&&("mp4"===t.toLowerCase()||"ogg"===t.toLowerCase()||"webm"===t.toLowerCase()||"ogv"===t.toLowerCase())}(t))return Object(f.jsx)("video",{height:"200px","max-width":"250px",muted:!0,autoPlay:!0,controlsList:"nodownload",loop:!0,preload:"auto",src:t})}return Object(f.jsx)("img",{height:"200px","max-width":"250px",src:a,alt:"Error loading contract pic"})};return Object(f.jsx)(L.b,{initialValues:e.meta,validate:function(e){return{}},children:function(a){var n=a.values,r=a.handleChange;return Object(f.jsxs)(f.Fragment,{children:[e.changes&&e.changes(n),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{className:"col-md-6",children:t(0,n.animation_url,n.image)}),Object(f.jsxs)(h.a,{className:"col-md-6",children:[Object(f.jsxs)(D.a.Group,{controlId:"nftmeta-name"+n.NFTID,children:[Object(f.jsx)(D.a.Label,{children:"Name"}),Object(f.jsx)(D.a.Control,{onChange:r,name:"name",disabled:!e.editable,type:"text",placeholder:"NFT Name, go nuts",value:n.name})]}),Object(f.jsxs)(D.a.Group,{controlId:"nftmeta-desc"+n.NFTID,children:[Object(f.jsx)(D.a.Label,{children:"Description"}),Object(f.jsx)(D.a.Control,{as:"textarea",disabled:!e.editable,onChange:r,name:"description",style:{height:"100%"},placeholder:"NFT Description, make sure you sell its uniquness hard",value:n.description})]})]})]}),Object(f.jsx)("h4",{children:"Attributes"}),Object(f.jsx)(b.a,{children:!!n.attributes&&Object(f.jsx)(L.a,{name:"attributes",children:function(t){t.insert;var a=t.remove;t.push;return n.attributes.map((function(t,n){t.formattedVal=t.value,"number"===t.value?t.inputType="number":t.inputType="text",t.max_value&&(t.formattedVal="".concat(t.value," of ").concat(t.max_value)),"date"===t.display_type&&(t.inputType="date",t.formattedVal=S.a.unix(t.value).format("YYYY-MM-DD"));var c=!e.editable||"otc"===t.origin||!!t.max_value;return Object(f.jsx)(h.a,{className:"col-4",children:Object(f.jsxs)(D.a.Group,{controlId:"nftmeta"+n,children:[!!t.trait_type&&Object(f.jsx)(D.a.Label,{children:"".concat(t.trait_type)})," ",c?null:Object(f.jsx)(_.a,{onClick:function(){return a(n)}}),Object(f.jsx)(D.a.Control,{onChange:r,name:"attributes.".concat(n,".value"),disabled:c,type:t.inputType,value:t.formattedVal}),t.display_type?Object(f.jsx)(D.a.Text,{className:"text-muted",children:t.display_type}):null]})},n)}))}})}),Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{className:"col-md-12",children:[Object(f.jsxs)(D.a.Group,{controlId:"nftmeta-img-url"+n.NFTID,children:[Object(f.jsx)(D.a.Label,{children:"Image URL"}),Object(f.jsx)(D.a.Control,{onChange:r,name:"image",disabled:!e.editable,type:"text",placeholder:"Image URL",value:n.image})]}),Object(f.jsxs)(D.a.Group,{controlId:"nftmeta-ext-url"+n.NFTID,children:[Object(f.jsx)(D.a.Label,{children:"External URL"}),Object(f.jsx)(D.a.Control,{onChange:r,name:"external_url",disabled:!e.editable,type:"text",value:n.external_url})]}),Object(f.jsxs)(D.a.Group,{controlId:"nftmeta-youtube-url"+n.NFTID,children:[Object(f.jsx)(D.a.Label,{children:"Youtube URL"}),Object(f.jsx)(D.a.Control,{onChange:r,name:"youtube_url",disabled:!e.editable,type:"text",value:n.youtube_url})]}),Object(f.jsxs)(D.a.Group,{controlId:"nftmeta-animation-url"+n.NFTID,children:[Object(f.jsx)(D.a.Label,{children:"Animation URL"}),Object(f.jsx)(D.a.Control,{onChange:r,name:"animation_url",disabled:!e.editable,type:"text",value:n.animation_url})]})]})})]})}})},G=a(39),M=a(157);var A=function(e){var t=Object(n.useState)(""),a=Object(N.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),s=Object(N.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(N.a)(u,2),j=d[0],p=d[1],x=Object(n.useState)(S()().add(1,"month").format("YYYY-MM-DD")),m=Object(N.a)(x,2),v=m[0],g=m[1],w=Object(n.useState)("12:00"),T=Object(N.a)(w,2),L=T[0],P=T[1],_=Object(n.useState)(!1),A=Object(N.a)(_,2),V=A[0],Y=A[1],R=Object(n.useState)(!1),B=Object(N.a)(R,2),U=B[0],W=B[1],H=Object(n.useState)(!1),q=Object(N.a)(H,2),K=q[0],J=q[1],$=Object(n.useState)(null),z=Object(N.a)($,2),Q=z[0],X=z[1],Z=Object(n.useState)(null),ee=Object(N.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(null),re=Object(N.a)(ne,2),ce=re[0],oe=re[1];Object(n.useEffect)((function(){var e=!!r&&!!i;Y(j?e&&!!v&&!!L:e)}),[r,i,j,v,L]),Object(n.useEffect)((function(){W(!!Q)}),[Q]),Object(n.useEffect)((function(){if(window.ethereum){var e=new G.a.providers.Web3Provider(window.ethereum);ae(e)}}),[Q]),Object(n.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te){e.next=2;break}return e.abrupt("return");case 2:return e.t0=J,e.next=5,te.listAccounts();case 5:e.t1=e.sent,e.t2=e.t1>0,(0,e.t0)(e.t2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[te]);var se=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(i,r),e.prev=2,j&&(a=S()(v+" "+L).format()),e.next=6,y.a.post("".concat(O.apiHost,"/api/v1/preview"),{Type:"contract",ContractAddr:r,CounterfeitTokenID:i,RugPullTime:a});case 6:n=e.sent,c=n.data,o=G.a.utils.formatEther(c.TotalPriceInWei+""),console.log(o),c.etherValue=o,c.usdValue=c.PriceDetails.PriceUSCents/100,X(c),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("Error occurred when attempting to go to checkout.",e.t0),alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.");case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:J(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error requesting accounts",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=te.getSigner(),e.next=4,a.sendTransaction({to:Q.OTCMarketContractAddr,value:G.a.BigNumber.from(Q.TotalPriceInWei+"")});case 4:return n=e.sent,e.next=7,y.a.post("".concat(O.apiHost,"/api/v1/mint/").concat(Q.OrderID),{OrderID:Q.OrderID,PaymentTransactionID:n.hash,DestinationAddress:n.from,NFTMeta:ce});case 7:alert("Success! You'll have a newly minted NFT shortly"),c(""),l(""),p(!1),oe(null),X(null),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error finishing transaction",e.t0),alert("Uhhh, something went wrong... contact me about getting this worked out.");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)(D.a,{children:[Object(f.jsxs)(D.a.Group,{controlId:"counterfeitContractAddr",children:[Object(f.jsx)(D.a.Label,{children:"Contract Address"}),Object(f.jsx)(D.a.Control,{disabled:U,value:r,onChange:function(e){return function(e){var t=e.split("assets");if(t&&2===t.length){var a=t[1].split("/");a&&3===a.length?(c(a[1]),l(a[2])):c(e)}else c(e)}(e.target.value)},type:"text",placeholder:"Paste a link from OpenSea or any ERC721 contract's ethereum address"}),Object(f.jsx)(D.a.Text,{className:"text-muted",children:"If this is wrong I don't want to be right."})]}),r?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(D.a.Group,{controlId:"counterfeitTokenId",children:[Object(f.jsx)(D.a.Label,{children:"Token ID"}),Object(f.jsx)(D.a.Control,{disabled:U,value:i,onChange:function(e){return l(e.target.value)},type:"text",placeholder:"Input the Token ID you want"})]}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{className:"col-md-4 col-12",children:Object(f.jsxs)(D.a.Group,{controlId:"includeRugPull",children:[Object(f.jsx)(D.a.Check,{disabled:U,checked:j,onChange:function(e){return p(e.target.checked)},type:"checkbox",label:"Include Rug Pull"}),Object(f.jsx)(D.a.Text,{className:"text-muted",children:"A rugpull will change the metadata of the contract on a certain date; let's you do some pretty classic pranks on your friends. Be aware that this is associated with an increased cost."})]})}),j?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.a,{className:"col-md-4 col-12",children:Object(f.jsx)(D.a.Group,{controlId:"rugPullTime",children:Object(f.jsx)(D.a.Control,{disabled:U,value:v,onChange:function(e){return g(e.target.value)},type:"date"})})}),Object(f.jsx)(h.a,{className:"col-md-4 col-12",children:Object(f.jsx)(D.a.Group,{controlId:"rugPullTime",children:Object(f.jsx)(D.a.Control,{disabled:U,value:L,onChange:function(e){return P(e.target.value)},type:"time"})})})]}):null]})]}):null,U?Object(f.jsx)(F.a,{variant:"default",onClick:function(e){e.preventDefault(),c(""),l(""),p(!1),X(null),oe(null)},children:"Clear"}):Object(f.jsx)(F.a,{variant:"primary",onClick:se,disabled:!V,children:"Go to Checkout"})]}),Q?Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}}),Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(h.a,{className:"col-md-6",children:[Object(f.jsx)("h3",{children:"Contract Details"}),Object(f.jsx)(E,{meta:Q.NFTMeta})]}),j?Object(f.jsxs)(h.a,{className:"col-md-6",children:[Object(f.jsx)("h3",{children:"Rug Pull Details"}),Object(f.jsx)(E,{meta:Q.NFTMeta,editable:!0,changes:function(e){return oe(e)}})]}):null]}),Object(f.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}}),Object(f.jsx)(b.a,{children:Object(f.jsx)(h.a,{className:"col-md-6 col-12",children:Object(f.jsxs)(D.a,{children:[Object(f.jsxs)(D.a.Group,{controlId:"totalPrice",children:[Object(f.jsx)(I.a,{multiline:!0,children:Q.PriceDetails.LineItems.map((function(e,t){return Object(f.jsx)("div",{children:e},t)}))}),Object(f.jsx)(D.a.Label,{children:Object(f.jsx)("h5",{children:"Total Price"})}),Object(f.jsx)(M.a,{"data-tip":"price-details",style:{marginLeft:"10px"}}),Object(f.jsx)(D.a.Control,{readOnly:!0,type:"text",value:"".concat(Q.etherValue," ETH - ($").concat(Q.usdValue," + gas)")})]}),Object(f.jsxs)(D.a.Group,{controlId:"connectWallet",children:[Object(f.jsx)(F.a,{disabled:K,variant:"primary",onClick:ie,children:"1. Connect Wallet"}),Object(f.jsx)(D.a.Text,{className:"text-muted",children:'By submitting this transaction, you are acknowledging that you understand that are purchasing a "copy" of an NFT from a different contract. This NFT does not pretend to be the original and service of contract metadata could potentially be hindered by the other party. You are also acknowledging that this platform is someone\'s side project, and therefore support for any technical issues is likely to be slow but earnest.'})]}),Object(f.jsx)(D.a.Group,{children:Object(f.jsx)(F.a,{disabled:!K,variant:"primary",onClick:le,children:"2. Finish Transaction to Mint NFT"})})]})})})]}):null]})};var V=function(e){var t=Object(n.useState)({image:"",external_url:"",youtube_url:"",animation_url:"",name:"",description:"",attributes:[]}),a=Object(N.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),s=Object(N.a)(o,2),i=s[0],l=s[1],u=Object(n.useState)(!1),d=Object(N.a)(u,2),j=d[0],p=d[1],x=Object(n.useState)(!1),m=Object(N.a)(x,2),v=m[0],g=m[1],w=Object(n.useState)(null),T=Object(N.a)(w,2),L=T[0],P=T[1],S=Object(n.useState)(null),_=Object(N.a)(S,2),A=_[0],V=_[1];Object(n.useEffect)((function(){r.name?l(!0):l(!1)}),[r]),Object(n.useEffect)((function(){p(!!L)}),[L]),Object(n.useEffect)((function(){if(window.ethereum){var e=new G.a.providers.Web3Provider(window.ethereum);V(e)}}),[L]),Object(n.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(A){e.next=2;break}return e.abrupt("return");case 2:return e.t0=g,e.next=5,A.listAccounts();case 5:e.t1=e.sent,e.t2=e.t1>0,(0,e.t0)(e.t2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[A]);var Y=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(r),e.prev=2,e.next=5,y.a.post("".concat(O.apiHost,"/api/v1/preview"),{Type:"custom",NFTMeta:r});case 5:a=e.sent,(n=a.data).NFTMeta&&c(n.NFTMeta),o=G.a.utils.formatEther(n.TotalPriceInWei+""),console.log(o),n.etherValue=o,n.usdValue=n.PriceDetails.PriceUSCents/100,P(n),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),console.log("Error occurred when attempting to go to checkout.",e.t0),alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.");case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:g(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error requesting accounts",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=A.getSigner(),e.next=4,a.sendTransaction({to:L.OTCMarketContractAddr,value:G.a.BigNumber.from(L.TotalPriceInWei+"")});case 4:return n=e.sent,e.next=7,y.a.post("".concat(O.apiHost,"/api/v1/mint/").concat(L.OrderID),{OrderID:L.OrderID,PaymentTransactionID:n.hash,DestinationAddress:n.from,NFTMeta:r});case 7:alert("Success! You'll have a newly minted NFT shortly"),c({image:"",external_url:"",youtube_url:"",animation_url:"",name:"",description:"",attributes:[]}),P(null),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("Error finishing transaction",e.t0),alert("Uhhh, something went wrong... contact me about getting this worked out.");case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)(D.a,{children:[L?Object(f.jsx)(E,{meta:L.NFTMeta,editable:!1,changes:function(e){return c(e)}}):Object(f.jsx)(E,{meta:r,editable:!j,changes:function(e){return c(e)}}),j?Object(f.jsx)(F.a,{variant:"default",onClick:function(e){e.preventDefault(),P(null)},children:"Edit"}):Object(f.jsx)(F.a,{variant:"primary",onClick:Y,disabled:!i,children:"Go to Checkout"})]}),L?Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}}),Object(f.jsx)(b.a,{children:Object(f.jsx)(h.a,{className:"col-md-6 col-12",children:Object(f.jsxs)(D.a,{children:[Object(f.jsxs)(D.a.Group,{controlId:"totalPrice",children:[Object(f.jsx)(I.a,{multiline:!0,children:L.PriceDetails.LineItems.map((function(e,t){return Object(f.jsx)("div",{children:e},t)}))}),Object(f.jsx)(D.a.Label,{children:Object(f.jsx)("h5",{children:"Total Price"})}),Object(f.jsx)(M.a,{"data-tip":"price-details",style:{marginLeft:"10px"}}),Object(f.jsx)(D.a.Control,{readOnly:!0,type:"text",value:"".concat(L.etherValue," ETH - ($").concat(L.usdValue," + gas)")})]}),Object(f.jsxs)(D.a.Group,{controlId:"connectWallet",children:[Object(f.jsx)(F.a,{disabled:v,variant:"primary",onClick:R,children:"1. Connect Wallet"}),Object(f.jsx)(D.a.Text,{className:"text-muted",children:'By submitting this transaction, you are acknowledging that you understand that are purchasing a "copy" of an NFT from a different contract. This NFT does not pretend to be the original and service of contract metadata could potentially be hindered by the other party. You are also acknowledging that this platform is someone\'s side project, and therefore support for any technical issues is likely to be slow but earnest.'})]}),Object(f.jsx)(D.a.Group,{children:Object(f.jsx)(F.a,{disabled:!v,variant:"primary",onClick:B,children:"2. Finish Transaction to Mint NFT"})})]})})})]}):null]})},Y=(a(147),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsx)(d.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)(j.a,{exact:!0,path:"/",component:w}),Object(f.jsx)(j.a,{path:"/counterfeit",component:A}),Object(f.jsx)(j.a,{path:"/Custom",component:V})]})})}}]),a}(n.Component));o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(m.a,{children:Object(f.jsx)(Y,{})})}),document.getElementById("root"))}},[[148,1,2]]]);
//# sourceMappingURL=main.c32d28d2.chunk.js.map