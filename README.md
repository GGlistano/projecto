# 🎟️ Cupom Da Vez

Uma aplicação web interativa de simulação de cupons e prêmios, desenvolvida com React, TypeScript e Tailwind CSS.

## ✨ Características

- 🎨 **Interface Moderna**: Design clean e responsivo com Tailwind CSS
- 🎯 **Experiência Interativa**: Sistema de scratch cards (raspadinhas) para revelar cupons
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em dispositivos móveis e desktop
- 🔒 **Integração com Pagamentos**: Suporte para M-PESA e E-MOLA
- 🎥 **Vídeo Integrado**: Player VTurb para conteúdo de vídeo
- ⚡ **Performance**: Construído com Vite para carregamento rápido

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construir interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool moderna e rápida
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones moderna
- **Supabase** - Backend-as-a-Service (preparado)

## 📦 Estrutura do Projeto

```
src/
├── components/
│   ├── WelcomePage.tsx        # Página de boas-vindas
│   ├── NamePage.tsx           # Coleta do nome do usuário
│   ├── CouponPage.tsx         # Sistema de cupons
│   ├── ScratchCard.tsx        # Componente de raspagem
│   ├── CelebrationCard.tsx    # Animação de celebração
│   ├── LimitPage.tsx          # Página de limite atingido
│   ├── WithdrawPage.tsx       # Página de saque
│   ├── SecurityPage.tsx       # Verificação de segurança
│   └── VideoPage.tsx          # Player de vídeo
├── App.tsx                    # Componente principal
├── main.tsx                   # Ponto de entrada
└── index.css                  # Estilos globais
```

## 🎮 Funcionalidades

### 1. Sistema de Cupons
- 6 cupons diferentes com produtos variados
- Sistema de raspadinha interativo
- Validação de código de barras
- Acumulação de valores

### 2. Fluxo de Saque
- Seleção de método de pagamento (M-PESA ou E-MOLA)
- Validação de números de telefone:
  - **E-MOLA**: 86/87 + 7 dígitos (total 9)
  - **M-PESA**: 84/85 + 7 dígitos (total 9)
- Interface de segurança antes do saque

### 3. Integração de Vídeo
- Player VTurb carregado dinamicamente
- Carrega apenas quando necessário
- Interface limpa e profissional

## 🛠️ Instalação

```bash
# Clone o repositório
git clone <url-do-repositorio>

# Entre na pasta do projeto
cd cupom-da-vez

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 📜 Scripts Disponíveis

```bash
npm run dev        # Inicia o servidor de desenvolvimento
npm run build      # Cria build de produção
npm run preview    # Preview do build de produção
npm run lint       # Executa o linter
npm run typecheck  # Verifica tipos TypeScript
```

## 🎨 Cupons Disponíveis

1. **Nike Air Force (Black)** - 850 MTS
2. **Nike Air Force (Rosa)** - 920 MTS
3. **JBL Caixa de Som** - 780 MTS
4. **Nike Air Force (White)** - 1050 MTS
5. **Apple AirPods Pro** - 900 MTS
6. **Samsung Galaxy (Light Blue)** - 700 MTS

**Total Acumulado**: 5.200 MTS

## 🔐 Validação de Pagamentos

O sistema valida automaticamente os números de telefone:

- **E-MOLA**: Aceita números iniciando com 86 ou 87
- **M-PESA**: Aceita números iniciando com 84 ou 85
- Todos devem ter exatamente 9 dígitos

## 🌐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_SUPABASE_URL=sua-url-do-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

## 📱 Responsividade

A aplicação é totalmente responsiva e funciona perfeitamente em:
- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

## 🎯 Próximos Passos

- [ ] Implementar backend com Supabase
- [ ] Adicionar autenticação de usuários
- [ ] Sistema de histórico de cupons
- [ ] Dashboard administrativo
- [ ] Notificações em tempo real

## 📄 Licença

Este projeto é para fins educacionais e demonstrativos.

## 👥 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

---

Desenvolvido com ❤️ usando React + TypeScript + Vite
