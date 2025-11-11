import { Link, useLocation } from "wouter";
import { Leaf, Calculator, BookOpen, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_TITLE } from "@/const";

export default function Header() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "Início", icon: Leaf },
    { href: "/calculator", label: "Calculadora", icon: Calculator },
    { href: "/dashboard", label: "Dashboard", icon: BarChart3 },
    { href: "/instructions", label: "Instruções", icon: BookOpen },
    { href: "/tips", label: "Dicas Eco", icon: Lightbulb },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20 glow-eco">
            <Leaf className="w-6 h-6 text-primary" />
          </div>
          <span className="text-xl font-bold text-gradient-eco">
            {APP_TITLE}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location === item.href;
            
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={isActive ? "glow-eco" : ""}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>

        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <span className="text-2xl">☰</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
