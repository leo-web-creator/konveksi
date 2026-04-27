import { createIcons, ShieldCheck, Globe, Zap, CheckCircle2, ChevronRight, Phone, Mail, MapPin, Menu, X } from 'lucide';
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const APP_NAME = "CONVECTION";
const COPYRIGHT_HOLDER = "LEO-Budiharto";

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "uniforms": "Uniforms",
        "sports": "Sports",
        "custom": "Custom",
        "about": "About",
        "contact": "Contact"
      },
      "hero": {
        "title": "Precision in Every Stitch,",
        "accent": "Custom Identity",
        "subtitle": "Premium clothing manufacturer specializing in uniforms, sports apparel, and custom creations.",
        "cta": "Explore Collections",
        "quote": "Get Quote",
        "badge": "Certified Excellence",
        "quality": "Premium Quality",
        "quality_sub": "Expertly Crafted"
      },
      "categories": {
        "title": "Crafted for Excellence",
        "subtitle": "We merge traditional craftsmanship with modern design to deliver apparel that empowers organizations and athletes.",
        "uniforms_title": "Professional Uniforms",
        "uniforms_desc": "Durable and elegant school and corporate attire designed for comfort and identity.",
        "sports_title": "Performance Sports",
        "sports_desc": "High-tech athletic wear engineered for peak performance and dynamic teams.",
        "custom_title": "Custom Creations",
        "custom_desc": "Unique shirts and apparel tailored to your specific brand and vision.",
        "view": "VIEW COLLECTION"
      },
      "about_page": {
        "title": "Our Legacy of Craft",
        "desc1": "With over a decade of experience, we specialize in high-volume garment production that doesn't compromise on individual quality. Our facility combines state-of-the-art machinery with skilled artisanal techniques.",
        "desc2": "Founded on the principles of precision and durability, we have grown from a small workshop into a leading provider of professional and athletic apparel.",
        "years": "Years Experience",
        "delivered": "Items Delivered"
      },
      "uniforms_page": {
        "title": "Professional Uniforms",
        "desc": "We provide high-quality uniforms for schools and corporations, focusing on comfort, durability, and a polished appearance.",
        "f1": "Custom Embroidery",
        "f2": "Durable Fabric Options",
        "f3": "Bulk Order Discounts",
        "f4": "Rapid Production"
      },
      "sports_page": {
        "title": "Performance Sports Apparel",
        "desc": "Engineered for elite performance. Our sports apparel uses moisture-wicking technology and ergonomic designs.",
        "f1": "Moisture-Wicking",
        "f1_desc": "Keep cool and dry with our advanced fabric technology.",
        "f2": "Flexible Fit",
        "f2_desc": "Enhanced mobility for dynamic movements and high-intensity activities.",
        "f3": "Breathable Mesh",
        "f3_desc": "Superior ventilation built into every high-performance jersey."
      },
      "custom_page": {
        "title": "Custom Creations",
        "desc": "If you can dream it, we can stitch it. Our custom creation service is for those who need something unique.",
        "f1": "Bespoke Design",
        "f2": "Material Choice",
        "f3": "Prototype Service",
        "f4": "Eco-Friendly Ink"
      },
      "contact_page": {
        "title": "Start Your Project",
        "subtitle": "Ready to elevate your brand with custom apparel? Our experts are here to help you through the process.",
        "cta": "Contact Us Now",
        "call": "Call Us",
        "email": "Email Us",
        "visit": "Visit Us"
      },
      "footer": {
        "rights": "© 2026 " + COPYRIGHT_HOLDER + ". All rights reserved."
      }
    }
  },
  id: {
    translation: {
      "nav": {
        "home": "Beranda",
        "uniforms": "Seragam",
        "sports": "Olahraga",
        "custom": "Kustom",
        "about": "Tentang",
        "contact": "Kontak"
      },
      "hero": {
        "title": "Presisi di Setiap Jahitan,",
        "accent": "Identitas Kustom",
        "subtitle": "Produsen pakaian premium spesialis seragam, pakaian olahraga, dan kreasi kustom.",
        "cta": "Jelajahi Koleksi",
        "quote": "Minta Penawaran",
        "badge": "Keunggulan Bersertifikat",
        "quality": "Kualitas Premium",
        "quality_sub": "Dibuat Secara Ahli"
      },
      "categories": {
        "title": "Dibuat untuk Keunggulan",
        "subtitle": "Kami menggabungkan keahlian tradisional dengan desain modern untuk menghadirkan pakaian yang memberdayakan organisasi dan atlet.",
        "uniforms_title": "Seragam Profesional",
        "uniforms_desc": "Pakaian sekolah dan korporat yang tahan lama dan elegan, dirancang untuk kenyamanan dan identitas.",
        "sports_title": "Olahraga Performa",
        "sports_desc": "Pakaian atletik teknologi tinggi yang dirancang untuk performa puncak dan tim yang dinamis.",
        "custom_title": "Kreasi Kustom",
        "custom_desc": "Kemeja dan pakaian unik yang disesuaikan dengan merek dan visi spesifik Anda.",
        "view": "LIHAT KOLEKSI"
      },
      "about_page": {
        "title": "Warisan Keahlian Kami",
        "desc1": "Dengan pengalaman lebih dari satu dekade, kami berspesialisasi dalam produksi pakaian bervolume tinggi yang tidak mengkompromikan kualitas individu. Fasilitas kami menggabungkan mesin mutakhir dengan teknik pengerjaan tangan yang terampil.",
        "desc2": "Didirikan atas prinsip presisi dan daya tahan, kami telah tumbuh dari bengkel kecil menjadi penyedia pakaian profesional dan atletik terkemuka.",
        "years": "Tahun Pengalaman",
        "delivered": "Item Dikirim"
      },
      "uniforms_page": {
        "title": "Seragam Profesional",
        "desc": "Kami menyediakan seragam berkualitas tinggi untuk sekolah dan korporasi, dengan fokus pada kenyamanan, daya tahan, dan penampilan yang rapi.",
        "f1": "Bordir Kustom",
        "f2": "Opsi Kain Tahan Lama",
        "f3": "Diskon Pesanan Massal",
        "f4": "Produksi Cepat"
      },
      "sports_page": {
        "title": "Pakaian Olahraga Performa",
        "desc": "Dirancang untuk performa elit. Pakaian olahraga kami menggunakan teknologi penyerap keringat dan desain ergonomis.",
        "f1": "Penyerap Keringat",
        "f1_desc": "Tetap sejuk dan kering dengan teknologi kain canggih kami.",
        "f2": "Kecocokan Fleksibel",
        "f2_desc": "Mobilitas yang ditingkatkan untuk gerakan dinamis dan aktivitas intensitas tinggi.",
        "f3": "Mesh Bernapasi",
        "f3_desc": "Ventilasi unggul yang terpasang pada setiap jersey berperforma tinggi."
      },
      "custom_page": {
        "title": "Kreasi Kustom",
        "desc": "Jika Anda bisa memimpikannya, kami bisa menjahitnya. Layanan kreasi kustom kami adalah bagi mereka yang butuh sesuatu yang unik.",
        "f1": "Desain Pesanan",
        "f2": "Pilihan Material",
        "f3": "Layanan Prototipe",
        "f4": "Tinta Ramah Lingkungan"
      },
      "contact_page": {
        "title": "Mulai Proyek Anda",
        "subtitle": "Siap meningkatkan merek Anda dengan pakaian kustom? Pakar kami di sini untuk membantu Anda melalui proses tersebut.",
        "cta": "Hubungi Kami Sekarang",
        "call": "Hubungi Kami",
        "email": "Kirim Email",
        "visit": "Kunjungi Kami"
      },
      "footer": {
        "rights": "© 2026 " + COPYRIGHT_HOLDER + ". Seluruh hak cipta dilindungi."
      }
    }
  }
};

i18next
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'id', // Force default language to Indonesian
    fallbackLng: 'id',
    detection: {
      order: ['localStorage', 'cookie', 'navigator'],
      caches: ['localStorage', 'cookie']
    },
    interpolation: { escapeValue: false }
  }, (err, t) => {
    if (err) return console.error(err);
    updateContent();
    highlightLanguageButtons();
  });

function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerText = i18next.t(key);
  });
}

// Language Switcher Logic
window.setLanguage = (lng) => {
  i18next.changeLanguage(lng, () => {
    updateContent();
    highlightLanguageButtons();
  });
};

function highlightLanguageButtons() {
  const currentLng = i18next.language.split('-')[0];
  document.querySelectorAll('[data-lng]').forEach(btn => {
    if (btn.getAttribute('data-lng') === currentLng) {
      btn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      btn.classList.remove('text-slate-600');
    } else {
      btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
      btn.classList.add('text-slate-600');
    }
  });
}

// Background Liquid Animation
function initBackground() {
  const container = document.querySelector('.liquid-bg');
  if (!container) return;
  container.innerHTML = '';
  
  const orbs = [
    { x: 10, y: 10, size: 400, color: '#6366f1', delay: 0 },
    { x: 80, y: 20, size: 500, color: '#ec4899', delay: 5 },
    { x: 50, y: 70, size: 450, color: '#3b82f6', delay: 2 }
  ];

  orbs.forEach(orbData => {
    const orb = document.createElement('div');
    orb.className = 'orb';
    orb.style.width = `${orbData.size}px`;
    orb.style.height = `${orbData.size}px`;
    orb.style.background = orbData.color;
    orb.style.left = `${orbData.x}%`;
    orb.style.top = `${orbData.y}%`;
    orb.style.animationDelay = `${orbData.delay}s`;
    container.appendChild(orb);
  });
}

// Mobile Menu
window.toggleMenu = () => {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
};

// Initialize everything on load
document.addEventListener('DOMContentLoaded', () => {
  createIcons({
    icons: { ShieldCheck, Globe, Zap, CheckCircle2, ChevronRight, Phone, Mail, MapPin, Menu, X }
  });
  initBackground();
  highlightLanguageButtons();
  
  // Intersection Observer for scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
});

