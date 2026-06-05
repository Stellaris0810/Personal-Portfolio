// Project card — cover thumb, tags, title, summary, favorite, CTA
function ProjectCard({ project, favorited, onToggleFav, onViewDetail }) {
  return (
    <div className="proj-card">
      <div className="proj-thumb">
        <Icon name="image" size={46} stroke={1.2} />
        <button
          className="proj-fav"
          onClick={() => onToggleFav(project.id)}
          aria-label="收藏"
          style={favorited ? { color: '#c0392b' } : { color: '#5D4037' }}
        >
          <Icon name={favorited ? 'heart-fill' : 'heart'} size={18} stroke={1.6} fill={favorited ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="proj-body">
        <div className="proj-tags">
          {project.tags.map(t => <TagBadge key={t}>{t}</TagBadge>)}
        </div>
        <h3 className="proj-title">{project.title}</h3>
        <p className="proj-summary">{project.summary}</p>
        <Button variant="primary" size="md" block onClick={() => onViewDetail(project.id)}>查看作品</Button>
      </div>
    </div>
  );
}

// Projects — windowed carousel (3 visible) + arrows + dots
function ProjectsPage({ favorites, onToggleFav, onViewDetail }) {
  const { projects } = window.STELLARIS_DATA;
  const visible = 3;
  const maxStart = Math.max(0, projects.length - visible);
  const [start, setStart] = React.useState(0);
  const shown = projects.slice(start, start + visible);

  return (
    <main className="page">
      <h1 className="page-title">作品集</h1>

      <div className="carousel">
        <button className="car-btn" onClick={() => setStart(Math.max(0, start - 1))} disabled={start === 0} aria-label="上一個">
          <Icon name="chevron-left" size={20} stroke={2} />
        </button>
        <div className="carousel-track">
          {shown.map(p => (
            <ProjectCard
              key={p.id}
              project={p}
              favorited={favorites.includes(p.id)}
              onToggleFav={onToggleFav}
              onViewDetail={onViewDetail}
            />
          ))}
        </div>
        <button className="car-btn" onClick={() => setStart(Math.min(maxStart, start + 1))} disabled={start === maxStart} aria-label="下一個">
          <Icon name="chevron-right" size={20} stroke={2} />
        </button>
      </div>

      <div className="dots">
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button key={i} className={'dot' + (i === start ? ' active' : '')} onClick={() => setStart(i)} aria-label={'第 ' + (i + 1) + ' 頁'} />
        ))}
      </div>

      <div className="fav-status">
        <span className="heart"><Icon name="heart-fill" size={15} fill="currentColor" /></span>
        已收藏：{favorites.length} 個
      </div>
    </main>
  );
}

Object.assign(window, { ProjectCard, ProjectsPage });
