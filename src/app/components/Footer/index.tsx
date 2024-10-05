import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react';
import { Separator } from '@/src/components/ui/separator';
import { Button } from '@/src/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl bg-background text-foreground pb-4">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/kglogo.png"
            alt="Logo da Empresa"
            width={24}
            height={24}
            className="mb-4"
          />
          <p className="text-sm text-center md:text-left max-w-xs text-muted-foreground">
            Sua loja online para os melhores produtos. Qualidade e satisfação
            garantidas.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="font-bold text-lg mb-2">Contato</h3>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin size={18} />
            <p>Rua Exemplo, 123, Cidade - Estado</p>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Phone size={18} />
            <p>(11) 1234-5678</p>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Mail size={18} />
            <p>contato@exemplo.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="flex space-x-4 text-sm">
            <Link
              href="/privacidade"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div className="text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Sua Loja. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
