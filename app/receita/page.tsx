'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SubirReceita() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white border-b p-4 flex items-center justify-between px-8 shadow-sm">
        <button onClick={() => router.push('/dashboard')} className="text-teal-600 font-bold flex items-center hover:underline">
          ⬅️ Voltar ao Painel
        </button>
        <h1 className="text-xl font-bold text-teal-600 tracking-tighter">
          DROGARIA <span className="text-red-600">SHINHAMA</span>
        </h1>
      </header>

      <main className="flex-1 p-4 md:p-12 flex justify-center items-start">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-teal-600 p-8 text-white">
            <h2 className="text-3xl font-black">Subir Receita Médica</h2>
            <p className="text-teal-100 opacity-90">Preencha os dados da prescrição e anexe o documento.</p>
          </div>

          <form className="p-8 md:p-12 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">Nome do Paciente</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-teal-500 outline-none" placeholder="Nome Completo" />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">CPF</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-teal-500 outline-none" placeholder="000.000.000-00" />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">Data de Nascimento</label>
                <input type="date" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-teal-500 outline-none" />
              </div>

              {/* NOVOS CAMPOS ADICIONADOS */}
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">Nome do Médico</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-teal-500 outline-none" placeholder="Dr(a). Nome do Médico" />
              </div>
              <div>
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">UBS / Unidade Emissora</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-teal-500 outline-none" placeholder="Ex: UBS Vila Shinhama" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-black text-gray-400 uppercase mb-2">Endereço Residencial</label>
                <input type="text" className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-2xl focus:border-teal-500 outline-none" placeholder="Rua, Número, Bairro..." />
              </div>
            </div>

            {/* UPLOAD */}
            <div className="border-4 border-dashed border-gray-200 rounded-3xl p-10 flex flex-col items-center bg-gray-50 relative">
              <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={(e) => setFile(e.target.files?.[0] || null)} />
              <span className="text-4xl mb-2">{file ? "✅" : "📄"}</span>
              <p className="font-bold text-gray-500">{file ? file.name : "Arraste ou clique para subir a foto da receita"}</p>
            </div>

            <button type="button" onClick={() => router.push('/dashboard')} className="w-full bg-red-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-red-700 transition-all">
              ENVIAR RECEITA PARA ANÁLISE
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}