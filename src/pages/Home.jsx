// src/pages/Home.jsx
import { SidebarCard } from '../components/SidebarCard';
import GroupCard from '../components/GroupCard';

const Home = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
      
      {/* COLUNA ESQUERDA - Sidebar (4 colunas) */}
      <aside className="md:col-span-4 space-y-8">
        <SidebarCard title="Dados do Estudante">
          {/* Conteúdo interno do card de dados */}
          <div className="flex items-center gap-4">
             <div className="w-16 h-16 rounded-full border-2 border-reage-blue" />
             <div className="text-xs">...infos aqui...</div>
          </div>
        </SidebarCard>

        <SidebarCard title="Resumo de Participação do Usuário">
          {/* Lista de estatísticas */}
        </SidebarCard>
      </aside>

      {/* COLUNA DIREITA - Conteúdo Principal (8 colunas) */}
      <section className="md:col-span-8 space-y-6">
        {/* Banner Cinza */}
        <div className="bg-gray-200 p-8 rounded-lg text-center text-sm">
           Bem-vindo(a) ao REAGE...
        </div>

        <div>
          <h2 className="text-center font-bold mb-4">Meus Grupos</h2>
          <div className="flex justify-center gap-4">
             {/* Aqui você usaria um slider ou os GroupCards */}
          </div>
        </div>

        {/* Tabela de Disciplinas */}
        <div className="bg-white rounded-lg shadow">
           <h3 className="p-2 bg-gray-100 text-center font-bold">Minhas Disciplinas</h3>
           {/* Mapear linhas da tabela aqui */}
        </div>
      </section>
    </main>
  );
};

export default Home;