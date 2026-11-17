import React from 'react';
import {IconButton} from '../core/IconButton.jsx';
export function Dialog({open,title,onClose,children,footer,width=520,inline}){
  if(!open)return null;
  const box=<div role="dialog" aria-modal="true" onClick={e=>e.stopPropagation()} style={{width:'100%',maxWidth:width,background:'var(--surface-card)',borderRadius:'var(--radius-card)',boxShadow:'var(--shadow-3)',display:'flex',flexDirection:'column'}}>
    <div style={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',gap:16,padding:'28px 28px 0'}}><h3 style={{margin:0,fontFamily:'var(--font-display)',fontWeight:500,fontSize:'var(--fs-h3)',lineHeight:'var(--lh-h3)',color:'var(--text-strong)'}}>{title}</h3>{onClose&&<IconButton icon="x" label="Schließen" size={36} onClick={onClose}/>}</div>
    <div style={{padding:'16px 28px 28px',fontSize:16,lineHeight:1.6,color:'var(--text-body)'}}>{children}</div>
    {footer&&<div style={{display:'flex',justifyContent:'flex-end',gap:12,padding:'16px 28px',borderTop:'1px solid var(--border-hairline)'}}>{footer}</div>}
  </div>;
  if(inline)return box;
  return <div onClick={onClose} style={{position:'fixed',inset:0,zIndex:100,background:'rgba(20,27,39,.48)',backdropFilter:'blur(2px)',display:'grid',placeItems:'center',padding:24}}>{box}</div>;
}