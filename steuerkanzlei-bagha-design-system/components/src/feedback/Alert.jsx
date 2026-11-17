import React from 'react';
import {Icon} from '../core/Icon.jsx';
const T={info:['var(--status-info-bg)','var(--status-info)','info'],success:['var(--status-success-bg)','var(--status-success)','circle-check'],warning:['var(--status-warning-bg)','var(--status-warning)','triangle-alert'],error:['var(--status-error-bg)','var(--status-error)','circle-alert']};
export function Alert({tone='info',title,children,style}){
  const [bg,fg,ic]=T[tone]||T.info;
  return <div role="status" style={{display:'flex',gap:14,padding:'16px 20px',background:bg,borderRadius:'var(--radius-card)',color:'var(--text-body)',fontSize:15,lineHeight:1.5,...style}}>
    <Icon name={ic} size={20} color={fg} style={{marginTop:1}}/>
    <div style={{display:'flex',flexDirection:'column',gap:2}}>{title&&<strong style={{fontWeight:600,color:fg}}>{title}</strong>}{children&&<span>{children}</span>}</div>
  </div>;
}