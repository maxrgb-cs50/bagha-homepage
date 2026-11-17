import React from 'react';
export function SectionHeading({eyebrow,title,lead,align='left',inverse,as='h2',style}){
  const H=as;const c=align==='center';
  return <div style={{display:'flex',flexDirection:'column',gap:16,alignItems:c?'center':'flex-start',textAlign:align,maxWidth:c?720:640,margin:c?'0 auto':undefined,...style}}>
    {eyebrow&&<div style={{display:'flex',alignItems:'center',gap:12}}><span style={{width:40,height:1,background:'var(--sand-500)'}}/><span style={{fontFamily:'var(--font-body)',fontSize:'var(--fs-eyebrow)',letterSpacing:'var(--ls-eyebrow)',textTransform:'uppercase',fontWeight:600,color:inverse?'var(--sand-400)':'var(--text-accent)'}}>{eyebrow}</span>{c&&<span style={{width:40,height:1,background:'var(--sand-500)'}}/>}</div>}
    <H style={{fontFamily:'var(--font-display)',fontWeight:500,fontSize:as==='h1'?'var(--fs-display-l)':'var(--fs-h1)',lineHeight:as==='h1'?'var(--lh-display-l)':'var(--lh-h1)',color:inverse?'var(--text-inverse)':'var(--text-strong)',margin:0,textWrap:'balance'}}>{title}</H>
    {lead&&<p style={{margin:0,fontSize:'var(--fs-lead)',lineHeight:'var(--lh-lead)',color:inverse?'var(--text-inverse-muted)':'var(--text-muted)',textWrap:'pretty'}}>{lead}</p>}
  </div>;
}