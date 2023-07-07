import "./globals.css";

export const metadata = {
  title: "Iván Henríquez Fica - Portafolio",
  description:
    "Bienvenido a portafolio, aquí encontrarás mis proyectos de código abierto!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
