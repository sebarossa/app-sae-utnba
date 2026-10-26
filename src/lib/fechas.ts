/**
 * Vencimiento de actividades y convocatorias.
 *
 * El sitio es estático: esto se evalúa cuando se compila. Como cada push
 * dispara un deploy, en la práctica se recalcula con cada cambio de
 * contenido. Si pasa mucho tiempo sin publicar, alcanza con un Redeploy
 * en Vercel para que se depure solo.
 */

/** Fecha de hoy en Buenos Aires (UTC-3), como 'AAAA-MM-DD'. */
export function hoy(): string {
  return new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

/**
 * Algo sigue vigente si no tiene fecha de vencimiento, o si esa fecha
 * todavía no pasó. El día del vencimiento cuenta como vigente.
 */
export function vigente(venceISO?: string): boolean {
  return !venceISO || venceISO >= hoy();
}
