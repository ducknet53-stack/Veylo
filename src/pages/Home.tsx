import EmptyState from '../components/ui/EmptyState';

export default function Home() {
  return (
    <section>
      <h1 className="page-title">Ana Sayfa</h1>
      <EmptyState
        icon="home"
        title="Akışın henüz boş"
        description="Takip ettiğin kişilerin paylaşımları burada görünecek."
      />
    </section>
  );
}
