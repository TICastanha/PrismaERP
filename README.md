# Documentação Técnica — Prisma ERP (Frontend Angular + Tailwind)

> **Versão:** 1.1
> **Escopo:** Frontend (SPA) em Angular + TypeScript, estilização com Tailwind CSS
> **Observação:** plano de entregas em sprints.

---

## 1. Visão Geral

O **Prisma ERP** é um sistema web de gestão para ambientes varejistas/atacadistas. O frontend deve entregar **confiabilidade**, **produtividade**, **acessibilidade** e **escalabilidade**, com uma experiência limpa e responsiva.

### 1.1 Metas de Produto

* Confiabilidade, com validações claras e feedback imediato.
* Produtividade, através de fluxos simplificados e responsivos.
* Escalabilidade, com arquitetura modular e boas práticas de performance.
* Segurança, via autenticação forte e autorização por papéis.
* Observabilidade, incluindo rastreamento de erros e métricas de UX.

### 1.2 Público-Alvo

Operadores de logística, compras, vendas, financeiro, marketing e TI.

---

## 2. Identidade Visual e UX (Tailwind)

### 2.1 Paleta de Cores

* **Primárias**: Laranja Prisma (FF8C00→FFB300), Cinza Chumbo (2E2E2E), Branco (FFFFFF).
* **Secundárias**: Azul Ação (007BFF), Verde Sucesso (11b817ff), Vermelho Alerta (E53935), Cinza Claro (F5F5F5).

### 2.2 Tipografia

* Fontes: Inter ou Roboto.
* Tamanhos: 16 para corpo, 20–24 para títulos, 14 para listas, 12 para metadados.
* Pesos: 400, 500 e 600.

### 2.3 Tokens de Design

* Radii: 4–24 px.
* Sombras: níveis 0 a 3.
* Espaçamento: escala base de 4 px.
* Estados: foco visível e consistente; carregamentos claros.

### 2.4 Componentização

* Botões: variantes e tamanhos consistentes.
* Inputs: rótulos claros e validações inline.
* Tabelas: filtros, paginação, ações em massa.
* Navegação: sidebar colapsável, breadcrumbs e busca global.
* Feedbacks: snackbars, alerts e diálogos.
* Empty states: título, ícone, descrição e CTA.

### 2.5 Acessibilidade

* Contraste AA, suporte total a teclado, `aria-*` em elementos interativos.
* Mensagens de erro legíveis por leitores de tela.

---

## 3. Arquitetura Frontend

* **Core:** autenticação, serviços de API, interceptadores.
* **Shared:** componentes reutilizáveis.
* **Features:** módulos de domínio (vendas, estoque, etc.).
* **Layout:** header, sidebar e footer.
* **Estado:** NgRx para dados centrais; Component Store para estados locais.
* **Rotas:** lazy loading, guards, resolvers e páginas de erro.
* **Comunicação com API:** padronização de headers, timeouts, retries e tratamento global de erros.
* **i18n:** base pt-BR, suporte en-US.

---

## 4. Segurança

* Autenticação com JWT/x-api-key e renovação de sessão.
* Autorização por papéis (admin, gestor, operador, auditor).
* Armazenamento seguro de credenciais (sessão/memória).
* Privacidade e LGPD: anonimização de dados, logs sem PII.
* Conteúdo dinâmico protegido contra XSS.

---

## 5. Qualidade e Padrões

* TypeScript estrito.
* ESLint/Prettier padronizados.
* Arquitetura limpa: separação entre UI, lógica e serviços.
* Convenções de nomenclatura e commits semânticos.
* Tailwind aplicado via tokens semânticos.

---

## 6. Fluxos Funcionais

* Autenticação e sessão.
* Catálogo de produtos/serviços.
* Vendas e pedidos.
* Estoque e movimentações.
* Compras e recebimento.
* Financeiro (contas, conciliações, relatórios).
* Relatórios e dashboards.

---

## 7. Ambientes e Processos

* Ambientes: dev, homolog e prod.
* Automação de qualidade: lint, testes unitários, integração e E2E.
* CI/CD com builds por ambiente e invalid. de cache.
* Versionamento SemVer, changelog automatizado e documentação viva.

---

## 8. Theming com Tailwind

* Paleta mapeada para tokens semânticos.
* Estados de interação padronizados.
* Suporte a densidade compact/comfortable.
* Modo escuro com contraste AA.

---

## 9. Guia de Componentes

* Botões, inputs, selects, tabelas, cards, banners, modais, tooltips.
* Todos com padrões de acessibilidade, foco visível e feedback consistente.

---

## 10. Testes

* Unitários para componentes críticos.
* Integração em fluxos principais.
* E2E para login, pedidos, estoque e financeiro.
* Acessibilidade com ferramentas automatizadas e revisões manuais.
* Performance monitorada com orçamentos definidos.

---

## 11. Performance

* Lazy loading de módulos.
* Renderização eficiente.
* Paginação e virtualização em tabelas extensas.
* Uso preferencial de SVGs e assets otimizados.

---

## 12. Roadmap e Entregas em Sprints

### Sprint 1 — Fundação

* Setup inicial do projeto Angular + Tailwind.
* Layout base (header, sidebar, footer).
* Autenticação simples (login/logout).
* Estrutura de módulos e roteamento.

### Sprint 2 — Catálogo

* CRUD de produtos/serviços.
* Filtros básicos e paginação.
* Importação inicial de dados (CSV/Excel).

### Sprint 3 — Vendas e Pedidos

* Emissão de pedidos e carrinho.
* Status de pedidos.
* Integração inicial com financeiro.

### Sprint 4 — Estoque

* Movimentações (entrada/saída).
* Inventário básico.
* Auditoria inicial.

### Sprint 5 — Compras

* Solicitação, cotação e pedido.
* Recebimento com conferência.
* Registro no estoque.

### Sprint 6 — Financeiro

* Contas a pagar e receber.
* Conciliação bancária inicial.
* Relatórios básicos.

### Sprint 7 — Relatórios e Dashboards

* KPIs por área.
* Exportação de dados (PDF/CSV).
* Dashboards dinâmicos.

### Sprint 8 — Polimento

* Acessibilidade (a11y) refinada.
* Dark mode.
* Performance avançada.
* Refinamentos de UX.

---

## 13. Critérios de Aceitação

* Acessibilidade: contraste AA, navegação por teclado, rótulos alternativos.
* Performance: tempo de interação aceitável, bundles otimizados.
* Segurança: rotas protegidas, sessão renovável, sem vazamento de dados.
* Usabilidade: formulários claros, fluxos consistentes e completos.

---

## 14. Anexos

* Mapa de rotas e arquitetura de módulos.
* Guia de microcopy para mensagens de erro e títulos.
* Checklist de release com validações, testes e deploy.
