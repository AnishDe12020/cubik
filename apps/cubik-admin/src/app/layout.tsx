import "@cubik/ui/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{
        border: "1px solid red",
      }}
      lang="en"
      className="bg-zinc-900"
    >
      <body>{children}</body>
    </html>
  );
}
