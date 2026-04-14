// ============================================
// AG Cite - SPA Core Engine & Database Router
// ============================================

const I18N = {
    zh: {
        vtTitle: "Gemini 全息倒推链条", heroSubtitle: "下一代全息学术编辑器。深空环境底盘搭载大模态并发穿透，彻底淘汰落后的客户端与枯燥操作。<br>让你的科研真正回归内容，而不是被格式绑架。",
        btnEnter: "进入上一次的编辑阵列", btnNew: "+ 开辟新文档空间", btnFeedback: "投送反馈意见", heroScrollHint: "向下滚动察看产品矩阵剖析 ↓",
        featTitle: "是什么？它有什么恐怖功能？", fc1Title: "🚀 隐式深空排版 (Ghost Engine)", fc1Desc: "告别永远要你选样式的恶梦。在后台内嵌最极端的 5 种权威排版标准，依据作者数量进行算法判断。当你在右侧选择阵营，左侧的文章就会像被抽去了重力一样在一瞬间全部自适应排列完毕。",
        fc2Title: "🛰 量子原力追踪溯源 (Quantum Trace)", fc2Desc: "只需要划取黑底白字的一段普通句子。系统就会直接穿墙接通 Google Gemini 最新全量算力核心为你测算文献原始出处！这不是单纯的给书名，它还能把结果再次喂给美国 Crossref 中心局，直接给你抓出真正的资源注入仓内。",
        fc3Title: "🪐 虚空挂载大库 (Limitless SPA)", fc3Desc: "这是一个不依赖云端的终极单页应用程序。你的每一个点子都可以开设单独的隔断空间，随时在这暗色的防光害版面无缝切换灵感源泉与参考文献。",
        fbTitle: "构建者的意见箱", fbSubtitle: "前端直连抛送，所有内容将经由跨域传输抵达制作者底层数据库。", fbNamePh: "你的身份 / You Name", fbContentPh: "你想对这个反重力系统提的点什么刺？或者建议...", fbSubmit: "空投至作者邮箱",
        footerText: "全系引擎由 胡萝卜的BEN 创建于黑暗原力 | 合作共赢邮件请直连: <b>2464658798@qq.com</b><br>Powered by Antigravity Front-end Mesh & Gemini Space Net",
        refHeader: "References", searchLibPh: "搜索本地文献库 / Scholar...",
        emptyLib: "文献舱空荡荡的。<br>点击加号抓取你的第一份文献。", aiTraceBtn: "AI 逆向并发溯源抽取", opt1: "1 篇", opt3: "3 篇", opt5: "5 篇",
        lcTitle: "全学术领域排版指南 (Citation Rules Base)", lcSub: "掌握所有前沿格式的人数细分与算法拆解架构。",
        lcAPA: "APA 7th (心理与社科学派)", lcAPA_1: "<b>单作：</b> <code>(Wang, 2024)</code>", lcAPA_2: "<b>双作：</b> 使用字符桥接 <code>(Wang & Smith, 2024)</code>", lcAPA_3: "<b>三作极上：</b> 触发合著算法 <code>(Wang et al., 2024)</code>",
        lcMLA: "MLA 9th (纯正文科派)", lcMLA_1: "<b>单作无年：</b> <code>(Wang)</code>", lcMLA_2: "<b>双人组：</b> 纯文体 <code>(Wang and Smith)</code>", lcMLA_3: "<b>群落：</b> <code>(Wang et al.)</code>",
        lcChi: "Chicago (自然与历史架构)", lcChi_1: "<b>逻辑同 APA，抹除切分逗号：</b> <code>(Wang and Smith 2024)</code> 或 <code>(Wang et al. 2024)</code>",
        apInputPh: "请输入任意已知论文标题让天线捕获...", apBtn: "强捕", popInputPh: "键入参数极速挂载...", popFooter: "按 ↑ ↓ 键选择结果，Enter 爆破贯穿至文章内",
        newProjTitle: "开辟全新反重力分区", newProjPh: "请为新学术项目命名...", btnCancel: "弃置", btnConfirmNew: "缔造新区",
        pdfTitle: "将原件 PDF 抛落于此", pdfSub: "文件将在本地极速静默预处理以生成挂载引用点<br>（此为物理概念版展示）", btnReturn: "返回矩阵",
        toastCited: "成功引用", toastDeleted: "节点已清除脱机。", toastDropRef: "物理介质文本压入成功！",
        priceTitle: "解锁无引力研究限权", priceSub: "打破基础算力屏障，向企业级星环网络进军。<br>选择符合您野心的算力配置。",
        p1Name: "基础防卫", p1Price: "$0<span>/mo</span>", p1f1: "每日 5 次 Gemini 溯源下潜", p1f2: "固定单线程爬取器", p1f3: "单机内存数据限制", btnCurrent: "当前已启动",
        p2Name: "进阶星环 (Pro)", p2Price: "$9.9<span>/mo</span>", p2f1: "无限次 API 全局调用权", p2f2: "最高 5 并发数文献穿透提取", p2f3: "PDF 无损图文全解析阵列", p2f4: "云端私有仓库穿梭同步", btnUpgrade: "解锁超阶权能",
        p3Name: "母舰节点 (Enterprise)", p3Price: "$49<span>/mo</span>", p3f1: "私有化大模型底层微调接入", p3f2: "并发 100+ 文献节点矩阵组网", p3f3: "7x24 黑线网络专员巡护支持", btnContact: "连线指挥官"
    },
    en: {
        vtTitle: "Gemini Quantum Trace Terminal", heroSubtitle: "The Next-Gen Holographic Academic Editor. Embedded with LLM massive parallel thrusts to eliminate archaic clients and tedious formatting. <br>Refocus on your research, not formatting constraints.",
        btnEnter: "Enter Active Workspace", btnNew: "+ Initialize New Matrix", btnFeedback: "Transmit Feedback", heroScrollHint: "Scroll down to decrypt product metrics ↓",
        featTitle: "What is this Entity?", fc1Title: "🚀 Ghost Formatting Engine", fc1Desc: "Say goodbye to citation nightmares. Built-in support for 5 distinct citation paradigms with intelligent author-count auto-resolution.",
        fc2Title: "🛰 Quantum Source Tracing", fc2Desc: "Simply select an un-cited statement. Our AI tunnel drills directly to Gemini's latest compute core to pinpoint its true academic origin and hooks into the Crossref API to inject the metadata instantly.",
        fc3Title: "🪐 Limitless SPA Architecture", fc3Desc: "A completely server-agnostic Single Page Application. Spin up isolated instances for each research thought within seconds.",
        fbTitle: "Constructors Drop-Box", fbSubtitle: "Direct HTTP mailto transmission pushing securely to constructor's databank.", fbNamePh: "Your Identity / Call Sign", fbContentPh: "State your critique or enhancement request explicitly...", fbSubmit: "Airdrop via Protocol",
        footerText: "Engine forged by BEN The Carrot in the Dark Force. Connect: <b>2464658798@qq.com</b><br>Powered by Antigravity Front-end Mesh & Gemini Space Net",
        refHeader: "References", searchLibPh: "Search Local DB / Scholar...",
        emptyLib: "The document matrix is empty.<br>Click '+' to capture your first datum.", aiTraceBtn: "Initiate Neural Traceback", opt1: "1 Node", opt3: "3 Nodes", opt5: "5 Nodes",
        lcTitle: "Global Citation Logistics (Rules Base)", lcSub: "Mastering format syntax and threshold algorithms across authorities.",
        lcAPA: "APA 7th Framework", lcAPA_1: "<b>Single:</b> <code>(Wang, 2024)</code>", lcAPA_2: "<b>Duo:</b> Ampersand logic <code>(Wang & Smith, 2024)</code>", lcAPA_3: "<b>Swarm (3+):</b> Auto Abbreviation <code>(Wang et al., 2024)</code>",
        lcMLA: "MLA 9th Paradigm", lcMLA_1: "<b>Single No-Year:</b> <code>(Wang)</code>", lcMLA_2: "<b>Duo:</b> Textual bind <code>(Wang and Smith)</code>", lcMLA_3: "<b>Swarm:</b> <code>(Wang et al.)</code>",
        lcChi: "Chicago Architecture", lcChi_1: "<b>Similar to APA without comma:</b> <code>(Wang and Smith 2024)</code> or <code>(Wang et al. 2024)</code>",
        apInputPh: "Input partial title to trigger extraction probe...", apBtn: "Capture", popInputPh: "Type parameters to inject...", popFooter: "Key ↑ ↓ to switch, Enter to execute penetration",
        newProjTitle: "Establish New Alpha Sector", newProjPh: "Assign codename for new sector...", btnCancel: "Abort", btnConfirmNew: "Initialize",
        pdfTitle: "Drop Original PDF Material", pdfSub: "Instance will seamlessly compute and hash indexing vectors.<br>(Visual Prototype Sequence)", btnReturn: "Return to Matrix",
        toastCited: "Entity Cited", toastDeleted: "Node sequence purged.", toastDropRef: "Local Syntax Successfully Flushed into Active Chamber.",
        priceTitle: "Unlock Zero-Gravity Limits", priceSub: "Shatter compute barriers and advance to the Enterprise-Grade Hyper-Ring Network.<br>Select configuration matching your ambitions.",
        p1Name: "Base Defense", p1Price: "$0<span>/mo</span>", p1f1: "5 Gemini Deep Dives / Day", p1f2: "Single-thread Web Scraper", p1f3: "Local Memory Constraints", btnCurrent: "Currently Active",
        p2Name: "Pro Matrix", p2Price: "$9.9<span>/mo</span>", p2f1: "Unlimited Global API Compute", p2f2: "Max 5 Concurrent Traces", p2f3: "Lossless PDF Neural Parse", p2f4: "Private Cloud Workspace Sync", btnUpgrade: "Unlock Pro Power",
        p3Name: "Mothership Node", p3Price: "$49<span>/mo</span>", p3f1: "Private LLM Custom Tuning", p3f2: "100+ Node Concurrent Matrix", p3f3: "24/7 Dark Net Support Drone", btnContact: "Contact Commander"
    }
};

let currentLang = 'zh';

let projDb = window.AGC_PROJECTS;
let activeProj = window.AGC_PROJECTS.find(p => p.projectId === window.AGC_ACTIVE_PROJ_ID);

let currentFormat = 'apa';

// DOM Elements
const libList = document.getElementById('libList');
const fmtSegment = document.getElementById('fmtSegment');
const segmentItems = document.querySelectorAll('.segment-item');
const segPill = document.getElementById('segPill');
const refList = document.getElementById('refList');
const textBody = document.getElementById('textBody');
const docTitle = document.getElementById('docTitle');
const sidebarProjName = document.getElementById('sidebarProjName');
const navProjList = document.getElementById('navProjList');
const dynamicToast = document.getElementById('dynamicToast');
const searchOverlay = document.getElementById('searchOverlay');
const popoverInput = document.getElementById('popoverInput');
const popoverResults = document.getElementById('popoverResults');

// =============== SPA 级别路由跳跃与挂载 ===============
window.goHome = function() {
    document.getElementById('workspaceView').style.display = 'none';
    document.getElementById('pricingView').style.display = 'none';
    document.getElementById('homeView').style.display = 'flex';
}
window.goPricing = function() {
    document.getElementById('workspaceView').style.display = 'none';
    document.getElementById('homeView').style.display = 'none';
    document.getElementById('pricingView').style.display = 'flex';
}

window.updateLangRender = function() {
    const dict = I18N[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = dict[el.getAttribute('data-i18n')]; });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = dict[el.getAttribute('data-i18n-ph')]; });
    renderLibrary();
    updateAllCitations();
}

document.getElementById('langSwitchBtn').onclick = () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    showToast(currentLang === 'zh' ? "语言域切换: 中文" : "Language Domain: English");
    window.updateLangRender();
};

window.submitFeedbackForm = function() {
    const name = document.getElementById('fbName').value.trim();
    const content = document.getElementById('fbContent').value.trim();
    if(!content) { alert("意见箱不能投递空仓！"); return; }
    
    // 调用底层操作系统级邮箱拉起协议
    const mailtoLink = `mailto:2464658798@qq.com?subject=来自 Antigravity 学术平台 [${name || '匿名'}] 的意见&body=${encodeURIComponent(content)}`;
    window.location.href = mailtoLink;
}

function renderNav() {
    navProjList.innerHTML = '';
    projDb.forEach((p, idx) => {
        const btn = document.createElement('button');
        btn.className = `nav-btn ${p.projectId === activeProj.projectId ? 'active-proj' : ''}`;
        btn.title = p.projectName;
        btn.innerHTML = `<span style="font-size:16px; font-weight:700">${idx + 1}</span>`;
        btn.onclick = () => switchProject(p.projectId);
        navProjList.appendChild(btn);
    });
}

function switchProject(id) {
    activeProj = projDb.find(p => p.projectId === id);
    window.AGC_ACTIVE_PROJ_ID = id;
    
    // 渲染编辑器
    sidebarProjName.innerText = activeProj.projectName;
    docTitle.innerText = activeProj.documentTitle;
    textBody.innerHTML = activeProj.documentBody;
    
    // 更新视图
    document.getElementById('homeView').style.display = 'none';
    document.getElementById('pricingView').style.display = 'none';
    document.getElementById('workspaceView').style.display = 'flex';
    
    renderNav();
    renderLibrary();
    updateAllCitations();
}

// 主面板呼出器
window.enterWorkspace = function() {
    switchProject(window.AGC_ACTIVE_PROJ_ID);
}
window.createNewProject = function() {
    document.getElementById('projModalOverlay').classList.add('show');
}
document.getElementById('createNewProjBtn').onclick = window.createNewProject;

document.getElementById('confirmProjBtn').onclick = () => {
    let name = document.getElementById('projNameInput').value.trim();
    if(!name) name = "未命名研究阵列";
    const newId = "proj_0x" + Math.floor(Math.random()*10000);
    const newProj = {
        projectId: newId, projectName: name, documentTitle: "无标题文档",
        documentBody: "<p>这里空空如也，尝试敲打一些理论吧。</p>",
        library: [], citedIds: new Set()
    };
    projDb.push(newProj);
    document.getElementById('projModalOverlay').classList.remove('show');
    switchProject(newId);
}

document.getElementById('openLearningBtn').onclick = () => document.getElementById('learningCenterOverlay').classList.add('show');
document.getElementById('learningCenterOverlay').onmousedown = e => { if(e.target.id==='learningCenterOverlay') e.target.classList.remove('show'); };

// ============================================
// 物理介质深层摄取引擎 (FileReader Import API)
// ============================================
document.getElementById('uploadPdfBtn').onclick = () => document.getElementById('pdfModalOverlay').classList.add('show');

document.getElementById('uploadPhysicalBtn').onclick = () => document.getElementById('physicalFileUploader').click();
document.getElementById('physicalFileUploader').onchange = (e) => {
    const file = e.target.files[0];
    if(file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            let res = ev.target.result;
            // 解构文本文理转注为段落阵列
            res = res.split('\n').filter(l=>l.trim()).map(l=>`<p>${l}</p>`).join('');
            activeProj.documentBody = res;
            activeProj.documentTitle = file.name.replace(/\.[^/.]+$/, "");
            textBody.innerHTML = res;
            docTitle.innerText = activeProj.documentTitle;
            showToast(I18N[currentLang].toastDropRef);
        };
        reader.readAsText(file);
    }
};

// =============== 核心文献渲染与管理 ===============
function renderLibrary(query = '') {
    libList.innerHTML = '';
    const filtered = activeProj.library.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.authors.toLowerCase().includes(query.toLowerCase()) ||
        item.year.toString().includes(query)
    );
    
    if (filtered.length === 0) {
        document.getElementById('emptyState').style.display = 'block';
    } else {
        document.getElementById('emptyState').style.display = 'none';
        filtered.forEach(item => {
            const div = document.createElement('div');
            div.className = `lib-item lib-id-${item.id}`; // 便于定位溯源
            div.innerHTML = `
            <div class="lib-item-title">${item.title}</div>
            <div class="lib-item-meta">${item.authors} · ${item.year}</div>
            <div class="lib-item-actions">
                <button class="act-btn" onclick="insertCitation('${item.id}')">${currentLang==='zh'?'引用':'Cite'}</button>
                ${item.pdfUrl ? `<button class="act-btn" style="color:var(--text-secondary)">PDF</button>` : ''}
                <button class="act-btn del" onclick="deletePaper('${item.id}')">${currentLang==='zh'?'移除':'Drop'}</button>
            </div>
        `;
            libList.appendChild(div);
        });
    }
}

window.deletePaper = function(id) {
    if(confirm(currentLang==='zh'?"你确信要从当前阵列移除该文献吗？引用点可能失效！":"Are you certain you wish to purge this node? References may detach!")) {
        activeProj.library = activeProj.library.filter(p => p.id !== id);
        activeProj.citedIds.delete(id);
        renderLibrary();
        updateAllCitations();
        showToast(I18N[currentLang].toastDeleted);
    }
}

document.getElementById('sidebarSearch').addEventListener('input', (e) => renderLibrary(e.target.value));

// =============== 格式控制器引擎 (5段式) ===============
function initSegmentControl() {
    segmentItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            segmentItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            const pillWidth = 100 / segmentItems.length;
            segPill.style.width = `calc(${pillWidth}% - 8px)`;
            segPill.style.transform = `translateX(calc(${index * 100}% + ${index * 8}px))`;
            currentFormat = item.dataset.fmt;
            updateAllCitations();
        });
    });
    // init
    segPill.style.width = `calc(${100 / segmentItems.length}% - 8px)`;
    segPill.style.transform = `translateX(0px)`;
}

// 作者分离与计数算法
function parseAuthors(authorsString) {
    return authorsString.split(',').map(s => s.trim().replace(/^&/,'').trim()).filter(s => s.length > 0).map(author => {
        return author.split(' ')[0].replace(/[^a-zA-Z\u4e00-\u9fa5-]/g, '');
    }).filter(s => s);
}

function getInlineCitationText(item, forceIndex) {
    const authorArray = parseAuthors(item.authors);
    let authStr = "Unknown";
    if (authorArray.length === 1) { authStr = authorArray[0]; } 
    else if (authorArray.length === 2) { authStr = currentFormat === 'apa' ? `${authorArray[0]} & ${authorArray[1]}` : `${authorArray[0]} and ${authorArray[1]}`; } 
    else if (authorArray.length >= 3) { authStr = `${authorArray[0]} et al.`; }
    
    switch (currentFormat) {
        case 'apa': return `(${authStr}, ${item.year})`;
        case 'mla': return `(${authStr})`;
        case 'chicago': return `(${authStr} ${item.year})`;
        case 'gb': return `[${forceIndex}]`;
        case 'ieee': return `[${forceIndex}]`;
        default: return `(${authStr})`;
    }
}

function getReferenceEntryHTML(item, forceIndex) {
    const authorArray = parseAuthors(item.authors);
    const fullAuthStr = item.authors;
    
    switch (currentFormat) {
        case 'apa': return `<b>${fullAuthStr}</b> (${item.year}). <i>${item.title}</i>. ${item.journal}. ${item.doi}`;
        case 'mla': return `<b>${fullAuthStr}</b>. "${item.title}." <i>${item.journal}</i>, ${item.year}. ${item.doi}`;
        case 'chicago': return `<b>${fullAuthStr}</b>. "${item.title}." <i>${item.journal}</i> (${item.year}). ${item.doi}`;
        case 'gb': return `[${forceIndex}] <b>${authorArray.join(', ')}</b>. ${item.title}[J]. ${item.journal}, ${item.year}.`;
        case 'ieee': return `[${forceIndex}] ${fullAuthStr}, "${item.title}," <i>${item.journal}</i>, ${item.year}.`;
        default: return `<b>${fullAuthStr}</b> (${item.year}). <i>${item.title}</i>.`;
    }
}

function updateAllCitations() {
    // 同步实时物理层：如果从文本清除了，自动从 citedIds 摘取
    const currentChips = Array.from(document.querySelectorAll('.cite-chip'));
    activeProj.citedIds = new Set(currentChips.map(c => c.dataset.refid));

    let indexMapping = {}; 
    let ordinal = 1;
    activeProj.citedIds.forEach(id => { indexMapping[id] = ordinal++; });

    // 探测相邻聚类合并
    let groups = [];
    let currentGroup = [];
    for (let i = 0; i < currentChips.length; i++) {
        const chip = currentChips[i];
        if (currentGroup.length === 0) {
            currentGroup.push(chip);
        } else {
            const last = currentGroup[currentGroup.length - 1];
            let canMerge = true;
            let node = last.nextSibling;
            
            while(node && node !== chip) {
                if (node.nodeType === 3) {
                    const txt = node.textContent.trim();
                    if (txt === '' || [',', ';', '[', ']', '(', ')', '，', '；'].includes(txt)) {
                        node.parentNode.removeChild(node);
                        node = last.nextSibling;
                    } else { canMerge = false; break; }
                } else { canMerge = false; break; }
            }
            if (canMerge) { currentGroup.push(chip); } 
            else { groups.push(currentGroup); currentGroup = [chip]; }
        }
    }
    if (currentGroup.length > 0) groups.push(currentGroup);

    groups.forEach(group => {
        group.forEach((chip, idx) => {
            const id = chip.dataset.refid;
            const item = activeProj.library.find(d => d.id === id);
            if(!item) return;

            const authorArray = parseAuthors(item.authors);
            let authStr = authorArray.length === 1 ? authorArray[0] : (authorArray.length === 2 ? `${authorArray[0]} ${currentFormat === 'apa' ? '&' : 'and'} ${authorArray[1]}` : `${authorArray[0]} et al.`);
            
            let text = "";
            let idxNum = indexMapping[id];
            
            if (group.length === 1) {
                if(currentFormat === 'apa') text = `(${authStr}, ${item.year})`;
                else if(currentFormat === 'mla') text = `(${authStr})`;
                else if(currentFormat === 'chicago') text = `(${authStr} ${item.year})`;
                else text = `[${idxNum}]`; // gb, ieee
            } else {
                let inner = "";
                if(currentFormat === 'apa') inner = `${authStr}, ${item.year}`;
                else if(currentFormat === 'mla') inner = `${authStr}`;
                else if(currentFormat === 'chicago') inner = `${authStr} ${item.year}`;
                else inner = `${idxNum}`;

                if (idx === 0) {
                    text = ['gb', 'ieee'].includes(currentFormat) ? `[${inner}, ` : `(${inner}; `;
                } else if (idx === group.length - 1) {
                    text = ['gb', 'ieee'].includes(currentFormat) ? `${inner}]` : `${inner})`;
                } else {
                    text = ['gb', 'ieee'].includes(currentFormat) ? `${inner}, ` : `${inner}; `;
                }
            }

            chip.innerText = text;
            chip.onclick = () => {
                const el = document.querySelector(`.lib-id-${id}`);
                if(el) {
                    document.querySelectorAll('.lib-item').forEach(e => e.classList.remove('active-highlight'));
                    el.classList.add('active-highlight');
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(()=> el.classList.remove('active-highlight'), 2000);
                }
            };
        });
    });
    
    refList.innerHTML = '';
    activeProj.citedIds.forEach(id => {
        const item = activeProj.library.find(d => d.id === id);
        if (item) {
            const entry = document.createElement('div');
            entry.className = 'ref-entry';
            entry.innerHTML = getReferenceEntryHTML(item, indexMapping[id]);
            refList.appendChild(entry);
        }
    });
}

textBody.addEventListener('input', () => { updateAllCitations(); });

function showToast(msg) {
    dynamicToast.innerText = msg; dynamicToast.classList.add('show');
    setTimeout(() => dynamicToast.classList.remove('show'), 2000);
}

// 终端炫酷打印系统
const visualTerminal = document.getElementById('aiProcessTerminal');
const vtLogs = document.getElementById('vtLogs');
function addLog(msg) {
    const p = document.createElement('p'); p.innerHTML = `> ${msg}`;
    vtLogs.appendChild(p); vtLogs.scrollTop = vtLogs.scrollHeight;
}
async function runVisualTerminal(taskPromise) {
    visualTerminal.classList.add('show');
    vtLogs.innerHTML = '';
    addLog(`Initiating Remote Neural Link... <span class="vt-blink">_</span>`);
    
    try {
        await taskPromise;
    } finally {
        setTimeout(() => visualTerminal.classList.remove('show'), 2500);
    }
}

// 供暴露调用的插入核心接口
window.insertCitation = function(id) {
    const item = activeProj.library.find(d => d.id === id);
    if (!item) return;
    activeProj.citedIds.add(id);
    
    const span = document.createElement('span');
    span.className = 'cite-chip'; span.contentEditable = "false"; span.dataset.refid = id;
    span.innerText = getInlineCitationText(item, activeProj.citedIds.size);
    
    const sel = window.getSelection();
    if(sel.rangeCount > 0 && textBody.contains(sel.anchorNode)) {
        const range = sel.getRangeAt(0);
        range.insertNode(span);
        range.setStartAfter(span); range.collapse(true);
        sel.removeAllRanges(); sel.addRange(range);
    } else {
        textBody.appendChild(span); textBody.appendChild(document.createTextNode(" "));
    }
    
    updateAllCitations();
    showToast(`${I18N[currentLang].toastCited}: ${item.authors.split(',')[0]}`);
    searchOverlay.classList.remove('show');
}


// ============================================
// 星环网络爬虫 (Crossref Fetch & AI Terminal)
// ============================================
const addPaperOverlay = document.getElementById('addPaperOverlay');
const addPaperInput = document.getElementById('addPaperInput');
const execAddPaperBtn = document.getElementById('execAddPaperBtn');

document.getElementById('openAddModalBtn').onclick = () => { addPaperOverlay.classList.add('show'); setTimeout(() => addPaperInput.focus(), 50); };
addPaperOverlay.addEventListener('mousedown', (e) => { if(e.target === addPaperOverlay) addPaperOverlay.classList.remove('show'); });

async function fetchAndInjectCrossref(titleQuery) {
    // 这里采用纯异步抛出，过程供 Terminal 获取展示
    addLog(`Crossref Module targeting: [${titleQuery}]`);
    await new Promise(r => setTimeout(r, 600)); // 故意加一点延迟增强机械感
    
    const url = `https://api.crossref.org/works?query.title=${encodeURIComponent(titleQuery)}&select=title,author,issued,DOI,container-title&rows=1`;
    const r = await fetch(url);
    const data = await r.json();
    
    if(data.message.items && data.message.items.length > 0) {
        const item = data.message.items[0];
        const authorsStr = item.author ? item.author.map(a => a.family).join(', ') : "Unknown Author";
        let yearVal = new Date().getFullYear();
        if(item.issued && item.issued['date-parts'] && item.issued['date-parts'][0]) yearVal = item.issued['date-parts'][0][0];
        
        const newRef = {
            id: "ref_0x" + Math.floor(Math.random()*1000000),
            title: item.title ? item.title[0] : titleQuery,
            authors: authorsStr,
            year: yearVal,
            journal: item['container-title'] ? item['container-title'][0] : 'Unknown Journal',
            doi: item.DOI || '',
            abstract: "Auto scraped by AG Cite from Crossref node.", pdfUrl: ""
        };
        activeProj.library.push(newRef);
        renderLibrary();
        addLog(`<span style="color:#0f0">[SUCCESS] Element Mounted into Sector ${activeProj.projectId}.</span>`);
        return newRef;
    } else {
        addLog(`<span style="color:#ea4335">[WARN] 404 NO MATCH FOUND IN MATRIX.</span>`);
        return null;
    }
}

execAddPaperBtn.onclick = async () => {
    const v = addPaperInput.value.trim();
    if(!v) return;
    execAddPaperBtn.innerText = "捕获中..";
    
    runVisualTerminal((async () => {
        addLog(`Initiating Standalone Crossref Protocol...`);
        await fetchAndInjectCrossref(v);
        addPaperOverlay.classList.remove('show');
        addPaperInput.value = '';
    })());
    
    execAddPaperBtn.innerText = "强捕";
};

// ============================================
// 深空之眼：大语言模型高维反向溯源系统
// ============================================
const aiLookupToolbar = document.getElementById('aiLookupToolbar');
const GEMINI_KEY = "AIzaSyAgmdDjPGbGTnJ92RPnbEI6zuRf_gOcxbU"; 
let currentSelectedText = "";

document.addEventListener('selectionchange', () => {
    const sel = window.getSelection();
    if(sel.rangeCount > 0 && !sel.isCollapsed && textBody.contains(sel.anchorNode)) {
        currentSelectedText = sel.toString().trim();
        if(currentSelectedText.length > 10) {
            const range = sel.getRangeAt(0); const rect = range.getBoundingClientRect();
            aiLookupToolbar.style.left = `${rect.left + rect.width / 2 - 75}px`;
            aiLookupToolbar.style.top = `${rect.top - 45 + window.scrollY}px`;
            aiLookupToolbar.classList.add('active');
            return;
        }
    }
    aiLookupToolbar.classList.remove('active');
});

// 防止 mousedown 事件遮断下拉选择器
aiLookupToolbar.onmousedown = (e) => {
    if(e.target.tagName !== 'SELECT' && e.target.tagName !== 'OPTION') e.preventDefault();
}; 
document.getElementById('pullQuantity').onmousedown = (e) => e.stopPropagation();

document.getElementById('aiLookupExecuteGroup').onclick = () => {
    if(!currentSelectedText) return;
    const requestedCount = parseInt(document.getElementById('pullQuantity').value) || 1;
    aiLookupToolbar.classList.remove('active');
    
    // 注入全景重型终端任务线
    runVisualTerminal((async () => {
        addLog(`Establishing connection to gemini-flash-latest via HTTP2...`);
        await new Promise(r => setTimeout(r, 400));
        addLog(`Payload: "${currentSelectedText.substring(0,30)}..." [TARGET: ${requestedCount} Nodes]`);
        
        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${GEMINI_KEY}`;
            const promptStr = `作为极高阶全维学术检索器，倒推可能出自的准确英文文献标题。\n请返回 ${requestedCount} 个你认为最匹配的不同学术文献标题，标题之间必须且只能用 "|||" 来分割。严禁返回其余废话与标点符号。\n\n追查源: "${currentSelectedText}"`;
            const payload = { "contents": [{ "parts": [{"text": promptStr}] }] };
            
            addLog(`Awaiting Deep Inference Frame...`);
            const res = await fetch(url, { method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(payload) });
            const data = await res.json();
            
            if(data.candidates && data.candidates[0].content) {
                const rawResponse = data.candidates[0].content.parts[0].text.trim().replace(/['"]/g, '');
                const titles = rawResponse.split('|||').map(t => t.trim()).filter(t => t);
                
                addLog(`[Gemini Response] Found ${titles.length} Possible Parent(s).`);
                
                // 接力给星环抓取器 (多线路串行发送，防止由于高并发被 Crossref 防火墙阻断)
                for(let i=0; i<titles.length; i++) {
                    addLog(`Executing Probe [${i+1}/${titles.length}]: <b style="color:#fbbc04">${titles[i].substring(0,25)}...</b>`);
                    await fetchAndInjectCrossref(titles[i]);
                    await new Promise(r => setTimeout(r, 800)); // Crossref Request pacing
                }
                addLog(`<span style="color:#0f0">ALL TRACE MISSIONS COMPLETED.</span>`);
            } else if (data.error) {
                addLog(`<span style="color:#ea4335">API REJECT: ${data.error.message.substring(0,30)}</span>`);
            }
        } catch(e) {
            addLog(`<span style="color:#ea4335">FATAL NETWORK DROP: CORS or BLOCK.</span>`);
        } finally {
            window.getSelection().removeAllRanges();
        }
    })());
};

// =============== 突发唤醒引擎 ===============
let selectedPopIndex = -1;
let currentPopResults = [];

function renderPopoverResults(query = '') {
    currentPopResults = query ? activeProj.library.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.authors.toLowerCase().includes(query.toLowerCase()) ||
        item.year.toString().includes(query)
    ) : activeProj.library.slice(0, 5); 
    
    popoverResults.innerHTML = '';
    selectedPopIndex = -1;
    
    currentPopResults.forEach((item, idx) => {
        const div = document.createElement('div');
        div.className = 'pop-result-item';
        div.onclick = () => window.insertCitation(item.id);
        div.innerHTML = `
            <div class="pr-title">${item.title}</div>
            <div class="pr-meta">${item.authors} - ${item.year}</div>
            <div class="pr-preview">预看: ${getInlineCitationText(item, activeProj.citedIds.size+1)}</div>
        `;
        popoverResults.appendChild(div);
    });
}

// 捕获键盘
window.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + Shift + F 唤引
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'f' || e.key === 'F')) {
        if(document.getElementById('workspaceView').style.display === 'none') {
            showToast("请先在主极进入你的某一个项目。"); return;
        }
        e.preventDefault();
        searchOverlay.classList.add('show');
        popoverInput.value = '';
        renderPopoverResults('');
        setTimeout(() => popoverInput.focus(), 50);
    }
    
    if (searchOverlay.classList.contains('show')) {
        if (e.key === 'Escape') { searchOverlay.classList.remove('show'); textBody.focus(); }
        else if (e.key === 'ArrowDown') { e.preventDefault(); selectedPopIndex = Math.min(selectedPopIndex + 1, currentPopResults.length - 1); highlightPopResult(); } 
        else if (e.key === 'ArrowUp') { e.preventDefault(); selectedPopIndex = Math.max(selectedPopIndex - 1, 0); highlightPopResult(); } 
        else if (e.key === 'Enter' && selectedPopIndex >= 0) { e.preventDefault(); window.insertCitation(currentPopResults[selectedPopIndex].id); }
    }
});

function highlightPopResult() {
    const nodes = popoverResults.querySelectorAll('.pop-result-item');
    nodes.forEach(n => n.classList.remove('active-sel'));
    if(selectedPopIndex >= 0 && nodes[selectedPopIndex]) {
        nodes[selectedPopIndex].classList.add('active-sel');
        nodes[selectedPopIndex].scrollIntoView({ block: "nearest" });
    }
}

popoverInput.addEventListener('input', (e) => renderPopoverResults(e.target.value));
searchOverlay.addEventListener('mousedown', (e) => { if(e.target === searchOverlay) searchOverlay.classList.remove('show'); });

// Boot
window.updateLangRender();
renderNav();
