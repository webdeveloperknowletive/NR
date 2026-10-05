import './globals.css';

export const metadata = {
  title: 'NR Real Estate — Exceptional Living & Plotted Communities in Pune',
  description: 'Premier residential towers, luxury villas, and sanctioned plotted communities in Pune and PCMC by NR Real Estate.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
  themeColor: '#101010',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
