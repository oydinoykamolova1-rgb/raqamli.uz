import Link from "next/link";
import { LayoutDashboard, Users, LogOut, Sparkles, ShieldCheck } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col font-sans">
      
      {/* Top Admin Header Bar */}
      <header className="h-16 border-b border-white/10 bg-[#070b16]/80 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-40">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm">
            R
          </div>
          <span className="font-space font-bold text-lg text-white">
            Raqam<span className="gradient-text-cyber">ly</span> <span className="text-xs text-violet-400 font-mono">ADMIN</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 font-mono flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Tizim Faol
          </span>
          <Link
            href="/"
            className="text-xs text-gray-300 hover:text-white px-3 py-1.5 rounded-lg glass-panel hover:bg-white/10 transition-colors"
          >
            Saytga o&apos;tish ↗
          </Link>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto">
        {children}
      </div>

    </div>
  );
}
