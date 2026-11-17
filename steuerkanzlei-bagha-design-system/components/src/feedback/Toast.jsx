import React from 'react';
import {Icon} from '../core/Icon.jsx';
export function Toast({tone='success',children,onClose,style}){
  const ic={success:'check',info:'info',error:'circle-alert'}[tone]||'info';
  return <div role="status" style={{display:'inline-flex',alignItems:'center',gap:12,padding:'12px 16px',background:'var(--ink-900)',color:'var(--paper-50)',borderRadius:'var(--radius-card)',boxShadow:'var(--shadow-3)',fontSize:15,...style}}>
    <Icon name={ic} size={18} color={tone==='error'?'#E9A497':'var(--sand-400)'}/><span>{children}</span>
    {onClose&&<button onClick={onClose} aria-label="Schließen" style={{background:'none',border:0,color:'var(--ink-400)',cursor:'pointer',padding:0,display:'grid'}}><Icon name="x" size={16}/></button>}
  </div>;
}