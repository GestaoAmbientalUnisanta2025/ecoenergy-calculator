# 🌱 EcoEnergy - Calculadora Inteligente de Gestão Ambiental

![EcoEnergy Banner](https://img.shields.io/badge/EcoEnergy-Sustentabilidade-10b981?style=for-the-badge&logo=leaf)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)

**EcoEnergy** é uma plataforma web moderna e intuitiva para calcular, analisar e otimizar o consumo de energia elétrica residencial. Com foco em sustentabilidade e economia, a aplicação oferece ferramentas completas para gestão energética inteligente.

---

## ✨ Funcionalidades Principais

### 🧮 Calculadora de Consumo
- **Organização por cômodos**: Sala, Quarto, Cozinha, Banheiro, Lavanderia
- **Biblioteca de aparelhos pré-definidos**: Mais de 50 aparelhos com potências médias
- **Importação rápida**: Adicione aparelhos com um clique
- **Adição manual**: Cadastre aparelhos personalizados
- **Edição inline**: Ajuste potência, quantidade e tempo de uso diretamente na tabela
- **Cálculos automáticos**: kWh mensal e custo em R$ atualizados em tempo real
- **Tarifa personalizada**: Configure o valor da sua distribuidora

### 📊 Dashboard Analítico
- **Métricas consolidadas**: Consumo total, custo mensal, emissões de CO₂, economia potencial
- **Gráficos interativos**:
  - Gráfico de barras: Consumo por cômodo
  - Gráfico de pizza: Distribuição percentual
  - Gráfico de linha: Histórico temporal
- **Top 5 consumidores**: Identifique os aparelhos que mais gastam energia
- **Insights personalizados**: Recomendações baseadas no seu perfil de consumo
- **Exportação de dados**: Baixe relatórios em JSON

### 💡 Dicas Ecológicas
- **8 categorias de dicas**: Iluminação, climatização, aquecimento, refrigeração, eletrônicos, lavanderia, gestão e investimentos
- **Classificação por dificuldade**: Fácil, Médio, Avançado
- **Potencial de economia**: Até 80% de redução de consumo
- **Impacto ambiental**: Calcule quantas árvores você está plantando virtualmente
- **Equivalências práticas**: Entenda o impacto em termos concretos

### 📖 Instruções e Suporte
- **Guia passo a passo**: Como usar cada funcionalidade
- **FAQ completo**: Respostas para dúvidas frequentes
- **Glossário técnico**: Entenda termos como kWh, potência, tarifa e CO₂
- **Dicas de precisão**: Como obter cálculos mais exatos

---

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19**: Biblioteca JavaScript moderna para interfaces
- **TypeScript 5**: Tipagem estática para código mais seguro
- **Tailwind CSS 4**: Framework CSS utilitário
- **shadcn/ui**: Componentes UI acessíveis e customizáveis
- **Recharts**: Biblioteca de gráficos responsivos
- **Wouter**: Roteamento leve para SPA
- **Sonner**: Sistema de notificações toast

### Ferramentas de Desenvolvimento
- **Vite**: Build tool ultrarrápido
- **pnpm**: Gerenciador de pacotes eficiente
- **ESLint**: Linter para qualidade de código
- **Prettier**: Formatação automática

---

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 22.x ou superior
- pnpm 10.x ou superior

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ecoenergy-calculator.git

# Entre no diretório
cd ecoenergy-calculator

# Instale as dependências
pnpm install

# Inicie o servidor de desenvolvimento
pnpm dev
```

O aplicativo estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Gerar build otimizado
pnpm build

# Visualizar preview do build
pnpm preview
```

---

## 🎨 Design e UX

### Paleta de Cores Eco-Friendly
- **Primary**: Verde esmeralda (#10b981) - Representa sustentabilidade
- **Background**: Dark theme (#0a0a0a) - Reduz cansaço visual
- **Accent**: Gradientes verdes - Modernidade e energia

### Princípios de Design
- **Responsividade total**: Funciona perfeitamente em mobile, tablet e desktop
- **Acessibilidade**: Seguindo padrões WCAG para inclusão
- **Performance**: Carregamento rápido e interações fluidas
- **Feedback visual**: Animações sutis e notificações claras

---

## 📊 Como Funciona

### Cálculo de Consumo
O consumo é calculado pela fórmula:

```
Consumo (kWh/mês) = (Potência em Watts × Horas de uso × Dias) / 1000
Custo (R$/mês) = Consumo (kWh) × Tarifa (R$/kWh)
```

### Cálculo de CO₂
Baseado no fator de emissão médio do Brasil (2024):

```
Emissões CO₂ (kg) = Consumo (kWh) × 0.0817 kg CO₂/kWh
```

### Armazenamento de Dados
- **LocalStorage**: Todos os dados são salvos localmente no navegador
- **Privacidade**: Nenhum dado é enviado para servidores externos
- **Persistência**: Dados permanecem mesmo após fechar o navegador

---

## 🌍 Impacto Ambiental

### Por que isso importa?
- **Aquecimento global**: A geração de energia elétrica é responsável por ~40% das emissões de CO₂ no Brasil
- **Recursos finitos**: Reduzir consumo preserva recursos naturais
- **Economia financeira**: Menos consumo = menor conta de luz
- **Conscientização**: Conhecer o consumo é o primeiro passo para mudança

### Metas de Sustentabilidade
Este projeto contribui para os **Objetivos de Desenvolvimento Sustentável (ODS)** da ONU:
- **ODS 7**: Energia Limpa e Acessível
- **ODS 12**: Consumo e Produção Responsáveis
- **ODS 13**: Ação Contra a Mudança Global do Clima

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Áreas para Contribuição
- [ ] Adicionar mais aparelhos pré-definidos
- [ ] Implementar exportação para PDF
- [ ] Criar sistema de metas de economia
- [ ] Adicionar sugestões com IA
- [ ] Implementar PWA (modo offline)
- [ ] Tradução para outros idiomas

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido com 💚 por **[Seu Nome]**

- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu Nome](https://linkedin.com/in/seu-perfil)
- Email: seu.email@exemplo.com

---

## 🙏 Agradecimentos

- **shadcn/ui**: Pelos componentes UI incríveis
- **Recharts**: Pela biblioteca de gráficos
- **Tailwind CSS**: Pelo framework CSS poderoso
- **Comunidade Open Source**: Por tornar projetos como este possíveis

---

## 📸 Screenshots

### Página Inicial
![Home](docs/screenshots/home.png)

### Calculadora
![Calculator](docs/screenshots/calculator.png)

### Dashboard
![Dashboard](docs/screenshots/dashboard.png)

### Dicas Ecológicas
![Tips](docs/screenshots/tips.png)

---

## 🔮 Roadmap

### Versão 2.0
- [ ] Sistema de autenticação de usuários
- [ ] Sincronização na nuvem
- [ ] Comparação com outros usuários (anônima)
- [ ] Integração com APIs de distribuidoras
- [ ] Alertas de consumo elevado
- [ ] Gamificação com badges e conquistas

### Versão 3.0
- [ ] Aplicativo mobile (React Native)
- [ ] Integração com dispositivos IoT
- [ ] Machine Learning para previsões
- [ ] Simulador de energia solar
- [ ] Marketplace de produtos eficientes

---

<div align="center">

**Feito com ❤️ para um futuro mais sustentável 🌍**

[⬆ Voltar ao topo](#-ecoenergy---calculadora-inteligente-de-gestão-ambiental)

</div>
