import React from 'react';
const labelSt={fontFamily:'var(--font-body)',fontSize:14,fontWeight:500,color:'var(--text-strong)'};
const hintSt=(e)=>({fontSize:13,color:e?'var(--status-error)':'var(--text-subtle)'});
const ctrl=(f,e,d)=>({width:'100%',boxSizing:'border-box',fontFamily:'var(--font-body)',fontSize:16,color:'var(--text-strong)',background:d?'var(--paper-200)':'var(--surface-card)',border:'1px solid '+(e?'var(--status-error)':f?'var(--ink-900)':'var(--border-default)'),borderRadius:'var(--radius-control)',outline:'none',boxShadow:f?'0 0 0 3px var(--sand-200)':'none',transition:'border-color var(--dur-fast),box-shadow var(--dur-fast)',opacity:d?.6:1});
export function Input({label,hint,error,required,disabled,type='text',value,defaultValue,placeholder,onChange,name,style}){
  const [f,setF]=React.useState(false);const id=React.useId();
  return <div style={{display:'flex',flexDirection:'column',gap:8,...style}}>
    {label&&<label htmlFor={id} style={labelSt}>{label}{required&&<span style={{color:'var(--text-accent)'}}> *</span>}</label>}
    <input id={id} name={name} type={type} value={value} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} onChange={onChange} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{...ctrl(f,error,disabled),height:48,padding:'0 14px'}}/>
    {(error||hint)&&<span style={hintSt(error)}>{error||hint}</span>}
  </div>;
}