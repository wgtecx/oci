// Banco de Dados Inicial e Lógica de Negócio para o Protótipo OCI (Oferta de Cuidado Integrado)

// 1. Definições de OCIs e Procedimentos (Extraído das Portarias SAES/MS 1.822 e 1.824)
const OCI_DEFINITIONS = {
    // CARDIOLOGIA (Portaria 1.822)
    'cardio_risco_cirurgico': {
        codigo: '09.02.01.001-8',
        nome: 'OCI Avaliação de Risco Cirúrgico',
        especialidade: 'Cardiologia',
        valorPrincipal: 130.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.11.02.003-6', nome: 'Eletrocardiograma', qtd: 1, valor: 0 },
            { codigo: '02.04.03.015-3', nome: 'Radiografia de Tórax (PA e Perfil)', qtd: 1, valor: 0 },
            { codigo: '02.02.02.038-0', nome: 'Hemograma Completo', qtd: 1, valor: 0 },
            { codigo: '02.02.01.031-7', nome: 'Dosagem de Creatinina', qtd: 1, valor: 0 },
            { codigo: '02.02.01.047-3', nome: 'Dosagem de Glicose', qtd: 1, valor: 0 },
            { codigo: '02.02.01.069-4', nome: 'Dosagem de Ureia', qtd: 1, valor: 0 },
            { codigo: '02.02.01.067-8', nome: 'Dosagem de Triglicerídeos', qtd: 1, valor: 0 },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'cardio_avaliacao': {
        codigo: '09.02.01.002-6',
        nome: 'OCI Avaliação Cardiológica',
        especialidade: 'Cardiologia',
        valorPrincipal: 200.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.05.01.003-2', nome: 'Ecocardiografia Transtorácica', qtd: 1, valor: 0 },
            { codigo: '02.11.02.003-6', nome: 'Eletrocardiograma', qtd: 1, valor: 0 },
            { codigo: '02.04.03.015-3', nome: 'Radiografia de Tórax (PA e Perfil)', qtd: 1, valor: 0 },
            { codigo: '02.02.02.038-0', nome: 'Hemograma Completo', qtd: 1, valor: 0 },
            { codigo: '02.02.01.031-7', nome: 'Dosagem de Creatinina', qtd: 1, valor: 0 },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'cardio_scc_inicial': {
        codigo: '09.02.01.003-4',
        nome: 'OCI Avaliação Diagnóstica Inicial - Síndrome Coronariana Crônica',
        especialidade: 'Cardiologia',
        valorPrincipal: 270.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.05.01.003-2', nome: 'Ecocardiografia Transtorácica', qtd: 1, valor: 0 },
            { codigo: '02.11.02.003-6', nome: 'Eletrocardiograma', qtd: 1, valor: 0 },
            { codigo: '02.11.02.006-0', nome: 'Teste Ergométrico', qtd: 1, valor: 0 },
            { codigo: '02.02.02.038-0', nome: 'Hemograma Completo', qtd: 1, valor: 0 },
            { codigo: '02.02.01.031-7', nome: 'Dosagem de Creatinina', qtd: 1, valor: 0 },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'cardio_ic': {
        codigo: '09.02.01.006-9',
        nome: 'OCI Avaliação Diagnóstica - Insuficiência Cardíaca',
        especialidade: 'Cardiologia',
        valorPrincipal: 350.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.05.01.003-2', nome: 'Ecocardiografia Transtorácica', qtd: 1, valor: 0 },
            { codigo: '02.11.02.003-6', nome: 'Eletrocardiograma', qtd: 1, valor: 0 },
            { codigo: '02.11.02.006-0', nome: 'Teste Ergométrico', qtd: 1, valor: 0 },
            { codigo: '02.02.01.079-1', nome: 'Dosagem de Peptídeos Natriuréticos (BNP/NT-proBNP)', qtd: 1, valor: 0 },
            { codigo: '02.11.02.004-4', nome: 'Monitoramento pelo Sistema Holter 24h', qtd: 1, valor: 0 },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    // ONCOLOGIA (Portaria 1.824)
    'onco_mama_inicial': {
        codigo: '09.01.01.001-4',
        nome: 'OCI Avaliação Diagnóstica Inicial de Câncer de Mama',
        especialidade: 'Oncologia',
        valorPrincipal: 125.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.04.03.003-0', nome: 'Mamografia Bilateral', qtd: 2, valor: 0 },
            { codigo: '02.05.02.009-7', nome: 'Ultrassonografia Mamária Bilateral', qtd: 1, valor: 0 },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'onco_mama_progressao': {
        codigo: '09.01.01.002-2',
        nome: 'OCI Progressão da Avaliação Diagnóstica de Câncer de Mama',
        especialidade: 'Oncologia',
        valorPrincipal: 400.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.01.01.058-5', nome: 'Punção Aspirativa de Mama por Agulha Fina (PAAF)', qtd: 1, valor: 0 },
            { codigo: '02.03.01.004-3', nome: 'Exame Citopatológico de Mama', qtd: 1, valor: 0 },
            { codigo: '02.01.01.060-7', nome: 'Punção de Mama por Agulha Grossa (Core Biopsy)', qtd: 1, valor: 0 },
            { codigo: '02.03.02.006-5', nome: 'Exame Anatomopatológico de Mama - Biópsia', qtd: 2, valor: 0, exigeDiagnostico: true },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'onco_prostata_inicial': {
        codigo: '09.01.01.003-0',
        nome: 'OCI Avaliação Diagnóstica Inicial de Câncer de Próstata',
        especialidade: 'Oncologia',
        valorPrincipal: 130.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.02.03.010-5', nome: 'Dosagem de Antígeno Prostático Específico (PSA)', qtd: 1, valor: 0 },
            { codigo: '02.05.02.004-6', nome: 'Ultrassonografia de Abdômen Total', qtd: 1, valor: 0 },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'onco_prostata_progressao': {
        codigo: '09.01.01.004-9',
        nome: 'OCI Progressão da Avaliação Diagnóstica de Câncer de Próstata',
        especialidade: 'Oncologia',
        valorPrincipal: 300.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.05.02.011-9', nome: 'Ultrassonografia de Próstata (Via Transretal)', qtd: 1, valor: 0 },
            { codigo: '02.01.01.041-0', nome: 'Biópsia de Próstata Via Transretal', qtd: 1, valor: 0 },
            { codigo: '02.03.02.003-0', nome: 'Exame Anatomopatológico por Peça Cirúrgica/Biópsia', qtd: 1, valor: 0, exigeDiagnostico: true },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'onco_colo_investigacao': {
        codigo: '09.01.01.005-7',
        nome: 'OCI Investigação Diagnóstica de Câncer de Colo do Útero',
        especialidade: 'Oncologia',
        valorPrincipal: 100.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.11.04.002-9', nome: 'Colposcopia', qtd: 2, valor: 0 },
            { codigo: '02.01.01.066-6', nome: 'Biópsia do Colo Uterino', qtd: 1, valor: 0 },
            { codigo: '02.03.02.008-1', nome: 'Exame Anatomopatológico do Colo Uterino - Biópsia', qtd: 1, valor: 0, exigeDiagnostico: true },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'onco_gastrico': {
        codigo: '09.01.01.007-3',
        nome: 'OCI Avaliação Diagnóstica de Câncer Gástrico',
        especialidade: 'Oncologia',
        valorPrincipal: 250.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.09.01.003-7', nome: 'Esofagogastroduodenoscopia', qtd: 1, valor: 0 },
            { codigo: '02.03.02.003-0', nome: 'Exame Anatomopatológico por Peça/Biópsia', qtd: 1, valor: 0, exigeDiagnostico: true },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    },
    'onco_colorretal': {
        codigo: '09.01.01.008-1',
        nome: 'OCI Avaliação Diagnóstica de Câncer Colorretal',
        especialidade: 'Oncologia',
        valorPrincipal: 282.00,
        procedimentos: [
            { codigo: '03.01.01.007-2', nome: 'Consulta Médica na Atenção Especializada', qtd: 2, valor: 0 },
            { codigo: '02.09.01.002-9', nome: 'Colonoscopia', qtd: 1, valor: 0 },
            { codigo: '02.03.02.003-0', nome: 'Exame Anatomopatológico por Peça/Biópsia', qtd: 1, valor: 0, exigeDiagnostico: true },
            { codigo: '03.01.01.030-7', nome: 'Teleconsulta Médica na Atenção Especializada', qtd: 2, valor: 0 }
        ]
    }
};

// 2. Base de Dados de Simulação (Carregada do LocalStorage ou Criada na primeira execução)
const INITIAL_SOULMV_ATENDIMENTOS = [
    { cd_atendimento: '1029481', dt_atendimento: '2026-05-24', cd_paciente: '44592', nm_paciente: 'Carlos Eduardo Souza', nr_cpf: '102.394.885-30', nr_cns: '702938102938102', especialidade: 'Cardiologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'HUCM' },
    { cd_atendimento: '1029490', dt_atendimento: '2026-05-24', cd_paciente: '39281', nm_paciente: 'Maria das Graças Silva', nr_cpf: '085.392.193-44', nr_cns: '708291039281039', especialidade: 'Cardiologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'ACM' },
    { cd_atendimento: '1029512', dt_atendimento: '2026-05-23', cd_paciente: '55192', nm_paciente: 'Antônio Francisco Costa', nr_cpf: '129.302.948-22', nr_cns: '709281039281023', especialidade: 'Oncologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'IOCM' },
    { cd_atendimento: '1029525', dt_atendimento: '2026-05-23', cd_paciente: '82710', nm_paciente: 'Ana Beatriz Oliveira', nr_cpf: '332.910.492-91', nr_cns: '701293810293810', especialidade: 'Oncologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'IONCM' },
    { cd_atendimento: '1029700', dt_atendimento: '2026-05-24', cd_paciente: '12389', nm_paciente: 'Roberto Carlos Medeiros', nr_cpf: '112.394.881-20', nr_cns: '701238910293819', especialidade: 'Ortopedia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'HUCM' },
    { cd_atendimento: '1029600', dt_atendimento: '2026-05-22', cd_paciente: '99281', nm_paciente: 'José de Ribamar Alves', nr_cpf: '450.293.109-88', nr_cns: '704928102938492', especialidade: 'Cardiologia', prestador: 'Dr. Ricardo Santos', fl_oci_criada: false, unidade: 'IOCM' },
    { cd_atendimento: '1029615', dt_atendimento: '2026-05-22', cd_paciente: '77281', nm_paciente: 'Tereza Cristina Ramos', nr_cpf: '002.392.810-77', nr_cns: '705829102938109', especialidade: 'Oncologia', prestador: 'Dr. Ricardo Santos', fl_oci_criada: false, unidade: 'IONCM' }
];

// Estado Inicial LocalStorage
function getDb(key, initialData) {
    const data = localStorage.getItem(key);
    if (!data) {
        localStorage.setItem(key, JSON.stringify(initialData));
        return initialData;
    }
    return JSON.parse(data);
}

function saveDb(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

let db_soulmv = getDb('oci_db_soulmv', INITIAL_SOULMV_ATENDIMENTOS);
let db_oci_pacientes = getDb('oci_db_pacientes', []);
let db_oci_remessas = getDb('oci_db_remessas', []); // Banco de remessas/faturas
let db_oci_definitions = getDb('oci_db_definitions', OCI_DEFINITIONS);

// Variáveis Globais de Operação
let currentProfile = 'medico';
let activeAtendimento = null; // Para o modal do médico
let activeOciPaciente = null; // Para o modal da navegação/faturamento
let activeBillingItem = null; // Para o modal de glosa

// Estados de Paginação e Filtros
let currentPageMedico = 1;
const itemsPerPageMedico = 5;

let currentPageNavegacao = 1;
const itemsPerPageNavegacao = 4;

let currentPageFaturamento = 1;
const itemsPerPageFaturamento = 3;

// 3. Inicialização e Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    switchProfile('medico');
    renderStats();
    
    // Configura botões de navegação de perfil
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const profile = e.currentTarget.dataset.profile;
            switchProfile(profile);
        });
    });
    
    // Fechamento de modais
    document.querySelectorAll('.modal-close, .btn-close-modal').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    // Envio do formulário do Médico
    document.getElementById('form-inclusao-oci').addEventListener('submit', handleInsertOci);
    
    // Select de OCI muda os procedimentos no checklist do médico
    document.getElementById('select-oci-tipo').addEventListener('change', (e) => {
        renderProceduresChecklist(e.target.value);
    });

    // Ações de execução da Navegação
    document.getElementById('form-execucao-proc').addEventListener('submit', handleSaveExecucao);
    document.getElementById('select-exec-status').addEventListener('change', (e) => {
        const labelData = document.querySelector('label[for="input-dt-realizacao"]');
        if (e.target.value === 'Agendado') {
            labelData.textContent = 'Data do Agendamento';
        } else {
            labelData.textContent = 'Data de Realização';
        }
    });
    
    // Ações do Faturamento
    document.getElementById('form-glosar-proc').addEventListener('submit', handleSaveGlosa);
    document.getElementById('form-gerar-remessa').addEventListener('submit', handleSaveRemessa); // Lote remessa
    document.getElementById('form-transferir-paciente').addEventListener('submit', handleSaveTransferencia); // Transferência
    document.getElementById('form-enviar-sus').addEventListener('submit', handleSaveEnviarSus);
    document.getElementById('form-pendencia-proc').addEventListener('submit', handleSavePendencia);
    
    // Ações de Login
    document.getElementById('form-login').addEventListener('submit', handleLoginSubmit);
    
    // Ações de Logout
    const btnLogout = document.getElementById('btn-logout');
    if (btnLogout) {
        btnLogout.addEventListener('click', realizarLogout);
    }
    
    // Ações de Cadastro de OCI
    const formCadastrarOci = document.getElementById('form-cadastrar-oci');
    if (formCadastrarOci) {
        formCadastrarOci.addEventListener('submit', handleSaveNovaOci);
    }
});

// 4. Lógica de Alternância de Abas/Perfis
function switchProfile(profile) {
    currentProfile = profile;
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`[data-profile="${profile}"]`).classList.add('active');
    
    document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(`view-${profile}`).classList.add('active');
    
    // Atualiza cabeçalho do usuário simulado
    const userRoleSpan = document.querySelector('.user-role');
    const userNameSpan = document.querySelector('.user-name');
    if (profile === 'medico') {
        userNameSpan.textContent = 'Dr. Fernando Silva';
        userRoleSpan.textContent = 'Médico Prestador';
        renderMedicoView();
    } else if (profile === 'navegacao') {
        userNameSpan.textContent = 'Aline Fonseca';
        userRoleSpan.textContent = 'Navegação de Cuidados';
        renderNavegacaoView();
    } else {
        userNameSpan.textContent = 'Lucas Mendes';
        userRoleSpan.textContent = 'Faturamento SUS';
        renderFaturamentoView();
        renderLotesRemessa();
    }
    renderStats();
}

// 5. Visão do Médico
function renderMedicoView() {
    const searchVal = document.getElementById('search-medico').value.toLowerCase();
    const dateStart = document.getElementById('medico-date-start').value;
    const dateEnd = document.getElementById('medico-date-end').value;
    
    const tbody = document.getElementById('table-medico-body');
    tbody.innerHTML = '';
    
    // 1. Filtrar atendimentos do Dr. Fernando Silva que batem com a busca e o período
    const filtrados = db_soulmv.filter(at => {
        const matchPrestador = at.prestador === 'Dr. Fernando Silva';
        const matchSearch = at.nm_paciente.toLowerCase().includes(searchVal) || at.cd_atendimento.includes(searchVal);
        
        let matchDate = true;
        if (dateStart) {
            matchDate = matchDate && (at.dt_atendimento >= dateStart);
        }
        if (dateEnd) {
            matchDate = matchDate && (at.dt_atendimento <= dateEnd);
        }
        
        return matchPrestador && matchSearch && matchDate;
    });
    
    const totalItems = filtrados.length;
    
    // 2. Fatiar dados para a página ativa
    const start = (currentPageMedico - 1) * itemsPerPageMedico;
    const end = start + itemsPerPageMedico;
    const paginados = filtrados.slice(start, end);
    
    if (paginados.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--text-muted);">Nenhum atendimento pendente de OCI localizado.</td></tr>`;
        renderPagination('medico-pagination', 0, itemsPerPageMedico, currentPageMedico, 'changePageMedico');
        return;
    }
    
    paginados.forEach(at => {
        const tr = document.createElement('tr');
        
        // Verifica janela de cancelamento (2 horas)
        let cancelarBtn = '';
        if (at.fl_oci_criada) {
            const ociPaciente = db_oci_pacientes.find(p => p.cd_atendimento === at.cd_atendimento);
            if (ociPaciente && ociPaciente.dt_criacao_ts) {
                const dtInclusao = new Date(ociPaciente.dt_criacao_ts);
                const agora = new Date();
                const diffMs = agora - dtInclusao;
                const diffMin = Math.floor(diffMs / 60000);
                const restMin = 120 - diffMin;
                
                if (restMin > 0) {
                    const hRest = Math.floor(restMin / 60);
                    const mRest = restMin % 60;
                    const tempoLabel = hRest > 0 ? `${hRest}h${mRest.toString().padStart(2,'0')}m` : `${mRest}min`;
                    cancelarBtn = `<button class="btn btn-sm" onclick="confirmarCancelamentoOci('${ociPaciente.id}')" 
                        style="background-color:var(--danger-glow); color:var(--danger); border-color:var(--danger); font-size:0.65rem; margin-left:0.3rem;" 
                        title="Cancelar inclusão - janela de ${tempoLabel} restantes">
                        ❌ ${tempoLabel}
                    </button>`;
                }
            }
        }
        
        tr.innerHTML = `
            <td><strong>${at.cd_atendimento}</strong></td>
            <td><span class="badge badge-info" style="font-size: 0.72rem; padding: 0.15rem 0.4rem;">${at.unidade || 'HUCM'}</span></td>
            <td>${formatDate(at.dt_atendimento)}</td>
            <td>${at.cd_paciente}</td>
            <td><strong>${at.nm_paciente}</strong></td>
            <td>${at.especialidade}</td>
            <td>
                ${at.fl_oci_criada 
                    ? `<span class="badge badge-success"><span class="badge-dot"></span>Incluso na OCI</span>`
                    : `<span class="badge badge-warning"><span class="badge-dot"></span>Pendente</span>`
                }
            </td>
            <td>
                ${at.fl_oci_criada 
                    ? `<div style="display:flex; align-items:center; gap:0.25rem; flex-wrap:wrap;">
                        <button class="btn btn-sm" onclick="abrirDetalheOciMedico('${at.cd_atendimento}')" style="background-color: var(--success-glow); color: var(--success); border-color: var(--success); cursor: pointer;" title="Visualizar detalhamento da OCI deste paciente">Incluso</button>
                        ${cancelarBtn}
                       </div>`
                    : `<button class="btn btn-primary btn-sm" onclick="openOciModal('${at.cd_atendimento}')">Incluir OCI</button>`
                }
            </td>
        `;
        tbody.appendChild(tr);
    });
    
    // 3. Renderizar controles de paginação
    renderPagination('medico-pagination', totalItems, itemsPerPageMedico, currentPageMedico, 'changePageMedico');
}

function openOciModal(cd_atendimento) {
    activeAtendimento = db_soulmv.find(at => at.cd_atendimento === cd_atendimento);
    if (!activeAtendimento) return;
    
    // Atualiza Resumo do Paciente no Modal
    document.getElementById('modal-paciente-nome').textContent = activeAtendimento.nm_paciente;
    document.getElementById('modal-paciente-cns').textContent = activeAtendimento.nr_cns;
    document.getElementById('modal-paciente-cpf').textContent = activeAtendimento.nr_cpf;
    document.getElementById('modal-paciente-pront').textContent = activeAtendimento.cd_paciente;
    
    // Configura os selects de acordo com a especialidade
    const selectOci = document.getElementById('select-oci-tipo');
    selectOci.innerHTML = '<option value="">-- Selecione a Linha de Cuidado --</option>';
    
    Object.keys(db_oci_definitions).forEach(key => {
        const oci = db_oci_definitions[key];
        if (oci.especialidade === activeAtendimento.especialidade) {
            const opt = document.createElement('option');
            opt.value = key;
            opt.textContent = `${oci.codigo} - ${oci.nome}`;
            selectOci.appendChild(opt);
        }
    });
    
    document.getElementById('checklist-container').innerHTML = `<p style="color: var(--text-secondary); font-size: 0.875rem;">Selecione uma OCI acima para carregar o checklist de procedimentos.</p>`;
    
    openModal('modal-oci');
}

function renderProceduresChecklist(ociKey) {
    const container = document.getElementById('checklist-container');
    container.innerHTML = '';
    
    if (!ociKey) {
        container.innerHTML = `<p style="color: var(--text-secondary); font-size: 0.875rem;">Selecione uma OCI acima para carregar os procedimentos.</p>`;
        return;
    }
    
    const oci = db_oci_definitions[ociKey];
    oci.procedimentos.forEach((proc, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'checklist-item';
        itemDiv.innerHTML = `
            <input type="checkbox" id="proc-${index}" value="${proc.codigo}" checked>
            <div class="checklist-item-label">
                <label for="proc-${index}"><strong>${proc.nome}</strong> (Qtd: ${proc.qtd})</label>
                <span class="checklist-item-code">${proc.codigo} ${proc.exigeDiagnostico ? '<span style="color: var(--danger); font-size: 0.7rem; font-weight: 700;">[EXIGE DATA LAUDO ONCO]</span>' : ''}</span>
            </div>
        `;
        container.appendChild(itemDiv);
    });
}

function handleInsertOci(e) {
    e.preventDefault();
    const ociKey = document.getElementById('select-oci-tipo').value;
    if (!ociKey) {
        alert('Por favor, selecione uma OCI.');
        return;
    }
    
    const ociDef = db_oci_definitions[ociKey];
    
    // Obter os procedimentos selecionados
    const selecionados = [];
    ociDef.procedimentos.forEach((proc, index) => {
        const chk = document.getElementById(`proc-${index}`);
        if (chk && chk.checked) {
            selecionados.push({
                codigo: proc.codigo,
                nome: proc.nome,
                qtd: proc.qtd,
                exigeDiagnostico: proc.exigeDiagnostico || false,
                status: 'Pendente', // Pendente, Agendado, Realizado
                dt_solicitacao: getHoje(),
                dt_execucao: '',
                dt_diagnostico: '', // Requerido para onco se for anatomopatológico
                valor: ociDef.valorPrincipal / ociDef.procedimentos.length, // Simulação de distribuição do valor principal SUS
                status_faturamento: 'Pendente', // Pendente, Faturado, Glosado, Reapresentado
                competencia: '',
                motivo_glosa: ''
            });
        }
    });
    
    if (selecionados.length === 0) {
        alert('Por favor, selecione pelo menos um procedimento secundário.');
        return;
    }
    
    // Criar OCI do Paciente
    const agora = new Date();
    const novoOciPaciente = {
        id: 'OCI-' + Math.floor(100000 + Math.random() * 900000),
        cd_atendimento: activeAtendimento.cd_atendimento,
        cd_paciente: activeAtendimento.cd_paciente,
        nm_paciente: activeAtendimento.nm_paciente,
        nr_cpf: activeAtendimento.nr_cpf,
        nr_cns: activeAtendimento.nr_cns,
        prestador: activeAtendimento.prestador || 'Dr. Fernando Silva',
        unidade: activeAtendimento.unidade || 'HUCM',
        oci_key: ociKey,
        oci_codigo: ociDef.codigo,
        oci_nome: ociDef.nome,
        dt_criacao: getHoje(),
        dt_criacao_ts: agora.toISOString(), // Timestamp completo para janela de cancelamento
        competencia_inicial: getCompetenciaAtual(),
        id_remessa: null,
        status: 'Ativa',
        procedimentos: selecionados
    };
    
    // Adiciona na lista de OCI
    db_oci_pacientes.push(novoOciPaciente);
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    // Atualiza atendimento original no SoulMV indicando que ja tem OCI
    db_soulmv = db_soulmv.map(at => {
        if (at.cd_atendimento === activeAtendimento.cd_atendimento) {
            return { ...at, fl_oci_criada: true };
        }
        return at;
    });
    saveDb('oci_db_soulmv', db_soulmv);
    
    closeModal();
    renderMedicoView();
    renderStats();
    
    // Feedback visual com aviso da janela de cancelamento
    alert(`Paciente ${novoOciPaciente.nm_paciente} incluído na OCI com sucesso!\nConta Paciente gerada automaticamente no Faturamento.\n\n⚠️ Você tem 2 horas para cancelar esta inclusão, caso necessário.`);
}

function renderNavegacaoView() {
    const searchVal = document.getElementById('search-navegacao').value.toLowerCase();
    const dateStart = document.getElementById('navegacao-date-start').value;
    const dateEnd = document.getElementById('navegacao-date-end').value;
    
    const cardsContainer = document.getElementById('navegacao-cards');
    cardsContainer.innerHTML = '';
    
    // 1. Filtrar pacientes da OCI de acordo com a busca e período de criação
    const filtrados = db_oci_pacientes.filter(p => {
        const matchSearch = p.nm_paciente.toLowerCase().includes(searchVal) || 
                            p.id.toLowerCase().includes(searchVal) ||
                            p.oci_nome.toLowerCase().includes(searchVal);
        
        let matchDate = true;
        if (dateStart) {
            matchDate = matchDate && (p.dt_criacao >= dateStart);
        }
        if (dateEnd) {
            matchDate = matchDate && (p.dt_criacao <= dateEnd);
        }
        
        return matchSearch && matchDate;
    });
    
    const totalItems = filtrados.length;
    
    // 2. Fatiar dados para a página ativa
    const start = (currentPageNavegacao - 1) * itemsPerPageNavegacao;
    const end = start + itemsPerPageNavegacao;
    const paginados = filtrados.slice(start, end);
    
    if (paginados.length === 0) {
        cardsContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); grid-column: 1/-1; padding: 3rem;">Nenhum paciente sob navegação localizado.</div>`;
        renderPagination('navegacao-pagination', 0, itemsPerPageNavegacao, currentPageNavegacao, 'changePageNavegacao');
        return;
    }
    
    paginados.forEach(p => {
        // Calcula progresso
        const realizados = p.procedimentos.filter(pr => pr.status === 'Realizado').length;
        const total = p.procedimentos.length;
        const progresso = total > 0 ? Math.round((realizados / total) * 100) : 0;
        
        // Regra de vigência de APAC: 2 competências
        const prazoInfo = getPrazoApac(p.dt_criacao);
        let prazoBadgeClass = 'badge-success';
        if (prazoInfo.mesesRestantes <= 0) {
            prazoBadgeClass = 'badge-danger';
        } else if (prazoInfo.mesesRestantes === 1) {
            prazoBadgeClass = 'badge-warning';
        }
        
        const temPendencia = p.procedimentos.some(pr => pr.status_faturamento === 'Com Pendência');
        let alertPendenciaHtml = '';
        if (temPendencia) {
            alertPendenciaHtml = `
                <div style="background-color: var(--warning-glow); border: 1px solid var(--warning); color: #854d0e; font-size: 0.72rem; padding: 0.4rem 0.6rem; border-radius: 0.35rem; margin-top: 0.5rem; display: flex; align-items: center; gap: 0.35rem;">
                    <span>⚠️ <strong>Pendência Faturamento</strong></span>
                </div>
            `;
        }
        
        const card = document.createElement('div');
        card.className = 'kanban-card';
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
                <span class="card-oci-tag" style="margin:0;">${p.id} • ${p.oci_nome}</span>
                <span class="badge ${p.status === 'Fechada' ? 'badge-success' : 'badge-info'}" style="font-size:0.6rem; padding:0.15rem 0.35rem;">
                    ${p.status === 'Fechada' ? 'OCI Fechada' : 'OCI Ativa'}
                </span>
            </div>
            <h4 class="card-patient-name">${p.nm_paciente}</h4>
            <div class="card-details">
                <p>Prontuário: <strong>${p.cd_paciente}</strong> | Atend: <strong>${p.cd_atendimento}</strong> | Unidade: <strong>${p.unidade || 'HUCM'}</strong></p>
                <p>Inclusão: <strong>${formatDate(p.dt_criacao)}</strong></p>
                <div style="margin-top: 0.5rem; display: flex; gap: 0.5rem; align-items:center;">
                    <span class="badge ${prazoBadgeClass} btn-sm" style="font-size:0.65rem;">
                        <span class="badge-dot"></span>APAC Vigência: ${prazoInfo.competenciaLimite} (${prazoInfo.statusTexto})
                    </span>
                </div>
                ${alertPendenciaHtml}
            </div>
            
            <div style="margin-top: 0.75rem;">
                <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-secondary);">
                    <span>Checklist de Procedimentos</span>
                    <span>${realizados}/${total} (${progresso}%)</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${progresso}%;"></div>
                </div>
            </div>
            
            <div style="margin-top:1rem; display:flex; justify-content:flex-end;">
                <button class="btn btn-sm btn-primary" onclick="openAcompanharModal('${p.id}')">Acompanhar Cuidado</button>
            </div>
        `;
        cardsContainer.appendChild(card);
    });
    
    // 3. Renderizar controles de paginação
    renderPagination('navegacao-pagination', totalItems, itemsPerPageNavegacao, currentPageNavegacao, 'changePageNavegacao');
}

function openAcompanharModal(ociPacienteId) {
    activeOciPaciente = db_oci_pacientes.find(p => p.id === ociPacienteId);
    if (!activeOciPaciente) return;
    
    document.getElementById('acomp-paciente-nome').textContent = activeOciPaciente.nm_paciente;
    document.getElementById('acomp-oci-nome').textContent = activeOciPaciente.oci_nome;
    document.getElementById('acomp-dt-criacao').textContent = formatDate(activeOciPaciente.dt_criacao);
    
    // Lista de procedimentos com ações individuais
    const container = document.getElementById('acomp-procedimentos-lista');
    container.innerHTML = '';
    
    activeOciPaciente.procedimentos.forEach((proc, index) => {
        const item = document.createElement('div');
        item.style.backgroundColor = 'var(--bg-secondary)';
        item.style.border = '1px solid var(--border-color)';
        item.style.padding = '0.75rem 1rem';
        item.style.borderRadius = '0.5rem';
        item.style.marginBottom = '0.5rem';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        
        let statusBadge = '';
        let pendenciaLabelHtml = '';
        if (proc.status_faturamento === 'Com Pendência') {
            statusBadge = '<span class="badge badge-warning" style="background-color:var(--warning-glow); color:var(--warning);"><span class="badge-dot" style="background-color:var(--warning);"></span>Pendência</span>';
            pendenciaLabelHtml = `<p style="font-size:0.72rem; color:var(--warning); margin-top:0.15rem; font-style:italic;"><strong>Pendência:</strong> ${proc.pendencia_descricao}</p>`;
        } else {
            if (proc.status === 'Pendente') statusBadge = '<span class="badge badge-warning"><span class="badge-dot"></span>Pendente</span>';
            else if (proc.status === 'Agendado') statusBadge = '<span class="badge badge-info"><span class="badge-dot"></span>Agendado</span>';
            else statusBadge = '<span class="badge badge-success"><span class="badge-dot"></span>Concluído</span>';
        }
        
        let acaoBtn = '';
        if (proc.status_faturamento === 'Com Pendência') {
            acaoBtn = `<button class="btn btn-sm" style="background-color: var(--warning); border-color: var(--warning); color: #fff;" onclick="openRegExecucao('${activeOciPaciente.id}', ${index})">Resolver Pendência</button>`;
        } else if (proc.status === 'Agendado') {
            const dtAgendamentoHtml = proc.dt_agendamento 
                ? `<span style="font-size:0.75rem; color:var(--text-muted); margin-right:0.75rem;">Agendado: ${formatDate(proc.dt_agendamento)}</span>` 
                : '';
            acaoBtn = `
                <div style="display:flex; align-items:center;">
                    ${dtAgendamentoHtml}
                    <button class="btn btn-sm btn-primary" onclick="openRegExecucao('${activeOciPaciente.id}', ${index})">Atualizar</button>
                </div>
            `;
        } else if (proc.status === 'Pendente') {
            acaoBtn = `<button class="btn btn-sm btn-primary" onclick="openRegExecucao('${activeOciPaciente.id}', ${index})">Atualizar</button>`;
        } else {
            acaoBtn = `<span style="font-size:0.75rem; color:var(--text-muted);">${formatDate(proc.dt_execucao)}</span>`;
        }
        
        item.innerHTML = `
            <div>
                <p style="font-size:0.875rem; font-weight:600;">${proc.nome}</p>
                <p style="font-size:0.75rem; color:var(--text-secondary);">${proc.codigo} • ${statusBadge}</p>
                ${pendenciaLabelHtml}
            </div>
            <div>
                ${acaoBtn}
            </div>
        `;
        container.appendChild(item);
    });
    
    openModal('modal-acompanhar');
}

function openRegExecucao(ociId, index) {
    activeOciPaciente = db_oci_pacientes.find(p => p.id === ociId);
    const proc = activeOciPaciente.procedimentos[index];
    
    document.getElementById('exec-proc-nome').textContent = proc.nome;
    document.getElementById('exec-proc-index').value = index;
    
    // Exibe alerta de pendência se houver
    const alertBox = document.getElementById('pendencia-alerta-box');
    const alertTexto = document.getElementById('pendencia-alerta-texto');
    if (alertBox && alertTexto) {
        if (proc.status_faturamento === 'Com Pendência') {
            alertBox.style.display = 'flex';
            alertTexto.textContent = proc.pendencia_descricao;
        } else {
            alertBox.style.display = 'none';
        }
    }
    
    // Configura o select-exec-status com o status atual do procedimento (se for Pendente, sugere Agendado)
    const selectStatus = document.getElementById('select-exec-status');
    selectStatus.value = proc.status === 'Pendente' ? 'Agendado' : proc.status;
    
    // Altera o label da data de acordo com o status
    const labelData = document.querySelector('label[for="input-dt-realizacao"]');
    if (selectStatus.value === 'Agendado') {
        labelData.textContent = 'Data do Agendamento';
        document.getElementById('input-dt-realizacao').value = proc.dt_agendamento || getHoje();
    } else {
        labelData.textContent = 'Data de Realização';
        document.getElementById('input-dt-realizacao').value = proc.dt_execucao || getHoje();
    }
    
    // Verifica se exige diagnósticos de Neoplasia (Atributo 055 para exames histopatológicos de onco)
    const oncoFields = document.getElementById('onco-required-fields');
    if (proc.exigeDiagnostico) {
        oncoFields.style.display = 'block';
        document.getElementById('input-dt-laudo').required = true;
    } else {
        oncoFields.style.display = 'none';
        document.getElementById('input-dt-laudo').required = false;
    }
    
    // Reseta inputs
    document.getElementById('input-dt-laudo').value = '';
    
    openModal('modal-executar');
}

function handleSaveExecucao(e) {
    e.preventDefault();
    const index = parseInt(document.getElementById('exec-proc-index').value);
    const status = document.getElementById('select-exec-status').value;
    const dtRealizacao = document.getElementById('input-dt-realizacao').value;
    const dtLaudo = document.getElementById('input-dt-laudo').value;
    
    const proc = activeOciPaciente.procedimentos[index];
    
    proc.status = status;
    if (status === 'Realizado') {
        proc.dt_execucao = dtRealizacao;
        if (proc.exigeDiagnostico) {
            proc.dt_diagnostico = dtLaudo;
        }
    } else if (status === 'Agendado') {
        proc.dt_agendamento = dtRealizacao;
    }
    
    // Se resolveu a pendência
    let resolvedMsg = '';
    if (proc.status_faturamento === 'Com Pendência') {
        proc.status_faturamento = 'Pendente'; // Retorna para faturamento normal
        proc.pendencia_descricao = ''; // Limpa a pendência
        resolvedMsg = '\n\n✅ A pendência foi marcada como resolvida e o procedimento reenviado para o faturamento!';
    }
    
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    // Fecha modal de execução e recarrega os dados do modal principal de acompanhamento
    closeModal('modal-executar');
    openAcompanharModal(activeOciPaciente.id);
    renderNavegacaoView();
    renderStats();
}

// 7. Visão de Faturamento
function renderFaturamentoView() {
    const searchVal = document.getElementById('search-faturamento').value.toLowerCase();
    const dateStart = document.getElementById('faturamento-date-start').value;
    const dateEnd = document.getElementById('faturamento-date-end').value;
    
    const listContainer = document.getElementById('faturamento-contas-list');
    listContainer.innerHTML = '';
    
    if (db_oci_pacientes.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem;">Nenhuma conta paciente OCI criada no banco SQL Server.</div>`;
        renderPagination('faturamento-pagination', 0, itemsPerPageFaturamento, currentPageFaturamento, 'changePageFaturamento');
        return;
    }
    
    // 1. Filtrar pacientes de acordo com a busca e o período
    const filtrados = db_oci_pacientes.filter(p => {
        const matchSearch = p.nm_paciente.toLowerCase().includes(searchVal) || 
                            p.id.toLowerCase().includes(searchVal) ||
                            p.oci_nome.toLowerCase().includes(searchVal);
        
        let matchDate = true;
        if (dateStart) {
            matchDate = matchDate && (p.dt_criacao >= dateStart);
        }
        if (dateEnd) {
            matchDate = matchDate && (p.dt_criacao <= dateEnd);
        }
        
        return matchSearch && matchDate;
    });
    
    const totalItems = filtrados.length;
    
    // 2. Fatiar dados para a página ativa
    const start = (currentPageFaturamento - 1) * itemsPerPageFaturamento;
    const end = start + itemsPerPageFaturamento;
    const paginados = filtrados.slice(start, end);
    
    if (paginados.length === 0) {
        listContainer.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem;">Nenhuma conta paciente OCI localizada para o filtro atual.</div>`;
        renderPagination('faturamento-pagination', 0, itemsPerPageFaturamento, currentPageFaturamento, 'changePageFaturamento');
        return;
    }
    
    paginados.forEach(p => {
        // Verifica se há alertas de vigência
        const prazoInfo = getPrazoApac(p.dt_criacao);
        let alertHtml = '';
        if (prazoInfo.mesesRestantes <= 0) {
            alertHtml = `
                <div class="alert-box">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    Atenção: APAC expirou ou expira na competência atual (${prazoInfo.competenciaLimite})! Cobrança sob alto risco de glosa.
                </div>
            `;
        }
        
        const card = document.createElement('div');
        card.className = 'billing-card-detail';
        card.innerHTML = `
            <div class="billing-header">
                <div>
                    <span class="billing-patient">${p.nm_paciente}</span>
                    <span style="display:block; font-size:0.75rem; color:var(--text-secondary);">
                        Prontuário: <strong>${p.cd_paciente}</strong> | CPF: <strong>${p.nr_cpf}</strong> | CNS: <strong>${p.nr_cns}</strong> | Unidade: <strong>${p.unidade || 'HUCM'}</strong>
                    </span>
                    <span style="display:block; font-size:0.75rem; color:var(--info);">
                        Linha OCI: <strong>${p.oci_codigo} - ${p.oci_nome}</strong>
                    </span>
                </div>
                <div style="text-align:right;">
                    <span class="badge ${p.status === 'Fechada' ? 'badge-success' : 'badge-info'}" style="font-size:0.75rem;">
                        ${p.status === 'Fechada' ? 'Conta Paciente Fechada' : 'Conta Paciente Ativa'}
                    </span>
                    <span style="display:block; font-size:0.75rem; color:var(--text-muted); margin-top:0.25rem;">Criada em: ${formatDate(p.dt_criacao)}</span>
                </div>
            </div>
            
            ${alertHtml}
            
            <div class="billing-items-list">
                <div style="display: flex; justify-content: space-between; align-items: center; font-size:0.8rem; font-weight:700; color:var(--text-secondary); text-transform:uppercase; margin-bottom:0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                    <span>Procedimentos da Linha de Cuidado OCI</span>
                    ${(() => {
                        const elegiveis = p.procedimentos.filter(proc => proc.status === 'Realizado' && !proc.id_remessa && proc.status_faturamento === 'Pendente');
                        return elegiveis.length > 0 
                            ? `<button class="btn btn-sm btn-primary" onclick="faturarTodosProcedimentos('${p.id}')">Enviar todos disponíveis</button>`
                            : '';
                    })()}
                </div>
                ${renderBillingItems(p)}
            </div>
        `;
        listContainer.appendChild(card);
    });
    
    // 3. Renderizar controles de paginação
    renderPagination('faturamento-pagination', totalItems, itemsPerPageFaturamento, currentPageFaturamento, 'changePageFaturamento');
}

function renderBillingItems(ociPaciente) {
    let html = '';
    ociPaciente.procedimentos.forEach((proc, index) => {
        let statusBadge = '';
        let acoesHtml = '';
        
        // Mapeia badge de execução
        let execStatusBadge = '';
        if (proc.status === 'Pendente') execStatusBadge = '<span class="badge badge-warning btn-sm" style="font-size:0.65rem;">Execução Pendente</span>';
        else if (proc.status === 'Agendado') execStatusBadge = '<span class="badge badge-info btn-sm" style="font-size:0.65rem;">Execução Agendada</span>';
        else execStatusBadge = `<span class="badge badge-success btn-sm" style="font-size:0.65rem;">Realizado em ${formatDate(proc.dt_execucao)}</span>`;

        // Lógica de Faturamento
        if (proc.id_remessa) {
            statusBadge = `<span class="badge badge-info"><span class="badge-dot"></span>Lote: ${proc.id_remessa}</span>`;
            acoesHtml = `<span style="font-size:0.75rem; color:var(--text-secondary);">Transmitido SUS</span>`;
        } else if (proc.status_faturamento === 'Com Pendência') {
            statusBadge = '<span class="badge badge-warning" style="background-color:var(--warning-glow); color:var(--warning);"><span class="badge-dot" style="background-color:var(--warning);"></span>Com Pendência</span>';
            acoesHtml = `<span style="font-size:0.75rem; color:var(--warning); font-weight:600; display:block; text-align:right;" title="${proc.pendencia_descricao}">Aguardando Navegação</span>`;
        } else if (proc.status_faturamento === 'Pendente') {
            statusBadge = '<span class="badge badge-warning"><span class="badge-dot"></span>Não Faturado</span>';
            if (proc.status === 'Realizado') {
                acoesHtml = `
                    <button class="btn btn-sm btn-primary" onclick="faturarProcedimento('${ociPaciente.id}', ${index})">Enviar SUS</button>
                    <button class="btn btn-sm" style="background-color:var(--danger-glow); border-color:var(--danger); color:var(--danger);" onclick="openGlosaModal('${ociPaciente.id}', ${index})">Glosar</button>
                    <button class="btn btn-sm" style="background-color:var(--warning-glow); border-color:var(--warning); color:var(--warning);" onclick="openPendenciaModal('${ociPaciente.id}', ${index})">Alerta de Pendências</button>
                `;
            } else {
                acoesHtml = `<span style="font-size:0.75rem; color:var(--text-muted);">Aguardando realização pela Navegação</span>`;
            }
        } else if (proc.status_faturamento === 'Faturado') {
            statusBadge = `<span class="badge badge-success"><span class="badge-dot"></span>Faturado (${proc.competencia})</span>`;
            acoesHtml = `
                <div style="display:flex; flex-direction:column; gap:0.25rem; align-items:flex-end;">
                    <div style="display:flex; gap:0.25rem;">
                        <button class="btn btn-sm" style="background-color:var(--danger-glow); border-color:var(--danger); color:var(--danger);" onclick="openGlosaModal('${ociPaciente.id}', ${index})">Glosar</button>
                        <button class="btn btn-sm" style="background-color:var(--warning-glow); border-color:var(--warning); color:var(--warning);" onclick="openPendenciaModal('${ociPaciente.id}', ${index})">Alerta de Pendências</button>
                    </div>
                    <span style="display:block; font-size:0.7rem; color:var(--success); margin-top:0.25rem;">Aguardando Lote</span>
                </div>
            `;
        } else if (proc.status_faturamento === 'Glosado') {
            statusBadge = `<span class="badge badge-danger"><span class="badge-dot"></span>GLOSADO SUS</span>`;
            acoesHtml = `
                <div style="text-align:right;">
                    <span style="display:block; font-size:0.7rem; color:var(--danger); font-weight:600; margin-bottom:0.25rem;">Motivo: ${proc.motivo_glosa}</span>
                    <div style="display:flex; gap:0.25rem; justify-content:flex-end;">
                        <button class="btn btn-sm btn-primary" onclick="reapresentarProcedimento('${ociPaciente.id}', ${index})">Corrigir e Reapresentar</button>
                        <button class="btn btn-sm" style="background-color:var(--warning-glow); border-color:var(--warning); color:var(--warning);" onclick="openPendenciaModal('${ociPaciente.id}', ${index})">Alerta de Pendências</button>
                    </div>
                </div>
            `;
        } else if (proc.status_faturamento === 'Reapresentado') {
            statusBadge = `<span class="badge badge-info"><span class="badge-dot"></span>Reapresentado (${proc.competencia})</span>`;
            acoesHtml = `<span style="font-size:0.75rem; color:var(--success); display:block; text-align:right;">Pronto p/ Lote</span>`;
        }
        
        let oncoMetaHtml = '';
        if (proc.exigeDiagnostico && proc.dt_diagnostico) {
            oncoMetaHtml = `<span style="display:inline-block; margin-left:0.5rem; color:var(--success); font-size:0.7rem;">Laudo Neoplasia: ${formatDate(proc.dt_diagnostico)}</span>`;
        }
        
        let pendenciaTextHtml = '';
        if (proc.status_faturamento === 'Com Pendência' && proc.pendencia_descricao) {
            pendenciaTextHtml = `<div style="font-size:0.72rem; color:var(--warning); margin-top:0.25rem;"><strong>Pendência:</strong> ${proc.pendencia_descricao}</div>`;
        }
        
        html += `
            <div class="billing-item">
                <div class="billing-item-info">
                    <span class="billing-item-name">${proc.nome}</span>
                    <div class="billing-item-meta">
                        <span>Cód: <strong>${proc.codigo}</strong></span>
                        <span style="margin-left:0.5rem;">Qtd: <strong>${proc.qtd}</strong></span>
                        <span style="margin-left:0.5rem;">Valor SUS: <strong>R$ 0,00 (Secundário APAC)</strong></span>
                        ${oncoMetaHtml}
                    </div>
                    ${pendenciaTextHtml}
                    <div style="margin-top:0.25rem; display:flex; gap:0.25rem; align-items:center;">
                        ${execStatusBadge}
                        ${statusBadge}
                    </div>
                </div>
                <div class="billing-item-actions">
                    ${acoesHtml}
                </div>
            </div>
        `;
    });
    return html;
}

function faturarProcedimento(ociPacienteId, index) {
    const oci = db_oci_pacientes.find(p => p.id === ociPacienteId);
    const proc = oci.procedimentos[index];
    
    // Validação preventiva no faturamento
    if (proc.exigeDiagnostico && !proc.dt_diagnostico) {
        alert(`Erro de Regra SUS: Procedimento ${proc.codigo} de Oncologia exige a Data do Diagnóstico da Neoplasia (Portaria 1.824). A Navegação precisa preencher este campo.`);
        return;
    }
    
    // Popula campos ocultos e labels do modal
    document.getElementById('env-sus-paciente-id').value = ociPacienteId;
    document.getElementById('env-sus-proc-index').value = index;
    document.getElementById('env-sus-paciente-nome').textContent = oci.nm_paciente;
    document.getElementById('env-sus-proc-nome').textContent = proc.nome;
    
    // Popula select de competências
    const compSelect = document.getElementById('env-sus-competencia-select');
    compSelect.innerHTML = '';
    const compAtual = getCompetenciaAtual();
    const compSeguinte = getCompetenciaAtivaSeguinte();
    
    const opt1 = document.createElement('option');
    opt1.value = compAtual;
    opt1.textContent = `${compAtual} (Competência Ativa)`;
    compSelect.appendChild(opt1);
    
    const opt2 = document.createElement('option');
    opt2.value = compSeguinte;
    opt2.textContent = `${compSeguinte} (Próxima Competência)`;
    compSelect.appendChild(opt2);
    
    // Popula select de remessas
    const loteSelect = document.getElementById('env-sus-lote-select');
    loteSelect.innerHTML = '';
    
    // Opção de criar nova remessa
    const loteNovoNum = 'REM-' + getHoje().replace(/-/g, '') + '-' + Math.floor(100 + Math.random() * 900);
    const optNovo = document.createElement('option');
    optNovo.value = loteNovoNum;
    optNovo.dataset.isNew = 'true';
    optNovo.textContent = `[Nova Remessa] ${loteNovoNum}`;
    loteSelect.appendChild(optNovo);
    
    // Opções de lotes em digitação
    const lotesAbertos = db_oci_remessas.filter(r => r.status === 'Em Digitação');
    lotesAbertos.forEach(r => {
        const optAberto = document.createElement('option');
        optAberto.value = r.id;
        optAberto.dataset.isNew = 'false';
        optAberto.dataset.competencia = r.competencia;
        optAberto.textContent = `[Lote Aberto] ${r.id} (Comp: ${r.competencia})`;
        loteSelect.appendChild(optAberto);
    });
    
    // Ao mudar o lote, herda competência
    loteSelect.onchange = () => {
        const selectedOpt = loteSelect.selectedOptions[0];
        if (selectedOpt && selectedOpt.dataset.isNew === 'false') {
            compSelect.value = selectedOpt.dataset.competencia;
            compSelect.disabled = true;
        } else {
            compSelect.disabled = false;
        }
    };
    
    compSelect.disabled = false;
    openModal('modal-enviar-sus');
}

function faturarTodosProcedimentos(ociPacienteId) {
    try {
        console.log("faturarTodosProcedimentos chamado para paciente:", ociPacienteId);
        const oci = db_oci_pacientes.find(p => p.id === ociPacienteId);
        if (!oci) {
            alert("Erro: Paciente não encontrado com ID: " + ociPacienteId);
            return;
        }
        
        const elegiveis = oci.procedimentos.filter(proc => proc.status === 'Realizado' && !proc.id_remessa && proc.status_faturamento === 'Pendente');
        
        if (elegiveis.length === 0) {
            alert('Não há procedimentos disponíveis para faturamento.');
            return;
        }
        
        // Validação preventiva no faturamento em lote para exames de Oncologia que exigem laudo
        const pendentesLaudo = elegiveis.filter(proc => proc.exigeDiagnostico && !proc.dt_diagnostico);
        if (pendentesLaudo.length > 0) {
            const nomesProcs = pendentesLaudo.map(proc => `${proc.nome} (Cód: ${proc.codigo})`).join(', ');
            alert(`Erro de Regra SUS: Os seguintes procedimentos exigem a Data do Diagnóstico da Neoplasia (Portaria 1.824) e estão sem a data preenchida: ${nomesProcs}. A Navegação precisa preencher este campo.`);
            return;
        }
        
        // Popula campos ocultos e labels do modal
        const idInput = document.getElementById('env-sus-paciente-id');
        const indexInput = document.getElementById('env-sus-proc-index');
        const nomeLabel = document.getElementById('env-sus-paciente-nome');
        const procLabel = document.getElementById('env-sus-proc-nome');
        
        let ausentes = [];
        if (!idInput) ausentes.push('env-sus-paciente-id');
        if (!indexInput) ausentes.push('env-sus-proc-index');
        if (!nomeLabel) ausentes.push('env-sus-paciente-nome');
        if (!procLabel) ausentes.push('env-sus-proc-nome');
        
        if (ausentes.length > 0) {
            alert("Erro: Os seguintes elementos do modal de faturamento não foram encontrados no HTML: " + ausentes.join(', '));
            return;
        }
        
        idInput.value = ociPacienteId;
        indexInput.value = 'TODOS';
        nomeLabel.textContent = oci.nm_paciente;
        procLabel.textContent = `Todos os procedimentos disponíveis (${elegiveis.length} item/itens)`;
        
        // Popula select de competências
        const compSelect = document.getElementById('env-sus-competencia-select');
        if (!compSelect) {
            alert("Erro: Elemento env-sus-competencia-select não encontrado.");
            return;
        }
        compSelect.innerHTML = '';
        const compAtual = getCompetenciaAtual();
        const compSeguinte = getCompetenciaAtivaSeguinte();
        
        const opt1 = document.createElement('option');
        opt1.value = compAtual;
        opt1.textContent = `${compAtual} (Competência Ativa)`;
        compSelect.appendChild(opt1);
        
        const opt2 = document.createElement('option');
        opt2.value = compSeguinte;
        opt2.textContent = `${compSeguinte} (Próxima Competência)`;
        compSelect.appendChild(opt2);
        
        // Popula select de remessas
        const loteSelect = document.getElementById('env-sus-lote-select');
        if (!loteSelect) {
            alert("Erro: Elemento env-sus-lote-select não encontrado.");
            return;
        }
        loteSelect.innerHTML = '';
        
        // Opção de criar nova remessa
        const loteNovoNum = 'REM-' + getHoje().replace(/-/g, '') + '-' + Math.floor(100 + Math.random() * 900);
        const optNovo = document.createElement('option');
        optNovo.value = loteNovoNum;
        optNovo.dataset.isNew = 'true';
        optNovo.textContent = `[Nova Remessa] ${loteNovoNum}`;
        loteSelect.appendChild(optNovo);
        
        // Opções de lotes em digitação
        const lotesAbertos = db_oci_remessas.filter(r => r.status === 'Em Digitação');
        lotesAbertos.forEach(r => {
            const optAberto = document.createElement('option');
            optAberto.value = r.id;
            optAberto.dataset.isNew = 'false';
            optAberto.dataset.competencia = r.competencia;
            optAberto.textContent = `[Lote Aberto] ${r.id} (Comp: ${r.competencia})`;
            loteSelect.appendChild(optAberto);
        });
        
        // Ao mudar o lote, herda competência
        loteSelect.onchange = () => {
            const selectedOpt = loteSelect.selectedOptions[0];
            if (selectedOpt && selectedOpt.dataset.isNew === 'false') {
                compSelect.value = selectedOpt.dataset.competencia;
                compSelect.disabled = true;
            } else {
                compSelect.disabled = false;
            }
        };
        
        compSelect.disabled = false;
        openModal('modal-enviar-sus');
        console.log("Modal de faturamento em lote aberto com sucesso.");
    } catch (err) {
        alert("Erro de execução em faturarTodosProcedimentos: " + err.message + "\nStack: " + err.stack);
    }
}

function handleSaveEnviarSus(e) {
    e.preventDefault();
    const ociPacienteId = document.getElementById('env-sus-paciente-id').value;
    const indexVal = document.getElementById('env-sus-proc-index').value;
    const remessaId = document.getElementById('env-sus-lote-select').value;
    const competencia = document.getElementById('env-sus-competencia-select').value;
    
    const oci = db_oci_pacientes.find(p => p.id === ociPacienteId);
    
    if (indexVal === 'TODOS') {
        const elegiveis = oci.procedimentos.filter(proc => proc.status === 'Realizado' && !proc.id_remessa && proc.status_faturamento === 'Pendente');
        elegiveis.forEach(proc => {
            proc.status_faturamento = 'Faturado';
            proc.competencia = competencia;
            proc.id_remessa = remessaId;
        });
    } else {
        const index = parseInt(indexVal);
        const proc = oci.procedimentos[index];
        proc.status_faturamento = 'Faturado';
        proc.competencia = competencia;
        proc.id_remessa = remessaId;
    }
    
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    // Cria a remessa se não existir
    const remessaJaExiste = db_oci_remessas.find(r => r.id === remessaId);
    if (!remessaJaExiste) {
        const novaRemessa = {
            id: remessaId,
            competencia: competencia,
            dt_fechamento: getHoje(),
            qtd_contas: 0,
            qtd_procedimentos: 0,
            valor_total: 0,
            status: 'Em Digitação'
        };
        db_oci_remessas.push(novaRemessa);
    }
    
    saveDb('oci_db_remessas', db_oci_remessas);
    recalcularRemessasValores();
    
    closeModal('modal-enviar-sus');
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
    
    if (indexVal === 'TODOS') {
        alert(`Todos os procedimentos disponíveis foram faturados e enviados com sucesso para o lote ${remessaId}!`);
    } else {
        const index = parseInt(indexVal);
        const proc = oci.procedimentos[index];
        alert(`Procedimento ${proc.nome} faturado e enviado com sucesso para o lote ${remessaId}!`);
    }
}

function openGlosaModal(ociPacienteId, index) {
    activeOciPaciente = db_oci_pacientes.find(p => p.id === ociPacienteId);
    activeBillingItem = index;
    
    document.getElementById('glosa-proc-nome').textContent = activeOciPaciente.procedimentos[index].nome;
    openModal('modal-glosar');
}

function handleSaveGlosa(e) {
    e.preventDefault();
    const motivo = document.querySelector('input[name="motivo_glosa"]:checked').value;
    
    const proc = activeOciPaciente.procedimentos[activeBillingItem];
    proc.status_faturamento = 'Glosado';
    proc.motivo_glosa = motivo;
    
    saveDb('oci_db_pacientes', db_oci_pacientes);
    closeModal('modal-glosar');
    renderFaturamentoView();
    renderStats();
}

function reapresentarProcedimento(ociPacienteId, index) {
    const oci = db_oci_pacientes.find(p => p.id === ociPacienteId);
    const proc = oci.procedimentos[index];
    
    // Simula correção cadastral
    if (proc.motivo_glosa === 'Falta Data Diagnóstico (Portaria Onco)') {
        // Se a glosa foi por falta de data de laudo, insere uma data fictícia de correção
        proc.dt_diagnostico = getHoje();
        alert('Dados corrigidos: Data do laudo histopatológico preenchida.');
    } else if (proc.motivo_glosa === 'CPF/CNS Inválido ou Inconsistente') {
        oci.nr_cpf = '000.111.222-33';
        oci.nr_cns = '700000000000000';
        saveDb('oci_db_pacientes', db_oci_pacientes);
        alert('Dados corrigidos: Cadastro de CPF e Cartão SUS atualizado.');
    }
    
    proc.status_faturamento = 'Reapresentado';
    proc.competencia = getCompetenciaAtivaSeguinte();
    saveDb('oci_db_pacientes', db_oci_pacientes);
    renderFaturamentoView();
    renderStats();
    
    alert(`Item reapresentado com sucesso! Incluído na competência subsequente: ${proc.competencia}.`);
}

function openPendenciaModal(ociPacienteId, index) {
    const oci = db_oci_pacientes.find(p => p.id === ociPacienteId);
    const proc = oci.procedimentos[index];
    
    document.getElementById('pend-paciente-id').value = ociPacienteId;
    document.getElementById('pend-proc-index').value = index;
    document.getElementById('pend-paciente-nome').textContent = oci.nm_paciente;
    document.getElementById('pend-proc-nome').textContent = proc.nome;
    document.getElementById('input-pendencia-descricao').value = '';
    
    openModal('modal-pendencia');
}

function handleSavePendencia(e) {
    e.preventDefault();
    const ociPacienteId = document.getElementById('pend-paciente-id').value;
    const index = parseInt(document.getElementById('pend-proc-index').value);
    const descricao = document.getElementById('input-pendencia-descricao').value.trim();
    
    const oci = db_oci_pacientes.find(p => p.id === ociPacienteId);
    const proc = oci.procedimentos[index];
    
    proc.status_faturamento = 'Com Pendência';
    proc.pendencia_descricao = descricao;
    
    saveDb('oci_db_pacientes', db_oci_pacientes);
    closeModal('modal-pendencia');
    renderFaturamentoView();
    renderStats();
    
    alert(`Alerta de Pendência enviado para a Navegação para o procedimento ${proc.nome}!`);
}

window.openPendenciaModal = openPendenciaModal;
window.handleSavePendencia = handleSavePendencia;

// 8. Métricas e Estatísticas Gerais
function renderStats() {
    // Médico: Atendimentos Pendentes no SoulMV
    const atendimentosPendentes = db_soulmv.filter(at => at.prestador === 'Dr. Fernando Silva' && !at.fl_oci_criada).length;
    document.getElementById('stat-medico-pendentes').textContent = atendimentosPendentes;
    
    // Navegação: Total de pacientes ativos na OCI (que não estão fechadas)
    const ociAtivas = db_oci_pacientes.filter(p => p.status !== 'Fechada').length;
    document.getElementById('stat-navegacao-ativas').textContent = ociAtivas;
    
    // Faturamento: Procedimentos faturados e glosados
    let totalFaturados = 0;
    let totalGlosados = 0;
    let totalRealizados = 0;
    
    db_oci_pacientes.forEach(p => {
        p.procedimentos.forEach(proc => {
            if (proc.status === 'Realizado') totalRealizados++;
            // Apenas exames faturados/reapresentados que ainda NÃO estão associados a nenhum lote de remessa
            if ((proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado') && !proc.id_remessa) {
                totalFaturados++;
            }
            if (proc.status_faturamento === 'Glosado') totalGlosados++;
        });
    });
    
    document.getElementById('stat-faturamento-faturados').textContent = totalFaturados;
    document.getElementById('stat-faturamento-glosados').textContent = totalGlosados;
    
    // Atualiza estatística de remessas/faturas geradas
    const statRemessas = document.getElementById('stat-faturamento-remessas');
    if (statRemessas) {
        statRemessas.textContent = db_oci_remessas.length;
    }
}

// 9. Helpers de Data e Formatação
function getHoje() {
    const hoje = new Date();
    return hoje.toISOString().split('T')[0];
}

function getCompetenciaAtual() {
    const hoje = new Date();
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${mes}/${ano}`;
}

function getCompetenciaAtivaSeguinte() {
    const hoje = new Date();
    hoje.setMonth(hoje.getMonth() + 1);
    const mes = String(hoje.getMonth() + 1).padStart(2, '0');
    const ano = hoje.getFullYear();
    return `${mes}/${ano}`;
}

function formatDate(dateStr) {
    if (!dateStr) return '-';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function getPrazoApac(dtCriacaoStr) {
    const dtCriacao = new Date(dtCriacaoStr);
    
    // APAC expira em 2 competências (mês de criação + 1 mês)
    const dtLimite = new Date(dtCriacao);
    dtLimite.setMonth(dtLimite.getMonth() + 1);
    
    const mesLimite = String(dtLimite.getMonth() + 1).padStart(2, '0');
    const anoLimite = dtLimite.getFullYear();
    const competenciaLimite = `${mesLimite}/${anoLimite}`;
    
    const hoje = new Date();
    // Diferença em meses aproximada
    const diffTime = dtLimite - hoje;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let mesesRestantes = 0;
    if (diffDays > 0) {
        mesesRestantes = Math.ceil(diffDays / 30);
    } else {
        mesesRestantes = 0;
    }
    
    let statusTexto = '';
    if (diffDays < 0) statusTexto = 'VENCIDA';
    else if (diffDays <= 15) statusTexto = 'CRÍTICO';
    else statusTexto = `${mesesRestantes} competência(s) restante(s)`;
    
    return {
        competenciaLimite,
        mesesRestantes: diffDays < 0 ? 0 : mesesRestantes,
        statusTexto
    };
}

// 10. Funções Gerais de Modais
function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    if (typeof modalId === 'string') {
        document.getElementById(modalId).classList.remove('active');
    } else {
        // Fechar todos
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    }
}

// 11. Funções de Faturamento e Lote de Remessa SUS
function openGerarRemessaModal() {
    // ID do lote sugerido
    const loteNovoNum = 'REM-' + getHoje().replace(/-/g, '') + '-' + Math.floor(100 + Math.random() * 900);
    
    // Competências SUS elegíveis
    const compSelect = document.getElementById('remessa-competencia-input');
    compSelect.innerHTML = '';
    const compAtual = getCompetenciaAtual();
    const compSeguinte = getCompetenciaAtivaSeguinte();
    
    const opt1 = document.createElement('option');
    opt1.value = compAtual;
    opt1.textContent = `${compAtual} (Competência Ativa)`;
    compSelect.appendChild(opt1);
    
    const opt2 = document.createElement('option');
    opt2.value = compSeguinte;
    opt2.textContent = `${compSeguinte} (Próxima Competência)`;
    compSelect.appendChild(opt2);
    
    // Popula o select de Remessa/Lote (Novo ou Existente aberto)
    const loteSelect = document.getElementById('remessa-id-select');
    loteSelect.innerHTML = '';
    
    // Opção Novo Lote
    const optNovo = document.createElement('option');
    optNovo.value = loteNovoNum;
    optNovo.dataset.isNew = 'true';
    optNovo.textContent = `[Novo Lote] ${loteNovoNum}`;
    loteSelect.appendChild(optNovo);
    
    // Opções de Lotes Existentes Abertos
    const lotesAbertos = db_oci_remessas.filter(r => r.status === 'Em Digitação');
    lotesAbertos.forEach(r => {
        const optAberto = document.createElement('option');
        optAberto.value = r.id;
        optAberto.dataset.isNew = 'false';
        optAberto.dataset.competencia = r.competencia;
        optAberto.textContent = `[Lote Aberto] ${r.id} (Comp: ${r.competencia})`;
        loteSelect.appendChild(optAberto);
    });
    
    // Ao alterar o lote, sincroniza a competência se for lote existente
    loteSelect.onchange = () => {
        const selectedOpt = loteSelect.selectedOptions[0];
        if (selectedOpt && selectedOpt.dataset.isNew === 'false') {
            compSelect.value = selectedOpt.dataset.competencia;
            compSelect.disabled = true;
        } else {
            compSelect.disabled = false;
        }
    };
    
    // Inicializa estado do campo competência
    compSelect.disabled = false;
    
    // Listar pacientes com itens faturados elegíveis (sem remessa)
    const listCheck = document.getElementById('remessa-pacientes-checklist');
    listCheck.innerHTML = '';
    
    let pacientesElegiveis = [];
    
    db_oci_pacientes.forEach(p => {
        // Verifica se tem algum procedimento com status_faturamento == 'Faturado' ou 'Reapresentado' E sem id_remessa (a nível de procedimento)
        const examesFaturados = p.procedimentos.filter(proc => 
            (proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado') && !proc.id_remessa
        );
        
        if (examesFaturados.length > 0) {
            // Verifica se o paciente já tem uma remessa aberta (em digitação) para sugerir como destino
            const remessaAbertaPaciente = getRemessaAbertaDoPaciente(p);
            pacientesElegiveis.push({
                paciente: p,
                exames: examesFaturados,
                remessaExistente: remessaAbertaPaciente
            });
        }
    });
    
    if (pacientesElegiveis.length === 0) {
        listCheck.innerHTML = `<p style="color: var(--text-muted); font-size: 0.8rem; padding: 0.5rem 0; grid-column: 1/-1;">Nenhuma conta paciente OCI com exames faturados aguardando remessa.</p>`;
    } else {
        pacientesElegiveis.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'checklist-item';
            const remessaTag = item.remessaExistente
                ? `<span style="color:var(--primary);font-weight:700;">↪ Remessa existente: ${item.remessaExistente.id}</span>`
                : '';
            itemDiv.innerHTML = `
                <input type="checkbox" id="rem-pac-${index}" value="${item.paciente.id}" checked>
                <div class="checklist-item-label">
                    <label for="rem-pac-${index}"><strong>${item.paciente.nm_paciente}</strong> (${item.paciente.id})</label>
                    <span class="checklist-item-code">
                        ${item.paciente.oci_nome} • <strong>${item.exames.length} novo(s) exame(s) prontos</strong> ${remessaTag}
                    </span>
                </div>
            `;
            listCheck.appendChild(itemDiv);
        });
    }
    
    openModal('modal-gerar-remessa');
}

function handleSaveRemessa(e) {
    e.preventDefault();
    const remessaId = document.getElementById('remessa-id-select').value;
    const competencia = document.getElementById('remessa-competencia-input').value;
    
    // Coleta pacientes selecionados
    const pacientesSelecionados = [];
    const checkboxes = document.querySelectorAll('#remessa-pacientes-checklist input[type="checkbox"]');
    checkboxes.forEach(chk => {
        if (chk.checked) {
            pacientesSelecionados.push(chk.value);
        }
    });
    
    // Permite criar remessa sem pacientes selecionados
    if (pacientesSelecionados.length === 0) {
        console.log('Criando remessa vazia sem pacientes associados.');
    }
    
    // Vincula a remessa ao nível de PROCEDIMENTO (permite múltiplas remessas por paciente)
    let totalItensRemetidos = 0;
    let valorTotalRemetido = 0;
    
    db_oci_pacientes = db_oci_pacientes.map(p => {
        if (pacientesSelecionados.includes(p.id)) {
            // Determina o id_remessa destino: usa diretamente a remessa selecionada
            const idRemessaDestino = remessaId;
            
            // Marca o id_remessa em cada procedimento faturado SEM remessa ainda
            const procsAtualizados = p.procedimentos.map(proc => {
                if ((proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado') && !proc.id_remessa) {
                    totalItensRemetidos++;
                    valorTotalRemetido += proc.valor || 30.00;
                    return { ...proc, id_remessa: idRemessaDestino };
                }
                return proc;
            });
            return { ...p, procedimentos: procsAtualizados };
        }
        return p;
    });
    
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    // Cria a nova remessa no banco apenas se ela ainda não existir
    // (pacientes com remessa existente aberta já foram redirecionados acima)
    const remessaJaExiste = db_oci_remessas.find(r => r.id === remessaId);
    if (!remessaJaExiste) {
        const novaRemessa = {
            id: remessaId,
            competencia: competencia,
            dt_fechamento: getHoje(),
            qtd_contas: 0,
            qtd_procedimentos: 0,
            valor_total: 0,
            status: 'Em Digitação'
        };
        db_oci_remessas.push(novaRemessa);
    }
    
    saveDb('oci_db_remessas', db_oci_remessas);
    // Recalcula totais de todas as remessas após associação
    recalcularRemessasValores();
    
    closeModal('modal-gerar-remessa');
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
    
    alert(`Lote de Remessa ${remessaId} criado como "Em Aberto" com sucesso!\nVocê pode adicionar exames de outros atendimentos ou fechá-lo a qualquer momento.`);
}

function renderLotesRemessa() {
    const listRemessas = document.getElementById('lista-lotes-remessa');
    if (!listRemessas) return;
    
    listRemessas.innerHTML = '';
    
    if (db_oci_remessas.length === 0) {
        listRemessas.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 2rem 0;">Nenhuma remessa (lote de fatura) gerada ainda.</div>`;
        return;
    }
    
    db_oci_remessas.forEach(r => {
        let badgeClass = 'badge-info';
        let statusLabel = r.status;
        let acoesHtml = '';
        
        // Busca pacientes que têm ao menos 1 procedimento nesta remessa
        const pacientesIds = new Set();
        db_oci_pacientes.forEach(p => {
            p.procedimentos.forEach(proc => {
                if (proc.id_remessa === r.id) pacientesIds.add(p.id);
            });
        });
        const pacientesLote = db_oci_pacientes.filter(p => pacientesIds.has(p.id));
        
        let listaPacientesHtml = '';
        pacientesLote.forEach(p => {
            // Progresso geral da OCI do paciente
            const totalOci = p.procedimentos.length;
            const realizadosOci = p.procedimentos.filter(proc => proc.status === 'Realizado').length;
            const faturadosOci = p.procedimentos.filter(proc => proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado').length;
            const pendentesOci = totalOci - faturadosOci;
            
            // Progresso específico desta remessa
            const examesNestaRemessa = p.procedimentos.filter(proc => proc.id_remessa === r.id).length;
            const examesProntos = p.procedimentos.filter(proc => proc.id_remessa === r.id && (proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado')).length;
            
            let statusContaBadge = examesProntos === examesNestaRemessa
                ? `<span class="badge badge-success" style="font-size:0.6rem; padding:0.1rem 0.3rem;">✓ ${examesProntos}/${examesNestaRemessa} nesta remessa</span>`
                : `<span class="badge badge-warning" style="font-size:0.6rem; padding:0.1rem 0.3rem;">⏳ ${examesProntos}/${examesNestaRemessa} nesta remessa</span>`;
            
            // Badge de pendentes totais na OCI
            const pendenteBadge = pendentesOci > 0
                ? `<span class="badge badge-danger" style="font-size:0.58rem; padding:0.08rem 0.3rem; margin-left:0.2rem;" title="${pendentesOci} proc(s) ainda pendentes de faturamento na OCI">${pendentesOci} pendente${pendentesOci > 1 ? 's' : ''}</span>`
                : '';
            
            let btnTransferir = '';
            if (r.status === 'Em Digitação') {
                btnTransferir = `<button class="btn btn-sm" style="font-size:0.6rem; padding:0.1rem 0.3rem; margin-left:0.5rem; background-color:rgba(0,0,0,0.03);" onclick="openTransferirModal('${p.id}', '${r.id}')">Transferir</button>`;
            }
            
            listaPacientesHtml += `
                <div style="font-size:0.75rem; display:flex; justify-content:space-between; align-items:center; padding:0.3rem 0; border-bottom:1px solid rgba(0,0,0,0.04);">
                    <div>
                        <span style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">• <strong>${p.nm_paciente}</strong></span>
                        <span style="display:block; font-size:0.65rem; color:var(--text-muted); margin-left:0.75rem;">${realizadosOci}/${totalOci} proc(s) realizados na OCI • ${faturadosOci} faturado(s)</span>
                    </div>
                    <div style="display:flex; align-items:center; flex-wrap:wrap; gap:0.15rem; justify-content:flex-end;">
                        ${statusContaBadge}
                        ${pendenteBadge}
                        ${btnTransferir}
                    </div>
                </div>
            `;
        });
        
        if (listaPacientesHtml === '') {
            listaPacientesHtml = '<div style="font-size:0.7rem; color:var(--text-muted); padding:0.25rem 0;">Sem pacientes vinculados</div>';
        }
        
        if (r.status === 'Em Digitação') {
            badgeClass = 'badge-warning';
            statusLabel = 'Em Aberto / Digitação';
            acoesHtml = `
                <div style="display:flex; gap:0.25rem; width:100%; justify-content:space-between; margin-top:0.5rem;">
                    <button class="btn btn-sm btn-primary" style="font-size:0.65rem; padding:0.2rem 0.5rem; flex:1;" onclick="fecharRemessa('${r.id}')">Fechar Lote</button>
                    <button class="btn btn-sm" style="font-size:0.65rem; padding:0.2rem 0.5rem; background-color:var(--danger-glow); color:var(--danger); border-color:var(--danger);" onclick="excluirRemessa('${r.id}')">Excluir</button>
                </div>
            `;
        } else if (r.status === 'Transmitido SUS') {
            badgeClass = 'badge-info';
            statusLabel = 'Fechada / Transmitida';
            acoesHtml = `
                <div style="display:flex; flex-direction:column; gap:0.5rem; width:100%; margin-top:0.5rem;">
                    <div style="display:flex; gap:0.25rem;">
                        <button class="btn btn-sm" style="font-size:0.65rem; padding:0.2rem 0.5rem; flex:1; background-color:var(--info-glow); color:var(--info); border-color:var(--info);" onclick="exportarRemessaTXT('${r.id}')">Exportar SUS (.TXT)</button>
                        <button class="btn btn-sm" style="font-size:0.65rem; padding:0.2rem 0.5rem;" onclick="reabrirRemessa('${r.id}')">Reabrir Lote</button>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid var(--border-color); padding-top:0.5rem;">
                        <span style="font-size:0.75rem; font-weight:600; color:var(--info);">Simular Auditoria SUS:</span>
                        <div style="display:flex; gap:0.25rem;">
                            <button class="btn btn-sm" style="font-size:0.6rem; padding:0.15rem 0.4rem; background-color:var(--success-glow); color:var(--success); border-color:var(--success);" onclick="auditarLote('${r.id}', 'Processada / Aprovada')">Aprovar</button>
                            <button class="btn btn-sm" style="font-size:0.6rem; padding:0.15rem 0.4rem; background-color:var(--danger-glow); color:var(--danger); border-color:var(--danger);" onclick="auditarLote('${r.id}', 'Lote Rejeitado')">Rejeitar</button>
                        </div>
                    </div>
                </div>
            `;
        } else if (r.status === 'Processada / Aprovada') {
            badgeClass = 'badge-success';
            statusLabel = 'Processada / Aprovada SUS';
            acoesHtml = `
                <div style="width:100%; text-align:right; margin-top:0.5rem;">
                    <button class="btn btn-sm" style="font-size:0.65rem; padding:0.2rem 0.5rem; background-color:var(--success-glow); color:var(--success); border-color:var(--success);" onclick="exportarRemessaTXT('${r.id}')">Download TXT SIA</button>
                </div>
            `;
        } else if (r.status === 'Lote Rejeitado') {
            badgeClass = 'badge-danger';
            statusLabel = 'Lote Rejeitado SUS';
            acoesHtml = `<span style="font-size:0.75rem; color:var(--text-muted); margin-top:0.5rem; display:block;">Lote encerrado por rejeição na auditoria.</span>`;
        }
        
        const card = document.createElement('div');
        card.style.backgroundColor = 'var(--bg-tertiary)';
        card.style.border = '1px solid var(--border-color)';
        card.style.borderRadius = '0.5rem';
        card.style.padding = '0.75rem';
        card.style.marginBottom = '0.5rem';
        
        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
                <button onclick="abrirDetalheRemessa('${r.id}')" style="background:none; border:none; cursor:pointer; padding:0; text-align:left;">
                    <span style="font-size:0.8rem; font-weight:700; font-family:monospace; color:var(--accent); text-decoration:underline dotted; text-underline-offset:2px;">${r.id}</span>
                    <span style="font-size:0.6rem; color:var(--text-muted); margin-left:0.35rem;">ver detalhes ↗</span>
                </button>
                <span class="badge ${badgeClass}" style="font-size:0.65rem;">${statusLabel}</span>
            </div>
            
            <div style="font-size:0.75rem; color:var(--text-secondary); margin-bottom:0.5rem;">
                <p>Competência: <strong>${r.competencia}</strong> | Fechamento: <strong>${formatDate(r.dt_fechamento)}</strong></p>
                <p>Valor Lote: <strong style="color:var(--success);">R$ ${r.valor_total.toFixed(2)}</strong></p>
            </div>
            
            <div style="background-color:rgba(0,0,0,0.15); border-radius:0.35rem; padding:0.5rem; margin-bottom:0.5rem;">
                <div style="font-size:0.7rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; margin-bottom:0.25rem;">Pacientes no Lote:</div>
                ${listaPacientesHtml}
            </div>
            
            <div style="display:flex; align-items:center; padding-top:0.25rem;">
                ${acoesHtml}
            </div>
        `;

        listRemessas.appendChild(card);
    });
}

function fecharRemessa(remessaId) {
    const pacientesIds = new Set();
    db_oci_pacientes.forEach(p => {
        p.procedimentos.forEach(proc => {
            if (proc.id_remessa === remessaId) pacientesIds.add(p.id);
        });
    });
    const pacientesLote = db_oci_pacientes.filter(p => pacientesIds.has(p.id));
    
    // 1. REGRA DE SEGURANÇA SUS (Original): Não permite fechar se houver exames da própria remessa pendentes de faturamento
    let pendenciasFaturamento = [];
    pacientesLote.forEach(p => {
        const examesPendentes = p.procedimentos.filter(proc => 
            proc.id_remessa === remessaId &&
            proc.status_faturamento !== 'Faturado' && 
            proc.status_faturamento !== 'Reapresentado'
        );
        if (examesPendentes.length > 0) {
            pendenciasFaturamento.push({
                paciente: p.nm_paciente,
                qtd: examesPendentes.length
            });
        }
    });
    
    if (pendenciasFaturamento.length > 0) {
        let msg = `Bloqueio de Fechamento de Lote (Regra SUS - Pendência de Faturamento):\n`;
        pendenciasFaturamento.forEach(pen => {
            msg += `• O paciente ${pen.paciente} possui ${pen.qtd} procedimento(s) pendente(s) de faturamento/auditoria neste lote.\n`;
        });
        msg += `\nPara transmitir esta remessa, você deve consolidar o faturamento desses procedimentos ou transferir estes pacientes para outro lote.`;
        alert(msg);
        return;
    }
    
    // 2. REGRA CLÍNICA (Solicitada): Não permite fechar se houver qualquer exame pendente de execução clínica em toda a OCI do paciente
    let pendenciasClinicas = [];
    pacientesLote.forEach(p => {
        const examesSemExecucao = p.procedimentos.filter(proc => proc.status !== 'Realizado');
        if (examesSemExecucao.length > 0) {
            pendenciasClinicas.push({
                paciente: p.nm_paciente,
                exames: examesSemExecucao.map(proc => proc.nome)
            });
        }
    });
    
    if (pendenciasClinicas.length > 0) {
        let msg = `Bloqueio de Fechamento de Lote (Pendência de Execução Clínica):\n`;
        pendenciasClinicas.forEach(pen => {
            msg += `• Paciente: ${pen.paciente}\n  Exame(s) pendente(s) de execução/realização na OCI:\n`;
            pen.exames.forEach(ex => {
                msg += `    - ${ex}\n`;
            });
        });
        msg += `\nPara transmitir esta remessa, os exames pendentes do paciente na OCI devem ser concluídos na Navegação, ou você deve transferir o paciente para outro lote.`;
        alert(msg);
        return;
    }
    
    // 3. REGRA DE SEGURANÇA (Solicitada): Não permite fechar se o paciente no lote possuir exames pendentes de faturamento na OCI
    let pendenciasLancamento = [];
    pacientesLote.forEach(p => {
        const examesNaoLancados = p.procedimentos.filter(proc => 
            !proc.id_remessa && 
            (proc.status_faturamento === 'Pendente' || proc.status_faturamento === 'Glosado')
        );
        if (examesNaoLancados.length > 0) {
            pendenciasLancamento.push({
                paciente: p.nm_paciente,
                exames: examesNaoLancados.map(proc => proc.nome)
            });
        }
    });
    
    if (pendenciasLancamento.length > 0) {
        let msg = `Bloqueio de Fechamento de Lote (Pendência de Lançamento/Faturamento):\n`;
        pendenciasLancamento.forEach(pen => {
            msg += `• Paciente: ${pen.paciente}\n  Exame(s) pendente(s) de faturamento/lançamento na OCI:\n`;
            pen.exames.forEach(ex => {
                msg += `    - ${ex}\n`;
            });
        });
        msg += `\nPara transmitir esta remessa, você deve faturar e enviar esses exames pendentes para este ou outro lote, ou transferir o paciente para outro lote.`;
        alert(msg);
        return;
    }
    
    // Altera o status da remessa
    db_oci_remessas = db_oci_remessas.map(r => {
        if (r.id === remessaId) {
            return { ...r, status: 'Transmitido SUS', dt_fechamento: getHoje() };
        }
        return r;
    });
    saveDb('oci_db_remessas', db_oci_remessas);
    
    // Fecha a OCI de todos os pacientes do lote
    db_oci_pacientes = db_oci_pacientes.map(p => {
        if (pacientesIds.has(p.id)) {
            return { ...p, status: 'Fechada' };
        }
        return p;
    });
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
    alert(`Lote de Remessa ${remessaId} foi FECHADO e TRANSMITIDO ao SUS!\nA OCI de todos os pacientes vinculados foi FECHADA com sucesso.`);
}

function reabrirRemessa(remessaId) {
    db_oci_remessas = db_oci_remessas.map(r => {
        if (r.id === remessaId) {
            return { ...r, status: 'Em Digitação' };
        }
        return r;
    });
    saveDb('oci_db_remessas', db_oci_remessas);
    
    // Coleta pacientes no lote
    const pacientesIds = new Set();
    db_oci_pacientes.forEach(p => {
        p.procedimentos.forEach(proc => {
            if (proc.id_remessa === remessaId) pacientesIds.add(p.id);
        });
    });
    
    // Reabre as contas OCI correspondentes
    db_oci_pacientes = db_oci_pacientes.map(p => {
        if (pacientesIds.has(p.id)) {
            return { ...p, status: 'Ativa' };
        }
        return p;
    });
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
    alert(`Lote de Remessa ${remessaId} foi REABERTO para modificações e as contas dos pacientes vinculados voltaram ao status de Ativa.`);
}

function excluirRemessa(remessaId) {
    if (!confirm(`Deseja realmente excluir o lote de remessa ${remessaId}?\nTodas as contas associadas voltarão a ficar disponíveis para faturamento.`)) {
        return;
    }
    
    // Remove o lote
    db_oci_remessas = db_oci_remessas.filter(r => r.id !== remessaId);
    saveDb('oci_db_remessas', db_oci_remessas);
    
    // Remove o id_remessa dos procedimentos correspondentes a esta remessa e reativa as contas
    db_oci_pacientes = db_oci_pacientes.map(p => {
        let pertenceAoLote = false;
        const procsAtualizados = p.procedimentos.map(proc => {
            if (proc.id_remessa === remessaId) {
                pertenceAoLote = true;
                return { ...proc, id_remessa: null, status_faturamento: 'Pendente', competencia: '' };
            }
            return proc;
        });
        
        if (pertenceAoLote) {
            return { ...p, procedimentos: procsAtualizados, status: 'Ativa' };
        }
        return p;
    });
    
    saveDb('oci_db_pacientes', db_oci_pacientes);
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
    alert(`Lote de Remessa ${remessaId} foi excluído com sucesso.`);
}

function auditarLote(remessaId, novoStatus) {
    db_oci_remessas = db_oci_remessas.map(r => {
        if (r.id === remessaId) {
            return { ...r, status: novoStatus };
        }
        return r;
    });
    saveDb('oci_db_remessas', db_oci_remessas);
    
    // Se o lote for rejeitado, simula a volta dos itens para faturamento
    if (novoStatus === 'Lote Rejeitado') {
        // Marca os procedimentos do lote como Glosado, remove o id_remessa deles e reativa a OCI
        db_oci_pacientes = db_oci_pacientes.map(p => {
            let pertenceAoLote = false;
            const procsAtualizados = p.procedimentos.map(proc => {
                if (proc.id_remessa === remessaId) {
                    pertenceAoLote = true;
                    return { 
                        ...proc, 
                        id_remessa: null,
                        status_faturamento: 'Glosado', 
                        motivo_glosa: 'Inconsistência no Lote / Glosa Integral de Lote pelo SUS' 
                    };
                }
                return proc;
            });
            if (pertenceAoLote) {
                return { ...p, procedimentos: procsAtualizados, status: 'Ativa' };
            }
            return p;
        });
        saveDb('oci_db_pacientes', db_oci_pacientes);
        alert(`O lote ${remessaId} foi recusado na auditoria do SUS!\nAs cobranças de todos os pacientes voltaram para a fila do faturamento com status de GLOSA e a OCI deles foi reaberta.`);
    } else {
        alert(`O lote ${remessaId} foi processado e APROVADO pela auditoria do SUS!\nO repasse financeiro de faturamento do PMAE foi liberado.`);
    }
    
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
}

// 12. Exportação Padrão SIA/SUS (Manual Operacional)
function exportarRemessaTXT(remessaId) {
    const remessa = db_oci_remessas.find(r => r.id === remessaId);
    if (!remessa) return;
    
    const fSpace = (val, size) => String(val || '').substring(0, size).padEnd(size, ' ');
    const fZero = (val, size) => String(val || '').replace(/\D/g, '').substring(0, size).padStart(size, '0');
    
    const cnesFicticio = '0000023';
    const compSia = remessa.competencia.replace('/', '');
    const dtGeracao = getHoje().replace(/-/g, '');
    
    let content = '';
    
    // REGISTRO HEADER (Tipo 00)
    content += '00' + fZero(cnesFicticio, 7) + fZero(compSia, 6) + fZero(dtGeracao, 8) + fSpace('PLATAFORMA_OCI_PMAE', 20) + fSpace('', 107) + '\r\n';
    
    let contPac = 0;
    let contProc = 0;
    
    db_oci_pacientes.forEach(p => {
        // Apenas inclui procedimentos desta remessa
        const procsDestaRemessa = p.procedimentos.filter(proc => 
            proc.id_remessa === remessaId &&
            (proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado')
        );
        if (procsDestaRemessa.length === 0) return;
        
        contPac++;
            
            // REGISTRO IDENTIFICAÇÃO PACIENTE (Tipo 01)
            const cpfLimpo = p.nr_cpf.replace(/\D/g, '');
            const cnsLimpo = p.nr_cns.replace(/\D/g, '');
            const dtNascSimulada = '19800510';
            const sexoSimulado = 'M';
            
            content += '01' + fZero(cpfLimpo, 11) + fZero(cnsLimpo, 15) + fSpace(p.nm_paciente, 40) + fZero(dtNascSimulada, 8) + fSpace(sexoSimulado, 1) + fSpace('', 73) + '\r\n';
            
            // REGISTRO APAC PRINCIPAL (Tipo 02)
            const ociDef = db_oci_definitions[p.oci_key];
            const codPrincipal = ociDef ? ociDef.codigo.replace(/\D/g, '') : '0902010018';
            const cidPrincipal = 'I10 ';
            const dtIniApac = p.dt_criacao.replace(/-/g, '');
            
            const dtFimDate = new Date(p.dt_criacao);
            dtFimDate.setMonth(dtFimDate.getMonth() + 2);
            const dtFimApac = dtFimDate.toISOString().split('T')[0].replace(/-/g, '');
            const numApac = p.id.replace(/\D/g, '').padEnd(15, '0');
            
            content += '02' + fZero(numApac, 15) + fZero(codPrincipal, 10) + fSpace(cidPrincipal, 4) + fZero(dtIniApac, 8) + fZero(dtFimApac, 8) + fSpace('', 103) + '\r\n';
            
            // REGISTRO PROCEDIMENTOS SECUNDÁRIOS EXECUTADOS (Tipo 03)
            procsDestaRemessa.forEach(proc => {
                contProc++;
                const codProc = proc.codigo.replace(/\D/g, '');
                const dtExec = proc.dt_execucao ? proc.dt_execucao.replace(/-/g, '') : dtGeracao;
                content += '03' + fZero(codProc, 10) + fZero(proc.qtd, 3) + fZero(dtExec, 8) + fZero(numApac, 15) + fSpace('', 112) + '\r\n';
            });
    });
    
    // REGISTRO TRAILER (Tipo 99)
    const valorSimuladoLote = remessa.valor_total.toFixed(2).replace('.', '');
    content += '99' + fZero(contPac, 4) + fZero(contProc, 4) + fZero(valorSimuladoLote, 10) + fSpace('', 130);
    
    const filename = `AM310001${compSia}.TXT`;
    
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert(`Arquivo de Importação do APAC Magnético gerado com sucesso!\nSalvo como: ${filename}\n\nEste arquivo contém os registros posicionais do lote ${remessaId} estruturado no padrão SIA/SUS do DATASUS.`);
}

// 13. Lógica de Transferência de Contas entre Remessas
function openTransferirModal(pacienteId, loteOrigemId) {
    const paciente = db_oci_pacientes.find(p => p.id === pacienteId);
    if (!paciente) return;
    
    document.getElementById('transf-paciente-id').value = pacienteId;
    document.getElementById('transf-origem-id').value = loteOrigemId;
    document.getElementById('transf-paciente-nome').textContent = paciente.nm_paciente;
    document.getElementById('transf-lote-origem').textContent = loteOrigemId;
    
    const containerOpcoes = document.getElementById('transf-opcoes-lote');
    containerOpcoes.innerHTML = '';
    
    // Lista outros lotes em digitação
    const outrosLotes = db_oci_remessas.filter(r => r.status === 'Em Digitação' && r.id !== loteOrigemId);
    
    // Opção 1: Criar novo lote para transferência
    const divNovo = document.createElement('label');
    divNovo.className = 'glosa-option';
    divNovo.innerHTML = `
        <input type="radio" name="transf_destino" value="NOVO" checked>
        Criar Novo Lote para este Paciente
    `;
    containerOpcoes.appendChild(divNovo);
    
    // Opções de Lotes Existentes
    outrosLotes.forEach(r => {
        const divLote = document.createElement('label');
        divLote.className = 'glosa-option';
        divLote.innerHTML = `
            <input type="radio" name="transf_destino" value="${r.id}">
            Lote existente: ${r.id} (${r.competencia})
        `;
        containerOpcoes.appendChild(divLote);
    });
    
    openModal('modal-transferir-paciente');
}

function handleSaveTransferencia(e) {
    e.preventDefault();
    const pacienteId = document.getElementById('transf-paciente-id').value;
    const loteOrigemId = document.getElementById('transf-origem-id').value;
    const destinoOpt = document.querySelector('input[name="transf_destino"]:checked').value;
    
    let loteDestinoId = '';
    
    if (destinoOpt === 'NOVO') {
        // Gera um novo lote
        loteDestinoId = 'REM-' + getHoje().replace(/-/g, '') + '-' + Math.floor(100 + Math.random() * 900);
        const loteOrigemObj = db_oci_remessas.find(r => r.id === loteOrigemId);
        const compLote = loteOrigemObj ? loteOrigemObj.competencia : getCompetenciaAtual();
        
        const novaRemessa = {
            id: loteDestinoId,
            competencia: compLote,
            dt_fechamento: getHoje(),
            qtd_contas: 0,
            qtd_procedimentos: 0,
            valor_total: 0,
            status: 'Em Digitação'
        };
        db_oci_remessas.push(novaRemessa);
    } else {
        loteDestinoId = destinoOpt;
    }
    
    // Faz a transferência: move o id_remessa de todos os procedimentos do paciente que estão na remessa de origem
    db_oci_pacientes = db_oci_pacientes.map(p => {
        if (p.id === pacienteId) {
            const procsAtualizados = p.procedimentos.map(proc => {
                if (proc.id_remessa === loteOrigemId) {
                    return { ...proc, id_remessa: loteDestinoId };
                }
                return proc;
            });
            return { ...p, procedimentos: procsAtualizados };
        }
        return p;
    });
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    // Recalcula os valores de todas as remessas afetadas (origem e destino)
    recalcularRemessasValores();
    
    // Limpa lotes que ficaram vazios se desejado (vamos deixar vazios ou removê-los se o usuário preferir, manter vazios permite preenchê-los de novo)
    
    closeModal('modal-transferir-paciente');
    renderFaturamentoView();
    renderLotesRemessa();
    renderStats();
    
    alert(`Paciente transferido com sucesso para o lote ${loteDestinoId}!`);
}

function recalcularRemessasValores() {
    db_oci_remessas = db_oci_remessas.map(r => {
        // Encontra todos os procedimentos de qualquer paciente que pertencem a esta remessa
        const pacientesNoLote = new Set();
        let totalProcs = 0;
        let totalVal = 0;
        
        db_oci_pacientes.forEach(p => {
            p.procedimentos.forEach(proc => {
                if (proc.id_remessa === r.id &&
                    (proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado')) {
                    pacientesNoLote.add(p.id);
                    totalProcs++;
                    totalVal += proc.valor || 30.00;
                }
            });
        });
        
        return {
            ...r,
            qtd_contas: pacientesNoLote.size,
            qtd_procedimentos: totalProcs,
            valor_total: totalVal
        };
    });
    
    saveDb('oci_db_remessas', db_oci_remessas);
}

// Função auxiliar: retorna a remessa aberta (Em Digitação) do paciente, se existir
function getRemessaAbertaDoPaciente(p) {
    // Encontra a remessa associada a qualquer procedimento já enviado do paciente que ainda está aberta
    for (const proc of p.procedimentos) {
        if (proc.id_remessa) {
            const remessa = db_oci_remessas.find(r => r.id === proc.id_remessa);
            if (remessa && remessa.status === 'Em Digitação') {
                return remessa;
            }
        }
    }
    return null;
}

// 14. Função de Reinicialização (Reset do Simulador)
function resetSimulador() {
    if (confirm('Deseja realmente limpar todos os dados do simulador? Isso apagará as OCIs criadas, contas de pacientes e lotes de remessa, restaurando o estado original de fábrica.')) {
        localStorage.removeItem('oci_db_soulmv');
        localStorage.removeItem('oci_db_pacientes');
        localStorage.removeItem('oci_db_remessas');
        localStorage.removeItem('oci_db_definitions');
        location.reload();
    }
}

// 15. Lógica de Autenticação (Login e Logout)
function handleLoginSubmit(e) {
    e.preventDefault();
    const perfil = document.getElementById('login-username').value;
    efetuarLogin(perfil);
}

function fastLogin(perfil) {
    efetuarLogin(perfil);
}

function efetuarLogin(perfil) {
    switchProfile(perfil);
    
    // Altera a sigla do avatar com base no perfil logado
    const avatarSpan = document.getElementById('avatar-sigla');
    if (avatarSpan) {
        if (perfil === 'medico') avatarSpan.textContent = 'DR';
        else if (perfil === 'navegacao') avatarSpan.textContent = 'AF';
        else avatarSpan.textContent = 'LM';
    }
    
    // Oculta a tela de login
    document.getElementById('view-login').classList.add('hidden');
    
    // Oculta as abas superiores de troca rápida para simular a separação de papéis real
    const tabs = document.querySelector('.profile-tabs');
    if (tabs) tabs.style.display = 'none';
}

function realizarLogout() {
    // Reexibe a tela de login
    document.getElementById('view-login').classList.remove('hidden');
}

// 16. Gerenciamento e Cadastro Dinâmico de OCIs (Perfil Faturamento)
let tempProcedures = []; // Lista temporária de exames sendo adicionados à OCI
let editingOciKey = null; // Rastreia se estamos editando uma OCI ativa

function openGerenciarOcisModal() {
    tempProcedures = [];
    editingOciKey = null;
    document.getElementById('form-cadastrar-oci').reset();
    prepararAbaCadastrarNovo();
    renderTempProcedures();
    switchModalTab('listar');
    openModal('modal-gerenciar-ocis');
}

function switchModalTab(tab) {
    const btnListar = document.getElementById('tab-btn-listar-ocis');
    const btnCadastrar = document.getElementById('tab-btn-cadastrar-oci');
    const contentListar = document.getElementById('modal-tab-content-listar');
    const contentCadastrar = document.getElementById('modal-tab-content-cadastrar');
    
    if (tab === 'listar') {
        btnListar.classList.add('active');
        btnCadastrar.classList.remove('active');
        contentListar.classList.add('active');
        contentCadastrar.classList.remove('active');
        renderGerenciarOcisList();
    } else {
        btnListar.classList.remove('active');
        btnCadastrar.classList.add('active');
        contentListar.classList.remove('active');
        contentCadastrar.classList.add('active');
        
        // Se mudou para cadastrar manualmente, mas não estávamos editando, garante que o form está limpo
        if (!editingOciKey) {
            prepararAbaCadastrarNovo();
        }
    }
}

function prepararAbaCadastrarNovo() {
    editingOciKey = null;
    document.getElementById('tab-btn-cadastrar-oci').textContent = 'Cadastrar Nova OCI';
    
    const inputCodigo = document.getElementById('oci-novo-codigo');
    inputCodigo.readOnly = false;
    inputCodigo.style.backgroundColor = '';
    
    const submitBtn = document.querySelector('#form-cadastrar-oci button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Salvar Definição de OCI';
}

function prepararAbaEditar(key) {
    editingOciKey = key;
    const oci = db_oci_definitions[key];
    if (!oci) return;
    
    document.getElementById('tab-btn-cadastrar-oci').textContent = 'Editar OCI';
    
    const inputCodigo = document.getElementById('oci-novo-codigo');
    inputCodigo.value = oci.codigo;
    inputCodigo.readOnly = true;
    inputCodigo.style.backgroundColor = 'var(--border-color)'; // Visual indicativo de desabilitado
    
    document.getElementById('oci-novo-nome').value = oci.nome;
    document.getElementById('oci-nova-especialidade').value = oci.especialidade;
    document.getElementById('oci-novo-valor').value = oci.valorPrincipal;
    
    // Copia os procedimentos existentes
    tempProcedures = JSON.parse(JSON.stringify(oci.procedimentos));
    renderTempProcedures();
    
    const submitBtn = document.querySelector('#form-cadastrar-oci button[type="submit"]');
    if (submitBtn) submitBtn.textContent = 'Salvar Alterações';
    
    // Altera a aba ativa
    switchModalTab('cadastrar');
}

function renderGerenciarOcisList() {
    const tbody = document.getElementById('table-gerenciar-ocis-body');
    tbody.innerHTML = '';
    
    const keys = Object.keys(db_oci_definitions);
    
    if (keys.length === 0) {
        tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color:var(--text-muted);">Nenhuma OCI cadastrada no banco.</td></tr>`;
        return;
    }
    
    keys.forEach(key => {
        const oci = db_oci_definitions[key];
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong style="font-family:monospace;">${oci.codigo}</strong></td>
            <td><strong>${oci.nome}</strong></td>
            <td><span class="badge badge-info" style="font-size:0.65rem;">${oci.especialidade}</span></td>
            <td><strong style="color:var(--success);">R$ ${oci.valorPrincipal.toFixed(2)}</strong></td>
            <td>
                <button class="btn btn-sm" style="font-size:0.65rem; padding:0.15rem 0.4rem; margin-right:0.25rem; background-color: var(--info-glow); color: var(--info); border-color: var(--info);" onclick="prepararAbaEditar('${key}')">
                    Editar
                </button>
                <button class="btn btn-sm" style="background-color:var(--danger-glow); color:var(--danger); border-color:var(--danger); font-size:0.65rem; padding:0.15rem 0.4rem;" onclick="excluirOciDefinition('${key}')">
                    Excluir
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function adicionarProcedimentoTemporario() {
    const codInput = document.getElementById('proc-novo-codigo');
    const nomeInput = document.getElementById('proc-novo-nome');
    const qtdInput = document.getElementById('proc-nova-qtd');
    const oncoInput = document.getElementById('proc-novo-onco');
    
    const codigo = codInput.value.trim();
    const nome = nomeInput.value.trim();
    const qtd = parseInt(qtdInput.value);
    const exigeDiagnostico = oncoInput.checked;
    
    if (!codigo || !nome) {
        alert('Por favor, preencha o código e o nome do procedimento secundário.');
        return;
    }
    
    // Evita duplicados na lista temporária
    if (tempProcedures.some(p => p.codigo === codigo)) {
        alert('Este procedimento já foi adicionado a esta OCI.');
        return;
    }
    
    tempProcedures.push({
        codigo: codigo,
        nome: nome,
        qtd: qtd,
        exigeDiagnostico: exigeDiagnostico
    });
    
    // Limpa inputs
    codInput.value = '';
    nomeInput.value = '';
    qtdInput.value = '1';
    oncoInput.checked = false;
    
    renderTempProcedures();
}

function renderTempProcedures() {
    const container = document.getElementById('temp-procs-lista-container');
    container.innerHTML = '';
    
    document.getElementById('temp-procs-count').textContent = `${tempProcedures.length} adicionado(s)`;
    
    if (tempProcedures.length === 0) {
        container.innerHTML = `<p style="color:var(--text-muted); font-size:0.75rem; text-align:center; padding:1rem 0;">Nenhum procedimento secundário adicionado ainda.</p>`;
        return;
    }
    
    tempProcedures.forEach((proc, index) => {
        const item = document.createElement('div');
        item.className = 'checklist-item';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        
        item.innerHTML = `
            <div class="checklist-item-label">
                <strong>${proc.nome}</strong> (Qtd: ${proc.qtd})
                <span class="checklist-item-code">
                    ${proc.codigo} ${proc.exigeDiagnostico ? '<span style="color:var(--danger); font-size:0.7rem; font-weight:700;">[EXIGE DATA LAUDO ONCO]</span>' : ''}
                </span>
            </div>
            <button type="button" class="btn btn-sm" style="font-size:0.6rem; padding:0.15rem 0.3rem; background-color:var(--danger-glow); color:var(--danger); border-color:var(--danger);" onclick="removerProcedimentoTemporario(${index})">
                Remover
            </button>
        `;
        container.appendChild(item);
    });
}

function removerProcedimentoTemporario(index) {
    tempProcedures.splice(index, 1);
    renderTempProcedures();
}

function handleSaveNovaOci(e) {
    e.preventDefault();
    const codigo = document.getElementById('oci-novo-codigo').value.trim();
    const nome = document.getElementById('oci-novo-nome').value.trim();
    const especialidade = document.getElementById('oci-nova-especialidade').value;
    const valor = parseFloat(document.getElementById('oci-novo-valor').value);
    
    if (tempProcedures.length === 0) {
        alert('Erro: Você deve adicionar pelo menos um procedimento secundário para salvar a OCI.');
        return;
    }
    
    if (editingOciKey) {
        // MODO EDIÇÃO
        db_oci_definitions[editingOciKey] = {
            codigo: codigo,
            nome: nome,
            especialidade: especialidade,
            valorPrincipal: valor,
            procedimentos: tempProcedures
        };
        
        saveDb('oci_db_definitions', db_oci_definitions);
        
        alert(`OCI "${nome}" atualizada com sucesso!\nAs novas configurações estarão disponíveis para os novos atendimentos.`);
        
        // Limpa estado
        editingOciKey = null;
        tempProcedures = [];
        document.getElementById('form-cadastrar-oci').reset();
        prepararAbaCadastrarNovo();
        renderTempProcedures();
        
        // Retorna para a aba de listagem
        switchModalTab('listar');
    } else {
        // MODO CADASTRO NOVO
        // Verifica se código já existe
        const codigoExistente = Object.values(db_oci_definitions).some(oci => oci.codigo === codigo);
        if (codigoExistente) {
            alert(`Erro: Já existe uma OCI cadastrada com o código ${codigo}.`);
            return;
        }
        
        // Gera uma chave única amigável baseada no código (evitando caracteres especiais)
        const ociKey = 'oci_' + codigo.replace(/\D/g, '');
        
        // Salva no banco de dados de definições
        db_oci_definitions[ociKey] = {
            codigo: codigo,
            nome: nome,
            especialidade: especialidade,
            valorPrincipal: valor,
            procedimentos: tempProcedures
        };
        
        saveDb('oci_db_definitions', db_oci_definitions);
        
        alert(`OCI "${nome}" de ${especialidade} cadastrada com sucesso!\nEla já está disponível para prescrição no perfil do Médico.`);
        
        // Limpa estado
        tempProcedures = [];
        document.getElementById('form-cadastrar-oci').reset();
        renderTempProcedures();
        
        // Retorna para a aba de listagem
        switchModalTab('listar');
    }
}

function excluirOciDefinition(key) {
    const oci = db_oci_definitions[key];
    if (!oci) return;
    
    // Validação de integridade referencial: impede exclusão se houver pacientes ativos vinculados à OCI
    const emUso = db_oci_pacientes.some(p => p.oci_codigo === oci.codigo);
    if (emUso) {
        alert(`Erro de Integridade de Dados:\nNão é possível excluir a OCI "${oci.nome}" pois ela está vinculada a contas de pacientes em andamento ou finalizadas.\n\nPara excluí-la, você deve remover as contas dos pacientes vinculados primeiro.`);
        return;
    }
    
    if (confirm(`Deseja realmente excluir a definição da OCI "${oci.nome}" do sistema?\nNovos atendimentos não poderão ser criados sob esta OCI.`)) {
        delete db_oci_definitions[key];
        saveDb('oci_db_definitions', db_oci_definitions);
        renderGerenciarOcisList();
    }
}

// 17. Paginação e Filtros auxiliares
function renderPagination(containerId, totalItems, itemsPerPage, currentPage, onPageChangeCallbackName) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (totalItems === 0) {
        container.innerHTML = '';
        container.style.display = 'none';
        return;
    }
    
    container.style.display = 'flex';
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    
    // Cálculo dos limites de itens exibidos
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    let html = `
        <div class="pagination-info">
            Mostrando <strong>${startItem}-${endItem}</strong> de <strong>${totalItems}</strong> registros
        </div>
        <div class="pagination-pages">
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="${onPageChangeCallbackName}(${currentPage - 1})">
                &laquo; Anterior
            </button>
    `;
    
    for (let p = 1; p <= totalPages; p++) {
        html += `
            <button class="page-btn ${p === currentPage ? 'active' : ''}" onclick="${onPageChangeCallbackName}(${p})">
                ${p}
            </button>
        `;
    }
    
    html += `
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="${onPageChangeCallbackName}(${currentPage + 1})">
                Próximo &raquo;
            </button>
        </div>
    `;
    
    container.innerHTML = html;
}

function changePageMedico(page) {
    currentPageMedico = page;
    renderMedicoView();
}

function changePageNavegacao(page) {
    currentPageNavegacao = page;
    renderNavegacaoView();
}

function changePageFaturamento(page) {
    currentPageFaturamento = page;
    renderFaturamentoView();
}

function resetPageMedicoAndRender() {
    currentPageMedico = 1;
    renderMedicoView();
}

// Expõe também com nomes mais comuns para evitar colisões
window.resetPageMedicoAndRender = resetPageMedicoAndRender;

function resetPageNavegacaoAndRender() {
    currentPageNavegacao = 1;
    renderNavegacaoView();
}

window.resetPageNavegacaoAndRender = resetPageNavegacaoAndRender;

function resetPageFaturamentoAndRender() {
    currentPageFaturamento = 1;
    renderFaturamentoView();
}

window.resetPageFaturamentoAndRender = resetPageFaturamentoAndRender;

// Expõe explicitamente no escopo global window para acesso de handlers inline do HTML
window.renderPagination = renderPagination;
window.changePageMedico = changePageMedico;
window.changePageNavegacao = changePageNavegacao;
window.changePageFaturamento = changePageFaturamento;
window.prepararAbaEditar = prepararAbaEditar;
window.prepararAbaCadastrarNovo = prepararAbaCadastrarNovo;

// 18. Panorama Geral e Evolução do Cuidado
function renderPanoramaGeral() {
    const tbody = document.getElementById('table-panorama-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const searchVal = document.getElementById('search-panorama') 
        ? document.getElementById('search-panorama').value.toLowerCase().trim() 
        : '';
    
    // KPIs Globais (Calculados sobre toda a base de dados)
    const totalPacientes = db_oci_pacientes.length;
    document.getElementById('pan-kpi-pacientes').textContent = totalPacientes;
    
    let somaProgresso = 0;
    let repassePrevisto = 0;
    let totalProcedimentos = 0;
    let totalGlosas = 0;
    
    if (totalPacientes === 0) {
        document.getElementById('pan-kpi-progresso').textContent = '0%';
        document.getElementById('pan-kpi-valor').textContent = 'R$ 0,00';
        document.getElementById('pan-kpi-glosas').textContent = '0%';
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:2rem 0;">Nenhum paciente em linha de cuidado OCI ativa.</td></tr>`;
        return;
    }
    
    db_oci_pacientes.forEach(p => {
        const totalP = p.procedimentos.length;
        const realizadosP = p.procedimentos.filter(pr => pr.status === 'Realizado').length;
        const progressoP = totalP > 0 ? (realizadosP / totalP) : 0;
        somaProgresso += progressoP;
        
        const ociDef = db_oci_definitions[p.oci_key];
        repassePrevisto += ociDef ? ociDef.valorPrincipal : 200.00;
        
        p.procedimentos.forEach(proc => {
            totalProcedimentos++;
            if (proc.status_faturamento === 'Glosado') {
                totalGlosas++;
            }
        });
    });
    
    const conclusaoMedia = Math.round((somaProgresso / totalPacientes) * 100);
    const taxaGlosaGlobal = totalProcedimentos > 0 ? Math.round((totalGlosas / totalProcedimentos) * 100) : 0;
    
    document.getElementById('pan-kpi-progresso').textContent = conclusaoMedia + '%';
    document.getElementById('pan-kpi-valor').textContent = 'R$ ' + repassePrevisto.toFixed(2);
    document.getElementById('pan-kpi-glosas').textContent = taxaGlosaGlobal + '%';
    
    // Filtrar pacientes com base no valor de busca
    const filtrados = db_oci_pacientes.filter(p => {
        return p.nm_paciente.toLowerCase().includes(searchVal) || 
               p.cd_paciente.includes(searchVal) || 
               p.id.toLowerCase().includes(searchVal) ||
               p.nr_cpf.replace(/\D/g, '').includes(searchVal) ||
               p.oci_codigo.includes(searchVal);
    });
    
    if (filtrados.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:2rem 0;">Nenhum paciente localizado para o filtro "${searchVal}".</td></tr>`;
        return;
    }
    
    filtrados.forEach(p => {
        const totalP = p.procedimentos.length;
        const realizadosP = p.procedimentos.filter(pr => pr.status === 'Realizado').length;
        const progressoP = totalP > 0 ? (realizadosP / totalP) : 0;
        const progressoPct = Math.round(progressoP * 100);
        
        // Status faturamento descritivo
        let statusFatHtml = '';
        const totalFaturados = p.procedimentos.filter(pr => pr.status_faturamento === 'Faturado' || pr.status_faturamento === 'Reapresentado').length;
        const totalGlosados = p.procedimentos.filter(pr => pr.status_faturamento === 'Glosado').length;
        const totalPendencias = p.procedimentos.filter(pr => pr.status_faturamento === 'Com Pendência').length;
        
        if (p.id_remessa) {
            const remessa = db_oci_remessas.find(r => r.id === p.id_remessa);
            const statusRem = remessa ? remessa.status : 'Em Lote';
            if (statusRem === 'Processada / Aprovada') {
                statusFatHtml = `<span class="badge badge-success" style="font-size:0.65rem;">Aprovado SUS (${p.id_remessa})</span>`;
            } else if (statusRem === 'Lote Rejeitado') {
                statusFatHtml = `<span class="badge badge-danger" style="font-size:0.65rem;">Lote Recusado (${p.id_remessa})</span>`;
            } else if (statusRem === 'Transmitido SUS') {
                statusFatHtml = `<span class="badge badge-info" style="font-size:0.65rem;">Em Validação (${p.id_remessa})</span>`;
            } else {
                statusFatHtml = `<span class="badge badge-warning" style="font-size:0.65rem;">Lote Aberto (${p.id_remessa})</span>`;
            }
        } else {
            // Verifica se algum procedimento do paciente está em alguma remessa
            const procsEmRemessa = p.procedimentos.filter(proc => proc.id_remessa);
            if (procsEmRemessa.length > 0) {
                // Pega o id da remessa mais recente com proc deste paciente
                const idRemessaRef = procsEmRemessa[procsEmRemessa.length - 1].id_remessa;
                const remessa = db_oci_remessas.find(r => r.id === idRemessaRef);
                const statusRem = remessa ? remessa.status : 'Em Lote';
                const procsForaRemessa = p.procedimentos.filter(proc => !proc.id_remessa && (proc.status_faturamento === 'Faturado' || proc.status_faturamento === 'Reapresentado')).length;
                if (statusRem === 'Processada / Aprovada') {
                    statusFatHtml = procsForaRemessa > 0
                        ? `<span class="badge badge-info" style="font-size:0.65rem;">+${procsForaRemessa} proc(s) pendentes de remessa</span>`
                        : `<span class="badge badge-success" style="font-size:0.65rem;">Aprovado SUS (${idRemessaRef})</span>`;
                } else if (statusRem === 'Lote Rejeitado') {
                    statusFatHtml = `<span class="badge badge-danger" style="font-size:0.65rem;">Lote Recusado (${idRemessaRef})</span>`;
                } else if (statusRem === 'Transmitido SUS') {
                    statusFatHtml = `<span class="badge badge-info" style="font-size:0.65rem;">Em Validação (${idRemessaRef})</span>`;
                } else {
                    statusFatHtml = procsForaRemessa > 0
                        ? `<span class="badge badge-warning" style="font-size:0.65rem;">Lote Aberto + ${procsForaRemessa} novo(s)</span>`
                        : `<span class="badge badge-warning" style="font-size:0.65rem;">Lote Aberto (${idRemessaRef})</span>`;
                }
            } else if (totalPendencias > 0) {
                statusFatHtml = `<span class="badge badge-warning" style="font-size:0.65rem; background-color: var(--warning-glow); color: var(--warning);"><span class="badge-dot" style="background-color: var(--warning);"></span>Pendência (${totalPendencias} itens)</span>`;
            } else if (totalGlosados > 0) {
                statusFatHtml = `<span class="badge badge-danger" style="font-size:0.65rem;">Glosa Ativa (${totalGlosados} itens)</span>`;
            } else if (totalFaturados === totalP) {
                statusFatHtml = `<span class="badge badge-success" style="font-size:0.65rem;">Aguardando Lote</span>`;
            } else if (totalFaturados > 0) {
                statusFatHtml = `<span class="badge badge-info" style="font-size:0.65rem;">Parcial Faturado (${totalFaturados}/${totalP})</span>`;
            } else if (realizadosP > 0) {
                statusFatHtml = `<span class="badge badge-warning" style="font-size:0.65rem;">Pendente Faturamento</span>`;
            } else {
                statusFatHtml = `<span class="badge badge-warning" style="font-size:0.65rem;">Em Execução</span>`;
            }
        }
        
        // LINHA DO TEMPO DA EVOLUÇÃO
        let prClass = 'completed';
        let prTitle = `Prescrito em ${formatDate(p.dt_criacao)}`;
        
        let nvClass = '';
        let nvLineClass = '';
        let nvTitle = `Navegação: ${realizadosP}/${totalP} exames concluídos`;
        if (realizadosP === totalP) {
            nvClass = 'completed';
            nvLineClass = 'completed';
        } else if (realizadosP > 0) {
            nvClass = 'active';
            nvLineClass = 'active';
        } else {
            nvClass = 'active';
        }
        
        let ftClass = '';
        let ftLineClass = '';
        let ftText = 'FT';
        let ftTitle = 'Faturamento: ';
        
        if (totalPendencias > 0) {
            ftClass = 'pending';
            ftLineClass = 'pending';
            ftText = 'PE';
            ftTitle += `${totalPendencias} procedimento(s) retornado(s) com pendência à Navegação.`;
        } else if (totalGlosados > 0) {
            ftClass = 'glosed';
            ftLineClass = 'active';
            ftText = 'GL';
            ftTitle += `${totalGlosados} procedimento(s) glosado(s) pelo SUS.`;
        } else if (totalFaturados === totalP) {
            ftClass = 'completed';
            ftLineClass = 'completed';
            ftTitle += '100% faturado e pronto para envio.';
        } else if (totalFaturados > 0) {
            ftClass = 'active';
            ftLineClass = 'active';
            ftTitle += `Parcial faturado (${totalFaturados}/${totalP}).`;
        } else if (realizadosP === totalP) {
            ftClass = 'active';
            ftTitle += 'Aguardando auditoria e envio.';
        } else {
            ftTitle += 'Aguardando conclusão de exames.';
        }
        
        let susClass = '';
        let susLineClass = '';
        let susText = 'SUS';
        let susTitle = 'Auditoria Governamental (SUS): ';
        
        if (p.id_remessa) {
            const rem = db_oci_remessas.find(r => r.id === p.id_remessa);
            if (rem) {
                if (rem.status === 'Processada / Aprovada') {
                    susClass = 'completed';
                    susLineClass = 'completed';
                    susTitle += `Lote ${rem.id} Aprovado!`;
                } else if (rem.status === 'Lote Rejeitado') {
                    susClass = 'glosed';
                    susLineClass = 'active';
                    susText = 'REJ';
                    susTitle += `Lote ${rem.id} Rejeitado pelo SUS.`;
                } else if (rem.status === 'Transmitido SUS') {
                    susClass = 'active';
                    susLineClass = 'active';
                    susTitle += `Lote ${rem.id} transmitido, aguardando parecer.`;
                } else {
                    susClass = 'active';
                    susTitle += `Lote ${rem.id} em digitação.`;
                }
            }
        } else {
            susTitle += 'Aguardando fechamento de remessa.';
        }
        
        const timelineHtml = `
            <div class="evolution-timeline">
                <span class="step ${prClass}" title="${prTitle}">PR</span>
                <span class="step-line ${nvLineClass}"></span>
                <span class="step ${nvClass}" title="${nvTitle}">NV</span>
                <span class="step-line ${ftLineClass}"></span>
                <span class="step ${ftClass}" title="${ftTitle}">${ftText}</span>
                <span class="step-line ${susLineClass}"></span>
                <span class="step ${susClass}" title="${susTitle}">${susText}</span>
            </div>
        `;
        
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.title = `Clique para ver o detalhamento dos exames de ${p.nm_paciente}`;
        tr.onclick = () => abrirDetalhePanorama(p.id);
        
        tr.innerHTML = `
            <td>
                <strong>${p.nm_paciente}</strong>
                <span style="display:block; font-size:0.7rem; color:var(--text-muted); font-family:monospace;">${p.id} • Pront: ${p.cd_paciente} • Unidade: ${p.unidade || 'HUCM'}</span>
            </td>
            <td>
                <strong>${p.oci_codigo}</strong>
                <span style="display:block; font-size:0.7rem; color:var(--text-muted);">${p.oci_nome}</span>
            </td>
            <td>${formatDate(p.dt_criacao)}</td>
            <td>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <div class="progress-bar-container" style="flex:1; width:70px; margin-top:0;">
                        <div class="progress-bar" style="width: ${progressoPct}%;"></div>
                    </div>
                    <span style="font-size:0.75rem; font-weight:700;">${realizadosP}/${totalP}</span>
                </div>
            </td>
            <td>${statusFatHtml}</td>
            <td>${timelineHtml}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

function openPanoramaGeralModal() {
    const searchInput = document.getElementById('search-panorama');
    if (searchInput) searchInput.value = '';
    
    renderPanoramaGeral();
    openModal('modal-panorama-geral');
}

function abrirDetalhePanorama(pacienteId) {
    const paciente = db_oci_pacientes.find(p => p.id === pacienteId);
    if (!paciente) return;
    
    document.getElementById('det-pan-paciente-nome').textContent = paciente.nm_paciente;
    document.getElementById('det-pan-oci-nome').textContent = paciente.oci_nome;
    document.getElementById('det-pan-oci-codigo').textContent = paciente.oci_codigo;
    document.getElementById('det-pan-dt-criacao').textContent = formatDate(paciente.dt_criacao);
    document.getElementById('det-pan-unidade').textContent = paciente.unidade || 'HUCM';
    
    const container = document.getElementById('det-pan-procedimentos-lista');
    container.innerHTML = '';
    
    paciente.procedimentos.forEach(proc => {
        const item = document.createElement('div');
        item.style.backgroundColor = 'var(--bg-tertiary)';
        item.style.border = '1px solid var(--border-color)';
        item.style.padding = '0.65rem 0.85rem';
        item.style.borderRadius = '0.5rem';
        item.style.display = 'flex';
        item.style.justifyContent = 'space-between';
        item.style.alignItems = 'center';
        
        let statusBadge = '';
        if (proc.status === 'Pendente') {
            statusBadge = '<span class="badge badge-warning" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#fbbf24;"></span>Pendente</span>';
        } else if (proc.status === 'Agendado') {
            statusBadge = '<span class="badge badge-info" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#22d3ee;"></span>Agendado</span>';
        } else {
            statusBadge = '<span class="badge badge-success" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#34d399;"></span>Realizado</span>';
        }
        
        let statusFatBadge = '';
        if (proc.id_remessa) {
            statusFatBadge = `<span class="badge badge-info" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#22d3ee;"></span>Lote: ${proc.id_remessa}</span>`;
        } else if (proc.status_faturamento === 'Com Pendência') {
            statusFatBadge = `<span class="badge badge-warning" style="font-size:0.65rem; padding:0.15rem 0.5rem; background-color: var(--warning-glow); color: var(--warning);" title="Pendência: ${proc.pendencia_descricao}"><span class="badge-dot" style="background-color:var(--warning);"></span>Com Pendência</span>`;
        } else if (proc.status_faturamento === 'Faturado') {
            statusFatBadge = `<span class="badge badge-success" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#34d399;"></span>Faturado</span>`;
        } else if (proc.status_faturamento === 'Glosado') {
            statusFatBadge = `<span class="badge badge-danger" style="font-size:0.65rem; padding:0.15rem 0.5rem;" title="Motivo: ${proc.motivo_glosa}"><span class="badge-dot" style="background-color:#f87171;"></span>Glosado</span>`;
        } else if (proc.status_faturamento === 'Reapresentado') {
            statusFatBadge = `<span class="badge badge-info" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#22d3ee;"></span>Reapresentado</span>`;
        } else {
            statusFatBadge = `<span class="badge badge-warning" style="font-size:0.65rem; padding:0.15rem 0.5rem;"><span class="badge-dot" style="background-color:#fbbf24;"></span>Não Faturado</span>`;
        }
        
        let metaExecucao = '';
        if (proc.status === 'Realizado' && proc.dt_execucao) {
            metaExecucao = `<span style="font-size:0.7rem; color:var(--text-muted); margin-left:0.5rem;">Conclusão: <strong>${formatDate(proc.dt_execucao)}</strong></span>`;
        }
        
        let oncoMeta = '';
        if (proc.exigeDiagnostico && proc.dt_diagnostico) {
            oncoMeta = `<div style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.2rem;">Laudo Neoplasia: <strong style="color:var(--text-primary);">${formatDate(proc.dt_diagnostico)}</strong></div>`;
        }
        
        let pendenciaMeta = '';
        if (proc.status_faturamento === 'Com Pendência' && proc.pendencia_descricao) {
            pendenciaMeta = `<div style="font-size:0.7rem; color:var(--warning); margin-top:0.2rem;">Pendência: <strong style="color:var(--text-primary);">${proc.pendencia_descricao}</strong></div>`;
        }
        
        item.innerHTML = `
            <div style="max-width:70%;">
                <p style="font-size:0.82rem; font-weight:700; color:var(--text-primary);">${proc.nome}</p>
                <div style="font-size:0.7rem; color:var(--text-secondary); margin-top:0.2rem;">
                    <span>Cód: <strong>${proc.codigo}</strong></span>
                    <span style="margin-left:0.5rem;">Qtd: <strong>${proc.qtd}</strong></span>
                    ${metaExecucao}
                </div>
                ${oncoMeta}
                ${pendenciaMeta}
            </div>
            <div style="display:flex; flex-direction:column; gap:0.3rem; align-items:flex-end;">
                ${statusBadge}
                ${statusFatBadge}
            </div>
        `;
        container.appendChild(item);
    });
    
    openModal('modal-detalhe-panorama');
}

function abrirDetalheOciMedico(cdAtendimento) {
    const ociPac = db_oci_pacientes.find(p => p.cd_atendimento === cdAtendimento);
    if (ociPac) {
        abrirDetalhePanorama(ociPac.id);
    }
}

window.openPanoramaGeralModal = openPanoramaGeralModal;
window.renderPanoramaGeral = renderPanoramaGeral;
window.abrirDetalhePanorama = abrirDetalhePanorama;
window.abrirDetalheOciMedico = abrirDetalheOciMedico;

// 19b. Cancelamento de OCI dentro da janela de 2 horas
function confirmarCancelamentoOci(ociId) {
    const oci = db_oci_pacientes.find(p => p.id === ociId);
    if (!oci) return;
    
    // Verifica se ainda está dentro da janela
    const dtInclusao = new Date(oci.dt_criacao_ts);
    const agora = new Date();
    const diffMin = Math.floor((agora - dtInclusao) / 60000);
    const restMin = 120 - diffMin;
    
    if (restMin <= 0) {
        alert('O prazo de 2 horas para cancelamento desta OCI já expirou.\nPara desfazer esta inclusão, entre em contato com o faturamento.');
        renderMedicoView();
        return;
    }
    
    const hRest = Math.floor(restMin / 60);
    const mRest = restMin % 60;
    const tempoLabel = hRest > 0 ? `${hRest}h ${mRest.toString().padStart(2,'0')}min` : `${mRest} minutos`;
    
    // Abre modal de cancelamento
    document.getElementById('cancel-oci-id').value = ociId;
    document.getElementById('cancel-oci-paciente-nome').textContent = oci.nm_paciente;
    document.getElementById('cancel-oci-tempo-restante').textContent = tempoLabel;
    document.getElementById('cancel-oci-motivo').value = '';
    document.getElementById('cancel-oci-dt-inclusao').textContent = 
        new Date(oci.dt_criacao_ts).toLocaleString('pt-BR', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' });
    
    openModal('modal-cancelar-oci');
}

function executarCancelamentoOci() {
    const ociId = document.getElementById('cancel-oci-id').value;
    const motivo = document.getElementById('cancel-oci-motivo').value.trim();
    
    if (!motivo) {
        alert('Por favor, informe o motivo do cancelamento.');
        return;
    }
    
    const oci = db_oci_pacientes.find(p => p.id === ociId);
    if (!oci) { closeModal('modal-cancelar-oci'); return; }
    
    // Verifica novamente a janela (pode ter expirado enquanto o modal estava aberto)
    const dtInclusao = new Date(oci.dt_criacao_ts);
    const diffMin = Math.floor((new Date() - dtInclusao) / 60000);
    if (diffMin >= 120) {
        alert('O prazo de 2 horas expirou durante o preenchimento.\nO cancelamento não pode mais ser realizado.');
        closeModal('modal-cancelar-oci');
        renderMedicoView();
        return;
    }
    
    // Remove a OCI do banco de pacientes
    db_oci_pacientes = db_oci_pacientes.filter(p => p.id !== ociId);
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
    // Reverte o fl_oci_criada no atendimento do SoulMV
    db_soulmv = db_soulmv.map(at => {
        if (at.cd_atendimento === oci.cd_atendimento) {
            return { ...at, fl_oci_criada: false };
        }
        return at;
    });
    saveDb('oci_db_soulmv', db_soulmv);
    
    closeModal('modal-cancelar-oci');
    renderMedicoView();
    renderStats();
    
    alert(`✅ Inclusão de ${oci.nm_paciente} na OCI cancelada com sucesso!\nMotivo registrado: ${motivo}`);
}

window.confirmarCancelamentoOci = confirmarCancelamentoOci;
window.executarCancelamentoOci = executarCancelamentoOci;


function renderConsolidadoRemessasOcis() {
    const container = document.getElementById('consolidado-ocis-container');
    if (!container) return;
    container.innerHTML = '';
    
    // 1. Extrair todos os exames em remessas
    const examesEmRemessas = [];
    
    db_oci_pacientes.forEach(p => {
        if (!p.procedimentos) return;
        p.procedimentos.forEach(proc => {
            // Usa proc.id_remessa (nivel de procedimento)
            if (proc.id_remessa) {
                const remessa = db_oci_remessas.find(r => r.id === proc.id_remessa);
                const statusLote = remessa ? remessa.status : 'Em Aberto';
                const dtInclusaoLote = remessa ? remessa.dt_fechamento : p.dt_criacao;
                
                let dtEnvioRemessa = '-';
                if (remessa && remessa.status !== 'Em Digitação') {
                    dtEnvioRemessa = remessa.dt_fechamento;
                }
                
                examesEmRemessas.push({
                    paciente: p,
                    procedimento: proc,
                    remessa: remessa,
                    statusLote: statusLote,
                    dtInclusaoLote: dtInclusaoLote,
                    dtEnvioRemessa: dtEnvioRemessa
                });
            }
        });
    });
    
    if (examesEmRemessas.length === 0) {
        container.innerHTML = `<div style="text-align: center; color: var(--text-muted); padding: 3rem 0; font-size: 0.85rem;">Nenhum exame incluído em lote de remessa (aberto ou fechado) no momento.</div>`;
        return;
    }
    
    // 2. Agrupar por OCI
    const agrupadoOci = {};
    
    examesEmRemessas.forEach(item => {
        const ociKey = item.paciente.oci_codigo + ' - ' + item.paciente.oci_nome;
        if (!agrupadoOci[ociKey]) {
            agrupadoOci[ociKey] = {
                codigo: item.paciente.oci_codigo,
                nome: item.paciente.oci_nome,
                exames: []
            };
        }
        agrupadoOci[ociKey].exames.push(item);
    });
    
    // 3. Renderizar cada OCI e sua tabela
    Object.keys(agrupadoOci).forEach(key => {
        const grupo = agrupadoOci[key];
        const cardGroup = document.createElement('div');
        cardGroup.style.border = '1px solid var(--border-color)';
        cardGroup.style.borderRadius = '0.75rem';
        cardGroup.style.backgroundColor = 'var(--bg-secondary)';
        cardGroup.style.overflow = 'hidden';
        cardGroup.style.marginBottom = '1.25rem';
        cardGroup.style.boxShadow = 'var(--card-shadow)';
        
        let tbodyHtml = '';
        grupo.exames.forEach(ex => {
            const p = ex.paciente;
            const proc = ex.procedimento;
            
            // Simula data de agendamento como 1 dia útil após a solicitação ou usa dt_agendamento real
            let dtAgendamentoStr = '-';
            if (proc.dt_agendamento) {
                dtAgendamentoStr = proc.dt_agendamento;
            } else if (proc.status === 'Agendado' || proc.status === 'Realizado') {
                const baseDateStr = proc.dt_solicitacao || p.dt_criacao;
                if (baseDateStr) {
                    try {
                        const solicitacaoDate = new Date(baseDateStr + 'T00:00:00');
                        solicitacaoDate.setDate(solicitacaoDate.getDate() + 1);
                        dtAgendamentoStr = solicitacaoDate.toISOString().split('T')[0];
                    } catch (err) {
                        console.error("Erro ao simular data de agendamento:", err);
                        dtAgendamentoStr = baseDateStr;
                    }
                }
            }
            
            tbodyHtml += `
                <tr style="font-size: 0.76rem; border-bottom: 1px solid var(--border-color);">
                    <td style="padding: 0.65rem 0.85rem;">
                        <strong>${p.nm_paciente}</strong>
                        <span style="display:block; font-size:0.65rem; color:var(--text-muted); font-family:monospace;">ID: ${p.id} • Pront: ${p.cd_paciente} • Unidade: ${p.unidade || 'HUCM'}</span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem;">
                        <strong>${proc.nome}</strong>
                        <span style="display:block; font-size:0.65rem; color:var(--text-muted); font-family:monospace;">${proc.codigo}</span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; white-space:nowrap;">${formatDate(dtAgendamentoStr)}</td>
                    <td style="padding: 0.65rem 0.85rem; white-space:nowrap;">${formatDate(proc.dt_execucao || '-')}</td>
                    <td style="padding: 0.65rem 0.85rem; white-space:nowrap;">
                        ${formatDate(ex.dtInclusaoLote)}
                        <span style="display:block; font-size:0.65rem; color:var(--info); font-family:monospace; font-weight:700;">${ex.remessa ? ex.remessa.id : proc.id_remessa}</span>
                    </td>
                    <td style="padding: 0.65rem 0.85rem; white-space:nowrap;">
                        ${ex.dtEnvioRemessa !== '-' ? formatDate(ex.dtEnvioRemessa) : `<span class="badge badge-warning" style="font-size:0.6rem; padding:0.1rem 0.3rem;">Aguardando Envio</span>`}
                    </td>
                    <td style="padding: 0.65rem 0.85rem; font-size: 0.68rem; color: var(--text-secondary); line-height:1.3;">
                        <div>🩺 <strong>${p.prestador || 'Dr. Fernando Silva'}</strong></div>
                        <div>🤝 <strong>Aline Fonseca</strong></div>
                        <div>💼 <strong>Lucas Mendes</strong></div>
                    </td>
                </tr>
            `;
        });
        
        cardGroup.innerHTML = `
            <div style="background-color: var(--bg-tertiary); border-bottom: 1px solid var(--border-color); padding: 0.75rem 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--accent); margin: 0;">
                    ${grupo.nome} <span style="font-family:monospace; font-size:0.75rem; color:var(--text-muted); margin-left:0.5rem;">Cód OCI: ${grupo.codigo}</span>
                </h4>
                <span class="badge badge-info" style="font-size: 0.68rem; font-weight:700; padding:0.15rem 0.45rem;">
                    ${grupo.exames.length} procedimento(s)
                </span>
            </div>
            <div style="max-height: 250px; overflow-y: auto; overflow-x: auto; padding: 0.25rem;">
                <table style="width: 100%; border-collapse: collapse; text-align: left; min-width: 900px;">
                    <thead>
                        <tr style="font-size: 0.68rem; text-transform: uppercase; color: var(--text-secondary); border-bottom: 1px solid var(--border-color); background-color: rgba(0,0,0,0.015);">
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Paciente</th>
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Procedimento</th>
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Data Agendamento</th>
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Data Realização</th>
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Data Inclusão Remessa</th>
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Data Envio Remessa</th>
                            <th style="padding: 0.5rem 0.85rem; font-weight:700;">Usuário</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tbodyHtml}
                    </tbody>
                </table>
            </div>
        `;
        container.appendChild(cardGroup);
    });
}

function openConsolidadoOcisModal() {
    renderConsolidadoRemessasOcis();
    openModal('modal-consolidado-remessas');
}

// ======================================================
// Modal de Detalhe da Remessa (clique no card da remessa)
// ======================================================
function abrirDetalheRemessa(remessaId) {
    const remessa = db_oci_remessas.find(r => r.id === remessaId);
    if (!remessa) return;
    
    // Seta título e status
    document.getElementById('detalhe-remessa-id').textContent = remessa.id;
    document.getElementById('detalhe-remessa-competencia').textContent = remessa.competencia;
    document.getElementById('detalhe-remessa-dt').textContent = formatDate(remessa.dt_fechamento);
    
    let statusClass = 'badge-warning', statusLabel = remessa.status;
    if (remessa.status === 'Transmitido SUS') { statusClass = 'badge-info'; statusLabel = 'Fechada / Transmitida'; }
    else if (remessa.status === 'Processada / Aprovada') { statusClass = 'badge-success'; statusLabel = 'Aprovada SUS'; }
    else if (remessa.status === 'Lote Rejeitado') { statusClass = 'badge-danger'; statusLabel = 'Lote Rejeitado'; }
    else { statusLabel = 'Em Aberto / Digitação'; }
    document.getElementById('detalhe-remessa-status').className = `badge ${statusClass}`;
    document.getElementById('detalhe-remessa-status').textContent = statusLabel;
    
    // Coleta pacientes que têm procedimentos nesta remessa
    const pacientesMap = {};
    db_oci_pacientes.forEach(p => {
        p.procedimentos.forEach(proc => {
            if (proc.id_remessa === remessaId) {
                if (!pacientesMap[p.id]) {
                    pacientesMap[p.id] = { paciente: p, procs: [] };
                }
                pacientesMap[p.id].procs.push(proc);
            }
        });
    });
    
    const container = document.getElementById('detalhe-remessa-body');
    container.innerHTML = '';
    
    const pacientes = Object.values(pacientesMap);
    
    if (pacientes.length === 0) {
        container.innerHTML = `<p style="text-align:center; color:var(--text-muted); padding:2rem 0; font-size:0.85rem;">Nenhum paciente vinculado a esta remessa.</p>`;
    } else {
        // Agrupa por OCI
        const porOci = {};
        pacientes.forEach(({ paciente, procs }) => {
            const ociKey = paciente.oci_codigo + ' — ' + paciente.oci_nome;
            if (!porOci[ociKey]) {
                porOci[ociKey] = { codigo: paciente.oci_codigo, nome: paciente.oci_nome, items: [] };
            }
            porOci[ociKey].items.push({ paciente, procs });
        });
        
        Object.values(porOci).forEach(grupo => {
            // Cabeçalho do grupo OCI
            const ociBlock = document.createElement('div');
            ociBlock.style.marginBottom = '1.25rem';
            ociBlock.style.border = '1px solid var(--border-color)';
            ociBlock.style.borderRadius = '10px';
            ociBlock.style.overflow = 'hidden';
            
            let pacientesHtml = '';
            grupo.items.forEach(({ paciente: p, procs }) => {
                const totalProcs = p.procedimentos.length;
                const procsNaRemessa = procs.length;
                const procsFaturados = procs.filter(pr => pr.status_faturamento === 'Faturado' || pr.status_faturamento === 'Reapresentado').length;
                
                // Linha de procedimentos
                let procsHtml = '';
                procs.forEach(proc => {
                    let sfBadge = '';
                    if (proc.status_faturamento === 'Faturado') sfBadge = `<span class="badge badge-success" style="font-size:0.6rem; padding:0.1rem 0.3rem;">Faturado</span>`;
                    else if (proc.status_faturamento === 'Reapresentado') sfBadge = `<span class="badge badge-info" style="font-size:0.6rem; padding:0.1rem 0.3rem;">Reapresentado</span>`;
                    else if (proc.status_faturamento === 'Glosado') sfBadge = `<span class="badge badge-danger" style="font-size:0.6rem; padding:0.1rem 0.3rem;">Glosado</span>`;
                    else sfBadge = `<span class="badge badge-warning" style="font-size:0.6rem; padding:0.1rem 0.3rem;">Pendente</span>`;
                    
                    procsHtml += `
                        <tr style="font-size:0.76rem; border-bottom:1px solid var(--border-color);">
                            <td style="padding:0.5rem 1rem; padding-left:2.5rem; color:var(--text-secondary);">
                                ├ ${proc.nome}
                                <span style="display:block; font-family:monospace; font-size:0.65rem; color:var(--text-muted);">${proc.codigo}</span>
                            </td>
                            <td style="padding:0.5rem 0.75rem; white-space:nowrap; font-size:0.7rem;">${formatDate(proc.dt_execucao || '-')}</td>
                            <td style="padding:0.5rem 0.75rem;">${sfBadge}</td>
                            <td style="padding:0.5rem 0.75rem; font-size:0.7rem; color:var(--success); font-weight:700;">R$ ${(proc.valor || 0).toFixed(2)}</td>
                        </tr>`;
                });
                
                pacientesHtml += `
                    <tr style="background:var(--bg-secondary);">
                        <td colspan="4" style="padding:0.65rem 1rem;">
                            <div style="display:flex; align-items:center; justify-content:space-between;">
                                <div>
                                    <strong style="font-size:0.85rem;">${p.nm_paciente}</strong>
                                    <span style="font-size:0.7rem; color:var(--text-muted); margin-left:0.5rem; font-family:monospace;">Pront: ${p.cd_paciente} | ${p.unidade || 'HUCM'}</span>
                                </div>
                                <span class="badge ${procsFaturados === procsNaRemessa ? 'badge-success' : 'badge-warning'}" style="font-size:0.68rem;">
                                    ${procsFaturados}/${procsNaRemessa} proc(s) nesta remessa
                                    <span style="font-size:0.6rem; opacity:0.7;"> • ${totalProcs} total na OCI</span>
                                </span>
                            </div>
                        </td>
                    </tr>
                    ${procsHtml}`;
            });
            
            ociBlock.innerHTML = `
                <div style="background:linear-gradient(135deg,var(--bg-tertiary),var(--bg-secondary)); border-bottom:1px solid var(--border-color); padding:0.65rem 1rem; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <span style="font-size:0.75rem; font-weight:700; color:var(--accent);">${grupo.nome}</span>
                        <span style="font-family:monospace; font-size:0.65rem; color:var(--text-muted); margin-left:0.5rem;">${grupo.codigo}</span>
                    </div>
                    <span class="badge badge-info" style="font-size:0.65rem;">${grupo.items.length} paciente(s)</span>
                </div>
                <table style="width:100%; border-collapse:collapse;">
                    <thead>
                        <tr style="font-size:0.65rem; text-transform:uppercase; color:var(--text-muted); border-bottom:1px solid var(--border-color); background:rgba(0,0,0,0.02);">
                            <th style="padding:0.4rem 1rem; font-weight:700;">Paciente / Procedimento</th>
                            <th style="padding:0.4rem 0.75rem; font-weight:700;">Data Realização</th>
                            <th style="padding:0.4rem 0.75rem; font-weight:700;">Status</th>
                            <th style="padding:0.4rem 0.75rem; font-weight:700;">Valor SUS</th>
                        </tr>
                    </thead>
                    <tbody>${pacientesHtml}</tbody>
                </table>
            `;
            container.appendChild(ociBlock);
        });
        
        // Totais
        const totalProcsRemessa = pacientes.reduce((acc, { procs }) => acc + procs.length, 0);
        const valorTotalRemessa = pacientes.reduce((acc, { procs }) => acc + procs.reduce((s, pr) => s + (pr.valor || 0), 0), 0);
        const totaisDiv = document.createElement('div');
        totaisDiv.style.cssText = 'display:flex; justify-content:flex-end; gap:1.5rem; padding:0.75rem 0.25rem; border-top:2px solid var(--border-color); margin-top:0.5rem;';
        totaisDiv.innerHTML = `
            <span style="font-size:0.8rem; color:var(--text-secondary);">Total pacientes: <strong>${pacientes.length}</strong></span>
            <span style="font-size:0.8rem; color:var(--text-secondary);">Total procedimentos: <strong>${totalProcsRemessa}</strong></span>
            <span style="font-size:0.85rem; color:var(--success); font-weight:700;">Valor total: R$ ${valorTotalRemessa.toFixed(2)}</span>
        `;
        container.appendChild(totaisDiv);
    }
    
    openModal('modal-detalhe-remessa');
}

window.openConsolidadoOcisModal = openConsolidadoOcisModal;
window.renderConsolidadoRemessasOcis = renderConsolidadoRemessasOcis;
window.abrirDetalheRemessa = abrirDetalheRemessa;
window.faturarTodosProcedimentos = faturarTodosProcedimentos;
window.faturarProcedimento = faturarProcedimento;


