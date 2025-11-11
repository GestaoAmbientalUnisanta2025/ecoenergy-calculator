import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { 
  Zap, 
  TrendingDown, 
  Leaf, 
  Award,
  Calculator,
  BarChart3,
  Target,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background z-0" />
        
        <div className="container relative z-10 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Gestão Inteligente de Energia</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              <span className="text-gradient-eco">Economize Energia,</span>
              <br />
              <span className="text-foreground">Preserve o Planeta</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Calcule seu consumo energético, identifique oportunidades de economia 
              e contribua para um futuro mais sustentável com nossa plataforma inteligente.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/calculator">
                <Button size="lg" className="glow-eco group">
                  <Calculator className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  Calcular Consumo
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="outline">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Ver Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all hover:glow-eco">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <TrendingDown className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-extrabold text-gradient-eco mb-2">30%</div>
              <p className="text-lg font-semibold text-foreground mb-1">Economia Média</p>
              <p className="text-sm text-muted-foreground">
                Redução no consumo de energia
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all hover:glow-eco">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-extrabold text-gradient-eco mb-2">-CO₂</div>
              <p className="text-lg font-semibold text-foreground mb-1">Menos Emissões</p>
              <p className="text-sm text-muted-foreground">
                Contribua para o meio ambiente
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect border-primary/20 hover:border-primary/40 transition-all hover:glow-eco">
            <CardContent className="p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-4xl font-extrabold text-gradient-eco mb-2">100%</div>
              <p className="text-lg font-semibold text-foreground mb-1">Conscientização</p>
              <p className="text-sm text-muted-foreground">
                Decisões mais sustentáveis
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient-eco">Funcionalidades</span> Principais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ferramentas completas para análise e otimização do seu consumo energético
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="glass-effect hover:glow-eco transition-all">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Calculadora Avançada
              </h3>
              <p className="text-sm text-muted-foreground">
                Calcule o consumo por cômodo e aparelho com precisão
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:glow-eco transition-all">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Visualizações Interativas
              </h3>
              <p className="text-sm text-muted-foreground">
                Gráficos e dashboards para análise detalhada
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:glow-eco transition-all">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Metas de Economia
              </h3>
              <p className="text-sm text-muted-foreground">
                Defina objetivos e acompanhe seu progresso
              </p>
            </CardContent>
          </Card>

          <Card className="glass-effect hover:glow-eco transition-all">
            <CardContent className="p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                Sugestões Inteligentes
              </h3>
              <p className="text-sm text-muted-foreground">
                IA para recomendações personalizadas de economia
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <Card className="glass-effect glow-eco border-primary/30">
          <CardContent className="p-12 text-center">
            <Leaf className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para <span className="text-gradient-eco">Economizar</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Comece agora a calcular seu consumo e descubra quanto você pode economizar
            </p>
            <Link href="/calculator">
              <Button size="lg" className="glow-eco">
                <Calculator className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
