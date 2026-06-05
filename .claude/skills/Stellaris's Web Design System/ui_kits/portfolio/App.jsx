// App shell — manages route state + lifted favorites (the brief's emits flow)
function App() {
  const initialRoute = window.__INITIAL_ROUTE__ || 'home';
  const initialId = window.__INITIAL_ID__ || 'ms-clone';
  const [route, setRoute] = React.useState(initialRoute);  // home | skills | projects | detail
  const [activeId, setActiveId] = React.useState(initialId);
  const [favorites, setFavorites] = React.useState(['ms-clone', 'todo-vue']);

  const toggleFav = (id) =>
    setFavorites(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]);

  const viewDetail = (id) => { setActiveId(id); setRoute('detail'); window.scrollTo(0, 0); };
  const navigate = (k) => { setRoute(k); window.scrollTo(0, 0); };

  let page;
  if (route === 'home') page = <HomePage onNavigate={navigate} />;
  else if (route === 'skills') page = <SkillsPage />;
  else if (route === 'projects') page = <ProjectsPage favorites={favorites} onToggleFav={toggleFav} onViewDetail={viewDetail} />;
  else page = <ProjectDetailPage projectId={activeId} onBack={() => navigate('projects')} />;

  return (
    <div className="kit-app">
      <NavBar current={route} onNavigate={navigate} />
      {page}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
