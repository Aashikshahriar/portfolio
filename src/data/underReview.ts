export type UnderReviewWork = {
  title: string;
  status: "1st Revision" | "Under Review";
  relatedPublicationId?: string;
};

// Ordered with 1st-revision works first, as requested.
export const underReview: UnderReviewWork[] = [
  {
    title:
      "SPARSE-TIME: Saliency-Projected Low-Rank Temporal Modeling for Efficient and Interpretable Time Series Prediction",
    status: "1st Revision",
  },
  {
    title:
      "Interpretable Physics-Guided Region-Aware Attention Learning for Series and Shunt Resistance Estimation from Photovoltaic I-V Characteristics",
    status: "1st Revision",
  },
  {
    title: "Physics-Informed Deep Spectral Framework on Raman Spectroscopy",
    status: "Under Review",
    relatedPublicationId: "raman-spectroscopy",
  },
  {
    title: "Resolution-Aware Audio Deepfake Detection via Cross-Scale Attention and Consistency Learning",
    status: "Under Review",
    relatedPublicationId: "audio-deepfake",
  },
  {
    title: "Spectral Signatures of Frequency- and State-Dependent EEG–BOLD Coupling Revealed by Multiband Encoding",
    status: "Under Review",
  },
  {
    title: "Differential CSI Tracking for Indoor Localization in Ill-Posed Multipath Environments",
    status: "Under Review",
  },
];
