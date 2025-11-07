import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-black/5 bg-background/80 backdrop-blur dark:border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo-gc.svg" alt="Grow Controller" width={28} height={28} />
            <span className="text-base font-semibold tracking-tight">Grow Controller</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#features" className="hover:text-primary">Características</a>
            <a href="#equipo" className="hover:text-primary">Equipo</a>
            <a href="#contact" className="hover:text-primary">Contacto</a>
            <Link
              href="#demo"
              className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground shadow-sm transition hover:brightness-95"
            >
              Solicitar demo
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(34,197,94,0.18),rgba(0,0,0,0))]" />
        <div className="mx-auto max-w-6xl px-4 py-20 sm:py-28 sm:px-6">
          <div className="grid items-center gap-10 sm:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Conoce al equipo detrás de Grow Controller
              </h1>
              <p className="mt-5 max-w-prose text-pretty text-base text-black/70 dark:text-white/70 sm:text-lg">
                Somos un equipo de 4 profesionales construyendo una plataforma para
                monitorear, automatizar y escalar métricas clave. El foco: las
                personas y cómo trabajamos.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#equipo"
                  className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
                >
                  Ver equipo
                </Link>
                <a
                  href="#features"
                  className="rounded-full border border-black/10 px-5 py-3 text-center text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                >
                  Sobre el proyecto
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 opacity-80">
                <Image src="/vercel.svg" alt="Infraestructura" width={24} height={24} />
                <span className="text-xs">Rendimiento de clase mundial con Next.js 16 y React 19</span>
              </div>
            </div>
            <div className="relative">
              <div className="mx-auto aspect-[4/3] w-full max-w-md rounded-2xl border border-black/10 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-black">
                <div className="grid h-full grid-cols-3 gap-3">
                  <div className="rounded-xl bg-primary/10" />
                  <div className="rounded-xl bg-primary/20" />
                  <div className="rounded-xl bg-primary/30" />
                  <div className="col-span-3 rounded-xl bg-muted p-4">
                    <div className="h-2 w-24 rounded bg-primary" />
                    <div className="mt-3 h-2 w-40 rounded bg-black/10 dark:bg-white/10" />
                    <div className="mt-2 h-2 w-32 rounded bg-black/10 dark:bg-white/10" />
                  </div>
                  <div className="col-span-3 grid grid-cols-3 gap-3">
                    <div className="rounded-xl bg-black/5 p-4 dark:bg-white/10">
                      <div className="h-2 w-16 rounded bg-primary" />
                      <div className="mt-2 h-2 w-20 rounded bg-black/10 dark:bg-white/10" />
                    </div>
                    <div className="rounded-xl bg-black/5 p-4 dark:bg-white/10">
                      <div className="h-2 w-16 rounded bg-primary" />
                      <div className="mt-2 h-2 w-20 rounded bg-black/10 dark:bg-white/10" />
                    </div>
                    <div className="rounded-xl bg-black/5 p-4 dark:bg-white/10">
                      <div className="h-2 w-16 rounded bg-primary" />
                      <div className="mt-2 h-2 w-20 rounded bg-black/10 dark:bg-white/10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Nuestro equipo</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            4 personas, una misión: convertir datos en crecimiento accionable.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TeamCard avatar="/team-1.svg" name="Nombre 1" role="CEO / Co-founder" />
          <TeamCard avatar="/team-2.svg" name="Nombre 2" role="CTO / Co-founder" />
          <TeamCard avatar="/team-3.svg" name="Nombre 3" role="Product Designer" />
          <TeamCard avatar="/team-4.svg" name="Nombre 4" role="Data Engineer" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sobre el proyecto (secundario)</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Métricas, automatizaciones y reportes para accionar en tiempo real.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="/globe.svg" title="Panel unificado" description="Conecta tus fuentes y obtén una vista 360° del funnel." />
          <FeatureCard icon="/window.svg" title="Automatizaciones" description="Crea reglas para alertas y acciones sin escribir código." />
          <FeatureCard icon="/file.svg" title="Reportes inteligentes" description="Informes claros, compartibles y listos para presentar." />
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center shadow-sm dark:border-white/10">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            ¿Listo para tomar control del crecimiento?
          </h3>
          <p className="mx-auto mt-3 max-w-prose text-black/70 dark:text-white/70">
            Agenda una demo personalizada y descubre cómo Grow Controller acelera tus resultados.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contacto@growcontroller.com?subject=Demo%20Grow%20Controller"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
            >
              Solicitar demo
            </a>
            <a
              href="#contact"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
            >
              Hablar con ventas
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-black/5 py-10 text-sm dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo-gc.svg" alt="Grow Controller" width={20} height={20} />
            <span className="font-medium">Grow Controller</span>
          </div>
          <div className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 p-6 shadow-sm transition hover:shadow-md dark:border-white/10">
      <div className="flex items-center gap-3">
        <Image src={icon} alt="" width={20} height={20} className="dark:invert" />
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-black/70 dark:text-white/70">{description}</p>
    </div>
  );
}

type TeamCardProps = {
  avatar: string;
  name: string;
  role: string;
};

function TeamCard({ avatar, name, role }: TeamCardProps) {
  return (
    <div className="rounded-2xl border border-black/10 p-6 text-center shadow-sm transition hover:shadow-md dark:border-white/10">
      <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/30">
        <Image src={avatar} alt={name} width={80} height={80} />
      </div>
      <h3 className="mt-4 text-base font-semibold tracking-tight">{name}</h3>
      <p className="text-sm text-black/70 dark:text-white/70">{role}</p>
    </div>
  );
}
