import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Droplets, Users, Store, School, Truck, Building2, MapPin, Trophy,
  BarChart3, Leaf, Sparkles, ArrowRight, Bell, Route as RouteIcon,
  Target, Eye, Megaphone, Zap, CheckCircle2, Globe, Database, Layers,
  TrendingUp, Award, Recycle, ChevronDown,
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

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-between px-8 md:px-16 py-12 overflow-hidden">
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

      <motion.div style={{ y, opacity }} className="relative z-10 flex justify-between items-start">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-eco to-aqua flex items-center justify-center">
            <Droplets className="w-5 h-5 text-ink" />
          </div>
          <div className="font-display font-semibold tracking-tight">EcoPuertoRico</div>
        </div>
        <div className="hidden md:flex items-center gap-2 glass px-4 py-2 rounded-full text-xs">
          <span className="w-2 h-2 rounded-full bg-eco animate-pulse" />
          Documento estratégico · Versión integral
        </div>
      </motion.div>

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 text-eco" />
          <span className="text-xs tracking-wide">Paralelo × Enfoque Misiones</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] mb-8"
        >
          Transformación digital del{" "}
          <span className="text-gradient">programa de recolección de aceite</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 font-light"
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

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex flex-col gap-6"
      >
        <div className="glass rounded-2xl px-6 py-5 flex flex-wrap items-center justify-between gap-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Una iniciativa de</span>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <img src={muniLogo} alt="Municipalidad de Puerto Rico" className="h-10 md:h-12 object-contain brightness-0 invert opacity-90" />
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <img src={paraleloLogo} alt="Paralelo" className="h-7 md:h-8 object-contain" />
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <img src={enfoqueLogo} alt="Enfoque Misiones" className="h-6 md:h-7 object-contain brightness-0 invert opacity-90" />
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <ChevronDown className="w-4 h-4 animate-bounce" />
          Desplazá para descubrir la propuesta
        </div>
      </motion.div>
    </section>
  );
}

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
            logoClass: "h-9",
            title: "Paralelo",
            text: "Diseño y desarrollo de sistemas digitales a medida. Plataformas robustas, escalables y adaptadas al contexto municipal.",
            tag: "Tecnología",
          },
          {
            logo: enfoqueLogo,
            logoClass: "h-7 brightness-0 invert opacity-90",
            title: "Enfoque Misiones",
            text: "Comunicación estratégica y posicionamiento institucional. Convertimos datos en historias, contenido y participación.",
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
            <h3 className="text-2xl font-semibold mb-3 font-display">{c.title}</h3>
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
                "El sistema no queda solo como herramienta interna",
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
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Intro() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-5xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="01">Introducción</SectionLabel>
        <p className="text-2xl md:text-3xl font-light leading-relaxed text-foreground/90">
          Proponemos implementar un sistema digital para potenciar el programa de recolección de aceite usado del{" "}
          <span className="text-eco font-medium">Municipio de Puerto Rico</span>. No se trata de modificar el programa actual,
          sino de dotarlo de herramientas que mejoren su <span className="text-aqua">organización</span>,{" "}
          <span className="text-aqua">medición</span> y <span className="text-aqua">visibilidad</span>.
        </p>
      </motion.div>
    </section>
  );
}

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
        <SectionLabel num="02">Objetivos</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 max-w-3xl">
          Digitalizar para <span className="text-gradient">multiplicar el impacto</span>
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
        <SectionLabel num="03">Actores del sistema</SectionLabel>
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
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-${a.color}/15 text-${a.color}`}
                 style={{ backgroundColor: `oklch(var(--${a.color}) / 0.15)`, color: `var(--${a.color})` }}>
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

function Flow() {
  const steps = [
    "Un usuario registra un aviso de aceite disponible",
    "El sistema organiza y prioriza los retiros",
    "El chofer realiza la recolección",
    "Se registra la cantidad recolectada",
    "Se actualizan rankings e indicadores",
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="04">Flujo del sistema</SectionLabel>
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

function Features() {
  const groups = [
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Gestión de Recolección",
      items: ["Registro de entregas", "Historial completo", "Organización de rutas"],
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Sistema de Avisos",
      items: ["Vecinos y comercios notifican disponibilidad", "Geolocalización", "Priorización automática"],
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      title: "Gamificación",
      items: ["Ranking de barrios", "Ranking de escuelas", "Ranking de comercios", "Certificados digitales"],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Métricas",
      items: ["Litros recolectados", "Biodiesel generado", "Reducción de CO₂"],
    },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="05">Funcionalidades</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Todo lo que el programa necesita, <span className="text-eco">en un solo lugar</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.1 }}
            className="glass rounded-3xl p-8 hover:border-eco/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-eco/20 to-aqua/20 flex items-center justify-center text-eco">
                {g.icon}
              </div>
              <h3 className="font-display font-semibold text-xl">{g.title}</h3>
            </div>
            <ul className="space-y-2">
              {g.items.map((it) => (
                <li key={it} className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-eco" />
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

function Mockup() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="06">Visualización</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Una experiencia <span className="text-gradient">simple y poderosa</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Phone 1 - Ranking */}
        <motion.div {...fadeUp} className="flex justify-center">
          <div className="w-full max-w-[300px] rounded-[2.5rem] p-6 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-2xl animate-float">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-eco to-aqua flex items-center justify-center">
                  <Droplets className="w-4 h-4 text-ink" />
                </div>
                <span className="font-display font-semibold text-sm">EcoPuertoRico</span>
              </div>
              <Trophy className="w-4 h-4 text-gold" />
            </div>
            <div className="text-xs text-muted-foreground mb-2">Ranking de barrios</div>
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
            <div className="mt-4 flex items-center gap-2 text-xs text-eco">
              <TrendingUp className="w-3 h-3" /> +12% esta semana
            </div>
          </div>
        </motion.div>

        {/* Phone 2 - Impact */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="flex justify-center lg:mt-12">
          <div className="w-full max-w-[300px] rounded-[2.5rem] p-6 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-2xl animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-xs text-muted-foreground mb-4">Impacto acumulado</div>
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
            <div className="mt-6 px-4 py-2.5 rounded-xl bg-eco text-ink text-xs font-medium text-center">
              Ver detalles
            </div>
          </div>
        </motion.div>

        {/* Phone 3 - New aviso */}
        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }} className="flex justify-center">
          <div className="w-full max-w-[300px] rounded-[2.5rem] p-6 bg-gradient-to-b from-surface-2 to-ink border border-white/10 shadow-2xl animate-float" style={{ animationDelay: "2s" }}>
            <div className="text-xs text-muted-foreground mb-4">Nuevo aviso</div>
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
            <div className="mt-6 h-32 rounded-2xl bg-gradient-to-br from-eco/20 to-aqua/10 border border-white/5 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, oklch(1 0 0 / 0.05) 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
              <MapPin className="w-8 h-8 text-eco animate-pulse-glow relative z-10" />
            </div>
            <div className="mt-4 px-4 py-2.5 rounded-xl bg-eco text-ink text-xs font-medium text-center">
              Solicitar retiro
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Architecture() {
  const layers = [
    { icon: <Database className="w-5 h-5" />, t: "Backend central (API)" },
    { icon: <Layers className="w-5 h-5" />, t: "Base de datos unificada" },
    { icon: <Building2 className="w-5 h-5" />, t: "Panel administrativo" },
    { icon: <Users className="w-5 h-5" />, t: "Aplicación para usuarios" },
    { icon: <Globe className="w-5 h-5" />, t: "Portal público" },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="07">Arquitectura</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Una base sólida, <span className="text-eco">escalable</span> y abierta
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

function Benefits() {
  const ops = ["Mejor organización", "Menor carga administrativa", "Datos centralizados"];
  const pol = [
    "Visibilidad permanente",
    "Comunicación con datos reales",
    "Generación de contenido constante",
    "Mayor participación ciudadana",
    "Posicionamiento institucional",
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div {...fadeUp} className="glass rounded-3xl p-10">
          <SectionLabel num="08">Operativos</SectionLabel>
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

        <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="rounded-3xl p-10 bg-gradient-to-br from-eco to-eco-deep text-ink">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-display text-sm tracking-widest font-medium">09</span>
            <div className="h-px w-12 bg-ink/40" />
            <span className="text-xs uppercase tracking-[0.3em]">Estratégicos</span>
          </div>
          <h3 className="text-3xl font-semibold mb-8">Beneficios <span className="opacity-70">políticos & comunicacionales</span></h3>
          <div className="space-y-3">
            {pol.map((b) => (
              <div key={b} className="flex items-center gap-3 p-4 rounded-2xl bg-ink/10 backdrop-blur-sm">
                <Eye className="w-5 h-5 shrink-0" />
                <span className="font-medium">{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Roadmap() {
  const phases = [
    { n: "Fase 1", t: "Sistema base", d: "Núcleo funcional, registros y panel administrativo." },
    { n: "Fase 2", t: "Rankings y métricas", d: "Gamificación, indicadores y reportes en tiempo real." },
    { n: "Fase 3", t: "Portal público", d: "Visibilidad ciudadana, datos abiertos y contenido." },
    { n: "Fase 4", t: "Expansión", d: "Nuevas categorías, integraciones y escalado regional." },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="10">Roadmap</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Un plan <span className="text-gradient">por fases</span>, claro y progresivo
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

function Complementary() {
  const items = [
    { icon: <Globe className="w-5 h-5" />, t: "Rediseño del sitio web municipal" },
    { icon: <Sparkles className="w-5 h-5" />, t: "Landing del programa" },
    { icon: <Users className="w-5 h-5" />, t: "Sistema de participación ciudadana" },
    { icon: <BarChart3 className="w-5 h-5" />, t: "Tableros de gestión" },
  ];
  return (
    <section className="px-8 md:px-16 py-32 max-w-7xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="11">Propuestas complementarias</SectionLabel>
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 max-w-3xl">
          Más allá del sistema: <span className="text-eco">un ecosistema digital</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.t}
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: i * 0.08 }}
            className="glass rounded-3xl p-6 hover:bg-aqua/5 transition-colors group"
          >
            <div className="w-12 h-12 rounded-xl bg-aqua/15 text-aqua flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              {it.icon}
            </div>
            <p className="font-medium">{it.t}</p>
            <ArrowRight className="w-4 h-4 text-muted-foreground mt-4 group-hover:text-aqua transition-colors" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Conclusion() {
  return (
    <section className="px-8 md:px-16 py-32 max-w-6xl mx-auto">
      <motion.div {...fadeUp}>
        <SectionLabel num="12">Conclusión</SectionLabel>
      </motion.div>

      <motion.div {...fadeUp} className="rounded-[2.5rem] p-12 md:p-20 bg-gradient-to-br from-eco/20 via-aqua/10 to-transparent border border-white/10 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-eco/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-aqua/20 blur-3xl" />

        <div className="relative">
          <Recycle className="w-12 h-12 text-eco mb-8" />
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
            De una iniciativa existente a una{" "}
            <span className="text-gradient">política pública organizada, medible y visible.</span>
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-3xl">
            El valor no está solo en el sistema, sino en lo que el municipio puede mostrar a partir de él.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {[
              { i: <Leaf className="w-4 h-4" />, t: "Sustentable" },
              { i: <Award className="w-4 h-4" />, t: "Medible" },
              { i: <Eye className="w-4 h-4" />, t: "Visible" },
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
          <span>EcoPuertoRico · Propuesta integral · 2026</span>
          <span>Paralelo × Enfoque Misiones · Documento de trabajo</span>
        </div>
      </motion.footer>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Hero />
      <Alliance />
      <Intro />
      <Objectives />
      <Actors />
      <Flow />
      <Features />
      <Mockup />
      <Architecture />
      <Benefits />
      <Roadmap />
      <Complementary />
      <Conclusion />
    </main>
  );
}
