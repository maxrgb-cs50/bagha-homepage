import React from 'react';
import {Card} from './Card.jsx';
import {Icon} from './Icon.jsx';
export function ServiceCard({icon,title,description,linkLabel='Mehr erfahren',onClick,style}){
  return <Card interactive onClick={onClick} style={{display:'flex',flexDirection:'column',gap:16,height:'100%',...style}}>
    {icon&&<span style={{width:48,height:48,display:'grid',placeItems:'center',border:'1px solid var(--border-accent)',borderRadius:'50%',color:'var(--navy-700)'}}><Icon name={icon} size={22}/></span>}
    <h3 style={{fontFamily:'var(--font-display)',fontSize:'var(--fs-h3)',lineHeight:'var(--lh-h3)',fontWeight:500,margin:0,color:'var(--text-strong)'}}>{title}</h3>
    <p style={{margin:0,fontSize:'var(--fs-small)',lineHeight:'var(--lh-small)',color:'var(--text-muted)',flex:1}}>{description}</p>
    <span style={{display:'inline-flex',alignItems:'center',gap:8,fontSize:14,fontWeight:500,color:'var(--text-strong)',letterSpacing:'.02em'}}>{linkLabel}<Icon name="arrow-right" size={16}/></span>
  </Card>;
}