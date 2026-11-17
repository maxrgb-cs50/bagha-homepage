import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Accordion({items=[],defaultOpen=0,style}){
  const [o,setO]=React.useState(defaultOpen);
  return <div style={{borderTop:'1px solid var(--border-hairline)',...style}}>
    {items.map((it,i)=>{const on=o===i;return <div key={i} style={{borderBottom:'1px solid var(--border-hairline)'}}>
      <button onClick={()=>setO(on?-1:i)} aria-expanded={on} style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,padding:'22px 0',background:'none',border:0,cursor:'pointer',textAlign:'left',fontFamily:'var(--font-display)',fontSize:'var(--fs-h4)',lineHeight:'var(--lh-h4)',fontWeight:500,color:'var(--text-strong)'}}>{it.title}<Icon name="plus" size={20} style={{transform:on?'rotate(45deg)':'none',transition:'transform var(--dur-base) var(--ease-standard)',color:'var(--sand-600)'}}/></button>
      {on&&<div style={{padding:'0 48px 24px 0',fontSize:16,lineHeight:1.65,color:'var(--text-muted)'}}>{it.content}</div>}
    </div>;})}
  </div>;
}