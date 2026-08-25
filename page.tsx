'use client';
import {useEffect,useState} from 'react';
import {createClient} from '@supabase/supabase-js';
const supabase=createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);
export default function Admin(){
 const [items,setItems]=useState<any[]>([]);const [readers,setReaders]=useState<any[]>([]);
 async function load(){const a=await supabase.from('fortune_requests').select('*,fortune_readers(name)').order('created_at',{ascending:false});setItems(a.data||[]);const b=await supabase.from('fortune_readers').select('*').order('name');setReaders(b.data||[])}
 useEffect(()=>{load()},[]);
 async function assign(id:string){const r=readers[Math.floor(Math.random()*readers.length)];await supabase.from('fortune_requests').update({reader_id:r.id,status:'assigned'}).eq('id',id);load()}
 async function complete(id:string){await supabase.from('fortune_requests').update({status:'completed',completed_at:new Date().toISOString()}).eq('id',id);load()}
 return <main className="admin"><header><div className="brand">🪄 Habibi Yönetim</div><a href="/">Uygulamaya Dön</a></header><section><h1>Fal Havuzu</h1><p>Gelen tüm talepler, yorumcu atama ve tamamlanma takibi.</p>{items.map(x=><article className="request" key={x.id}><b>{x.type}</b> · {x.status}<p>{x.question||'Soru yok'}</p><small>Yorumcu: {x.fortune_readers?.name||'Atanmadı'}</small><div>{x.status!=='completed'&&<><button onClick={()=>assign(x.id)}>Yorumcu Ata</button><button onClick={()=>complete(x.id)}>Tamamla</button></>}</div></article>)}</section><style>{`.admin{min-height:100vh;background:#fffdf8;font-family:Arial}.admin header{position:static}.admin section{max-width:1000px;margin:auto;padding:35px 20px}.request{background:#fff;border:1px solid #eee3cb;border-radius:18px;padding:18px;margin:10px 0}.request button{margin:12px 8px 0 0;border:0;background:#f3bd2b;color:#fff;padding:10px 14px;border-radius:10px;font-weight:800}`}</style></main>
}