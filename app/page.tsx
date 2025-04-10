
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="p-8 font-sans text-center">
        <h1 className="text-4xl font-bold mb-4">Hello World!</h1>
        <p className="text-lg text-gray-700">
          Built with Next.js, styled with Tailwind CSS, and deployed on Vercel
        </p>
        <p className="text-lg tetxt-gray-700">
          @chunxuan
        </p>
      </main>
    </div>
  );
}
