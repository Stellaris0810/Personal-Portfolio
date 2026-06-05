// Sticky navigation bar — wordmark + right-aligned links
function NavBar({ current, onNavigate }) {
  const links = [
    { key: 'home', label: '首頁' },
    { key: 'skills', label: '專業技能' },
    { key: 'projects', label: '作品集' },
  ];
  const isActive = (k) =>
    k === current || (k === 'projects' && current === 'detail');
  return (
    <nav className="nav">
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => onNavigate('home')}>Stellaris's Web</button>
        <div className="nav-links">
          {links.map(l => (
            <button
              key={l.key}
              className={'nav-link ' + (isActive(l.key) ? 'active' : 'dim')}
              onClick={() => onNavigate(l.key)}
            >{l.label}</button>
          ))}
          <button className="nav-person" aria-label="account"><Icon name="person" size={20} stroke={1.5} /></button>
        </div>
      </div>
    </nav>
  );
}

Object.assign(window, { NavBar });
