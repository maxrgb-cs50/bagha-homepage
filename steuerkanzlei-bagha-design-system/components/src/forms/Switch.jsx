import React from 'react';
export function Switch({label,checked,defaultChecked,onChange,disabled,style}){
  const [c,setC]=React.useState(!!defaultChecked);const on=checked??c;
  const t=()=>{if(disabled)return;setC(!on);onChange&&onChange(!on);};
  return <label style={{display:'inline-flex',alignItems:'center',gap:12,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.5:1,fontSize:15,color:'var(--text-body)',...style}}>
    <span role="switch" aria-checked={on} tabIndex={0} onClick={t} style={{position:'relative',width:40,height:22,borderRadius:11,background:on?'var(--navy-700)':'var(--ink-300)',transition:'background var(--dur-base) var(--ease-standard)'}}><span style={{position:'absolute',top:3,left:on?21:3,width:16,height:16,borderRadius:8,background:'var(--paper-50)',boxShadow:'var(--shadow-1)',transition:'left var(--dur-base) var(--ease-standard)'}}/></span>
    {label&&<span onClick={t}>{label}</span>}
  </label>;
}