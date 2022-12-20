"use strict";(self.webpackChunkcommerce_webapi=self.webpackChunkcommerce_webapi||[]).push([[1899],{97685:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return m},default:function(){return c}});var t,i=r(87462),o=r(63366),a=(r(15007),r(64983)),d=r(91515),s=["components"],m={},l=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.mdx)("div",e)}),u={_frontmatter:m},p=d.Z;function c(e){var n=e.components,r=(0,o.Z)(e,s);return(0,a.mdx)(p,(0,i.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"refunds"},"Refunds"),(0,a.mdx)("p",null,"There are a couple of options to choose when issuing a refund using the Adobe Commerce API."),(0,a.mdx)("h2",{id:"salesrefundinvoicev1-service"},"salesRefundInvoiceV1 service"),(0,a.mdx)("p",null,"With this service, you can initiate and process a refund based on an invoice ID, created using an online payment method."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"salesRefundInvoice")," service allows you to:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Create a credit memo (complete or partial) for an invoice"),(0,a.mdx)("li",{parentName:"ul"},"Add details about the refunded items to the order"),(0,a.mdx)("li",{parentName:"ul"},"Change status and state of an order according to performed actions"),(0,a.mdx)("li",{parentName:"ul"},"Notify a customer about the performed refund operation"),(0,a.mdx)("li",{parentName:"ul"},"Designate whether the returned items are returned to stock")),(0,a.mdx)("h3",{id:"endpoint"},"Endpoint"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"POST V1/invoice/:invoiceId/refund")),(0,a.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"If you try to apply the service to an invoice created using an offline payment method, the system will return a validation error."),(0,a.mdx)("h2",{id:"salesrefundorderv1service"},"salesRefundOrderV1 service"),(0,a.mdx)("p",null,"This service performs the same operations as the ",(0,a.mdx)("inlineCode",{parentName:"p"},"salesRefundInvoiceV1")," service, but based on an order ID. Use this service if the invoice was created using an offline payment method."),(0,a.mdx)("h3",{id:"endpoint-1"},"Endpoint"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"POST V1/order/:orderId/refund")),(0,a.mdx)(l,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,a.mdx)("p",null,"If you try to apply the service to an invoice created using an online payment method, the system will return a validation error."),(0,a.mdx)("h2",{id:"other-services-for-issuing-refunds"},"Other services for issuing refunds"),(0,a.mdx)("p",null,"While we recommend you use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Refund")," services, Commerce also provides the following ",(0,a.mdx)("inlineCode",{parentName:"p"},"CreditmemoManagement")," services you can use to issue a credit:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"salesCreditmemoManagement")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"salesCreditmemoRepository"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-rest-modules-sales-index-md-216faa6f687d48188bb6.js.map