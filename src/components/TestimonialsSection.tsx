
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Santos",
      text: "Excelente profissional! Após 3 meses de tratamento para minha lombalgia, estou completamente recuperada. Recomendo!",
      rating: 5,
      condition: "Lombalgia"
    },
    {
      name: "João Silva", 
      text: "A Dra. Ana me ajudou muito na recuperação da minha cirurgia no joelho. Atendimento humanizado e técnicas eficazes.",
      rating: 5,
      condition: "Pós-operatório"
    },
    {
      name: "Ana Costa",
      text: "Profissional dedicada e competente. O tratamento de RPG melhorou muito a minha postura e as dores nas costas.",
      rating: 5,
      condition: "Postura"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-physio-black mb-4">
            Depoimentos dos Pacientes
          </h2>
          <div className="w-20 h-1 bg-physio-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o que nossos pacientes dizem sobre os resultados dos tratamentos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-physio-black">{testimonial.name}</p>
                  <p className="text-sm text-physio-green">{testimonial.condition}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
