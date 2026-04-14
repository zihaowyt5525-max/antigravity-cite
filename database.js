// ============================================
// AG Cite - Multi-Project Local Storage Mock
// 模拟由云端（Google Drive）获取的不同学术项目文档库
// ============================================

window.AGC_PROJECTS = [
    {
        projectId: "proj_0x001",
        projectName: "案例 1",
        documentTitle: "解析 Apple UI 美学与学术交互范式间的重构张力",
        documentBody: `<p>自界面设计的演化进入高负空间（Negative Space）与毛玻璃材质（Mica/Frosted Glass）时代以来，学术界普遍由于过度关注数据厚度而忽视了“隐形界面”的重要性。学术工具理应将焦距收敛至正文本体，同时利用 Antigravity 的高并发增量刷新技术构建底层引擎。</p><p>按下 <span style="background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px; font-weight: 500;">Ctrl+Shift+F</span> 或 <b>Cmd+Shift+F</b> 来看看奇迹是如何发生的。所有的动作都只聚焦在最核心的需求上，没有任何粗糙的下拉菜单来干扰写作。</p>`,
        library: [
            {
                id: "ref_0x1",
                title: "Antigravity: High-Performance Web Architecture in the AI Era",
                authors: "Wang, J., Smith, L.",
                year: 2024,
                journal: "Journal of Advance Computing",
                doi: "10.1016/j.jac.2024.11029",
                abstract: "This paper introduces Antigravity...",
                pdfUrl: "/local/pdfs/antigravity2024.pdf"
            },
            {
                id: "ref_0x2",
                title: "The Illusion of Glass: Mica and Backdrop-filter",
                authors: "Jobs, S., Ive, J.",
                year: 2026,
                journal: "UI/UX Engineering Review",
                doi: "10.1145/uiux.2026.042",
                abstract: "Analyzing the graphic GPU consumption...",
                pdfUrl: ""
            }
        ],
        citedIds: new Set(["ref_0x1"])
    },
    {
        projectId: "proj_0x002",
        projectName: "案例 2",
        documentTitle: "基于 Gemini 端点的多模态超感知连接尝试",
        documentBody: `<p>大语言模型在多模态上的革命性跃迁，让我们得以在未发生物理绑定的前提下建立跨维度推想。Transformer is the first transduction model relying entirely on self-attention 这一句箴言也依然在散发无尽的光辉。</p>`,
        library: [
            {
                id: "ref_0x3",
                title: "Attention Is All You Need",
                authors: "Vaswani, A., Shazeer, N., Parmar, N.",
                year: 2017,
                journal: "NeurIPS",
                doi: "10.48550/arXiv.1706.03762",
                abstract: "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks...",
                pdfUrl: ""
            }
        ],
        citedIds: new Set()
    }
];

// 初始化全局指向第一个仓库
window.AGC_ACTIVE_PROJ_ID = window.AGC_PROJECTS[0].projectId;
