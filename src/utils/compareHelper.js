export function highlightStat(stat1, stat2) {
  if (stat1 > stat2) return "text-green-400 font-bold";
  if (stat2 > stat1) return "text-red-400 font-bold";
  return "";
}
