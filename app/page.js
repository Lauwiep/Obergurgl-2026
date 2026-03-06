"use client";

import { useMemo, useState } from "react";

const data = {
  title: "Obergurgl 2026 🏂🎿🍻🥂🎉",
  subtitle: "Alle praktische info op één plek – deel deze link met de groep.",
  highlights: [
    { label: "Verblijf", value: "The Crystal VAYA Unique" },
    { label: "Aankomst", value: "wo 25 maart (15:00–20:00)" },
    { label: "Vertrek", value: "ma 30 maart (uit. 10:00)" }
  ],
  links: [
    {
      label: "📍 Google Maps hotel",
      href: "https://www.google.com/maps/place/The+Crystal+VAYA+Unique/@46.875188,11.0295681,17z/data=!4m9!3m8!1s0x4782cc7d1988730f:0xa5c6edb46d84bb2b!5m2!4m1!1i2!8m2!3d46.8751844!4d11.032143!16s%2Fg%2F1td9zk0r?entry=ttu"
    },
    { label: "🎿 Skigebied info", href: "https://www.obergurgl.com/" }
    // Later: { label: "💬 WhatsApp groep", href: "https://chat.whatsapp.com/..." }
  ],
  stay: {
    name: "The Crystal VAYA Unique",
    address: "Gurglerstraße 90, Obergurgl",
    arrivalDay: "Woensdag 25 maart",
    checkin: "Vanaf 15:00, uiterlijk 20:00 (avondeten)",
    departDay: "Maandag 30 maart",
    checkout: "Uiterlijk 10:00",
    notes: [
      "Ontbijt en avondeten is inclusief en in het hotel.",
      "Avondeten: woensdag t/m zondag.",
      "Ontbijt: donderdag t/m maandag."
    ]
  },
  travel: {
    distance: "913 kilometer",
    vignette: "Een vignet is aan te raden (regel een vignet per auto).",
    parking: "Parkeren kan bij het hotel incl. laadmogelijkheid.",
    tips: [
      "Regel een vignet per auto.",
      "Skiverhuur kan je op de dag van aankomst regelen.",
      "Vergeet je badkleding niet voor de zwembaden, daar is dit verplicht."
    ]
  },
  ski: {
    skipass: "Skipas voor 4 dagen: donderdag t/m zondag."
  },
  packing: {
    title: "Paklijst (klik om af te vinken)",
    items: [
      "Paspoort/ID + rijbewijs",
      "Zorgpas + reisverzekering",
      "Skikleding (jas/broek, thermo, handschoenen, muts)",
      "Skihelm + skibril",
      "Skispullen – snowboard en/of ski’s incl. schoenen",
      "Zonnebrand + lippenbalsem",
      "Sneeuwkettingen (indien nodig) / ijskrabber",
      "Opladers + powerbank",
      "Badkleding (voor wellness, verplicht in het zwembad)",
      "Medicatie / pleisters",
      "Cash/creditcard"
    ]
  }
};

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ padding: "18px 18px", maxWidth: 980, margin: "0 auto" }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 22, fontWeight: 800, color: "#0B2D5C" }}>{title}</h2>
      <div
       style={{
  background: "rgba(255,244,230,0.92)",           // crème kaart op oranje
  border: "1px solid rgba(11,45,92,0.18)",
  borderRadius: 18,
  padding: 18,
  boxShadow: "0 12px 28px rgba(11,45,92,0.12)"
}}
      >
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  const [checked, setChecked] = useState({});
  const packingItems = useMemo(() => data.packing?.items ?? [], []);

  const toggle = (item) => setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  return (
   <main
  style={{
    minHeight: "100vh",
    background: "transparent" // layout.js regelt het oranje
  }}
>
      <header style={{ padding: "28px 18px 10px", maxWidth: 980, margin: "0 auto" }}>
       <img
  src="/Logo%20Obergurgl.png"
  alt="Logo Obergurgl"
  style={{
    width: "220px",
    display: "block",
    margin: "0 auto 16px",
    borderRadius: 14,
    boxShadow: "0 10px 30px rgba(0,0,0,0.18)"
  }}
/>
        {/* HEADER CARD */}
        <div
          style={{
            background: "linear-gradient(120deg, rgba(11,45,92,0.92), rgba(11,45,92,0.76))",
            borderRadius: 18,
            color: "#FFF4E6",
            padding: 20,
            border: "1px solid rgba(255,255,255,0.18)"
          }}
        >
          <h1 style={{ margin: 0, fontSize: 32 }}>{data.title}</h1>
          <p style={{ margin: "8px 0 0", opacity: 0.95 }}>{data.subtitle}</p>

          <div
            style={{
              display: "grid",
              gap: 10,
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              marginTop: 16
            }}
          >
            {(data.highlights ?? []).map((h) => (
              <div key={h.label} style={{ background: "rgba(255,255,255,0.14)", borderRadius: 14, padding: 12 }}>
                <div style={{ fontSize: 12, opacity: 0.9 }}>{h.label}</div>
                <div style={{ fontSize: 16, fontWeight: 700 }}>{h.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            {(data.links ?? []).map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: "#FFF4E6",
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.35)",
                  padding: "10px 12px",
                  borderRadius: 999
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <Section id="verblijf" title="🏨 Verblijfinformatie">
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li><strong>{data.stay.name}</strong></li>
          <li>{data.stay.address}</li>
          <li><strong>Aankomst:</strong> {data.stay.arrivalDay}</li>
          <li><strong>Inchecktijd:</strong> {data.stay.checkin}</li>
          <li><strong>Vertrek:</strong> {data.stay.departDay}</li>
          <li><strong>Uitchecktijd:</strong> {data.stay.checkout}</li>
        </ul>

        <div style={{ marginTop: 12 }}>
          <strong>Overig</strong>
          <ul style={{ margin: "8px 0 0", paddingLeft: 18, lineHeight: 1.7 }}>
            {(data.stay?.notes ?? []).map((n) => <li key={n}>{n}</li>)}
          </ul>
        </div>
      </Section>

      <Section id="route" title="🚗 Routeinformatie">
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          <li><strong>Afstand:</strong> {data.travel.distance}</li>
          <li><strong>Vignet:</strong> {data.travel.vignette}</li>
          <li><strong>Parkeren:</strong> {data.travel.parking}</li>
        </ul>
      </Section>

      <Section id="skipas" title="🎟️ Skipas">
        <p style={{ margin: 0, lineHeight: 1.7 }}>{data.ski.skipass}</p>
      </Section>

      <Section id="tips" title="💡 Tips">
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7 }}>
          {(data.travel?.tips ?? []).map((t) => <li key={t}>{t}</li>)}
        </ul>
      </Section>

      <Section id="paklijst" title={`✅ ${data.packing.title}`}>
        <div style={{ display: "grid", gap: 10 }}>
          {packingItems.map((item) => (
            <label
              key={item}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                padding: 12,
                border: "1px solid rgba(11,45,92,0.12)",
                borderRadius: 12,
                background: checked[item] ? "rgba(11,45,92,0.08)" : "white"
              }}
            >
              <input type="checkbox" checked={!!checked[item]} onChange={() => toggle(item)} />
              <span style={{ textDecoration: checked[item] ? "line-through" : "none" }}>{item}</span>
            </label>
          ))}
        </div>
      </Section>

      <footer style={{ padding: "18px 18px 40px", maxWidth: 980, margin: "0 auto", color: "#0B2D5C" }}>
        <small style={{ opacity: 0.9 }}>
          Tip: pas de teksten bovenin aan in <code>const data</code> en commit — Vercel update automatisch.
        </small>
      </footer>
    </main>
  );
}
