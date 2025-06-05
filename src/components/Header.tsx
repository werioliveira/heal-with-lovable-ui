
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-physio-green">
          Dr. Ana Silva
        </div>
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('inicio')}
            className="text-gray-700 hover:text-physio-green transition-colors"
          >
            Início
          </button>
          <button
            onClick={() => scrollToSection('sobre')}
            className="text-gray-700 hover:text-physio-green transition-colors"
          >
            Sobre
          </button>
          <button
            onClick={() => scrollToSection('servicos')}
            className="text-gray-700 hover:text-physio-green transition-colors"
          >
            Serviços
          </button>
          <button
            onClick={() => scrollToSection('agendamento')}
            className="text-gray-700 hover:text-physio-green transition-colors"
          >
            Agendamento
          </button>
        </nav>
        <Button 
          onClick={() => scrollToSection('agendamento')}
          className="bg-physio-green hover:bg-physio-green-dark text-white"
        >
          Agendar Consulta
        </Button>
      </div>
    </header>
  );
};

export default Header;
