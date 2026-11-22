import './Profile.css';

export default function Profile() {
  return (
    <section>
      <h1 className="page-title">Profil</h1>
      <div className="profile-header-card">
        <div className="profile-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
        </div>
        <div className="profile-info">
          <h2 className="profile-name">Misafir</h2>
          <p className="profile-handle">@veylo</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span className="stat-value">0</span>
          <span className="stat-label">Gönderi</span>
        </div>
        <div className="stat">
          <span className="stat-value">0</span>
          <span className="stat-label">Takipçi</span>
        </div>
        <div className="stat">
          <span className="stat-value">0</span>
          <span className="stat-label">Takip</span>
        </div>
      </div>

      <p className="profile-note">
        Profilini tamamlamak için giriş yaptığında bu alan aktif olacak.
      </p>
    </section>
  );
}
