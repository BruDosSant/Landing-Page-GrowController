import Image from "next/image";
import Link from "next/link";
import LottieAnimation from "./components/LottieAnimation";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-black/5 bg-background/80 backdrop-blur dark:border-white/10">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image src="/logo-perso.svg" alt="Grow Controller" width={28} height={28} />
            <span className="text-base font-semibold tracking-tight">Grow Controller</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm sm:flex">
            <a href="#proyecto" className="hover:text-primary">Proyecto</a>
            <a href="#equipo" className="hover:text-primary">Equipo</a>
            <a href="#contact" className="hover:text-primary">Contacto</a>
            <Link
              href="#repositorio"
              className="rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground shadow-sm transition hover:brightness-95"
            >
              Código Abierto
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
                Un equipo, una misión: Automatizar la agricultura.
              </h1>
              <p className="mt-5 max-w-prose text-pretty text-base text-black/70 dark:text-white/70 sm:text-lg">
                Somos un equipo de 4 profesionales y este es nuestro proyecto. Te presentamos Grow Controller, una plataforma de código abierto para monitorear y controlar invernaderos usando IA y un stack de IoT moderno.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#proyecto"
                  className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
                >
                  Ver el Proyecto
                </Link>
                <Link
                  href="#equipo"
                  className="rounded-full border border-black/10 px-5 py-3 text-center text-sm font-semibold transition hover:bg-black/5 dark:border-white/15 dark:hover:bg-white/10"
                >
                  Conocer al Equipo
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LottieAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Features / Proyecto */}
      <section id="proyecto" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sobre el proyecto</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
            Grow Controller es una plataforma de automatización <strong>inteligente</strong> para invernaderos. No solo te permite controlar tu cultivo en tiempo real si no que puedes decirle qué planta quieres cultivar y el sistema usará IA para establecer las condiciones óptimas de riego, luz y temperatura por ti.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon="/dashboard.PNG" title="Panel unificado" description="Conecta tus invernaderos y obtén una vista 360° de tus cultivos." />
          <FeatureCard icon="/gemini.PNG" title="Autoconfiguración con IA" description="Dile qué cultivas y Grow Controller usará IA para consultar y aplicar los umbrales óptimos de temperatura y humedad de suelo." />
          <FeatureCard icon="/Alertas.PNG" title="Historial y Alertas" description="Visualiza el historial de tus sensores en gráficos detallados y recibe alertas cuando los niveles de agua o humedad sean críticos." />
        </div>
      </section>

      {/* Team */}
      <section id="equipo" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Nuestro equipo</h2>
          <p className="mt-3 text-black/70 dark:text-white/70">
          Somos 4 profesionales apasionados por la tecnología y los desafíos. Hemos unido nuestras habilidades para construir Grow Controller, una plataforma completa para automatizar la agricultura en invernaderos.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <TeamCard avatar="/Bruno-Dos-Santos.png" name="Bruno Dos Santos" role="Q&A Engineer / Backend Developer" />
          <TeamCard avatar="/Brahian-Amaral.png" name="Brahian Amaral" role="Hardware Engineer / Backend Developer" />
          <TeamCard avatar="/Striker.png" name="Agustin Lahalo" role="Full Stack Developer" />
          <TeamCard avatar="/Juan-Diego.png" name="Juan Diego Aedo" role="Frontend Developer" />
        </div>
      </section>

      {/* Repositorio Open Source */}
      <section id="repositorio" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center shadow-sm dark:border-white/10">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Grow Controller es Open Source
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base text-black/70 dark:text-white/70 sm:text-lg">
            Creemos en la transparencia y la colaboración. Nuestro código está disponible públicamente para que puedas descargarlo, modificarlo y contribuir al proyecto.
          </p>
          <div className="mt-8 flex items-center justify-center">
            <a
              href="https://github.com/Brahian-A/Grow_controller"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              Ver en GitHub
            </a>
          </div>
          <div className="mt-8 rounded-lg border border-black/10 bg-white/50 p-4 text-left dark:border-white/10 dark:bg-black/20">
            <h4 className="mb-3 text-sm font-semibold">¿Cómo empezar?</h4>
            <ol className="space-y-2 text-sm text-black/70 dark:text-white/70">
              <li className="flex gap-2">
                <span className="font-semibold text-primary">1.</span>
                <span>Clona el repositorio desde GitHub</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">2.</span>
                <span>Sigue las instrucciones de instalación en el README</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">3.</span>
                <span>Personaliza y adapta el sistema según tus necesidades</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-primary">4.</span>
                <span>Contribuye con mejoras y comparte tu experiencia</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="demo" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl border border-black/10 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center shadow-sm dark:border-white/10">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            ¿Necesitas ayuda o tienes preguntas?
          </h3>
          <p className="mx-auto mt-3 max-w-prose text-black/70 dark:text-white/70">
            Contáctanos si necesitas soporte técnico o quieres conocer más sobre el proyecto.
          </p>
          <div className="mt-6 flex items-center justify-center">
            <a
              href="mailto:contacto@growcontroller.app?subject=Consulta%20Grow%20Controller"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-95"
            >
              Contactar
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-black/5 py-10 text-sm dark:border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
          <div className="flex items-center gap-3">
            <Image src="/logo-perso.svg" alt="Grow Controller" width={20} height={20} />
            <span className="font-medium">Grow Controller</span>
          </div>
          <div className="text-black/60 dark:text-white/60">© {new Date().getFullYear()} Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="h-full flex flex-col justify between rounded-2xl border border-black/10 p-6 shadow-sm transition hover:shadow-md dark:border-white/10">
      <div>
        <h3 className="text-base font-semibold tracking-tight">{title}</h3>
        </div>
      <div className="flex-grow">
        <p className="mt-3 text-sm text-black/70 dark:text-white/70">{description}</p>
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Image src={icon} alt="" width={40000} height={40000} className="w-full h-full object-cover" />
      </div>
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
