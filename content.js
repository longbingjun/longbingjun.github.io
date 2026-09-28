/* Bilingual portfolio content. Categories describe the deliverable; context describes
   the setting. Array order controls display order. Null URLs do not render buttons. */
window.PORTFOLIO = {
  "email": "bingjunlong@link.cuhk.edu.cn",
  "github": "https://github.com/longbingjun",
  "projects": [
    {
      "id": "evidence",
      "title": {
        "zh": "让竞品情报，有据可查。",
        "en": "Competitive intelligence, backed by evidence."
      },
      "subtitle": {
        "zh": "竞品 BOM 与供应链情报分析系统",
        "en": "BOM & supply-chain intelligence system"
      },
      "summary": {
        "zh": "把分散的拆解图文和视频，组织成产品、器件与供应商之间可追溯的证据链。",
        "en": "Turning teardown articles and videos into traceable evidence linking products, components and suppliers."
      },
      "tags": [
        "Python",
        "FastAPI",
        "LLM",
        "OCR"
      ],
      "metrics": [
        {
          "value": "1,041",
          "label": {
            "zh": "款产品",
            "en": "products"
          }
        },
        {
          "value": "1,083",
          "label": {
            "zh": "篇拆解图文",
            "en": "teardown articles"
          }
        },
        {
          "value": "167",
          "label": {
            "zh": "条拆机视频",
            "en": "teardown videos"
          }
        }
      ],
      "details": [
        {
          "title": {
            "zh": "问题与场景",
            "en": "The problem"
          },
          "text": {
            "zh": "在实习期间，面向成本工程师的竞品拆解与采购降本需求，建设竞品 BOM 与供应链情报分析系统。",
            "en": "Built a competitive BOM and supply-chain intelligence system during an internship, supporting cost engineers with teardown research and sourcing decisions."
          }
        },
        {
          "title": {
            "zh": "我的工作",
            "en": "My contribution"
          },
          "text": {
            "zh": "完成需求分析、数据建模、全栈开发与公司内网部署。建立“产品—器件—型号—供应商—证据”数据模型，结合规则提取、LLM 辅助与原文校验，保留来源 URL 和证据片段。",
            "en": "Worked across requirements, data modeling, full-stack development and internal deployment. Modeled products, components, part numbers, suppliers and evidence; combined rules, LLM-assisted extraction and source verification."
          }
        },
        {
          "title": {
            "zh": "视频证据如何对齐",
            "en": "Aligning video evidence"
          },
          "text": {
            "zh": "通过 OCR 提取带时间戳的字幕，使用 LLM 过滤与结构化抽取，记录时间区间；结合区间抽帧与感知哈希去重，保留可回溯的多模态证据。",
            "en": "Extracted timestamped subtitles with OCR, structured relevant information with an LLM, and retained time ranges. Sampled frames and perceptual-hash deduplication support multimodal traceability."
          }
        },
        {
          "title": {
            "zh": "可靠性与边界",
            "en": "Reliability and boundaries"
          },
          "text": {
            "zh": "缺失或冲突信息保留状态标记，不以猜测补全。系统部署在公司内网；下方演示视频基于公开拆解数据在本机重建，展示完整操作流程。",
            "en": "Missing and conflicting information retains explicit status labels instead of guessed completions. The system is deployed on a company intranet; the walkthrough below was recorded on a local rebuild using public teardown data."
          }
        }
      ],
      "githubUrl": null,
      "videoUrl": "assets/competitive-demo.mp4",
      "videoPoster": "assets/competitive-demo-poster.webp",
      "demoPageUrl": "demo/competitive-intelligence/",
      "note": {
        "zh": "数据覆盖及指标来自项目记录；演示视频基于公开拆解数据在本机重建。",
        "en": "Coverage figures are from project records. The walkthrough was recorded on a local rebuild using public teardown data."
      },
      "categoryId": "systems",
      "context": {
        "zh": "实习",
        "en": "Internship"
      },
      "highlightMetricIndex": 0,
      "featured": true
    },
    {
      "id": "erpsim",
      "categoryId": "systems",
      "context": {
        "zh": "国际竞赛",
        "en": "International competition"
      },
      "title": {
        "zh": "让经营决策，跟上比赛节奏。",
        "en": "Business decisions at the pace of competition."
      },
      "subtitle": {
        "zh": "ERPsim 经营模拟赛数据分析与决策支持系统",
        "en": "ERPsim analytics & decision support system"
      },
      "summary": {
        "zh": "面向高强度经营模拟赛，构建销售、利润与库存分析平台，将数据处理时间压缩至 1 分钟内，为定价、市场选择与库存分配提供决策支持。",
        "en": "Built a sales, profit and inventory analytics platform for a time-critical business simulation. Reduced data processing to under one minute to support pricing, market selection and inventory allocation."
      },
      "meta": {
        "zh": "2025.04–2025.05 · 队长",
        "en": "Apr–May 2025 · Team captain"
      },
      "tags": [
        "Python",
        "Django",
        "MySQL",
        {
          "zh": "Holt 指数平滑",
          "en": "Holt smoothing"
        }
      ],
      "metrics": [
        {
          "value": "< 1 分钟",
          "valueEn": "< 1 min",
          "label": {
            "zh": "数据处理耗时",
            "en": "data processing time"
          }
        },
        {
          "value": "季军",
          "valueEn": "3rd place",
          "label": {
            "zh": "国际赛团队成绩",
            "en": "international competition · team result"
          }
        }
      ],
      "highlightMetricIndex": 1,
      "details": [
        {
          "title": {
            "zh": "项目背景与角色",
            "en": "Context and role"
          },
          "text": {
            "zh": "担任 ERPsim International Competition 2025 队长，负责比赛数据分析、系统开发及销售策略调整。在高强度经营模拟赛中，将比赛数据转化为可用于当轮决策的分析结果。",
            "en": "Captained the team in ERPsim International Competition 2025, responsible for data analysis, system development and sales strategy adjustments. Turned competition data into analysis that could inform decisions during each round."
          }
        },
        {
          "title": {
            "zh": "系统建设",
            "en": "Building the system"
          },
          "text": {
            "zh": "基于 Django + MySQL 搭建数据分析平台，串联比赛数据的自动化导入、清洗、建模与分析，将数据处理时间压缩至 1 分钟内。",
            "en": "Built the analytics platform with Django and MySQL, connecting automated data import, cleaning, modeling and analysis. Reduced data processing time to under one minute."
          }
        },
        {
          "title": {
            "zh": "业务分析",
            "en": "Business analysis"
          },
          "text": {
            "zh": "围绕销售、库存与渠道数据建立分析框架，按时间、区域与渠道分析销售偏好，拆解产品利润结构，支持高利润产品和重点市场的快速识别。",
            "en": "Structured analysis around sales, inventory and channel data. Examined trends and regional and channel preferences, and decomposed product margins to identify high-margin products and priority markets."
          }
        },
        {
          "title": {
            "zh": "预测与决策支持",
            "en": "Forecasting and decision support"
          },
          "text": {
            "zh": "探索性分析中观察到趋势项，未发现明显季节性。结合小样本特点，选择结构较简洁的 Holt 指数平滑模型进行价格预测，并结合销售与库存信息生成库存分配建议，支持库存结构调整。",
            "en": "Exploratory analysis indicated a trend with no clear seasonality. Chose the relatively simple Holt exponential smoothing model for price forecasting in a small-sample setting, and combined sales and inventory information to generate allocation recommendations."
          }
        },
        {
          "title": {
            "zh": "比赛应用与成果",
            "en": "Competition use and outcome"
          },
          "text": {
            "zh": "系统在比赛中全程使用，支撑高强度经营决策，团队获得国际赛季军。比赛成绩是团队协作与多项经营决策共同作用的结果。",
            "en": "The system was used throughout the competition to support time-critical business decisions. The team placed third internationally, an outcome of teamwork and multiple business decisions."
          }
        }
      ],
      "githubUrl": "https://github.com/longbingjun/Data-Analysis-System-for-SAP-ERPsim-Competition",
      "videoUrl": null,
      "note": {
        "zh": "国际竞赛 · 2025.04–2025.05 · 队长。数据处理耗时来自项目实践记录；比赛名次为团队成绩。",
        "en": "International competition · Apr–May 2025 · Team captain. Processing time is based on project records; the competition placement is a team result."
      }
    },
    {
      "id": "clv",
      "title": {
        "zh": "增长之后，如何让客户留下？",
        "en": "Beyond acquisition. Understanding retention."
      },
      "subtitle": {
        "zh": "零售增长诊断与客户生命周期价值分析",
        "en": "Retail growth diagnostics & customer lifetime value"
      },
      "summary": {
        "zh": "从约 54 万条原始交易明细出发，连接增长拆解、流失风险与客户价值，探索更有针对性的运营策略。",
        "en": "Connecting growth drivers, churn risk and customer value using approximately 540,000 raw transaction line items."
      },
      "tags": [
        "Survival Analysis",
        "XGBoost",
        "CLV"
      ],
      "metrics": [
        {
          "value": "约54万",
          "valueEn": "~540k",
          "label": {
            "zh": "条原始交易明细",
            "en": "raw transaction line items"
          }
        },
        {
          "value": "0.86",
          "label": {
            "zh": "Cox C-index",
            "en": "Cox C-index"
          }
        },
        {
          "value": "0.70",
          "label": {
            "zh": "验证窗口 R²",
            "en": "validation R²"
          }
        }
      ],
      "details": [
        {
          "title": {
            "zh": "数据与分析口径",
            "en": "Data and analysis scope"
          },
          "text": {
            "zh": "基于 UCI Online Retail 数据集，原始数据约 54 万条交易明细；清洗后用于分析的数据为 397,884 条交易明细。围绕交易、订单与客户月度面板组织分析，区分原始数据规模与清洗后的分析样本。",
            "en": "Used the UCI Online Retail dataset, with approximately 540,000 raw transaction line items and 397,884 after cleaning. Organized the analysis at transaction, order and customer-month levels, distinguishing raw coverage from the cleaned analytical sample."
          }
        },
        {
          "title": {
            "zh": "增长诊断",
            "en": "Growth diagnosis"
          },
          "text": {
            "zh": "构建客户月度面板，用“收入 = 客户数 × 购买频率 × 客单价”拆解增长驱动。结合生命周期分析识别首月后客户流失风险，研究留存与回流的运营机会。",
            "en": "Built a customer-month panel and decomposed revenue into customer count, purchase frequency and average order value. Examined post-first-month churn risk and opportunities for retention and reactivation."
          }
        },
        {
          "title": {
            "zh": "流失与价值建模",
            "en": "Churn and value modeling"
          },
          "text": {
            "zh": "使用 Kaplan–Meier 与 Cox 比例风险模型分析留存机制；校准 XGBoost 分类器的 Precision@10% 为 52%。对比 BG/NBD + Gamma-Gamma 与 XGBoost 回归，通过按月滚动回测评估未来 30 天收入。",
            "en": "Used Kaplan–Meier and Cox models to study retention. A calibrated XGBoost classifier reached 52% Precision@10%. Compared BG/NBD + Gamma-Gamma with XGBoost regression using monthly rolling backtests for 30-day revenue."
          }
        },
        {
          "title": {
            "zh": "从预测到策略",
            "en": "From predictions to action"
          },
          "text": {
            "zh": "结合 CLV、流失风险和生命周期状态制定规则分群，并挖掘商品关联规则，形成捆绑销售、偏好召回与套装推荐等策略建议。",
            "en": "Combined CLV, churn risk and lifecycle state into rule-based segments, then mined product associations to inform bundles, preference-based reactivation and recommendations."
          }
        },
        {
          "title": {
            "zh": "评估范围",
            "en": "Evaluation scope"
          },
          "text": {
            "zh": "R² = 0.70 对应最新验证窗口的未来 30 天收入预测；C-index = 0.86 对应 Cox 模型。课程项目中的离线评估结果不等于线上业务提升。",
            "en": "R² of 0.70 describes 30-day revenue prediction in the latest validation window; C-index of 0.86 describes the Cox model. These are offline course-project results, not measured production uplift."
          }
        }
      ],
      "githubUrl": "https://github.com/longbingjun/UCL-online-retail-marketing-analysis",
      "videoUrl": null,
      "note": {
        "zh": "课程项目 · 2026.03–2026.04",
        "en": "Course project · Mar–Apr 2026"
      },
      "categoryId": "analytics",
      "context": {
        "zh": "课程项目",
        "en": "Course project"
      },
      "highlightMetricIndex": 1
    },
    {
      "id": "reasoning",
      "title": {
        "zh": "让推理能力，与资源预算对话。",
        "en": "Reasoning within a resource budget."
      },
      "subtitle": {
        "zh": "LLM 数学推理效率与推理策略分析",
        "en": "LLM mathematical reasoning & efficiency"
      },
      "summary": {
        "zh": "比较微调方案与测试时采样策略，研究有限计算资源下的推理表现与效率取舍。",
        "en": "Studying fine-tuning and test-time sampling to understand the trade-offs between reasoning quality and compute."
      },
      "tags": [
        "LoRA",
        "GRPO",
        "Test-time Scaling"
      ],
      "metrics": [
        {
          "value": "5.95 GB",
          "label": {
            "zh": "LoRA 显存占用",
            "en": "LoRA memory"
          }
        },
        {
          "value": "34%",
          "label": {
            "zh": "显存降低",
            "en": "less memory"
          }
        },
        {
          "value": "95%",
          "label": {
            "zh": "AMC23 pass@64",
            "en": "AMC23 pass@64"
          }
        }
      ],
      "details": [
        {
          "title": {
            "zh": "角色与实验范围",
            "en": "Role and scope"
          },
          "text": {
            "zh": "担任机器学习课程项目组长，比较微调方案，并在 Math500、AMC23、AIME25 等数学基准上研究推理策略。",
            "en": "Led a machine-learning course project comparing fine-tuning configurations and reasoning strategies on Math500, AMC23 and AIME25."
          }
        },
        {
          "title": {
            "zh": "资源与准确率",
            "en": "Resources and accuracy"
          },
          "text": {
            "zh": "LoRA（r = 4）以 5.95 GB 显存占用实现 13.00% 准确率，接近全量微调最优的 13.60%；项目记录中显存降低 34%、训练加速 44%。",
            "en": "LoRA (r = 4) used 5.95 GB of memory and achieved 13.00% accuracy versus 13.60% for the best full fine-tuning configuration. Project records report 34% lower memory use and 44% faster training."
          }
        },
        {
          "title": {
            "zh": "推理策略与指标边界",
            "en": "Inference and metric boundaries"
          },
          "text": {
            "zh": "探索温度与多轮采样对 GRPO 模型的影响。在温度 0.6 下，AMC23 的 pass@64 达 95.00%。pass@64 表示 64 次采样中至少一次正确的比例，不能当作单次回答准确率或多数投票准确率。",
            "en": "Explored temperature and repeated sampling for a GRPO model. At temperature 0.6, AMC23 pass@64 reached 95.00%. This measures whether at least one of 64 samples is correct; it is not single-response or majority-vote accuracy."
          }
        }
      ],
      "githubUrl": null,
      "videoUrl": null,
      "note": {
        "zh": "课程项目 · 2025.11–2025.12 · 组长",
        "en": "Course project · Nov–Dec 2025 · Team lead"
      },
      "categoryId": "experiments",
      "context": {
        "zh": "课程项目",
        "en": "Course project"
      },
      "highlightMetricIndex": 2
    },
    {
      "id": "bank",
      "title": {
        "zh": "预测转化，也解释为什么。",
        "en": "Predicting conversion. Explaining why."
      },
      "subtitle": {
        "zh": "银行营销客户转化预测与可解释性分析",
        "en": "Bank marketing conversion & model explainability"
      },
      "summary": {
        "zh": "在不平衡分类任务中比较模型，用 SHAP 将预测结果转化为可讨论的业务线索。",
        "en": "Comparing models for imbalanced classification and using SHAP to turn predictions into interpretable business signals."
      },
      "tags": [
        "LightGBM",
        "SHAP",
        "Cross-validation"
      ],
      "metrics": [
        {
          "value": "26,246",
          "label": {
            "zh": "条营销记录",
            "en": "marketing records"
          }
        },
        {
          "value": "8",
          "label": {
            "zh": "类模型对比",
            "en": "model families"
          }
        },
        {
          "value": "0.808",
          "label": {
            "zh": "最佳 AUC",
            "en": "best AUC"
          }
        }
      ],
      "details": [
        {
          "title": {
            "zh": "任务与角色",
            "en": "Task and role"
          },
          "text": {
            "zh": "担任课程项目组长，面向正例比例为 11.7% 的银行营销数据开展客户转化预测。",
            "en": "Led a course-project team predicting conversion on bank marketing data with an 11.7% positive rate."
          }
        },
        {
          "title": {
            "zh": "建模与评估",
            "en": "Modeling and evaluation"
          },
          "text": {
            "zh": "完成异常规则过滤、类别编码、缺失值处理和特征工程；采用分层五折交叉验证与 AUC，对比 8 类模型并随机搜索调参，LightGBM 最佳 AUC 达到 0.808。",
            "en": "Applied rule-based anomaly filtering, categorical encoding, missing-value handling and feature engineering. Compared eight model families with stratified five-fold cross-validation and randomized tuning; LightGBM achieved the best AUC of 0.808."
          }
        },
        {
          "title": {
            "zh": "解释与业务讨论",
            "en": "Interpretation"
          },
          "text": {
            "zh": "使用 SHAP 分析 euribor3m、联系方式和年龄等特征的影响，结合探索性分析提出渠道与客户分层触达建议。模型关联性不作为因果结论。",
            "en": "Used SHAP to examine features including euribor3m, contact channel and age. Combined these with exploratory analysis to propose channel and segmentation ideas; associations are not treated as causal effects."
          }
        }
      ],
      "githubUrl": null,
      "videoUrl": null,
      "note": {
        "zh": "课程项目 · 2025.10–2025.12 · 组长",
        "en": "Course project · Oct–Dec 2025 · Team lead"
      },
      "categoryId": "analytics",
      "context": {
        "zh": "课程项目",
        "en": "Course project"
      },
      "highlightMetricIndex": 2
    }
  ],
  "categories": {
    "systems": {
      "zh": "数据系统与决策支持",
      "en": "Data systems & decision support"
    },
    "analytics": {
      "zh": "业务分析与预测建模",
      "en": "Business analytics & predictive modeling"
    },
    "experiments": {
      "zh": "模型实验与评估",
      "en": "Model experiments & evaluation"
    }
  }
};
