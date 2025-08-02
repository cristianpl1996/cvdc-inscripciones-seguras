import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, UserCheck, AlertCircle, Bone, Brain, Eye, Heart, Activity } from "lucide-react";

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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            🧠 Foros de Especialidad
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Cupos <span className="text-primary font-bold">MUY LIMITADOS</span> • Solo con registro previo
          </p>
          
          {/* Miércoles */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6 flex items-center justify-center gap-3">
              📅 Miércoles
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Fisiatría */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Activity className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Fisiatría</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        11:00–16:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Rehabilitación, fisioterapia animal y medicina del movimiento
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-blue-600 hover:bg-blue-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/fisiatria', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>

              {/* Etología */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-green-500 bg-gradient-to-br from-green-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-lg">
                      <Brain className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Etología</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        14:00–16:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Trastornos de conducta, bienestar y protocolos terapéuticos
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-green-600 hover:bg-green-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/etologia', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>

              {/* Ortopedia */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Bone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Ortopedia</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        17:00–19:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Abordajes quirúrgicos, biomecánica y casos clínicos ortopédicos
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-orange-600 hover:bg-orange-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/orthopedia', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Jueves */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6 flex items-center justify-center gap-3">
              📅 Jueves
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Neurología */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Neurología</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        11:00–16:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Casos clínicos neurológicos y diagnóstico avanzado
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-purple-600 hover:bg-purple-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/neurologia', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>

              {/* Oftalmología */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-cyan-500 bg-gradient-to-br from-cyan-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-cyan-100 rounded-lg">
                      <Eye className="h-6 w-6 text-cyan-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Oftalmología</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        14:00–16:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Cirugía ocular, diagnóstico y terapias especializadas
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-cyan-600 hover:bg-cyan-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/oftalmologia', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Viernes */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-6 flex items-center justify-center gap-3">
              📅 Viernes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Ortopedia */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Bone className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Ortopedia</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        11:00–16:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Abordajes quirúrgicos, biomecánica y casos clínicos ortopédicos
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-orange-600 hover:bg-orange-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/orthopedia', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>

              {/* Neurología */}
              <Card className="card-shadow hover:shadow-xl smooth-transition border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50/50 to-card hover:-translate-y-1">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Brain className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg font-bold text-foreground">Neurología</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        14:00–16:00
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm text-muted-foreground">
                    Casos clínicos neurológicos y diagnóstico avanzado
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    variant="default" 
                    className="w-full bg-purple-600 hover:bg-purple-700 font-bold animate-pulse hover:animate-none"
                    onClick={() => window.open('https://forms.gle/neurologia', '_blank')}
                  >
                    <UserCheck className="h-4 w-4 mr-2" />
                    ¡Reservar Cupo!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mensaje de urgencia */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary bg-gradient-to-r from-primary/5 to-primary/10">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <AlertCircle className="h-6 w-6 text-primary animate-pulse" />
                  <h4 className="text-lg font-bold text-primary">¡ATENCIÓN!</h4>
                  <AlertCircle className="h-6 w-6 text-primary animate-pulse" />
                </div>
                <p className="text-foreground font-medium">
                  Solo se permite el ingreso a personas con <span className="text-primary font-bold">registro previo confirmado</span>. 
                  Los cupos se agotan rápidamente cada año.
                </p>
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