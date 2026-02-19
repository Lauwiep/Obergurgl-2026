"use client";

import { useMemo, useState } from "react";

const data = {
  title: "Wintersport 2026 🏂🎿🍻🥂🎉 ",
  subtitle: "Alle praktische info op één plek – deel deze link met de groep.",
  highlights: [
    { label: "Bestemming", value: "Obergurgl 🏔️ " },
    { label: "Data", value: "woe 25 maart – ma 30 maart" },
    { label: "Groepsapp", value: " Zie WhatsApp voor de laatste info" }
  ],
  links: [
    { label: "📍 Google Maps accommodatie", href: "https://www.google.com/maps/place/The+Crystal+VAYA+Unique/@46.875188,11.0295681,17z/data=!4m9!3m8!1s0x4782cc7d1988730f:0xa5c6edb46d84bb2b!5m2!4m1!1i2!8m2!3d46.8751844!4d11.032143!16s%2Fg%2F1td9zk0r?entry=ttu&g_ep=EgoyMDI2MDIxNy4wIKXMDSoASAFQAw%3D%3D" },
    { label: "🎿 Skigebied info", href: "https://www.obergurgl.com/" }
  ],
  travel: {
    arrivalTime: "15:00-20:00",
    notes: [
      "Check winterbanden/sneeuwkettingen (verplicht bij omstandigheden).",
      "Vignet: Oostenrijk vereist (koop online of bij grens)."
    ]
  },
  stay: {
    name: "Hotel / Appartement (The Crystal VAYA)",
    address: "Straat + plaats (Gurglerstraße 90 in Obergurgl)",
    checkin: "15:00",
    checkout: "10:00"
  },
  schedule: [
    { day: "Woensdag", plan: "Reisdag + inchecken + diner" },
    { day: "Donderdag", plan: "Eerste skidag + apres borrel / apres wellnes + diner " },
    { day: "Vrijdag", plan: "Skidag + apres borrel / apres wellnes + diner" },
    { day: "Zaterdag", plan: "Skidag + apres borrel / apres wellnes + diner" },
    { day: "Zondag", plan: "Laatste skidag" },
    { day: "Maandag", plan: "Uitchecken + terugreis - Tschüss! " }
  ],
  packing: {
    title: "Paklijst (klik om af te vinken)",
    items: [
      "Paspoort/ID + rijbewijs",
      "Zorgpas + reisverzekering",
      "Skikleding (jas/broek, thermo, handschoenen, muts)",
      "Skihelm + skibril",
      "Skispullen - Snowboard en/of ski's incl. schoenen",
      "Zonnebrand + lippenbalsem",
      "Sneeuwkettingen (indien nodig) / ijskrabber",
      "Opladers + powerbank",
      "Badkleding (voor wellness, verplicht in het zwembad)",
      "Medicatie / pleisters",
      "Cash/creditcard"
    ]
  },
  faq: [
    { q: "Hoe laat vertrekken we?", a: "Zie reisinfo hierboven. Zorg dat je 15 min eerder klaarstaat." },
    { q: "Wie rijdt met wie mee?", a: "We maken een carpool-indeling in de groepsapp." },
    { q: "Skipas regelen we samen of individueel?", a: "Voeg hier de afspraak toe (bijv. ter plekke of online)." }
  ]
};

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ padding: "28px 18px", maxWidth: 980, margin: "0 auto" }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>{title}</h2>
      <div style={{ background: "#fff", border: "1px solid #e7e7e7", borderRadius: 14, padding: 16 }}>
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  const [checked, setChecked] = useState({});
  const packingItems = useMemo(() => data.packing.items, []);

  const toggle = (item) => setChecked((prev) => ({ ...prev, [item]: !prev[item] }));

  return (
    <main style={{ background: "#f6f7fb", minHeight: "100vh" }}>
      <header style={{ padding: "34px 18px 10px", maxWidth: 980, margin: "0 auto" }}>
        <div style={{
          background: "linear-gradient(120deg, #2b6cb0, #6b46c1)",
          borderRadius: 18,
          color: "white",
          padding: 22
        }}>
          <h1 style={{ margin: 0, fontSize: 32 }}>{data.title}</h1>
          <p style={{ margin: "8px 0 0", opacity: 0.95 }}>{data.subtitle}</p>

          <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", marginTop: 16 }}>
            {data.highlights.map((h) => (
              <div key={h.label} style={{ background: "rgba(255,255,255,0.14)", borderRadius: 14, padding: 12 }}>
                <div style={{ fontSize: 12, opacity: 0.9 }}>{h.label}</div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>{h.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
            {data.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer"
                 style={{
                   color: "white",
                   textDecoration: "none",
                   border: "1px solid rgba(255,255,255,0.35)",
                   padding: "10px 12px",
                   borderRadius: 999
                 }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <Section id="reis" title="🚗 Reisinfo">
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li><strong>Verzamelpunt:</strong> {data.travel.meetingPoint}</li>
          <li><strong>Vertrek:</strong> {data.travel.departTime} &nbsp;|&nbsp; <strong>Aankomst:</strong> {data.travel.arrivalTime}</li>
        </ul>
        <ul style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.6 }}>
          {data.travel.notes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </Section>

      <Section id="verblijf" title="🏠 Verblijf">
        <p style={{ marginTop: 0 }}><strong>{data.stay.name}</strong><br />{data.stay.address}</p>
        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li><strong>Incheck:</strong> {data.stay.checkin}</li>
          <li><strong>Uitcheck:</strong> {data.stay.checkout}</li>
          <li><strong>Contact:</strong> {data.stay.contact}</li>
        </ul>
        <ul style={{ marginTop: 10, paddingLeft: 18, lineHeight: 1.6 }}>
          {data.stay.notes.map((n) => <li key={n}>{n}</li>)}
        </ul>
      </Section>

      <Section id="planning" title="🗓️ Planning (globaal)">
        <div style={{ display: "grid", gap: 10 }}>
          {data.schedule.map((s) => (
            <div key={s.day} style={{ display: "flex", gap: 12, padding: 12, borderRadius: 12, border: "1px solid #eee" }}>
              <div style={{ minWidth: 92, fontWeight: 700 }}>{s.day}</div>
              <div>{s.plan}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="paklijst" title={`✅ ${data.packing.title}`}>
        <div style={{ display: "grid", gap: 10 }}>
          {packingItems.map((item) => (
            <label key={item} style={{
              display: "flex", gap: 10, alignItems: "center",
              padding: 12, border: "1px solid #eee", borderRadius: 12, background: checked[item] ? "#e6fffa" : "white"
            }}>
              <input type="checkbox" checked={!!checked[item]} onChange={() => toggle(item)} />
              <span style={{ textDecoration: checked[item] ? "line-through" : "none" }}>{item}</span>
            </label>
          ))}
        </div>
      </Section>

      <Section id="faq" title="❓ FAQ">
        <div style={{ display: "grid", gap: 10 }}>
          {data.faq.map((f) => (
            <details key={f.q} style={{ border: "1px solid #eee", borderRadius: 12, padding: 12, background: "white" }}>
              <summary style={{ cursor: "pointer", fontWeight: 700 }}>{f.q}</summary>
              <p style={{ marginBottom: 0 }}>{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <footer style={{ padding: "22px 18px 40px", maxWidth: 980, margin: "0 auto", color: "#666" }}>
        <small>Tip: bewerk de teksten in <code>app/page.js</code> bovenin bij <code>data</code> en deploy opnieuw via GitHub → Vercel.</small>
      </footer>
    </main>
  );
}
