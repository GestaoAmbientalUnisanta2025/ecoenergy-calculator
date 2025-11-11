import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Calculator as CalcIcon,
  Plus,
  Trash2,
  Save,
  Download,
  Target,
  History,
  BarChart3,
  Zap,
  DollarSign,
  Home,
  Clock,
} from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Appliance, RoomType, RoomData } from "@/lib/types";
import { ROOM_PRESETS, DEFAULT_TARIFF } from "@/lib/presets";
import {
  calculateApplianceKwh,
  calculateApplianceCost,
  calculateRoomTotals,
  calculateAverageHours,
  formatCurrency,
  formatKwh,
} from "@/lib/calculations";
import { toast } from "sonner";
import { AddApplianceDialog } from "@/components/AddApplianceDialog";

const ROOMS: RoomType[] = ["Sala", "Quarto", "Cozinha", "Banheiro", "Lavanderia"];

const ROOM_ICONS: Record<RoomType, string> = {
  Sala: "🛋️",
  Quarto: "🛏️",
  Cozinha: "🍳",
  Banheiro: "🚿",
  Lavanderia: "👕",
};

export default function Calculator() {
  const [currentRoom, setCurrentRoom] = useState<RoomType>("Sala");
  const [tariff, setTariff] = useLocalStorage("ecoenergy-tariff", DEFAULT_TARIFF);
  const [roomsData, setRoomsData] = useLocalStorage<Record<string, Appliance[]>>(
    "ecoenergy-rooms",
    {}
  );

  const currentAppliances = roomsData[currentRoom] || [];

  const addAppliance = (name: string, power: number, hours: number, minutes: number) => {
    const newAppliance: Appliance = {
      id: `${Date.now()}-${Math.random()}`,
      name,
      power,
      quantity: 1,
      hoursPerDay: hours,
      minutesPerDay: minutes,
      room: currentRoom,
    };

    setRoomsData({
      ...roomsData,
      [currentRoom]: [...currentAppliances, newAppliance],
    });

    toast.success(`${name} adicionado com sucesso!`);
  };

  const removeAppliance = (id: string) => {
    setRoomsData({
      ...roomsData,
      [currentRoom]: currentAppliances.filter((app) => app.id !== id),
    });
    toast.success("Aparelho removido!");
  };

  const updateAppliance = (id: string, updates: Partial<Appliance>) => {
    setRoomsData({
      ...roomsData,
      [currentRoom]: currentAppliances.map((app) =>
        app.id === id ? { ...app, ...updates } : app
      ),
    });
  };

  const clearRoom = () => {
    setRoomsData({
      ...roomsData,
      [currentRoom]: [],
    });
    toast.success("Cômodo limpo!");
  };

  const { totalKwh, totalCost } = calculateRoomTotals(currentAppliances, tariff);
  const averageHours = calculateAverageHours(currentAppliances);

  return (
    <div className="container py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            <span className="text-gradient-eco">Calculadora</span> de Consumo
          </h1>
          <p className="text-muted-foreground">
            Selecione um cômodo, ajuste aparelhos e veja o impacto em kWh e R$
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col gap-1">
            <Label htmlFor="tariff" className="text-xs text-muted-foreground">
              Tarifa (R$/kWh)
            </Label>
            <Input
              id="tariff"
              type="number"
              step="0.001"
              min="0"
              value={tariff}
              onChange={(e) => setTariff(Number(e.target.value))}
              className="w-32"
            />
          </div>
        </div>
      </div>

      {/* Room Selector */}
      <Card className="glass-effect">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-3">
            {ROOMS.map((room) => (
              <Button
                key={room}
                variant={currentRoom === room ? "default" : "outline"}
                onClick={() => setCurrentRoom(room)}
                className={currentRoom === room ? "glow-eco" : ""}
              >
                <span className="mr-2">{ROOM_ICONS[room]}</span>
                {room}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Presets */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">{ROOM_ICONS[currentRoom]}</span>
              Aparelhos Pré-definidos - {currentRoom}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-80 overflow-y-auto scrollbar-thin">
              {ROOM_PRESETS[currentRoom].map((preset, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg glass-effect hover:bg-white/10 transition-all"
                >
                  <div className="flex-1">
                    <p className="font-medium text-sm">{preset.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {preset.power}W • {preset.defaultHours}h
                      {preset.defaultMinutes > 0 && ` ${preset.defaultMinutes}min`}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    onClick={() =>
                      addAppliance(
                        preset.name,
                        preset.power,
                        preset.defaultHours,
                        preset.defaultMinutes
                      )
                    }
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Importar
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-border flex gap-2">
              <AddApplianceDialog onAdd={addAppliance} />
              <Button variant="destructive" size="sm" onClick={clearRoom}>
                <Trash2 className="w-4 h-4 mr-1" />
                Limpar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="glass-effect glow-eco">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart3 className="w-5 h-5 text-primary" />
              Resumo do Ambiente
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Consumo total</span>
              </div>
              <strong className="text-2xl text-gradient-eco">{formatKwh(totalKwh)}</strong>
            </div>

            <div className="flex justify-between items-center p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Custo estimado</span>
              </div>
              <strong className="text-2xl font-bold text-primary">
                {formatCurrency(totalCost)}
              </strong>
            </div>

            <div className="flex justify-between items-center p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Home className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Aparelhos</span>
              </div>
              <strong className="text-2xl font-bold text-blue-400">
                {currentAppliances.length}
              </strong>
            </div>

            <div className="flex justify-between items-center p-4 rounded-lg bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <span className="text-muted-foreground">Média horas/dia</span>
              </div>
              <strong className="text-2xl font-bold text-purple-400">
                {averageHours}h
              </strong>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-blue-900/20 border border-blue-500/30">
              <p className="text-xs text-muted-foreground flex items-center gap-2">
                <Save className="w-4 h-4" />
                Dados salvos automaticamente no navegador
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Appliances Table */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalcIcon className="w-5 h-5 text-primary" />
            Tabela de Aparelhos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead className="text-center">Potência (W)</TableHead>
                  <TableHead className="text-center">Quantidade</TableHead>
                  <TableHead className="text-center">Horas/dia</TableHead>
                  <TableHead className="text-center">Min/dia</TableHead>
                  <TableHead className="text-center">kWh/mês</TableHead>
                  <TableHead className="text-center">R$/mês</TableHead>
                  <TableHead className="text-center">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentAppliances.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="text-center text-muted-foreground py-8">
                      Nenhum aparelho adicionado. Importe da lista ou adicione manualmente.
                    </TableCell>
                  </TableRow>
                ) : (
                  currentAppliances.map((appliance) => (
                    <TableRow key={appliance.id} className="hover:bg-white/5">
                      <TableCell>
                        <Input
                          value={appliance.name}
                          onChange={(e) =>
                            updateAppliance(appliance.id, { name: e.target.value })
                          }
                          className="min-w-[150px]"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          value={appliance.power}
                          onChange={(e) =>
                            updateAppliance(appliance.id, { power: Number(e.target.value) })
                          }
                          className="w-24 text-center"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="1"
                          value={appliance.quantity}
                          onChange={(e) =>
                            updateAppliance(appliance.id, {
                              quantity: Number(e.target.value),
                            })
                          }
                          className="w-20 text-center"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          max="24"
                          value={appliance.hoursPerDay}
                          onChange={(e) =>
                            updateAppliance(appliance.id, {
                              hoursPerDay: Number(e.target.value),
                            })
                          }
                          className="w-20 text-center"
                        />
                      </TableCell>
                      <TableCell>
                        <Input
                          type="number"
                          min="0"
                          max="59"
                          value={appliance.minutesPerDay}
                          onChange={(e) =>
                            updateAppliance(appliance.id, {
                              minutesPerDay: Number(e.target.value),
                            })
                          }
                          className="w-20 text-center"
                        />
                      </TableCell>
                      <TableCell className="text-center font-semibold text-primary">
                        {formatKwh(calculateApplianceKwh(appliance))}
                      </TableCell>
                      <TableCell className="text-center font-semibold text-primary">
                        {formatCurrency(calculateApplianceCost(appliance, tariff))}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => removeAppliance(appliance.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
