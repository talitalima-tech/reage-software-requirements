import React from 'react';

const Footer = () => {
  // Pegamos o ano atual dinamicamente para o rodapé estar sempre atualizado
  const currentYear = new Date().getFullYear();

  return (
    // bg-reage-dark para dar o contraste necessário com o resto da página clara
    <footer className="bg-reage-dark text-white pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Grid de Conteúdo do Rodapé */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          
          {/* Coluna 1: Sobre o Projeto */}
          <div>
            <h3 className="text-reage-yellow text-xl font-bold mb-4">REAGE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A Rede de Apoio a Grupos de Estudo é uma plataforma desenvolvida para facilitar 
              a colaboração acadêmica entre alunos da UFC, promovendo a troca de conhecimentos 
              e materiais.
            </p>
          </div>
          <div>
            <h3 className="text-reage-yellow text-xl font-bold mb-4">Sobre</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quem Somos
            </p>
          </div>

          {/* Coluna 2: Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4 border-b border-white/10 pb-2">Ajuda</h4>
            <ul className="text-gray-400 text-sm space-y-2">
              <li className="hover:text-reage-yellow cursor-pointer transition-colors">Central de ajuda</li>
              <li className="hover:text-reage-yellow cursor-pointer transition-colors">Segunrança e Privacidade</li>
              <li className="hover:text-reage-yellow cursor-pointer transition-colors">Politicas de Privacidade</li>
              <li className="hover:text-reage-yellow cursor-pointer transition-colors">Acessibilidade</li>
            </ul>
          </div>
        </div>

        {/* Linha Final: Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} REAGE. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacidade</span>
            <span className="hover:text-white cursor-pointer transition-colors">Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;