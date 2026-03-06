export const metadata = {
  title: "Wintersport Info",
  description: "Alle info voor onze wintersport op één plek"
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
   <body
  style={{
    margin: 0,
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial",
    background: "#F28C28",   // oranje
    color: "#0B2D5C"         // donkerblauw als standaard tekstkleur
  }}
>
        {children}
      </body>
    </html>
  );
}
