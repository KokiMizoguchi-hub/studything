new Vue({
  el: '#app',
  data: {
    showPageOne: true,
    showBlackout: false,
    dotColor: 'rgb(255, 255, 255)',
    scrollLocked: false,
    isZooming: false,
    showIcons: false,
    showBoxes: false,
    currentLanguage: 'en',
    texts: {
      ja: {
        home: 'ホーム',
        about: '紹介',
        works: '作成品',
        contact: 'お問い合わせ',
        exploreWorks: '作品を探る',
        contentStrategy: 'コンテンツ戦略',
        work: '仕事',
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
        Alittlebitaboutme: '自己紹介',
        began: 'こんにちは、ウェブ開発者のKokiと申します。私はウェブ開発者としてのキャリアを築いており、1年間の独学期間を経て、HTML、CSS、JavaScript、Python、UI/UXなどのプログラミング言語を習得しました。その後、インドのITスクールで6か月間学び、さらに深い知識と実践的なスキルを身に付けました。',
        introduce: "これまでに、1つのフリーランスプロジェクトを独立して完了しました。クライアントの要件を元に設計から実装まで一貫して担当し、高い評価を得ました。現在は日本の会社で働いており、英語とプログラミングのスキルを活かして、フロントエンドおよびバックエンドの開発に取り組んでいます。",
      },
      en: {
        home: 'Home',
        about: 'About',
        works: 'Works',
        contact: 'Contact',
        exploreWorks: 'Explore Works',
        contentStrategy: 'Content Strategy',
        work: 'Work',
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
        Alittlebitaboutme: 'A little bit about me',
        began: 'Hello, my name is Koki Mizoguchi, and I am a web developer. I have built my career in web development through a year of self-study, during which I learned programming languages such as HTML, CSS, JavaScript, Python, and UI/UX design. Following that, I attended an IT school in India for six months, where I gained deeper knowledge and practical skills.',
        introduce: "So far, I have successfully completed one freelance project independently. I was responsible for everything from design to implementation based on the client's requirements, and I received high praise for my work. Currently, I am working for a company in Japan, where I utilize my skills in English and programming to work on both front-end and back-end development."
      }
    },
    waveAnimated: {
      waveContainer: false,
      waveContainer1: false,
      waveContainer2: false
    },
    waveCreated: {
      waveContainer: false,
      waveContainer1: false,
      waveContainer2: false
    }
  },
  methods: {
    handleScroll() {
      if (this.scrollLocked) {
        window.scrollTo(0, 0);
        return;
      }

      const threshold = document.querySelector('.page6').offsetHeight;

      if (window.scrollY >= threshold) {
        this.showPageOne = false;
      } else {
        this.showPageOne = true;
      }

      const iconThreshold = 290;
      if (window.scrollY >= iconThreshold && !this.showIcons) {
        this.showIcons = true;
      }

      const boxThreshold = document.querySelector('.box3').offsetTop - window.innerHeight + 100;
      if (window.scrollY >= boxThreshold && !this.showBoxes) {
        this.showBoxes = true;
      }

      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const colorValue = Math.max(0, Math.round(255 * (1 - scrollPercent * 5)));
      this.dotColor = `rgb(255, ${colorValue}, ${colorValue})`;

      this.checkWaveContainerVisibility('.wave-container', 'waveContainer');
      this.checkWaveContainerVisibility('.wave-container1', 'waveContainer1');
      this.checkWaveContainerVisibility('.wave-container2', 'waveContainer2');
    },
    checkWaveContainerVisibility(selector, key) {
      const waveContainer = document.querySelector(selector);
      if (waveContainer) {
        const rect = waveContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0 && !this.waveAnimated[key]) {
          waveContainer.classList.add('visible');
          if (!this.waveCreated[key]) {
            createWave(selector, key === 'waveContainer1' ? 'animate-left' : 'animate-right');
            this.waveCreated[key] = true;
          }
          this.waveAnimated[key] = true;
        } else if (rect.top >= window.innerHeight || rect.bottom < 0) {
          waveContainer.classList.remove('visible');
          this.waveAnimated[key] = false;
        }
      }
    },
    initializeWaves() {
    },
    lockScroll() {
      this.scrollLocked = true;
      setTimeout(() => {
        this.scrollLocked = false;
      }, 500);
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'ja' ? 'en' : 'ja';
    },
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
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

console.log('waveContainer1:', this.waveAnimated['waveContainer1']);
