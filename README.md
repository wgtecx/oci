# Protótipo Interativo OCI (Oferta de Cuidado Integrado)

Este é um protótipo de alta fidelidade desenvolvido para visualizar, testar e simular em tempo real as regras de negócio do sistema de gestão de atendimentos OCI (Oferta de Cuidado Integrado) sob as diretrizes do SUS (**PMAE - Programa Mais Acesso a Especialistas**).

---

## 🚀 Como Executar o Protótipo

1. Abra o arquivo `index.html` em qualquer navegador web moderno para acessar o painel geral (Navegação e Faturamento com credenciais).
2. O protótipo roda **100% no lado do cliente (Client-Side)**. Não há necessidade de instalar servidores locais, Node.js ou bancos de dados adicionais.
3. Os dados simulados e as transações de faturamento são armazenados e persistidos localmente de forma compartilhada através do `LocalStorage` do próprio navegador.

---

## 🔐 Controle de Acesso (Login Simulador)

Ao abrir o protótipo, você verá uma tela de login moderna com controle de acesso simulado:
* **Perfis de Teste**: Selecione o perfil desejado na lista suspensa (Navegação ou Faturamento).
* **Senha Padrão**: Digite a senha padrão `123456`.
* **Segregação de Funções**: Ao efetuar o login, o sistema oculta a barra superior de abas de desenvolvimento para simular fielmente a experiência do usuário em seu respectivo papel dentro do hospital.
* **Logout**: Clique no botão **"Sair"** no canto superior direito para deslogar e testar o fluxo sob outro perfil de usuário.

---

## 📑 Funcionalidades Principais por Perfil

### 🤝 1. Perfil Navegação (Aline Fonseca)
* **Novas Inclusões (Atendimentos SoulMV)**: Visualiza a lista de todos os atendimentos pendentes de inclusão na OCI realizados no hospital.
* **Inclusão de OCI**: Realiza a inclusão do paciente conforme os procedimentos e especialidades exigidos, e informa obrigatoriamente quem é o **Médico Responsável pela Inclusão**.
* **Cancelamento de Inclusão (Janela de 2h)**: Permite desfazer uma inclusão de OCI incorreta de forma autônoma dentro de um limite de 2 horas. O cancelamento exige justificativa (motivo) e faz com que o atendimento do SoulMV volte a ficar disponível para nova inclusão.
* **Painel Kanban de Cuidados**: Cards de pacientes ativos sob monitoramento, mostrando o médico responsável associado e o progresso clínico.
* **Controle de Vigência (Vigência de APAC - 2 Competências)**: Cálculo dinâmico indicando o prazo limite da APAC (*Vencido, Crítico, Normal*).
* **Gestão de Exames**: Acompanhamento e atualização de exames para "Agendado" ou "Realizado" (com registro de data de conclusão).
* **Validação Governamental (Atributo 055)**: Exigência obrigatória de preenchimento da Data do Laudo Histopatológico da Neoplasia em exames anatomopatológicos de Oncologia (regra governamental).
* **Tratamento de Pendências**: Notificação visual de pendências do faturamento no card do Kanban e tela de resolução integrada (com exibição do motivo cadastrado) para saneamento rápido de inconsistências.

### 💼 2. Perfil Faturamento SUS (Lucas Mendes)
* **Auditoria de Contas**: Validação individual dos exames realizados para aprovação ("Enviar SUS").
* **Glosa e Reapresentação**: Permite simular a recusa governamental de exames (ex: CPF inconsistente, falta de laudo onco) e posterior reapresentação na competência SUS seguinte.
* **Alerta de Pendências**: Opção de sinalizar pendências de preenchimento ou dados faltantes diretamente para a equipe de Navegação por meio de um modal descritivo (Alerta de Pendências), bloqueando o faturamento provisoriamente.
* **Gerenciador de Tabelas OCI**: Painel para cadastrar e editar linhas OCI ativas e associar procedimentos secundários personalizados.
* **Controle de Lotes de Remessa (SUS)**:
  * **Criação de Remessa**: Consolidar exames faturados em lotes de faturamento SUS.
  * **Regra de Bloqueio de Fechamento**: Impede o fechamento do lote se houver exames inacabados ou não faturados.
  * **Transferência de Lotes**: Permite transferir a conta do paciente com pendências para outro lote (aberto ou novo) para não atrasar o repasse dos demais exames concluídos.
  * **Exportação DATASUS**: Geração do arquivo texto posicional de faturamento SUS no layout posicional da portaria do APAC Magnético (`AM310001[COMP].TXT`).
  * **Simulador de Auditoria SUS**: Permite simular a aprovação (libera o repasse) ou rejeição total do lote (todas as contas retornam à fila com status de Glosa).
  * **Consolidado OCI**: Relatório gerencial de exames agrupados por OCI com metadados detalhados de Paciente, Procedimento, Data Agendamento, Data Realização, Data Inclusão Remessa, Data Envio Remessa e Usuário/Operadores. Possui rolagem vertical interna individual por OCI para melhor legibilidade visual e prevenção de erros de timezone no parseamento de datas.

---

## 📈 Painel Gerencial: Panorama Geral OCI

Acessível por todos os perfis a qualquer momento no cabeçalho superior:
* **KPIs Globais em Tempo Real**: Total de pacientes ativos, % de conclusão média de exames, Repasse Financeiro SUS previsto e Taxa de Glosa atual.
* **Barra de Busca Inteligente**: Busca por nome, prontuário, CPF ou código da OCI.
* **Trilha de Linha do Tempo Visual**: Acompanhamento gráfico dos 4 marcos de evolução de cada paciente: `PR` (Prescrito) -> `NV` (Navegação) -> `FT/GL/PE` (Faturado/Glosado/Pendente) -> `SUS/REJ` (Resposta do SUS).
* **Modal de Detalhamento de 3º Nível**: Ao clicar em qualquer linha do Panorama, abre-se uma tela detalhada com o progresso individual de cada exame.

---

## 🌓 Opção de Tema (Claro / Escuro)

A plataforma conta com suporte nativo a temas visuais:
* **Alternância Rápida**: Botão no cabeçalho superior com ícones de Sol ☀️ e Lua 🌙 que realiza a mudança instantânea de tema através de transições fluidas e suaves.
* **Persistência de Preferência**: O tema selecionado é salvo no `localStorage` do navegador para manter o estado entre recarregamentos e acessos futuros.
* **Carregamento Otimizado**: Script de detecção inline no carregamento da página para aplicar o tema correto antes de renderizar os elementos visuais, evitando qualquer flash de tela clara.

---

## 📂 Arquivos do Projeto

* `index.html`: Layout SPA estruturado em seções HTML5, tabelas, modais, formulários de fluxo e script de controle inicial de tema.
* `style.css`: Estilo com design visual premium com suporte a Light e Dark Mode, fontes modernas (Plus Jakarta Sans), efeitos de glassmorphism, responsividade, transições dinâmicas de cores e paginação.
* `app.js`: Motor de regras da plataforma (inclusão de pacientes, navegação, faturamento e alternância de temas), persistência LocalStorage, paginação, filtros de períodos, geração de lotes e exportação posicional de remessas SIA/SUS.
* `Logo_Feluma.png`: Logomarca institucional exibida no cabeçalho e na tela de login.

---

## 🔄 Como Reiniciar os Dados
Para voltar as configurações originais de fábrica do simulador e recarregar os atendimentos iniciais do SoulMV, role até o rodapé da página e clique no botão vermelho **"Reiniciar Protótipo (Limpar Dados)"**.

---
*Desenvolvido em total conformidade com as regulamentações vigentes do Ministério da Saúde para o PMAE e Portarias SAES/MS.*
