import PopularProducts from '@/components/organisms/popularProducts';

export default function Home() {

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-[60px]">
        <PopularProducts />
      </main>
    </div>
  );
}
