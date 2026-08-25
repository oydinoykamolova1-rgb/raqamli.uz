"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  LogOut, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Trash2, 
  Search, 
  RefreshCw, 
  User, 
  Phone, 
  AlertCircle,
  Sparkles,
  Inbox,
  Filter
} from "lucide-react";

interface Consultation {
  id: number;
  name: string;
  phone: string;
  date: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<"ALL" | "PENDING" | "DONE">("ALL");
  const router = useRouter();

  const fetchData = async () => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    try {
      setRefreshing(true);
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/admin/consultations`, {
        headers: { "Authorization": token }
      });
      if (!res.ok) throw new Error();
      const consultations = await res.json();
      setData(consultations);
    } catch {
      localStorage.removeItem("adminToken");
      router.push("/admin/login");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  const handleUpdateStatus = async (id: number, currentStatus: string) => {
    const token = localStorage.getItem("adminToken");
    if (!token) return;

    const newStatus = currentStatus === "PENDING" ? "DONE" : "PENDING";
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/admin/consultations/${id}`, {
        method: "PATCH",
        headers: { 
          "Authorization": token,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        setData(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
      }
    } catch (e) {
      alert("Statusni o'zgartirishda xatolik yuz berdi.");
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Haqiqatdan ham ushbu so'rovni o'chirmoqchimisiz?")) return;

    const token = localStorage.getItem("adminToken");
    if (!token) return;

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
      const res = await fetch(`${apiUrl}/admin/consultations/${id}`, {
        method: "DELETE",
        headers: { "Authorization": token }
      });
      if (res.ok) {
        setData(prev => prev.filter(item => item.id !== id));
      }
    } catch (e) {
      alert("O'chirishda xatolik yuz berdi.");
    }
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  // Filtered dataset
  const filteredData = data.filter(item => {
    const matchesSearch = 
      (item.name && item.name.toLowerCase().includes(search.toLowerCase())) ||
      (item.phone && item.phone.toLowerCase().includes(search.toLowerCase())) ||
      (item.date && item.date.includes(search));
    const matchesFilter = filterStatus === "ALL" || item.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalCount = data.length;
  const pendingCount = data.filter(i => i.status === "PENDING").length;
  const doneCount = data.filter(i => i.status === "DONE").length;

  if (loading) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <RefreshCw className="w-8 h-8 text-violet-400 animate-spin mb-4" />
        <p className="text-gray-400 font-space text-sm">Boshqaruv paneli yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 pb-12">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <h1 className="text-3xl font-space font-extrabold text-white flex items-center gap-3">
            <span>Konsultatsiyalar Boshqaruvi</span>
            <span className="text-xs px-3 py-1 rounded-full bg-violet-600/30 text-violet-400 border border-violet-500/30">
              {totalCount} ta so'rov
            </span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">Sayt va Telegram bot orqali kelgan barcha uchrashuv so'rovlari</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={fetchData} 
            disabled={refreshing}
            className="flex items-center gap-2 px-4 py-2 rounded-xl glass-panel text-gray-300 hover:text-white text-xs font-semibold border border-white/10 hover:border-violet-500/40 transition-all cursor-pointer"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? "animate-spin text-violet-400" : ""}`} />
            <span>Yangilash</span>
          </button>
          
          <button 
            onClick={logout} 
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 text-xs font-semibold border border-rose-500/20 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" /> Chiqish
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="glass-panel p-6 rounded-2xl border border-white/10 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">Jami So'rovlar</span>
            <span className="text-3xl font-space font-extrabold text-white">{totalCount}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-violet-500/20 flex items-center justify-center text-violet-400">
            <Inbox className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">Kutilmoqda</span>
            <span className="text-3xl font-space font-extrabold text-amber-300">{pendingCount}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
            <Clock className="w-6 h-6" />
          </div>
        </div>

        <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">Bajarildi</span>
            <span className="text-3xl font-space font-extrabold text-emerald-300">{doneCount}</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Controls & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/10">
        
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ism, telefon yoki sana..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-xl bg-slate-950/60 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Filter status */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <span className="text-xs text-gray-400 font-semibold flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter:
          </span>
          {(["ALL", "PENDING", "DONE"] as const).map(st => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-space transition-all cursor-pointer ${
                filterStatus === st
                  ? "bg-violet-600 text-white shadow-md"
                  : "bg-white/5 text-gray-400 hover:text-white"
              }`}
            >
              {st === "ALL" ? "Barchasi" : st === "PENDING" ? "Kutilmoqda" : "Bajarilgan"}
            </button>
          ))}
        </div>
      </div>

      {/* Consultations Table */}
      <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-900/80 border-b border-white/10 text-xs uppercase font-space tracking-wider text-gray-400">
                <th className="p-4">ID</th>
                <th className="p-4">Mijoz / Foydalanuvchi</th>
                <th className="p-4">Telefon</th>
                <th className="p-4">Uchrashuv Kuni</th>
                <th className="p-4">Kelgan Vaqti</th>
                <th className="p-4">Holati</th>
                <th className="p-4 text-right">Amallar</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm text-gray-300">
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 font-mono text-xs text-violet-400 font-bold">#{item.id}</td>
                  <td className="p-4 font-medium text-white">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span>{item.name || "Noma'lum / Bot"}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs">
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{item.phone || "Kiritilmagan"}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2 text-violet-300 font-space text-xs">
                      <Calendar className="w-3.5 h-3.5 text-violet-400 flex-shrink-0" />
                      <span>{item.date}</span>
                    </div>
                  </td>
                  <td className="p-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-500" />
                      {new Date(item.createdAt).toLocaleString("uz-UZ", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </div>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleUpdateStatus(item.id, item.status)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                        item.status === "DONE"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-500/30"
                          : "bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30"
                      }`}
                      title="Statusni o'zgartirish uchun bosing"
                    >
                      {item.status === "DONE" ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Bajarildi
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-amber-400" /> Kutilmoqda
                        </>
                      )}
                    </button>
                  </td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 rounded-lg bg-rose-500/10 text-rose-400 hover:bg-rose-500/20 transition-colors cursor-pointer"
                      title="So'rovni o'chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-gray-500">
                    <Inbox className="w-10 h-10 mx-auto mb-3 text-gray-600" />
                    <p className="text-sm font-space">Hech qanday so'rov topilmadi</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
