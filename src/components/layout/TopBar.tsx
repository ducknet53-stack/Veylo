import './TopBar.css';

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <img
          src="/assets/veylo-logo.png"
          alt="Veylo"
          className="topbar-logo"
        />
        <span className="topbar-brand">
          <span className="brand-gradient-text">VEYLO</span>
        </span>
      </div>
    </header>
  );
}
