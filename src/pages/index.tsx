import localFont from 'next/font/local';
import TableMap from '@/components/table/TableMap';
import Menu from '@/components/menu/Menu';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} `}>
      <main>
        <TableMap></TableMap>
        <Menu></Menu>
      </main>
    </div>
  );
}
