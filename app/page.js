"use client";

import { useMemo, useState } from "react";

const data = {
  title: "Wintersport 2026 🏂🎿🍻🥂🎉",
  subtitle: "Alle praktische info op één plek – deel deze link met de groep.",
  highlights: [
    { label: "Bestemming", value: "Obergurgl 🏔️" },
    { label: "Data", value: "woe 25 maart – ma 30 maart" },
    { label: "Groepsapp", value: "Zie WhatsApp voor de laatste info" }
  ],
  links: [
    {
      label: "📍 Google Maps accommodatie",
      href: "https://www.google.com/maps/place/The+Crystal+VAYA+Unique/@46.875188,11.0295681,17z/data=!4m9!3m8!1s0x4782cc7d1988730f:0xa5c6edb46d84bb2b!5m2!4m1!1i2!8m2!3d46.8751844!4d11.032143!16s%2Fg%2F1td9zk0r?entry=ttu"
    },
    { label: "🎿 Skigebied info", href: "https://www.obergurgl.com/" }
    // Tip: voeg WhatsApp link toe als je 'm hebt:
    // { label: "💬 WhatsApp groep", href: "https://chat.whatsapp.com/..." }
  ],
  travel: {
    meetingPoint: "Utrecht – (vul P+R / adres in)",
    departTime: "(vul tijd in)",
    distance: "913 kilometer",
    arrivalTime: "15:00–20:00",
    notes: [
      "Een vignet is aan te raden (regel een vignet per auto).",
      "Parkeren kan bij het hotel (incl. laadmogelijkheid).",
      "Check winterbanden/sneeuwkettingen (verplicht bij omstandigheden)."
    ]
  },
  stay: {
    name: "The Crystal VAYA Unique",
    address: "Gurglerstraße 90, 6456 Obergurgl, Oostenrijk",
    arrival: "Woensdag 25 maart",
    checkin: "Vanaf 15:00 (uiterlijk 20:00 i.v.m. avondeten)",
    depart: "Maandag 30 maart",
    checkout: "Uiterlijk 10:00",
    notes: [
      "Ontbijt en avondeten is inclusief en in het hotel.",
      "Avondeten: woensdag t/m zondag.",
      "Ontbijt: donderdag t/m maandag."
    ]
  },
  ski: {
    skipass: "Skipas voor 4 dagen: donderdag t/m zondag.",
    extra: "Skiverhuur kan je op de dag van aankomst regelen."
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
  },
  tips: [
    "Regel een vignet per auto.",
    "Skiverhuur kan je op de dag van aankomst regelen.",
    "Vergeet je badkleding niet voor de zwembaden (verplicht)."
  ],
  faq: [
    {
      q: "Hoe laat vertrekken we?",
      a: "Zet de vertrektijd en het verzamelpunt hierboven bij Reisinfo."
    },
    {
      q: "Wie rijdt met wie mee?",
      a: "We maken een carpool-indeling in de groepsapp."
    }
  ]
};

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ padding: "18px 18px", maxWidth: 980, margin: "0 auto" }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 22, color: "#0B2D5C" }}>{title}</h2>
      <div
        style={{
          background: "rgba(255,255,255,0.92)",
          border: "1px solid rgba(11,45,92,0.12)",
          borderRadius: 16,
          padding: 16
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
    <main style={{ background: "transparent", minHeight: "100vh" }}>
      <header style={{ padding: "28px 18px 10px", maxWidth: 980, margin: "0 auto" }}>
        {/* LOGO (hoort hier, niet in het data object) */}
        <img
          src="/Logo Obergurgl.png"
          alt="Logo Obergurgl"
          style={{
            width: "240px",
            maxWidth: "85%",
            display: "block",
            margin: "0 auto 14px"
          }}
        />

        {/* Header kaart */}
        <div
          style={{
            background: "linear-gradient(120deg, rgba(11,45,92,0.92), rgba(11,45,92,0.76))",
            borderRadius: 18,
            color: "#FFF4E6",
            padding: 20,
            border: "1px solid rgba(255,255,255,0.18)"
          }}
        >
          <h1 style={{ margin: 0, fontSize: 32, letterSpacing: 0.2 }}>{data.title}</h1>
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
