import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
        <h1 className="text-4xl font-bold">Thanks — we got it.</h1>
        <p className="mt-4 text-gray-300">
          We’ll review your info and reach out shortly. If this is urgent, call us now.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/#form"
            className="px-6 py-3 bg-white text-black rounded-lg font-semibold"
          >
            Submit another
          </Link>
          <Link
            href="/"
            className="px-6 py-3 border border-white rounded-lg"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
