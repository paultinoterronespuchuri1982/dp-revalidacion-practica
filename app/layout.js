import "./globals.css";

export const metadata = {
  title: "Evaluador DP – Práctica de revalidación / Avaliador DP – Prática de revalidação",
  description:
    "Práctica de preguntas y casos prácticos de posicionamiento dinámico, con guía de estudio del Nautical Institute. Español y português.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f1224",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
