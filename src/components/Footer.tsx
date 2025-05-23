
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gold-900 to-gold-800 text-cream-100">
      <div className="container mx-auto px-4">
        {/* Conteúdo principal do footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e descrição */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="text-2xl font-playfair font-bold text-cream-100">
                Parfumerie
              </span>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">
              Sua loja especializada em perfumes importados. Oferecemos as melhores fragrâncias 
              do mundo com garantia de autenticidade e qualidade.
            </p>
            <div className="flex space-x-4">
              {/* Links das redes sociais */}
              <a href="#" className="w-8 h-8 bg-cream-100/20 rounded-full flex items-center justify-center hover:bg-cream-100/30 transition-colors">
                <span className="text-xs">f</span>
              </a>
              <a href="#" className="w-8 h-8 bg-cream-100/20 rounded-full flex items-center justify-center hover:bg-cream-100/30 transition-colors">
                <span className="text-xs">ig</span>
              </a>
              <a href="#" className="w-8 h-8 bg-cream-100/20 rounded-full flex items-center justify-center hover:bg-cream-100/30 transition-colors">
                <span className="text-xs">tw</span>
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/masculinos" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Perfumes Masculinos
                </Link>
              </li>
              <li>
                <Link to="/femininos" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Perfumes Femininos
                </Link>
              </li>
              <li>
                <Link to="/compartilhaveis" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Compartilháveis
                </Link>
              </li>
              <li>
                <Link to="/lancamentos" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Lançamentos
                </Link>
              </li>
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Atendimento</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Política de Trocas
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Rastreamento
                </a>
              </li>
              <li>
                <a href="#" className="text-cream-200 hover:text-cream-100 transition-colors text-sm">
                  Garantia de Autenticidade
                </a>
              </li>
            </ul>
          </div>

          {/* Informações de contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cream-100">Contato</h3>
            <div className="space-y-3 text-sm">
              <div>
                <div className="text-cream-100 font-medium">WhatsApp</div>
                <div className="text-cream-200">(11) 99999-9999</div>
              </div>
              <div>
                <div className="text-cream-100 font-medium">E-mail</div>
                <div className="text-cream-200">contato@parfumerie.com.br</div>
              </div>
              <div>
                <div className="text-cream-100 font-medium">Horário de Atendimento</div>
                <div className="text-cream-200">
                  Segunda a Sexta: 9h às 18h<br />
                  Sábado: 9h às 14h
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-cream-100/20 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-cream-100">Receba nossas novidades</h3>
            <p className="text-cream-200 text-sm">
              Seja o primeiro a saber sobre lançamentos e promoções exclusivas
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-4 py-2 rounded-lg bg-cream-100/10 border border-cream-100/20 text-cream-100 placeholder-cream-200 focus:outline-none focus:border-cream-100/40"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream-100/20 py-6 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream-200">
            <div>
              © 2024 Parfumerie. Todos os direitos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cream-100 transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-cream-100 transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-cream-100 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
