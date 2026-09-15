/**
 * Convierte un teléfono escrito para leer ("011 4867 7500 int. 7235")
 * en un href marcable desde el celular. El interno se agrega como pausa
 * (`,,`), que es lo que entienden iOS y Android.
 */
export function telHref(numero: string): string {
  const [base, interno] = numero.split(/\s*(?:int\.?|interno)\s*/i);
  const nacional = base.replace(/\D/g, '').replace(/^0/, '');
  const href = `tel:+54${nacional}`;
  const ext = interno?.replace(/\D/g, '');
  return ext ? `${href},,${ext}` : href;
}
