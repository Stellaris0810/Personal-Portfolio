// Shared inline stroke icons (Lucide/Feather-style, stroke 1.5–2)
function Icon({ name, size = 20, stroke = 1.6, fill = 'none' }) {
  const p = {
    width: size, height: size, viewBox: '0 0 24 24', fill,
    stroke: fill === 'none' ? 'currentColor' : 'none',
    strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'person': return <svg {...p}><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>;
    case 'arrow': return <svg {...p}><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
    case 'back': return <svg {...p}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>;
    case 'chevron-left': return <svg {...p}><path d="M15 18l-6-6 6-6"/></svg>;
    case 'chevron-right': return <svg {...p}><path d="M9 18l6-6-6-6"/></svg>;
    case 'search': return <svg {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>;
    case 'link': return <svg {...p}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>;
    case 'globe': return <svg {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case 'image': return <svg {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>;
    case 'heart-fill': return <svg {...p} fill="currentColor" stroke="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>;
    case 'heart': return <svg {...p}><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"/></svg>;
    default: return null;
  }
}

function Stars({ level = 5, total = 5 }) {
  return (
    <div className="skill-stars">
      {Array.from({ length: total }).map((_, i) =>
        <span key={i} className={i < level ? '' : 'off'}>★</span>
      )}
    </div>
  );
}

Object.assign(window, { Icon, Stars });
