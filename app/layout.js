// app/layout.js
import './globals.css'; // Corrigé si ton fichier CSS est à la racine ou dans /app
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Portfolio Lehtinen Samuli',
  description: 'Portfolio personnel multilingue',
};

export default async function RootLayout({ children, params: { locale } }) {
  let messages;

  try {
    messages = await getMessages({ locale });
  } catch (error) {
    // Fallback minimal : messages vides
    messages = {};
  }

  return (
    <html lang={locale}>
      <body className="bg-gray-950 text-white">
          <Navbar />
          <main className="pt-10">{children}</main>
      </body>
    </html>
  );
}
