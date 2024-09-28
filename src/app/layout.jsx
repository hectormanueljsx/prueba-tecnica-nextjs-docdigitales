import { Asap } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';

export const metadata = {
  title: 'docDigitales',
  description: 'Encárgate de tu negocio, nosotros de tu contabilidad',
};

const asap = Asap({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='es-MX'>
      <body className={asap.className}>{children}</body>
    </html>
  );
}
