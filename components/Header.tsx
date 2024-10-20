import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-black text-green-500 border-b border-green-500">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Terminal className="mr-2" />
          <Link href="/" className="text-xl font-bold glitch">HN Clone</Link>
        </div>
        <nav>
          <Link href="/" className="mr-4 hover:text-white transition-colors duration-200">Top</Link>
          <Link href="/new" className="mr-4 hover:text-white transition-colors duration-200">New</Link>
          <Link href="/ask" className="mr-4 hover:text-white transition-colors duration-200">Ask</Link>
          <Link href="/show" className="hover:text-white transition-colors duration-200">Show</Link>
        </nav>
      </div>
    </header>
  );
}