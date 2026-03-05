'use client'; // Necessário para usar hooks como useState e useRouter

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [role, setRole] = useState('administrador');
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  // Função para lidar com o login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você adicionaria sua lógica de autenticação futuramente
    if (cpf.length > 0 && password.length > 0) {
      router.push('/dashboard');
    } else {
      alert("Por favor, preencha o CPF e a senha.");
    }
  };

  // Função simples para máscara de CPF (000.000.000-00)
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
    if (value.length <= 11) {
      value = value.replace(/(\={3})(\={3})(\={3})(\={2})/, "$1.$2.$3-$4");
      // Formatação simplificada via Regex:
      value = value
        .replace(/^(\d{3})(\d)/, '$1.$2')
        .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
        .replace(/\.(\d{3})(\d)/, '.$1-$2');
      setCpf(value);
    }
  };

  return (
    <div className="flex w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden bg-white min-h-[500px]">
      
      {/* LADO ESQUERDO - Visual (Verde Água/Azul) */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-cyan-600 to-teal-700 p-12 flex-col justify-center text-white relative">
        <div className="z-10">
          <h1 className="text-4xl font-bold mb-4 tracking-tighter">
            DROGARIA <br /> 
            <span className="text-red-400">SHINHAMA</span>
          </h1>
          <div className="w-16 h-1 bg-red-500 mb-6"></div>
          <p className="text-cyan-50 opacity-90 text-lg">
            Sistema de Gestão Farmacêutica.
          </p>
        </div>
        {/* Detalhe decorativo ao fundo */}
        <div className="absolute bottom-0 right-0 opacity-10 text-[15rem] leading-none font-bold select-none">
          +
        </div>
      </div>

      {/* LADO DIREITO - Formulário */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">Login</h2>
          <p className="text-gray-500">Acesse sua conta para continuar</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Seletor de Perfil */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
              Tipo de Acesso
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['administrador', 'funcionario', 'farmaceutico'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setRole(type)}
                  className={`py-2 text-[10px] sm:text-xs font-bold rounded-lg border transition-all ${
                    role === type 
                      ? 'bg-teal-500 text-white border-teal-500 shadow-md' 
                      : 'bg-white text-gray-400 border-gray-200 hover:border-teal-300'
                  }`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Input CPF */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CPF</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">👤</span>
              <input 
                type="text" 
                value={cpf}
                onChange={handleCpfChange}
                placeholder="000.000.000-00"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Input Senha */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha Pessoal</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">🔒</span>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:bg-white outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Botão de Submit */}
          <button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-200 transform transition active:scale-[0.98] mt-4"
          >
            ENTRAR NO SISTEMA
          </button>
        </form>

        <footer className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Problemas com o acesso? <span className="text-teal-600 font-bold cursor-pointer underline">Contate o suporte</span>
          </p>
        </footer>
      </div>
    </div>
  );
}