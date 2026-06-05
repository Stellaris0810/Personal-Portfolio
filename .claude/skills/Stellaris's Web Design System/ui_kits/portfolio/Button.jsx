// Button + TagBadge primitives
function Button({ variant = 'primary', size = 'md', block, arrow, children, onClick }) {
  const cls = ['btn', `btn-${size}`, `btn-${variant}`, block ? 'btn-block' : ''].join(' ');
  return (
    <button className={cls} onClick={onClick}>
      {children}
      {arrow && <span className="btn-arrow"><Icon name="arrow" size={14} stroke={2.5} /></span>}
    </button>
  );
}

function TagBadge({ children, large }) {
  return <span className={large ? 'tag tag-lg' : 'tag'}>{children}</span>;
}

Object.assign(window, { Button, TagBadge });
