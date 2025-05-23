
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const Masculinos = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [brand, setBrand] = useState('');

  // Dados mockados de produtos masculinos
  const products = [
    {
      id: 'm1',
      name: 'Sauvage Eau de Parfum',
      brand: 'Dior',
      price: 399.90,
      image: '',
      category: 'masculino' as const,
      rating: 5,
      description: 'Uma fragrância fresca e selvagem que combina bergamota com pimenta.'
    },
    {
      id: 'm2',
      name: 'Oud Wood',
      brand: 'Tom Ford',
      price: 599.90,
      image: '',
      category: 'masculino' as const,
      isNew: true,
      rating: 5,
      description: 'Madeira de oud exótica com notas de pau-rosa e cardamomo.'
    },
    {
      id: 'm3',
      name: 'Bleu de Chanel',
      brand: 'Chanel',
      price: 459.90,
      originalPrice: 529.90,
      image: '',
      category: 'masculino' as const,
      isOnSale: true,
      rating: 4,
      description: 'Elegância atemporal com notas cítricas e amadeiradas.'
    },
    {
      id: 'm4',
      name: 'Invictus',
      brand: 'Paco Rabanne',
      price: 289.90,
      image: '',
      category: 'masculino' as const,
      rating: 4,
      description: 'Força e vitória em uma fragrância fresca e potente.'
    },
    {
      id: 'm5',
      name: 'One Million',
      brand: 'Paco Rabanne',
      price: 319.90,
      originalPrice: 359.90,
      image: '',
      category: 'masculino' as const,
      isOnSale: true,
      rating: 4,
      description: 'Luxo e sedução com notas douradas e especiadas.'
    },
    {
      id: 'm6',
      name: 'Acqua di Giò Profumo',
      brand: 'Giorgio Armani',
      price: 379.90,
      image: '',
      category: 'masculino' as const,
      rating: 5,
      description: 'Frescor aquático com profundidade e intensidade.'
    }
  ];

  const brands = ['Dior', 'Tom Ford', 'Chanel', 'Paco Rabanne', 'Giorgio Armani', 'Versace', 'Hugo Boss'];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar por:', searchQuery);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Cabeçalho da página */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
            Perfumes <span className="text-gradient">Masculinos</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra fragrâncias marcantes que definem personalidade e estilo. 
            Perfumes masculinos para homens sofisticados e modernos.
          </p>
        </div>

        {/* Filtros e busca */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-cream-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Busca */}
            <form onSubmit={handleSearch} className="lg:col-span-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar perfumes masculinos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-cream-50 border-cream-300 focus:border-gold-400 focus:ring-gold-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
            </form>

            {/* Ordenação */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-cream-50 border-cream-300">
                <SelectValue placeholder="Ordenar por" />
              </SelectTrigger>
              <SelectContent className="bg-white border-cream-300">
                <SelectItem value="price-asc">Menor preço</SelectItem>
                <SelectItem value="price-desc">Maior preço</SelectItem>
                <SelectItem value="name">Nome A-Z</SelectItem>
                <SelectItem value="rating">Mais avaliados</SelectItem>
              </SelectContent>
            </Select>

            {/* Faixa de preço */}
            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger className="bg-cream-50 border-cream-300">
                <SelectValue placeholder="Preço" />
              </SelectTrigger>
              <SelectContent className="bg-white border-cream-300">
                <SelectItem value="0-200">Até R$ 200</SelectItem>
                <SelectItem value="200-400">R$ 200 - R$ 400</SelectItem>
                <SelectItem value="400-600">R$ 400 - R$ 600</SelectItem>
                <SelectItem value="600+">Acima de R$ 600</SelectItem>
              </SelectContent>
            </Select>

            {/* Marca */}
            <Select value={brand} onValueChange={setBrand}>
              <SelectTrigger className="bg-cream-50 border-cream-300">
                <SelectValue placeholder="Marca" />
              </SelectTrigger>
              <SelectContent className="bg-white border-cream-300">
                {brands.map((brandName) => (
                  <SelectItem key={brandName} value={brandName.toLowerCase()}>
                    {brandName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Filtros ativos */}
          {(searchQuery || sortBy || priceRange || brand) && (
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-muted-foreground">Filtros ativos:</span>
              {searchQuery && (
                <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-xs">
                  Busca: {searchQuery}
                </span>
              )}
              {brand && (
                <span className="bg-gold-100 text-gold-800 px-2 py-1 rounded-full text-xs">
                  Marca: {brand}
                </span>
              )}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchQuery('');
                  setSortBy('');
                  setPriceRange('');
                  setBrand('');
                }}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                Limpar filtros
              </Button>
            </div>
          )}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Paginação */}
        <div className="flex justify-center">
          <div className="flex items-center space-x-2">
            <Button variant="outline" disabled className="bg-cream-50 border-cream-300">
              Anterior
            </Button>
            <Button className="bg-gold-600 text-white">1</Button>
            <Button variant="outline" className="bg-cream-50 border-cream-300">2</Button>
            <Button variant="outline" className="bg-cream-50 border-cream-300">3</Button>
            <Button variant="outline" className="bg-cream-50 border-cream-300">
              Próximo
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Masculinos;
