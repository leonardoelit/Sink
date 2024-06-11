export default defineAppConfig({
  title: 'Elit Bet Lisanslı Bahis Sitesi',
  description: 'Lisanslı, Güvenilir Bahis ve Casino Sitesi Elit Bet ile Oyun Keyfinin Tadını Çıkar ',
  image: 'https://sink.cool/banner.png',
  previewTTL: 24 * 3600, // 24h
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
