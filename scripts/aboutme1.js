new Vue({
    el: "#app",
    data: {
      currentLanguage: {},
      selectedLanguage: 'ja',
      texts: {
        ja: {
          aboutme: '私は1年間の独学を通じて、HTML、CSS、JavaScript、Python、そしてUI/UXデザインを学び、ウェブ開発のキャリアを築きました。その後、インドのITスクールで6か月間学び、より深い知識と実践的なスキルを身に付けました。また、デザインから実装までを一人で担当したフリーランスプロジェクトを完了し、高い評価を得ました。様々な国での経験は、デザインスキルを向上させ、文化的な視点を取り入れたクリエイティブな提案ができるようになりました。現在は日本で働いており、英語とプログラミングのスキルを活かして、フロントエンドとバックエンドの開発に取り組んでいます。',
          languages: 'プログラミング言語',
          explanation1: '私は1年間独学でHTML、CSS、JavaScript、Python、UI/UXデザインを学び、ウェブ開発のキャリアを築きました。その後、インドのITスクールに6か月間通い、より深い知識と実践的なスキルを身に付けました。私は自分のウェブサイトを作成し、言語切り替えボタンを実装して、海外と日本の両方で働くことを目指しました。また、クライアントプロジェクトとして留学ウェブサイトのUI/UXデザインを改善し、そのウェブサイトを開発しました。さらに、マッチングアプリの開発では、アイデンティティの露出を防ぐためにプロフィール写真がアニメーションする機能を組み込みました。',
          experience1: '職務経験',
          explanation2: '私はPython、HTML、CSS、JavaScriptを中心に、さまざまなプログラミング言語に精通しています。これらの言語を活用して、効率的かつ効果的なフロントエンドとバックエンドのソリューションを開発しています。また、JavaScriptフレームワークであるVue.jsを使用して、ユーザーにとって直感的でインタラクティブなフロントエンドアプリケーションを構築しています。サーバーサイドでは、Node.jsを活用してスケーラブルで高性能なバックエンドシステムを開発し、リアルタイムデータ処理やAPI構築を可能にしています。データベース管理にはMySQLを使用し、大規模なデータセットの管理やクエリの最適化を通じてデータの整合性とパフォーマンスを確保しています。これらの技術を統合することで、スケーラブルなウェブアプリケーションを開発しています。',
          experience2: '留学経験',
          explanation3: '高校卒業後、私は10カ国以上を旅行し、さまざまな文化を体験してきました。海外旅行を通じて、日本の美しさをさらに認識することができ、日本の文化や習慣を大切にするようになりました。これにより、日本の生活の独自の魅力や快適さ、そして他の国々との違いを深く理解する機会を得ました。'
        },
        en: {
          aboutme: 'I built my web development career through a year of self-study, learning HTML, CSS, JavaScript, Python, and UI/UX design. I then attended an IT school in India for six months, gaining deeper knowledge and practical skills. I have completed a freelance project independently, handling design to implementation and earning high praise. Diverse experiences in various countries have enhanced my design skills, allowing creative proposals with a cultural perspective. Currently, I work in Japan, utilizing my skills in English and programming for both front-end and back-end development.',
          languages: 'Programming Languages',
          explanation1: 'I studied HTML, CSS, JavaScript, Python, and UI/UX design independently for a year, building my web development career. I then attended an IT school in India for six months, where I gained deeper knowledge and practical skills. I created my own website, implementing a language switch button to easily toggle between languages, aiming to work both overseas and in Japan. Additionally, I improved the UI/UX design of a study abroad website as a client project and developed the website. Furthermore, in developing a matching app, I incorporated a feature that animates profile pictures to prevent identity exposure.',
          experience1: 'Work Experience',
          explanation2: 'I am proficient in a variety of programming languages, with a particular focus on Python, HTML, CSS, and JavaScript. Utilizing these languages, I develop both front-end and back-end solutions that are efficient and effective. Furthermore, I use the JavaScript framework Vue.js to build intuitive and interactive front-end applications for users. On the server side, I leverage Node.js to develop scalable and high-performance back-end systems, enabling real-time data processing and API construction. For database management, I use MySQL, ensuring data integrity and performance through the management of large datasets and query optimization. By integrating these technologies, I develop scalable web applications.',
          experience2: 'Study Abroad Experience',
          explanation3: 'I have traveled to over ten countries since graduating from high school, experiencing various cultures. Traveling abroad has allowed me to appreciate the beauty of Japan even more, helping me to recognize and value Japanese culture and customs. It provided me with an opportunity to deeply understand the unique charm and comfort of life in Japan, as well as its differences from other countries.',
        }
      },
      waves: []
    },
    methods: {
        switchLanguage: function(lang) {
          this.selectedLanguage = lang;
          this.currentLanguage = this.texts[lang];
        },
        createWaves() {
            for (let i = 0; i < 148; i++) {
                this.waves.push({ isRed: i % 2 === 0 });
            }
        }
    },
    mounted: function() {
        this.switchLanguage(this.selectedLanguage);
        this.createWaves();
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