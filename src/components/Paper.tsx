import {useEffect,useMemo,useRef,useState} from 'react';
import type {CSSProperties,ReactNode} from 'react';
import './Paper.css';
type Titik={x:number;y:number};
function rng(seed:number){let s=seed>>>0;return ()=>{s=(Math.imul(s,1664525)+1013904223)>>>0;return s/4294967296;};}
function jalur(lebar:number,seed:number,offset=0){const acak=rng(seed);let titik:Titik[]=[{x:0,y:34+offset},{x:lebar,y:34+offset}];let kasar=40;
 while(titik.some((t,i)=>i>0&&t.x-titik[i-1].x>4)){
  const baru:Titik[]=[titik[0]];
  for(let i=0;i<titik.length-1;i++){const a=titik[i],b=titik[i+1];baru.push({x:(a.x+b.x)/2,y:Math.max(12,Math.min(53,(a.y+b.y)/2+(acak()*2-1)*kasar))},b);}
  titik=baru;kasar*=.68;
 }
 const hasil:Titik[]=[];for(let x=0;x<=lebar;x+=4){let i=Math.max(0,titik.findIndex(t=>t.x>=x)-1);if(i>=titik.length-1)i=titik.length-2;const a=titik[i],b=titik[i+1];hasil.push({x,y:a.y+(b.y-a.y)*(x-a.x)/(b.x-a.x||1)});}hasil.push({x:lebar,y:titik[titik.length-1].y});return hasil;
}
export function Paper({id,children,warna,above='#f4efe6',seed=28,className='',style}:{id?:string;children:ReactNode;warna:string;above?:string;seed?:number;className?:string;style?:CSSProperties}){
 const root=useRef<HTMLElement>(null);const [lebar,set_lebar]=useState(1200);const [mulai,set_mulai]=useState(false);
 useEffect(()=>{if(!root.current)return;const observer=new ResizeObserver(entries=>set_lebar(Math.max(1,Math.round(entries[0].contentRect.width))));observer.observe(root.current);return ()=>observer.disconnect();},[]);
 useEffect(()=>{if(!root.current)return;const reduce=matchMedia('(prefers-reduced-motion: reduce)');if(reduce.matches){set_mulai(true);return;}const observer=new IntersectionObserver(entries=>{if(entries[0]?.isIntersecting){set_mulai(true);observer.disconnect();}},{threshold:.07});observer.observe(root.current);return ()=>observer.disconnect();},[]);
 const garis=useMemo(()=>jalur(lebar,seed),[lebar,seed]);const path=garis.map((t,i)=>`${i?'L':'M'}${t.x.toFixed(1)} ${t.y.toFixed(1)}`).join(' ')+` L${lebar} 68 L0 68 Z`;
 const inti=garis.map((t,i)=>`${i?'L':'M'}${t.x.toFixed(1)} ${(t.y-3).toFixed(1)}`).join(' ')+` L${lebar} 68 L0 68 Z`;
 const acak=useMemo(()=>rng(seed+91),[seed]);const serat=useMemo(()=>garis.filter((_,i)=>i%3===0).map(t=>({x:t.x,y:t.y,len:1.5+acak()*4,dx:(acak()-.5)*4})),[garis,acak]);
 return <section id={id} ref={root} className={`paper-section ${className}`} style={{...style,'--paper':warna,'--above':above} as CSSProperties}>
  <div className="paper-edge" aria-hidden="true"><svg viewBox={`0 0 ${lebar} 68`} preserveAspectRatio="none" width="100%" height="68"><path d={inti} fill="#fff7e7" opacity=".8"/><path d={path} fill={warna}/>{serat.map((f,i)=><path key={i} d={`M${f.x} ${f.y} l${f.dx} ${-f.len}`} stroke="#fff7e7" strokeWidth=".8" opacity=".7" />)}</svg><div className={`paper-strip ${mulai?'paper-strip--gone':''}`}/>{mulai&&<div className="paper-flap"/>}</div>
  <div className="paper-body">{children}</div>
 </section>;
}
export function Note({children,kind='lime',className='',hasTape=true,tapePosition='top'}:{children:ReactNode;kind?:'lime'|'pink'|'cream'|'blue';className?:string;hasTape?:boolean;tapePosition?:'top'|'top-left'|'top-right'|'none'}){return <div className={`note note--${kind} ${className}`}>{hasTape && <span className={`tape tape--${tapePosition}`} aria-hidden="true"/>}<div className="note-inner">{children}</div></div>}
export function Polaroid({src,alt,caption='',className=''}:{src:string;alt:string;caption?:string;className?:string}){return <figure className={`polaroid ${className}`}><img src={src} alt={alt} /><figcaption>{caption}</figcaption><span className="tape" aria-hidden="true"/></figure>}
