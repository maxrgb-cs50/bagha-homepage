import React from 'react';
import {Icon} from './Icon.jsx';
const SIZES={sm:{h:36,px:16,fs:14,ic:16},md:{h:46,px:22,fs:15,ic:18},lg:{h:54,px:28,fs:16,ic:18}};
export function Button({variant='primary',size='md',iconLeft,iconRight,disabled,fullWidth,href,onClick,children,type='button',style}){
  const [h,setH]=React.useState(false);const [p,setP]=React.useState(false);
  const s=SIZES[size]||SIZES.md;
  const V={
    primary:{bg:h?'var(--action-primary-hover)':'var(--action-primary)',fg:'var(--action-on-primary)',bd:'transparent'},
    secondary:{bg:h?'var(--action-secondary-hover)':'transparent',fg:'var(--text-strong)',bd:'var(--border-strong)'},
    ghost:{bg:'transparent',fg:h?'var(--text-strong)':'var(--text-body)',bd:'transparent',ul:true},
    inverse:{bg:h?'var(--paper-200)':'var(--paper-50)',fg:'var(--ink-900)',bd:'transparent'},
    'inverse-outline':{bg:h?'rgba(247,245,241,.08)':'transparent',fg:'var(--paper-50)',bd:'rgba(247,245,241,.6)'},
  }[variant];
  const st={display:fullWidth?'flex':'inline-flex',width:fullWidth?'100%':undefined,alignItems:'center',justifyContent:'center',gap:10,height:s.h,padding:variant==='ghost'?'0 4px':'0 '+s.px+'px',boxSizing:'border-box',
    fontFamily:'var(--font-body)',fontSize:s.fs,fontWeight:500,letterSpacing:'.02em',lineHeight:1,whiteSpace:'nowrap',
    background:V.bg,color:V.fg,border:'1px solid '+V.bd,borderRadius:'var(--radius-control)',cursor:disabled?'not-allowed':'pointer',opacity:disabled?.4:1,
    textDecoration:V.ul?'underline':'none',textUnderlineOffset:5,textDecorationThickness:1,textDecorationColor:V.ul?(h?'var(--ink-900)':'var(--sand-500)'):undefined,
    transform:p&&!disabled?'translateY(1px)':'none',transition:'background var(--dur-fast) var(--ease-standard),color var(--dur-fast),transform var(--dur-fast)',...style};
  const ev={onMouseEnter:()=>!disabled&&setH(true),onMouseLeave:()=>{setH(false);setP(false)},onMouseDown:()=>setP(true),onMouseUp:()=>setP(false),onClick:disabled?undefined:onClick,style:st};
  const inner=<>{iconLeft&&<Icon name={iconLeft} size={s.ic}/>}{children}{iconRight&&<Icon name={iconRight} size={s.ic} style={{transform:h&&iconRight==='arrow-right'?'translateX(3px)':'none',transition:'transform var(--dur-base) var(--ease-standard)'}}/>}</>;
  return href&&!disabled?<a href={href} {...ev}>{inner}</a>:<button type={type} disabled={disabled} {...ev}>{inner}</button>;
}