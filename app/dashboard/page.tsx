'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();
  const [busca, setBusca] = useState("");

  const medicamentos = [
    { id: 1, nome: "Amoxicilina 500mg", estoque: "45 un", img: "/medicamentos/amoxilina.png", categoria: "Antibiótico" },
    { id: 2, nome: "Dipirona Monoidratada", estoque: "120 un", img: "/medicamentos/dipirona.webp", categoria: "Analgésico" },
    { id: 3, nome: "Ibuprofeno 600mg", estoque: "32 un", img: "/medicamentos/ibuprofeno.webp", categoria: "Anti-inflamatório" },
    { id: 4, nome: "Vitamina C 1g", estoque: "85 un", img: "/medicamentos/vitaminac.jpg", categoria: "Suplemento" },
    { id: 5, nome: "Paracetamol 750mg", estoque: "200 un", img: "/medicamentos/paracetamol.webp", categoria: "Analgésico" },
    { id: 6, nome: "Loratadina 10mg", estoque: "15 un", img: "/medicamentos/loratadina.webp", categoria: "Antialérgico" },
  ];

  const medicamentosFiltrados = medicamentos.filter(med => 
    med.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      
      {/* SIDEBAR COM ATALHOS */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-lg z-10">
        <div className="p-8">
          <h1 className="text-2xl font-black text-teal-600 tracking-tighter uppercase">
            Farmácia <br /><span className="text-red-600">Popular</span>
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center p-4 text-teal-700 bg-teal-50 rounded-2xl font-bold shadow-sm">
            <span className="mr-3 text-xl">💊</span> Estoque Geral
          </Link>
          <Link href="/receita" className="flex items-center p-4 text-gray-500 hover:bg-gray-50 rounded-2xl font-semibold transition-all">
            <span className="mr-3 text-xl">📤</span> Digitalizar Receita
          </Link>
          <Link href="/pacientes" className="flex items-center p-4 text-gray-500 hover:bg-gray-50 rounded-2xl font-semibold transition-all">
            <span className="mr-3 text-xl">👤</span> Pacientes
          </Link>
          <Link href="/ubs" className="flex items-center p-4 text-gray-500 hover:bg-gray-50 rounded-2xl font-semibold transition-all">
            <span className="mr-3 text-xl">🏥</span> Redes de Saúde
          </Link>
          <div className="h-px bg-gray-100 my-4 mx-4"></div>
          <Link href="/cadastro-medicamento" className="flex items-center p-4 text-gray-500 hover:bg-gray-50 rounded-2xl font-semibold transition-all">
            <span className="mr-3 text-xl">➕</span> Cadastrar Item
          </Link>
        </nav>
      </aside>

      <main className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER COM ÍCONES DE ACESSO RÁPIDO */}
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-10 shadow-sm z-0">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-400">🔍</span>
              <input 
                type="text" 
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar no inventário..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* ATALHOS LADO DIREITO */}
          <div className="flex items-center gap-6 pl-8">
            {/* Botão Subir Receita */}
            <button 
              onClick={() => router.push('/receita')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 rounded-2xl font-bold shadow-lg transition-all flex items-center gap-2 group"
            >
              <span className="text-xl group-hover:scale-110 transition">📤</span>
              <span className="hidden lg:block">Subir Receita</span>
            </button>
            
            {/* Ícone Guia de Retirada (Carrinho/Dispensa) */}
            <Link href="/carrinho" className="relative p-3 bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 rounded-2xl transition-all shadow-sm group">
              <span className="text-3xl group-hover:rotate-12 transition-transform block">📋</span>
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-black rounded-full h-6 w-6 flex items-center justify-center border-4 border-white">
                2
              </span>
            </Link>

            {/* Perfil do Usuário */}
            <div className="flex items-center gap-4 border-l border-gray-200 pl-6">
              <div className="text-right hidden md:block">
                <p className="text-sm font-black text-gray-800 leading-tight">Dispensa Popular</p>
                <p className="text-[10px] font-bold text-teal-500 uppercase">Administrador</p>
              </div>
              <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white font-black shadow-md border-4 border-gray-50">
                FP
              </div>
            </div>
          </div>
        </header>

        {/* LISTAGEM */}
        <section className="flex-1 overflow-y-auto p-10 bg-gray-50">
          <div className="mb-10 flex justify-between items-end">
            <div>
              <p className="text-teal-600 font-bold text-sm uppercase tracking-widest mb-1">Medicamentos do SUS</p>
              <h2 className="text-4xl font-black text-gray-800 tracking-tight">Estoque de Distribuição</h2>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl border border-gray-200 text-xs font-bold text-gray-500">
              Total: <span className="text-teal-600">{medicamentos.length} tipos</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {medicamentosFiltrados.map((med) => (
              <Link href={`/medicamento/${med.id}`} key={med.id} className="group">
                <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col h-full">
                  <div className="bg-gray-50 rounded-3xl h-48 flex items-center justify-center mb-6 overflow-hidden">
                    <img src={med.img} alt={med.nome} className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="font-black text-xl text-gray-800 mb-4 h-14 overflow-hidden leading-tight">{med.nome}</h3>
                  <div className="mt-auto flex items-center justify-between bg-teal-50 p-3 rounded-2xl">
                    <span className="text-[10px] font-black text-teal-700 uppercase">Qtd Disponível</span>
                    <span className="text-teal-600 font-black text-lg">{med.estoque}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}