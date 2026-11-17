import React from 'react';
const T={neutral:['var(--paper-200)','var(--ink-700)'],accent:['var(--sand-100)','var(--sand-600)'],navy:['var(--navy-100)','var(--navy-700)'],success:['var(--status-success-bg)','var(--status-success)'],warning:['var(--status-warning-bg)','var(--status-warning)'],error:['var(--status-error-bg)','var(--status-error)']};
export function Badge({tone='neutral',children,dot,style}){
  const [bg,fg]=T[tone]||T.neutral;
  return <span style={{display:'inline-flex',alignItems:'center',gap:6,height:24,padding:'0 10px',borderRadius:'var(--radius-pill)',background:bg,color:fg,fontFamily:'var(--font-body)',fontSize:12,fontWeight:600,letterSpacing:'.04em',lineHeight:1,whiteSpace:'nowrap',...style}}>{dot&&<span style={{width:6,height:6,borderRadius:3,background:fg}}/>}{children}</span>;
}