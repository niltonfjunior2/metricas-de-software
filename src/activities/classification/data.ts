import type { MetricCategory } from '../../types';

export interface ClassificationMetric {
  id: number;
  metrica: string;
  categoria: MetricCategory;
  descricaoNeutra: string;
  justificativa: string;
  exemplo: string;
}

export const classificationMetricsData: ClassificationMetric[] = [
  {
    id: 1,
    metrica: 'Tempo de execução da suíte de testes automatizados',
    categoria: 'processo',
    descricaoNeutra:
      'Cronometra o intervalo de tempo necessário para que a bateria de testes automatizados (unitários, integração e ponta a ponta) execute completamente e retorne o relatório de validação.',
    justificativa:
      'Mede a agilidade e a eficiência de uma etapa interna do fluxo de engenharia (como o software é verificado e validado).',
    exemplo:
      'Se a suíte de testes passa de 40 minutos para 3 minutos após otimização, o software em si não mudou, mas o processo de validação da equipe tornou-se consideravelmente mais ágil.',
  },
  {
    id: 2,
    metrica: 'Custo financeiro mensal com infraestrutura em nuvem',
    categoria: 'recursos',
    descricaoNeutra:
      'Totaliza a quantia em dinheiro gasta mensalmente para contratar e manter instâncias de processamento, bancos de dados, tráfego de rede e serviços em provedores cloud (ex.: AWS, Azure, GCP).',
    justificativa:
      'Mede o consumo de insumos monetários e materiais necessários para suportar o ecossistema ativo do projeto.',
    exemplo:
      'A fatura mensal de R$ 8.000 em nuvem é um recurso financeiro consumido para operar o projeto. Não avalia a lógica interna do código nem a agilidade do time.',
  },
  {
    id: 3,
    metrica: 'Taxa de sucesso dos usuários na conclusão de tarefas',
    categoria: 'produto',
    descricaoNeutra:
      'Percentual de usuários que conseguem iniciar e concluir com êxito um fluxo operacional pretendido no sistema (ex.: efetuar um pagamento, cadastrar um cliente) sem desistir ou recorrer ao suporte.',
    justificativa:
      'Avalia um atributo intrínseco de usabilidade, navegabilidade e eficácia da aplicação entregue diretamente ao usuário.',
    exemplo:
      'Medir se 95% dos clientes concluem a compra no aplicativo sem encontrar erros avalia a qualidade e ergonomia do próprio software entregue.',
  },
  {
    id: 4,
    metrica: 'Volume de defeitos identificados por etapa do desenvolvimento',
    categoria: 'processo',
    descricaoNeutra:
      'Contagem quantitativa de bugs e falhas detectados em cada uma das fases do ciclo de vida (análise de requisitos, codificação, testes internos, homologação ou pré-produção).',
    justificativa:
      'Mapeia gargalos e a capacidade de filtragem de cada etapa do fluxo de trabalho antes da liberação final.',
    exemplo:
      'Identificar que a maioria dos erros só aparece na etapa de homologação aponta que as fases anteriores estão falhando no filtro da esteira de trabalho.',
  },
  {
    id: 5,
    metrica: 'Volume de armazenamento consumido por backups',
    categoria: 'recursos',
    descricaoNeutra:
      'Quantidade em gigabytes ou terabytes de espaço em disco ou repositório de dados ocupada pelas cópias de segurança do sistema e do banco de dados ao longo do tempo.',
    justificativa:
      'Quantifica o consumo de capacidade física ou infraestrutura de armazenamento alocada para sustentação do ambiente.',
    exemplo:
      'Saber que os backups ocupam 6 Terabytes por mês mede a alocação de insumos físicos/computacionais de suporte, essencial para estimativa de capacidade e custos.',
  },
  {
    id: 6,
    metrica: 'Tempo médio de resolução de defeitos (MTTR)',
    categoria: 'processo',
    descricaoNeutra:
      'Intervalo médio decorrido desde o momento em que um erro é reportado ou diagnosticado até o instante em que a solução é construída, testada e disponibilizada.',
    justificativa:
      'Avalia a agilidade, capacidade diagnóstica e tempo de reação da equipe durante o fluxo operacional de manutenção.',
    exemplo:
      'Se o time leva em média 4 horas para investigar, corrigir e validar uma falha relatada, estamos mensurando a eficiência operacional da dinâmica de manutenção.',
  },
  {
    id: 7,
    metrica: 'Quantidade de indisponibilidades e falhas em produção',
    categoria: 'produto',
    descricaoNeutra:
      'Número de vezes em que o sistema apresentou quedas não planejadas, travamentos críticos ou paradas de serviço após ter sido disponibilizado aos clientes finais.',
    justificativa:
      'Reflete a estabilidade, robustez e confiabilidade técnica do software colocado em operação.',
    exemplo:
      'Se o sistema sofreu 4 interrupções de serviço durante o expediente no mês, o software entregue demonstrou baixa confiabilidade operacional perante os clientes.',
  },
  {
    id: 8,
    metrica: 'Investimento financeiro em treinamento e capacitação técnica',
    categoria: 'recursos',
    descricaoNeutra:
      'Montante total em dinheiro desembolsado pela organização em cursos, certificações profissionais, workshops e eventos de qualificação para os colaboradores técnicos.',
    justificativa:
      'Quantifica o insumo financeiro aportado no desenvolvimento e qualificação do capital humano do projeto.',
    exemplo:
      'Destinar R$ 20.000 para treinar a equipe em arquitetura de microsserviços é a alocação de um insumo financeiro para capacitar a mão de obra.',
  },
  {
    id: 9,
    metrica: 'Tempo de resposta (latência) da API de autenticação',
    categoria: 'produto',
    descricaoNeutra:
      'Intervalo de tempo (geralmente em milissegundos) que o serviço leva para processar os parâmetros recebidos e retornar a resposta ao cliente solicitante.',
    justificativa:
      'Mede a performance técnica e a velocidade de execução de uma funcionalidade específica do software.',
    exemplo:
      'A rota `/login` responder em 180 milissegundos é uma especificação técnica de desempenho e agilidade do artefato de software em execução.',
  },
  {
    id: 10,
    metrica: 'Taxa de requisições com erro no servidor (HTTP 5xx)',
    categoria: 'produto',
    descricaoNeutra:
      'Proporção de chamadas recebidas pelo sistema que resultam em falhas internas de processamento no servidor (status 500, 502, 503) em relação ao total de requisições processadas.',
    justificativa:
      'Mede o grau de tolerância a falhas e a integridade funcional do sistema perante as requisições recebidas.',
    exemplo:
      'Ter 1,2% de requisições respondendo com erro interno indica falha na robustez e consistência técnica do software que está em execução.',
  },
  {
    id: 11,
    metrica: 'Quantidade de servidores e máquinas virtuais ativas',
    categoria: 'recursos',
    descricaoNeutra:
      'Contagem numérica de nós computacionais físicos, servidores virtuais dedicados ou instâncias em nuvem alocadas para manter a aplicação em funcionamento.',
    justificativa:
      'Quantifica os ativos de infraestrutura de hardware e computação provisionados para suportar o ambiente.',
    exemplo:
      'Manter 12 instâncias de servidores virtuais ativas representa o volume de recursos materiais/computacionais alocados para sustentar o sistema.',
  },
  {
    id: 12,
    metrica: 'Volume de funcionalidades entregues por ciclo (Vazão / Throughput)',
    categoria: 'processo',
    descricaoNeutra:
      'Quantidade de histórias de usuário, requisitos funcionais ou pacotes de entrega finalizados e aprovados pela equipe ao término de uma iteração ou sprint.',
    justificativa:
      'Avalia o ritmo de produção, cadência e capacidade de entrega contínua da equipe ao longo do ciclo de vida ágil.',
    exemplo:
      'A squad concluir 7 histórias de usuário aprovadas por sprint avalia a velocidade e o fluxo de trabalho com que o time executa suas atividades.',
  },
  {
    id: 13,
    metrica: 'Tempo transcorrido entre o commit e o deploy (Lead Time)',
    categoria: 'processo',
    descricaoNeutra:
      'Cronometragem do tempo que decorre desde o envio das alterações de código para o repositório até sua disponibilização efetiva no ambiente de produção.',
    justificativa:
      'Mede a eficiência, fluidez e o grau de automatização do fluxo de integração e entrega contínua (CI/CD).',
    exemplo:
      'O desenvolvedor finalizar a alteração e, em 25 minutos, ela estar testada e instalada em produção evidencia a eficiência da esteira de automação do time.',
  },
  {
    id: 14,
    metrica: 'Total de desenvolvedores alocados na equipe',
    categoria: 'recursos',
    descricaoNeutra:
      'Número absoluto de engenheiros, programadores e técnicos designados com dedicação formal para construir e manter o sistema.',
    justificativa:
      'Representa o contingente de mão de obra (capital humano) disponibilizado para a construção da solução.',
    exemplo:
      'Uma equipe composta por 6 programadores quantifica o recurso humano dedicado ao projeto, sem indicar se eles são rápidos ou se o código é estável.',
  },
  {
    id: 15,
    metrica: 'Tamanho físico do pacote executável (.apk ou bundle final)',
    categoria: 'produto',
    descricaoNeutra:
      'Tamanho em megabytes ou gigabytes ocupado pelo artefato final compilado e empacotado que é distribuído para instalação ou download pelos usuários.',
    justificativa:
      'Representa uma propriedade física e estrutural do artefato de software final construído e entregue aos clientes.',
    exemplo:
      'Um aplicativo mobile que pesa 45 MB contra um de 180 MB possui uma característica intrínseca do software gerado que impacta o dispositivo do usuário.',
  },
  {
    id: 16,
    metrica: 'Taxa de sucesso na suíte de testes de regressão',
    categoria: 'processo',
    descricaoNeutra:
      'Percentual de testes automatizados de regressão que executam com sucesso e sem falhas após modificações ou acréscimo de novos recursos no código.',
    justificativa:
      'Avalia a eficácia das rotinas de controle de qualidade em blindar o sistema contra quebras após mudanças.',
    exemplo:
      'Alcançar 99% de aprovação na esteira de integração contínua indica que a rotina de validação e verificação do time é sólida e eficaz.',
  },
  {
    id: 17,
    metrica: 'Duração média da etapa de revisão de código (Code Review)',
    categoria: 'processo',
    descricaoNeutra:
      'Média de horas ou dias que uma solicitação de mesclagem (pull request) aguarda pela análise técnica, comentários e aprovação dos pares da equipe.',
    justificativa:
      'Mede o tempo gasto em uma atividade de colaboração e garantia de conformidade técnica durante o fluxo de desenvolvimento.',
    exemplo:
      'Se um Pull Request fica parado aguardando revisão por 3 dias, há um gargalo no fluxo de colaboração da equipe, reduzindo a agilidade da entrega.',
  },
  {
    id: 18,
    metrica: 'Total de horas de trabalho dedicadas pela equipe no ciclo',
    categoria: 'recursos',
    descricaoNeutra:
      'Soma de todas as horas brutas de jornada ou esforço despendidas pelos membros do time para executar as demandas durante um intervalo de tempo.',
    justificativa:
      'Quantifica o esforço humano bruto despendido no intervalo de tempo do projeto.',
    exemplo:
      'A squad registrar 280 horas de trabalho no mês é a mensuração da quantidade de esforço/trabalho humano consumido para realizar as tarefas.',
  },
  {
    id: 19,
    metrica: 'Proporção de funcionalidades ativamente utilizadas pelos clientes',
    categoria: 'produto',
    descricaoNeutra:
      'Percentual de recursos, telas ou opções disponíveis no sistema que são acionadas e utilizadas com regularidade pelo público-alvo.',
    justificativa:
      'Avalia a aderência prática, a utilidade real e a relevância das partes que compõem o software entregue.',
    exemplo:
      'Constatar que apenas 30% das telas do sistema são acessadas pelos usuários finais reflete a adequação e relevância do software construído.',
  },
  {
    id: 20,
    metrica: 'Tempo de carregamento inicial da interface no navegador',
    categoria: 'produto',
    descricaoNeutra:
      'Tempo medido em segundos até que os componentes visuais, imagens e scripts da página principal estejam prontos para interação direta com o usuário.',
    justificativa:
      'Mede o desempenho e a velocidade percebida na interação direta do usuário com o sistema.',
    exemplo:
      'O painel principal carregar em 1,1 segundo reflete a otimização de assets e scripts do software gerado.',
  },
  {
    id: 21,
    metrica: 'Custo de aquisição de licenças de ferramentas de apoio',
    categoria: 'recursos',
    descricaoNeutra:
      'Valor financeiro despendido na contratação ou renovação de ferramentas de apoio ao trabalho (como ambientes de desenvolvimento, plataformas de gestão e repositórios).',
    justificativa:
      'Representa os insumos financeiros destinados a prover ferramentas de trabalho para a equipe.',
    exemplo:
      'Pagar R$ 1.500 mensais por licenças do Jira, GitHub Enterprise e Figma é um custo material/financeiro para viabilizar as atividades da equipe.',
  },
  {
    id: 22,
    metrica: 'Taxa de retrabalho (tarefas reprovadas e devolvidas para correção)',
    categoria: 'processo',
    descricaoNeutra:
      'Percentual de tarefas ou funcionalidades que, após passarem pela fase de teste ou homologação, são rejeitadas por inconsistências e retornam para ajuste.',
    justificativa:
      'Mede a precisão e clareza do fluxo de trabalho, revelando desperdício e deficiência na especificação ou execução.',
    exemplo:
      'Uma tarefa ser devolvida 3 vezes pelo setor de testes para o programador reflete deficiências na dinâmica de comunicação e critérios de aceite da esteira.',
  },
  {
    id: 23,
    metrica: 'Linhas de código-fonte (LOC) por componente do sistema',
    categoria: 'produto',
    descricaoNeutra:
      'Contagem volumétrica do total de linhas de instrução de código escritas que formam determinado módulo, classe ou subsistema do programa.',
    justificativa:
      'Mede o tamanho físico e a extensão estrutural do código-fonte entregue.',
    exemplo:
      'Desambiguação essencial: Contar que um módulo possui 1.200 linhas mede a extensão do artefato construído (Produto), e NÃO o esforço do programador (Recurso) nem a velocidade de desenvolvimento (Processo).',
  },
  {
    id: 24,
    metrica: 'Custo orçamentário consolidado do projeto',
    categoria: 'recursos',
    descricaoNeutra:
      'Montante financeiro agregado de todos os custos acumulados (salários, infraestrutura, consultorias e materiais) desde o início do desenvolvimento até o momento atual.',
    justificativa:
      'Consolida a totalidade dos insumos financeiros consumidos no projeto.',
    exemplo:
      'O projeto consumir R$ 180.000 ao longo de 6 meses resume o gasto financeiro agregado de todos os recursos aplicados na operação.',
  },
  {
    id: 25,
    metrica: 'Consumo de memória RAM pelo aplicativo em execução',
    categoria: 'produto',
    descricaoNeutra:
      'Quantidade de memória volátil (em megabytes ou gigabytes) alocada e ocupada pelo software durante seu ciclo de operação nos dispositivos dos usuários ou servidores.',
    justificativa:
      'Mede a eficiência e a pegada técnica do próprio software ao operar nos ambientes de execução.',
    exemplo:
      'Um aplicativo desktop consumir 250 MB de RAM em repouso é um atributo de eficiência computacional do software construído.',
  },
  {
    id: 26,
    metrica: 'Quantidade média de telas visitadas por sessão de usuário',
    categoria: 'produto',
    descricaoNeutra:
      'Número médio de telas, páginas ou seções distintas percorridas por um usuário ao longo de uma sessão contínua de interação com o sistema.',
    justificativa:
      'Indica a estrutura navegacional e os padrões de interação do usuário com a interface construída.',
    exemplo:
      'Saber que o cliente navega por 5 telas diferentes até encontrar um produto reflete a arquitetura de informação do software entregue.',
  },
  {
    id: 27,
    metrica: 'Horas dedicadas pela equipe em reuniões e alinhamentos',
    categoria: 'recursos',
    descricaoNeutra:
      'Soma das horas de trabalho despendidas pelos integrantes do time participando de reuniões operacionais, cerimônias de planejamento, retrospectivas e alinhamentos.',
    justificativa:
      'Mede o tempo e a dedicação da equipe (insumo humano) consumidos em cerimônias e comunicação.',
    exemplo:
      'A equipe despender 25 horas semanais em reuniões indica o consumo de tempo dos profissionais para fins de coordenação organizacional.',
  },
  {
    id: 28,
    metrica: 'Taxa de cumprimento dos prazos planejados nas entregas',
    categoria: 'processo',
    descricaoNeutra:
      'Percentual de funcionalidades, pacotes de entrega ou marcos do projeto que foram finalizados dentro das datas estimadas e acordadas no planejamento.',
    justificativa:
      'Avalia a previsibilidade, consistência de estimativas e maturidade do fluxo de trabalho da equipe.',
    exemplo:
      'Cumprir 90% das entregas nas datas acordadas evidencia a maturidade e confiabilidade da esteira de planejamento e desenvolvimento.',
  },
  {
    id: 29,
    metrica: 'Taxa de quebra/falha na esteira automatizada de integração contínua',
    categoria: 'processo',
    descricaoNeutra:
      'Proporção de execuções automatizadas do pipeline de build e integração que terminam em erro ou rejeição devido a falhas de compilação ou testes quebrados.',
    justificativa:
      'Mede a estabilidade do fluxo de integração e a disciplina da equipe ao consolidar novos códigos.',
    exemplo:
      'Se 30% das tentativas de integração quebram os builds automatizados, o processo de consolidação de código da equipe está desorganizado.',
  },
  {
    id: 30,
    metrica: 'Tempo despendido no preenchimento de ferramentas de apontamento de horas',
    categoria: 'recursos',
    descricaoNeutra:
      'Total de horas gastas pelos profissionais registrando manualmente tarefas executadas, preenchendo planilhas de controle ou alimentando sistemas de timesheet.',
    justificativa:
      'Quantifica o dispêndio de esforço humano em rotinas administrativas e instrumentais de controle.',
    exemplo:
      'A equipe gastar 30 horas no mês apenas preenchendo planilhas de timesheet reflete o consumo de tempo de trabalho em ferramentas de governança.',
  },
];
