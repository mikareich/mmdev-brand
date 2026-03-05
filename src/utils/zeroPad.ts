export function zeroPad(value: number, power: number = 2): string {
  return value.toString().padStart(power, "0");
}
