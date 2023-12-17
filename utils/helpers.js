export function delay(n) {
  return new Promise((r) => setTimeout(r, n * 1000));
}

export function showElapsedTime(n) {
  let [sOnes, sTens] = [n % 10, Math.floor(n / 10) % 6];
  let [mOnes, mTens] = [Math.floor(n / 60) % 10, Math.floor(n / 600) % 6];
  let [hOnes, hTens] = [Math.floor(n / 3600) % 10, Math.floor(n / 36000) % 6];
  return `${hTens}${hOnes}h ${mTens}${mOnes}m ${sTens}${sOnes}s`;
}
