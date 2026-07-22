import posthog from 'posthog-js';

/**
 * Cookieless PostHog analytics.
 *
 * We use `persistence: 'memory'` so no cookies (and no persistent localStorage
 * identifier) are set. This keeps us within GDPR's cookie-consent exemption, so
 * the site needs no consent banner. Trade-off: a returning visitor on a later
 * day is counted as a new anonymous visitor. Session duration within a single
 * visit is still tracked accurately.
 *
 * Referrer, UTM params and GeoIP (country/city) are captured automatically by
 * PostHog on every event — that's how we see where visitors come from.
 */

let enabled = false;

export function initAnalytics(): void {
  const key = import.meta.env.VITE_POSTHOG_KEY;
  if (!key) {
    // No key configured (e.g. local dev without .env.local) — run without analytics.
    return;
  }

  posthog.init(key, {
    api_host: import.meta.env.VITE_POSTHOG_HOST ?? 'https://eu.i.posthog.com',
    persistence: 'memory',
    autocapture: true,
    capture_pageview: true,
    capture_pageleave: true,
    disable_session_recording: true,
  });

  enabled = true;
}

export function track(event: string, properties?: Record<string, unknown>): void {
  if (!enabled) return;
  posthog.capture(event, properties);
}
