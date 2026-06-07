import type {Metadata} from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css'; // Global styles

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clear sight Eye Care Hospital - Simple & Premium Care',
  description: 'A premium, modern eye care center dedicated to correcting and preserving your vision. Advanced equipment and expert ophthalmologists.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="bg-white text-slate-800 antialiased font-sans" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

