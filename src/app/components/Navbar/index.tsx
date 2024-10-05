import { Input } from '@/src/components/ui/input';
import { Separator } from '@/src/components/ui/separator';
import { BadgePercent, PinIcon, TruckIcon } from 'lucide-react';
import Footer from '../Footer';

interface NavbarProps {
  children: React.ReactNode;
}

const EcommerceInformation = {
  name: 'KG Importadora',
  logo: '/kglogo.png',
  location: 'Blumenau, SC',
  delivery: 'Entrega Rápida',
  productsOffers: 'Produtos com ofertas',
};

export default function Navbar({ children }: NavbarProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <nav className="w-full flex flex-col justify-between items-center fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="w-full bg-slate-100 p-2 flex justify-center items-center">
          <div className="w-full max-w-7xl gap-2 flex justify-end">
            <span className="flex gap-2 items-center">
              <PinIcon color="#1E90FF" size={16} />
              <p className="text-xs">{EcommerceInformation.location}</p>
            </span>
            <Separator orientation="vertical" className="h-7" />
            <span className="flex gap-2 items-center">
              <TruckIcon color="#1E90FF" size={16} />
              <p className="text-xs">{EcommerceInformation.delivery}</p>
            </span>
            <Separator orientation="vertical" className="h-7" />
            <span className="flex gap-2 items-center">
              <BadgePercent color="#1E90FF" size={16} />
              <p className="text-xs">{EcommerceInformation.productsOffers}</p>
            </span>
          </div>
        </div>
        <div className="w-full max-w-7xl flex items-center justify-between py-4">
          <div className="flex gap-4 items-center">
            <img
              src={EcommerceInformation.logo}
              width={40}
              alt="KG Store Logo"
            />
            <h1 className="w-full text-2xl font-bold">
              {EcommerceInformation.name}
            </h1>
          </div>
          <div className="w-4/6">
            <Input type="text" placeholder="Search..." />
          </div>
        </div>
        <Separator />
      </nav>
      <div className="w-full flex flex-col items-center justify-center mt-48">
        <div className="w-full max-w-7xl flex flex-col pb-10">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
