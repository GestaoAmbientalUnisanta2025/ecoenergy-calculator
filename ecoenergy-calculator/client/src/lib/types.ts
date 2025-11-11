export interface Appliance {
  id: string;
  name: string;
  power: number; // Watts
  quantity: number;
  hoursPerDay: number;
  minutesPerDay: number;
  room: string;
}

export interface RoomData {
  room: string;
  appliances: Appliance[];
  totalKwh: number;
  totalCost: number;
}

export interface PresetAppliance {
  name: string;
  power: number;
  defaultHours: number;
  defaultMinutes: number;
  category: string;
}

export interface Goal {
  targetKwh: number;
  targetCost: number;
  startDate: string;
  endDate: string;
  description: string;
}

export interface HistoryEntry {
  date: string;
  totalKwh: number;
  totalCost: number;
  rooms: RoomData[];
}

export type RoomType = "Sala" | "Quarto" | "Cozinha" | "Banheiro" | "Lavanderia";
