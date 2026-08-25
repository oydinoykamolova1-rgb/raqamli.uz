"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut, Calendar, Clock, CheckCircle } from "lucide-react";

interface Consultation {
  id: number;
  date: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboard() {
  const [data, setData] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      router.push("/admin/login");
      return;
    }

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    fetch(`${apiUrl}/admin/consultations`, {
      headers: { "Authorization": token }
    })
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(consultations => {
        setData(consultations);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("adminToken");
        router.push("/admin/login");
      });
  }, [router]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  if (loading) return <div className="p-10 text-center">Yuklanmoqda...</div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h1 className="text-3xl font-bold">Konsultatsiyalar ({data.length})</h1>
          <p className="text-slate-500 mt-1">Yangi kelgan so'rovlar ro'yxati</p>
        </div>
        <button onClick={logout} className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
          <LogOut className="w-4 h-4" /> Chiqish
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="p-4 font-medium">ID</th>
              <th className="p-4 font-medium">Kelgan vaqti</th>
              <th className="p-4 font-medium">Uchrashuv Kuni</th>
              <th className="p-4 font-medium">Holati</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {data.map(item => (
              <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                <td className="p-4 font-mono text-sm">#{item.id}</td>
                <td className="p-4 text-slate-500 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> 
                  {new Date(item.createdAt).toLocaleString()}
                </td>
                <td className="p-4 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" /> 
                  {item.date}
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300">
                    <CheckCircle className="w-3 h-3" /> {item.status}
                  </span>
                </td>
              </tr>
            ))}
            {data.length === 0 && (
              <tr>
                <td colSpan={4} className="p-8 text-center text-slate-500">
                  Hozircha so'rovlar yo'q
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
