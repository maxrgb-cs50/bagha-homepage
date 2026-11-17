import React from 'react';
export function NavLink({children,active,inverse,href='#',onClick,style}){
  const [h,setH]=React.useState(false);const lit=active||h;
  return <a href={href} onClick={onClick} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{position:'relative',display:'inline-block',padding:'6px 0',fontFamily:'var(--font-body)',fontSize:15,fontWeight:500,letterSpacing:'.02em',textDecoration:'none',color:inverse?'var(--paper-50)':(lit?'var(--text-strong)':'var(--text-muted)'),transition:'color var(--dur-fast)',...style}}>{children}
    <span style={{position:'absolute',left:0,right:0,bottom:0,height:1,background:'var(--sand-500)',transform:lit?'scaleX(1)':'scaleX(0)',transformOrigin:'left',transition:'transform var(--dur-base) var(--ease-standard)'}}/></a>;
}