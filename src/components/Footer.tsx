
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-physio-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-physio-green">
              Informações de Contato
            </h3>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center">
                <span className="mr-2">📞</span>
                (11) 9999-9999
              </p>
              <p className="flex items-center">
                <span className="mr-2">✉️</span>
                contato@draanasilva.com.br
              </p>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Rua das Flores, 123 - São Paulo, SP
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-physio-green">
              Horário de Funcionamento
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Domingo: Fechado</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-physio-green">
              Redes Sociais
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/draanasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-physio-green hover:bg-physio-green-light rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-physio-green hover:bg-physio-green-light rounded-full transition-colors"
              >
                <MessageCircle size={20} />
              </a>
            </div>
            <p className="text-gray-300 mt-4 text-sm">
              Siga-nos nas redes sociais para dicas de saúde e exercícios.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Dra. Ana Silva - Fisioterapia. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            CREFITO-3: 12345-F | CRM: 123456
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
