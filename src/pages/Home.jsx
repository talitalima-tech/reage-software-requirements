// src/pages/Home.jsx
import { SidebarCard } from '../components/SidebarCard';
import GroupCard from '../components/GroupCard';

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
      
      {/* 1. BANNER: Ocupa as 12 colunas (página toda) */}
      <div className="md:col-span-12 bg-gray-200 p-8 rounded-lg text-center text-gray-700 shadow-sm mb-4">
        <p className="text-lg font-medium">
          Bem-vindo(a) ao REAGE – Rede de Apoio a Grupos de Estudo! Aqui você organiza seus estudos, 
          se conecta com colegas e compartilha conhecimento de forma simples e colaborativa.
        </p>
      </div>

      {/* 2. COLUNA ESQUERDA (aside) - Ocupa 4 colunas */}
      <aside className="md:col-span-4 space-y-10">
        
        {/* Card: Dados do Estudante */}
        <SidebarCard title="Dados do Estudante">
          <div className="flex items-center gap-4 py-2">
            <div className="w-20 h-20 bg-blue-50 rounded-full border-2 border-reage-blue flex items-center justify-center overflow-hidden">
              <span className="text-3xl">👤</span> {/* Substituir por <img> depois */}
            </div>
            <div className="text-[11px] leading-relaxed">
              <p><strong>Matrícula:</strong> 55XXXX</p>
              <p><strong>Curso:</strong> Engenharia de Software - MT</p>
              <p><strong>Nível:</strong> Graduação</p>
              <p><strong>Status:</strong> Ativo</p>
              <p><strong>Entrada:</strong> 2024.1</p>
            </div>
          </div>
        </SidebarCard>

        {/* Card: Resumo de Participação */}
        <SidebarCard title="Resumo de Participação">
          <ul className="text-xs space-y-2 py-2">
            <li>• Grupos Criados: <strong>1</strong></li>
            <li>• Participação em Grupos: <strong>3</strong></li>
            <li>• Materiais Baixados: <strong>22</strong></li>
            <li className="text-reage-blue underline cursor-pointer font-bold mt-2">Gerar Arquivo PDF</li>
          </ul>
        </SidebarCard>

        {/* Card: Últimos Avisos */}
        <SidebarCard title="Últimos Avisos">
          <p className="text-xs text-gray-400 text-center py-4 italic">Não há nenhum aviso disponível</p>
        </SidebarCard>
      </aside>

      {/* 3. COLUNA DIREITA - Ocupa 8 colunas */}
      <section className="md:col-span-8 space-y-12">
        
        {/* Seção Meus Grupos */}
        <div>
          <h3 className="text-center font-bold text-reage-dark mb-6">Meus Grupos</h3>
          <div className="grid grid-cols-3 gap-4">
            {/* Exemplo de cards simplificados do print */}
            <div className="bg-reage-blue text-white p-4 rounded-lg text-center text-xs font-bold">
              Grupão de Requisitos de S.
            </div>
            <div className="bg-reage-blue text-white p-4 rounded-lg text-center text-xs font-bold">
              Vamos nos matar - POO
            </div>
            <div className="bg-reage-blue text-white p-4 rounded-lg text-center text-xs font-bold">
              LIP - Grupo do Ariel
            </div>
          </div>
        </div>

        {/* Seção Grupos Recomendados */}
        <div className="space-y-4">
          <h3 className="text-center font-bold text-reage-dark">Grupos Recomendados</h3>
          <div className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
            <div className="text-xs">
              <p className="font-bold text-reage-blue">Aulão de Probabilidade e Estatística - Monitoria</p>
              <p className="text-gray-500">Seg: 14h | Sala 01 | Unidade I</p>
            </div>
            <button className="bg-gray-400 text-white px-4 py-1 rounded text-xs font-bold">Participar</button>
          </div>
          <div className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
            <div className="text-xs">
              <p className="font-bold text-reage-blue">Aulão de Programação Orientada a Objetos - Monitoria</p>
              <p className="text-gray-500">Seg: 17h | Sala 02 | Unidade I</p>
            </div>
            <button className="bg-gray-400 text-white px-4 py-1 rounded text-xs font-bold">Participar</button>
          </div>
          <div className="bg-white border rounded-lg p-4 flex justify-between items-center shadow-sm">
            <div className="text-xs">
              <p className="font-bold text-reage-blue">Aulão de Projeto e Analise de Algoritmo - Monitoria</p>
              <p className="text-gray-500">Ter: 18h | Sala 03 | Unidade I</p>
            </div>
            <button className="bg-gray-400 text-white px-4 py-1 rounded text-xs font-bold">Participar</button>
          </div>
          
          {/* Adicione mais conforme o print... */}
        </div>

        {/* Tabela de Disciplinas */}
        <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
          <h3 className="bg-gray-50 p-3 text-center font-bold border-b text-reage-dark">Minhas Disciplinas</h3>
          <table className="w-full text-[11px]">
            <tbody className="divide-y">
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold italic">RUS0008 - PROBABILIDADE E ESTATÍSTICA</td>
                <td className="p-3 text-right text-gray-600">TER 08:00-10:00 / QUI 08:00-10:00</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold italic">RUS0300 - ALGORITMOS EM GRAFOS</td>
                <td className="p-3 text-right text-gray-600">SEG 10:00-12:00 / QUA 10:00-12:00</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold italic">RUS0500 - REQUISITOS DE SOFTWARE</td>
                <td className="p-3 text-right text-gray-600">TER 13:30-15:30 / QUI 13:30-15:30</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-3 font-bold italic">RUS0400 - REDES DE COMPUTADORES</td>
                <td className="p-3 text-right text-gray-600">SEG 08:00-10:00 / QUA 08:00-10:00</td>
              </tr>
              {/* Adicione as outras linhas do print... */}
            </tbody>
          </table>
        </div>

      </section>
    </main>
  );
};

export default Home;