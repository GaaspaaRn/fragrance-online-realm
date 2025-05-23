
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular autenticação
    setTimeout(() => {
      console.log('Login attempt:', formData);
      alert('Login realizado com sucesso! (Demo)');
      setIsLoading(false);
    }, 1500);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-rose-50 flex items-center justify-center px-4">
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-rose-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-3xl font-playfair font-bold text-gradient">
              Parfumerie
            </span>
          </Link>
        </div>

        {/* Card de login */}
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-2xl font-playfair font-bold text-foreground">
              Área Administrativa
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              Faça login para acessar o painel administrativo
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Campo de usuário */}
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-foreground">
                  Usuário
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="username"
                    name="username"
                    type="text"
                    value={formData.username}
                    onChange={handleInputChange}
                    placeholder="Digite seu usuário"
                    className="pl-10 bg-cream-50 border-cream-300 focus:border-gold-400 focus:ring-gold-400"
                    required
                  />
                </div>
              </div>

              {/* Campo de senha */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Senha
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Digite sua senha"
                    className="pl-10 pr-10 bg-cream-50 border-cream-300 focus:border-gold-400 focus:ring-gold-400"
                    required
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Lembrar senha */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-cream-300 text-gold-600 focus:ring-gold-400"
                  />
                  <span className="text-muted-foreground">Lembrar-me</span>
                </label>
                <a href="#" className="text-gold-600 hover:text-gold-700 transition-colors">
                  Esqueceu a senha?
                </a>
              </div>

              {/* Botão de login */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Entrando...</span>
                  </div>
                ) : (
                  'Entrar'
                )}
              </Button>
            </form>

            {/* Link para voltar */}
            <div className="mt-6 text-center">
              <Link 
                to="/" 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Voltar para a loja
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Informações de segurança */}
        <div className="mt-8 text-center text-xs text-muted-foreground">
          <p>Área restrita. Acesso apenas para administradores autorizados.</p>
          <p className="mt-1">Suas credenciais são protegidas por criptografia SSL.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
