new Vue({
    el: '#app',
    data: {
      dotColor: 'rgb(255, 255, 255)',
      currentLanguage: 'en',
      texts: {
        ja: {
          home: 'ホーム',
          about: '紹介',
          services: 'サービス',
          contact: 'お問い合わせ',
          recent: '最近の仕事',
          Mastering: 'インド留学のウェブサイト',
          Mastering1: '留学のウェブサイト',
          Mastering2: 'なし',
          Mastering3: 'なし',
          Theimportance: 'インドの留学サイトを作成しました。インドの国旗の色である緑、オレンジ、白を特徴としてデザインしております。サイトには、留学プログラムの詳細、申請手続きに関する情報、学生の体験談などを掲載しています。また、訪問者が簡単に情報を見つけられるように、ナビゲーションがわかりやすく設計されています。',
          Theimportance1: 'インドの留学サイトを作成しました。インドの国旗の緑、オレンジ、白を特徴としています。留学プログラムの詳細や申請手続き、学生の体験談を掲載し、使いやすいナビゲーションとコンタクトフォームも備えています。',
          Theimportance2: 'なし',
          Theimportance3: 'なし',
        },
        en: {
          home: 'Home',
          about: 'About',
          services: 'Services',
          contact: 'Contact',
          recent: 'Recent Works',
          Mastering: 'study abroad website',
          Mastering1: 'study abroad website for India',
          Mastering2: 'none',
          Mastering3: 'none',        
          Theimportance: 'I created a website with blue as the main color, incorporating various shades of blue in the navigation bar and background. It is responsive and includes features such as a contact form, an interactive gallery, and a blog section.',
          Theimportance1: 'I created a study abroad website for India, featuring the colors of the Indian flag: green, orange, and white. It includes details about study programs, application procedures, and student testimonials, with user-friendly navigation and a contact form.',
          Theimportance2: 'none',
          Theimportance3: 'none',
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
      { menu: document.getElementById('hamburger-menu'), sideMenu: document.getElementById('side-menu') }
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
  
  function createWave(containerClass, animationClass) {
    const waveContainer = document.querySelector(containerClass);
    if (!waveContainer) return;
  
    for (let i = 0; i < 12; i++) { 
      for (let j = 0; j < 12; j++) {
        const waveElement = document.createElement('div'); // 新しいdiv要素を作成
        waveElement.classList.add('wave');
        if ((i + j) % 5 === 0) { // 特定の条件を満たす場合
          waveElement.classList.add('red'); // redクラスを追加
        }
        const arrow = document.createElement('div');
        arrow.classList.add('arrow'); 
        waveElement.appendChild(arrow);
        waveContainer.appendChild(waveElement);
      }
    }
  
    // アニメーションを追加
    waveContainer.classList.add(animationClass);
  }