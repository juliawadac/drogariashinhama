'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function GestaoUBS() {
  const router = useRouter();
  const [abaAtiva, setAbaAtiva] = useState<'ubs' | 'medico'>('ubs');

  // Dados fictícios para visualização
  const [unidades, setUnidades] = useState([
    { id: 1, nome: "UBS Vila Shinhama", endereco: "Rua das Oliveiras, 450", medicos: [
      { nome: "Dr. Ricardo Almeida", especialidade: "Clínico Geral" },
      { nome: "Dra. Helena Costa", especialidade: "Pediatra" }
    ]},
    { id: 2, nome: "Posto de Saúde Central", endereco: "Av. Brasil, 1000", medicos: [
      { nome: "Dr. Arnaldo Rocha", especialidade: "Cardiologista" }
    ]},
  ]);

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col shadow-lg z-10">
        <div className="p-8">
          <h1 className="text-2xl font-black text-teal-600 tracking-tighter uppercase">
            Farmácia <br /><span className="text-red-600">Popular</span>
          </h1>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <Link href="/dashboard" className="flex items-center p-4 text-gray-500 hover:bg-gray-50 rounded-2xl font-semibold transition-all">
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

      {/* CONTEÚDO PRINCIPAL */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-teal-600 font-bold text-xs uppercase tracking-widest mb-1">Configurações do Sistema</p>
              <h2 className="text-4xl font-black text-gray-800">Gestão de Unidades</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* FORMULÁRIO DE CADASTRO (ESQUERDA) */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100">
                <div className="flex mb-6 bg-gray-100 p-1 rounded-xl">
                  <button 
                    onClick={() => setAbaAtiva('ubs')}
                    className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all ${abaAtiva === 'ubs' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400'}`}
                  >UBS</button>
                  <button 
                    onClick={() => setAbaAtiva('medico')}
                    className={`flex-1 py-2 text-[10px] font-black rounded-lg transition-all ${abaAtiva === 'medico' ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-400'}`}
                  >MÉDICO</button>
                </div>

                {abaAtiva === 'ubs' ? (
                  <form className="space-y-4">
                    <h3 className="font-bold text-gray-800 mb-4">Cadastrar Nova UBS</h3>
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Nome da Unidade</label>
                      <input type="text" placeholder="Ex: UBS Centro" className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-teal-500" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Endereço</label>
                      <input type="text" placeholder="Rua, Bairro, Número" className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-teal-500" />
                    </div>
                    <button className="w-full bg-teal-600 text-white font-black py-3 rounded-xl shadow-lg hover:bg-teal-700 transition-all active:scale-95">
                      SALVAR UNIDADE
                    </button>
                  </form>
                ) : (
                  <form className="space-y-4">
                    <h3 className="font-bold text-gray-800 mb-4">Vincular Médico</h3>
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Selecionar UBS</label>
                      <select className="w-full p-3 bg-gray-50 border rounded-xl outline-none cursor-pointer">
                        {unidades.map(u => <option key={u.id}>{u.nome}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Nome do Médico</label>
                      <input type="text" placeholder="Dr. Nome Sobrenome" className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-teal-500" />
                    </div>
                    <div>
                      <label className="block text-[9px] font-black text-gray-400 uppercase mb-1">Especialização</label>
                      <input type="text" placeholder="Ex: Clínico Geral" className="w-full p-3 bg-gray-50 border rounded-xl outline-none focus:border-teal-500" />
                    </div>
                    <button className="w-full bg-red-600 text-white font-black py-3 rounded-xl shadow-lg hover:bg-red-700 transition-all active:scale-95">
                      CADASTRAR MÉDICO
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* LISTAGEM (DIREITA) */}
            <div className="lg:col-span-2 space-y-4">
              {unidades.map((ubs) => (
                <div key={ubs.id} className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                  <div className="p-6 flex justify-between items-center bg-white">
                    <div>
                      <h4 className="text-xl font-black text-gray-800">{ubs.nome}</h4>
                      <p className="text-sm text-gray-400 flex items-center">
                        <span className="mr-1">📍</span> {ubs.endereco}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-black text-teal-600 bg-teal-50 px-3 py-1 rounded-full uppercase">
                        {ubs.medicos.length} Médicos ativos
                      </span>
                    </div>
                  </div>
                  
                  {/* Lista de Médicos dentro da UBS */}
                  <div className="bg-gray-50/50 p-6 border-t border-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {ubs.medicos.map((med, idx) => (
                      <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center group hover:border-teal-200 transition-all">
                        <div className="w-10 h-10 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center font-bold mr-4">
                          👨‍⚕️
                        </div>
                        <div>
                          <p className="font-bold text-gray-800 leading-tight group-hover:text-teal-600">{med.nome}</p>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{med.especialidade}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}