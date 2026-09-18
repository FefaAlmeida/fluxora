import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <style>{`
          h1, h2, h3, h4, h5, h6 {
            font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif !important;
          }
        `}</style>
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}