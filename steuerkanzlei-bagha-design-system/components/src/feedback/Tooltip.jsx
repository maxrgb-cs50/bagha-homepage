import React from 'react';
export function Tooltip({content,children,placement='top',open}){
  const [h,setH]=React.useState(false);const show=open??h;
  const pos=placement==='bottom'?{top:'calc(100% + 8px)'}:{bottom:'calc(100% + 8px)'};
  return <span onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'inline-flex'}}>{children}
    {show&&<span role="tooltip" style={{position:'absolute',left:'50%',transform:'translateX(-50%)',...pos,background:'var(--ink-900)',color:'var(--paper-50)',fontSize:13,lineHeight:1.4,padding:'6px 10px',borderRadius:'var(--radius-1)',whiteSpace:'nowrap',zIndex:50,pointerEvents:'none'}}>{content}</span>}
  </span>;
}