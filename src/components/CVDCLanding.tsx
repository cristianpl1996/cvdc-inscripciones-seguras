import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CVDCLanding = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            📚 Asegura tu lugar en los espacios académicos del CVDC 2025
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Este año, los espacios como los Foros de Especialidad y la Sala de la Industria tendrán control de ingreso por alta demanda. ¡Inscribirte con anticipación es la única forma de asegurar tu cupo!
          </p>
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('selector')}
            className="animate-pulse hover:animate-none"
          >
            Elige tu experiencia
          </Button>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="card-shadow border-2 border-primary/20 bg-gradient-to-r from-card to-muted">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl text-center text-primary flex items-center justify-center gap-3">
                ⚠️ Importante
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-center text-card-foreground leading-relaxed mb-6">
                En años anteriores, muchas personas se quedaron por fuera por sobrecupo. Por eso, este año, el Dr. Lugo habilitó un registro previo como medida organizativa para garantizar una mejor experiencia. Solo ingresan quienes estén inscritos.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('selector')}
                >
                  Inscribirme
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Selector Section */}
      <section id="selector" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🎯 ¿Qué quieres explorar?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Foros de Especialidad */}
            <Card className="card-shadow hover:shadow-lg smooth-transition hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  🧠 Foros de Especialidad
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Charlas clínicas por áreas (ortopedia, fisiatría, comportamiento…). Referentes nacionales e internacionales, espacio para preguntas, y una experiencia más íntima.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full"
                  onClick={() => scrollToSection('foros')}
                >
                  Ver foros e inscribirme
                </Button>
              </CardContent>
            </Card>

            {/* Sala de la Industria */}
            <Card className="card-shadow hover:shadow-lg smooth-transition hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-3">
                  🏢 Sala de la Industria
                </CardTitle>
                <CardDescription className="text-base text-muted-foreground">
                  Charlas prácticas lideradas por marcas, con foco en innovación, casos clínicos, terapias y herramientas actualizadas.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  size="lg" 
                  className="w-full"
                  onClick={() => scrollToSection('industria')}
                >
                  Ver agenda e inscribirme
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Foros de Especialidad */}
      <section id="foros" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🧠 Foros de Especialidad
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {/* Miércoles */}
              <AccordionItem value="miercoles" className="border border-border rounded-lg card-shadow bg-card">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Miércoles</h3>
                      <p className="text-sm text-muted-foreground">3 foros de especialidad</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    {/* Fisiatría */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🧍 Foro de Especialidad – Fisiatría
                        </h4>
                        <p className="text-sm text-muted-foreground">11:00–16:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/fisiatria', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>

                    {/* Etología */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🐾 Foro de Especialidad – Etología
                        </h4>
                        <p className="text-sm text-muted-foreground">14:00–16:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/etologia', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>

                    {/* Ortopedia */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🦴 Foro de Especialidad – Ortopedia
                        </h4>
                        <p className="text-sm text-muted-foreground">17:00–19:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/orthopedia', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Jueves */}
              <AccordionItem value="jueves" className="border border-border rounded-lg card-shadow bg-card">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Jueves</h3>
                      <p className="text-sm text-muted-foreground">2 foros de especialidad</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    {/* Neurología */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🧠 Foro de Especialidad – Neurología
                        </h4>
                        <p className="text-sm text-muted-foreground">11:00–16:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/neurologia', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>

                    {/* Oftalmología */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          👁️ Foro de Especialidad – Oftalmología
                        </h4>
                        <p className="text-sm text-muted-foreground">14:00–16:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/oftalmologia', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Viernes */}
              <AccordionItem value="viernes" className="border border-border rounded-lg card-shadow bg-card">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <h3 className="text-xl font-semibold text-primary">Viernes</h3>
                      <p className="text-sm text-muted-foreground">2 foros de especialidad</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    {/* Ortopedia */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🦴 Foro de Especialidad – Ortopedia
                        </h4>
                        <p className="text-sm text-muted-foreground">11:00–16:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/orthopedia', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>

                    {/* Neurología */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted/30 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-foreground flex items-center gap-2">
                          🧠 Foro de Especialidad – Neurología
                        </h4>
                        <p className="text-sm text-muted-foreground">14:00–16:00</p>
                      </div>
                      <Button 
                        variant="default" 
                        size="sm"
                        onClick={() => window.open('https://forms.gle/neurologia', '_blank')}
                      >
                        Inscribirme
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Sala de la Industria */}
      <section id="industria" className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            🏢 Sala de la Industria – Agenda por día
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Miércoles */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  📅 Miércoles
                </CardTitle>
                <CardDescription className="text-sm whitespace-pre-line">
                  Conferencias clínicas y técnicas ofrecidas por marcas aliadas.

                  🕒 10 charlas programadas. Conoce temas sobre nutrición, reproducción, tecnologías diagnósticas y más.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/miercolesindustria', '_blank')}
                >
                  Ver e inscribirme
                </Button>
              </CardContent>
            </Card>

            {/* Jueves */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  📅 Jueves
                </CardTitle>
                <CardDescription>
                  Charlas sobre anestesia, medicina interna, dermatología y soluciones de laboratorio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/juevesindustria', '_blank')}
                >
                  Ver e inscribirme
                </Button>
              </CardContent>
            </Card>

            {/* Viernes */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  📅 Viernes
                </CardTitle>
                <CardDescription>
                  Última jornada con temas de innovación, nuevas moléculas y herramientas digitales para la práctica veterinaria.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/viernesindustria', '_blank')}
                >
                  Ver e inscribirme
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            🚨 Recuerda
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Los cupos son limitados. Solo las personas inscritas podrán ingresar a cada espacio.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection('selector')}
          >
            Volver al inicio
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CVDCLanding;