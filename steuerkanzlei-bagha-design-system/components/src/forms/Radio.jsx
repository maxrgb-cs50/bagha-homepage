import React from 'react';
export function Radio({name,options=[],value,defaultValue,onChange,direction='column',style}){
  const [v,setV]=React.useState(defaultValue);const cur=value??v;
  return <div role="radiogroup" style={{display:'flex',flexDirection:direction,gap:direction==='row'?24:12,...style}}>
    {options.map(o=>{const val=typeof o==='string'?o:o.value;const lab=typeof o==='string'?o:o.label;const on=cur===val;
      return <label key={val} onClick={()=>{setV(val);onChange&&onChange(val);}} style={{display:'inline-flex',alignItems:'center',gap:12,cursor:'pointer',fontSize:15,color:'var(--text-body)'}}>
        <span role="radio" aria-checked={on} style={{width:20,height:20,boxSizing:'border-box',borderRadius:'50%',border:'1px solid '+(on?'var(--ink-900)':'var(--border-default)'),background:'var(--surface-card)',display:'grid',placeItems:'center'}}>{on&&<span style={{width:10,height:10,borderRadius:'50%',background:'var(--ink-900)'}}/>}</span>{lab}</label>;})}
  </div>;
}