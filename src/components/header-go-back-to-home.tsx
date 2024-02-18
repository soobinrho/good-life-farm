'use client';

import Link from 'next/link';

export default function HeaderGoBackToHome() {
  return (
    <header className='absolute start-0 z-30 ml-4 mt-4 flex gap-3'>
      <Link href='/'>
        <svg
          className='fill-current hover:text-primary-3/70 active:text-black/70'
          width='24'
          height='24'
          xmlns='http://www.w3.org/2000/svg'
          fill-rule='evenodd'
          clip-rule='evenodd'
        >
          <path d='M6 23h-3v-5.486c-1.827-.518-3-2.24-3-3.988 0-.585.129-1.172.407-1.716-.323-1.661.657-3.344 2.356-3.881l.018-.005c.773-1.102 2.057-1.826 3.535-1.898l5.666-5.026 12.018 10.661-1.33 1.493-10.688-9.482-3.274 2.905c.305.162.591.358.849.589l2.415-2.142 9.026 7.989v9.987h-2.998v-7h-5l-.008 7h-5.992v-6.061c.546-.125 1.034-.463 1.317-1.044 2.096.786 3.746-2.273 1.82-3.562 1.073-1.237.188-2.747-1.208-2.525-.673-2.384-4.178-2.384-4.851 0-1.31-.235-2.295 1.094-1.385 2.291-1.654 1.38-.162 4.084 1.872 3.473.214.74.794 1.2 1.435 1.362v6.066zm.451-10.678c1.493-1.023 3.242.768 2.303 2.226.002-1.473-.853-2.282-2.303-2.226m-2.119 1.191c-.668-1.002-.34-2.366.705-2.968.589-.338 1.33-.369 1.953-.07 1.06.507-2.743-.678-2.658 3.038' />
        </svg>
      </Link>
      <Link href='/'>
        <p className='font-extrabold drop-shadow-[0_8px_8px_rgba(0,0,0,0.5)] hover:text-primary-3/70 active:text-black/70'>
          Good Life Farms
        </p>
      </Link>
    </header>
  );
}
