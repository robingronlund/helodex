import { FlavorText } from 'pokenode-ts';

export function extractFlavorText(flavorTextEntries?: FlavorText[]) {
  if (!flavorTextEntries) return 'No Description found';

  const flavor = flavorTextEntries.find(
    (entry) => entry.language.name === 'en'
  );

  if (!flavor) return 'No Description found';

  return replaceUnicodeWhitespace(flavor.flavor_text);
}

/**
 * note: the text we received on the flavour text could possibly
 * contain unicode whitespace. This function is to make sure we can properly handle it.
 */
const replaceUnicodeWhitespace = (text: string): string => {
  // eslint-disable-next-line no-control-regex
  return text.replace(/\u000C/g, ' ');
};
