"use client";

import React from "react";
import { Code2, Cpu, Layout, Terminal } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/app/context/LanguageContext";

interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  exp: string;
  avatar: string;
  skills: string[];
  icon: React.ReactNode;
}

export function TeamSection() {
  const { t } = useLanguage();

  const members: TeamMember[] = [
    {
      name: "Oydinoy Kamolova",
      role: "Lead Full-Stack & System Architect",
      specialty: "Next.js, NestJS, Prisma, Telegram Bot API",
      exp: "4+ Yil Tajriba",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      skills: ["System Architecture", "NestJS", "React 19", "Database Engineering"],
      icon: <Code2 className="w-5 h-5 text-[#5FD8E8]" />,
    },
    {
      name: "Shohruh Nurbekov",
      role: "Senior AI & Automation Engineer",
      specialty: "Python, Telegraf, Open AI / Custom LLM, ERP Integration",
      exp: "3+ Yil Tajriba",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80",
      skills: ["AI Chatbots", "Python", "Process Automation", "FastAPI"],
      icon: <Cpu className="w-5 h-5 text-[#E85A24]" />,
    },
    {
      name: "Jasur Rahimov",
      role: "Lead UI/UX Blueprint Designer",
      specialty: "Figma Prototyping, Technical Design, Micro-animations",
      exp: "4+ Yil Tajriba",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      skills: ["Blueprint UX", "Figma", "Design Systems", "TailwindCSS"],
      icon: <Layout className="w-5 h-5 text-[#5FD8E8]" />,
    },
    {
      name: "Sardor Alimov",
      role: "DevOps & Cloud Infrastructure Specialist",
      specialty: "Docker, Nginx, PostgreSQL, VPS Security, CI/CD",
      exp: "3+ Yil Tajriba",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      skills: ["Linux VPS", "Docker", "PostgreSQL", "Cloud Security"],
      icon: <Terminal className="w-5 h-5 text-[#E85A24]" />,
    },
  ];

  return (
    <section id="team" className="py-20 bg-[#0A1E35] border-t border-[#5FD8E8]/10 relative">
      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#5FD8E8_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#E85A24] bg-[#E85A24]/10 border border-[#E85A24]/30 px-3.5 py-1 rounded-xs uppercase tracking-widest mb-4 font-bold">
            [SHEET 04 // JAMOA ARXITEKTURASI]
          </div>
          <h2 className="font-display text-3xl lg:text-5xl font-black text-[#EDF3F5] tracking-tight">
            {t("team.title")}
          </h2>
          <p className="font-sans text-base text-[#8FA6BC] mt-4">
            {t("team.subtitle")}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m, idx) => (
            <div
              key={idx}
              className="group bg-[#0F2A4A]/80 border border-[#5FD8E8]/20 rounded-sm p-5 hover:border-[#5FD8E8] transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Corner Coordinate Badge */}
              <div className="font-mono text-[9px] text-[#5FD8E8]/40 uppercase tracking-widest mb-3 flex items-center justify-between">
                <span>[ENG-{idx + 1}]</span>
                <span>{m.exp}</span>
              </div>

              {/* Avatar Image */}
              <div className="relative w-full h-52 rounded-sm overflow-hidden mb-5 border border-[#5FD8E8]/15 bg-[#0A1E35] group-hover:border-[#5FD8E8]/40 transition-colors">
                <Image
                  src={m.avatar}
                  alt={m.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A4A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 p-2 bg-[#0A1E35]/90 border border-[#5FD8E8]/30 rounded-xs">
                  {m.icon}
                </div>
              </div>

              {/* Info */}
              <div>
                <h3 className="font-display font-black text-lg text-[#EDF3F5] group-hover:text-[#5FD8E8] transition-colors">
                  {m.name}
                </h3>
                <div className="font-mono text-xs text-[#E85A24] font-bold mt-1">
                  {m.role}
                </div>
                <p className="font-sans text-xs text-[#8FA6BC] mt-2 line-clamp-2">
                  {m.specialty}
                </p>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[#5FD8E8]/10">
                  {m.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-[10px] bg-[#5FD8E8]/8 text-[#5FD8E8] border border-[#5FD8E8]/20 px-2 py-0.5 rounded-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
