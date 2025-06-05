
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Fisioterapia Ortopédica",
      description: "Tratamento de lesões musculoesqueléticas, fraturas e disfunções do aparelho locomotor.",
      icon: "🦴"
    },
    {
      title: "Reabilitação Pós-Operatória",
      description: "Recuperação funcional após cirurgias ortopédicas, com protocolo personalizado.",
      icon: "🏥"
    },
    {
      title: "Fisioterapia Esportiva",
      description: "Prevenção e tratamento de lesões esportivas, otimização de performance.",
      icon: "⚽"
    },
    {
      title: "Pilates Terapêutico",
      description: "Fortalecimento do core, melhora da postura e consciência corporal.",
      icon: "🧘‍♀️"
    },
    {
      title: "RPG",
      description: "Reeducação Postural Global para correção de desequilíbrios posturais.",
      icon: "🏋️‍♀️"
    },
    {
      title: "Drenagem Linfática",
      description: "Técnica para redução de edemas e melhora da circulação linfática.",
      icon: "💆‍♀️"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-physio-black mb-4">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-physio-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma ampla gama de tratamentos fisioterapêuticos 
            personalizados para suas necessidades específicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-physio-black">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
