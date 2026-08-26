'use client';

import React from 'react';

import Image from 'next/image';
import { useState } from 'react';

const readers = [
  ['Lal','🌙',4.9,128],['Mira','✨',4.8,214],['Nehir','🔮',4.9,176],['Derin','🌸',4.7,142],
  ['Arya','🪬',4.9,305],['Selin','⭐',4.8,191],['Lina','🌙',4.9,267],['Derya','✨',4.7,119],
  ['Maya','🔮',4.8,228],['Ece','🌸',4.9,351],['İrem','🪬',4.8,163],['Nisan','⭐',4.7,137],
  ['Alya','🌙',4.9,286],['Sena','✨',4.8,204],['Bade','🔮',4.9,173],['Defne','🌸',4.8,246],
  ['Asya','🪬',4.9,318],['Melis','⭐',4.7,155],['Naz','🌙',4.8,231],['Ela','✨',4.9,194]
];

const types = [
  ['☕','Kahve','Fincan fotoğrafını gönder'],
  ['❤️','Katina','Aşk ve ilişki açılımı'],
  ['🔮','Tarot','Kartların mesajını keşfet'],
  ['🃏','İskambil','Kartlarla yolunu gör'],
  ['🌙','Rüya Yorumu','Rüyandaki sembolleri anlat'],
  ['🖐️','El Falı','El çizgilerini keşfet'],
  ['🔢','Numeroloji','Sayıların enerjisini öğren'],
  ['👤','Yüz Falı','Yüz hatlarının sembolleri'],
  ['🧭','Yaşam Koçu','Hedeflerine özel rehberlik'],
  ['💕','İlişki Danışmanı','İlişkine farklı bir açıdan bak'],
];

export default function Home() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return (
      <main className="launch">
        <div className="launchImageWrap">
          <Image src="/habibi-giris.jpg" alt="Habibi giriş ekranı" width={710} height={1000} priority />
          <button className="launchButton" aria-label="Falına Başla" onClick={() => setEntered(true)} />
        </div>
      </main>
    );
  }

  return (
    <main className="app">
      <header className="appHeader">
        <div className="brand">Habibi</div>
        <div className="tagline">Sihirli lamba rehberin ✨ · Falını seç, enerjini keşfet</div>
      </header>

      <section className="welcome">
        <Image src="/logo.png" alt="Habibi" width={130} height={130} />
        <h1>Kalbinin merak ettiklerini<br/>Habibi&apos;ye bırak.</h1>
        <p>Sihirli lambanın ışığında falını seç, enerjini keşfet ve sana özel yorumunu al.</p>
        <button onClick={() => document.getElementById('fallar')?.scrollIntoView({behavior:'smooth'})}>✨ Falına Başla</button>
      </section>

      <section className="credits">
        <span>💎 Kredi Bakiyen</span><strong>400</strong>
      </section>

      <section id="fallar">
        <div className="sectionTitle"><h2>Fal Çeşitleri</h2></div>
        <div className="types">
          {types.map(([icon,title,desc]) => (
            <article className="typeCard" key={title}>
              <div className="typeIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="yorumcular">
        <div className="sectionTitle"><h2>✨ Popüler Yorumcular</h2></div>
        <div className="notice">🪔 Habibi&apos;de seçtiğin fal talebin Fal Havuzu&apos;na düşer; yönetim ekranından yorumcu ataması ve yorum süreci takip edilir.</div>
        <div className="readers">
          {readers.map(([name,avatar,rating,count]) => (
            <article className="reader" key={name}>
              <div className="avatar">{avatar}</div>
              <div className="readerInfo">
                <h3>{name}</h3>
                <p>⭐ {rating} · {count} yorum</p>
                <small>☕ Kahve · ❤️ Aşk · 🃏 Tarot</small>
              </div>
              <button>Fal Baktır</button>
            </article>
          ))}
        </div>
      </section>

      <nav className="bottomNav">
        <a href="#">⌂<span>Ana Sayfa</span></a>
        <a href="#fallar">☕<span>Fal Gönder</span></a>
        <a href="#kredi">💎<span>Kredi</span></a>
        <a href="#profil">👤<span>Profil</span></a>
        <a href="#yorumcular">🪄<span>Yönetim</span></a>
      </nav>
    </main>
  );
}
