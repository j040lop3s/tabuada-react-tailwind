# React + Vite + Tailwind CSS + React Router

Esta aplicação foi desenvolvida utilizando Vite, React, Tailwind CSS e React Router DOM.

## Arquitetura e Técnicas utilizadas

Página desenvolvida em React onde utilizo os conceitos de componentização, props, renderização de elementos com map() e **roteamento no lado do cliente (SPA)**. 

O projeto foi refatorado para incluir navegação fluida sem recarregamento da página. A arquitetura está dividida da seguinte forma:
- **`App.jsx`**: Atua como provedor central de rotas (`BrowserRouter`).
- **`components/Menu.jsx`**: Barra de navegação global.
- **`pages/`**: Contém as visualizações renderizadas por cada rota (`Home.jsx` e `TabuadaPage.jsx`).

Na página da Tabuada, o estado é centralizado e transferido aos subcomponentes (`Tabuada` e `NavButtons`). O resultado é uma página interativa com um menu de botões laterais, onde cada um opera uma função de mudança de estado ao clique, exibindo ao lado a tabuada completa do respectivo número.

## Comentários

Comentários foram adicionados com intuito de melhorar a leitura e compreensão do código.