// Project detail — back link, big shot, tags, description, floating link card
function ProjectDetailPage({ projectId, onBack }) {
  const { projects } = window.STELLARIS_DATA;
  const project = projects.find(p => p.id === projectId) || projects[0];
  return (
    <main className="page">
      <button className="detail-back" onClick={onBack}>
        <Icon name="back" size={18} stroke={2} /> 回到作品列表
      </button>
      <h1 className="detail-title">{project.title}</h1>

      <div className="detail-hero">
        <Icon name="image" size={64} stroke={1.1} />
      </div>

      <div className="detail-tags">
        {project.stack.map(t => <TagBadge key={t} large>{t}</TagBadge>)}
      </div>

      <h2 className="detail-section">專案敘述</h2>
      <div className="rule-arrow">
        <span className="line"></span>
        <span className="head"><Icon name="arrow" size={22} stroke={2} /></span>
      </div>

      <div className="detail-grid">
        <p className="detail-desc">{project.desc}</p>
        <aside className="link-card">
          <span className="lc-label">連結</span>
          <button className="link-btn gh"><Icon name="link" size={17} stroke={1.8} /> GitHub</button>
          <button className="link-btn demo"><Icon name="globe" size={17} stroke={1.6} /> Demo</button>
        </aside>
      </div>
    </main>
  );
}

Object.assign(window, { ProjectDetailPage });
