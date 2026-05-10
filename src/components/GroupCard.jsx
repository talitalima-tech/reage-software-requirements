import React from 'react';

// O componente recebe "props" (propriedades) para ser dinâmico
const GroupCard = ({ title, subject, members, time }) => {
  return (
    // Container principal: fundo branco, borda suave e efeito de sombra ao passar o mouse
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      
      {/* Etiqueta da Disciplina (Pequena e colorida com o azul do REAGE) */}
      <span className="text-[10px] font-bold uppercase tracking-wider text-reage-blue bg-reage-blue/10 px-2 py-1 rounded">
        {subject}
      </span>

      {/* Título do Grupo */}
      <h3 className="mt-3 text-lg font-bold text-reage-dark group-hover:text-reage-blue transition-colors">
        {title}
      </h3>

      {/* Informações detalhadas */}
      <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          {/* Simulação de ícone de relógio */}
          <span className="font-medium text-reage-dark">Horário:</span> {time}
        </div>
        <div className="flex items-center gap-2">
          {/* Simulação de ícone de pessoas */}
          <span className="font-medium text-reage-dark">Membros:</span> {members} alunos
        </div>
      </div>

      {/* Botão de Ação: Amarelo REAGE */}
      <button className="w-full mt-5 bg-reage-yellow hover:bg-yellow-400 text-reage-dark font-bold py-2 rounded-lg text-sm transition-colors">
        Entrar no Grupo
      </button>
    </div>
  );
};

export default GroupCard;