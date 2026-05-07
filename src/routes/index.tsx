import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Droplets, Users, Store, School, Truck, Building2, MapPin, Trophy,
  BarChart3, Leaf, Sparkles, ArrowRight, Bell, Route as RouteIcon,
  Target, Eye, Megaphone, Zap, CheckCircle2, Globe, Database, Layers,
  TrendingUp, Award, Recycle, ChevronDown, Home, PieChart, User,
  RefreshCw, HeadphonesIcon, Shield, X, Check,
} from "lucide-react";
import paraleloLogo from "@/assets/paralelo-logo.png";
import enfoqueLogo from "@/assets/enfoque-logo.png";
import muniLogo from "@/assets/municipalidad-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function SectionLabel({ num, children }: { num: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="font-display text-sm tracking-widest text-eco font-medium">{num}</span>
      <div className="h-px w-12 bg-eco/40" />
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{children}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col px-8 md:px-16 py-10 md:py-14 gap-0 overflow-hidden">
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 145 / 0.3), transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.15 195 / 0.25), transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Nav bar */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex justify-between items-center mb-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-eco to-aqua flex items-center justify-center shrink-0">
            <Droplets className="w-5 h-5 text-ink" />
          </div>
          <div className="font-display font-semibold tracking-tight">EcoPuertoRico</div>
        </div>
        <div className="hidden md:flex items-center gap-2 glass px-5 py-2.5 rounded-full text-xs">
          <span className="w-2 h-2 rounded-full bg-eco animate-pulse" />
          Paralelo × Enfoque Misiones
        </div>
      </motion.div>

      {/* Hero text — flex-1 so it fills the space between nav and footer */}
      <motion.div style={{ y, opacity }} className="relative z-10 flex flex-col justify-center flex-1 py-12 md:py-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-6 md:mb-8"
        >
          Ecosistema digital para{" "}
          <span className="text-gradient">programas de economía circular</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-2xl text-muted-foreground max-w-2xl mb-8 md:mb-12 font-light"
        >
          Gestión · Participación · Impacto · Visibilidad
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          {["Municipio de Puerto Rico", "Misiones · Argentina"].map((t) => (
            <span key={t} className="px-4 py-2 rounded-full glass text-sm">{t}</span>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer bar — siempre al fondo, nunca se superpone */}
      <motion.div style={{ opacity }} className="relative z-10 flex flex-col gap-4">
        <div className="glass rounded-2xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground shrink-0">Una iniciativa de</span>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
            <img src={paraleloLogo} alt="Paralelo" className="h-17 object-contain" />
            <div className="w-px h-7 bg-white/10 hidden sm:block" />
            <img src={enfoqueLogo} alt="Enfoque Misiones" className="h-8 object-contain brightness-0 invert opacity-90" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground pb-2">
          <ChevronDown className="w-4 h-4 animate-bounce" />
          Desplazá para descubrir la propuesta
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ALIANZA (00)
───────────────────────────────────────────── */
function Alliance() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="00">Alianza estratégica</SectionLabel>
        <h2 className="text-4xl md:text-6xl font-semibold mb-6 max-w-3xl">
          Tecnología <span className="text-eco">+</span> Comunicación <span className="text-eco">+</span> Estrategia
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 mt-16">
        {[
          {
            logo: paraleloLogo,
            logoClass: "h-20",
            title: "Paralelo",
            text: "Diseño y evolución de plataformas digitales para gestión pública. Servicios escalables, mantenidos de forma centralizada y adaptados al contexto municipal.",
            tag: "Tecnología",
          },
          {
            logo: enfoqueLogo,
            logoClass: "h-10 brightness-0 invert opacity-90",
            title: "Enfoque Misiones",
            text: "Comunicación estratégica y posicionamiento institucional. Convertimos datos en historias, contenido y participación ciudadana real.",
            tag: "Comunicación",
          },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="glass rounded-3xl p-8 hover:border-eco/40 transition-colors group"
          >
            <div className="flex items-center justify-between mb-6 gap-4">
              <img src={c.logo} alt={c.title} className={`${c.logoClass} object-contain`} />
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">{c.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...fadeUp} className="mt-12 glass rounded-3xl p-8 md:p-12 border-l-4 border-l-eco">
        <div className="flex items-start gap-4">
          <Sparkles className="w-6 h-6 text-eco shrink-0 mt-1" />
          <div>
            <h4 className="font-display text-xl font-semibold mb-3">¿Por qué esta alianza es clave?</h4>
            <div className="grid md:grid-cols-2 gap-3 mt-4">
              {[
                "La plataforma no queda como herramienta interna",
                "Se transforma en contenido comunicable",
                "Aumenta la participación ciudadana",
                "Potencia la visibilidad del programa",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-eco shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-muted-foreground leading-relaxed border-t border-white/5 pt-6">
              Paralelo y Enfoque Misiones integran plataforma, comunicación y estrategia para transformar
              programas municipales en iniciativas visibles, participativas y sostenibles —
              con impacto real y medible desde el primer mes.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MODELO DE PLATAFORMA (nueva)
───────────────────────────────────────────── */
function PlatformModel() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="01">Modelo de plataforma</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl">
          No es un desarrollo. Es un <span className="text-gradient">servicio activo</span>.
        </h2>
      </motion.div>

      {/* Highlight box */}
      <motion.div
        {...fadeUp}
        className="mt-10 mb-14 rounded-3xl p-8 md:p-12 border-2 border-eco/50 bg-gradient-to-br from-eco/10 to-aqua/5 relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-eco/10 blur-3xl" />
        <p className="text-2xl md:text-3xl font-display font-semibold relative z-10 leading-snug">
          "El municipio no adquiere un sistema.{" "}
          <span className="text-eco">Accede a una plataforma activa,</span>{" "}
          en evolución permanente."
        </p>
      </motion.div>

      {/* Comparison */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Left: desarrollo a medida */}
        <motion.div {...fadeUp} className="glass rounded-3xl p-8 border border-white/5 opacity-80">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
              <X className="w-4 h-4 text-destructive" />
            </div>
            <span className="font-display font-semibold text-lg text-muted-foreground">Desarrollo a medida</span>
          </div>
          <ul className="space-y-3">
            {[
              "Inversión inicial enorme ($15.000–$20.000 USD)",
              "Proceso de licitación complejo",
              "Mantenimiento a cargo del municipio",
              "Tecnología que queda obsoleta",
              "Sin soporte continuo garantizado",
              "Reinversión constante para escalar",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                <X className="w-4 h-4 text-destructive/60 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: modelo plataforma */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.12 }}
          className="rounded-3xl p-8 bg-gradient-to-br from-eco to-eco-deep text-ink"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-ink/20 flex items-center justify-center">
              <Check className="w-4 h-4 text-ink" />
            </div>
            <span className="font-display font-semibold text-lg">Modelo de plataforma</span>
          </div>
          <ul className="space-y-3">
            {[
              "Baja barrera de entrada — acceso mensual",
              "Sin licitación compleja ni inversión inicial",
              "Mantenimiento centralizado por Paralelo",
              "Mejora continua y evolución permanente",
              "Soporte técnico incluido",
              "Escalabilidad sin reinversión",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm font-medium">
                <Check className="w-4 h-4 shrink-0 mt-0.5 opacity-80" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Pillars */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {[
          { icon: <RefreshCw className="w-5 h-5" />, t: "Actualizaciones continuas", d: "La plataforma mejora mes a mes sin costo adicional." },
          { icon: <HeadphonesIcon className="w-5 h-5" />, t: "Soporte incluido", d: "Equipo técnico disponible para resolver cualquier situación." },
          { icon: <Shield className="w-5 h-5" />, t: "Mantenimiento centralizado", d: "Paralelo gestiona la infraestructura. El municipio solo usa." },
          { icon: <TrendingUp className="w-5 h-5" />, t: "Escalabilidad regional", d: "El servicio puede expandirse a otros programas o municipios." },
        ].map((p, i) => (
          <motion.div
            key={p.t}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="glass rounded-2xl p-6"
          >
            <div className="w-10 h-10 rounded-xl bg-eco/10 text-eco flex items-center justify-center mb-4">
              {p.icon}
            </div>
            <h4 className="font-display font-semibold text-sm mb-2">{p.t}</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   INTRODUCCIÓN (02)
───────────────────────────────────────────── */
function Intro() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-5xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="02">Introducción</SectionLabel>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
          Proponemos que el{" "}
          <span className="text-eco font-medium">Municipio de Puerto Rico</span>{" "}
          acceda a una plataforma digital para potenciar su programa de recolección de aceite usado.
          No se trata de modificar el programa actual, sino de incorporar un servicio que mejora su{" "}
          <span className="text-aqua">organización</span>,{" "}
          <span className="text-aqua">medición</span> y{" "}
          <span className="text-aqua">visibilidad</span>{" "}
          desde el primer día — sin inversión inicial ni carga técnica interna.
        </p>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   OBJETIVOS (03)
───────────────────────────────────────────── */
function Objectives() {
  const items = [
    { icon: <Database className="w-5 h-5" />, t: "Centralizar la información" },
    { icon: <RouteIcon className="w-5 h-5" />, t: "Optimizar la recolección" },
    { icon: <Users className="w-5 h-5" />, t: "Incentivar la participación" },
    { icon: <BarChart3 className="w-5 h-5" />, t: "Medir impacto en tiempo real" },
    { icon: <Megaphone className="w-5 h-5" />, t: "Mejorar la comunicación institucional" },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="03">Objetivos</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-3xl">
          Acceder a la plataforma para <span className="text-gradient">multiplicar el impacto</span>
        </h2>
      </motion.div>

      <motion.div {...fadeUp} className="glass rounded-3xl p-8 md:p-10 mb-8 bg-gradient-to-br from-eco/10 to-aqua/5">
        <div className="flex items-center gap-3 mb-3">
          <Target className="w-5 h-5 text-eco" />
          <span className="text-xs uppercase tracking-widest text-eco">Objetivo general</span>
        </div>
        <p className="text-xl md:text-2xl font-light">
          Mejorar la gestión, ampliar la participación ciudadana y fortalecer el impacto ambiental del programa.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((i, idx) => (
          <motion.div
            key={i.t}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: idx * 0.08 }}
            className="glass rounded-2xl p-6 hover:bg-eco/5 transition-colors"
          >
            <div className="w-10 h-10 rounded-xl bg-eco/10 flex items-center justify-center text-eco mb-4">
              {i.icon}
            </div>
            <p className="text-sm font-medium leading-snug">{i.t}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ACTORES (04)
───────────────────────────────────────────── */
function Actors() {
  const actors = [
    { icon: <Users className="w-6 h-6" />, name: "Vecinos", desc: "Generan avisos de recolección", color: "eco" },
    { icon: <Store className="w-6 h-6" />, name: "Comercios", desc: "Aportan volumen constante", color: "aqua" },
    { icon: <School className="w-6 h-6" />, name: "Escuelas", desc: "Participan mediante competencias", color: "gold" },
    { icon: <Building2 className="w-6 h-6" />, name: "Municipio", desc: "Gestiona y coordina", color: "eco" },
    { icon: <Truck className="w-6 h-6" />, name: "Choferes", desc: "Ejecutan la recolección", color: "aqua" },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="04">Actores del servicio</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Una red de cinco actores trabajando <span className="text-eco">en sintonía</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {actors.map((a, i) => (
          <motion.div
            key={a.name}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="glass rounded-3xl p-6 group hover:-translate-y-1 transition-transform"
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
              style={{ backgroundColor: `oklch(var(--${a.color}) / 0.15)`, color: `var(--${a.color})` }}
            >
              {a.icon}
            </div>
            <h3 className="font-display font-semibold text-lg mb-1">{a.name}</h3>
            <p className="text-sm text-muted-foreground">{a.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FLUJO (05)
───────────────────────────────────────────── */
function Flow() {
  const steps = [
    "Un usuario registra un aviso de aceite disponible",
    "La plataforma organiza y prioriza los retiros automáticamente",
    "El chofer realiza la recolección",
    "Se registra la cantidad recolectada",
    "Se actualizan rankings e indicadores en tiempo real",
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="05">Flujo del servicio</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          De una lógica reactiva a una <span className="text-gradient">gestión medible</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-eco via-aqua to-transparent" />
        {steps.map((s, i) => (
          <motion.div
            key={i}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="relative flex items-start gap-6 mb-6 group"
          >
            <div className="relative z-10 w-16 h-16 rounded-2xl glass flex items-center justify-center font-display font-semibold text-eco group-hover:bg-eco group-hover:text-ink transition-all shrink-0">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="flex-1 glass rounded-2xl p-6 mt-2">
              <p className="text-lg font-light">{s}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   FUNCIONALIDADES (06)
───────────────────────────────────────────── */
function Features() {
  const groups = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Panel de Gestión",
      items: ["Registro de entregas", "Historial completo", "Organización de rutas"],
      highlight: false,
      tag: null,
      tagColor: "eco",
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Sistema de Avisos",
      items: ["App móvil exclusiva EcoPuertoRico (Play Store)", "Vecinos y comercios notifican disponibilidad", "Geolocalización", "Priorización automática", "Acceso diferenciado para vecinos y choferes"],
      highlight: false,
      tag: null,
      tagColor: "eco",
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Gamificación",
      items: ["Ranking de barrios", "Ranking de escuelas", "Ranking de comercios", "Certificados digitales"],
      highlight: false,
      tag: null,
      tagColor: "eco",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Métricas e Impacto",
      items: ["Litros recolectados", "Biodiesel generado", "Reducción de CO₂"],
      highlight: false,
      tag: null,
      tagColor: "eco",
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Comunicación Estratégica",
      items: ["Contenido para redes sociales", "Informes institucionales", "Campañas de participación ciudadana"],
      highlight: false,
      tag: "Enfoque",
      tagColor: "aqua",
    },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="06">Módulos de la plataforma</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Todo lo que el programa necesita, <span className="text-eco">en un solo acceso</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className={`glass rounded-3xl p-8 transition-colors ${
              g.tagColor === "aqua"
                ? "border-aqua/30 hover:border-aqua/50"
                : "hover:border-eco/40"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                g.tagColor === "aqua" ? "bg-aqua/20 text-aqua" :
                "bg-gradient-to-br from-eco/20 to-aqua/20 text-eco"
              }`}>
                {g.icon}
              </div>
              <h3 className="font-display font-semibold text-xl">{g.title}</h3>
              {g.tag && (
                <span className={`ml-auto text-[10px] uppercase tracking-widest px-2 py-1 rounded-full ${
                  g.tagColor === "aqua" ? "text-aqua bg-aqua/10" : "text-eco bg-eco/10"
                }`}>
                  {g.tag}
                </span>
              )}
            </div>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-muted-foreground">
                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    g.tagColor === "aqua" ? "bg-aqua" : "bg-eco"
                  }`} />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   MOCKUPS + ESTADÍSTICAS (07)
───────────────────────────────────────────── */
function Mockup() {
  const stats = [
    { value: "2.350 L", label: "Aceite recuperado", color: "eco", sub: "Proyección primer año" },
    { value: "1.900 L", label: "Biodiesel generado", color: "aqua", sub: "Combustible renovable" },
    { value: "3.200 kg", label: "CO₂ evitado", color: "gold", sub: "Impacto ambiental medible" },
  ];

  const BottomNav = () => (
    <div className="mt-5 pt-4 border-t border-white/8 flex justify-around items-center">
      {[
        { icon: <Home className="w-4 h-4" />, label: "Inicio", active: false },
        { icon: <PieChart className="w-4 h-4" />, label: "Stats", active: false },
        { icon: <Trophy className="w-4 h-4" />, label: "Ranking", active: true },
        { icon: <User className="w-4 h-4" />, label: "Perfil", active: false },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1">
          <span className={item.active ? "text-eco" : "text-white/30"}>{item.icon}</span>
          <span className={`text-[9px] ${item.active ? "text-eco" : "text-white/30"}`}>{item.label}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="07">Visualización</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Una experiencia <span className="text-gradient">simple y poderosa</span>
        </h2>
      </motion.div>

      {/* Big stats */}
      <motion.div {...fadeUp} className="grid md:grid-cols-3 gap-6 mb-20">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="text-center py-10"
          >
            <div
              className="text-5xl md:text-6xl font-display font-bold mb-2"
              style={{ color: `var(--${s.color})` }}
            >
              {s.value}
            </div>
            <div className="text-base font-semibold mb-1">{s.label}</div>
            <div className="text-xs text-muted-foreground">{s.sub}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Phone mockups */}
      <div className="grid lg:grid-cols-4 gap-6 items-start">
        {/* Phone 1 - Ranking */}
        <motion.div {...fadeUp} className="flex justify-center">
          <div className="w-full max-w-[270px] rounded-[2.5rem] p-5 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] animate-float">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-eco to-aqua flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-ink" />
                </div>
                <span className="font-display font-semibold text-xs">EcoPuertoRico</span>
              </div>
              <Trophy className="w-4 h-4 text-gold" />
            </div>
            <div className="text-[10px] text-muted-foreground mb-3 uppercase tracking-widest">Ranking de barrios</div>
            {[
              { n: "Centro", v: 92, c: "eco" },
              { n: "San Miguel", v: 74, c: "aqua" },
              { n: "Industrial", v: 58, c: "gold" },
            ].map((b) => (
              <div key={b.n} className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span>{b.n}</span><span className="text-muted-foreground">{b.v}%</span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.v}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ background: `var(--${b.c})` }}
                  />
                </div>
              </div>
            ))}
            <div className="mt-3 flex items-center gap-2 text-xs text-eco">
              <TrendingUp className="w-3 h-3" /> +12% esta semana
            </div>
            <BottomNav />
          </div>
        </motion.div>

        {/* Phone 2 - Impact */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.12 }} className="flex justify-center lg:mt-12">
          <div className="w-full max-w-[270px] rounded-[2.5rem] p-5 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-[10px] text-muted-foreground mb-4 uppercase tracking-widest">Impacto acumulado</div>
            <div className="space-y-4">
              <div>
                <div className="text-3xl font-display font-semibold text-eco">2.350 L</div>
                <div className="text-xs text-muted-foreground">Aceite recolectado</div>
              </div>
              <div>
                <div className="text-3xl font-display font-semibold text-aqua">1.900 L</div>
                <div className="text-xs text-muted-foreground">Biodiesel generado</div>
              </div>
              <div>
                <div className="text-3xl font-display font-semibold text-gold">3.200 kg</div>
                <div className="text-xs text-muted-foreground">CO₂ evitado</div>
              </div>
            </div>
            <div className="mt-5 px-4 py-2.5 rounded-xl bg-eco text-ink text-xs font-medium text-center">
              Ver detalles
            </div>
            <BottomNav />
          </div>
        </motion.div>

        {/* Phone 3 - New aviso */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.24 }} className="flex justify-center">
          <div className="w-full max-w-[270px] rounded-[2.5rem] p-5 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] animate-float" style={{ animationDelay: "2s" }}>
            <div className="text-[10px] text-muted-foreground mb-4 uppercase tracking-widest">Nuevo aviso</div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="w-4 h-4 text-eco" /> Barrio Centro
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Droplets className="w-4 h-4 text-aqua" /> 15 L disponibles
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Bell className="w-4 h-4 text-gold" /> Hoy · 14:30
              </div>
            </div>
            <div className="mt-4 h-28 rounded-2xl bg-gradient-to-br from-eco/20 to-aqua/10 border border-white/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 0.05) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
              <MapPin className="w-8 h-8 text-eco animate-pulse-glow relative z-10" />
            </div>
            <div className="mt-4 px-4 py-2.5 rounded-xl bg-eco text-ink text-xs font-medium text-center">
              Solicitar retiro
            </div>
            <BottomNav />
          </div>
        </motion.div>

        {/* Phone 4 - Panel municipio */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.36 }} className="flex justify-center lg:mt-12">
          <div className="w-full max-w-[270px] rounded-[2.5rem] p-5 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] animate-float" style={{ animationDelay: "3s" }}>
            <div className="flex items-center justify-between mb-4">
              <div className="text-[10px] text-muted-foreground uppercase tracking-widest">Panel municipal</div>
              <Building2 className="w-4 h-4 text-aqua" />
            </div>
            <div className="space-y-2 mb-4">
              {[
                { label: "Retiros hoy", value: "8", color: "text-eco" },
                { label: "Avisos pendientes", value: "12", color: "text-gold" },
                { label: "Total este mes", value: "94", color: "text-aqua" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between glass rounded-xl px-3 py-2">
                  <span className="text-xs text-muted-foreground">{row.label}</span>
                  <span className={`text-sm font-display font-semibold ${row.color}`}>{row.value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl bg-aqua/10 border border-aqua/20 px-3 py-2.5">
              <div className="text-[10px] text-aqua uppercase tracking-widest mb-1">Próximo retiro</div>
              <div className="text-xs">Ruta Norte · 09:00 hs</div>
            </div>
            <BottomNav />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   VISIÓN — hero cyan (nueva)
───────────────────────────────────────────── */
function Vision() {
  return (
    <section className="relative px-8 md:px-16 py-40 overflow-hidden">
      {/* Cyan background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.25_0.12_210)] via-[oklch(0.18_0.10_220)] to-[oklch(0.14_0.08_200)]" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.15 195 / 0.4), transparent 70%)" }} />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.18 145 / 0.3), transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div {...fadeUp}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-aqua/30 bg-aqua/10 text-aqua text-xs uppercase tracking-widest mb-10">
            <Eye className="w-3.5 h-3.5" />
            Visión a mediano plazo
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-semibold leading-[0.95] mb-8 text-white">
            Puerto Rico como referencia provincial en{" "}
            <span style={{ color: "var(--aqua)" }}>economía circular</span>
          </h2>
          <p className="text-xl md:text-2xl font-light text-white/70 max-w-3xl mx-auto leading-relaxed">
            La plataforma no solo organiza la recolección. Convierte al programa en un modelo
            visible, medible y replicable a escala regional.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Visible", "Medible", "Replicable", "Sostenible"].map((t) => (
              <span key={t} className="px-5 py-2.5 rounded-full border border-white/20 bg-white/5 text-white text-sm backdrop-blur-sm">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CAPAS DE LA PLATAFORMA (08) — antes "Arquitectura"
───────────────────────────────────────────── */
function Architecture() {
  const layers = [
    { icon: <Database className="w-5 h-5" />, t: "Núcleo del servicio" },
    { icon: <Layers className="w-5 h-5" />, t: "Almacenamiento unificado" },
    { icon: <Building2 className="w-5 h-5" />, t: "Panel de gestión" },
    { icon: <Users className="w-5 h-5" />, t: "Acceso ciudadano" },
    { icon: <Globe className="w-5 h-5" />, t: "Portal público" },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="08">Capas de la plataforma</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Una base sólida, <span className="text-eco">escalable</span> y administrada
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-3">
        {layers.map((l, i) => (
          <motion.div
            key={l.t}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-eco/10 text-eco flex items-center justify-center mx-auto mb-4">
              {l.icon}
            </div>
            <p className="text-sm font-medium">{l.t}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   BENEFICIOS (09 + 10)
───────────────────────────────────────────── */
function Benefits() {
  const ops = ["Mejor organización", "Menor carga administrativa", "Datos centralizados"];
  const pol = [
    "Visibilidad permanente del programa",
    "Comunicación con datos reales",
    "Generación de contenido constante",
    "Mayor participación ciudadana",
    "Posicionamiento institucional",
  ];
  return (
    <>
      {/* Operativos */}
      <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="glass rounded-3xl p-10">
            <SectionLabel num="09">Operativos</SectionLabel>
            <h3 className="text-3xl font-semibold mb-8">Beneficios <span className="text-eco">internos</span></h3>
            <div className="space-y-4">
              {ops.map((b) => (
                <div key={b} className="flex items-center gap-3 p-4 rounded-2xl bg-eco/5">
                  <Zap className="w-5 h-5 text-eco shrink-0" />
                  <span className="font-medium">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="glass rounded-3xl p-10">
            <SectionLabel num="10">Estratégicos</SectionLabel>
            <h3 className="text-3xl font-semibold mb-8">Beneficios <span className="text-aqua">políticos & comunicacionales</span></h3>
            <div className="space-y-3">
              {pol.map((b) => (
                <div key={b} className="flex items-center gap-3 p-4 rounded-2xl bg-aqua/5">
                  <Eye className="w-5 h-5 text-aqua shrink-0" />
                  <span className="font-medium">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero visual - beneficios políticos */}
      <section className="relative px-8 md:px-16 py-40 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.04 240), oklch(0.10 0.02 260))" }} />
        <div className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.78 0.18 145 / 0.4), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.82 0.15 195 / 0.3), transparent 50%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div {...fadeUp}>
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">Impacto institucional</p>
            <h2 className="text-5xl md:text-8xl font-display font-semibold leading-[0.9] text-white">
              Un programa que <span className="text-gradient">el municipio puede mostrar.</span>
            </h2>
            <p className="mt-10 text-xl text-white/60 max-w-2xl font-light">
              Datos reales, comunicación continua, participación ciudadana visible.
              La plataforma genera contenido institucional de forma automática.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────
   ROADMAP (11)
───────────────────────────────────────────── */
function Roadmap() {
  const phases = [
    { n: "Fase 1", t: "Acceso base", d: "Panel de gestión, registros y primeros indicadores." },
    { n: "Fase 2", t: "Rankings y métricas", d: "Gamificación, indicadores y reportes en tiempo real." },
    { n: "Fase 3", t: "Portal público", d: "Visibilidad ciudadana, datos abiertos y contenido." },
    { n: "Fase 4", t: "Expansión regional", d: "Nuevas categorías, integraciones y escalado regional." },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="11">Roadmap de incorporación</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Un plan <span className="text-gradient">por etapas</span>, claro y progresivo
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-4 relative">
        <div className="hidden md:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-eco via-aqua to-transparent" />
        {phases.map((p, i) => (
          <motion.div
            key={p.n}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="glass rounded-3xl p-6 relative"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-eco to-aqua text-ink flex items-center justify-center mb-5 font-display font-bold text-xl">
              {i + 1}
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{p.n}</div>
            <h3 className="font-display font-semibold text-xl mb-2">{p.t}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   PROPUESTAS COMPLEMENTARIAS (12) — con modales
───────────────────────────────────────────── */
function Complementary() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const items = [
    {
      icon: <Globe className="w-5 h-5" />,
      t: "Rediseño del sitio web municipal",
      desc: "El sitio web del municipio es la primera puerta de entrada digital para los vecinos. Proponemos un rediseño completo: arquitectura de información clara, diseño moderno, sección dedicada al programa de reciclaje, y acceso directo a la plataforma EcoPuertoRico.",
      details: [
        "Diseño responsive adaptado a todos los dispositivos",
        "Sección institucional del programa de economía circular",
        "Integración con el portal público de datos de recolección",
        "Mejora de accesibilidad y velocidad de carga",
        "Panel de noticias y novedades municipales",
      ],
    },
    {
      icon: <Sparkles className="w-5 h-5" />,
      t: "Landing del programa",
      desc: "Una página dedicada y de alto impacto para el programa de recolección de aceite. Pensada para campañas de comunicación, redes sociales y difusión institucional. Muestra datos reales en tiempo real: litros recolectados, impacto ambiental, rankings.",
      details: [
        "Métricas en vivo desde la plataforma",
        "Diseño visual de alto impacto para compartir en redes",
        "Formulario de adhesión para comercios y vecinos",
        "Historia del programa y resultados acumulados",
        "Optimizada para SEO y redes sociales",
      ],
    },
    {
      icon: <Users className="w-5 h-5" />,
      t: "Sistema de participación ciudadana",
      desc: "Más allá del aceite: una plataforma modular de participación ciudadana que el municipio puede activar para otros programas. Encuestas, propuestas, votaciones y reportes de situaciones urbanas — todo centralizado y con trazabilidad.",
      details: [
        "Módulo de encuestas y consultas vecinales",
        "Sistema de reportes de situaciones urbanas",
        "Votaciones y priorización de obras",
        "Historial de participación por barrio",
        "Integración con el panel de gestión municipal",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      t: "Tableros de gestión",
      desc: "Visualizaciones ejecutivas del programa para uso interno del municipio. Datos consolidados, tendencias, comparativas mensuales y proyecciones — listos para presentar en reuniones, informes o comunicados de prensa.",
      details: [
        "Dashboard ejecutivo con KPIs del programa",
        "Comparativas mensuales y anuales",
        "Exportación de informes en PDF",
        "Alertas automáticas por umbrales de recolección",
        "Acceso diferenciado por roles (secretaría, intendencia)",
      ],
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      t: "Estrategia de comunicación digital",
      desc: "Enfoque Misiones diseña y ejecuta la estrategia de comunicación del programa: contenido para redes sociales, campañas de concientización, difusión de rankings y logros, e informes de impacto para medios locales.",
      details: [
        "Calendario editorial mensual de contenidos",
        "Diseño de piezas para Instagram, Facebook y WhatsApp",
        "Campañas de lanzamiento y hitos del programa",
        "Notas de prensa para medios locales",
        "Cobertura de eventos y jornadas de recolección",
      ],
    },
  ];

  const active = activeModal !== null ? items[activeModal] : null;

  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="12">Servicios complementarios</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-4 max-w-3xl">
          Más allá de la plataforma: <span className="text-eco">servicios adicionales</span>
        </h2>
        <div className="flex items-start gap-3 mb-16 max-w-2xl">
          <div className="w-5 h-5 rounded-full bg-gold/20 text-gold flex items-center justify-center shrink-0 mt-0.5">
            <Zap className="w-3 h-3" />
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Estos servicios <span className="text-foreground font-medium">no están incluidos en la suscripción mensual</span> de la plataforma.
            Son propuestas complementarias, cotizadas y contratadas de forma independiente, según las necesidades del municipio.
          </p>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {items.map((it, i) => (
          <motion.button
            key={it.t}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            onClick={() => setActiveModal(i)}
            className="glass rounded-3xl p-6 hover:bg-aqua/5 hover:border-aqua/30 transition-all group text-left cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-aqua/15 text-aqua flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {it.icon}
            </div>
            <p className="font-medium mb-4 leading-snug">{it.t}</p>
            <div className="flex items-center gap-1 text-xs text-aqua opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Ver más</span>
              <ArrowRight className="w-3 h-3" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveModal(null)}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg glass rounded-3xl p-8 border border-aqua/20 shadow-2xl"
          >
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 rounded-xl bg-aqua/15 text-aqua flex items-center justify-center mb-5">
              {active.icon}
            </div>

            <div className="flex items-center gap-2 mb-4">
              <h3 className="font-display font-semibold text-2xl">{active.t}</h3>
              <span className="ml-auto text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-full shrink-0">
                Servicio adicional
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">{active.desc}</p>
            <p className="text-xs text-muted-foreground/70 italic mb-6">
              Este servicio se cotiza y contrata de forma independiente a la suscripción de la plataforma.
            </p>

            <div className="border-t border-white/5 pt-5">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Incluye</p>
              <ul className="space-y-2">
                {active.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-aqua shrink-0 mt-0.5" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────
   MODELO COMERCIAL (nueva, antes de Conclusión)
───────────────────────────────────────────── */
function PricingModel() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="13">Modelo comercial</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 max-w-3xl">
          Un modelo pensado <span className="text-gradient">para municipios</span>
        </h2>
        <p className="text-xl text-muted-foreground font-light max-w-2xl mb-16">
          Sin inversión inicial. Sin licitación compleja. Sin equipos técnicos internos.
          Solo un acceso mensual que incluye todo lo que el programa necesita para funcionar y crecer.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            icon: <Zap className="w-6 h-6" />,
            title: "Acceso mensual",
            desc: "Sin inversión inicial. El municipio activa el servicio y empieza a operar desde el primer día.",
            color: "eco",
          },
          {
            icon: <RefreshCw className="w-6 h-6" />,
            title: "Todo incluido",
            desc: "Soporte técnico, actualizaciones, evolución de la plataforma y estrategia de comunicación de Enfoque Misiones.",
            color: "aqua",
          },
          {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Sin reinversión",
            desc: "La plataforma crece y mejora continuamente. El municipio no necesita volver a contratar ni licitar.",
            color: "gold",
          },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="glass rounded-3xl p-8"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
              style={{ background: `oklch(var(--${c.color}) / 0.15)`, color: `var(--${c.color})` }}
            >
              {c.icon}
            </div>
            <h3 className="font-display font-semibold text-xl mb-3">{c.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        {...fadeUp}
        className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-eco/15 to-aqua/10 border border-eco/20 text-center"
      >
        <p className="text-2xl md:text-3xl font-display font-semibold mb-4">
          ¿Querés conocer los detalles del servicio?
        </p>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Agendamos una conversación para presentar el modelo, los módulos disponibles
          y cómo se adapta al programa actual del municipio.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex items-center gap-2 text-sm glass px-5 py-3 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-eco" />
            Sin compromiso
          </div>
          <div className="flex items-center gap-2 text-sm glass px-5 py-3 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-eco" />
            Propuesta a medida
          </div>
          <div className="flex items-center gap-2 text-sm glass px-5 py-3 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-eco" />
            Soporte local en Misiones
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   CONCLUSIÓN (14)
───────────────────────────────────────────── */
function Conclusion() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="14">Conclusión</SectionLabel>
      </motion.div>

      <motion.div {...fadeUp} className="rounded-[2.5rem] p-12 md:p-20 bg-gradient-to-br from-eco/20 via-aqua/10 to-transparent border border-white/10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-eco/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-aqua/20 blur-3xl" />

        <div className="relative">
          <Recycle className="w-12 h-12 text-eco mb-8" />
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            De una iniciativa existente a una{" "}
            <span className="text-gradient">política pública organizada, medible y replicable a nivel regional.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl">
            El valor no está solo en la plataforma, sino en lo que el municipio puede mostrar, comunicar
            y escalar a partir de ella. Puerto Rico puede ser el primer modelo de economía circular
            digital en Misiones.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { i: <Leaf className="w-4 h-4" />, t: "Sustentable" },
              { i: <Award className="w-4 h-4" />, t: "Medible" },
              { i: <Eye className="w-4 h-4" />, t: "Visible" },
              { i: <Globe className="w-4 h-4" />, t: "Replicable" },
            ].map((b) => (
              <div key={b.t} className="flex items-center gap-2 px-5 py-2.5 rounded-full glass">
                <span className="text-eco">{b.i}</span>
                <span className="text-sm font-medium">{b.t}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.footer {...fadeUp} className="mt-20 pt-10 border-t border-white/5 flex flex-col gap-8">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          <img src={muniLogo} alt="Municipalidad de Puerto Rico" className="h-12 object-contain brightness-0 invert" />
          <div className="w-px h-10 bg-white/10" />
          <img src={paraleloLogo} alt="Paralelo" className="h-8 object-contain" />
          <div className="w-px h-10 bg-white/10" />
          <img src={enfoqueLogo} alt="Enfoque Misiones" className="h-7 object-contain brightness-0 invert" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <span>EcoPuertoRico · Propuesta de acceso a plataforma · 2026</span>
          <span>Paralelo × Enfoque Misiones · Documento de trabajo</span>
        </div>
      </motion.footer>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ROOT
───────────────────────────────────────────── */
function Index() {
  return (
    <main className="relative">
      <Hero />
      <Alliance />
      <PlatformModel />
      <Intro />
      <Objectives />
      <Actors />
      <Flow />
      <Features />
      <Mockup />
      <Vision />
      <Architecture />
      <Benefits />
      <Roadmap />
      <Complementary />
      <PricingModel />
      <Conclusion />
    </main>
  );
}