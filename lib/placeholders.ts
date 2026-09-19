/**
 * Matches placeholder text like "[EMAIL]" or "[REGISTERED NAME, SSM NUMBER]"
 * so pnpm check:placeholders can find anything still unresolved.
 */
export const PLACEHOLDER_PATTERN = /\[(?=[^\]]*[A-Z])[A-Z0-9][A-Z0-9 ,.'/-]*\]/g;

export function hasPlaceholder(text: string): boolean {
  return new RegExp(PLACEHOLDER_PATTERN).test(text);
}
