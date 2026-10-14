# Shared

Peças genéricas. Nenhuma conhece lead, funil, cobrança ou Meta.

- `ui/` — burros. Entrada de dados, saída de intenção. Sem HTTP e sem rota.
- `smart/` — contêineres de carregamento, erro, paginação e formulário. O esquema vem da página.
- `models/`, `pipes/`, `directives/` — apoio sem regra de negócio.

Uma peça de feature só entra aqui quando uma segunda feature precisar dela.
