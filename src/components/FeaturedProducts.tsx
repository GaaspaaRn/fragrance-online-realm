
import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const FeaturedProducts = () => {
  // Dados mockados dos produtos
  const products = [
    {
      id: '1',
      name: 'Eau de Parfum Intense',
      brand: 'Maison Margiela',
      price: 289.90,
      originalPrice: 349.90,
      image: '',
      category: 'compartilhavel' as const,
      isNew: true,
      isOnSale: true,
      rating: 5,
      description: 'Uma fragrância envolvente com notas de baunilha e âmbar.'
    },
    {
      id: '2',
      name: 'Black Orchid',
      brand: 'Tom Ford',
      price: 459.90,
      image: '',
      category: 'feminino' as const,
      rating: 4,
      description: 'Perfume luxuoso com notas florais e especiarias orientais.'
    },
    {
      id: '3',
      name: 'Oud Wood',
      brand: 'Tom Ford',
      price: 599.90,
      image: '',
      category: 'masculino' as const,
      isNew: true,
      rating: 5,
      description: 'Fragrância masculina sofisticada com madeira de oud.'
    },
    {
      id: '4',
      name: 'Libre',
      brand: 'Yves Saint Laurent',
      price: 329.90,
      originalPrice: 389.90,
      image: '',
      category: 'feminino' as const,
      isOnSale: true,
      rating: 4,
      description: 'A liberdade expressa em uma fragrância floral moderna.'
    },
    {
      id: '5',
      name: 'Sauvage',
      brand: 'Dior',
      price: 399.90,
      image: '',
      category: 'masculino' as const,
      rating: 5,
      description: 'O perfume masculino mais desejado do mundo.'
    },
    {
      id: '6',
      name: 'Good Girl',
      brand: 'Carolina Herrera',
      price: 349.90,
      image: '',
      category: 'feminino' as const,
      rating: 4,
      description: 'Uma fragrância dualística para a mulher moderna.'
    },
    {
      id: '7',
      name: 'Tobacco Vanille',
      brand: 'Tom Ford',
      price: 699.90,
      image: '',
      category: 'compartilhavel' as const,
      isNew: true,
      rating: 5,
      description: 'Blend exótico de tabaco e baunilha cremosa.'
    },
    {
      id: '8',
      name: 'La Vie Est Belle',
      brand: 'Lancôme',
      price: 279.90,
      originalPrice: 329.90,
      image: '',
      category: 'feminino' as const,
      isOnSale: true,
      rating: 4,
      description: 'A fragrância da felicidade e da elegância francesa.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
            Produtos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra nossa seleção especial de perfumes premiados e mais vendidos. 
            Fragrâncias que definem personalidade e estilo.
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Botão para ver todos os produtos */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-gold-400 text-gold-700 hover:bg-gold-50 px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Ver Todos os Produtos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
