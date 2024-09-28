import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { BadgePercent, PinIcon, TruckIcon } from 'lucide-react';

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
    <div className="w-full flex flex-col items-center justify-center gap-20">
      <nav className="w-full flex flex-col justify-between items-center">
        <div className='w-full bg-slate-100 p-2 flex justify-center items-center'>
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
            <img src={EcommerceInformation.logo} width={40} alt="KG Store Logo" />
            <h1 className="w-full text-2xl font-bold">{EcommerceInformation.name}</h1>
          </div>
          <div className="w-4/6">
            <Input type="text" placeholder="Search..." />
          </div>
        </div>
        <Separator />
      </nav>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-7xl flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
