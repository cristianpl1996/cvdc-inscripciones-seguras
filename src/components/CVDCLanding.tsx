import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ortopedia */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  🦴 Ortopedia – Miércoles
                </CardTitle>
                <CardDescription>
                  Abordajes quirúrgicos, biomecánica y casos clínicos ortopédicos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full" 
                  onClick={() => window.open('https://forms.gle/orthopedia', '_blank')}
                >
                  Inscribirme
                </Button>
              </CardContent>
            </Card>

            {/* Fisiatría */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  🧍 Fisiatría – Miércoles
                </CardTitle>
                <CardDescription>
                  Rehabilitación, fisioterapia animal y medicina del movimiento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/fisiatria', '_blank')}
                >
                  Inscribirme
                </Button>
              </CardContent>
            </Card>

            {/* Etología */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  🐾 Etología – Jueves
                </CardTitle>
                <CardDescription>
                  Trastornos de conducta, bienestar y protocolos terapéuticos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/etologia', '_blank')}
                >
                  Inscribirme
                </Button>
              </CardContent>
            </Card>

            {/* Cardiología */}
            <Card className="card-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  ❤️ Cardiología – Viernes
                </CardTitle>
                <CardDescription>
                  Casos clínicos, interpretación ecocardiográfica y manejo avanzado.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="default" 
                  className="w-full"
                  onClick={() => window.open('https://forms.gle/cardiologia', '_blank')}
                >
                  Inscribirme
                </Button>
              </CardContent>
            </Card>
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