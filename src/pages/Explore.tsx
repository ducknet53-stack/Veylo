import EmptyState from '../components/ui/EmptyState';

export default function Explore() {
  return (
    <section>
      <h1 className="page-title">Keşfet</h1>
      <EmptyState
        icon="compass"
        title="Keşfedilecek içerik yok"
        description="İlgi alanlarına göre öneriler burada listelenecek."
      />
    </section>
  );
}
