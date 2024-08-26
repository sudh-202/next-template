import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'
import Link from 'next/link';

const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-10'>
    <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
      <p className='text-white/60 hidden md:block'>Steamline your workflow and boost your productivity</p>
      <div className='inline-flex gap-1 items-center'>
      <p>Get started for free</p>
      <ArrowRight className=" h-4 w-4 inline-flex justify-center items-center" />
      </div>
    </div>
    <div className='py-5 '>
       <div className='container'>
        <div className='flex items-center justify-between'>
        <Image src={Logo} alt='Saas Logo' height={40} width={40}/>
        <MenuIcon className="h-5 w-5 md:hidden"/>
        <nav className='hidden md:flex '>
          <ul className='flex gap-6 text-black/60 items-center '>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Features</Link></li>
            <li><Link href="/">Customers</Link></li>
            <li><Link href="/">Updates</Link></li>
            <li><Link href="/">Help</Link></li>
            <button className='bg-black text-white px-4 py-2 inline-flex rounded-lg font-medium  justify-center tracking-tighter'>Get for free</button>
          </ul>
        </nav>
        </div>
       </div>
    </div>
    </header>
  );
};
export default Header;

