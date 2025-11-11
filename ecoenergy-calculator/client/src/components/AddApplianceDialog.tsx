import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";

interface AddApplianceDialogProps {
  onAdd: (name: string, power: number, hours: number, minutes: number) => void;
}

export function AddApplianceDialog({ onAdd }: AddApplianceDialogProps) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("0");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !power || !hours) {
      return;
    }

    onAdd(
      name,
      Number(power),
      Number(hours),
      Number(minutes)
    );

    // Reset form
    setName("");
    setPower("");
    setHours("");
    setMinutes("0");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex-1">
          <Plus className="w-4 h-4 mr-1" />
          Adicionar Manual
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] glass-effect border-primary/30">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle className="text-gradient-eco">Adicionar Aparelho</DialogTitle>
            <DialogDescription>
              Preencha os dados do aparelho que deseja adicionar
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Nome do Aparelho</Label>
              <Input
                id="name"
                placeholder="Ex: TV LED 42 polegadas"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="power">Potência (Watts)</Label>
              <Input
                id="power"
                type="number"
                min="1"
                placeholder="Ex: 100"
                value={power}
                onChange={(e) => setPower(e.target.value)}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="hours">Horas por dia</Label>
                <Input
                  id="hours"
                  type="number"
                  min="0"
                  max="24"
                  placeholder="0-24"
                  value={hours}
                  onChange={(e) => setHours(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="minutes">Minutos por dia</Label>
                <Input
                  id="minutes"
                  type="number"
                  min="0"
                  max="59"
                  placeholder="0-59"
                  value={minutes}
                  onChange={(e) => setMinutes(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button type="submit" className="glow-eco">
              Adicionar
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
