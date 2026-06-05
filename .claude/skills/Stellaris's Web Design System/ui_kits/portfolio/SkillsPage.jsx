// Skills — grid of skill cards (Devicon logo + 5-star rating)
function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      <i className={skill.icon}></i>
      <div className="skill-name">{skill.name}</div>
      <Stars level={skill.level} />
    </div>
  );
}

function SkillsPage() {
  const { skills } = window.STELLARIS_DATA;
  return (
    <main className="page">
      <h1 className="page-title">我的技能</h1>
      <div className="skills-grid">
        {skills.map(s => <SkillCard key={s.name} skill={s} />)}
      </div>
    </main>
  );
}

Object.assign(window, { SkillCard, SkillsPage });
