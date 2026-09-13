const DIGITS = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']

/**
 * Converts a number from 1-99 into a (simplified) Chinese numeral.
 * Good enough for chapter numbers 1-100.
 */
export function toChineseNumeral(num: number): string {
  if (num === 100) return '百'
  if (num <= 10) return num === 10 ? '十' : DIGITS[num]
  if (num < 20) return '十' + (num % 10 === 0 ? '' : DIGITS[num % 10])

  const tens = Math.floor(num / 10)
  const ones = num % 10
  return DIGITS[tens] + '十' + (ones === 0 ? '' : DIGITS[ones])
}
