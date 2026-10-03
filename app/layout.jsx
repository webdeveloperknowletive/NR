import './globals.css';

export const metadata = {
  title: 'CityMotion — Built in Motion',
  description: 'A cinematic, scroll-driven landing page built around an aerial city film.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
