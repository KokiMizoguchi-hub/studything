new Vue({
    el: '#app',
    data: {
        dotColor: 'rgb(255, 0, 0)', // 初期値を赤色に設定
        currentLanguage: 'en', // デフォルトは英語
        texts: {
            ja: {
                home: 'ホーム',
                about: '紹介',
                services: 'サービス',
                contact: 'お問い合わせ',
                contact1: 'お問い合わせ',
                name: '名前',
                mail: 'メール',
                message: 'メッセージ',
                send: '送信',
            },
            en: {
                home: 'Home',
                about: 'About',
                services: 'Services',
                contact: 'Contact',
                contact1: 'Contact',
                name: 'Name',
                mail: 'E-mail',
                message: 'Message',
                send: 'Send',
            }
        },
        scrollLocked: false, // スクロールロックの状態を保持するフラグ
        showBlackout: false, // ブラックアウト効果を管理するフラグ
        showPageOne: true, // ページ表示の管理（仮想的な例として）
    },
    methods: {
        handleScroll() {
            if (this.scrollLocked) {
                window.scrollTo(0, 0); // スクロールをロックしている場合、スクロール位置を固定
                return;
            }

            // ここでのドット色の変更ロジックは削除されました
        },
        initializeWaves() {
            createWave('.wave-container', 'animate-right'); // 波を初期化して右からアニメーションさせる
        },
        lockScroll() {
            this.scrollLocked = true; // スクロールをロック
            setTimeout(() => {
                this.scrollLocked = false; // 500ms後にスクロールロックを解除
            }, 500);
        },
        toggleLanguage() {
            // 言語を切り替える
            this.currentLanguage = this.currentLanguage === 'ja' ? 'en' : 'ja';
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll); // スクロールイベントを追加
        this.initializeWaves(); // 波を初期化
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll); // コンポーネントが破棄される前にイベントを削除
    },
    watch: {
        showPageOne(newVal) {
            if (!newVal) {
                this.showBlackout = true; // ページ切り替え時にブラックアウト効果を適用
                document.getElementById('side-menu').style.visibility = 'hidden'; // サイドメニューを非表示

                setTimeout(() => {
                    this.showBlackout = false; // ブラックアウト効果を解除
                    this.$nextTick(() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' }); // スクロール位置をリセット
                        this.lockScroll(); // スクロールを一時的にロック
                        document.getElementById('side-menu').style.visibility = 'visible'; // サイドメニューを再表示
                    });
                }, 100);
            }
        }
    }
});

// DOMコンテンツが読み込まれた後に実行されるスクリプト
document.addEventListener('DOMContentLoaded', function() {
    const menus = [
        { menu: document.getElementById('hamburger-menu'), sideMenu: document.getElementById('side-menu') }
    ];

    // ハンバーガーメニューとサイドメニューの開閉処理
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

// 波を生成する関数
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

    waveContainer.classList.add(animationClass);
}
