import React from 'react';
export function Card({variant='outline',interactive,padding=32,onClick,children,style}){
  const [h,setH]=React.useState(false);
  const V={outline:{bg:'var(--surface-card)',bd:'1px solid var(--border-hairline)'},muted:{bg:'var(--surface-muted)',bd:'1px solid transparent'},inverse:{bg:'var(--bg-inverse)',bd:'1px solid transparent',fg:'var(--text-inverse)'},plain:{bg:'transparent',bd:'none'}}[variant];
  return <div onClick={onClick} onMouseEnter={()=>interactive&&setH(true)} onMouseLeave={()=>setH(false)}
    style={{background:V.bg,border:V.bd,color:V.fg,borderRadius:'var(--radius-card)',padding,boxSizing:'border-box',cursor:interactive?'pointer':undefined,
      boxShadow:h?'var(--shadow-2)':'none',transform:h?'translateY(-2px)':'none',borderColor:h&&variant==='outline'?'var(--ink-300)':undefined,transition:'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard),border-color var(--dur-base)',...style}}>{children}</div>;
}