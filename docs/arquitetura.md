# Frontend — painel Angular

Painel de configuração e de vendas. Componentes standalone, organizados por feature. O cliente final não entra aqui.

`shared` é reaproveitável em qualquer tela futura porque não conhece lead, funil, cobrança nem Meta.

## Árvore

```
src/app/
  core/
    auth/
    http/
    layout/
    tenant/
  shared/
    ui/
      button/
      confirm-dialog/
      data-table/
      empty-state/
      form-field/
      key-value-list/
      modal/
      money/
      page-header/
      secret-field/
      select-field/
      status-badge/
      timeline/
    smart/
      async-action/
      entity-form/
      filter-bar/
      paginated-table/
    directives/
    models/
    pipes/
  features/
    auth/
      components/
      data/
      pages/login/
    leads/
      components/
      data/
      pages/lead-list/
      pages/lead-detail/
    attendance/
      components/
      data/
      pages/queue/
      pages/conversation/
    qualification/
      components/
      data/
      pages/criteria/
    follow-up/
      components/
      data/
      pages/sequences/
    whatsapp/
      components/
      data/
      pages/channel/
      pages/templates/
    payments/
      components/
      data/
      pages/charges/
      pages/gateway-settings/
    marketing/
      components/
      data/
      pages/meta-connection/
      pages/conversion-log/
```

`core` guarda sessão, cliente HTTP, casca visual e o tenant corrente.

## Burro e inteligente

| Camada | Onde | O que faz |
| --- | --- | --- |
| Burro genérico | `shared/ui` | Recebe dado e emite intenção. Sem HTTP, sem rota, sem regra. |
| Burro da feature | `features/<feature>/components` | Igual ao de cima, com vocabulário de uma tela só. |
| Inteligente genérico | `shared/smart` | Carregamento, erro, paginação e formulário a partir de um esquema recebido. |
| Página | `features/<feature>/pages` | Chama a API do módulo e compõe a tela. |
| Dados da feature | `features/<feature>/data` | Cliente HTTP daquele módulo. |

`status-badge` recebe rótulo e tom. `secret-field` mascara e emite o valor digitado. `paginated-table` pagina o que a página entregar. `entity-form` desenha os campos de um esquema; o significado do campo fica na página.

Uma peça migra para `shared` quando uma segunda feature precisa dela.

## Páginas e APIs

| Página | Compõe |
| --- | --- |
| login | Identity |
| lead-list | Qualification |
| lead-detail | Qualification, WhatsApp, FollowUp, Attendance, Payments e Marketing, cada um pelo próprio endpoint |
| queue, conversation | Attendance (fila, notas, aceite) e WhatsApp (transcrição e envio) |
| criteria | Qualification |
| sequences | FollowUp, com a lista de templates lida do WhatsApp |
| channel, templates | WhatsApp. Conta da Cloud API e modelos aprovados |
| charges, gateway-settings | Payments. Gateway de cobrança, fora da Meta |
| meta-connection, conversion-log | Marketing. Dataset oficial do anúncio e log da Conversions API |

`lead-detail` é a tela que mais mostra a fronteira: ela junta os donos, em vez de pedir um agregado único ao backend.

Em `channel`, `meta-connection` e `gateway-settings`, a página grava o segredo pelo `secret-field` e depois só mostra que a credencial existe. O token não é relido.
