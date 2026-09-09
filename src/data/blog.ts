export type BlogResource = {
  label: string;
  url: string;
  isLocalAsset?: boolean; // true for files served from public/ (needs basePath prefixing)
};

export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  content: string[]; // paragraphs
  resources?: BlogResource[];
};

// Starter placeholder post so the blog section has something to render.
// Edit or replace the entries below with your own writing.
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    date: "2026-08-28",
    excerpt:
      "A quick note on why I'm starting this blog and what I plan to write about — research notes, paper breakdowns, and things I learn along the way.",
    content: [
      "This is the first post on my personal blog. I plan to use this space to write short notes on papers I'm reading, experiments I'm running, and lessons learned while working across biomedical signal processing, medical imaging, and wireless communications.",
      "Expect a mix of technical deep-dives (e.g. on domain adaptation, privacy-preserving ML, or EEG-fMRI artifact removal) and occasional posts on conferences, travel, and life outside the lab.",
      "Replace this post with your own writing whenever you're ready — the blog is wired up in src/data/blog.ts.",
    ],
  },
  {
    slug: "how-im-learning-genai",
    title: "How I'm Learning GenAI",
    date: "2026-09-10",
    excerpt:
      "My reading-and-implementing path through generative modeling so far — from the ELBO and VAEs, through variational diffusion models and DDPM, toward DDIM and score matching.",
    content: [
      "I've been spending my spare research time this year on the theoretical side of generative modeling — not just using diffusion models and LLMs, but actually working through why they're formulated the way they are. This post is a running log of that path: what I've read, what I've implemented, and where I'm headed next.",
      "The starting point is the Variational Autoencoder. Kingma and Welling's \"An Introduction to Variational Autoencoders\" is still the cleanest derivation of the evidence lower bound (ELBO) I've found — it's where the reparameterization trick, the KL-divergence regularizer, and the whole encoder/decoder framing first click. I implemented a VAE from scratch on MNIST (ELBO objective, configurable latent dimension, the reconstruction/KL tradeoff made explicit) before moving on, since everything downstream builds on this same variational machinery.",
      "From there, the natural next step is the Variational Diffusion Model — reframing a VAE as a hierarchy of latent variables, one per diffusion timestep, each a noisier version of the last. Calvin Luo's \"Understanding Diffusion Models: A Unified Perspective\" is the paper that made this connection click for me: it derives DDPM, score-based generative models, and the VDM formulation from the same ELBO starting point, rather than presenting them as three unrelated ideas.",
      "That unification is what let DDPM (Denoising Diffusion Probabilistic Models) stop feeling like a new algorithm and start feeling like a specific, well-chosen parameterization of the VDM objective — predicting the noise (or equivalently x₀) added at each step. I implemented both the x₀-prediction and the noise-prediction (ε-prediction) parameterizations to see the difference in practice; they're mathematically equivalent but train very differently.",
      "The part of the path I'm still actively working through is DDIM (Denoising Diffusion Implicit Models) — the non-Markovian reformulation that decouples the forward process from a fixed number of sampling steps, and score matching — the perspective that a diffusion model is really just learning the score function (∇ log p(x)) of the data distribution at every noise level, which is what ties denoising diffusion back to earlier score-based and Langevin dynamics approaches. Stanley Chan's \"Tutorial on Diffusion Models for Imaging and Vision\" has been my main reference for working through both.",
      "All the code as I work through this — VAE, forward-diffusion visualizations, and the two DDPM parameterizations so far, with DDIM and score-based sampling next — is in a public repo. It's built to be a set of self-contained, closed-form replications rather than a polished library, so each folder should run on its own.",
    ],
    resources: [
      { label: "gen_ai_tutorial — code repo (GitHub)", url: "https://github.com/Aashikshahriar/gen_ai_tutorial" },
      {
        label: "Kingma & Welling — An Introduction to Variational Autoencoders (PDF)",
        url: "blog/vae-kingma-welling.pdf",
        isLocalAsset: true,
      },
      {
        label: "Calvin Luo — Understanding Diffusion Models: A Unified Perspective (PDF)",
        url: "blog/understanding-diffusion-models-luo.pdf",
        isLocalAsset: true,
      },
      {
        label: "Stanley Chan — Tutorial on Diffusion Models for Imaging and Vision (PDF)",
        url: "blog/diffusion-models-tutorial-chan.pdf",
        isLocalAsset: true,
      },
    ],
  },
];
