# Stratigo Portfolio Website

Website portfolio modern untuk Stratigo - Perusahaan Software AI yang menyediakan layanan website perusahaan, software AI, dan otomasi AI.

## Fitur

- ✨ **Desain Modern**: Interface yang clean dan modern dengan tema dark dan orange
- 📱 **Responsive**: Tampil sempurna di semua perangkat (desktop, tablet, mobile)
- 🎨 **Animasi Smooth**: Animasi fade-in dan hover effects yang halus
- 🚀 **Vue 3 Composition API**: Menggunakan script setup untuk performa optimal
- 🎯 **SEO Friendly**: Meta tags dan struktur HTML yang SEO optimized
- 📧 **Contact Form**: Form kontak yang interaktif

## Teknologi

- **Vue 3** - Framework JavaScript modern
- **Vite** - Build tool yang cepat
- **CSS3** - Styling dengan CSS Variables dan Grid/Flexbox
- **JavaScript ES6+** - Modern JavaScript features

## Instalasi

1. **Clone atau download project ini**

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka browser dan akses:**
   ```
   http://localhost:3000
   ```

## Build untuk Production

```bash
npm run build
```

File hasil build akan tersimpan di folder `dist/`.

## Struktur Project

```
stratigo-portfolio/
├── index.html          # HTML utama
├── package.json        # Dependencies dan scripts
├── vite.config.js      # Konfigurasi Vite
├── src/
│   ├── main.js         # Entry point aplikasi
│   ├── App.vue         # Komponen utama
│   └── style.css       # Global styles
└── README.md           # Dokumentasi
```

## Kustomisasi

### Mengubah Warna Tema

Edit CSS variables di `src/style.css`:

```css
:root {
  --primary-orange: #ff6b35;    /* Warna orange utama */
  --secondary-orange: #ff8c42;  /* Warna orange sekunder */
  --dark-bg: #0a0a0a;          /* Background utama */
  --dark-secondary: #1a1a1a;   /* Background sekunder */
  --dark-tertiary: #2a2a2a;    /* Background tersier */
}
```

### Mengubah Konten

Edit data di `src/App.vue`:

- **Services**: Ubah array `services` untuk mengubah layanan yang ditampilkan
- **Tech Stack**: Ubah array `techStack` untuk mengubah teknologi yang ditampilkan
- **Contact Info**: Ubah informasi kontak di section contact

### Menambah Section Baru

1. Tambahkan section baru di template
2. Tambahkan styling di bagian `<style scoped>`
3. Tambahkan reactive data jika diperlukan
4. Tambahkan navigation link di header

## Deployment

Website ini dapat di-deploy ke berbagai platform:

- **Netlify**: Drag & drop folder `dist` setelah build
- **Vercel**: Connect repository dan auto-deploy
- **GitHub Pages**: Upload ke repository dan enable Pages
- **Hosting tradisional**: Upload folder `dist` ke public_html

## Lisensi

© 2024 Stratigo. Semua hak dilindungi.

---

Dibuat dengan ❤️ menggunakan Vue 3 dan Vite 