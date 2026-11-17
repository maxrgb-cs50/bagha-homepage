import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Checkbox({label,checked,defaultChecked,onChange,disabled,style}){
  const [c,setC]=React.useState(!!defaultChecked);const on=checked??c;
  const t=()=>{if(disabled)return;setC(!on);onChange&&onChange(!on);};
  return <label style={{display:'inline-flex',alignItems:'flex-start',gap:12,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,fontSize:15,lineHeight:1.5,color:'var(--text-body)',...style}}>
    <span role="checkbox" aria-checked={on} tabIndex={0} onClick={t} onKeyDown={e=>e.key===' '&&(e.preventDefault(),t())} style={{flex:'none',width:20,height:20,marginTop:2,boxSizing:'border-box',display:'grid',placeItems:'center',borderRadius:'var(--radius-1)',border:'1px solid '+(on?'var(--ink-900)':'var(--border-default)'),background:on?'var(--ink-900)':'var(--surface-card)',color:'var(--paper-50)',transition:'background var(--dur-fast)'}}>{on&&<Icon name="check" size={14}/>}</span>
    {label&&<span onClick={t}>{label}</span>}
  </label>;
}