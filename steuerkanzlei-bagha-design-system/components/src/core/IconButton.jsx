import React from 'react';
import {Icon} from './Icon.jsx';
export function IconButton({icon,label,variant='ghost',size=40,onClick,disabled,style}){
  const [h,setH]=React.useState(false);
  const V={ghost:{bg:h?'var(--paper-200)':'transparent',fg:'var(--text-strong)',bd:'transparent'},outline:{bg:h?'var(--paper-200)':'transparent',fg:'var(--text-strong)',bd:'var(--border-default)'},solid:{bg:h?'var(--action-primary-hover)':'var(--action-primary)',fg:'var(--paper-50)',bd:'transparent'},inverse:{bg:h?'rgba(247,245,241,.1)':'transparent',fg:'var(--paper-50)',bd:'var(--border-inverse)'}}[variant];
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
    style={{width:size,height:size,display:'inline-grid',placeItems:'center',padding:0,background:V.bg,color:V.fg,border:'1px solid '+V.bd,borderRadius:'var(--radius-control)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,transition:'background var(--dur-fast)',...style}}>
    <Icon name={icon} size={Math.round(size*0.45)}/></button>;
}