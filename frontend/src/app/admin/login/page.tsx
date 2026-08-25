"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Sparkles, ArrowRight, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("adminToken", "Bearer " + data.token);
        router.push("/admin");
      } else {
        setError("Notog'ri login yoki parol kiritildi");
      }
    } catch (e) {
      setError("Server bilan aloqa o'rnatib bo'lmadi. Backend ishlayotganini tekshiring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center p-4 relative overflow-hidden cyber-mesh-bg">
      
      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-violet-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-pink-600/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-md relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 p-[1.5px] shadow-[0_0_25px_rgba(139,92,246,0.4)]">
              <div className="w-full h-full bg-[#070b16] rounded-[14px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-violet-400" />
              </div>
            </div>
            <span className="font-space font-bold text-2xl tracking-tight text-white">
              Raqam<span className="gradient-text-cyber">ly</span>
            </span>
          </Link>
          <h1 className="text-xl font-space font-bold text-white">Admin Boshqaruv Paneli</h1>
          <p className="text-xs text-gray-400 mt-1">Tizimga kirish uchun maxsus kalitlarni kiriting</p>
        </div>

        {/* Card Form */}
        <div className="glass-panel-glow p-8 rounded-3xl border border-violet-500/30 shadow-[0_0_50px_rgba(139,92,246,0.2)]">
          <form onSubmit={handleLogin} className="space-y-5">
            
            {/* Username Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-space">
                Login / Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="admin"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/10 bg-slate-950/60 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  required 
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2 font-space">
                Parol / Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/10 bg-slate-950/60 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all"
                  required 
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-600 via-pink-600 to-violet-700 hover:from-violet-500 hover:to-pink-500 text-white font-space font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] disabled:opacity-50 cursor-pointer"
            >
              {loading ? "Kirilmoqda..." : "Tizimga Kirish 🚀"}
              {!loading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-gray-400 hover:text-white transition-colors">
            ← Bosh sahifaga qaytish
          </Link>
        </div>

      </div>
    </div>
  );
}
