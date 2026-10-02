import type { BlogPost } from "../blog";

const img = (n: string) => `blog/music-genres/${n}`;

export const musicGenresPost: BlogPost = {
  slug: "rap-packs-words-pop-repeats-them",
  title: "Rap Packs the Words, Pop Repeats Them, Metal Shouts: What 550,000 Songs Reveal About Genre",
  date: "2026-10-02",
  excerpt:
    "I mined 550,000 Spotify songs for the hidden shape of genre. Lyric length barely tracks song length, rap fits 55 lines into 3.5 minutes while folk uses 35, pop has become 50% more repetitive, and songs got 4 dB louder.",
  content: [],
  blocks: [
    {
      type: "p",
      text: "Abstract. Does a longer song have more lyrics? Do genres differ in how many lines they write, and how long they play? I analysed about 545,000 songs from the public Kaggle \"900k Spotify\" dataset (lyrics, genre tags, duration, and Spotify audio features) to answer these questions and to look for other structure in the data. Three findings stand out. (1) The number of lyric lines in a song depends on genre far more than on duration: genre explains about 8% of the variance in line count, duration about 1.7%. (2) Lyrics have become more repetitive since the 1990s, especially in pop, while songs have become shorter. (3) Songs became about 4 dB louder between the 1980s and 2010, and have eased off slightly since.",
    },

    { type: "h2", text: "1. Data and method" },
    {
      type: "p",
      text: "The dataset contains 551,443 songs with full lyrics, an artist-level genre tag list, duration, release date, and Spotify audio features (energy, danceability, valence, speechiness, acousticness, loudness, tempo and more). The CSV file flattens lyrics into a single line, so I recovered the real line breaks from the dataset's companion JSON file and counted non-empty lines per song.",
    },
    {
      type: "ul",
      items: [
        "Cleaning: kept songs between 1 and 10 minutes, with 4 to 250 lyric lines and at least 20 words. This leaves 544,966 songs.",
        "Genres: the data has 3,000+ multi-label tag strings (e.g. \"rock,pop,blues\"). I grouped the tags into 15 families. A song counts toward each family it is tagged with; for the model-based tests I used only its first family.",
        "Statistics: because of the sample size every p-value is tiny, so I report effect sizes instead: Spearman correlation (ρ), epsilon-squared from a Kruskal-Wallis test, and R² from simple regressions.",
        "Distinctive words: Monroe et al.'s log-odds ratio with an informative Dirichlet prior, using document frequency. Section labels (chorus, verse) and words in under 1% of a genre's songs were dropped.",
        "Repetition: the share of a song's lines that duplicate an earlier line.",
      ],
    },

    { type: "h2", text: "2. Do longer songs have more lyrics? Barely." },
    {
      type: "p",
      text: "The intuitive guess is that a longer song has more lines. Across all songs the Spearman correlation between line count and duration is only ρ = 0.12 (ρ = 0.06 for word count). The hexbin plot below shows a huge cloud with a gentle slope of only about 3 extra lines per extra minute.",
    },
    {
      type: "image",
      src: img("04_lines_vs_duration.png"),
      alt: "Hexbin plot of lyric lines versus song duration",
      caption: "Figure 1. Lyric lines vs duration. Each song adds only a weak trend (Spearman ρ = 0.12).",
    },

    { type: "h2", text: "3. Genre decides the lyric count, not the clock" },
    {
      type: "p",
      text: "Genre matters much more. In a regression on first-listed genre family, genre alone explains R² = 8.0% of the variance in line count, duration alone only 1.7%, and both together 10.9%. A Kruskal-Wallis test gives an effect size (epsilon-squared) of 0.088 for line count, 0.056 for words per line and 0.036 for duration. All effects are small to moderate, and line count is the most genre-driven of the three.",
    },
    {
      type: "table",
      headers: ["Genre", "Songs", "Median lines", "Median duration", "Lines/min", "Words/min", "Words/line", "Explicit %"],
      rows: [
        ["Hip hop / Rap", "297,177", "55", "3:27", "16.7", "113", "6.8", "45.7"],
        ["Reggae", "8,430", "54", "3:46", "13.9", "93", "6.7", "16.4"],
        ["Soul / R&B", "17,556", "47", "3:48", "12.6", "76", "6.1", "10.5"],
        ["Funk", "6,899", "47", "3:52", "12.1", "74", "6.2", "5.7"],
        ["Classical", "5,394", "45", "3:30", "13.0", "77", "6.1", "18.4"],
        ["Electronic", "27,081", "45", "3:47", "11.8", "68", "5.8", "13.8"],
        ["Pop", "93,727", "43", "3:40", "11.7", "69", "6.0", "9.5"],
        ["Metal", "28,132", "41", "4:06", "9.8", "55", "5.7", "16.2"],
        ["Jazz", "15,748", "39", "3:33", "10.7", "65", "6.2", "13.5"],
        ["Rock", "118,680", "39", "3:47", "10.3", "60", "5.9", "9.5"],
        ["Punk / Emo", "27,135", "39", "3:24", "11.7", "71", "6.1", "15.1"],
        ["Indie / Alt", "15,041", "39", "3:45", "10.3", "60", "5.9", "10.0"],
        ["Blues", "12,648", "38", "3:34", "10.5", "66", "6.4", "7.6"],
        ["Country", "16,374", "36", "3:26", "10.1", "66", "6.5", "4.3"],
        ["Folk", "20,030", "35", "3:40", "9.4", "60", "6.3", "4.6"],
      ],
      caption: "Table 1. Lyric and duration statistics by genre family (medians). Songs can belong to several families.",
    },
    {
      type: "p",
      text: "Rap and reggae write the most lines (54 to 55), while folk and country write the fewest (35 to 36). Yet rap's median song is 3:27, shorter than folk's 3:40. The result is a lyric density of 16.7 lines per minute for rap against 9.4 for folk. In words, rap delivers about 113 words per minute, roughly double the 55 to 60 of metal, folk and rock.",
    },
    {
      type: "image",
      src: img("01_lines_by_genre.png"),
      alt: "Boxplot of lyric lines per song by genre",
      caption: "Figure 2. Lyric lines per song by genre.",
    },
    {
      type: "image",
      src: img("02_duration_by_genre.png"),
      alt: "Boxplot of song duration by genre",
      caption: "Figure 3. Song duration by genre. Metal is the longest at a median of 4:06.",
    },
    {
      type: "image",
      src: img("05_lines_per_min.png"),
      alt: "Bar chart of median lines per minute by genre",
      caption: "Figure 4. Lyric density: rap sits well above every other genre.",
    },

    { type: "h2", text: "4. Is there a relationship between lines and duration inside a genre?" },
    {
      type: "p",
      text: "It depends on the genre. Where the lyrics set the length of a song, more lines do mean a longer song: country (ρ = 0.30), folk (0.29) and punk (0.28). Where length comes from instrumentals, loops and repeated sections, the link vanishes: electronic (0.05), classical (0.08) and reggae (0.00). Comparing genres to each other, the genre-level correlation between median duration and median line count is not significant (ρ = 0.32, p = 0.25, n = 15). Metal is the longest genre but writes an ordinary number of lines. Rap and reggae write the most lines but are not long.",
    },
    {
      type: "image",
      src: img("06_corr_by_genre.png"),
      alt: "Within-genre correlation between lines and duration",
      caption: "Figure 5. Within-genre correlation between lines and duration.",
    },
    {
      type: "image",
      src: img("07_genre_scatter.png"),
      alt: "Median duration versus median lines by genre",
      caption: "Figure 6. Genres plotted by median duration and median line count (bubble size is the number of songs).",
    },

    { type: "h2", text: "5. Songs now say more in less time" },
    {
      type: "p",
      text: "Median lines per song climbed from 32 in the early 1970s to 54 in the early 2020s, while median duration peaked near 4:04 in the late 1980s and 1990s and fell to 3:11 by 2020 to 2024. Part of this is the rise of rap in the data, but the shift is visible across genres.",
    },
    {
      type: "table",
      headers: ["Release years", "Songs", "Median lines", "Median duration (s)"],
      rows: [
        ["1970-74", "8,316", "32", "214"],
        ["1980-84", "10,420", "36", "232"],
        ["1990-94", "17,528", "38", "243"],
        ["2000-04", "28,811", "45", "238"],
        ["2010-14", "75,269", "46", "226"],
        ["2015-19", "176,970", "51", "208"],
        ["2020-23", "100,418", "54", "191"],
      ],
      caption: "Table 2. Lyric count and duration by release period.",
    },
    {
      type: "image",
      src: img("08_trend_by_year.png"),
      alt: "Median lines and duration by release year",
      caption: "Figure 7. Median lines per song (left) and median duration (right) by release year.",
    },
    {
      type: "p",
      text: "Explicit songs follow the same pattern. They have a median of 62 lines against 42 for non-explicit songs, and run shorter (3:20 against 3:39). Nearly half of the hip hop in the data (45.7%) is explicit, compared with under 5% for folk and country. Among emotion labels, songs tagged anger have the most lines (56) and the most words per line (7.0), and are the shortest at 3:27.",
    },

    { type: "h2", text: "6. What each genre says: a vocabulary fingerprint" },
    {
      type: "p",
      text: "The most distinctive words per genre read like a caricature, but an accurate one. Country is whiskey, cowboy, lonesome, Tennessee and beer. Metal is death, blood, flesh, darkness and fate. Folk is river, sea, wind and moon. Reggae is written in Jamaican Patois (fi, dem, inna, nuh, jah). Soul and R&B is baby, babe, girl and ooh. Pop is oh, love, heart, tonight and goodbye. Rap leads with like, got, ain't and profanity. The classical panel is mostly artist and instrument names (Baker, Frank, drums), so I do not draw conclusions from it.",
    },
    {
      type: "image",
      src: img("10_genre_words.png"),
      alt: "Bar charts of the most distinctive words per genre",
      caption: "Figure 8. The words that most distinguish each genre (log-odds z-score).",
    },

    { type: "h2", text: "7. Lyrics are getting more repetitive" },
    {
      type: "p",
      text: "Electronic songs repeat the most (a median 33% of lines are repeats), followed by pop (31%). Folk repeats the least (22%), with hip hop (25%) and jazz (26%) close behind. Over time, the share of repeated lines across all songs rose from about 22 to 23% in the 1990s to about 30% in 2015, then eased to 26% in the 2020s. Pop went from 22% in the 1970s to 35% in 2015. Hip hop fell during the 1990s (to 17%) and then climbed to 28% by 2015. The most repetitive artists with 15 or more songs in the data are EDM acts and collaborations, with up to 70 to 76% repeated lines.",
    },
    {
      type: "table",
      headers: ["Genre", "Songs", "Median repeated-line share"],
      rows: [
        ["Electronic", "15,465", "33.3%"],
        ["Pop", "50,549", "30.8%"],
        ["Funk", "1,646", "29.2%"],
        ["Soul / R&B", "7,882", "27.9%"],
        ["Rock", "98,157", "27.8%"],
        ["Indie / Alt", "4,327", "27.8%"],
        ["Classical", "4,179", "27.3%"],
        ["Metal", "15,644", "27.1%"],
        ["Country", "10,049", "27.0%"],
        ["Punk / Emo", "12,251", "27.0%"],
        ["Blues", "3,226", "27.0%"],
        ["Reggae", "5,893", "26.7%"],
        ["Jazz", "8,821", "25.5%"],
        ["Hip hop / Rap", "289,710", "25.0%"],
        ["Folk", "9,728", "22.1%"],
      ],
      caption: "Table 3. Share of lines that repeat an earlier line, by primary genre (songs with 8 to 250 lines).",
    },
    {
      type: "image",
      src: img("11_repetition_by_genre.png"),
      alt: "Boxplot of repeated line share by genre",
      caption: "Figure 9. How repetitive are lyrics? Share of lines that are repeats.",
    },
    {
      type: "image",
      src: img("17_repetition_trend.png"),
      alt: "Repetition trend over time",
      caption: "Figure 10. Lyrics have become more repetitive since the 1990s, most of all in pop.",
    },

    { type: "h2", text: "8. A map of genre in sound space" },
    {
      type: "p",
      text: "To see how genres relate in pure sound, I ran PCA on nine audio features (energy, danceability, valence, speechiness, acousticness, instrumentalness, liveness, loudness, tempo). The first component (29% of variance) separates quiet, acoustic songs from loud, energetic ones. The second (18%) separates danceable, happy songs from heavy, dark ones. Metal sits alone in the loud and dark corner, reggae at the danceable end, and folk and classical at the quiet end. Most other genres overlap heavily, so a genre label only loosely tells you how a song sounds.",
    },
    {
      type: "image",
      src: img("14_genre_map_pca.png"),
      alt: "PCA map of genres from audio features",
      caption: "Figure 11. Where the middle half of each genre sits in audio space (PCA, 50% density ellipses).",
    },
    {
      type: "image",
      src: img("15_genre_audio_profile.png"),
      alt: "Heatmap of audio feature profile by genre",
      caption: "Figure 12. Audio profile by genre (z-scores of mean feature values).",
    },
    {
      type: "p",
      text: "Which audio features go with lyric density? Line count correlates most with speechiness (ρ = 0.39), danceability (0.33) and the explicit flag (0.33), and negatively with instrumentalness (-0.25). Duration is related to release year (-0.24) and danceability (-0.18), which fits the finding that modern, dance-oriented music is shorter.",
    },
    {
      type: "image",
      src: img("09_corr_heatmap.png"),
      alt: "Spearman correlation heatmap",
      caption: "Figure 13. Spearman correlations between lyric, duration and audio features.",
    },

    { type: "h2", text: "9. The loudness war, in numbers" },
    {
      type: "p",
      text: "Mean loudness rose from about -11 dB in the 1960s to 1980s to about -7 dB around 2010, a gain of roughly 4 dB. It has fallen back slightly since, to about -7.8 dB in 2020, which is consistent with streaming platforms normalising loudness (I did not test that explanation). Punk and emo were the loudest genre in the 1970s to 1990s, and metal has been the loudest since 2000. Folk is the quietest genre in most decades.",
    },
    {
      type: "image",
      src: img("12_loudness_war.png"),
      alt: "Mean loudness by release year",
      caption: "Figure 14. The loudness war: mean loudness (dB) by release year, with the middle 50% of songs shaded.",
    },
    {
      type: "table",
      headers: ["Genre", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
      rows: [
        ["Metal", "n/a", "-8.8", "-7.5", "-5.2", "-5.4", "-6.3"],
        ["Punk / Emo", "-7.2", "-8.3", "-7.1", "-5.2", "-6.2", "-6.4"],
        ["Rock", "-10.7", "-9.9", "-8.9", "-7.0", "-7.2", "-8.0"],
        ["Hip hop / Rap", "-11.7", "-11.7", "-9.5", "-7.1", "-7.5", "-8.2"],
        ["Pop", "-11.5", "-11.0", "-9.6", "-7.6", "-7.5", "-8.2"],
        ["Electronic", "-10.7", "-11.4", "-9.0", "-7.4", "-7.3", "-8.4"],
        ["Country", "-12.6", "-13.4", "-10.8", "-8.1", "-7.5", "-8.2"],
        ["Jazz", "-12.5", "-13.3", "-12.2", "-9.5", "-8.2", "-9.5"],
        ["Folk", "-13.4", "-12.3", "-12.2", "-10.6", "-9.7", "-9.9"],
      ],
      caption: "Table 4. Mean loudness (dB) by genre and decade (selected genres; decades with fewer than 100 songs omitted).",
    },
    {
      type: "image",
      src: img("13_loudness_by_genre.png"),
      alt: "Loudness by genre and decade",
      caption: "Figure 15. Loudness by genre and decade.",
    },

    { type: "h2", text: "10. What is each genre good for?" },
    {
      type: "p",
      text: "The dataset tags songs as good for activities such as exercise, studying or driving. Folk, jazz and blues score highest for work and study (19 to 23% of songs). Electronic is the clear exercise genre (28%), followed by rap (22%) and reggae (21%). Electronic and reggae lead for parties (10 to 11%), and reggae also leads for driving (14%). Metal scores lowest almost everywhere, including 1% for studying and for relaxation.",
    },
    {
      type: "table",
      headers: ["Genre", "Party", "Work/Study", "Relax", "Exercise", "Driving"],
      rows: [
        ["Electronic", "11", "6", "2", "28", "4"],
        ["Hip hop / Rap", "7", "6", "3", "22", "7"],
        ["Reggae", "10", "2", "1", "21", "14"],
        ["Pop", "7", "12", "5", "17", "6"],
        ["Rock", "5", "7", "3", "16", "4"],
        ["Folk", "1", "23", "9", "7", "4"],
        ["Jazz", "2", "19", "9", "10", "5"],
        ["Blues", "3", "19", "8", "11", "5"],
        ["Classical", "3", "16", "7", "14", "6"],
        ["Metal", "2", "1", "1", "8", "1"],
      ],
      caption: "Table 5. Percentage of songs tagged as good for each activity (selected genres and activities).",
    },
    {
      type: "image",
      src: img("16_activities.png"),
      alt: "Heatmap of activity tags by genre",
      caption: "Figure 16. Share of songs tagged as good for each activity, by genre.",
    },

    { type: "h2", text: "11. Is the golden ratio hiding in songs? (A maths detour)" },
    {
      type: "p",
      text: "The golden ratio φ = (1 + √5) / 2 ≈ 1.6180 is the positive root of x² = x + 1. It follows that 1/φ = φ - 1 ≈ 0.618 and 1/φ² = 1 - 1/φ ≈ 0.382, so a whole split in the golden proportion puts 0.618 of it on one side and 0.382 on the other. Ratios of consecutive Fibonacci numbers (1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...) converge to φ: 3/2 = 1.5, 5/3 = 1.667, 8/5 = 1.6, 13/8 = 1.625. Songwriters are often said to place the climax or the chorus near the golden section, so I tested three concrete claims on the lyrics. For these tests I used the 435,439 songs that have at least four stanzas (blank-line separated), and called a stanza a chorus when it appears at least twice, identically.",
    },
    {
      type: "ul",
      items: [
        "Test A, verse to chorus size. For each song with both kinds of stanza, the ratio of mean verse length to mean chorus length in lines (132,000 songs). Is it near φ?",
        "Test B, the return of the chorus. At what fraction of the lyrics does the first chorus come back? Is there a peak at 1/φ = 0.618 or 1/φ² = 0.382?",
        "Test C, Fibonacci line counts. Do songs have 13, 21, 34, 55, 89 or 144 lines more often than their neighbours?",
      ],
    },
    {
      type: "p",
      text: "A feature of this data matters for the maths: stanza sizes are whole numbers, so ratios of two of them are rational, and φ is the most irrational number there is (its continued fraction is [1; 1, 1, 1, ...], the slowest to approximate by fractions). Real ratios will therefore pile up on simple fractions such as 1, 3/2 and 2 whether or not any golden design exists. To avoid mistaking that for a golden effect I measure a lift: the share of songs within a small window around a target value divided by the average share in equally wide windows 8 (B) or 15% (A) away on either side.",
    },
    {
      type: "table",
      headers: ["Test", "Result", "Golden-ratio prediction", "Verdict"],
      rows: [
        ["A. Median verse:chorus ratio", "1.476 (95% CI 1.467 to 1.481)", "1.618", "Median excludes φ"],
        ["A. Geometric mean verse:chorus ratio", "1.633 (CI 1.627 to 1.639)", "1.618", "Within 1% of φ, but the CI excludes it, and the arithmetic mean is 2.11"],
        ["A. Songs within 3% of the target", "φ 3.66%, 3/2 4.69%, 1 4.43%, 8/5 4.15%, 2 3.39%", "φ the standout", "φ is not special"],
        ["A. Lift at target (3% window)", "φ 1.02, 3/2 1.08, 2 0.94, 1 1.29", "φ well above 1", "No peak at φ; the 1:1 peak is largest"],
        ["B. Median return of first chorus", "0.632 (CI 0.629 to 0.633)", "0.618", "Close but outside the CI"],
        ["B. Lift at 0.618 / 0.382 (±0.02 window)", "0.96 / 0.85", "Above 1", "No local peak"],
        ["B. Lift at 0.5 (±0.02 window)", "1.32", "None", "The only visible spike, at the midpoint"],
        ["C. Fibonacci line counts, mean lift", "0.975 (permutation p = 0.66)", "Above 1", "No effect"],
        ["E. Next/previous stanza size within 3% of target", "1: 17.9%, 2: 4.9%, 1/2: 4.6%, φ: 1.2%, 1/φ: 2.6%", "φ prominent", "Equal-size stanzas dominate; φ is rare"],
      ],
      caption: "Table 6. Golden-ratio tests. Lift is the share within the window divided by the average of windows on either side.",
    },
    {
      type: "image",
      src: img("18_golden_ratio.png"),
      alt: "Four panels testing golden ratio claims in song structure",
      caption: "Figure 17. A: verse to chorus length ratio (spikes at 1, 3/2 and 2, from integer line counts). B: when the first chorus returns. D: songs by line count, Fibonacci numbers in red. E: ratio of consecutive stanza sizes.",
    },
    {
      type: "p",
      text: "The honest answer is no. The structure is real, but it is not golden. The ratio of verse to chorus length spikes at 1, 3/2 and 2, exactly where small-integer fractions sit, and φ lands in an ordinary part of the distribution (lift 1.02). The Fibonacci line counts show no excess (permutation p = 0.66), and the number of stanza pairs whose sizes differ by φ is tiny next to the 18% where consecutive stanzas have the same size.",
    },
    {
      type: "p",
      text: "There are two near-misses that a numerologist could love, and they show why such claims need error bars. The median first-chorus return is at 63.2% of the lyrics (CI 62.9% to 63.3%), only 1.4 points from 1/φ = 61.8%, and the geometric mean of the verse to chorus ratio is 1.633, within 1% of φ. But the CIs exclude φ in both cases, the median chorus return varies by genre (pop 58.5%, electronic 58.8%, alternative rock 60.6%, rock 62.6%, hip hop 64.3%) so 0.618 is just one point inside a spread, and the histogram has no peak there (Figure 17B): the distribution is broad, with its tallest spike at exactly 0.5. A plausible reading, which I did not test, is that the medians simply reflect common layouts (verse, chorus, verse, chorus, bridge, chorus) rather than an irrational proportion.",
    },

    { type: "h2", text: "12. Limitations" },
    {
      type: "ul",
      items: [
        "Hip hop makes up over half the data (about 297,000 songs). The \"hip hop\" tag looks like a default label for many songs, so it carries a lot of weight in overall figures. Genre-level results are more reliable than the pooled ones.",
        "Genre tags are assigned per artist, not per song, and are multi-label.",
        "Line breaks come from the lyrics source's formatting, so line counts are a proxy for song structure, not an exact measure.",
        "Results are associations in a convenience dataset, not causal claims. Explanations such as streaming loudness normalisation are my hypotheses and were not tested.",
        "With over 500,000 songs every difference is statistically significant, so I focus on effect sizes. Several of them are small.",
      ],
    },

    { type: "h2", text: "13. Takeaways" },
    {
      type: "ul",
      items: [
        "A song's lyric count is mostly a property of its genre, not its length.",
        "Rap packs about 17 lines into every minute; folk uses 9.",
        "Popular music is shorter, wordier, more repetitive and louder than it was in the 1980s.",
        "Genre labels overlap heavily in sound, with metal and reggae the most distinct.",
        "No golden ratio: song structure follows simple integer proportions (1:1, 3:2, 2:1), and the near-φ medians fall outside their confidence intervals.",
      ],
    },
    {
      type: "p",
      text: "Data: Kaggle \"900k Spotify\" by devdope. Analysis in Python (pandas, SciPy, scikit-learn, matplotlib, seaborn).",
    },
  ],
  resources: [
    { label: "Dataset: 900k Spotify songs with lyrics (Kaggle)", url: "https://www.kaggle.com/datasets/devdope/900k-spotify" },
  ],
};
