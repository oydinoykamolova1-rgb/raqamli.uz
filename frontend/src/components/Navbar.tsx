import { ThemeToggle } from "./ThemeToggle";
import { ConsultationButton } from "./ConsultationButton";
import Link from "next/link";
import { Bot } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f0f9ff]/95 dark:bg-[#082f49]/95 backdrop-blur-xl border-b border-neutral-200/50 dark:border-white/10 transition-all">
      <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20">
            R
          </div>
          <span className="font-bold text-2xl tracking-tight text-neutral-900 dark:text-white">
            Raqam<span className="text-primary">ly</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors">Bosh sahifa</Link>
          <Link href="/services" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors">Xizmatlar</Link>
          <Link href="/#portfolio" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors">Portfolio</Link>
          <Link href="/#about" className="text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors">Biz haqimizda</Link>
          
          <Link 
            href="https://t.me/raqamli_uzbot" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-[#E3F2FD] text-[#1976D2] hover:bg-[#BBDEFB] dark:bg-[#1E3A8A]/40 dark:text-[#60A5FA] dark:hover:bg-[#1E3A8A]/60 transition-all border border-[#BBDEFB] dark:border-[#3B82F6]/30 group"
          >
            <Bot className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
            Telegram Bot
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <ConsultationButton 
            className="hidden md:flex h-11 px-6 bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 rounded-full transition-all" 
          />
        </div>
      </div>
    </header>
  );
}
