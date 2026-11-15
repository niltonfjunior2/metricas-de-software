/**
 * Motor Puro do Assistente de Construção de Contratos de Software e Segurança Jurídica
 * Fundamentado na Lei do Software (Lei nº 9.609/1998), Código Civil Brasileiro (arts. 421, 476, 593–609)
 * e Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018).
 *
 * IMPORTANTE: Ferramenta de caráter estritamente educativo e informativo para profissionais e estudantes
 * de Análise e Desenvolvimento de Sistemas. Não substitui assessoria jurídica de advogado(a).
 */

export type ContractModelType = 'escopo_fechado' | 'alocacao_horas' | 'saas_licenca';
export type IntellectualPropertyType = 'cessao_cliente' | 'licenca_uso';
export type PaymentStructureType = 'sinal_parcelas' | 'mensal_recorrente' | 'vista_homologacao';

export interface ContractInput {
  contratanteNome: string;
  contratanteDocumento: string;
  contratadaNome: string;
  contratadaDocumento: string;
  tituloProjeto: string;
  modeloContratual: ContractModelType;
  escopoResumo: string;
  exclusoesEscopo: string;
  exigirChangeRequest: boolean;
  prazoEstimadoDias: number;
  prazoHomologacaoDiasUteis: number;
  aceiteTacitoAtivo: boolean;
  valorTotalOuMensal: number;
  estruturaPagamento: PaymentStructureType;
  percentualSinal: number;
  multaAtrasoPercentual: number;
  diasToleranciaSuspensao: number;
  propriedadeIntelectual: IntellectualPropertyType;
  protegerBackgroundIP: boolean;
  permitirPortfolio: boolean;
  prazoGarantiaDias: number;
  perdaGarantiaPorAlteracaoTerceiros: boolean;
  slaRespostaCriticoHoras: number;
  conformidadeLGPD: boolean;
  clausulaConfidencialidadeNDA: boolean;
  limitarResponsabilidadeCivil: boolean;
  avisoPrevioRescisaoDias: number;
  multaRescisoriaPercentual: number;
  foroComarca: string;
}

export interface ContractRiskAlert {
  id: string;
  titulo: string;
  descricao: string;
  severidade: 'alta' | 'media';
}

export interface ContractSafetyDiagnostic {
  score: number;
  nivel: 'Alto' | 'Moderado' | 'Vulnerável';
  pontosProtegidos: string[];
  alertasRisco: ContractRiskAlert[];
}

export const LEGAL_DISCLAIMER_TEXT =
  'AVISO IMPORTANTE DE CARÁTER EDUCATIVO E INFORMATIVO: Este assistente e a minuta gerada possuem finalidade estritamente didática e referencial para orientar profissionais e estudantes de Análise e Desenvolvimento de Sistemas sobre os fundamentos de segurança contratual em TI. Este material NÃO constitui consultoria ou parecer jurídico e NÃO exime as partes de buscarem a orientação e revisão de um(a) advogado(a) devidamente habilitado(a) na OAB para adequação ao caso concreto.';

function formatCurrencyBRL(value: number): string {
  const safeVal = Number.isFinite(value) && value >= 0 ? value : 0;
  return safeVal.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/**
 * Avalia o nível de segurança jurídica e equilíbrio contratual das opções selecionadas
 */
export function evaluateContractSafety(input: ContractInput): ContractSafetyDiagnostic {
  let score = 100;
  const pontosProtegidos: string[] = [];
  const alertasRisco: ContractRiskAlert[] = [];

  // 1. Gestão de Mudanças (Scope Creep)
  if (input.exigirChangeRequest) {
    pontosProtegidos.push('Proteção contra Scope Creep (Termo Aditivo obrigatório para demandas extras)');
  } else {
    score -= 20;
    alertasRisco.push({
      id: 'risco-scope-creep',
      titulo: 'Risco Crítico de "Escopo Infinito" (Scope Creep)',
      descricao:
        'Sem a exigência de Termo Aditivo (Change Request) para alterações de escopo, o cliente poderá exigir funcionalidades adicionais gratuitamente alegando que faziam parte da ideia original.',
      severidade: 'alta',
    });
  }

  // 2. Aceite Tácito na Homologação
  if (input.aceiteTacitoAtivo && input.prazoHomologacaoDiasUteis > 0) {
    pontosProtegidos.push(`Cláusula de Aceite Tácito ativa (${input.prazoHomologacaoDiasUteis} dias úteis para homologação)`);
  } else {
    score -= 15;
    alertasRisco.push({
      id: 'risco-homologacao-eterna',
      titulo: 'Vulnerabilidade à Inércia do Cliente na Homologação',
      descricao:
        'Sem regra de Aceite Tácito, caso o cliente demore semanas ou meses para testar uma entrega, o faturamento da parcela vinculada à homologação ficará congelado indefinidamente.',
      severidade: 'alta',
    });
  }

  // 3. Limitação de Responsabilidade Civil
  if (input.limitarResponsabilidadeCivil) {
    pontosProtegidos.push('Teto de Responsabilidade Civil ativo (limitado ao valor do contrato e sem lucros cessantes)');
  } else {
    score -= 20;
    alertasRisco.push({
      id: 'risco-responsabilidade-ilimitada',
      titulo: 'Exposição Patrimonial por Responsabilidade Ilimitada',
      descricao:
        'A ausência de teto indenizatório e de exclusão de lucros cessantes ou falhas de terceiros (nuvem/APIs) pode expor o desenvolvedor a ações de indenização desproporcionais ao valor cobrado pelo projeto.',
      severidade: 'alta',
    });
  }

  // 4. Proteção de Background IP e Coerência de Propriedade Intelectual
  if (input.protegerBackgroundIP) {
    pontosProtegidos.push('Salvaguarda de Background IP (bibliotecas próprias e componentes reutilizáveis preservados)');
  } else {
    score -= 10;
    alertasRisco.push({
      id: 'risco-background-ip',
      titulo: 'Risco de Perda de Ferramentas e Bibliotecas Reutilizáveis',
      descricao:
        'Pelo Art. 4º da Lei do Software (9.609/98), sem ressalva de Background IP, a cessão total pode impedir que você reutilize seus próprios componentes genéricos de arquitetura em futuros clientes.',
      severidade: 'media',
    });
  }

  if (input.modeloContratual === 'saas_licenca' && input.propriedadeIntelectual === 'cessao_cliente') {
    score -= 12;
    alertasRisco.push({
      id: 'risco-saas-cessao',
      titulo: 'Inconsistência: Modelo SaaS com Cessão Definitiva de Código-Fonte',
      descricao:
        'No modelo de Licenciamento/SaaS, a boa prática é manter a propriedade intelectual com a desenvolvedora ("Licença de Uso"), evitando transferir a titularidade do produto base para um único cliente.',
      severidade: 'alta',
    });
  }

  // 5. Garantia Técnica e Alteração por Terceiros
  if (input.perdaGarantiaPorAlteracaoTerceiros) {
    pontosProtegidos.push('Proteção de garantia contra modificação não autorizada do código por terceiros');
  } else {
    score -= 10;
    alertasRisco.push({
      id: 'risco-garantia-terceiros',
      titulo: 'Obrigação de Corrigir Bugs Causados por Terceiros',
      descricao:
        'Se o contrato não extinguir a garantia sobre módulos alterados diretamente pelo cliente ou outra equipe, você poderá ser acionado gratuitamente para consertar quebras introduzidas por terceiros.',
      severidade: 'media',
    });
  }

  // 6. LGPD e Confidencialidade
  if (input.conformidadeLGPD && input.clausulaConfidencialidadeNDA) {
    pontosProtegidos.push('Governança de Dados Pessoais (LGPD: Controlador vs. Operador) e Sigilo (NDA) definidos');
  } else {
    score -= 13;
    alertasRisco.push({
      id: 'risco-lgpd-nda',
      titulo: 'Lacuna de Conformidade LGPD (Lei 13.709/18) ou Confidencialidade',
      descricao:
        'Não delimitar que o Contratante é o Controlador e o Desenvolvedor é o Operador cria insegurança jurídica sobre decisões de tratamento de dados pessoais e proteção de segredos de negócio.',
      severidade: 'media',
    });
  }

  // 7. Escopo e Exclusões Explícitas
  if (input.escopoResumo.trim().length > 0 && input.exclusoesEscopo.trim().length > 0) {
    pontosProtegidos.push('Escopo técnico e lista explícita de exclusões (não-escopo) preenchidos');
  } else {
    score -= 10;
    alertasRisco.push({
      id: 'risco-exclusoes-vazias',
      titulo: 'Ausência de Delimitação Explícita do "Não-Escopo"',
      descricao:
        'Recomenda-se especificar claramente o que NÃO está incluído no preço (ex.: faturas de AWS/nuvem, taxas da Apple/Google Store, licenças pagas de terceiros) para evitar disputas financeiras.',
      severidade: 'media',
    });
  }

  const finalScore = Math.max(0, Math.min(100, score));
  let nivel: 'Alto' | 'Moderado' | 'Vulnerável' = 'Alto';
  if (finalScore < 60) {
    nivel = 'Vulnerável';
  } else if (finalScore < 85) {
    nivel = 'Moderado';
  }

  return {
    score: finalScore,
    nivel,
    pontosProtegidos,
    alertasRisco,
  };
}

/**
 * Gera o texto estruturado da minuta contratual informativa com base nos parâmetros configurados
 */
export function generateContractDocument(input: ContractInput): string {
  const contratanteNome = input.contratanteNome.trim() || '[NOME / RAZÃO SOCIAL DO CONTRATANTE]';
  const contratanteDoc = input.contratanteDocumento.trim() || '[CNPJ / CPF DO CONTRATANTE]';
  const contratadaNome = input.contratadaNome.trim() || '[NOME / RAZÃO SOCIAL DO DESENVOLVEDOR / CONTRATADA]';
  const contratadaDoc = input.contratadaDocumento.trim() || '[CNPJ / CPF DO DESENVOLVEDOR]';
  const tituloProjeto = input.tituloProjeto.trim() || '[NOME DO PROJETO / SISTEMA DE SOFTWARE]';
  const escopo =
    input.escopoResumo.trim() ||
    '[Descrever detalhadamente os módulos, histórias de usuário, integrações e requisitos técnicos constantes no Anexo I - Especificação Técnica / SOW]';
  const exclusoes =
    input.exclusoesEscopo.trim() ||
    'Custos de hospedagem em nuvem (AWS, Azure, GCP, Vercel), compra de domínios, certificados pagos, taxas de publicação em lojas de aplicativos (Apple App Store / Google Play), licenças de softwares de terceiros e cadastro/migração manual de conteúdos.';
  const foro = input.foroComarca.trim() || '[CIDADE / UF DA COMARCA]';

  const prazoDias = Math.max(1, input.prazoEstimadoDias || 60);
  const diasHomologacao = Math.max(1, input.prazoHomologacaoDiasUteis || 5);
  const valorFormatado = formatCurrencyBRL(input.valorTotalOuMensal);
  const sinalPct = Math.min(100, Math.max(0, input.percentualSinal || 30));
  const valorSinal = formatCurrencyBRL((input.valorTotalOuMensal || 0) * (sinalPct / 100));
  const valorSaldo = formatCurrencyBRL((input.valorTotalOuMensal || 0) * ((100 - sinalPct) / 100));
  const multaMora = Math.min(10, Math.max(0, input.multaAtrasoPercentual || 2));
  const diasSuspensao = Math.max(1, input.diasToleranciaSuspensao || 10);
  const diasGarantia = Math.max(0, input.prazoGarantiaDias || 90);
  const slaCritico = Math.max(1, input.slaRespostaCriticoHoras || 4);
  const avisoPrevio = Math.max(1, input.avisoPrevioRescisaoDias || 30);
  const multaRescisao = Math.min(50, Math.max(0, input.multaRescisoriaPercentual || 10));

  const tituloModelo =
    input.modeloContratual === 'escopo_fechado'
      ? 'CONTRATO DE PRESTAÇÃO DE SERVIÇOS DE DESENVOLVIMENTO DE SOFTWARE POR ESCOPO FECHADO'
      : input.modeloContratual === 'alocacao_horas'
        ? 'CONTRATO DE PRESTAÇÃO DE SERVIÇOS TÉCNICOS CONTINUADOS DE ENGENHARIA E SUSTENTAÇÃO DE SOFTWARE'
        : 'CONTRATO DE LICENCIAMENTO DE USO DE SOFTWARE (SaaS), CONFIGURAÇÃO E SUPORTE TÉCNICO';

  const textoPagamento =
    input.estruturaPagamento === 'sinal_parcelas'
      ? `O valor total ajustado é de ${valorFormatado}, a ser pago da seguinte forma: (a) ${sinalPct}% (${valorSinal}) a título de sinal e mobilização técnica na assinatura deste instrumento; e (b) o saldo remanescente de ${100 - sinalPct}% (${valorSaldo}) vinculado à entrega e homologação dos marcos previstos no cronograma.`
      : input.estruturaPagamento === 'mensal_recorrente'
        ? `Pela prestação continuada dos serviços / licenciamento, o CONTRATANTE pagará à CONTRATADA o valor mensal de ${valorFormatado}, com vencimento todo dia 10 (dez) de cada mês subsequente, reajustado anualmente pela variação positiva do IPCA/IBGE.`
        : `O valor total ajustado é de ${valorFormatado}, devido integralmente em até 5 (cinco) dias úteis após a entrega e homologação definitiva do objeto contratual.`;

  const textoPropriedadeIntelectual =
    input.propriedadeIntelectual === 'cessao_cliente'
      ? `5.1. Cessão Patrimonial Condicionada à Quitação (Lei nº 9.609/1998, Art. 4º): Mediante a quitação integral de todos os valores previstos neste contrato, a CONTRATADA cede e transfere definitivamente ao CONTRATANTE os direitos patrimoniais sobre o código-fonte específico e artefatos exclusivos desenvolvidos sob encomenda para o projeto "${tituloProjeto}". Até a quitação total, a titularidade permanece integralmente reservada à CONTRATADA.`
      : `5.1. Licenciamento de Uso sem Transferência de Código-Fonte: A CONTRATADA é a única e exclusiva titular de todos os direitos autorais e patrimoniais sobre o software "${tituloProjeto}", nos termos da Lei nº 9.609/1998. Pelo presente instrumento, concede ao CONTRATANTE uma licença de uso não exclusiva, intransferível e temporária, sendo vedada a engenharia reversa, descompilação, sublicenciamento ou cópia não autorizada.`;

  const textoBackgroundIP = input.protegerBackgroundIP
    ? `\n5.2. Reserva de Propriedade Intelectual Pré-Existente (Background IP): As partes reconhecem que bibliotecas genéricas, frameworks proprietários, rotinas de automação, componentes reutilizáveis de código e conhecimentos técnicos pré-existentes utilizados pela CONTRATADA permanecem sob sua titularidade exclusiva (ou sob suas respectivas licenças Open Source), outorgando-se ao CONTRATANTE licença perpétua e não exclusiva apenas para executá-los como parte integrante do sistema entregue.`
    : '';

  const textoPortfolio = input.permitirPortfolio
    ? `\n5.3. Direito de Divulgação em Portfólio: O CONTRATANTE autoriza a CONTRATADA a mencionar a realização do projeto "${tituloProjeto}", bem como exibir seu nome comercial e logotipo em seu portfólio profissional e materiais institucionais, respeitado o sigilo sobre dados estratégicos e segredos de negócio.`
    : `\n5.3. Restrição de Uso de Marca: A CONTRATADA compromete-se a não divulgar o nome, marca ou detalhes do projeto do CONTRATANTE em portfólio público sem prévia autorização por escrito.`;

  const textoChangeRequest = input.exigirChangeRequest
    ? `\n2.3. Gestão de Mudanças (Change Request e Prevenção ao Scope Creep): Qualquer solicitação de nova funcionalidade, alteração de regra de negócio já aprovada ou integração não descrita expressamente no escopo original será caracterizada como demanda adicional. Sua execução dependerá obrigatoriamente de análise de impacto técnico e assinatura de Termo Aditivo prévio estabelecendo os custos complementares e a nova janela de prazo.`
    : `\n2.3. Alterações de Escopo: Eventuais ajustes de escopo solicitados durante o projeto deverão ser alinhados de comum acordo entre as partes.`;

  const textoAceiteTacito = input.aceiteTacitoAtivo
    ? `\n3.2. Procedimento de Homologação e Aceite Tácito: A cada entrega disponibilizada em ambiente de homologação, o CONTRATANTE disporá do prazo de ${diasHomologacao} (cinco/dez) dias úteis para realizar testes e reportar, por escrito e de forma fundamentada, eventuais desconformidades em relação ao Anexo Técnico. Decorrido este prazo sem manifestação formal do CONTRATANTE, ou caso o software seja colocado em ambiente de produção/uso comercial, a entrega será considerada tacitamente aceita e homologada para todos os fins de direito e faturamento.`
    : `\n3.2. Procedimento de Homologação: O CONTRATANTE terá o prazo recomendado de ${diasHomologacao} dias úteis após cada entrega para validar as funcionalidades e emitir o termo de aceite.`;

  const textoGarantiaTerceiros = input.perdaGarantiaPorAlteracaoTerceiros
    ? `\n6.2. Exclusão de Garantia por Intervenção Externa: A garantia técnica prevista na cláusula 6.1 perderá sua validade sobre os módulos afetados caso o código-fonte, banco de dados ou infraestrutura sejam alterados diretamente pelo CONTRATANTE ou por terceiros não autorizados pela CONTRATADA durante o período de garantia, ou caso ocorram falhas decorrentes de mudanças em APIs externas de terceiros.`
    : '';

  const textoLGPD = input.conformidadeLGPD
    ? `7.1. Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018): No âmbito da execução deste contrato, as partes reconhecem que o CONTRATANTE atua como CONTROLADOR dos dados pessoais inseridos na aplicação (cabendo-lhe definir as bases legais e finalidades do tratamento perante os titulares), enquanto a CONTRATADA atua estritamente como OPERADORA técnica, tratando dados apenas segundo as instruções documentadas do CONTROLADOR.
7.2. Boas Práticas de Segurança (Security by Design): A CONTRATADA adotará medidas técnicas adequadas de controle de acesso e utilizará preferencialmente dados fictícios ou anonimizados nos ambientes de desenvolvimento e homologação.`
    : `7.1. Proteção de Dados: As partes comprometem-se a observar a legislação vigente aplicável ao tratamento de informações durante a execução contratual.`;

  const textoNDA = input.clausulaConfidencialidadeNDA
    ? `\n7.3. Confidencialidade Bilateral (NDA): Ambas as partes obrigam-se a manter sob absoluto sigilo todas as informações confidenciais, regras de negócio, credenciais de acesso, chaves de API, arquiteturas e documentos técnicos a que tiverem acesso em razão deste contrato, estendendo tal obrigação aos seus sócios, colaboradores e prepostos, durante a vigência contratual e pelo prazo de 2 (dois) anos após o seu término.`
    : '';

  const textoLimitacaoResponsabilidade = input.limitarResponsabilidadeCivil
    ? `8.1. Teto de Responsabilidade Civil (Limitation of Liability): Em conformidade com a alocação de riscos econômicos deste negócio jurídico (Código Civil, art. 421-A), a responsabilidade civil total e acumulada da CONTRATADA por quaisquer danos diretos comprovadamente causados na execução deste contrato fica limitada ao valor total efetivamente pago pelo CONTRATANTE nos últimos 12 (doze) meses (ou ao valor global deste instrumento, o que for menor).
8.2. Exclusão de Danos Indiretos e Serviços de Terceiros: A CONTRATADA não será responsabilizada por lucros cessantes, perda de receita estimada, perda de dados causada por ausência de backup sob responsabilidade do CONTRATANTE, nem por indisponibilidades originadas em provedores externos de infraestrutura em nuvem (AWS, Azure, Google Cloud, Vercel), operadoras de telecomunicações ou APIs de terceiros.`
    : `8.1. Responsabilidade Civil: As partes respondem pelos danos diretos que comprovadamente causarem por dolo ou culpa grave na execução deste contrato, nos termos da legislação civil aplicável.`;

  return `================================================================================
${LEGAL_DISCLAIMER_TEXT}
================================================================================

${tituloModelo}

Pelo presente instrumento particular, de um lado:

CONTRATANTE: ${contratanteNome}, inscrito(a) no CNPJ/CPF sob o nº ${contratanteDoc}; e
CONTRATADA: ${contratadaNome}, inscrito(a) no CNPJ/CPF sob o nº ${contratadaDoc};

têm entre si justo e acertado o presente Contrato de Engenharia de Software, regido pela Lei nº 9.609/1998 (Lei do Software), pela Lei nº 13.709/2018 (LGPD) e pelo Código Civil Brasileiro, mediante as cláusulas e condições a seguir:

--------------------------------------------------------------------------------
CLÁUSULA 1ª — DA NATUREZA DA RELAÇÃO E AUTONOMIA TÉCNICA
--------------------------------------------------------------------------------
1.1. O presente contrato possui natureza estritamente civil e empresarial, inexistindo qualquer vínculo empregatício, societário ou de subordinação pessoal entre o CONTRATANTE e os profissionais ou sócios da CONTRATADA, que atuará com plena autonomia técnica e metodológica.

--------------------------------------------------------------------------------
CLÁUSULA 2ª — DO OBJETO, ESCOPO TÉCNICO E GESTÃO DE MUDANÇAS
--------------------------------------------------------------------------------
2.1. O objeto deste instrumento consiste na prestação de serviços especializados de Análise e Desenvolvimento de Sistemas para o projeto "${tituloProjeto}", compreendendo o seguinte escopo técnico:
${escopo}

2.2. Exclusões Explícitas (Itens Fora do Escopo): Não estão incluídos no preço ajustado neste contrato, correndo por conta exclusiva do CONTRATANTE:
${exclusoes}${textoChangeRequest}

--------------------------------------------------------------------------------
CLÁUSULA 3ª — DOS PRAZOS, DEVER DE COOPERAÇÃO E HOMOLOGAÇÃO
--------------------------------------------------------------------------------
3.1. O prazo estimado para execução das entregas previstas no escopo inicial é de ${prazoDias} dias corridos, contados do cumprimento cumulativo do pagamento inicial (se aplicável) e da entrega, pelo CONTRATANTE, de todos os insumos técnicos necessários (credenciais, acessos, documentação de APIs e definições de negócio).${textoAceiteTacito}
3.3. Dever de Cooperação do Contratante: Eventuais atrasos por parte do CONTRATANTE no fornecimento de informações, aprovações ou ambientes prorrogarão automaticamente o cronograma da CONTRATADA por igual período, sem que isso configure mora ou inadimplemento da CONTRATADA.

--------------------------------------------------------------------------------
CLÁUSULA 4ª — DA REMUNERAÇÃO, PAGAMENTO E INADIMPLÊNCIA
--------------------------------------------------------------------------------
4.1. Condições Comerciais: ${textoPagamento}
4.2. Encargos de Mora: O atraso no pagamento de qualquer parcela sujeitará o CONTRATANTE à multa moratória de ${multaMora}% sobre o valor devido, acrescida de juros de mora de 1% (um por cento) ao mês pro rata die e atualização monetária pelo IPCA.
4.3. Suspensão por Inadimplência (Art. 476 do Código Civil): Caso o atraso supere ${diasSuspensao} dias corridos após notificação eletrônica, a CONTRATADA poderá suspender temporariamente o desenvolvimento, o suporte e o acesso aos ambientes de homologação até a regularização do débito, prorrogando-se os prazos de entrega.

--------------------------------------------------------------------------------
CLÁUSULA 5ª — DA PROPRIEDADE INTELECTUAL E CÓDIGO-FONTE (LEI Nº 9.609/1998)
--------------------------------------------------------------------------------
${textoPropriedadeIntelectual}${textoBackgroundIP}${textoPortfolio}

--------------------------------------------------------------------------------
CLÁUSULA 6ª — DA GARANTIA TÉCNICA, SUPORTE E NÍVEIS DE SERVIÇO (SLA)
--------------------------------------------------------------------------------
6.1. Garantia Técnica de Escopo: Após o aceite definitivo do software, a CONTRATADA prestará garantia técnica pelo prazo de ${diasGarantia} dias corridos, restrita exclusivamente à correção sem ônus de erros de programação (bugs) que impeçam o funcionamento das especificações originais constantes no Anexo Técnico.${textoGarantiaTerceiros}
6.3. Distinção entre Garantia e Evolução: Solicitações de novas funcionalidades, adaptações a novas legislações, atualizações de sistemas operacionais/navegadores lançados após a entrega ou suporte operacional a usuários finais não configuram acionamento de garantia, devendo ser contratadas mediante plano de sustentação ou orçamento complementar.
6.4. Acordo de Nível de Serviço (SLA): Caso haja cobertura de suporte ativa, chamados de severidade crítica (indisponibilidade total do sistema em produção) terão tempo estimado de primeira resposta técnica de até ${slaCritico} horas úteis.

--------------------------------------------------------------------------------
CLÁUSULA 7ª — DA PROTEÇÃO DE DADOS PESSOAIS (LGPD) E CONFIDENCIALIDADE
--------------------------------------------------------------------------------
${textoLGPD}${textoNDA}

--------------------------------------------------------------------------------
CLÁUSULA 8ª — DA LIMITAÇÃO DE RESPONSABILIDADE E ALOCAÇÃO DE RISCOS
--------------------------------------------------------------------------------
${textoLimitacaoResponsabilidade}

--------------------------------------------------------------------------------
CLÁUSULA 9ª — DA RESCISÃO EQUILIBRADA E LIQUIDAÇÃO PROPORCIONAL
--------------------------------------------------------------------------------
9.1. Rescisão Imotivada: Qualquer das partes poderá rescindir este contrato mediante notificação prévia por escrito com antecedência mínima de ${avisoPrevio} dias corridos.
9.2. Acerto Proporcional Justo: Em caso de rescisão antecipada, o CONTRATANTE pagará integralmente pelas etapas e horas técnicas comprovadamente executadas até a data efetiva do encerramento, acrescidas de multa compensatória de ${multaRescisao}% sobre o saldo remanescente do contrato (quando rescindido imotivadamente pelo solicitante), cabendo à CONTRATADA entregar os artefatos e códigos referentes às etapas efetivamente quitadas no estado em que se encontrarem (as-is).

--------------------------------------------------------------------------------
CLÁUSULA 10ª — DO FORO E RESOLUÇÃO DE CONFLITOS
--------------------------------------------------------------------------------
10.1. As partes comprometem-se a buscar, prioritariamente, a solução amigável e extrajudicial de eventuais controvérsias técnicas ou comerciais. Persistindo o impasse, elegem o Foro da Comarca de ${foro} para dirimir quaisquer dúvidas oriundas deste contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.

Local e Data: ________________________, ____ de __________________ de 20____.

__________________________________________________
CONTRATANTE: ${contratanteNome}

__________________________________________________
CONTRATADA: ${contratadaNome}

================================================================================
NOTA FINAL DE GOVERNANÇA: Documento gerado para fins de estudo e estruturação preliminar de negócios em Engenharia de Software (MétricaLab). Submeta esta minuta à revisão de profissional jurídico habilitado antes da assinatura.
================================================================================`;
}
