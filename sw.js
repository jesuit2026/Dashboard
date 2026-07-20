// Minimaler Service Worker — nur damit Chrome die App als installierbar
// erkennt (Voraussetzung für "Zum Startbildschirm hinzufügen" / "App
// installieren" mit eigenem Fenster statt Browser-Tab).
// Macht bewusst KEIN Offline-Caching der Daten — die App soll immer die
// aktuelle mobile_screen.json / mobile_watchlist.json vom Netz holen.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('fetch', () => {}); // No-op: alles geht normal ans Netz
