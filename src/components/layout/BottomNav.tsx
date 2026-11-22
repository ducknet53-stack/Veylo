import { NavLink } from 'react-router-dom';
import './BottomNav.css';

const tabs = [
  { to: '/', label: 'Ana Sayfa', icon: 'home' },
  { to: '/explore', label: 'Keşfet', icon: 'compass' },
  { to: '/create', label: 'Paylaş', icon: 'plus' },
  { to: '/messages', label: 'Mesajlar', icon: 'message' },
  { to: '/profile', label: 'Profil', icon: 'user' },
] as const;

const icons: Record<string, JSX.Element> = {
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V10.5z" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M16 8l-2.5 6.5L8 16l2.5-6.5L16 8z" />
    </svg>
  ),
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  message: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 0 1-12.3 6.8L4 20l1.3-4.4A8 8 0 1 1 21 12z" />
    </svg>
  ),
  user: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
};

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <div className="bottom-nav-inner">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.to === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'is-active' : ''}`}
          >
            <span className="nav-icon">{icons[tab.icon]}</span>
            <span className="nav-label">{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
