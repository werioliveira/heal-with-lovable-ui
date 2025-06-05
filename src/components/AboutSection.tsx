
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const specialties = [
    "Fisioterapia Ortopédica",
    "Reabilitação Pós-Operatória", 
    "Fisioterapia Esportiva",
    "Pilates Terapêutico",
    "RPG (Reeducação Postural Global)",
    "Drenagem Linfática"
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-physio-black mb-4">
            Sobre a Profissional
          </h2>
          <div className="w-20 h-1 bg-physio-green mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-physio-green mb-4">
              Experiência e Formação
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Graduada em Fisioterapia pela Universidade Federal, com pós-graduação em 
              Fisioterapia Ortopédica e Traumatológica. Possuo mais de 10 anos de experiência 
              no atendimento clínico, tendo trabalhado em hospitais renomados e clínicas 
              especializadas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Minha abordagem é baseada em evidências científicas, sempre priorizando 
              o cuidado humanizado e personalizado para cada paciente. Acredito que cada 
              pessoa é única e merece um tratamento individualizado.
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-physio-green">
              <h4 className="font-semibold text-physio-black mb-2">Missão</h4>
              <p className="text-gray-700">
                Proporcionar cuidado fisioterapêutico de excelência, promovendo a 
                recuperação funcional e melhorando a qualidade de vida dos meus pacientes 
                através de técnicas modernas e atendimento humanizado.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-physio-green mb-6">
              Especialidades
            </h3>
            <div className="grid gap-4">
              {specialties.map((specialty, index) => (
                <Card key={index} className="border-l-4 border-physio-green hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-physio-green rounded-full mr-3"></div>
                      <span className="font-medium text-physio-black">{specialty}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
