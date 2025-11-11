import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Lightbulb,
  Zap,
  Droplet,
  Wind,
  Sun,
  Leaf,
  TrendingDown,
  DollarSign,
} from "lucide-react";

interface Tip {
  icon: React.ReactNode;
  title: string;
  category: string;
  savings: string;
  difficulty: "Fácil" | "Médio" | "Avançado";
  description: string;
  tips: string[];
}

const TIPS_DATA: Tip[] = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Iluminação Eficiente",
    category: "Iluminação",
    savings: "Até 80%",
    difficulty: "Fácil",
    description: "Troque lâmpadas incandescentes por LED e aproveite luz natural",
    tips: [
      "Substitua todas as lâmpadas por LED (consomem 80% menos)",
      "Apague luzes ao sair de ambientes",
      "Use sensores de presença em corredores e banheiros",
      "Aproveite luz natural durante o dia",
      "Pinte paredes com cores claras para refletir mais luz",
    ],
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Climatização Inteligente",
    category: "Ar-condicionado",
    savings: "Até 30%",
    difficulty: "Médio",
    description: "Otimize o uso de ar-condicionado e ventiladores",
    tips: [
      "Mantenha ar-condicionado entre 23-24°C (cada grau a menos aumenta 6% o consumo)",
      "Limpe filtros mensalmente",
      "Feche portas e janelas durante o uso",
      "Use ventiladores de teto para circular o ar",
      "Desligue 30 minutos antes de sair (ambiente permanece fresco)",
    ],
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Aquecimento de Água",
    category: "Chuveiro",
    savings: "Até 40%",
    difficulty: "Fácil",
    description: "Reduza o consumo do chuveiro elétrico, um dos maiores vilões",
    tips: [
      "Tome banhos mais curtos (5-10 minutos)",
      "Use chuveiro na posição verão sempre que possível",
      "Considere aquecedor solar para reduzir uso do chuveiro elétrico",
      "Desligue o chuveiro ao se ensaboar",
      "Instale chuveiros com tecnologia de economia de água",
    ],
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Geladeira e Freezer",
    category: "Refrigeração",
    savings: "Até 25%",
    difficulty: "Fácil",
    description: "Otimize o uso dos aparelhos que ficam ligados 24h",
    tips: [
      "Mantenha temperatura entre 3-5°C (geladeira) e -15°C (freezer)",
      "Não abra a porta sem necessidade",
      "Aguarde alimentos esfriarem antes de guardar",
      "Limpe as serpentinas traseiras a cada 6 meses",
      "Verifique borrachas de vedação regularmente",
    ],
  },
  {
    icon: <Sun className="w-6 h-6" />,
    title: "Eletrodomésticos em Standby",
    category: "Eletrônicos",
    savings: "Até 15%",
    difficulty: "Fácil",
    description: "Elimine o consumo fantasma de aparelhos em standby",
    tips: [
      "Desligue aparelhos da tomada quando não estiver usando",
      "Use réguas com interruptor para desligar vários aparelhos de uma vez",
      "Configure modo de economia de energia em TVs e computadores",
      "Desconecte carregadores quando não estiverem carregando",
      "Use timers para desligar aparelhos automaticamente",
    ],
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Máquina de Lavar",
    category: "Lavanderia",
    savings: "Até 35%",
    difficulty: "Fácil",
    description: "Use a máquina de lavar de forma mais eficiente",
    tips: [
      "Lave roupas apenas com carga completa",
      "Use água fria sempre que possível (90% da energia é para aquecer água)",
      "Prefira programas econômicos",
      "Limpe o filtro regularmente",
      "Seque roupas ao sol em vez de usar secadora",
    ],
  },
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Horário de Pico",
    category: "Gestão",
    savings: "Até 20%",
    difficulty: "Médio",
    description: "Evite usar aparelhos de alto consumo no horário de pico",
    tips: [
      "Horário de pico: 18h-21h (evite usar chuveiro, ferro, máquina de lavar)",
      "Programe máquina de lavar para madrugada ou manhã",
      "Cozinhe em horários alternativos",
      "Use timer para aquecer água fora do pico",
      "Verifique se sua distribuidora oferece tarifa branca (mais barata fora de pico)",
    ],
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Investimentos Inteligentes",
    category: "Longo Prazo",
    savings: "Até 60%",
    difficulty: "Avançado",
    description: "Invista em tecnologias que reduzem consumo a longo prazo",
    tips: [
      "Instale painéis solares fotovoltaicos",
      "Substitua aparelhos antigos por modelos com selo Procel A",
      "Instale aquecedor solar para água",
      "Melhore isolamento térmico da casa",
      "Considere sistema de captação de água da chuva",
    ],
  },
];

const DIFFICULTY_COLORS = {
  Fácil: "bg-green-500/20 text-green-400 border-green-500/30",
  Médio: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Avançado: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function Tips() {
  return (
    <div className="container py-12 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gradient-eco">Dicas</span> Ecológicas
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Práticas sustentáveis para reduzir consumo, economizar dinheiro e preservar o meio
          ambiente
        </p>
      </div>

      {/* Cards de Impacto */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        <Card className="glass-effect glow-eco">
          <CardContent className="p-6 text-center">
            <TrendingDown className="w-12 h-12 mx-auto mb-3 text-primary" />
            <h3 className="text-2xl font-bold text-gradient-eco mb-1">Até 80%</h3>
            <p className="text-sm text-muted-foreground">de economia potencial</p>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6 text-center">
            <Leaf className="w-12 h-12 mx-auto mb-3 text-green-400" />
            <h3 className="text-2xl font-bold text-green-400 mb-1">-CO₂</h3>
            <p className="text-sm text-muted-foreground">Reduza emissões de carbono</p>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6 text-center">
            <DollarSign className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
            <h3 className="text-2xl font-bold text-yellow-400 mb-1">R$ Economia</h3>
            <p className="text-sm text-muted-foreground">Reduza sua conta de luz</p>
          </CardContent>
        </Card>
      </div>

      {/* Grid de Dicas */}
      <div className="grid md:grid-cols-2 gap-6">
        {TIPS_DATA.map((tip, index) => (
          <Card key={index} className="glass-effect hover:glow-eco transition-all">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  {tip.icon}
                </div>
                <div className="flex gap-2">
                  <Badge className={DIFFICULTY_COLORS[tip.difficulty]}>{tip.difficulty}</Badge>
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {tip.savings}
                  </Badge>
                </div>
              </div>
              <CardTitle className="text-xl">{tip.title}</CardTitle>
              <p className="text-sm text-muted-foreground">{tip.description}</p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tip.tips.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Calculadora de Impacto */}
      <Card className="glass-effect glow-eco">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-primary" />
            Impacto das Mudanças
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Se você implementar todas as dicas:</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 rounded-lg bg-card">
                  <span className="text-sm text-muted-foreground">Redução de consumo</span>
                  <strong className="text-primary">30-50%</strong>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-card">
                  <span className="text-sm text-muted-foreground">Economia anual (R$ 200/mês)</span>
                  <strong className="text-green-400">R$ 720 - R$ 1.200</strong>
                </div>
                <div className="flex justify-between items-center p-3 rounded-lg bg-card">
                  <span className="text-sm text-muted-foreground">CO₂ evitado por ano</span>
                  <strong className="text-blue-400">~300 kg</strong>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-primary">Equivalente ambiental:</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="p-3 rounded-lg bg-green-900/20 border border-green-500/30">
                  🌳 <strong className="text-green-400">15 árvores</strong> plantadas por ano
                </div>
                <div className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30">
                  🚗 <strong className="text-blue-400">1.200 km</strong> não percorridos de carro
                </div>
                <div className="p-3 rounded-lg bg-purple-900/20 border border-purple-500/30">
                  💧 <strong className="text-purple-400">30.000 litros</strong> de água economizada
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="glass-effect bg-gradient-to-r from-green-900/20 to-blue-900/20 border-primary/30">
        <CardContent className="p-8 text-center">
          <Leaf className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-bold mb-3">
            Comece <span className="text-gradient-eco">Hoje</span> Mesmo!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Não precisa implementar tudo de uma vez. Escolha 2-3 dicas fáceis para começar e vá
            adicionando novas práticas gradualmente. Pequenas mudanças geram grande impacto!
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              💡 Comece pelas dicas "Fácil"
            </Badge>
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              📊 Monitore no Dashboard
            </Badge>
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">
              🌱 Seja sustentável
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
