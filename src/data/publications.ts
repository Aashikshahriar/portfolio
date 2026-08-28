export type Publication = {
  id: string;
  type: "journal" | "conference"| "pre-print";
  title: string;
  authors: string;
  venue: string;
  year: number;
  link: string;
  highlight?: boolean;
  graphicalAbstract?: string;
  caption?: string;
  abstract?: string;
};

const AUTHOR = "Khondakar Ashik Shahriar";

export const publications: Publication[] = [
  {
    id: "glioma-grade-classification",
    type: "journal",
    title: "Glioma Grade Classification: Hypertuned CNN with Saliency-Based Insight from MRI",
    authors: "Khondakar Ashik Shahriar, Enamul H Bhuiyan*, Md Forhad Hossain, Rakibur Rahman, Muhammad EH Chowdhury",
    venue: "IEEE Access",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11045673/",
    highlight: true,
    graphicalAbstract: "glioma-grade-classification.jpg",
    caption:
      "Hyperparameter-Tuned CNN for Glioma Grading with Saliency Mapping: (a) Model optimized via KerasTuner. (b) Saliency maps highlight peritumoral regions as key for classification.",
    abstract:
      "Glioma classification is critical for early diagnosis and treatment planning, yet manual MRI-based diagnosis is time-consuming and prone to errors. This study proposed a CNN-based approach optimized with KerasTuner for glioma classification, focusing on achieving high accuracy using a lightweight architecture. While hyperparameter tuning is well-established, its tailored application to this dataset and problem domain improves performance and reproducibility. The model employs KerasTuner to optimize key hyperparameters, including filter sizes, pooling layers, dropout rates, and optimizers, ensuring improved feature extraction and robustness. A dataset comprising 16,956 T2w Flair MRI slice images from 231 patients was used and categorized into three tumor grades (Grade 2, Grade 3, and Grade 4). The proposed model was trained using five-fold cross-validation, achieving an average multi-class classification accuracy of 89% and a binary classification accuracy of 93% in distinguishing low-grade (Grades 2) from high-grade (Grade 3 and Grade 4) tumors. Comparative analysis with state-of-the-art deep learning models such as ResNet-50, DenseNet-201, and EfficientNet-B0 demonstrated that our optimized CNN outperformed these architectures in accuracy, recall, and F1-score. Moreover, an ablation study and statistical analysis were performed. The experimental results confirm that integrating hyperparameter tuning in lightweight CNN models significantly improves tumor classification performance, reducing misclassification errors between adjacent grades. These findings emphasize the potential of deep learning in automated glioma classification, providing a more efficient and reliable tool for clinical diagnosis. Saliency map visualizations revealed that the model predominantly attends to the peritumoral regions, highlighting their significance in accurate glioma grade classification. Our hyper-tuned CNN achieved comparable performance across T1-weighted, T1-weighted-Gd, T2-weighted, and FLAIR inputs. Extensive augmentation trials, dropout/depth ablation, and paired-t analysis (t = 4.37, p < 0.0001) verified the model's superiority over other baselines. Future work will explore multimodal imaging, domain adaptation, and transfer learning to enhance model robustness across diverse medical datasets.",
  },
  {
    id: "domain-adaptive-modulation-classification",
    type: "journal",
    title: "Lightweight Domain-Adaptive Modulation Classification Under SNR and Channel Mismatch",
    authors: "Khondakar Ashik Shahriar*",
    venue: "IEEE Wireless Communications Letters",
    year: 2026,
    link: "https://ieeexplore.ieee.org/abstract/document/11417161",
    highlight: true,
    graphicalAbstract: "domain-adaptive-modulation-classification.png",
    abstract:
      "Reliable automatic modulation classification (AMC) degrades under mismatched noise and propagation conditions. This letter presents a lightweight and interpretable domain-adaptive AMC framework that jointly addresses both SNR variation and channel mismatch. Modality-specific feature extractors operate on raw IQ samples and spectral representations, while a domain-alignment module combines adversarial domain confusion with covariance matching to learn domain-invariant features. Experiments on RadioML2016.10a show improved robustness under SNR mismatch, and tests on Rayleigh–Rician fading datasets across five carrier frequencies demonstrate strong cross-channel generalization, achieving up to 86.8% accuracy. The proposed models require fewer than 0.75 MB of parameters and support sub-millisecond inference, supporting deployment-ready intelligent radio systems.",
  },
  {
    id: "nonlinear-models-cognitive-load-stress-exercise",
    type: "journal",
    title: "Why Nonlinear Models Matter: Unified Analysis of Cognitive Load, Stress, and Exercise Using Wearable Physiological Signals",
    authors: "Khondakar Ashik Shahriar*",
    venue: "Physiological Measurement, IOPscience",
    year: 2026,
    link: "https://iopscience.iop.org/article/10.1088/1361-6579/ae520c/meta",
    graphicalAbstract: "nonlinear-models-cognitive-load-stress-exercise.png",
    caption: "Overview of the proposed wearable physiological signal processing and modeling pipeline.",
    abstract:
      "Objective. Physiological measurements obtained from wearable devices reflect complex autonomic nervous system dynamics that are often assumed to follow simple linear relationships, such as elevated heart rate under stress or reduced stress during exercise. This study investigates whether physiological state recognition from wearable measurements is fundamentally linear or nonlinear by examining stress, cognitive load, and physical exercise detection. Approach. A unified signal-processing and evaluation framework was applied to three publicly available Empatica E4 datasets covering structured stress induction, real-world exam stress, aerobic and anaerobic exercise, and cognitive load tasks. Standardized preprocessing, window-based feature extraction, subject-independent evaluation, leave-one-subject-out (LOSO) validation, multimodal ablation studies, and Shapley Additive Explanations (SHAP)-based interpretability analysis were conducted. Multiple linear models (logistic regression, linear support vector machine (SVM), linear discriminant analysis, and ridge classifier) were compared against nonlinear approaches, including SVM(RBF), random forest, gradient boosting, XGBoost, and LightGBM. Main results. Across all datasets, nonlinear models consistently outperformed linear baselines. Tree-based ensembles achieved 0.89–0.98 accuracy and 0.96–0.99 AUC, whereas linear models remained below 0.70–0.73 AUC. LOSO validation revealed substantial inter-individual variability, yet nonlinear models retained moderate cross-person generalization. Ablation results confirmed the importance of multimodal fusion, particularly electrodermal activity, temperature, and accelerometry. SHAP analysis revealed nonlinear and interaction-driven feature effects consistent with known autonomic mechanisms. Significance. These findings demonstrate that physiological state recognition from wearable measurements is inherently nonlinear, even when individual modalities exhibit monotonic trends. The study establishes a unified benchmark and supports the necessity of nonlinear modeling for robust, real-time wearable health-monitoring systems.",
  },
  {
    id: "magnification-adaptation-breast-cancer-histopathology",
    type: "journal",
    title: "Generalize Beyond the Lens: Deep Magnification Adaptation in Breast Cancer Histopathology",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Sakib A Hossain, Muhammad EH Chowdhury, Enamul H Bhuiyan*",
    venue: "International Journal of Applied and Computational Intelligence Systems (IJACIS), Springer",
    year: 2026,
    link: "https://link.springer.com/article/10.1007/s44196-026-01273-4",
    graphicalAbstract: "magnification-adaptation-breast-cancer-histopathology.png",
    caption:
      "Cross-magnification domain adaptation framework for breast cancer histopathology: BreakHis images are grouped into low (40X, 100X) and high (200X, 400X) domains, followed by parallel handcrafted (Color, LBP, Wavelet, Haralick) and deep (CNN/Transformer) feature extraction, domain alignment via CORAL/MMD or DANN.",
    abstract:
      "Cross-magnification variability poses a critical challenge in deploying AI models for digital pathology, as classifiers trained at a single resolution often fail to generalize across heterogeneous imaging conditions. This study systematically investigates the effects of magnification domain shifts on breast histopathology classification by combining handcrafted machine-learning features, modern deep architectures, and progressive domain adaptation strategies. Although handcrafted models performed well in the domain, they degraded sharply under cross-magnification transfer, and shallow alignment methods such as CORAL and MMD yielded only marginal improvements. In contrast, deep transformer and convolutional backbones demonstrated greater robustness through hierarchical, scale-tolerant feature learning. Adversarial domain adaptation with DANN yielded the most consistent cross-magnification generalization (AUC = 0.975) and preserved malignant recall, a critical clinical requirement. Gradient reversal strength experiments revealed that moderate λ values (0.5–0.8) yield an optimal balance between domain invariance and diagnostic discrimination. Grad-CAM and t-SNE confirmed that adapted models focused on biologically meaningful patterns and maintained coherent feature geometry across magnifications. Overall, this work highlights deep adversarial adaptation as an effective and interpretable solution for magnification-agnostic, clinically transferable computational pathology.",
  },
  {
    id: "privacy-preserving-har-csi",
    type: "journal",
    title: "Lightweight Privacy-Preserving Human Activity Recognition from CSI Data using CNN-Temporal Attention Network",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Hafiz Imtiaz*",
    venue: "Digital Discovery, Royal Society of Chemistry",
    year: 2026,
    link: "https://pubs.rsc.org/en/content/articlehtml/2026/dd/d6dd00077k",
    highlight: true,
    graphicalAbstract: "privacy-preserving-har-csi.png",
    caption:
      "We propose an end-to-end privacy-preserving CSI-based HAR framework integrating a CNN with temporal attention, which outperforms existing studies on multiple benchmark datasets with distance, height and environmental variations.",
    abstract:
      "WiFi Channel State Information (CSI) has emerged as a powerful sensing modality for device-free Human Activity Recognition (HAR), enabling fine-grained motion understanding without requiring wearable sensors or cameras. However, any type of HAR – either CSI signal-based or device-based, inherently encodes sensitive behavioral patterns, raising significant privacy concerns. In this work, we propose an end-to-end privacy-preserving CSI-based HAR framework that integrates a Convolutional Neural Network (CNN) with a temporal attention mechanism. We perform extensive evaluations on multiple benchmark datasets consisting of varying distance and height factors, as well as different environmental conditions. Our baseline non-privacy-preserving CNN–temporal attention model achieves state-of-the-art performance. Additionally, we incorporate differential privacy (DP) into the training pipeline – enabling rigorous privacy guarantees through controlled noise injection and gradient clipping. We evaluate the proposed framework's privacy–utility trade-off and demonstrate that even strong privacy protection can maintain excellent recognition accuracy. Our framework can progressively approach the non-privacy-preserving performance for some parameter regimes. As such, our experimental results clearly demonstrate that the proposed architecture remains robust under privacy constraints and generalizes effectively across heterogeneous sensing conditions. We argue that our work provides practical insights into deploying secure and privacy-aware WiFi sensing systems for real-world HAR applications.",
  },
  {
    id: "supervised-autoencoder-eeg-fmri-artifact-removal",
    type: "journal",
    title: "Supervised Autoencoder for Gradient and BCG Artifact Removal in EEG during Simultaneous EEG-fMRI",
    authors: "Khondakar Ashik Shahriar, EH Bhuiyan*, Qingfei Luo, MEH Chowdhury",
    venue: "Magnetic Resonance Imaging, Elsevier",
    year: 2026,
    link: "https://www.sciencedirect.com/science/article/pii/S0730725X26001232",
    graphicalAbstract: "supervised-autoencoder-eeg-fmri-artifact-removal.jpg",
    abstract:
      "Simultaneous electroencephalography (EEG) and functional magnetic resonance imaging (fMRI) provide complementary views of brain function, but MRI-induced gradient (GA) and ballistocardiogram (BCG) artifacts can overwhelm the EEG. We propose Deep Artifact Removal (DAR), a supervised 1D convolutional autoencoder trained on paired artifact-contaminated and MR-corrected segments from the public Carbon Wire Loop EEG–fMRI dataset to suppress artifacts while preserving physiology. Across subjects, DAR achieves RMSE 0.022 ± 0.015 and Structural Similarity Index Measure (SSIM) 0.888 ± 0.091, with a mean SNR gain of 14.63 dB (paired t-test p < 0.001; Cohen's d > 1.2). Leave-one-subject-out testing confirms generalization to unseen subjects (RMSE 0.063 ± 0.011, SSIM 0.666 ± 0.088). Physiological fidelity is maintained by preserving occipital alpha activity (8–12 Hz) and retaining >75% of alpha power after denoising. Saliency analysis highlights temporal and spatial patterns that are most influential for artifact reduction. DAR outperforms PCA, ICA, average artifact subtraction, and wavelet denoising in reconstruction error, structural similarity, and SNR improvement, while better preserving neurophysiologically relevant oscillations.",
  },
  {
    id: "parkinsons-severity-longitudinal-speech",
    type: "journal",
    title: "Uncertainty-Aware Personalized Estimation of Parkinson's Disease Severity from Longitudinal Speech",
    authors: "Khondakar Ashik Shahriar*",
    venue: "PLOS One",
    year: 2026,
    link: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0343191",
    highlight: true,
    graphicalAbstract: "parkinsons-severity-longitudinal-speech.png",
    caption: "Overview of the proposed Parkinson's disease progression framework using longitudinal voice biomarkers.",
    abstract:
      "Parkinson's disease (PD) is a progressive neurological disorder characterized by motor impairments whose severity is commonly assessed using the Unified Parkinson's Disease Rating Scale (UPDRS). Although clinically established, UPDRS assessment is inherently subjective, requiring in-person evaluation by trained specialists, limiting its suitability for frequent monitoring. Speech production is affected early in PD and provides a non-invasive modality for remote symptom assessment. In this study, an uncertainty-aware personalized framework is proposed for estimating PD severity from speech signals. The approach integrates longitudinal temporal modeling of longitudinal speech recordings with patient-specific representations and a probabilistic latent disease state. Continuous motor UPDRS scores are jointly estimated with data-driven ordinal disease severity stages, enabling both fine-grained regression and auxiliary ordinal prediction. Predictive uncertainty is explicitly quantified to characterize predictive variability within the proposed framework. The method is evaluated on a longitudinal speech dataset using a strict patient-wise split, ensuring that all test subjects are unseen during training. On the held-out test set, the proposed model achieves promising predictive accuracy (mean absolute error 0.56 UPDRS points, root mean squared error 0.74, and coefficient of determination R2 = 0.99) for motor UPDRS estimation. Ordinal severity classification attained an accuracy of 0.92 across three stages. Comparative experiments against classical machine learning methods and global temporal baselines demonstrate consistent performance improvements. These results demonstrate the potential of personalized, uncertainty-aware speech modeling for longitudinal PD severity estimation.",
  },
  {
    id: "cross-spectral-event-detection-fiber",
    type: "journal",
    title: "Cross-Spectral Second-Order Modeling for Robust Event Detection in Distributed Fiber Channels",
    authors: "Khondakar Ashik Shahriar*",
    venue: "IEEE Communications Letters",
    year: 2026,
    link: "https://ieeexplore.ieee.org/document/11643788",
    graphicalAbstract: "cross-spectral-event-detection-fiber.png",
    caption: "Proposed cross-spectral correlation sensing framework.",
    abstract:
      "A cross-spectral second-order modeling framework is proposed for robust event detection in distributed optical fiber channels. Rather than directly modeling raw spatio-temporal intensity measurements, the framework explicitly exploits second-order spatial interaction geometry through cross-correlation and spectral factorization. This representation captures the low-rank structure of event-induced perturbations while effectively suppressing additive noise. Experimental evaluation on a φ-OTDR dataset achieves 97.48% classification accuracy and demonstrates graceful performance degradation under decreasing SNR, validating the effectiveness of second-order channel modeling for distributed optical detection.",
  },
  {
    id: "bayesian-qsm-uncertainty-quantification",
    type: "journal",
    title: "A Physics-Constrained Bayesian Framework for QSM with Uncertainty Quantification and Variational Susceptibility Source Separation",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed*",
    venue: "Physics in Medicine & Biology",
    year: 2026,
    link: "https://iopscience.iop.org/article/10.1088/1361-6560/ae9c82",
    graphicalAbstract: "bayesian-qsm-uncertainty-quantification.png",
    caption: "Conceptual illustration of the proposed physics-constrained probabilistic inversion framework.",
    abstract:
      "Quantitative Susceptibility Mapping (QSM) requires inversion of a convolutional dipole operator whose null-space renders the reconstruction problem severely ill-posed, such that small perturbations in the measured field can induce large variations in the estimated susceptibility distribution. While recent deep learning approaches improve empirical reconstruction quality, they typically produce deterministic estimates and treat susceptibility source separation as an independent post-processing step, without modeling inversion uncertainty or enforcing structured physical consistency. In this work, we formulate QSM as a physics-constrained probabilistic inverse problem and propose a Bayesian reconstruction framework that performs susceptibility estimation and uncertainty quantification. The susceptibility distribution is modeled using a heteroscedastic Gaussian posterior parameterized by a neural network, yielding voxel-wise posterior mean and variance. A dipole-domain consistency term enforces fidelity to the physical forward model, acting as an implicit null-space regularizer that stabilizes the learned inversion operator. The estimated posterior is further incorporated into a sign-constrained variational formulation to decompose total susceptibility into paramagnetic and diamagnetic components in a post-processing step, enabling uncertainty-aware source separation. This coupling between probabilistic reconstruction and variational decomposition mitigates error accumulation inherent in sequential pipelines. Experiments on a multi-session Head and Neck QSM repeatability dataset demonstrate competitive reconstruction accuracy, meaningful uncertainty calibration, and stable susceptibility decomposition, further validated on a simulated dataset. The proposed approach establishes a physics-consistent probabilistic inversion paradigm for QSM, providing an interpretable and uncertainty-aware solution to dipole inversion.",
  },
  {
    id: "bidirectional-eeg-fmri-reconstruction",
    type: "conference",
    title: "Bidirectional EEG–fMRI Reconstruction via a Shared Latent Space for Cross-Modal Neuroimaging",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Enamul H. Bhuiyan*",
    venue: "ISMRM 2026",
    year: 2026,
    link: "https://echo.ismrm.org/abstracts/view/d99dd6ac-4219-49ac-a8c9-bab07cfbbd3e",
  },
  {
    id: "multimodal-physiological-signal-classification",
    type: "conference",
    title: "Multimodal Physiological Signal Classification from Wearables: Towards Interpretable Stress and Exercise Recognition",
    authors: "Khondakar Ashik Shahriar*",
    venue: "IEEE SPICSCON 2025",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11504409/",
  },
  {
    id: "drone-bird-tracking",
    type: "conference",
    title: "Real-Time Multi-Modal Drone and Bird Tracking Using Modality-Aware Adaptation and Physics-Aware Filtering",
    authors: "Fabliha Labiba, Mohammad Asif Hasan, Sudipto Sarkar, Khondakar Ashik Shahriar, Nahian Tasnim, Shaikh Anwarul Fattah*",
    venue: "IEEE WIECON-ECE 2025",
    year: 2025,
    link: "https://ieeexplore.ieee.org/abstract/document/11526317",
  },
  {
    id: "audio-deepfake",
    type: "pre-print",
    title: "Lightweight Resolution-Aware Audio Deepfake Detection via Cross-Scale Attention and Consistency Learning",
    authors: "Khondakar Ashik Shahriar*",
    venue: "arXiv",
    year: 2026,
    link: "https://arxiv.org/abs/2601.06560",
  },
  {
    id: "pediatric-teledermatology",
    type: "pre-print",
    title: "A Multimodal Attention-Based Multi-Instance Learning Framework for Fair and Interpretable Pediatric Teledermatology",
    authors: "Khondakar Ashik Shahriar*",
    venue: "Research Square",
    year: 2026,
    link: "https://assets-eu.researchsquare.com/files/rs-8880185/v1_covered_763062b7-fbc4-4f9f-9cf0-cfb80c54c6a5.pdf",
  },
  {
    id: "raman-spectroscopy",
    type: "pre-print",
    title: "Raman Spectroscopy-Based COVID-19 Screening: A Physics-Informed Deep Spectral Framework",
    authors: "Khondakar Ashik Shahriar, Maruf Ahmed, Md. Forhad Hossain, Sakib Abrar Hossain, Muhammed Enamul Hoque Chowdhury, Enamul Hoque Bhuiyan*",
    venue: "SSRN",
    year: 2026,
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5854019",
  },
  {
    id: "vip-cup-2026",
    type: "pre-print",
    title: "EGD-YOLO: A Lightweight Multimodal Framework for Robust Drone-Bird Discrimination via Ghost-Enhanced YOLOv8n and EMA Attention under Adverse Condition",
    authors: "Sudipto Sarkar, Mohammad Asif Hasan, Khondakar Ashik Shahriar, Fabliha Labiba, Nahian Tasnim, Shaikh Anwarul Fattah*",
    venue: "arXiv",
    year: 2026,
    link: "https://arxiv.org/abs/2510.10765",
  },

];

export const journalArticles = publications.filter((p) => p.type === "journal");
export const conferencePapers = publications.filter((p) => p.type === "conference");
export const preprints = publications.filter((p) => p.type === "pre-print");
export const highlightedPublications = publications.filter((p) => p.highlight);

export { AUTHOR };
