'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PacientesPage() {
  const router = useRouter();
  
  const [pacientes] = useState([
    { 
      id: 1, 
      nome: "João Silva de Oliveira", 
      cpf: "123.456.789-00", 
      nascimento: "15/05/1985", 
      medico: "Dr. Ricardo Almeida",
      ubs: "UBS Shinhama Leste",
      endereco: "Rua das Flores, 123 - Centro",
      dataEnvio: "18/02/2026",
      status: "Pendente",
      fotoReceita: "📄"
    },
    { 
      id: 2, 
      nome: "Maria Souza Santos", 
      cpf: "987.654.321-11", 
      nascimento: "22/10/1990", 
      medico: "Dra. Helena Costa",
      ubs: "Posto de Saúde Central",
      endereco: "Av. Brasil, 500 - Apt 12",
      dataEnvio: "19/02/2026",
      status: "Aprovada",
      fotoReceita: "📄"
    },
  ]);

  const [pacienteSelecionado, setPacienteSelecionado] = useState(pacientes[0]);

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

      {/* LISTA ESQUERDA */}
      <div className="w-96 bg-white border-r border-gray-100 flex flex-col">
        <div className="p-6 border-b bg-gray-50/50 font-black text-gray-800 uppercase tracking-widest text-sm">
          Fila de Receitas
        </div>
        <div className="flex-1 overflow-y-auto">
          {pacientes.map((p) => (
            <div 
              key={p.id}
              onClick={() => setPacienteSelecionado(p)}
              className={`p-6 border-b cursor-pointer transition-all ${
                pacienteSelecionado.id === p.id ? "bg-teal-50 border-l-4 border-l-teal-600" : "hover:bg-gray-50"
              }`}
            >
              <p className="font-bold text-gray-800">{p.nome}</p>
              <p className="text-[10px] text-gray-400 font-bold uppercase">{p.ubs}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DETALHES À DIREITA */}
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8 border-b pb-6">
            <h3 className="text-3xl font-black text-gray-800">{pacienteSelecionado.nome}</h3>
            <span className="px-4 py-1 bg-yellow-100 text-yellow-600 rounded-full text-[10px] font-black uppercase">
              {pacienteSelecionado.status}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* BLOCO DADOS PESSOAIS */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <p className="text-[10px] font-black text-teal-600 uppercase border-b pb-2">Informações do Paciente</p>
                <div>
                  <label className="text-[9px] font-bold text-gray-400 uppercase">CPF / Nascimento</label>
                  <p className="font-bold">{pacienteSelecionado.cpf} • {pacienteSelecionado.nascimento}</p>
                </div>
                <div>
                  <label className="text-[9px] font-bold text-gray-400 uppercase">Endereço</label>
                  <p className="font-bold text-sm text-gray-600">{pacienteSelecionado.endereco}</p>
                </div>
              </div>

              {/* BLOCO MÉDICO E UBS (ATUALIZADO) */}
              <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
                <p className="text-[10px] font-black text-red-600 uppercase border-b pb-2">Dados da Prescrição</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] font-bold text-gray-400 uppercase">Médico Prescritor</label>
                    <p className="font-bold text-gray-800 leading-tight">{pacienteSelecionado.medico}</p>
                  </div>
                  <div>
                    <label className="text-[9px] font-bold text-gray-400 uppercase">UBS / Unidade</label>
                    <p className="font-bold text-gray-800 leading-tight">{pacienteSelecionado.ubs}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* IMAGEM DA RECEITA */}
            <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center">
              <div className="w-full flex-1 bg-gray-100 rounded-2xl flex items-center justify-center text-8xl min-h-[350px]">
                {pacienteSelecionado.fotoReceita}
              </div>
              <button className="mt-4 w-full bg-teal-600 text-white font-black py-4 rounded-xl hover:bg-teal-700 transition shadow-lg">
                VALIDAR E LIBERAR VENDA
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}