import { Heart, Leaf } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t glass-effect mt-auto">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-gradient-eco">EcoEnergy</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Gestão inteligente de energia para um futuro sustentável.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Links Úteis</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/calculator" className="hover:text-primary transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/instructions" className="hover:text-primary transition-colors">
                  Instruções
                </a>
              </li>
              <li>
                <a href="/tips" className="hover:text-primary transition-colors">
                  Dicas Ecológicas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Desenvolvido com foco em sustentabilidade e eficiência energética.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para o planeta
            <span className="mx-2">•</span>
            © {currentYear} EcoEnergy
          </p>
        </div>
      </div>
    </footer>
  );
}
