# ExtractLight

![gif-to-git-extract-light](https://github.com/brunnogpcosta/extract-light/assets/49787374/f36f21b1-9369-464a-b723-81d282196e7d)

Bem-vindo ao projeto Lumi Energy Web App, parte do teste prático para o cargo de Desenvolvedor Full Stack Pleno na Lumi. Este projeto é uma aplicação web que consome e exibe dados de faturas de energia elétrica previamente extraídos e armazenados em um banco de dados PostgreSQL.

## Telas

### 1. Dashboard

O Dashboard oferece uma visão geral das principais variáveis das faturas de energia elétrica ao longo do tempo. As variáveis incluem:

- Consumo de Energia Elétrica (kWh)
- Energia Compensada (kWh)
- Valor Total sem GD (R$)
- Economia GD (R$)

Os dados são apresentados em dois gráficos separados, um para valores relacionados à Energia (kWh) e outro para Valores Monetários (R$). O usuário pode filtrar os dados com base no 'No DO CLIENTE'.

### 2. Biblioteca de Faturas

A Biblioteca de Faturas permite ao usuário selecionar um 'No DO CLIENTE' específico e fazer o download de uma fatura de energia elétrica para um mês escolhido.

## Protótipos

Os protótipos das telas foram elaborados no Figma e podem ser acessados no link abaixo:

- [Protótipo](https://www.figma.com/file/LLea86uR4OXgJHJW3MTKyK/Untitled?type=design&node-id=0-1&mode=design&t=RWPvHLPncIl5vMo7-0)

## Tecnologias Utilizadas
✅ Typescript
✅ ReactJs / Nextjs
✅ Tailwind
✅ Framer Motion
✅ Vitest
✅ React Chart


## Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Clone este repositório.
3. Instale as dependências com `yarn`.
4. Configure as variáveis de ambiente necessárias (consulte o arquivo `.env.example`).
5. Execute o aplicativo com `yarn run dev`.

## Testes

Os testes unitários foram elaborados usando a biblioteca Vitest. Execute os testes com `yarn test`.
