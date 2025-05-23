
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-cream-50 via-white to-rose-50 overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-rose-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gold-300 rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                <span className="text-gradient">Desperte</span>
                <br />
                <span className="text-foreground">seus sentidos</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Descubra nossa coleção exclusiva de perfumes importados. 
                Fragrâncias únicas que contam histórias e despertam emoções.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Explorar Coleção
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gold-400 text-gold-700 hover:bg-gold-50 px-8 py-4 text-lg font-medium transition-all duration-300"
              >
                Ver Lançamentos
              </Button>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">500+</div>
                <div className="text-sm text-muted-foreground">Fragrâncias</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">50+</div>
                <div className="text-sm text-muted-foreground">Marcas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600">10k+</div>
                <div className="text-sm text-muted-foreground">Clientes</div>
              </div>
            </div>
          </div>

          {/* Imagem/Visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative w-full h-96 lg:h-[600px] bg-gradient-to-br from-gold-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder para imagem de perfume */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-200/50 to-rose-200/50 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-32 bg-gradient-to-b from-gold-300 to-gold-500 rounded-lg mx-auto shadow-lg"></div>
                  <div className="text-lg font-medium text-gold-700">Perfume Premium</div>
                </div>
              </div>
              
              {/* Elementos decorativos na imagem */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/20 rounded-full"></div>
            </div>

            {/* Badge de destaque */}
            <div className="absolute -top-4 -left-4 bg-rose-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
              Novo Lançamento
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-gold-600" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
