import React from 'react';
import {Icon} from '../core/Icon.jsx';
const labelSt={fontFamily:'var(--font-body)',fontSize:14,fontWeight:500,color:'var(--text-strong)'};
const hintSt=(e)=>({fontSize:13,color:e?'var(--status-error)':'var(--text-subtle)'});
const ctrl=(f,e,d)=>({width:'100%',boxSizing:'border-box',fontFamily:'var(--font-body)',fontSize:16,color:'var(--text-strong)',background:d?'var(--paper-200)':'var(--surface-card)',border:'1px solid '+(e?'var(--status-error)':f?'var(--ink-900)':'var(--border-default)'),borderRadius:'var(--radius-control)',outline:'none',boxShadow:f?'0 0 0 3px var(--sand-200)':'none',transition:'border-color var(--dur-fast),box-shadow var(--dur-fast)',opacity:d?.6:1});
export function Select({label,hint,error,required,disabled,options=[],value,defaultValue,placeholder,onChange,name,style}){
  const [f,setF]=React.useState(false);const id=React.useId();
  return <div style={{display:'flex',flexDirection:'column',gap:8,...style}}>
    {label&&<label htmlFor={id} style={labelSt}>{label}{required&&<span style={{color:'var(--text-accent)'}}> *</span>}</label>}
    <div style={{position:'relative'}}>
      <select id={id} name={name} value={value} defaultValue={defaultValue??(placeholder?'':undefined)} disabled={disabled} onChange={onChange} onFocus={()=>setF(true)} onBlur={()=>setF(false)} style={{...ctrl(f,error,disabled),height:48,padding:'0 40px 0 14px',appearance:'none',WebkitAppearance:'none',cursor:'pointer'}}>
        {placeholder&&<option value="" disabled>{placeholder}</option>}
        {options.map(o=>{const v=typeof o==='string'?o:o.value;const l=typeof o==='string'?o:o.label;return <option key={v} value={v}>{l}</option>;})}
      </select>
      <Icon name="chevron-down" size={18} style={{position:'absolute',right:14,top:15,pointerEvents:'none',color:'var(--text-muted)'}}/>
    </div>
    {(error||hint)&&<span style={hintSt(error)}>{error||hint}</span>}
  </div>;
}