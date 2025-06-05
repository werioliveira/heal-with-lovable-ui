
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAgendamento = () => {
    const element = document.getElementById('agendamento');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <h1 className="text-5xl md:text-6xl font-bold text-physio-black leading-tight">
              Dra. Ana Silva
            </h1>
            <p className="text-xl text-physio-green font-semibold">
              Fisioterapeuta Especialista
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Mais de 10 anos de experiência em reabilitação e fisioterapia ortopédica. 
              Cuidado personalizado para sua recuperação e bem-estar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={scrollToAgendamento}
                className="bg-physio-green hover:bg-physio-green-dark text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Agende sua consulta agora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-physio-green text-physio-green hover:bg-physio-green hover:text-white px-8 py-3 text-lg font-semibold"
              >
                Saiba mais
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-physio-green to-physio-green-dark rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <div className="text-6xl text-physio-green">👩‍⚕️</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
