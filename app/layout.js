export const metadata = {
  title: "Wintersport Info",
  description: "Alle info voor onze wintersport op één plek"
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial" }}>
        {children}
      </body>
    </html>
  );
}
