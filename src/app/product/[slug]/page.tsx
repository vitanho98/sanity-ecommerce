'use client';

import { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Minus,
  Plus,
  ChevronDown,
} from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '@/src/components/ui/tabs';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/src/components/ui/select';
import { Input } from '@/src/components/ui/input';
import Navbar from '@/src/app/components/Navbar';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  return (
    <Navbar>
      <h2 className="text-3xl font-bold mb-4">Iphone 15 Pro Max</h2>
      <Tabs defaultValue="general" className="mb-6">
        <TabsList>
          <TabsTrigger value="general">General info</TabsTrigger>
          <TabsTrigger value="reviews">Reviews (12)</TabsTrigger>
        </TabsList>
        <TabsContent value="general">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="relative mb-4">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="iPhone 15 Pro Max"
                      className="w-full rounded-lg"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-center space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <img
                        key={i}
                        src="/placeholder.svg?height=60&width=60"
                        alt={`Thumbnail ${i + 1}`}
                        className="w-16 h-16 rounded border-2 border-muted"
                      />
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-primary mr-2">
                      R$ 5.999
                    </span>
                    <span className="text-lg text-muted-foreground line-through">
                      R$ 7.999,00
                    </span>
                    <span className="ml-2 px-2 py-1 bg-destructive text-destructive-foreground text-sm rounded">
                      -20%
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">Cor</p>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full bg-zinc-900"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full bg-zinc-400"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 rounded-full bg-zinc-200"
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="font-semibold mb-2">Modelo</p>
                    <Select defaultValue="128gb">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o modelo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="128gb">128GB / 4GB-RAM</SelectItem>
                        <SelectItem value="256gb">256GB / 6GB-RAM</SelectItem>
                        <SelectItem value="512gb">512GB / 8GB-RAM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center mb-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="w-16 mx-2 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  <Button className="w-full mb-4">Comprar</Button>

                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Descrição</h3>
                    <p className="text-sm text-muted-foreground">
                      O iPhone 15 Pro Max representa o ápice da tecnologia móvel
                      da Apple, combinando inovação e desempenho excepcional em
                      um design elegante. Como um dos modelos mais avançados da
                      linha iPhone, ele continua a tradição da Apple de oferecer
                      experiências premium aos seus usuários. Equipado com um
                      processador extremamente poderoso, o iPhone 15 Pro Max
                      garante uma performance suave e rápida, capaz de lidar com
                      multitarefas exigentes e aplicativos intensivos sem
                      qualquer dificuldade.
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <img
                      src="/placeholder.svg?height=30&width=50"
                      alt="Visa"
                      className="h-8"
                    />
                    <img
                      src="/placeholder.svg?height=30&width=50"
                      alt="Mastercard"
                      className="h-8"
                    />
                    <img
                      src="/placeholder.svg?height=30&width=50"
                      alt="PayPal"
                      className="h-8"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reviews">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-yellow-400 mr-1" />
                <Star className="text-muted mr-2" />
                <span className="text-sm text-muted-foreground">
                  4.0 (12 avaliações)
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                As avaliações dos clientes seriam exibidas aqui.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Navbar>
  );
}
