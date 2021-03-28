(this["webpackJsonpotc-nft-ui"]=this["webpackJsonpotc-nft-ui"]||[]).push([[0],{105:function(e,t,a){},130:function(e,t){},145:function(e,t,a){},146:function(e,t,a){"use strict";a.r(t);a(98),a(99);var n=a(1),r=a.n(n),c=a(40),o=a.n(c),s=(a(105),a(4)),l=a(5),i=a(7),u=a(6),j=a(155),d=a(17),b=a(151),h=a(89),p=a(156),x=a(158),O=a(39),m={apiHost:"https://otc-nft-api.herokuapp.com",env:"rinkeby",ethAPIProvider:"https://eth-rinkeby.alchemyapi.io/v2/sl7kpn-EhhbJ_6B39V4uuMQNzGRjl-ei"},f=a(8);var v=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)("h1",{children:"Over the Counter: NFTs for the Masses"})," ",m.env?"(".concat(m.env,")"):null]})}),Object(f.jsx)(p.a,{sticky:"top",children:Object(f.jsxs)(x.a,{defaultActiveKey:"home",children:[Object(f.jsx)(x.a.Link,{as:O.b,eventKey:"home",to:"/",children:"Home"}),Object(f.jsx)(x.a.Link,{as:O.b,eventKey:"counterfeit",to:"/counterfeit",children:"Counterfeit"})]})})]})},g=a(52),y=a.n(g);var C=function(e){return Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(h.a,{className:"col-md-4",children:["Step 1: ",Object(f.jsx)("a",{href:"https://testnets.opensea.io/assets",target:"_blank",rel:"noreferrer",children:"Find an NFT"})," you love or want to sell."]}),Object(f.jsx)(h.a,{className:"col-md-4",children:"Step 2: Put the URL into the Counterfeit page."}),Object(f.jsx)(h.a,{className:"col-md-4",children:"Step 3: Profit."})]})},w=a(3),k=a.n(w),T=a(48),I=a(27),N=a(157),D=a(154),L=a(70),F=a(47),P=a.n(F),S=a(152);var G=function(e){var t=function(e,t,a){if(t){if(function(e){var t=e.split(".").pop();return!!t&&"glb"===t.toLowerCase()}(t))return Object(f.jsx)("model-viewer",{"max-width":"250px","auto-rotate":"true",autoplay:"true","camera-controls":"true",src:t,"ar-status":"not-presenting"});if(function(e){var t=e.split(".").pop();return!!t&&("mp4"===t.toLowerCase()||"ogg"===t.toLowerCase()||"webm"===t.toLowerCase()||"ogv"===t.toLowerCase())}(t))return Object(f.jsx)("video",{height:"200px","max-width":"250px",muted:!0,autoPlay:!0,controlsList:"nodownload",loop:!0,preload:"auto",src:t})}return Object(f.jsx)("img",{height:"200px","max-width":"250px",src:a,alt:"Error loading contract pic"})};return Object(f.jsx)(L.b,{initialValues:e.meta,validate:function(e){return{}},children:function(a){var n=a.values,r=a.handleChange;return Object(f.jsxs)(f.Fragment,{children:[e.changes&&e.changes(n),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{className:"col-md-6",children:t(0,n.animation_url,n.image)}),Object(f.jsxs)(h.a,{className:"col-md-6",children:[Object(f.jsxs)(N.a.Group,{controlId:"nftmeta-name"+n.NFTID,children:[Object(f.jsx)(N.a.Label,{children:"Name"}),Object(f.jsx)(N.a.Control,{onChange:r,name:"name",disabled:!e.editable,type:"text",placeholder:"NFT Name, go nuts",value:n.name})]}),Object(f.jsxs)(N.a.Group,{controlId:"nftmeta-desc"+n.NFTID,children:[Object(f.jsx)(N.a.Label,{children:"Description"}),Object(f.jsx)(N.a.Control,{as:"textarea",disabled:!e.editable,onChange:r,name:"description",style:{height:"100%"},placeholder:"NFT Description, make sure you sell its uniquness hard",value:n.description})]})]})]}),Object(f.jsx)("h4",{children:"Attributes"}),Object(f.jsx)(b.a,{children:Object(f.jsx)(L.a,{name:"attributes",children:function(t){t.insert;var a=t.remove;t.push;return n.attributes.map((function(t,n){t.formattedVal=t.value,"number"===t.value?t.inputType="number":t.inputType="text",t.max_value&&(t.formattedVal="".concat(t.value," of ").concat(t.max_value)),"date"===t.display_type&&(t.inputType="date",t.formattedVal=P.a.unix(t.value).format("YYYY-MM-DD"));var c=!e.editable||"otc"===t.origin||!!t.max_value;return Object(f.jsx)(h.a,{className:"col-md-4",children:Object(f.jsxs)(N.a.Group,{controlId:"nftmeta"+n,children:[Object(f.jsx)(N.a.Label,{children:"".concat(t.trait_type)})," ",c?null:Object(f.jsx)(S.a,{onClick:function(){return a(n)}}),Object(f.jsx)(N.a.Control,{onChange:r,name:"attributes.".concat(n,".value"),disabled:c,type:t.inputType,value:t.formattedVal}),t.display_type?Object(f.jsx)(N.a.Text,{className:"text-muted",children:t.display_type}):null]})},n)}))}})}),Object(f.jsx)(b.a,{children:Object(f.jsxs)(h.a,{className:"col-md-12",children:[Object(f.jsxs)(N.a.Group,{controlId:"nftmeta-img-url"+n.NFTID,children:[Object(f.jsx)(N.a.Label,{children:"Image URL"}),Object(f.jsx)(N.a.Control,{onChange:r,name:"image",disabled:!e.editable,type:"text",placeholder:"Image URL",value:n.image})]}),Object(f.jsxs)(N.a.Group,{controlId:"nftmeta-ext-url"+n.NFTID,children:[Object(f.jsx)(N.a.Label,{children:"External URL"}),Object(f.jsx)(N.a.Control,{onChange:r,name:"external_url",disabled:!e.editable,type:"text",value:n.external_url})]}),Object(f.jsxs)(N.a.Group,{controlId:"nftmeta-youtube-url"+n.NFTID,children:[Object(f.jsx)(N.a.Label,{children:"Youtube URL"}),Object(f.jsx)(N.a.Control,{onChange:r,name:"youtube_url",disabled:!e.editable,type:"text",value:n.youtube_url})]}),Object(f.jsxs)(N.a.Group,{controlId:"nftmeta-animation-url"+n.NFTID,children:[Object(f.jsx)(N.a.Label,{children:"Animation URL"}),Object(f.jsx)(N.a.Control,{onChange:r,name:"animation_url",disabled:!e.editable,type:"text",value:n.animation_url})]})]})})]})}})},_=a(60);var E=function(e){var t=Object(n.useState)(""),a=Object(I.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(""),s=Object(I.a)(o,2),l=s[0],i=s[1],u=Object(n.useState)(!1),j=Object(I.a)(u,2),d=j[0],p=j[1],x=Object(n.useState)(P()().add(1,"month").format("YYYY-MM-DD")),O=Object(I.a)(x,2),v=O[0],g=O[1],C=Object(n.useState)("12:00"),w=Object(I.a)(C,2),L=w[0],F=w[1],S=Object(n.useState)(!1),E=Object(I.a)(S,2),A=E[0],M=E[1],R=Object(n.useState)(!1),Y=Object(I.a)(R,2),V=Y[0],U=Y[1],B=Object(n.useState)(!1),H=Object(I.a)(B,2),W=H[0],q=H[1],J=Object(n.useState)(null),K=Object(I.a)(J,2),z=K[0],Q=K[1],X=Object(n.useState)(null),Z=Object(I.a)(X,2),$=Z[0],ee=Z[1],te=Object(n.useState)(null),ae=Object(I.a)(te,2),ne=ae[0],re=ae[1];Object(n.useEffect)((function(){var e=!!r&&!!l;d&&M(e&&!!v&&!!L),M(e)}),[r,l,d,v,L]),Object(n.useEffect)((function(){U(!!z)}),[z]),Object(n.useEffect)((function(){if(window.ethereum){var e=new _.a.providers.Web3Provider(window.ethereum);ee(e)}}),[z]),Object(n.useEffect)((function(){(function(){var e=Object(T.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if($){e.next=2;break}return e.abrupt("return");case 2:return e.t0=q,e.next=5,$.listAccounts();case 5:e.t1=e.sent,e.t2=e.t1>0,(0,e.t0)(e.t2);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[$]);var ce=function(){var e=Object(T.a)(k.a.mark((function e(t){var a,n,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(l,r),e.prev=2,d&&(a=P()(v+" "+L).format()),e.next=6,y.a.post("".concat(m.apiHost,"/api/v1/preview"),{Type:"contract",ContractAddr:r,CounterfeitTokenID:l,RugPullTime:a});case 6:n=e.sent,c=n.data,o=_.a.utils.formatEther(c.TotalPriceInWei+""),console.log(o),c.etherValue=o,Q(c),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),console.log("Error occurred when attempting to go to checkout.",e.t0),alert("It looks like that NFT isn't yet supported by OTC; we're working on it, but in the meantime try another one.");case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(T.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:q(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("Error requesting accounts",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(T.a)(k.a.mark((function e(t){var a,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=$.getSigner(),e.next=4,a.sendTransaction({to:z.OTCMarketContractAddr,value:_.a.BigNumber.from(z.TotalPriceInWei+"")});case 4:return n=e.sent,e.next=7,y.a.post("".concat(m.apiHost,"/api/v1/mint/").concat(z.OrderID),{OrderID:z.OrderID,PaymentTransactionID:n.hash,DestinationAddress:n.from,NFTMeta:ne});case 7:alert("Success! You'll have a newly minted NFT shortly"),c(""),i(""),p(!1),re(null),Q(null),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Error finishing transaction",e.t0),alert("Uhhh, something went wrong... contact me about getting this worked out.");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{children:[Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(N.a.Group,{controlId:"counterfeitContractAddr",children:[Object(f.jsx)(N.a.Label,{children:"Contract Address"}),Object(f.jsx)(N.a.Control,{disabled:V,value:r,onChange:function(e){return function(e){var t=e.split("assets");if(t&&2===t.length){var a=t[1].split("/");a&&3===a.length?(c(a[1]),i(a[2])):c(e)}else c(e)}(e.target.value)},type:"text",placeholder:"Paste a link from OpenSea or any ERC721 contract's ethereum address"}),Object(f.jsx)(N.a.Text,{className:"text-muted",children:"If this is wrong I don't want to be right."})]}),r?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(N.a.Group,{controlId:"counterfeitTokenId",children:[Object(f.jsx)(N.a.Label,{children:"Token ID"}),Object(f.jsx)(N.a.Control,{disabled:V,value:l,onChange:function(e){return i(e.target.value)},type:"text",placeholder:"Input the Token ID you want"})]}),Object(f.jsxs)(b.a,{children:[Object(f.jsx)(h.a,{className:"col-md-4",children:Object(f.jsxs)(N.a.Group,{controlId:"includeRugPull",children:[Object(f.jsx)(N.a.Check,{disabled:V,checked:d,onChange:function(e){return p(e.target.checked)},type:"checkbox",label:"Include Rug Pull"}),Object(f.jsx)(N.a.Text,{className:"text-muted",children:"A rugpull will change the metadata of the contract on a certain date; let's you do some pretty classic pranks on your friends. Be aware that this is associated with an increased cost."})]})}),d?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(h.a,{className:"col-md-4",children:Object(f.jsx)(N.a.Group,{controlId:"rugPullTime",children:Object(f.jsx)(N.a.Control,{disabled:V,value:v,onChange:function(e){return g(e.target.value)},type:"date"})})}),Object(f.jsx)(h.a,{className:"col-md-4",children:Object(f.jsx)(N.a.Group,{controlId:"rugPullTime",children:Object(f.jsx)(N.a.Control,{disabled:V,value:L,onChange:function(e){return F(e.target.value)},type:"time"})})})]}):null]})]}):null,V?Object(f.jsx)(D.a,{variant:"default",onClick:function(e){e.preventDefault(),c(""),i(""),p(!1),Q(null),re(null)},children:"Clear"}):Object(f.jsx)(D.a,{variant:"primary",onClick:ce,disabled:!A,children:"Go to Checkout"})]}),z?Object(f.jsxs)("div",{children:[Object(f.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}}),Object(f.jsxs)(b.a,{children:[Object(f.jsxs)(h.a,{className:"col-md-6",children:[Object(f.jsx)("h3",{children:"Contract Details"}),Object(f.jsx)(G,{meta:z.NFTMeta})]}),d?Object(f.jsxs)(h.a,{className:"col-md-6",children:[Object(f.jsx)("h3",{children:"Rug Pull Details"}),Object(f.jsx)(G,{meta:z.NFTMeta,editable:!0,changes:function(e){return re(e)}})]}):null]}),Object(f.jsx)("hr",{style:{marginTop:"30px",marginBottom:"30px"}}),Object(f.jsxs)(N.a,{children:[Object(f.jsxs)(N.a.Group,{controlId:"totalPrice",children:[Object(f.jsx)(N.a.Label,{children:"Total Price"}),Object(f.jsx)(N.a.Control,{disabled:!0,type:"text",value:z.etherValue+" ETH"})]}),Object(f.jsx)(N.a.Group,{controlId:"connectWallet",children:Object(f.jsx)(D.a,{disabled:W,variant:"primary",onClick:oe,children:"1. Connect Wallet"})}),Object(f.jsx)(N.a.Group,{children:Object(f.jsx)(D.a,{disabled:!W,variant:"primary",onClick:se,children:"2. Finish Transaction to Mint NFT"})})]})]}):null]})},A=(a(145),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)(j.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)(d.a,{exact:!0,path:"/",component:C}),Object(f.jsx)(d.a,{path:"/counterfeit",component:E})]})})}}]),a}(n.Component));o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O.a,{children:Object(f.jsx)(A,{})})}),document.getElementById("root"))}},[[146,1,2]]]);
//# sourceMappingURL=main.a2fbc177.chunk.js.map