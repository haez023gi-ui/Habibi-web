'use client';
import Image from 'next/image';
import Link from 'next/link';

const readers = [
  ['Lal','🌙',4.9,128],['Mira','✨',4.8,214],['Nehir','🔮',4.9,176],['Derin','🌸',4.7,142],
  ['Arya','🪬',4.9,305],['Selin','⭐',4.8,191],['Lina','🌙',4.9,267],['Derya','✨',4.7,119],
  ['Maya','🔮',4.8,228],['Ece','🌸',4.9,351],['İrem','🪬',4.8,163],['Nisan','⭐',4.7,137],
  ['Alya','🌙',4.9,286],['Sena','✨',4.8,204],['Bade','🔮',4.9,173],['Defne','🌸',4.8,246],
  ['Asya','🪬',4.9,318],['Melis','⭐',4.7,155],['Naz','🌙',4.8,231],['Ela','✨',4.9,194]
];

export default function Home(){
 return <main>
  <header><div className="brand"><Image src="/logo.png" alt="Habibi" width={58} height={58}/><span>Habibi</span></div>
   <nav><Link href="#fallar">Fallar</Link><Link href="#yorumcular">Yorumcular</Link><Link href="/admin">Yönetim</Link><button>Giriş Yap</button></nav>
  </header>
  <section className="hero"><div><p className="eyebrow">HABİBİ FAL & YORUM</p><h1>Merak ettiğin ne varsa,<br/><i>Habibi'ye bırak.</i> ✨</h1><p>Kahve falı, tarot, chat ve sesli fal deneyimini tek yerde keşfet.</p><div className="actions"><a href="#fallar">Falıma Bak</a><a className="ghost" href="#yorumcular">Yorumcuları Keşfet</a></div></div><Image className="heroLogo" src="/logo.png" alt="" width={260} height={260}/></section>
  <section id="fallar"><div className="title"><h2>Falını seç</h2><span>Habibi'de keşfet</span></div>
   <div className="services">
    {[
      ['☕','Kahve Falı','Fincan fotoğrafını gönder'],
      ['🃏','Tarot','Aşk, kariyer ve genel açılım'],
      ['💬','Chat Fal','Yorumcuyla yazış'],
      ['🎙️','Sesli Fal','Sesli fal deneyimi']
    ].map(x=><article className="service" key={x[1]}><div className="icon">{x[0]}</div><h3>{x[1]}</h3><p>{x[2]}</p><button>Fal Baktır →</button></article>)}
   </div>
  </section>
  <section id="yorumcular"><div className="title"><h2>20 Yorumcu</h2><span>Gerçek fal deneyimi için</span></div>
   <div className="readers">{readers.map(r=><article className="reader" key={r[0]}><div className="avatar">{r[1]}</div><div className="ri"><h3>{r[0]}</h3><p>⭐ {r[2]} · {r[3]} yorum</p><small>☕ Kahve · ❤️ Aşk · 🃏 Tarot</small></div><button>Fal Baktır</button></article>)}</div>
  </section>
  <section className="cta"><h2>Falın hazır mı?</h2><p>Habibi'de kendi hikâyenin yorumunu keşfet.</p><a href="#fallar">Hemen Başla ✦</a></section>
  <footer><div className="brand"><Image src="/logo.png" alt="Habibi" width={42} height={42}/><span>Habibi</span></div><p>© 2026 Habibi. Tüm hakları saklıdır.</p></footer>
 </main>
}