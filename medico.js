// Banco de Dados Compartilhado e Lógica de Negócio para o Painel Clínico do Médico

const OCI_DEFINITIONS = {
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
    }
};

const INITIAL_SOULMV_ATENDIMENTOS = [
    { cd_atendimento: '1029481', dt_atendimento: '2026-05-24', cd_paciente: '44592', nm_paciente: 'Carlos Eduardo Souza', nr_cpf: '102.394.885-30', nr_cns: '702938102938102', especialidade: 'Cardiologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'HUCM' },
    { cd_atendimento: '1029490', dt_atendimento: '2026-05-24', cd_paciente: '39281', nm_paciente: 'Maria das Graças Silva', nr_cpf: '085.392.193-44', nr_cns: '708291039281039', especialidade: 'Cardiologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'ACM' },
    { cd_atendimento: '1029512', dt_atendimento: '2026-05-23', cd_paciente: '55192', nm_paciente: 'Antônio Francisco Costa', nr_cpf: '129.302.948-22', nr_cns: '709281039281023', especialidade: 'Oncologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'IOCM' },
    { cd_atendimento: '1029525', dt_atendimento: '2026-05-23', cd_paciente: '82710', nm_paciente: 'Ana Beatriz Oliveira', nr_cpf: '332.910.492-91', nr_cns: '701293810293810', especialidade: 'Oncologia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'IONCM' },
    { cd_atendimento: '1029700', dt_atendimento: '2026-05-24', cd_paciente: '12389', nm_paciente: 'Roberto Carlos Medeiros', nr_cpf: '112.394.881-20', nr_cns: '701238910293819', especialidade: 'Ortopedia', prestador: 'Dr. Fernando Silva', fl_oci_criada: false, unidade: 'HUCM' },
    { cd_atendimento: '1029600', dt_atendimento: '2026-05-22', cd_paciente: '99281', nm_paciente: 'José de Ribamar Alves', nr_cpf: '450.293.109-88', nr_cns: '704928102938492', especialidade: 'Cardiologia', prestador: 'Dr. Ricardo Santos', fl_oci_criada: false, unidade: 'IOCM' },
    { cd_atendimento: '1029615', dt_atendimento: '2026-05-22', cd_paciente: '77281', nm_paciente: 'Tereza Cristina Ramos', nr_cpf: '002.392.810-77', nr_cns: '705829102938109', especialidade: 'Oncologia', prestador: 'Dr. Ricardo Santos', fl_oci_criada: false, unidade: 'IONCM' }
];

// CPFs Simulados dos Médicos
const DOCTOR_CPFS = {
    'Dr. Fernando Silva': '111.111.111-11',
    'Dr. Ricardo Santos': '222.222.222-22'
};

// Funções de Acesso ao Banco LocalStorage
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
let db_oci_definitions = getDb('oci_db_definitions', OCI_DEFINITIONS);
let db_oci_remessas = getDb('oci_db_remessas', []);

// Variáveis Globais de Operação
let activeAtendimento = null;
let temporaryOciPacienteData = null; // Guarda os dados antes de assinar com CPF
let currentPageMedico = 1;
const itemsPerPageMedico = 5;

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderMedicoView();
    renderStats();

    // Eventos
    document.getElementById('form-inclusao-oci').addEventListener('submit', handleInsertOci);
    document.getElementById('form-cpf-medico').addEventListener('submit', handleConfirmAssinatura);
    
    document.getElementById('select-oci-tipo').addEventListener('change', (e) => {
        renderProceduresChecklist(e.target.value);
    });

    // Máscara reativa de CPF
    const cpfInput = document.getElementById('input-medico-cpf');
    if (cpfInput) {
        cpfInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length > 11) v = v.substring(0, 11);
            if (v.length > 9) {
                v = `${v.substring(0,3)}.${v.substring(3,6)}.${v.substring(6,9)}-${v.substring(9)}`;
            } else if (v.length > 6) {
                v = `${v.substring(0,3)}.${v.substring(3,6)}.${v.substring(6)}`;
            } else if (v.length > 3) {
                v = `${v.substring(0,3)}.${v.substring(3)}`;
            }
            e.target.value = v;
        });
    }
});

// Renderização dos Atendimentos
function renderMedicoView() {
    const searchVal = document.getElementById('search-medico').value.toLowerCase().trim();
    const dateStart = document.getElementById('medico-date-start').value;
    const dateEnd = document.getElementById('medico-date-end').value;
    const tbody = document.getElementById('table-medico-body');
    tbody.innerHTML = '';

    // Filtrar atendimentos (mostra todos os médicos do protótipo)
    const filtrados = db_soulmv.filter(at => {
        const matchSearch = at.nm_paciente.toLowerCase().includes(searchVal) || at.cd_atendimento.includes(searchVal) || at.prestador.toLowerCase().includes(searchVal);
        let matchDate = true;
        if (dateStart) matchDate = matchDate && (at.dt_atendimento >= dateStart);
        if (dateEnd) matchDate = matchDate && (at.dt_atendimento <= dateEnd);
        return matchSearch && matchDate;
    });

    const totalItems = filtrados.length;
    const start = (currentPageMedico - 1) * itemsPerPageMedico;
    const end = start + itemsPerPageMedico;
    const paginados = filtrados.slice(start, end);

    if (paginados.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: var(--text-muted);">Nenhum atendimento clínico localizado.</td></tr>`;
        renderPagination('medico-pagination', 0, itemsPerPageMedico, currentPageMedico, 'changePageMedico');
        return;
    }

    paginados.forEach(at => {
        const tr = document.createElement('tr');
        
        let cancelarBtn = '';
        if (at.fl_oci_criada) {
            const ociPaciente = db_oci_pacientes.find(p => p.cd_atendimento === at.cd_atendimento);
            if (ociPaciente && ociPaciente.dt_criacao_ts) {
                const dtInclusao = new Date(ociPaciente.dt_criacao_ts);
                const agora = new Date();
                const diffMin = Math.floor((agora - dtInclusao) / 60000);
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
            <td>
                <strong>${at.nm_paciente}</strong>
                <span style="display:block; font-size:0.7rem; color:var(--text-muted);">Médico: <strong>${at.prestador}</strong></span>
            </td>
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
                        <button class="btn btn-sm" onclick="abrirDetalheOciMedico('${at.cd_atendimento}')" style="background-color: var(--success-glow); color: var(--success); border-color: var(--success); cursor: pointer;">Detalhes</button>
                        ${cancelarBtn}
                       </div>`
                    : `<button class="btn btn-primary btn-sm" onclick="openOciModal('${at.cd_atendimento}')">Incluir OCI</button>`
                }
            </td>
        `;
        tbody.appendChild(tr);
    });

    renderPagination('medico-pagination', totalItems, itemsPerPageMedico, currentPageMedico, 'changePageMedico');
}

// Abrir Modal de Prescrição
function openOciModal(cd_atendimento) {
    activeAtendimento = db_soulmv.find(at => at.cd_atendimento === cd_atendimento);
    if (!activeAtendimento) return;

    document.getElementById('modal-paciente-nome').textContent = activeAtendimento.nm_paciente;
    document.getElementById('modal-paciente-cns').textContent = activeAtendimento.nr_cns;
    document.getElementById('modal-paciente-cpf').textContent = activeAtendimento.nr_cpf;
    document.getElementById('modal-paciente-pront').textContent = activeAtendimento.cd_paciente;

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

    document.getElementById('checklist-container').innerHTML = `<p style="color: var(--text-secondary); font-size: 0.875rem;">Selecione uma OCI acima para carregar o checklist.</p>`;
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

// Preparar Inserção e Pedir CPF
function handleInsertOci(e) {
    e.preventDefault();
    const ociKey = document.getElementById('select-oci-tipo').value;
    if (!ociKey) {
        alert('Por favor, selecione uma OCI.');
        return;
    }

    const ociDef = db_oci_definitions[ociKey];
    const selecionados = [];
    ociDef.procedimentos.forEach((proc, index) => {
        const chk = document.getElementById(`proc-${index}`);
        if (chk && chk.checked) {
            selecionados.push({
                codigo: proc.codigo,
                nome: proc.nome,
                qtd: proc.qtd,
                exigeDiagnostico: proc.exigeDiagnostico || false,
                status: 'Pendente',
                dt_solicitacao: getHoje(),
                dt_execucao: '',
                dt_diagnostico: '',
                valor: ociDef.valorPrincipal / ociDef.procedimentos.length,
                status_faturamento: 'Pendente',
                competencia: '',
                motivo_glosa: ''
            });
        }
    });

    if (selecionados.length === 0) {
        alert('Selecione pelo menos um procedimento secundário.');
        return;
    }

    // Guardar dados temporariamente
    temporaryOciPacienteData = {
        id: 'OCI-' + Math.floor(100000 + Math.random() * 900000),
        cd_atendimento: activeAtendimento.cd_atendimento,
        cd_paciente: activeAtendimento.cd_paciente,
        nm_paciente: activeAtendimento.nm_paciente,
        nr_cpf: activeAtendimento.nr_cpf,
        nr_cns: activeAtendimento.nr_cns,
        prestador: activeAtendimento.prestador,
        unidade: activeAtendimento.unidade || 'HUCM',
        oci_key: ociKey,
        oci_codigo: ociDef.codigo,
        oci_nome: ociDef.nome,
        dt_criacao: getHoje(),
        dt_criacao_ts: new Date().toISOString(),
        competencia_inicial: getCompetenciaAtual(),
        id_remessa: null,
        status: 'Ativa',
        procedimentos: selecionados
    };

    // Abre modal de CPF de Assinatura
    document.getElementById('input-medico-nome-assinatura').value = activeAtendimento.prestador;
    document.getElementById('input-medico-cpf').value = '';
    openModal('modal-cpf-medico');
}

// Confirmar Assinatura com CPF
function handleConfirmAssinatura(e) {
    e.preventDefault();
    const typedCpf = document.getElementById('input-medico-cpf').value.trim();
    
    // Validação básica de tamanho/estrutura
    if (typedCpf.length !== 14) {
        alert('Por favor, digite um CPF válido no formato 000.000.000-00.');
        return;
    }

    const expectedCpf = DOCTOR_CPFS[temporaryOciPacienteData.prestador];
    
    // Se o médico estiver cadastrado, exige o CPF dele para fins de simulação
    if (expectedCpf && typedCpf !== expectedCpf) {
        alert(`Assinatura Recusada!\nO CPF digitado (${typedCpf}) não confere com o cadastro do prestador ${temporaryOciPacienteData.prestador}.\n\n(Dica para teste: use ${expectedCpf})`);
        return;
    }

    // Salvar CPF
    temporaryOciPacienteData.cpf_medico = typedCpf;

    // Persistir no Banco de Dados
    db_oci_pacientes.push(temporaryOciPacienteData);
    saveDb('oci_db_pacientes', db_oci_pacientes);

    db_soulmv = db_soulmv.map(at => {
        if (at.cd_atendimento === temporaryOciPacienteData.cd_atendimento) {
            return { ...at, fl_oci_criada: true };
        }
        return at;
    });
    saveDb('oci_db_soulmv', db_soulmv);

    // Fechar modais
    closeModal('modal-cpf-medico');
    closeModal('modal-oci');

    // Resetar estados
    temporaryOciPacienteData = null;
    renderMedicoView();
    renderStats();

    alert('✅ Prescrição de OCI assinada eletronicamente e cadastrada com sucesso!');
}

// Cancelamento de OCI
function confirmarCancelamentoOci(ociId) {
    const oci = db_oci_pacientes.find(p => p.id === ociId);
    if (!oci) return;
    
    const dtInclusao = new Date(oci.dt_criacao_ts);
    const agora = new Date();
    const diffMin = Math.floor((agora - dtInclusao) / 60000);
    const restMin = 120 - diffMin;
    
    if (restMin <= 0) {
        alert('O prazo de 2 horas para cancelamento já expirou.');
        renderMedicoView();
        return;
    }
    
    const hRest = Math.floor(restMin / 60);
    const mRest = restMin % 60;
    const tempoLabel = hRest > 0 ? `${hRest}h ${mRest.toString().padStart(2,'0')}min` : `${mRest} minutos`;
    
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
    
    db_oci_pacientes = db_oci_pacientes.filter(p => p.id !== ociId);
    saveDb('oci_db_pacientes', db_oci_pacientes);
    
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
    
    alert(`Inclusão de ${oci.nm_paciente} cancelada com sucesso!`);
}

// Estatísticas
function renderStats() {
    db_soulmv = getDb('oci_db_soulmv', INITIAL_SOULMV_ATENDIMENTOS);
    const atendimentosPendentes = db_soulmv.filter(at => !at.fl_oci_criada).length;
    document.getElementById('stat-medico-pendentes').textContent = atendimentosPendentes;
}

// Helpers
function getHoje() {
    return new Date().toISOString().split('T')[0];
}

function getCompetenciaAtual() {
    const hoje = new Date();
    return `${String(hoje.getMonth() + 1).padStart(2, '0')}/${hoje.getFullYear()}`;
}

function formatDate(dateStr) {
    if (!dateStr) return '-';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    if (typeof modalId === 'string') {
        document.getElementById(modalId).classList.remove('active');
    } else {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    }
}

// Paginação
function renderPagination(containerId, totalItems, itemsPerPage, currentPage, onPageChangeCallbackName) {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (totalItems === 0) { container.innerHTML = ''; container.style.display = 'none'; return; }
    
    container.style.display = 'flex';
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startItem = (currentPage - 1) * itemsPerPage + 1;
    const endItem = Math.min(currentPage * itemsPerPage, totalItems);
    
    container.innerHTML = `
        <div class="pagination-info">Mostrando <strong>${startItem}-${endItem}</strong> de <strong>${totalItems}</strong></div>
        <div class="pagination-pages">
            <button class="page-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="${onPageChangeCallbackName}(${currentPage - 1})">&laquo; Anterior</button>
            ${Array.from({length: totalPages}, (_, i) => i + 1).map(p => `
                <button class="page-btn ${p === currentPage ? 'active' : ''}" onclick="${onPageChangeCallbackName}(${p})">${p}</button>
            `).join('')}
            <button class="page-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="${onPageChangeCallbackName}(${currentPage + 1})">Próximo &raquo;</button>
        </div>
    `;
}

function changePageMedico(page) { currentPageMedico = page; renderMedicoView(); }
function resetPageMedicoAndRender() { currentPageMedico = 1; renderMedicoView(); }

window.changePageMedico = changePageMedico;
window.resetPageMedicoAndRender = resetPageMedicoAndRender;
window.closeModal = closeModal;
window.confirmarCancelamentoOci = confirmarCancelamentoOci;

// ==========================================
// Panorama Geral integrado (Leitura Compartilhada)
// ==========================================
function renderPanoramaGeral() {
    db_oci_pacientes = getDb('oci_db_pacientes', []);
    db_oci_remessas = getDb('oci_db_remessas', []);
    
    const tbody = document.getElementById('table-panorama-body');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    const searchVal = document.getElementById('search-panorama') ? document.getElementById('search-panorama').value.toLowerCase().trim() : '';
    
    const totalPacientes = db_oci_pacientes.length;
    document.getElementById('pan-kpi-pacientes').textContent = totalPacientes;
    
    let somaProgresso = 0, repassePrevisto = 0, totalProcedimentos = 0, totalGlosas = 0;
    
    db_oci_pacientes.forEach(p => {
        const totalP = p.procedimentos.length;
        const realizadosP = p.procedimentos.filter(pr => pr.status === 'Realizado').length;
        somaProgresso += totalP > 0 ? (realizadosP / totalP) : 0;
        
        const ociDef = db_oci_definitions[p.oci_key];
        repassePrevisto += ociDef ? ociDef.valorPrincipal : 200.00;
        
        p.procedimentos.forEach(proc => {
            totalProcedimentos++;
            if (proc.status_faturamento === 'Glosado') totalGlosas++;
        });
    });
    
    if (totalPacientes === 0) {
        document.getElementById('pan-kpi-progresso').textContent = '0%';
        document.getElementById('pan-kpi-valor').textContent = 'R$ 0,00';
        document.getElementById('pan-kpi-glosas').textContent = '0%';
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:2rem 0;">Nenhum paciente em linha de cuidado.</td></tr>`;
        return;
    }
    
    document.getElementById('pan-kpi-progresso').textContent = Math.round((somaProgresso / totalPacientes) * 100) + '%';
    document.getElementById('pan-kpi-valor').textContent = 'R$ ' + repassePrevisto.toFixed(2);
    document.getElementById('pan-kpi-glosas').textContent = (totalProcedimentos > 0 ? Math.round((totalGlosas / totalProcedimentos) * 100) : 0) + '%';
    
    const filtrados = db_oci_pacientes.filter(p => {
        return p.nm_paciente.toLowerCase().includes(searchVal) || p.id.toLowerCase().includes(searchVal) || p.oci_codigo.includes(searchVal);
    });
    
    filtrados.forEach(p => {
        const totalP = p.procedimentos.length;
        const realizadosP = p.procedimentos.filter(pr => pr.status === 'Realizado').length;
        const progressoPct = totalP > 0 ? Math.round((realizadosP / totalP) * 100) : 0;
        
        const totalFaturados = p.procedimentos.filter(pr => pr.status_faturamento === 'Faturado' || pr.status_faturamento === 'Reapresentado').length;
        const totalGlosados = p.procedimentos.filter(pr => pr.status_faturamento === 'Glosado').length;
        const totalPendencias = p.procedimentos.filter(pr => pr.status_faturamento === 'Com Pendência').length;
        
        let statusFatHtml = '';
        if (p.id_remessa) {
            const rem = db_oci_remessas.find(r => r.id === p.id_remessa);
            const statusRem = rem ? rem.status : 'Em Lote';
            if (statusRem === 'Processada / Aprovada') statusFatHtml = `<span class="badge badge-success">Aprovado (${p.id_remessa})</span>`;
            else if (statusRem === 'Lote Rejeitado') statusFatHtml = `<span class="badge badge-danger">Recusado (${p.id_remessa})</span>`;
            else statusFatHtml = `<span class="badge badge-info">Em Validação (${p.id_remessa})</span>`;
        } else if (totalPendencias > 0) {
            statusFatHtml = `<span class="badge badge-warning">Pendência (${totalPendencias})</span>`;
        } else if (totalGlosados > 0) {
            statusFatHtml = `<span class="badge badge-danger">Glosa (${totalGlosados})</span>`;
        } else if (totalFaturados === totalP) {
            statusFatHtml = `<span class="badge badge-success">Aguardando Lote</span>`;
        } else {
            statusFatHtml = `<span class="badge badge-warning">Em Execução</span>`;
        }
        
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.onclick = () => abrirDetalhePanorama(p.id);
        tr.innerHTML = `
            <td><strong>${p.nm_paciente}</strong><span style="display:block; font-size:0.7rem; color:var(--text-muted);">${p.id}</span></td>
            <td><strong>${p.oci_codigo}</strong><span style="display:block; font-size:0.7rem; color:var(--text-muted);">${p.oci_nome}</span></td>
            <td>${formatDate(p.dt_criacao)}</td>
            <td>
                <div style="display:flex; align-items:center; gap:0.5rem;">
                    <div class="progress-bar-container" style="flex:1; width:70px; margin-top:0;"><div class="progress-bar" style="width: ${progressoPct}%;"></div></div>
                    <span style="font-size:0.75rem; font-weight:700;">${realizadosP}/${totalP}</span>
                </div>
            </td>
            <td>${statusFatHtml}</td>
            <td>
                <div class="evolution-timeline">
                    <span class="step completed">PR</span>
                    <span class="step-line ${realizadosP === totalP ? 'completed' : 'active'}"></span>
                    <span class="step ${realizadosP === totalP ? 'completed' : 'active'}">NV</span>
                    <span class="step-line ${totalFaturados === totalP ? 'completed' : 'active'}"></span>
                    <span class="step ${totalPendencias > 0 ? 'pending' : (totalGlosados > 0 ? 'glosed' : (totalFaturados === totalP ? 'completed' : 'active'))}">${totalPendencias > 0 ? 'PE' : (totalGlosados > 0 ? 'GL' : 'FT')}</span>
                    <span class="step-line"></span>
                    <span class="step">${p.id_remessa ? 'SUS' : 'AG'}</span>
                </div>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function abrirDetalhePanorama(pacienteId) {
    db_oci_pacientes = getDb('oci_db_pacientes', []);
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
        
        let statusBadge = proc.status === 'Realizado' ? '<span class="badge badge-success">Realizado</span>' : (proc.status === 'Agendado' ? '<span class="badge badge-info">Agendado</span>' : '<span class="badge badge-warning">Pendente</span>');
        let statusFatBadge = proc.id_remessa ? `<span class="badge badge-info">Lote: ${proc.id_remessa}</span>` : (proc.status_faturamento === 'Com Pendência' ? '<span class="badge badge-warning">Com Pendência</span>' : (proc.status_faturamento === 'Faturado' ? '<span class="badge badge-success">Faturado</span>' : '<span class="badge badge-warning">Não Faturado</span>'));
        
        item.innerHTML = `
            <div>
                <p style="font-size:0.82rem; font-weight:700;">${proc.nome}</p>
                <span style="font-size:0.7rem; color:var(--text-muted);">Cód: ${proc.codigo} | Qtd: ${proc.qtd}</span>
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
    db_oci_pacientes = getDb('oci_db_pacientes', []);
    const ociPac = db_oci_pacientes.find(p => p.cd_atendimento === cdAtendimento);
    if (ociPac) abrirDetalhePanorama(ociPac.id);
}

function openPanoramaGeralModal() {
    renderPanoramaGeral();
    openModal('modal-panorama-geral');
}

window.openPanoramaGeralModal = openPanoramaGeralModal;
window.renderPanoramaGeral = renderPanoramaGeral;
window.abrirDetalhePanorama = abrirDetalhePanorama;
window.abrirDetalheOciMedico = abrirDetalheOciMedico;
