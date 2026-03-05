'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DispensaDeMedicamentos() {
  const router = useRouter();

  // Dados simulados da receita que foi "subida"
  const dadosReceita = {
    paciente: "João da Silva Sauro",
    cpf: "123.456.789-00",
    medico: "Dra. Ana Beatriz (CRM 45678-SP)",
    ubs: "UBS Vila Mariana - Unidade II",
    dataEmissao: "04/03/2026"
  };

  const itensParaRetirada = [
    { id: 1, nome: "Amoxicilina 500mg", qtd: "2 caixas", img: "/medicamentos/amoxilina.png" },
    { id: 2, nome: "Dipirona Monoidratada", qtd: "1 frasco", img: "/medicamentos/dipirona.webp" }
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      <main className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* LADO ESQUERDO: LISTA DE MEDICAMENTOS */}
          <div className="lg:col-span-2">
            <button onClick={() => router.back()} className="mb-6 text-teal-600 font-bold">⬅️ Ajustar Pedido</button>
            <h2 className="text-4xl font-black text-gray-800 mb-8 tracking-tighter uppercase italic">Dispensa de Itens</h2>
            
            <div className="space-y-4">
              {itensParaRetirada.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 flex items-center gap-6">
                  <div className="w-24 h-24 bg-gray-50 rounded-2xl flex items-center justify-center overflow-hidden">
                    <img src={item.img} className="w-full h-full object-contain p-2" alt={item.nome} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-xl text-gray-800">{item.nome}</h3>
                    <p className="text-teal-600 font-bold uppercase text-xs">Quantidade: {item.qtd}</p>
                  </div>
                  <button className="text-red-200 hover:text-red-500 transition-colors">🗑️</button>
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: RESUMO DA GUIA/RECEITA */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2.5rem] shadow-2xl border border-gray-100 overflow-hidden sticky top-10">
              <div className="bg-teal-600 p-8 text-white">
                <h3 className="text-xl font-black uppercase tracking-widest">Guia de Retirada</h3>
                <p className="opacity-80 text-xs font-bold mt-1">SISTEMA ÚNICO DE SAÚDE (SUS)</p>
              </div>

              <div className="p-8 space-y-6">
                <div className="space-y-4 text-sm">
                  <div className="bg-gray-50 p-4 rounded-2xl">
                    <p className="text-[10px] text-gray-400 font-black uppercase">Paciente</p>
                    <p className="font-bold text-gray-800">{dadosReceita.paciente}</p>
                    <p className="text-xs text-gray-500">CPF: {dadosReceita.cpf}</p>
                  </div>

                  <div className="p-4">
                    <p className="text-[10px] text-gray-400 font-black uppercase">Prescrito por</p>
                    <p className="font-bold text-gray-800">{dadosReceita.medico}</p>
                  </div>

                  <div className="p-4 border-t border-gray-100">
                    <p className="text-[10px] text-gray-400 font-black uppercase">Origem (UBS)</p>
                    <p className="font-bold text-gray-800">{dadosReceita.ubs}</p>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
                  <div className="flex justify-between items-center text-teal-700">
                    <span className="font-black">TOTAL ITENS</span>
                    <span className="text-2xl font-black">{itensParaRetirada.length}</span>
                  </div>
                  <p className="text-[10px] text-teal-600 font-bold uppercase mt-2">Valor Cobrado: R$ 0,00 (Gratuito)</p>
                </div>

                <button 
                  onClick={() => {
                    alert("Dispensa realizada com sucesso! Estoque atualizado.");
                    router.push('/dashboard');
                  }}
                  className="w-full bg-red-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-red-700 transition-all shadow-lg active:scale-95"
                >
                  FINALIZAR DISPENSA
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}