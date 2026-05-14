// src/pages/Grupos.jsx
import React from 'react';

const Grupos = () => {
  return (
    /* CONTÊINER PAI: 
       - bg-sky-400: Define a cor azul céu do fundo.
       - min-h-screen: Garante que o azul cubra a tela toda.
       - flex items-center justify-center: Centraliza o card branco exatamente no meio.
       - bg-[url('...')] : No futuro, você pode colocar a imagem das nuvens aqui.
    */
    <div className="bg-sky-400 min-h-[calc(100vh-160px)] flex items-center justify-center p-6 bg-cover bg-center">
      
      {/* CARD CENTRAL:
         - bg-white/80: Fundo branco com 80% de opacidade (transparente).
         - backdrop-blur-md: Efeito de vidro embaçado (muito moderno!).
         - rounded-[40px]: Bordas bem arredondadas como no Figma.
         - shadow-2xl: Uma sombra profunda para dar profundidade.
         - flex-col md:flex-row: Empilha no celular, fica lado a lado no PC.
      */}
      <div className="bg-white/80 backdrop-blur-md rounded-[40px] shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden border border-white/20">
        
        {/* --- LADO ESQUERDO: Perfil do Usuário --- */}
        <div className="flex-1 p-10 flex flex-col items-center justify-center text-center border-b md:border-b-0 md:border-r border-gray-300/50">
          
          {/* Foto de Perfil */}
          <div className="w-32 h-32 rounded-full border-4 border-reage-blue p-1 mb-4">
             <div className="w-full h-full bg-blue-100 rounded-full overflow-hidden flex items-center justify-center">
                <span className="text-4xl">👤</span> {/* Aqui irá sua img */}
             </div>
          </div>

          <h2 className="text-xl font-bold text-reage-dark">Ana Maria</h2>
          <p className="text-sm text-gray-600 mb-8">Engenharia de Software</p>

          {/* Botões de Ação Rápida */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <button className="bg-reage-dark text-white py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-black transition-all">
              <span className="text-lg">+</span> Criar Grupo
            </button>
            <button className="bg-white border-2 border-gray-200 text-reage-dark py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
              <span className="text-lg">🔍</span> Buscar
            </button>
          </div>

          <button className="mt-6 flex items-center gap-2 text-reage-blue font-bold border-2 border-reage-blue/30 px-8 py-2 rounded-xl hover:bg-reage-blue/10 transition-all">
            <span>👥</span> Meus Grupos
          </button>
        </div>

        {/* --- LADO DIREITO: Menu de Opções --- */}
        <div className="flex-1 p-10">
          <h3 className="text-xl font-bold text-reage-dark mb-8 uppercase tracking-wide">O que você pode fazer aqui?</h3>
          
          {/* Grid de Ícones: 3 colunas */}
          <div className="grid grid-cols-3 gap-6">
            
            {/* Componente de Opção (Poderia ser um componente separado) */}
            <MenuOption icon="👥+" label="Criar novo grupo" />
            <MenuOption icon="🔔" label="Receber notificações" />
            <MenuOption icon="⚙️" label="Gerenciar grupos" />
            <MenuOption icon="📚" label="Ver materiais" />
            <MenuOption icon="💬" label="Buscar antigos" />
            <MenuOption icon="⭐" label="Marcar favoritos" />

          </div>
        </div>
      </div>
    </div>
  );
};

// Um pequeno componente interno para os ícones da direita
const MenuOption = ({ icon, label }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    <div className="w-16 h-16 bg-reage-dark rounded-xl flex items-center justify-center text-white text-2xl mb-2 group-hover:scale-110 group-hover:bg-reage-blue transition-all shadow-lg">
      {icon}
    </div>
    <p className="text-[10px] font-bold text-center text-reage-dark uppercase leading-tight">
      {label}
    </p>
  </div>
);

export default Grupos;