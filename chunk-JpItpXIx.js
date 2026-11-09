import{t as b$1}from"./chunk-DfR42GJS.js";import{B as M,G as NF,O as FF,Qt as v,an as xF,dt as Uh,m as AF}from"./main-ULV4Y2BT.js";var I=[`Placed`,`Confirmed`,`Shipped`,`Delivered`,`Cancelled`];var x={cod:`Cash on Delivery`,upi:`UPI`,qr:`QR Code (UPI)`,card:`Card`,offline:`Offline (confirmed by seller)`};var d=`#4338ca`;function b(e,t,n=``){let i=a=>AF(a,t.currency),o=e.totals,s=e.payment,c=s.method===`cod`?`Cash on Delivery - pay when you receive`:x[s.method]+(s.status===`Paid`?` - Paid`:` - Pending`),g=e.items.map((a,m)=>`
    <tr>
      <td style="padding:12px 8px;border-bottom:1px solid #eef0f4;color:#6b7280;font-size:12px">${m+1}</td>
      <td style="padding:12px 8px;border-bottom:1px solid #eef0f4;font-size:14px"><strong style="color:#111827">${NF(a.name)}</strong><br><span style="color:#6b7280;font-size:12px">${NF(a.unit)}</span></td>
      <td align="center" style="padding:12px 8px;border-bottom:1px solid #eef0f4;font-size:14px">${a.qty}</td>
      <td align="right" style="padding:12px 8px;border-bottom:1px solid #eef0f4;font-size:13px;color:#9ca3af;text-decoration:line-through">${i(a.mrp)}</td>
      <td align="right" style="padding:12px 8px;border-bottom:1px solid #eef0f4;font-size:14px">${i(a.price)}</td>
      <td align="center" style="padding:12px 8px;border-bottom:1px solid #eef0f4;font-size:12px;color:#6b7280">${a.gst}%</td>
      <td align="right" style="padding:12px 8px;border-bottom:1px solid #eef0f4;font-size:14px;font-weight:700;color:#111827">${i(a.price*a.qty)}</td>
    </tr>`).join(``),p=(a,m,h={})=>`
    <tr><td style="padding:6px 0;font-size:14px;color:#4b5563">${a}</td>
    <td align="right" style="padding:6px 0;font-size:14px;${h.bold?`font-weight:700;`:``}color:${h.color??`#111827`}">${m}</td></tr>`,l=e.customer,C=[t.address,t.gstin?`GSTIN: `+t.gstin:``,t.ownerPhone?`Phone: `+t.ownerPhone:``,t.ownerEmail].filter(Boolean).map(NF).join(`<br>`);return`<div style="background:#f3f4f8;padding:24px 10px;font-family:-apple-system,'Segoe UI',Roboto,Arial,sans-serif;color:#1f2937">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:700px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb">
  <tr><td style="background:${d};background-image:linear-gradient(135deg,#3730a3,#6366f1);padding:26px 28px;color:#ffffff">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td><div style="font-size:24px;font-weight:800;letter-spacing:-.3px">${NF(t.logoEmoji)} ${NF(t.appName)}</div><div style="font-size:12px;opacity:.85;margin-top:2px">${NF(t.tagline)}</div></td>
      <td align="right"><div style="font-size:11px;letter-spacing:2px;opacity:.85">TAX INVOICE</div><div style="font-size:20px;font-weight:800;margin-top:2px">#${NF(e.no)}</div></td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:22px 28px 6px">
    <div style="font-size:18px;font-weight:700;color:#111827">Thank you, ${NF(l.name.split(` `)[0])}! \u{1F389}</div>
    <div style="font-size:14px;color:#6b7280;margin-top:4px">We have received your order and will update you as it moves forward.</div>
  </td></tr>
  <tr><td style="padding:14px 28px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f5f6ff;border-radius:12px"><tr>
      <td style="padding:14px 16px;font-size:12px;color:#6b7280">Order date<br><strong style="font-size:14px;color:#111827">${xF(e.createdAt,!0)}</strong></td>
      <td style="padding:14px 16px;font-size:12px;color:#6b7280">Payment<br><strong style="font-size:14px;color:#111827">${NF(c)}</strong>${s.ref?`<br><span style="font-size:12px">Ref: ${NF(s.ref)}</span>`:``}</td>
      <td style="padding:14px 16px;font-size:12px;color:#6b7280">Status<br><strong style="font-size:14px;color:${d}">${NF(e.status)}</strong></td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:16px 28px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td valign="top" width="50%" style="padding-right:10px;font-size:13px;line-height:1.55;color:#374151"><div style="font-size:11px;letter-spacing:1.5px;color:${d};font-weight:700;margin-bottom:4px">SOLD BY</div><strong style="color:#111827">${NF(t.appName)}</strong><br>${C}</td>
      <td valign="top" width="50%" style="padding-left:10px;font-size:13px;line-height:1.55;color:#374151"><div style="font-size:11px;letter-spacing:1.5px;color:${d};font-weight:700;margin-bottom:4px">BILL TO / SHIP TO</div><strong style="color:#111827">${NF(l.name)}</strong><br>${NF(l.address)}<br>${NF(l.city)} ${NF(l.pincode)}<br>Phone: ${NF(l.mobile)}<br>${NF(l.email)}</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:18px 28px 0">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      <tr style="background:#eef0ff">
        <th align="left" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">#</th>
        <th align="left" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">ITEM</th>
        <th align="center" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">QTY</th>
        <th align="right" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">MRP</th>
        <th align="right" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">PRICE</th>
        <th align="center" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">GST</th>
        <th align="right" style="padding:10px 8px;font-size:11px;color:${d};letter-spacing:.8px">AMOUNT</th>
      </tr>${g}
    </table>
  </td></tr>
  <tr><td style="padding:14px 28px 4px">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td width="45%" valign="top" style="font-size:12px;color:#6b7280;padding-right:14px">${o.savings>0?`<div style="background:#ecfdf5;color:#047857;border-radius:10px;padding:10px 12px;font-weight:700;font-size:13px">You saved ${i(o.savings)} on this order \u{1F381}</div>`:``}</td>
      <td width="55%" valign="top">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${p(`MRP total`,i(o.mrpTotal))}
          ${o.productDiscount>0?p(`Product discount`,`- `+i(o.productDiscount),{color:`#059669`}):``}
          ${o.couponDiscount>0?p(`Coupon (`+NF(e.couponCode)+`)`,`- `+i(o.couponDiscount),{color:`#059669`}):``}
          ${p(`Taxable value`,i(o.taxable))}
          ${p(`GST (included in price)`,i(o.gst))}
          ${p(`Delivery`,o.shipping?i(o.shipping):`FREE`,{color:o.shipping?`#111827`:`#059669`})}
          ${o.codFee?p(`COD handling fee`,i(o.codFee)):``}
          ${p(`Round off`,(o.roundOff>=0?`+ `:`- `)+i(Math.abs(o.roundOff)))}
          <tr><td colspan="2" style="padding-top:8px"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${d};border-radius:12px"><tr>
            <td style="padding:13px 16px;color:#e0e7ff;font-size:13px;font-weight:700;letter-spacing:1px">GRAND TOTAL</td>
            <td align="right" style="padding:13px 16px;color:#ffffff;font-size:20px;font-weight:800">${i(o.grand)}</td>
          </tr></table></td></tr>
        </table>
      </td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:10px 28px 4px;font-size:12px;color:#6b7280"><strong style="color:#374151">Amount in words:</strong> ${NF(FF(o.grand))}</td></tr>
  ${t.invoiceNote?`<tr><td style="padding:14px 28px 0;font-size:12px;line-height:1.6;color:#6b7280">${NF(t.invoiceNote)}</td></tr>`:``}
  ${n}
  <tr><td style="padding:20px 28px 24px;text-align:center;font-size:11px;color:#9ca3af">This is a computer-generated invoice and does not require a signature.<br>${NF(t.appName)} ${t.ownerEmail?`· `+NF(t.ownerEmail):``} ${t.ownerPhone?`· `+NF(t.ownerPhone):``}</td></tr>
</table></div>`}function y(e,t){let n=o=>AF(o,t.currency),i=e.items.map((o,s)=>`${s+1}. ${o.name} (${o.unit}) x ${o.qty} = ${n(o.price*o.qty)}`);return[`*New order ${e.no}* - ${t.appName}`,``,...i,``,`Items total: ${n(e.totals.mrpTotal-e.totals.productDiscount)}`,e.totals.couponDiscount?`Coupon ${e.couponCode}: -${n(e.totals.couponDiscount)}`:``,`Delivery: ${e.totals.shipping?n(e.totals.shipping):`FREE`}`,e.totals.codFee?`COD fee: ${n(e.totals.codFee)}`:``,`*Grand total: ${n(e.totals.grand)}*`,``,`Payment: ${x[e.payment.method]}${e.payment.ref?` (Ref `+e.payment.ref+`)`:``}`,``,`*Deliver to*`,e.customer.name,e.customer.address,`${e.customer.city} ${e.customer.pincode}`,`Mobile: ${e.customer.mobile}`,`Email: ${e.customer.email}`,e.customer.notes?`Note: ${e.customer.notes}`:``].filter((o,s,c)=>!(o===``&&c[s-1]===``)).join(`
`)}var O=class e{store=v(Uh);orders=v(b$1);get configured(){let t=this.store.settings().email;return!!(t.serviceId&&t.templateId&&t.publicKey)}async send(t,n,i,o){let s=this.store.settings().email;if(!this.configured||!t)return!1;try{return(await fetch(`https://api.emailjs.com/api/v1.0/email/send`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({service_id:s.serviceId,template_id:s.templateId,user_id:s.publicKey,template_params:{to_email:t,to_name:n,subject:i,html:o,reply_to:this.store.settings().ownerEmail||t}})})).ok}catch{return!1}}async sendOrderEmails(t){let n=this.store.settings();if(!this.configured)return{configured:!1,customer:!1,owner:!1};let i=`Order ${t.no} - ${n.appName}`,o=this.orders.exportCode(t),s=`<tr><td style="padding:18px 28px 0"><div style="background:#fff7ed;border:1px solid #fed7aa;border-radius:12px;padding:12px 14px;font-size:12px;color:#7c2d12">
      <strong>Admin import code</strong> - paste this in Admin &rsaquo; Orders &rsaquo; Import to track this order in your dashboard:<br>
      <span style="font-family:monospace;font-size:10px;word-break:break-all;color:#9a3412">${NF(o)}</span></div></td></tr>`,[c,g]=await Promise.all([this.send(t.customer.email,t.customer.name,i,b(t,n)),n.ownerEmail?this.send(n.ownerEmail,n.appName,`New order ${t.no} from ${t.customer.name}`,b(t,n,s)):Promise.resolve(!1)]);return{configured:!0,customer:c,owner:g}}async sendStatusUpdate(t){let n=this.store.settings(),i=`<div style="font-family:-apple-system,Segoe UI,Arial,sans-serif;max-width:560px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:16px">
      <h2 style="margin:0 0 6px;color:#4338ca">${NF(n.logoEmoji)} ${NF(n.appName)}</h2>
      <p style="font-size:15px;color:#111827">Hi ${NF(t.customer.name)}, your order <strong>#${NF(t.no)}</strong> is now <strong style="color:#4338ca">${NF(t.status)}</strong>.</p>
      <p style="font-size:13px;color:#6b7280">Order total: ${NF(n.currency)}${t.totals.grand}. Questions? Reply to this email${n.ownerPhone?` or call `+NF(n.ownerPhone):``}.</p></div>`;return this.send(t.customer.email,t.customer.name,`Your order ${t.no} is ${t.status}`,i)}mailtoLink(t){let n=this.store.settings();return`mailto:${n.ownerEmail}?subject=${encodeURIComponent(`Order `+t.no+` - `+n.appName)}&body=${encodeURIComponent(y(t,n).replace(/\*/g,``))}`}whatsappLink(t){let n=this.store.settings(),i=(n.whatsapp||n.ownerPhone).replace(/\D/g,``);return`https://wa.me/${i.length===10?`91`+i:i}?text=${encodeURIComponent(y(t,n))}`}static ɵfac=function(n){return new(n||e)};static ɵprov=M({token:e,factory:e.ɵfac,providedIn:`root`})};export{x as i,O as n,b as r,I as t};