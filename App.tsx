import React, { useState } from 'react';
import logoSrc from './imagens/logo-pv-mdc.png';
import mockupInicialSrc from './imagens/mockup-inicial.png';
import {
  MapPin,
  Calendar,
  BookOpen,
  Menu,
  X,
  ChevronRight,
  Star,
  Smartphone,
  Church,
  Users,
  Clock,
  AlertCircle,
  Search,
  CheckCircle2,
  ShieldCheck,
  HelpCircle,
  ChevronDown,
  Flame,
  Trophy,
  Headphones,
  PlayCircle,
  LayoutList,
  Cross,
  CreditCard,
  Mail,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

// Restaurando o estilo original solicitado
const UserStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&family=Merriweather:wght@300;400;700;900&family=Source+Serif+4:ital,opsz,wght@0,8..60,300..900;1,8..60,300..900&display=swap');

    :root {
      --background: oklch(0.8798 0.0534 91.7893);
      --foreground: oklch(0.4265 0.031 59.2153);
      --card: oklch(0.8937 0.0395 87.5676);
      --card-foreground: oklch(0.4265 0.031 59.2153);
      --popover: oklch(0.9378 0.0331 89.8515);
      --popover-foreground: oklch(0.4265 0.031 59.2153);
      --primary: oklch(0.5705 0.2044 260.0778);
      --primary-foreground: oklch(0.9882 0.0069 88.6415);
      --secondary: oklch(0.8532 0.0631 91.1493);
      --secondary-foreground: oklch(0.4265 0.031 59.2153);
      --muted: oklch(0.8532 0.0631 91.1493);
      --muted-foreground: oklch(0.5761 0.0259 60.9323);
      --accent: oklch(0.8361 0.0713 90.3269);
      --accent-foreground: oklch(0.4265 0.031 59.2153);
      --destructive: oklch(0.7136 0.0981 29.9827);
      --destructive-foreground: oklch(0.979 0.0082 91.4818);
      --border: oklch(0.6918 0.044 59.8448);
      --input: oklch(0.8361 0.0713 90.3269);
      --ring: oklch(0.746 0.121 245.6);
      
      --radius: 0.5rem;
      --font-sans: 'Merriweather', serif;
      --font-serif: 'Source Serif 4', serif;
      --font-mono: 'JetBrains Mono', monospace;
    }

    /* Mapeamento manual para garantir que o Tailwind use as variáveis CSS */
    body {
      background-color: var(--background);
      color: var(--foreground);
      font-family: var(--font-sans);
    }
    
    .font-sans { font-family: var(--font-sans); }
    .font-serif { font-family: var(--font-serif); }
    
    .bg-background { background-color: var(--background); }
    .text-foreground { color: var(--foreground); }
    
    .bg-primary { background-color: var(--primary); }
    .text-primary-foreground { color: var(--primary-foreground); }
    .border-primary { border-color: var(--primary); }
    .text-primary { color: var(--primary); }
    
    .bg-card { background-color: var(--card); }
    .text-card-foreground { color: var(--card-foreground); }
    
    .bg-secondary { background-color: var(--secondary); }
    .text-secondary-foreground { color: var(--secondary-foreground); }
    
    .bg-accent { background-color: var(--accent); }
    .text-accent-foreground { color: var(--accent-foreground); }
    
    .bg-muted { background-color: var(--muted); }
    .text-muted-foreground { color: var(--muted-foreground); }

    .border-border { border-color: var(--border); }
    .border-input { border-color: var(--input); }
    
    .glass-nav {
      background-color: color-mix(in oklch, var(--background), transparent 20%);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
    }

    @keyframes scroll {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-scroll {
      animation: scroll 40s linear infinite;
    }
    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}} />
);

// Imagem do Logo
const LOGO_SRC = logoSrc;

const Logo = ({ className = "" }: { className?: string }) => (
  <img
    src={LOGO_SRC}
    alt="Logo Mapa do Católico"
    className={`object-cover ${className}`}
  />
);

// Componente de Botão Reutilizável (Estilo Original)
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-14 px-8 py-2 shadow-sm";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:opacity-90 shadow-lg",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

// Componente do Mockup do Celular (Atualizado para Dashboard Espiritual)
const AppMockup = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
      <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>

      {/* Tela do App */}
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-background flex flex-col relative">

        {/* Header do App */}
        <div className="pt-8 pb-4 px-4 bg-primary text-primary-foreground flex justify-between items-center rounded-b-3xl shadow-md z-10">
          <div>
            <p className="text-xs opacity-80">Salve Maria,</p>
            <h3 className="font-bold text-lg leading-tight">João</h3>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full text-xs font-bold">
              <Flame size={12} fill="currentColor" />
              <span>12</span>
            </div>
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <Users size={16} />
            </div>
          </div>
        </div>

        {/* Conteúdo Dashboard */}
        <div className="flex-1 bg-muted/30 relative p-4 space-y-4 overflow-hidden">

          {/* Card Liturgia */}
          <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                <div className="bg-primary/10 p-1.5 rounded-lg text-primary">
                  <BookOpen size={16} />
                </div>
                <span className="font-bold text-sm text-card-foreground">Liturgia Diária</span>
              </div>
              <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Tempo Comum</span>
            </div>
            <p className="text-xs text-muted-foreground font-serif leading-snug">
              "Eu sou o caminho, a verdade e a vida..."
            </p>
            <div className="mt-3 flex gap-2">
              <div className="h-1 flex-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full w-full bg-primary"></div>
              </div>
            </div>
          </div>

          {/* Card Terço */}
          <div className="bg-card p-4 rounded-xl shadow-sm border border-border">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-secondary p-1.5 rounded-lg text-secondary-foreground">
                  <LayoutList size={16} />
                </div>
                <div>
                  <p className="font-bold text-sm text-card-foreground">Santo Terço</p>
                  <p className="text-[10px] text-muted-foreground">Mistérios Dolorosos</p>
                </div>
              </div>
              <button className="text-primary hover:bg-primary/10 p-1 rounded-full">
                <PlayCircle size={20} />
              </button>
            </div>
            <div className="flex justify-between items-center text-xs text-muted-foreground">
              <span>3º Mistério</span>
              <span>60%</span>
            </div>
          </div>

          {/* Card Novena */}
          <div className="bg-card p-4 rounded-xl shadow-sm border border-border opacity-80">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 text-orange-600 p-1.5 rounded-lg">
                <Flame size={16} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm text-card-foreground">Novena de Natal</p>
                <p className="text-[10px] text-muted-foreground">Dia 4 de 9</p>
              </div>
              <div className="h-5 w-5 rounded-full border-2 border-primary/30 flex items-center justify-center">
              </div>
            </div>
          </div>

        </div>

        {/* Barra de Navegação Inferior do App */}
        <div className="bg-card border-t border-border p-4 pb-6 flex justify-around text-muted-foreground">
          <div className="flex flex-col items-center gap-1 text-primary">
            <LayoutList size={20} />
            <span className="text-[10px] font-bold">Hoje</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <BookOpen size={20} />
            <span className="text-[10px]">Bíblia</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Trophy size={20} />
            <span className="text-[10px]">Conquistas</span>
          </div>
        </div>

      </div>
    </div>
  );
};

// Componente FAQ
const FaqItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border/50 last:border-0 bg-card rounded-xl px-6">
      <button
        className="flex items-center justify-between w-full py-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-bold text-foreground font-sans">{question}</span>
        <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} text-primary`} size={20} />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-muted-foreground font-serif text-sm px-2 leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const HeroImage = () => (
  <div className="relative w-full flex justify-center items-center">
    <img
      src={mockupInicialSrc}
      alt="App Mockup"
      className="relative z-10 w-[80%] sm:w-[350px] md:w-[400px] lg:w-[500px] drop-shadow-2xl"
    />

    {/* Decorative Elements - Left */}
    <div className="absolute top-[15%] -left-2 sm:-left-8 lg:-left-12 bg-card p-3 md:p-4 rounded-2xl shadow-2xl border border-border max-w-[250px] md:max-w-[220px] animate-bounce duration-[4000ms] z-20">
      <div className="flex gap-13 items-center">
        <div className="bg-secondary p-2 rounded-full text-secondary-foreground">
          <Trophy size={18} />
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">15 Dias Seguidos!</p>
          <p className="text-[10px] text-muted-foreground">Nova medalha desbloqueada</p>
        </div>
      </div>
    </div>

    {/* Decorative Elements - Right */}
    <div className="absolute bottom-[20%] -right-2 sm:-right-8 lg:-right-12 bg-card p-3 md:p-4 rounded-2xl shadow-2xl border border-border max-w-[160px] md:max-w-[200px] animate-bounce duration-[3000ms] delay-1000 z-20">
      <div className="flex gap-3 items-center">
        <div className="bg-green-100 p-2 rounded-full text-green-600">
          <CheckCircle2 size={18} />
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">Terço Rezado</p>
          <p className="text-[10px] text-muted-foreground">Você rezou hoje!</p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <UserStyles />

      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-xs md:text-sm font-bold tracking-wider uppercase">
        DESCONTO BLACK NOVEMBER APLICADO 🤍
      </div>

      {/* Hero Section */}
      <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 text-center lg:text-left">

          <div className="flex-1 space-y-4 lg:space-y-8">
            {/* Logo/Header */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
              <Logo className="h-7 w-7 shadow-md rounded-lg" />
              <span className="font-bold text-xl tracking-tight text-foreground font-sans">
                Mapa do Católico
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-xl lg:text-5xl font-black font-sans tracking-tight text-foreground leading-[1.1]">
              Organize sua vida espiritual e mantenha a constância na oração.
            </h1>

            {/* Sub-headline */}
            <p className="text-base md:text-xl text-muted-foreground font-serif max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Acompanhe a Liturgia Diária, reze o Terço guiado, complete novenas e a Bíblia em 365 dias. Seu progresso católico começa aqui.
            </p>

            {/* Mobile Mockup */}
            <div className="lg:hidden py-4">
              <HeroImage />
            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="h-14 px-8 text-base shadow-xl shadow-primary/20"
                onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Quero Ter Acesso
              </Button>
              <Button
                variant="outline"
                className="h-14 px-8 text-base"
                onClick={() => document.getElementById('apresentacao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Quero Conhecer
              </Button>
            </div>

            {/* Social Proof Mini */}
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i * 13}`} alt="avatar" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-primary">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground font-medium"><span className="font-bold text-foreground">15.000+</span> orações realizadas</p>
              </div>
            </div>
          </div>

          {/* Desktop Mockup */}
          <div className="hidden lg:flex relative flex-1 justify-end items-center">
            <HeroImage />
          </div>

        </div>
      </section>

      {/* Carrossel de Depoimentos */}
      {/* Carrossel de Depoimentos Infinito */}
      <section className="bg-background overflow-hidden relative">
        {/* Gradient Masks */}
        <div
          className="absolute left-0 top-0 z-20 h-full w-[15%] md:w-[40%] pointer-events-none"
          style={{ background: 'linear-gradient(to right, var(--background) 20%, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 z-20 h-full w-[15%] md:w-[40%] pointer-events-none"
          style={{ background: 'linear-gradient(to left, var(--background) 20%, transparent)' }}
        />

        <div className="flex w-max gap-6 animate-scroll">
          {[...Array(2)].map((_, groupIndex) => (
            <div key={groupIndex} className="flex gap-6">
              {[
                { name: "Maria Silva", handle: "@mariasilva_23", text: "Finalmente consegui criar o hábito de rezar o terço todos os dias. O app é maravilhoso!", stars: 5 },
                { name: "João Paulo", handle: "@joaopaulo.catolico", text: "A liturgia diária comentada me ajuda muito a entender o Evangelho.", stars: 5 },
                { name: "Ana Clara", handle: "@anaclara_fe", text: "Design lindo e muito fácil de usar. Recomendo para todos do meu grupo de oração.", stars: 5 },
                { name: "Ricardo Oliveira", handle: "@ricardo_oliveira99", text: "As medalhas dão um incentivo extra para não quebrar a sequência. Genial!", stars: 5 },
                { name: "Fernanda Costa", handle: "@nanda.costa", text: "Uso todos os dias no caminho para o trabalho. Os áudios são de ótima qualidade.", stars: 5 },
                { name: "Pedro Santos", handle: "@pedro.santos_rj", text: "A Bíblia em 365 dias mudou minha vida. Nunca tinha conseguido ler antes.", stars: 5 },
              ].map((item, i) => (
                <div key={`${groupIndex}-${i}`} className="w-[300px] md:w-[350px] bg-card p-6 rounded-2xl shadow-sm flex flex-col gap-3">
                  <div className="flex text-yellow-400">
                    {[...Array(item.stars)].map((_, s) => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground leading-tight">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.handle}</p>
                  </div>
                  <p className="text-muted-foreground font-serif text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>



      {/* 2. Apresentação do Produto */}
      <section className="py-24 md:py-28 bg-background" id="apresentacao">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-12">
          <div className="w-full max-w-3xl text-center flex flex-col items-center gap-8">
            <h2 className="text-3xl md:text-4xl font-bold font-sans text-foreground">
              Transforme sua vida de oração com o aplicativo Mapa do Católico
            </h2>

            <div className="w-full max-w-md">
              <img src={mockupInicialSrc} alt="App Mapa do Católico" className="w-full h-auto" />
            </div>

            <div className="flex flex-col items-center gap-6 w-full">
              <p className="text-lg text-muted-foreground font-serif leading-relaxed max-w-2xl">
                Tenha acesso à liturgia diária, santo terço guiado, novenas e um plano de leitura bíblica exclusivo. Tudo isso com gamificação para te manter motivado.
              </p>
              <ul className="grid gap-4 text-left max-w-lg w-full">
                {[
                  "Liturgia diária completa com áudio e reflexão",
                  "Santo Terço guiado para rezar em qualquer lugar",
                  "Novenas ilimitadas com acompanhamento de progresso",
                  "Conteúdo em áudio para rezar no trânsito ou afazeres",
                  "Plano estruturado para ler a Bíblia em um ano"
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 font-medium text-foreground">
                    <CheckCircle2 className="text-primary" size={20} />
                    {feat}
                  </li>
                ))}
              </ul>
              <Button className="mt-4" onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                Começar Minha Jornada
                <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Recursos (Features) */}
      <section className="py-12 md:py-16 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Funcionalidades</h2>
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">O que você vai encontrar dentro do Mapa do Católico</h2>
            <p className="text-muted-foreground font-serif text-lg max-w-2xl mx-auto">
              Recursos para ajudar você a criar o santo hábito de falar com Deus todos os dias.
            </p>
          </div>

          <div className="space-y-10 md:space-y-16">
            {/* 1. Liturgia */}
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm">
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="flex-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <BookOpen size={16} />
                    <span>Leitura Diária</span>
                  </div>
                  <h3 className="text-3xl font-bold font-sans text-foreground">Liturgia Diária</h3>
                  <ul className="space-y-4 w-full text-left">
                    {[
                      "Leituras do dia (Evangelho, 1ª e 2ª leituras) conforme o calendário litúrgico",
                      "Escolha entre áudio ou texto para ler quando e onde quiser",
                      "Reflexões exclusivas com explicação de termos bíblicos e contexto histórico",
                      "Versão infantil do Evangelho adaptada para as crianças"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                        <span className="text-muted-foreground font-serif text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={mockupInicialSrc} alt="Liturgia Diária" className="w-[280px] md:w-[320px] drop-shadow-2xl rounded-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* 2. Santo Terço */}
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm">
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="flex-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <LayoutList size={16} />
                    <span>Devoção</span>
                  </div>
                  <h3 className="text-3xl font-bold font-sans text-foreground">Santo Terço Guiado</h3>
                  <ul className="space-y-4 w-full text-left">
                    {[
                      "Reze o Rosário acompanhando um diagrama visual interativo, conta por conta",
                      "Áudio guiado completo com todas as orações transcritas",
                      "Mistérios do dia identificados automaticamente"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                        <span className="text-muted-foreground font-serif text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={mockupInicialSrc} alt="Santo Terço" className="w-[280px] md:w-[320px] drop-shadow-2xl rounded-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* 3. Área de Oração */}
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm">
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="flex-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <Flame size={16} />
                    <span>Orações</span>
                  </div>
                  <h3 className="text-3xl font-bold font-sans text-foreground">Área de Oração</h3>
                  <ul className="space-y-4 w-full text-left">
                    {[
                      "Inscreva-se em novenas, ladainhas, quaresmas e outras orações",
                      "Acompanhe cada dia sem perder a sequência",
                      "Participe de várias orações ao mesmo tempo, no seu próprio ritmo"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                        <span className="text-muted-foreground font-serif text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={mockupInicialSrc} alt="Área de Oração" className="w-[280px] md:w-[320px] drop-shadow-2xl rounded-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* 4. Bíblia */}
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm">
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="flex-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <BookOpen size={16} />
                    <span>Sagradas Escrituras</span>
                  </div>
                  <h3 className="text-3xl font-bold font-sans text-foreground">Bíblia em 365 Dias</h3>
                  <ul className="space-y-4 w-full text-left">
                    {[
                      "Plano estruturado para ler toda a Bíblia em um ano",
                      "Marque seu progresso e veja o quanto já avançou nas Sagradas Escrituras"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                        <span className="text-muted-foreground font-serif text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={mockupInicialSrc} alt="Bíblia 365" className="w-[280px] md:w-[320px] drop-shadow-2xl rounded-[2.5rem]" />
                </div>
              </div>
            </div>

            {/* 5. Progresso */}
            <div className="bg-card p-8 md:p-12 rounded-3xl shadow-sm">
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-12 lg:gap-24">
                <div className="flex-1 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                    <Trophy size={16} />
                    <span>Motivação</span>
                  </div>
                  <h3 className="text-3xl font-bold font-sans text-foreground">Evolução Espiritual</h3>
                  <p className="text-muted-foreground font-serif text-lg">
                    Sabemos que manter a disciplina é desafiador. Por isso criamos recursos para te motivar:
                  </p>
                  <ul className="space-y-4 w-full text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                      <span className="text-muted-foreground font-serif text-lg">
                        <strong>Dias Consecutivos:</strong> Mantenha sua "chama da fé" acesa orando diariamente
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                      <span className="text-muted-foreground font-serif text-lg">
                        <strong>Medalhas Exclusivas:</strong> Desbloqueie conquistas ao completar novenas e manter sequências de 7, 14 e 30 dias de leitura do Evangelho
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 shrink-0" size={18} />
                      <span className="text-muted-foreground font-serif text-lg">
                        <strong>Histórico Completo:</strong> Visualize quantos terços você já rezou e celebre cada vitória espiritual
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 flex justify-center">
                  <img src={mockupInicialSrc} alt="Progresso Espiritual" className="w-[280px] md:w-[320px] drop-shadow-2xl rounded-[2.5rem]" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* 5. O que você recebe */}
      <section className="py-12 md:py-16 bg-foreground text-background">
        <div className="group max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-sans mb-12 text-background">Como você recebe o conteúdo do Mapa do Católico?</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            {[
              { icon: CreditCard, title: "1. Escolha um plano", desc: "Escolha o plano ideal e faça sua inscrição segura." },
              { icon: Mail, title: "2. Receba seu acesso", desc: "Seus dados de login chegam imediatamente no seu e-mail." },
              { icon: Smartphone, title: "3. Inicie sua jornada", desc: "Faça login, baixe o app e comece sua rotina de oração." }
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <div className="relative z-10 bg-card p-8 rounded-3xl border border-border/50 shadow-sm flex flex-col items-center gap-4 hover:shadow-md transition-all w-full md:flex-1">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-2 shadow-lg shadow-primary/20">
                    <step.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground">{step.title}</h3>
                  <p className="text-muted-foreground font-serif max-w-[250px]">{step.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <>
                    <ArrowRight className="hidden md:block text-background/30 shrink-0" size={32} />
                    <ArrowDown className="md:hidden text-background/30 shrink-0" size={32} />
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Avaliações */}
      <section className="py-12 md:py-16 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-sans text-center md:mb-12 mb-8">O que estão dizendo sobre o Mapa do Católico</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Carla Souza", role: "Mãe de 3", text: "O Evangelho Kids mudou a rotina da noite aqui em casa. As crianças pedem para ouvir." },
              { name: "Pedro Henrique", role: "Estudante", text: "A Bíblia em 365 dias é genial. A barra de progresso me dá uma satisfação enorme de continuar." },
              { name: "Ir. Fátima", role: "Religiosa", text: "Indico para todos os jovens da crisma. A gamificação ajuda muito a criar o hábito da oração." }
            ].map((review, i) => (
              <div key={i} className="bg-card p-8 rounded-2xl shadow-sm">
                <div className="flex gap-1 text-primary mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground font-serif italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`} alt={review.name} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Oferta/Assinatura */}
      <section className="py-12 md:py-16 bg-primary/5" id="download">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-sans mb-4">Comece a sua jornada com o Mapa do Católico</h2>
            <p className="text-muted-foreground font-serif">Escolha um plano e desbloqueie todos os recursos para aprofundar sua fé.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Mensal */}
            <div className="bg-card p-8 rounded-3xl shadow-sm relative">
              <h3 className="text-xl font-bold font-sans mb-2">Mensal</h3>
              <p className="text-4xl font-black font-sans mb-6">R$ 29,90<span className="text-base font-normal text-muted-foreground">/mês</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Acesso completo ao App</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Liturgia em Áudio & Kids</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Novenas Ilimitadas</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Plano Bíblia 365 Dias</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Estatísticas avançadas</li>
              </ul>
              <a href="https://seguro.mapadocatolico.com.br/r/OW41K0OW1W" target="_self" rel="noopener noreferrer" className="w-full block">
                <Button variant="outline" className="w-full">QUERO MENSAL</Button>
              </a>
            </div>

            {/* Anual */}
            <div className="bg-card p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Melhor Valor</div>
              <h3 className="text-xl font-bold font-sans mb-2 text-primary">Anual</h3>
              <p className="text-4xl font-black font-sans mb-6">R$ 97,00<span className="text-base font-normal text-muted-foreground">/ano</span></p>
              <ul className="space-y-4 mb-8">
                <li className="flex gap-2 text-sm font-bold text-foreground"><CheckCircle2 size={18} className="text-primary" /> Economize mais de 70%</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Acesso completo ao App</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Liturgia em Áudio & Kids</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Novenas Ilimitadas</li>
                <li className="flex gap-2 text-sm text-foreground"><CheckCircle2 size={18} className="text-primary" /> Plano Bíblia 365 Dias</li>
              </ul>
              <a href="https://seguro.mapadocatolico.com.br/r/TT3Y90MK8X" target="_self" rel="noopener noreferrer" className="w-full block">
                <Button className="w-full">QUERO ANUAL</Button>
              </a>
              <p className="text-xs text-center mt-4 text-muted-foreground">7 dias grátis. Cancele quando quiser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Garantia */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4">
          <div className="group px-8 py-12 text-center bg-card rounded-3xl shadow-lg">
            <ShieldCheck size={48} className="mx-auto text-primary mb-6" />
            <h3 className="text-2xl font-bold font-sans mb-4">Garantia de Satisfação</h3>
            <p className="text-muted-foreground font-serif leading-relaxed">
              Teste qualquer plano por 7 dias, sem riscos. Se o Mapa do Católico não ajudar você a organizar sua vida espiritual, você não paga nada.
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos Longos */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-sans mb-4">Histórias reais de transformação</h2>
            <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
              Veja como o Mapa do Católico está ajudando milhares de pessoas a fortalecerem sua fé diariamente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Ana Paula", role: "Mãe e Dona de Casa", text: "Com a correria do dia a dia, eu sempre deixava a oração para depois. O app me ajudou a priorizar Deus logo pela manhã." },
              { name: "Carlos Eduardo", role: "Estudante", text: "As medalhas e a ofensiva funcionam muito pra mim. Sou competitivo e isso me faz não querer quebrar a sequência de orações." },
              { name: "Mariana Santos", role: "Catequista", text: "Uso o Evangelho Kids com meus alunos da catequese e eles amam! É uma ferramenta incrível para evangelização." },
              { name: "Roberto Lima", role: "Empresário", text: "A liturgia em áudio é minha companheira no trânsito. Transformou meu tempo ocioso em tempo de graça." },
              { name: "Lúcia Ferreira", role: "Aposentada", text: "Tinha dificuldade de enxergar as letras pequenas do meu missal. No app consigo aumentar a letra e ler com conforto." },
              { name: "Pe. Marcelo", role: "Sacerdote", text: "Recomendo aos fiéis da minha paróquia. É uma forma moderna e segura de se manter conectado com a Igreja." },
              { name: "Juliana Costa", role: "Advogada", text: "A organização do app é impecável. Consigo acompanhar minhas novenas sem me perder nas contas." },
              { name: "Felipe Oliveira", role: "Engenheiro", text: "O plano de leitura da Bíblia em 365 dias é muito bem estruturado. Pela primeira vez estou conseguindo seguir." },
              { name: "Cristina Silva", role: "Enfermeira", text: "Nos plantões noturnos, o terço guiado me traz muita paz e força para continuar cuidando dos pacientes." },
              { name: "Gustavo Henrique", role: "Universitário", text: "Design lindo, sem distrações. É um app feito para rezar de verdade, não para ficar perdendo tempo." },
              { name: "Patrícia Gomes", role: "Professora", text: "As reflexões diárias são profundas e tocam o coração. Começo meu dia muito mais inspirada." },
              { name: "Ricardo Alves", role: "Vendedor", text: "Desde que baixei, não passo um dia sem rezar o Santo Terço. A mudança na minha vida foi visível." },
              { name: "Sônia Maria", role: "Avó", text: "Ensinei meus netos a usarem e agora rezamos juntos quando eles vêm me visitar. Uma benção!" },
              { name: "André Luiz", role: "Motorista", text: "O áudio é de excelente qualidade. Escuto tudo enquanto dirijo, me sinto protegido." },
              { name: "Fernanda Lima", role: "Arquiteta", text: "Amei a possibilidade de marcar as orações realizadas. Dá uma sensação de dever cumprido muito boa." }
            ].map((item, i) => (
              <div key={i} className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <div className="mb-4">
                  <p className="font-bold text-foreground">{item.name}</p>
                  <p className="text-xs text-primary font-medium">{item.role}</p>
                </div>
                <p className="text-muted-foreground font-serif leading-relaxed">"{item.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Dúvidas Frequentes */}
      <section className="py-24 bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold font-sans text-center mb-12">Dúvidas Frequentes</h2>
          <div className="space-y-2">
            <FaqItem
              question="Posso ouvir as orações offline?"
              answer="Sim! No plano Apóstolo, você pode baixar os áudios da Liturgia e do Terço para ouvir mesmo sem internet."
            />
            <FaqItem
              question="O plano Bíblia 365 segue qual tradução?"
              answer="Utilizamos traduções católicas oficiais aprovadas pela CNBB, garantindo fidelidade aos textos sagrados."
            />
            <FaqItem
              question="Como funciona a gamificação?"
              answer="O app registra seus dias consecutivos de oração (ofensiva) e te premia com medalhas virtuais ao completar desafios, como '30 dias seguidos' ou 'Novena Completa'."
            />
            <FaqItem
              question="Posso compartilhar minha conta com a família?"
              answer="A assinatura é individual para que o progresso espiritual e as medalhas sejam personalizados para a sua jornada."
            />
          </div>
          <div className="mt-12 text-center">
            <Button
              className="h-14 px-8 text-base shadow-xl shadow-primary/20"
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Começar Minha Jornada
              <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Logo className="w-10 h-10 shadow-lg rounded-xl" />
                <span className="font-bold text-xl font-sans">Mapa do Católico</span>
              </div>
              <p className="text-muted-foreground max-w-sm font-serif">
                Seu organizador católico completo. Nossa missão é ajudar você a manter a constância na fé através da tecnologia.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-sans">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li><a href="#" className="hover:text-primary">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-primary">Privacidade</a></li>
                <li><a href="#" className="hover:text-primary">Cookies</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 font-sans">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground font-serif">
                <li>contato@mapadocatolico.com</li>
                <li className="flex gap-4 mt-4">
                  <a href="#" className="hover:text-primary text-foreground"><span className="sr-only">Instagram</span>📷</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 text-center text-sm text-muted-foreground font-serif">
            © {new Date().getFullYear()} Mapa do Católico. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}