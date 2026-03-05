'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CadastroMedicamento() {
  const router = useRouter();
  const [abaAtiva, setAbaAtiva] = useState<'produto' | 'lote'>('produto');
  
  // Estados para o Produto
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Função para processar a prévia da imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-white border-b p-4 flex items-center justify-between px-8 shadow-sm">
        <button 
          onClick={() => router.push('/dashboard')} 
          className="text-teal-600 font-bold flex items-center hover:text-teal-800 transition"
        >
          <span className="mr-2">⬅️</span> Voltar ao Painel
        </button>
        <h1 className="text-xl font-bold text-teal-600 tracking-tighter">
          DROGARIA <span className="text-red-600">SHINHAMA</span>
        </h1>
      </header>

      <main className="flex-1 p-4 md:p-12 flex justify-center">
        <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          
          {/* SELETOR DE ABAS */}
          <div className="flex border-b border-gray-100 bg-gray-50">
            <button 
              onClick={() => setAbaAtiva('produto')} 
              className={`flex-1 py-5 font-black text-sm uppercase tracking-widest transition-all ${
                abaAtiva === 'produto' 
                ? "bg-white text-teal-600 border-t-4 border-teal-600" 
                : "text-gray-400 hover:text-gray-600"
              }`}
            >
              📦 Novo Medicamento
            </button>
            <button 
              onClick={() => setAbaAtiva('lote')} 
              className={`flex-1 py-5 font-black text-sm uppercase tracking-widest transition-all ${
                abaAtiva === 'lote' 
                ? "bg-white text-teal-600 border-t-4 border-teal-600" 
                : "text-gray-400 hover:text-gray-600"
              }`}
            >
              🔢 Cadastrar Lote
            </button>
          </div>

          <div className="p-8 md:p-12">
            {abaAtiva === 'produto' ? (
              /* FORMULÁRIO DE NOVO MEDICAMENTO */
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  
                  {/* COLUNA DA FOTO */}
                  <div className="flex flex-col items-center space-y-4">
                    <label className="block text-[10px] font-black text-gray-400 uppercase">Foto do Produto</label>
                    <div className="relative w-full aspect-square bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl flex items-center justify-center overflow-hidden hover:border-teal-400 transition-colors group">
                      {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <div className="text-center p-4">
                          <span className="text-4xl block mb-2">📸</span>
                          <p className="text-[10px] font-bold text-gray-400 uppercase">Clique para enviar</p>
                        </div>
                      )}
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={handleImageChange}
                        className="absolute inset-0 opacity-0 cursor-pointer" 
                      />
                    </div>
                    {imagePreview && (
                      <button 
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="text-[10px] font-bold text-red-500 uppercase hover:underline"
                      >
                        Remover Foto
                      </button>
                    )}
                  </div>

                  {/* COLUNA DOS DADOS DO MEDICAMENTO */}
                  <div className="md:col-span-2 grid grid-cols-1 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Nome do Medicamento</label>
                      <input type="text" placeholder="Ex: Amoxicilina 500mg" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Fabricante</label>
                        <input type="text" placeholder="Ex: Medley, EMS" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Composição</label>
                        <input type="text" placeholder="Princípio Ativo" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Descrição</label>
                      <textarea rows={4} placeholder="Breve descrição, indicações e uso..." className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none resize-none"></textarea>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black py-4 rounded-2xl shadow-lg transition-all active:scale-95">
                  SALVAR NOVO MEDICAMENTO
                </button>
              </form>
            ) : (
              /* FORMULÁRIO DE CADASTRO DE LOTE */
              <form className="space-y-6">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <p className="text-sm text-yellow-700 font-bold">
                    ⚠️ Atenção: O lote deve ser vinculado a um medicamento já cadastrado.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Selecionar Medicamento</label>
                    <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none appearance-none cursor-pointer">
                      <option>Selecione um item do inventário...</option>
                      <option>Amoxicilina 500mg</option>
                      <option>Dipirona Monoidratada</option>
                      <option>Ibuprofeno 600mg</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Número do Lote</label>
                    <input type="text" placeholder="Ex: ABC1234" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none" />
                  </div>
                  
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Quantidade de Medicamentos</label>
                    <input type="number" placeholder="0" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none" />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-black text-gray-400 uppercase mb-1">Data de Validade</label>
                    <input type="date" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:border-teal-500 outline-none" />
                  </div>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-black py-4 rounded-2xl shadow-lg shadow-red-100 transition-all active:scale-95">
                  REGISTRAR ENTRADA DE LOTE
                </button>
              </form>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}