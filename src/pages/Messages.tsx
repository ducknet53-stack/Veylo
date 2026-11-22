import EmptyState from '../components/ui/EmptyState';

export default function Messages() {
  return (
    <section>
      <h1 className="page-title">Mesajlar</h1>
      <EmptyState
        icon="message"
        title="Henüz mesaj yok"
        description="Sohbetlerin burada görünecek. Yeni bir sohbet başlatmak için birini takip et."
      />
    </section>
  );
}
