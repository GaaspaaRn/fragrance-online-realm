
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'masculino' | 'feminino' | 'compartilhavel';
  isNew?: boolean;
  isOnSale?: boolean;
  rating?: number;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brand,
  price,
  originalPrice,
  image,
  category,
  isNew = false,
  isOnSale = false,
  rating = 0,
  description
}) => {
  const handleAddToCart = () => {
    console.log(`Adicionando ${name} ao carrinho`);
    // Implementar lógica do carrinho aqui
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'masculino':
        return 'bg-blue-100 text-blue-800';
      case 'feminino':
        return 'bg-rose-100 text-rose-800';
      case 'compartilhavel':
        return 'bg-gold-100 text-gold-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-cream-200 hover:border-gold-300 hover:-translate-y-1">
      {/* Container da imagem */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cream-50 to-rose-50">
        {/* Placeholder da imagem */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-20 h-28 bg-gradient-to-b from-gold-300 to-gold-500 rounded-lg shadow-lg"></div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-rose-500 text-white hover:bg-rose-600">
              Novo
            </Badge>
          )}
          {isOnSale && (
            <Badge className="bg-red-500 text-white hover:bg-red-600">
              Oferta
            </Badge>
          )}
        </div>

        {/* Categoria */}
        <div className="absolute top-3 right-3">
          <Badge className={getCategoryColor(category)}>
            {category === 'masculino' ? 'M' : category === 'feminino' ? 'F' : 'U'}
          </Badge>
        </div>

        {/* Overlay com botão de adicionar ao carrinho */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            onClick={handleAddToCart}
            className="bg-white text-foreground hover:bg-cream-50 transform scale-90 group-hover:scale-100 transition-transform duration-300"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-4 space-y-3">
        {/* Marca */}
        <div className="text-sm text-muted-foreground font-medium">
          {brand}
        </div>

        {/* Nome do produto */}
        <h3 className="font-semibold text-foreground text-lg leading-tight line-clamp-2 group-hover:text-gold-700 transition-colors">
          {name}
        </h3>

        {/* Descrição */}
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}

        {/* Rating */}
        {rating > 0 && (
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i < rating ? 'bg-gold-400' : 'bg-gray-200'
                }`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">
              ({rating}/5)
            </span>
          </div>
        )}

        {/* Preços */}
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">
            {formatPrice(price)}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        {/* Botão de compra mobile */}
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white md:hidden"
          size="sm"
        >
          <ShoppingCart className="w-4 h-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
