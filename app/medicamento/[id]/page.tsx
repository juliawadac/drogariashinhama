'use client';

import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

export default function DetalheMedicamento() {
  const router = useRouter();
  const params = useParams();

  const bancoDeDados = [
    { id: 1, nome: "Amoxicilina 500mg", estoqueTotal: "45 un", img: "/medicamentos/amoxilina.png", categoria: "Antibiótico", fabricante: "Medley", descricao: "Uso sob prescrição médica para tratamento de infecções." },
    { id: 2, nome: "Dipirona Monoidratada", estoqueTotal: "120 un", img: "/medicamentos/dipirona.webp", categoria: "Analgésico", fabricante: "EMS", descricao: "Indicado para dor e febre." },
    { 
      id: 3, 
      nome: "Ibuprofeno 600mg", 
      estoqueTotal: "32 un", 
      img: "/medicamentos/ibuprofeno.webp", 
      categoria: "Anti-inflamatório", 
      fabricante: "Eurofarma", 
      composicao: "Ibuprofeno 600mg",
      descricao: "Possui ação anti-inflamatória, analgésica e antitérmica. Indicado para o alívio de dores reumáticas, inflamações de garganta e dores intensas." 
    },
    { 
      id: 4, 
      nome: "Vitamina C 1g", 
      estoqueTotal: "85 un", 
      img: "/medicamentos/vitaminac.jpg", 
      categoria: "Suplemento", 
      fabricante: "Cimed", 
      composicao: "Ácido Ascórbico",
      descricao: "Suplemento vitamínico indicado como auxiliar do sistema imunológico e nas fases de crescimento ou dietas restritivas." 
    },
    { 
      id: 5, 
      nome: "Paracetamol 750mg", 
      estoqueTotal: "200 un", 
      img: "/medicamentos/paracetamol.webp", 
      categoria: "Analgésico", 
      fabricante: "Teuto", 
      composicao: "Paracetamol 750mg",
      descricao: "Indicado para a redução da febre e para o alívio temporário de dores leves a moderadas, tais como dores associadas a resfriados comuns e dor de dente." 
    },
    { 
      id: 6, 
      nome: "Loratadina 10mg", 
      estoqueTotal: "15 un", 
      img: "/medicamentos/loratadina.webp", 
      categoria: "Antialérgico", 
      fabricante: "Neo Química", 
      composicao: "Loratadina 10mg",
      descricao: "Antihistamínico de segunda geração que não causa sono. Indicado para o alívio dos sintomas de rinite alérgica e urticária." 
    }
  ];
    // ... adicione os outros aqui seguindo o mesmo padrão
  

  const medicamento = bancoDeDados.find(item => item.id === Number(params.id));

  if (!medicamento) return <div className="p-20 text-center font-bold">Item não localizado.</div>;

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* SIDEBAR */}
      <aside className="w-72 bg-white border-r border-gray-200 flex flex-col p-8">
        <h1 className="text-2xl font-black text-teal-600 mb-10">FARMÁCIA <br /><span className="text-red-600">POPULAR</span></h1>
        <nav className="space-y-4">
          <Link href="/dashboard" className="block p-4 text-teal-700 bg-teal-50 rounded-2xl font-bold">💊 Estoque</Link>
          <Link href="/pacientes" className="block p-4 text-gray-500 font-semibold">👤 Pacientes</Link>
        </nav>
      </aside>

      <main className="flex-1 p-10 overflow-y-auto">
        <button onClick={() => router.back()} className="mb-8 text-teal-600 font-bold flex items-center gap-2">⬅️ Voltar ao Estoque</button>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-10 h-[500px] flex items-center justify-center overflow-hidden">
            <img src={medicamento.img} alt={medicamento.nome} className="max-w-full max-h-full object-contain" />
          </div>

          <div className="space-y-8">
            <div>
              <span className="text-[10px] font-black bg-teal-100 text-teal-700 px-3 py-1 rounded-full uppercase tracking-widest">Distribuição Gratuita</span>
              <h1 className="text-5xl font-black text-gray-800 mt-4 leading-tight">{medicamento.nome}</h1>
              <p className="text-gray-400 font-bold mt-2 uppercase text-xs tracking-widest">Fabricante: {medicamento.fabricante}</p>
            </div>

            {/* CARD DE STATUS DE ESTOQUE (SUBSTITUIU O PREÇO) */}
            <div className="bg-teal-600 p-8 rounded-[2rem] text-white flex justify-between items-center shadow-lg">
              <div>
                <p className="text-teal-100 text-xs font-bold uppercase italic">Estoque Atual</p>
                <h2 className="text-4xl font-black">{medicamento.estoqueTotal}</h2>
              </div>
              <div className="bg-white/20 px-6 py-3 rounded-2xl font-black backdrop-blur-md">
                ITEM DISPONÍVEL
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm leading-relaxed text-gray-600">
              <h3 className="font-black text-gray-800 uppercase text-[10px] mb-2">Informações de Uso</h3>
              {medicamento.descricao}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}