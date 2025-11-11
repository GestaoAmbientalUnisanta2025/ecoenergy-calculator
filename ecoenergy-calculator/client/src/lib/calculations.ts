import { Appliance, RoomData } from "./types";

/**
 * Calcula o consumo mensal em kWh de um aparelho
 */
export function calculateApplianceKwh(appliance: Appliance): number {
  const totalMinutesPerDay = appliance.hoursPerDay * 60 + appliance.minutesPerDay;
  const hoursPerDay = totalMinutesPerDay / 60;
  const kwhPerDay = (appliance.power * hoursPerDay * appliance.quantity) / 1000;
  const kwhPerMonth = kwhPerDay * 30;
  return Number(kwhPerMonth.toFixed(2));
}

/**
 * Calcula o custo mensal de um aparelho
 */
export function calculateApplianceCost(appliance: Appliance, tariff: number): number {
  const kwh = calculateApplianceKwh(appliance);
  return Number((kwh * tariff).toFixed(2));
}

/**
 * Calcula totais de um cômodo
 */
export function calculateRoomTotals(appliances: Appliance[], tariff: number): { totalKwh: number; totalCost: number } {
  const totalKwh = appliances.reduce((sum, app) => sum + calculateApplianceKwh(app), 0);
  const totalCost = totalKwh * tariff;
  return {
    totalKwh: Number(totalKwh.toFixed(2)),
    totalCost: Number(totalCost.toFixed(2)),
  };
}

/**
 * Calcula totais de toda a casa
 */
export function calculateHouseTotals(rooms: RoomData[]): { totalKwh: number; totalCost: number; totalAppliances: number } {
  const totalKwh = rooms.reduce((sum, room) => sum + room.totalKwh, 0);
  const totalCost = rooms.reduce((sum, room) => sum + room.totalCost, 0);
  const totalAppliances = rooms.reduce((sum, room) => sum + room.appliances.length, 0);
  
  return {
    totalKwh: Number(totalKwh.toFixed(2)),
    totalCost: Number(totalCost.toFixed(2)),
    totalAppliances,
  };
}

/**
 * Calcula média de horas por dia
 */
export function calculateAverageHours(appliances: Appliance[]): number {
  if (appliances.length === 0) return 0;
  const totalHours = appliances.reduce((sum, app) => {
    return sum + (app.hoursPerDay + app.minutesPerDay / 60);
  }, 0);
  return Number((totalHours / appliances.length).toFixed(1));
}

/**
 * Calcula emissão de CO2 (kg)
 * Fator de emissão médio Brasil: 0.0817 kg CO2/kWh (2024)
 */
export function calculateCO2Emissions(kwhPerMonth: number): number {
  const emissionFactor = 0.0817; // kg CO2 por kWh
  return Number((kwhPerMonth * emissionFactor).toFixed(2));
}

/**
 * Calcula economia potencial (estimativa de 15%)
 */
export function calculatePotentialSavings(totalCost: number): { savingsCost: number; savingsKwh: number; savingsPercentage: number } {
  const savingsPercentage = 15;
  const savingsCost = (totalCost * savingsPercentage) / 100;
  
  return {
    savingsCost: Number(savingsCost.toFixed(2)),
    savingsKwh: 0, // Será calculado com base na tarifa
    savingsPercentage,
  };
}

/**
 * Formata valor monetário
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

/**
 * Formata kWh
 */
export function formatKwh(value: number): string {
  return `${value.toFixed(2)} kWh`;
}
