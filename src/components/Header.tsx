
import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Buscar por:', searchQuery);
    // Aqui implementaríamos a lógica de busca
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-cream-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        {/* Logo e navegação principal */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-playfair font-bold text-gradient">
              Parfumerie
            </span>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/masculinos" 
              className="text-foreground hover:text-gold-600 transition-colors duration-300 font-medium"
            >
              Masculinos
            </Link>
            <Link 
              to="/femininos" 
              className="text-foreground hover:text-gold-600 transition-colors duration-300 font-medium"
            >
              Femininos
            </Link>
            <Link 
              to="/compartilhaveis" 
              className="text-foreground hover:text-gold-600 transition-colors duration-300 font-medium"
            >
              Compartilháveis
            </Link>
            <Link 
              to="/lancamentos" 
              className="text-rose-600 hover:text-rose-700 transition-colors duration-300 font-medium"
            >
              Lançamentos
            </Link>
          </nav>

          {/* Busca e ações */}
          <div className="flex items-center space-x-4">
            {/* Busca Desktop */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Buscar perfumes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-cream-50 border-cream-300 focus:border-gold-400 focus:ring-gold-400"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
            </form>

            {/* Ícones de ação */}
            <div className="flex items-center space-x-2">
              {/* Busca Mobile */}
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Search className="w-5 h-5" />
              </Button>

              {/* Login */}
              <Link to="/admin/login">
                <Button variant="ghost" size="icon" className="hover:bg-gold-100">
                  <User className="w-5 h-5" />
                </Button>
              </Link>

              {/* Carrinho */}
              <Button variant="ghost" size="icon" className="relative hover:bg-gold-100">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>

              {/* Menu Mobile */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-cream-300 pt-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/masculinos" 
                className="text-foreground hover:text-gold-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Perfumes Masculinos
              </Link>
              <Link 
                to="/femininos" 
                className="text-foreground hover:text-gold-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Perfumes Femininos
              </Link>
              <Link 
                to="/compartilhaveis" 
                className="text-foreground hover:text-gold-600 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Compartilháveis
              </Link>
              <Link 
                to="/lancamentos" 
                className="text-rose-600 hover:text-rose-700 transition-colors duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Lançamentos
              </Link>
              
              {/* Busca Mobile */}
              <form onSubmit={handleSearch} className="pt-2">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Buscar perfumes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-cream-50 border-cream-300 focus:border-gold-400 focus:ring-gold-400"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                </div>
              </form>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
