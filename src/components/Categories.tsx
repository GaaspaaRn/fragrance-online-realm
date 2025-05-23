
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      id: 'masculinos',
      title: 'Perfumes Masculinos',
      description: 'Fragrâncias marcantes para homens sofisticados',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      link: '/masculinos',
      stats: '150+ produtos'
    },
    {
      id: 'femininos',
      title: 'Perfumes Femininos',
      description: 'Elegância e delicadeza em cada borrifo',
      image: 'bg-gradient-to-br from-rose-400 to-rose-600',
      link: '/femininos',
      stats: '200+ produtos'
    },
    {
      id: 'compartilhaveis',
      title: 'Compartilháveis',
      description: 'Fragrâncias unissex para todos os momentos',
      image: 'bg-gradient-to-br from-gold-400 to-gold-600',
      link: '/compartilhaveis',
      stats: '80+ produtos'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-cream-50 to-white">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground">
            Explore por <span className="text-gradient">Categoria</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre a fragrância perfeita navegando por nossas categorias especializadas. 
            Cada uma com uma curadoria única de perfumes.
          </p>
        </div>

        {/* Grid de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem/Background da categoria */}
              <div className={`h-48 ${category.image} relative overflow-hidden`}>
                {/* Elementos decorativos */}
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 w-16 h-20 bg-white/20 rounded-lg backdrop-blur-sm"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/30 rounded-full backdrop-blur-sm"></div>
                
                {/* Badge de estatísticas */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {category.stats}
                </div>
              </div>

              {/* Conteúdo da categoria */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-playfair font-bold text-foreground group-hover:text-gold-700 transition-colors">
                  {category.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                <Link to={category.link}>
                  <Button 
                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white transition-all duration-300 hover:scale-105"
                    size="lg"
                  >
                    Explorar Categoria
                  </Button>
                </Link>
              </div>

              {/* Efeito hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Seção de benefícios */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 bg-gold-500 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-foreground">Entrega Rápida</h4>
            <p className="text-sm text-muted-foreground">Receba seus perfumes em até 3 dias úteis</p>
          </div>

          <div className="text-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 bg-rose-500 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-foreground">Produtos Originais</h4>
            <p className="text-sm text-muted-foreground">Garantia de autenticidade em todos os produtos</p>
          </div>

          <div className="text-center space-y-3 p-6 bg-white/60 backdrop-blur-sm rounded-2xl">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
            </div>
            <h4 className="font-semibold text-foreground">Suporte Especializado</h4>
            <p className="text-sm text-muted-foreground">Ajuda para escolher a fragrância perfeita</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
