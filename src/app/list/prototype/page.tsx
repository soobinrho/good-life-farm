import Footer from '@/components/footer';
import HeaderGoogleSheets from '@/components/header-google-sheets';
import HeaderLogo from '@/components/header-logo';
import HeaderSocialMedia from '@/components/header-social-media';
import PrototypePage from '@/components/page-prototype';
import { unstable_noStore as noStore } from 'next/cache';

export default function Page() {
  // "`noStore` can be used to declaratively opt out of static rendering
  // and indicate a particular Server Component should not be cached."
  // Source:
  //   https://nextjs.org/docs/app/api-reference/functions/unstable_noStore
  noStore();

  return (
    <main className='relative h-max min-h-screen w-full overflow-y-hidden bg-background text-primary'>
      <HeaderLogo />
      <HeaderGoogleSheets />
      <HeaderSocialMedia />
      <PrototypePage />
      <Footer />
    </main>
  );
}
