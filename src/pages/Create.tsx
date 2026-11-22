import './Create.css';

export default function Create() {
  return (
    <section>
      <h1 className="page-title">Paylaş</h1>
      <div className="create-card">
        <div className="create-placeholder">
          <div className="create-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </div>
          <h3 className="create-title">Yeni paylaşım</h3>
          <p className="create-desc">
            Fotoğraf, video ve metin paylaşımı yakında burada olacak.
          </p>
        </div>
      </div>
    </section>
  );
}
