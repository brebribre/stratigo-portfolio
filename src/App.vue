<template>
  <div id="app">
    <!-- Header -->
    <header class="header" :class="{ 'scrolled': isScrolled }">
      <nav class="nav container">
        <div class="logo">
          <h2>Stratigo</h2>
        </div>
        <ul class="nav-links" :class="{ 'active': mobileMenuOpen }">
          <li><a href="#beranda" @click="closeMobileMenu">Beranda</a></li>
          <li><a href="#layanan" @click="closeMobileMenu">Layanan</a></li>
          <li><a href="#portofolio" @click="closeMobileMenu">Portofolio</a></li>
          <li><a href="#tentang" @click="closeMobileMenu">Tentang</a></li>
          <li><a href="#kontak" @click="closeMobileMenu">Kontak</a></li>
        </ul>
        <div class="mobile-menu-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>

    <!-- Hero Section -->
    <section id="beranda" class="hero">
      <div class="hero-content container">
        <div class="hero-text fade-in" :class="{ 'visible': heroVisible }">
          <h1 class="hero-title">
            Solusi <span class="highlight">Website</span> dan <span class="highlight">Software AI</span><br>
            Terdepan untuk Bisnis Anda
          </h1>
          <p class="hero-description">
            Stratigo menghadirkan layanan website dan website perusahaan yang dipersonalisasi dengan website profesional, integrasi AI, dan otomasi.
          </p>
          <div class="hero-buttons">
            <a href="#layanan" class="btn btn-primary">Jelajahi Layanan</a>
            <a href="#kontak" class="btn btn-outline">Hubungi Kami</a>
          </div>
        </div>
        <div class="hero-visual fade-in" :class="{ 'visible': heroVisible }">
          <div class="floating-card">
            <div class="card-content">
              <div class="code-lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line short"></div>
                <div class="line"></div>
                <div class="line short"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="layanan" class="section services">
      <div class="container">
        <h2 class="section-title fade-in" :class="{ 'visible': servicesVisible }">Layanan Kami</h2>
        <div class="services-grid">
          <div class="service-card fade-in" :class="{ 'visible': servicesVisible }" 
               v-for="(service, index) in services" :key="index"
               :style="{ 'animation-delay': `${index * 0.2}s` }">
            <div class="service-icon">
              <div v-html="service.icon"></div>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies Section -->
    <section id="portofolio" class="section case-studies">
      <div class="container">
        <h2 class="section-title fade-in" :class="{ 'visible': caseStudiesVisible }">Studi Kasus</h2>
        <p class="section-subtitle fade-in" :class="{ 'visible': caseStudiesVisible }">
          Lihat beberapa proyek yang telah kami selesaikan untuk klien kami
        </p>
        <div class="case-studies-grid">
          <div class="case-study-card fade-in" :class="{ 'visible': caseStudiesVisible }" 
               v-for="(caseStudy, index) in caseStudies" :key="index"
               :style="{ 'animation-delay': `${index * 0.2}s` }">
            <div class="case-study-image">
              <img :src="caseStudy.image" :alt="caseStudy.title" />
              <div class="case-study-overlay">
                <div class="case-study-category">{{ caseStudy.category }}</div>
              </div>
            </div>
            <div class="case-study-content">
              <h3>{{ caseStudy.title }}</h3>
              <p>{{ caseStudy.description }}</p>
              <div class="case-study-tech">
                <span v-for="tech in caseStudy.technologies" :key="tech" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
              <div class="case-study-results">
                <div class="result-item" v-for="result in caseStudy.results" :key="result.label">
                  <span class="result-value">{{ result.value }}</span>
                  <span class="result-label">{{ result.label }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="tentang" class="section about">
      <div class="container">
        <div class="about-content">
          <div class="about-text fade-in" :class="{ 'visible': aboutVisible }">
            <h2 class="section-title">Tentang Stratigo</h2>
            <p class="about-description">
              Stratigo didirikan oleh Bryan, seorang mahasiswa Indonesia yang menempuh pendidikan Computer Science dan Artificial Intelligence di Jerman. 
              Berkomitmen untuk berkontribusi kembali kepada Indonesia, ia membangun perusahaan software untuk membantu perusahaan menerbitkan website, 
              memanfaatkan software dan AI secara efisien.
            </p>
            <div class="stats">
              <div class="stat-item">
                <h3>100%</h3>
                <p>Jaminan Uang Kembali</p>
              </div>
              <div class="stat-item">
                <h3>⚡</h3>
                <p>Pengerjaan Cepat & Berkualitas</p>
              </div>
              <div class="stat-item">
                <h3>4+</h3>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
          <div class="about-visual fade-in" :class="{ 'visible': aboutVisible }">
            <div class="tech-stack">
              <div class="tech-item" v-for="tech in techStack" :key="tech">
                {{ tech }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="kontak" class="section contact">
      <div class="container">
        <h2 class="section-title fade-in" :class="{ 'visible': contactVisible }">Hubungi Kami</h2>
        <div class="contact-content">
          <div class="contact-info fade-in" :class="{ 'visible': contactVisible }">
            <h3>Mari Berkolaborasi</h3>
            <p>Siap untuk mengembangkan bisnis Anda dengan website profesional dan teknologi AI terdepan? Hubungi tim Stratigo sekarang!</p>
            <div class="collaboration-points">
              <div class="collaboration-point">
                <svg class="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span>Booking Konsultasi gratis</span>
              </div>
              <div class="collaboration-point">
                <svg class="checkmark" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 12l2 2 4-4"/>
                  <circle cx="12" cy="12" r="10"/>
                </svg>
                <span>Pertanyaan seputar jasa Stratigo</span>
              </div>
            </div>
            <div class="contact-methods">
              <div class="contact-method">
                <strong>Email:</strong> info@stratigo.id
              </div>
              <div class="contact-method">
                <strong>Alamat:</strong> Jakarta, Indonesia
              </div>
            </div>
          </div>
          <div class="contact-form fade-in" :class="{ 'visible': contactVisible }">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <input type="text" v-model="form.name" placeholder="Nama Lengkap" required>
              </div>
              <div class="form-group">
                <input type="email" v-model="form.email" placeholder="Email" required>
              </div>
              <div class="form-group">
                <input type="tel" v-model="form.phone" placeholder="Nomor Telepon">
              </div>
              <div class="form-group">
                <input type="text" v-model="form.company" placeholder="Nama Perusahaan">
              </div>
              <div class="form-group">
                <select v-model="form.service" required>
                  <option value="" disabled>Pilih Layanan yang Diinginkan</option>
                  <option value="website">Pembuatan Website</option>
                  <option value="ai-software">Software AI</option>
                  <option value="ai-automation">Otomatisasi AI</option>
                </select>
              </div>
              <div class="form-group">
                <textarea v-model="form.message" placeholder="Pesan Anda" rows="5" required></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Kirim Pesan</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>Stratigo</h3>
            <p>Solusi Website & Software AI Terdepan</p>
          </div>
          <div class="footer-links">
            <div class="footer-section">
              <h4>Layanan</h4>
              <ul>
                <li><a href="#layanan">Website Perusahaan</a></li>
                <li><a href="#layanan">Software AI</a></li>
                <li><a href="#layanan">Otomasi AI</a></li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Perusahaan</h4>
              <ul>
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="#kontak">Kontak</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Stratigo. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
    <Analytics />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import caseStudy1Image from './assets/stratigo-ai-demo/demo-1.png'
import { Analytics } from "@vercel/analytics/vue"

// Reactive data
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)
const heroVisible = ref(false)
const servicesVisible = ref(false)
const caseStudiesVisible = ref(false)
const aboutVisible = ref(false)
const contactVisible = ref(false)

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: ''
})

const services = ref([
  {
    title: 'Website Perusahaan',
    description: 'Website modern dan responsif yang dipersonalisasi sesuai identitas perusahaan Anda.',
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
             <line x1="8" y1="21" x2="16" y2="21"/>
             <line x1="12" y1="17" x2="12" y2="21"/>
           </svg>`,
    features: [
      'Desain Modern & Responsif',
      'SEO Optimized',
      'Pembuatan Logo Gratis',
      'Foto Produk Profesional',
      'Integrasi Media Sosial'
    ]
  },
  {
    title: 'Software AI',
    description: 'Solusi software berbasis AI untuk meningkatkan efisiensi dan produktivitas bisnis.',
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M9 12l2 2 4-4"/>
             <path d="M21 12c.552 0 1-.448 1-1V5c0-.552-.448-1-1-1H3c-.552 0-1 .448-1 1v6c0 .552.448 1 1 1"/>
             <path d="M3 12v6c0 .552.448 1 1 1h16c.552 0 1-.448 1-1v-6"/>
           </svg>`,
    features: [
      'AI Meeting Recorder',
      'AI untuk Advertising',
      'Custom AI Software Solutions'
    ]
  },
  {
    title: 'Otomasi AI',
    description: 'Sistem otomasi cerdas yang disesuaikan untuk mengoptimalkan proses bisnis Anda.',
    icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M12 2v6l3-3 3 3"/>
             <path d="M12 8v6l-3-3-3 3"/>
             <path d="M12 14v6l3-3 3 3"/>
           </svg>`,
    features: [
      'Laporan Keuangan Otomatis',
      'API Integration',
      'Workflow Automation',
      'Chatbot Integration',
      'Data Processing'
    ]
  }
])

const techStack = ref([
  'Vue.js', 'React', 'Python', 'Node.js', 'TypeScript', 'JavaScript', 'SQL', 'NoSQL'
])

const caseStudies = ref([
  {
    title: 'Company Website untuk Brand Otomotif',
    category: 'Website Perusahaan',
    description: 'Membangun website perusahaan untuk brand otomotif yang menjual berbagai produk kendaraan.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    technologies: ['Vue.js', 'TypeScript'],
    results: [
      { value: '20+', label: 'Foto produk' },
      { value: '4+', label: 'Tahun pengalaman' }
    ]
  },
  {
    title: 'AI Meeting Assistant untuk Startup',
    category: 'Software AI',
    description: 'Mengembangkan aplikasi AI yang dapat merekam, mentranskrip, dan merangkum meeting secara otomatis.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
    technologies: ['Python', 'React', 'NoSQL'],
    results: [
      { value: '80%', label: 'Efisiensi Waktu' },
      { value: '95%', label: 'Akurasi Transkrip' }
    ]
  },
  {
    title: 'Sistem Laporan Keuangan Otomatis',
    category: 'Otomasi AI',
    description: 'Membangun sistem Artificial Intelligence yang secara otomatis menghasilkan laporan keuangan dari berbagai sumber data.',
    image: caseStudy1Image,
    technologies: ['Python', 'SQL', 'Vue', 'AI'],
    results: [
      { value: '90%', label: 'Pengurangan Waktu Manual' },
      { value: '99%', label: 'Akurasi Data' }
    ]
  },
  {
    title: 'AI Product Photo Generator untuk E-commerce',
    category: 'Software AI',
    description: 'Mengembangkan software AI yang dapat menghasilkan foto produk berkualitas tinggi secara otomatis untuk kebutuhan e-commerce dan marketing.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
    technologies: ['Python', 'AI/ML', 'React', 'API'],
    results: [
      { value: '75%', label: 'Pengurangan Biaya Fotografi' },
      { value: '10x', label: 'Kecepatan Produksi' }
    ]
  }
])

// Methods
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  // Intersection observer for animations
  const heroSection = document.querySelector('.hero')
  const servicesSection = document.querySelector('.services')
  const caseStudiesSection = document.querySelector('.case-studies')
  const aboutSection = document.querySelector('.about')
  const contactSection = document.querySelector('.contact')
  
  if (heroSection && isInViewport(heroSection)) {
    heroVisible.value = true
  }
  if (servicesSection && isInViewport(servicesSection)) {
    servicesVisible.value = true
  }
  if (caseStudiesSection && isInViewport(caseStudiesSection)) {
    caseStudiesVisible.value = true
  }
  if (aboutSection && isInViewport(aboutSection)) {
    aboutVisible.value = true
  }
  if (contactSection && isInViewport(contactSection)) {
    contactVisible.value = true
  }
}

const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const submitForm = () => {
  // Validate form
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Mohon lengkapi semua field yang wajib diisi.')
    return
  }
  
  // Create email content
  const subject = `Inquiry dari ${form.value.name} - ${form.value.service || 'Layanan Umum'}`
  const body = `Halo Tim Stratigo,

Saya ${form.value.name} dari ${form.value.company || 'perusahaan'}.

Layanan yang diminati: ${form.value.service || 'Belum ditentukan'}

Pesan:
${form.value.message}

Kontak saya:
Email: ${form.value.email}${form.value.phone ? `
Telepon: ${form.value.phone}` : ''}

Terima kasih,
${form.value.name}`

  // Create mailto URL
  const mailtoUrl = `mailto:info@stratigo.co.id?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  
  // Open email client
  window.location.href = mailtoUrl
  
  // Show success message
  alert('Email client Anda akan terbuka dengan pesan yang sudah diisi. Silakan kirim email tersebut.')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  }
}

// Lifecycle
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* Header Styles */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
}

.header.scrolled {
  background: rgba(10, 10, 10, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
}

.logo h2 {
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-size: 1.8rem;
  font-weight: 700;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-links a {
  color: var(--text-primary);
  text-decoration: none;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 500;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: var(--primary-orange);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  cursor: pointer;
  gap: 4px;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--primary-orange);
  transition: all 0.3s ease;
}

/* Hero Styles */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.highlight {
  background: linear-gradient(135deg, var(--primary-orange), var(--secondary-orange));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.floating-card {
  background: var(--dark-secondary);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  border: 1px solid var(--dark-tertiary);
  animation: float 6s ease-in-out infinite;
}

.code-lines {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.line {
  height: 8px;
  background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
  border-radius: 4px;
  width: 200px;
}

.line.short {
  width: 120px;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Services Styles */
.services {
  background: var(--dark-secondary);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.service-card {
  background: var(--dark-bg);
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid var(--dark-tertiary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-orange), var(--secondary-orange));
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
}

.service-icon {
  color: var(--primary-orange);
  margin-bottom: 1.5rem;
}

.service-card h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.service-card p {
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.service-features {
  list-style: none;
}

.service-features li {
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--primary-orange);
  font-weight: bold;
}

/* Case Studies Styles */
.case-studies {
  background: var(--dark-bg);
}

.section-subtitle {
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.case-studies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.case-study-card {
  background: var(--dark-secondary);
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid var(--dark-tertiary);
  transition: all 0.3s ease;
}

.case-study-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(255, 107, 53, 0.15);
}

.case-study-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.case-study-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.case-study-card:hover .case-study-image img {
  transform: scale(1.05);
}

.case-study-overlay {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.case-study-category {
  background: var(--primary-orange);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 600;
}

.case-study-content {
  padding: 2rem;
}

.case-study-content h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text-primary);
  letter-spacing: -0.02em;
}

.case-study-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.case-study-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: var(--dark-tertiary);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
}

.case-study-results {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.result-item {
  text-align: center;
  padding: 1rem;
  background: var(--dark-bg);
  border-radius: 0.5rem;
  border: 1px solid var(--dark-tertiary);
}

.result-value {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 0.25rem;
}

.result-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* About Styles */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-description {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-item {
  text-align: center;
}

.stat-item h3 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-orange);
  margin-bottom: 0.5rem;
}

.stat-item p {
  color: var(--text-secondary);
  font-weight: 500;
}

.tech-stack {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

.tech-item {
  background: var(--dark-secondary);
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  font-weight: 500;
  border: 1px solid var(--dark-tertiary);
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: var(--primary-orange);
  transform: translateY(-2px);
}

/* Contact Styles */
.contact {
  background: var(--dark-secondary);
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.contact-info h3 {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary-orange);
  letter-spacing: -0.02em;
}

.contact-info p {
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.collaboration-points {
  margin-bottom: 2rem;
}

.collaboration-point {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: var(--text-secondary);
}

.collaboration-point:last-child {
  margin-bottom: 0;
}

.collaboration-point .checkmark {
  color: var(--primary-orange);
  flex-shrink: 0;
}

.collaboration-point span {
  font-size: 1rem;
  line-height: 1.4;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-method {
  color: var(--text-secondary);
}

.contact-method strong {
  color: var(--text-primary);
}

.contact-form {
  background: var(--dark-bg);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--dark-tertiary);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 1rem;
  background: var(--dark-secondary);
  border: 1px solid var(--dark-tertiary);
  border-radius: 0.5rem;
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--primary-orange);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: var(--text-muted);
}

.form-group select option {
  background: var(--dark-secondary);
  color: var(--text-primary);
}

.form-group select option:disabled {
  color: var(--text-muted);
}

/* Footer Styles */
.footer {
  background: var(--dark-bg);
  border-top: 1px solid var(--dark-tertiary);
  padding: 3rem 0 1rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--primary-orange);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.footer-brand p {
  color: var(--text-secondary);
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.footer-section h4 {
  font-family: 'Space Grotesk', sans-serif;
  color: var(--text-primary);
  margin-bottom: 1rem;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--primary-orange);
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid var(--dark-tertiary);
  color: var(--text-muted);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }
  
  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--dark-bg);
    flex-direction: column;
    padding: 2rem;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
  
  .nav-links.active {
    transform: translateX(0);
  }
  
  .hero {
    padding-top: 80px;
  }
  
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .case-studies-grid {
    grid-template-columns: 1fr;
  }
  
  .about-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .stats {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .tech-stack {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .footer-links {
    grid-template-columns: 1fr;
  }
}
</style> 