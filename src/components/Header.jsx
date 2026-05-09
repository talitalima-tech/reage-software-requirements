import React from 'react';

const Header = () => {
  return (
    // Define a largura total para o cabeçalho
    <header className="w-full font-sans">
      
      {/* Parte Superior: Azul REAGE - justify-between para espalhar os 3 blocos principais */}
      <div className="bg-reage-blue h-20 flex items-center justify-between px-8 text-white">
        
        {/* Bloco 1: Logo (Lado Esquerdo) */}
        <div className="flex-1"> {/* flex-1 ocupa espaço igual para ajudar a centralizar o vizinho */}
          <h1 className="text-2xl font-bold tracking-tighter">REAGE</h1>
        </div>

        {/* Bloco 2: Barra de Pesquisa (Centralizada e Maior) */}
        <div className="flex-[2] flex justify-center"> {/* flex-[2] faz este bloco ser o dobro dos outros, garantindo o centro */}
          <div className="relative w-full max-w-xl"> {/* max-w-xl aumenta o tamanho da barra horizontalmente */}
            <input 
              type="text" 
              placeholder="Pesquisar grupos de estudo..." 
              className="w-full bg-white/20 placeholder-white/70 rounded-full py-2 px-6 focus:outline-none focus:bg-white focus:text-reage-dark transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Bloco 3: Perfil (Lado Direito) */}
        <div className="flex-1 flex justify-end">
          <div className="flex items-center gap-2 cursor-pointer bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors">
            <span className="text-sm font-medium">Minha Conta</span>
          </div>
        </div>
      </div>

      {/* Parte Inferior: Menu Amarelo REAGE */}
      <nav className="bg-reage-yellow h-12 flex items-center justify-center px-8 shadow-md">
        {/* justify-center centraliza a lista; gap-12 aumenta o espaçamento entre os itens */}
        <ul className="flex gap-12 text-reage-dark font-semibold text-sm">
          {/* Cada item possui hover:scale para um feedback visual suave ao passar o mouse */}
          <li className="cursor-pointer hover:underline hover:scale-105 transition-transform">
            Home
          </li>
          <li className="cursor-pointer hover:underline font-bold border-b-2 border-reage-dark">
            Grupos
          </li>
          <li className="cursor-pointer hover:underline hover:scale-105 transition-transform">
            Cronograma
          </li>
          <li className="cursor-pointer hover:underline hover:scale-105 transition-transform">
            Materiais
          </li>
          <li className="cursor-pointer hover:underline hover:scale-105 transition-transform">
            Sobre
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;