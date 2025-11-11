import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Calculator, BarChart3, Lightbulb, Zap, Home } from "lucide-react";

export default function Instructions() {
  return (
    <div className="container py-12 space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-gradient-eco">Como Usar</span> a Plataforma
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Guia completo para aproveitar ao máximo todas as funcionalidades da EcoEnergy
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Passo 1 */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                1
              </div>
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-primary" />
                Adicione seus Aparelhos
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Acesse a página <strong className="text-primary">Calculadora</strong> e selecione
              um cômodo da sua casa.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-4">
              <li>• Escolha entre Sala, Quarto, Cozinha, Banheiro ou Lavanderia</li>
              <li>• Importe aparelhos da lista pré-definida com um clique</li>
              <li>• Ou adicione manualmente aparelhos personalizados</li>
              <li>• Ajuste potência (W), quantidade e horas de uso por dia</li>
            </ul>
            <div className="p-3 rounded-lg bg-blue-900/20 border border-blue-500/30 mt-4">
              <p className="text-xs text-blue-300">
                <strong>💡 Dica:</strong> Comece pelos aparelhos que você usa diariamente para
                ter uma estimativa mais precisa.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Passo 2 */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                2
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Configure a Tarifa
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Ajuste a tarifa de energia elétrica de acordo com sua conta de luz.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-4">
              <li>• Localize o campo "Tarifa (R$/kWh)" no topo da calculadora</li>
              <li>• O valor padrão é R$ 0,97 (média Brasil 2025)</li>
              <li>• Consulte sua conta de luz para o valor exato</li>
              <li>• O cálculo de custo é atualizado automaticamente</li>
            </ul>
            <div className="p-3 rounded-lg bg-green-900/20 border border-green-500/30 mt-4">
              <p className="text-xs text-green-300">
                <strong>📊 Importante:</strong> A tarifa pode variar por região e bandeira
                tarifária. Verifique sua conta de luz mensalmente.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Passo 3 */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                3
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Analise o Dashboard
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Visualize gráficos e análises detalhadas do seu consumo energético.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-4">
              <li>• Veja consumo total em kWh e custo mensal em R$</li>
              <li>• Analise distribuição de consumo por cômodo</li>
              <li>• Identifique os 5 aparelhos que mais consomem</li>
              <li>• Acompanhe emissões de CO₂ e economia potencial</li>
              <li>• Exporte dados em JSON para análises externas</li>
            </ul>
            <div className="p-3 rounded-lg bg-purple-900/20 border border-purple-500/30 mt-4">
              <p className="text-xs text-purple-300">
                <strong>📈 Insight:</strong> Use os gráficos para identificar padrões e
                oportunidades de economia.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Passo 4 */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                4
              </div>
              <div className="flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Aplique as Dicas
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              Siga recomendações práticas para reduzir consumo e economizar.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground ml-4">
              <li>• Acesse a página "Dicas Eco" para sugestões personalizadas</li>
              <li>• Implemente mudanças de hábito no dia a dia</li>
              <li>• Considere substituir aparelhos antigos por modelos eficientes</li>
              <li>• Monitore o impacto das mudanças no dashboard</li>
            </ul>
            <div className="p-3 rounded-lg bg-orange-900/20 border border-orange-500/30 mt-4">
              <p className="text-xs text-orange-300">
                <strong>🌱 Sustentabilidade:</strong> Pequenas mudanças geram grande impacto
                ambiental e financeiro.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Seção de FAQ */}
      <Card className="glass-effect glow-eco mt-12">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Perguntas Frequentes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-semibold text-primary mb-2">
              Como os dados são salvos?
            </h3>
            <p className="text-sm text-muted-foreground">
              Todos os dados são salvos automaticamente no navegador (localStorage). Seus dados
              permanecem privados e não são enviados para servidores externos.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-2">
              Os cálculos são precisos?
            </h3>
            <p className="text-sm text-muted-foreground">
              Os cálculos são baseados na fórmula: Consumo (kWh) = (Potência × Horas de uso ×
              Dias) / 1000. Para maior precisão, use valores reais de potência e tempo de uso.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-2">
              Como encontrar a potência dos aparelhos?
            </h3>
            <p className="text-sm text-muted-foreground">
              A potência geralmente está indicada em uma etiqueta no próprio aparelho ou no
              manual. Você também pode usar nossa lista pré-definida com valores médios.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-2">
              Posso usar em dispositivos móveis?
            </h3>
            <p className="text-sm text-muted-foreground">
              Sim! A plataforma é totalmente responsiva e funciona perfeitamente em
              smartphones, tablets e desktops.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-primary mb-2">
              Como exportar meus dados?
            </h3>
            <p className="text-sm text-muted-foreground">
              No Dashboard, clique no botão "Exportar Dados" para baixar um arquivo JSON com
              todos os seus dados de consumo e análises.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Glossário */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Home className="w-5 h-5 text-primary" />
            Glossário
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-primary text-sm mb-1">kWh (Quilowatt-hora)</h4>
              <p className="text-xs text-muted-foreground">
                Unidade de medida de energia elétrica. 1 kWh = consumo de 1000W por 1 hora.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary text-sm mb-1">Potência (W)</h4>
              <p className="text-xs text-muted-foreground">
                Quantidade de energia que um aparelho consome por hora de uso.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary text-sm mb-1">Tarifa</h4>
              <p className="text-xs text-muted-foreground">
                Valor cobrado pela distribuidora por cada kWh consumido (R$/kWh).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-primary text-sm mb-1">CO₂ (Dióxido de Carbono)</h4>
              <p className="text-xs text-muted-foreground">
                Gás emitido na geração de energia elétrica, contribuindo para o aquecimento
                global.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
