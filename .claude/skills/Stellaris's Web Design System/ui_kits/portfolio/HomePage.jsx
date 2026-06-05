// Home — hero + profile intro
function HomePage({ onNavigate }) {
  const intro = 'Hi，我的名字是黃偉綸，畢業於資工系，目前是前端設計學習者，對待前端就如同其他我所熱愛的事物一樣，持續精進自己的能力，並且將所學投入到實務當中。透過了解網站背景及使用者的需求，設計出合理且吸引人的 UI/UX 介面，將設計與 Vue.js 還有 JavaScript 精準融合，創造出生動且有趣的網站。';
  return (
    <main className="page">
      <section className="hero">
        <div>
          <span className="overline hero-eyebrow">// 歡迎來到我的網站</span>
          <h1 className="hero-name">你好，我是<span className="accent">黃偉綸</span></h1>
          <div className="hero-sub">
            <span className="dash"></span>
            <p>前端設計學習者</p>
          </div>
          <Button variant="primary" size="lg" arrow onClick={() => onNavigate('projects')}>了解更多</Button>
        </div>
        <div className="hero-photo">
          <img src="myPhoto.jpg" alt="黃偉綸" />
        </div>
      </section>

      <section className="profile">
        <h2 className="section-head">個人簡介</h2>
        <div className="rule-arrow">
          <span className="line"></span>
          <span className="head"><Icon name="arrow" size={22} stroke={2} /></span>
        </div>
        <div className="profile-body">
          <p>{intro}</p>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { HomePage });
