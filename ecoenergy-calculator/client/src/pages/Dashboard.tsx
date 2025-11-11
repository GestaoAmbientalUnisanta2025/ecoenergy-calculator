import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Zap,
  DollarSign,
  TrendingDown,
  Home,
  Leaf,
  Download,
  Calendar,
} from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Appliance, RoomData } from "@/lib/types";
import { DEFAULT_TARIFF } from "@/lib/presets";
import {
  calculateApplianceKwh,
  calculateRoomTotals,
  calculateHouseTotals,
  calculateCO2Emissions,
  formatCurrency,
  formatKwh,
} from "@/lib/calculations";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const ROOM_COLORS: Record<string, string> = {
  Sala: "#10b981",
  Quarto: "#3b82f6",
  Cozinha: "#f59e0b",
  Banheiro: "#8b5cf6",
  Lavanderia: "#ec4899",
};

const ROOM_ICONS: Record<string, string> = {
  Sala: "🛋️",
  Quarto: "🛏️",
  Cozinha: "🍳",
  Banheiro: "🚿",
  Lavanderia: "👕",
};

export default function Dashboard() {
  const [tariff] = useLocalStorage("ecoenergy-tariff", DEFAULT_TARIFF);
  const [roomsData] = useLocalStorage<Record<string, Appliance[]>>("ecoenergy-rooms", {});

  // Processar dados dos cômodos
  const roomsAnalysis: RoomData[] = useMemo(() => {
    return Object.entries(roomsData).map(([room, appliances]) => {
      const { totalKwh, totalCost } = calculateRoomTotals(appliances, tariff);
      return {
        room,
        appliances,
        totalKwh,
        totalCost,
      };
    });
  }, [roomsData, tariff]);

  const { totalKwh, totalCost, totalAppliances } = calculateHouseTotals(roomsAnalysis);
  const co2Emissions = calculateCO2Emissions(totalKwh);
  const estimatedSavings = totalCost * 0.15; // 15% de economia potencial

  // Dados para gráfico de barras (consumo por cômodo)
  const barChartData = roomsAnalysis
    .filter((room) => room.appliances.length > 0)
    .map((room) => ({
      name: `${ROOM_ICONS[room.room]} ${room.room}`,
      kWh: room.totalKwh,
      custo: room.totalCost,
    }));

  // Dados para gráfico de pizza (distribuição de consumo)
  const pieChartData = roomsAnalysis
    .filter((room) => room.appliances.length > 0)
    .map((room) => ({
      name: room.room,
      value: room.totalKwh,
    }));

  // Top 5 aparelhos que mais consomem
  const topAppliances = useMemo(() => {
    const allAppliances = roomsAnalysis.flatMap((room) =>
      room.appliances.map((app) => ({
        ...app,
        kwh: calculateApplianceKwh(app),
      }))
    );
    return allAppliances.sort((a, b) => b.kwh - a.kwh).slice(0, 5);
  }, [roomsAnalysis]);

  // Dados simulados para histórico (últimos 6 meses)
  const historicalData = useMemo(() => {
    const months = ["Jun", "Jul", "Ago", "Set", "Out", "Nov"];
    return months.map((month, index) => ({
      month,
      consumo: totalKwh * (0.85 + Math.random() * 0.3),
      custo: totalCost * (0.85 + Math.random() * 0.3),
    }));
  }, [totalKwh, totalCost]);

  const exportData = () => {
    const data = {
      resumo: {
        totalKwh,
        totalCost,
        totalAppliances,
        co2Emissions,
        tariff,
        dataExportacao: new Date().toISOString(),
      },
      comodos: roomsAnalysis.map((room) => ({
        nome: room.room,
        totalKwh: room.totalKwh,
        totalCost: room.totalCost,
        aparelhos: room.appliances.map((app) => ({
          nome: app.name,
          potencia: app.power,
          quantidade: app.quantity,
          horasPorDia: app.hoursPerDay,
          minutosPorDia: app.minutesPerDay,
          kwhMensal: calculateApplianceKwh(app),
        })),
      })),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ecoenergy-relatorio-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (totalAppliances === 0) {
    return (
      <div className="container py-12">
        <Card className="glass-effect">
          <CardContent className="p-12 text-center">
            <BarChart3 className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl font-bold mb-2">Nenhum dado disponível</h2>
            <p className="text-muted-foreground mb-6">
              Adicione aparelhos na Calculadora para visualizar seu dashboard
            </p>
            <Button onClick={() => (window.location.href = "/calculator")}>
              Ir para Calculadora
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient-eco">Dashboard</span> Energético
          </h1>
          <p className="text-muted-foreground">
            Análise completa do seu consumo e oportunidades de economia
          </p>
        </div>
        <Button onClick={exportData} className="glow-eco">
          <Download className="w-4 h-4 mr-2" />
          Exportar Dados
        </Button>
      </div>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="glass-effect glow-eco">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Consumo Total
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gradient-eco">{formatKwh(totalKwh)}</div>
            <p className="text-xs text-muted-foreground mt-1">por mês</p>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <DollarSign className="w-4 h-4" />
              Custo Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-primary">{formatCurrency(totalCost)}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Tarifa: R$ {tariff.toFixed(3)}/kWh
            </p>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Emissões CO₂
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-orange-400">{co2Emissions} kg</div>
            <p className="text-xs text-muted-foreground mt-1">por mês</p>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingDown className="w-4 h-4" />
              Economia Potencial
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-400">
              {formatCurrency(estimatedSavings)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">~15% de redução</p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Gráfico de Barras - Consumo por Cômodo */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Consumo por Cômodo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="kWh" fill="#10b981" name="kWh/mês" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Gráfico de Pizza - Distribuição */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Home className="w-5 h-5 text-primary" />
              Distribuição de Consumo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={ROOM_COLORS[entry.name] || "#888"} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Histórico e Top Aparelhos */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Histórico de Consumo */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Histórico de Consumo
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={historicalData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1a1a1a",
                    border: "1px solid #333",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="consumo"
                  stroke="#10b981"
                  strokeWidth={2}
                  name="kWh"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top 5 Aparelhos */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Top 5 Maiores Consumidores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {topAppliances.map((app, index) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-3 rounded-lg glass-effect"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{app.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {ROOM_ICONS[app.room]} {app.room}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary">{formatKwh(app.kwh)}</p>
                    <p className="text-xs text-muted-foreground">{app.power}W</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights e Recomendações */}
      <Card className="glass-effect glow-eco">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            Insights e Recomendações
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 rounded-lg bg-green-900/20 border border-green-500/30">
            <p className="text-sm">
              <strong className="text-primary">💡 Dica:</strong> Seus aparelhos de maior
              consumo são {topAppliances[0]?.name} e {topAppliances[1]?.name}. Considere
              reduzir o tempo de uso ou substituir por modelos mais eficientes.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-blue-900/20 border border-blue-500/30">
            <p className="text-sm">
              <strong className="text-primary">🌱 Sustentabilidade:</strong> Você está
              emitindo {co2Emissions} kg de CO₂ por mês. Reduzindo 15% do consumo, você
              evitaria {(co2Emissions * 0.15).toFixed(2)} kg de CO₂ mensais.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/30">
            <p className="text-sm">
              <strong className="text-primary">💰 Economia:</strong> Com pequenas mudanças
              de hábito, você pode economizar até {formatCurrency(estimatedSavings)} por mês,
              totalizando {formatCurrency(estimatedSavings * 12)} por ano!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
