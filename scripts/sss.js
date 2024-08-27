new Vue({
  el: '#app',
  data: {
    showPageOne: true,
    showBlackout: false,
    dotColor: 'rgb(255, 255, 255)',
    scrollLocked: false,
    showIcons: false,
    showBoxes: false,
    currentLanguage: 'en',
    texts: {
      ja: {
        home: 'ホーム',
        about: '紹介',
        services: 'サービス',
        contact: 'お問い合わせ',
        exploreWorks: '作品を探る',
        contentStrategy: 'コンテンツ戦略',
        work: '仕事',
        contact: '連絡',
        recent: '最近の仕事',
        Mastering: 'インド留学サイト',
        Theimportance: 'こちらのインド留学は、インドでIT、建築、英語を学びたい留学生のための総合情報サイトです。インドの優れた教育機関、充実したコース内容、ビザ手続きなど、留学に必要なすべての情報を提供します。',
        studyaborad: '留学サイト',
        studyaborad1: '青を基調としたデザインで作成した留学サイトは、視覚的に魅力的で直感的なナビゲーションと豊富なコンテンツを提供し、ユーザーに信頼感と安心感を与えながら、留学に関する情報とサポートを総合的に提供しています',

      },
      en: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        contact: 'Contact',
        exploreWorks: 'Explore Works',
        contentStrategy: 'Content Strategy',
        work: 'Work',
        contact: 'Contact',
        recent: 'Recent Works',
        Mastering: 'Study Aborad Website in india',
        Theimportance: 'India Study is a comprehensive information site for international students who want to study IT, architecture, and English in India. It provides all the necessary information for studying abroad, including details about Indias excellent educational institutions, comprehensive course offerings, and visa procedures',
        studyaborad: 'Study Aborad Website',
        studyaborad1: 'The study abroad site, designed with a blue-based theme, offers visually appealing and intuitive navigation along with rich content, providing comprehensive information and support about studying abroad, while instilling trust and confidence in users.',
      }
    }
  },
  methods: {
    handleScroll() {
      if (this.scrollLocked) {
        window.scrollTo(0, 0);
        return;
      }

      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const colorValue = Math.max(0, Math.round(255 * (1 - scrollPercent * 5)));
      this.dotColor = `rgb(255, ${colorValue}, ${colorValue})`;
    },
    initializeWaves() {
      createWave('.wave-container', 'animate-right'); // 右からゆっくり表示する矢印
    },
    lockScroll() {
      this.scrollLocked = true;
      setTimeout(() => {
        this.scrollLocked = false;
      }, 500);
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'ja' ? 'en' : 'ja';
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
    this.initializeWaves();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    showPageOne(newVal) {
      if (!newVal) {
        this.showBlackout = true;
        document.getElementById('side-menu1').style.visibility = 'hidden';
        setTimeout(() => {
          this.showBlackout = false;
          this.$nextTick(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            this.lockScroll();
            document.getElementById('side-menu1').style.visibility = 'visible';
          });
        }, 100);
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const menus = [
    { menu: document.getElementById('hamburger-menu'), sideMenu: document.getElementById('side-menu') },
    { menu: document.getElementById('hamburger-menu1'), sideMenu: document.getElementById('side-menu1') }
  ];

  menus.forEach(function(item) {
    item.menu.addEventListener('click', function() {
      if (item.sideMenu.classList.contains('side-menu-open')) {
        item.sideMenu.classList.remove('side-menu-open');
        item.menu.classList.remove('open');
      } else {
        item.sideMenu.classList.add('side-menu-open');
        item.menu.classList.add('open');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const floatingElements = document.querySelectorAll('.floating-element');

  function checkVisibility() {
    floatingElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        element.classList.add('float-in');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); 
});

function createWave(containerClass, animationClass) {
  const waveContainer = document.querySelector(containerClass); 
  if (!waveContainer) return;

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 12; j++) {
      const waveElement = document.createElement('div');
      waveElement.classList.add('wave');
      if ((i + j) % 5 === 0) {
        waveElement.classList.add('red');
      }
      const arrow = document.createElement('div');
      arrow.classList.add('arrow');
      waveElement.appendChild(arrow);
      waveContainer.appendChild(waveElement);
    }
  }

  waveContainer.classList.add(animationClass);
}