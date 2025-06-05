
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

const AppointmentSection = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: ""
  });

  const timeSlots = [
    "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    console.log("Dados do agendamento:", {
      date: selectedDate,
      time: selectedTime,
      ...formData
    });

    toast({
      title: "Agendamento realizado!",
      description: "Entraremos em contato em breve para confirmar sua consulta.",
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime("");
    setFormData({ name: "", phone: "", email: "", reason: "" });
  };

  const isDateDisabled = (date: Date) => {
    const today = new Date();
    const dayOfWeek = date.getDay();
    return date < today || dayOfWeek === 0 || dayOfWeek === 6; // Disable past dates and weekends
  };

  return (
    <section id="agendamento" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-physio-black mb-4">
            Agende sua Consulta
          </h2>
          <div className="w-20 h-1 bg-physio-green mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o melhor dia e horário para sua consulta. 
            Atendimento de segunda a sexta-feira.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardHeader className="bg-physio-green text-white rounded-t-lg">
              <CardTitle className="text-2xl text-center">
                Sistema de Agendamento Online
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Calendar Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-physio-black mb-4">
                      Escolha a Data
                    </h3>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-12",
                            !selectedDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {selectedDate ? (
                            format(selectedDate, "PPP", { locale: ptBR })
                          ) : (
                            <span>Selecione uma data</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={isDateDisabled}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>

                    {/* Time Slots */}
                    {selectedDate && (
                      <div>
                        <h4 className="text-md font-medium text-physio-black mb-3">
                          Horários Disponíveis
                        </h4>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <Button
                              key={time}
                              type="button"
                              variant={selectedTime === time ? "default" : "outline"}
                              className={cn(
                                "h-10 text-sm",
                                selectedTime === time 
                                  ? "bg-physio-green hover:bg-physio-green-dark text-white" 
                                  : "hover:bg-physio-green hover:text-white"
                              )}
                              onClick={() => setSelectedTime(time)}
                            >
                              {time}
                            </Button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Form Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-physio-black mb-4">
                      Dados do Paciente
                    </h3>
                    
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Seu nome completo"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="reason">Motivo da Consulta</Label>
                      <Textarea
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        placeholder="Descreva brevemente o motivo da consulta..."
                        className="mt-1 min-h-[100px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-physio-green hover:bg-physio-green-dark text-white py-3 text-lg font-semibold"
                  >
                    Confirmar Agendamento
                  </Button>
                  <p className="text-sm text-gray-500 text-center mt-2">
                    * Campos obrigatórios
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
