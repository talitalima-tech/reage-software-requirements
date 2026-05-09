import Header from './components/Header';

function App() {
  return (
    // A classe bg-reage-bg usa o cinza claro que configuramos no tailwind.config
    <div className="min-h-screen bg-reage-bg font-sans">
      
      {/* O Header que acabamos de criar */}
      <Header />

      {/* Área principal do conteúdo */}
      <main className="max-w-7xl mx-auto p-6">
        
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-reage-dark">
            Olá, Talita! 👋
          </h2>
          <p className="text-gray-600">
            Confira os grupos de estudo disponíveis para suas disciplinas de Engenharia de Software.
          </p>
        </header>

        {/* Espaço reservado para os Cards de Grupos (Próximo passo) */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center h-48 border-dashed border-2 text-gray-400">
            <p>Os cards de grupos aparecerão aqui em breve...</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center h-48 border-dashed border-2 text-gray-400">
            <p>Espaço para grupos recomendados</p>
          </div>
        </section>

      </main>

      {/* Rodapé simples seguindo a paleta do REAGE */}
      <footer className="bg-reage-dark text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-sm font-medium">REAGE - Rede de Apoio a Grupos de Estudo</p>
          <p className="text-xs text-gray-400">Projeto Acadêmico de Engenharia de Software - UFC</p>
        </div>
      </footer>

    </div>
  );
}

export default App;