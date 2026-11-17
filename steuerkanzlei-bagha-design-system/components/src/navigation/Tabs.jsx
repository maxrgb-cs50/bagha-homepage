import React from 'react';
export function Tabs({tabs=[],value,defaultValue,onChange,style}){
  const [v,setV]=React.useState(defaultValue??(tabs[0]&&(tabs[0].value??tabs[0])));const cur=value??v;
  return <div role="tablist" style={{display:'flex',gap:32,borderBottom:'1px solid var(--border-hairline)',...style}}>
    {tabs.map(t=>{const val=t.value??t;const lab=t.label??t;const on=cur===val;
      return <button key={val} role="tab" aria-selected={on} onClick={()=>{setV(val);onChange&&onChange(val);}} style={{background:'none',border:0,padding:'0 0 14px',marginBottom:-1,cursor:'pointer',fontFamily:'var(--font-body)',fontSize:15,fontWeight:on?600:500,letterSpacing:'.02em',color:on?'var(--text-strong)':'var(--text-muted)',borderBottom:'2px solid '+(on?'var(--ink-900)':'transparent'),transition:'color var(--dur-fast)'}}>{lab}</button>;})}
  </div>;
}