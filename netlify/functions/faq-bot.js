const faqs = [
  {
    question: "Apa itu HIMASI UNAS?",
    answer: "HIMASI UNAS adalah Himpunan Mahasiswa Sistem Informasi Universitas Nasional. Kami merupakan organisasi mahasiswa yang berdedikasi untuk mengembangkan potensi akademik, profesional, dan sosial di bidang Sistem Informasi."
  },
  {
    question: "Apa visi dan misi HIMASI UNAS?",
    answer: "Visi: Menjadi wadah pengembangan mahasiswa Sistem Informasi yang unggul, kreatif, dan berkarakter. Misi: Mengembangkan potensi akademik dan profesional mahasiswa, membangun jejaring yang solid, dan menciptakan lingkungan belajar yang inspiratif."
  },
  {
    question: "Bagaimana cara bergabung dengan HIMASI?",
    answer: "Untuk bergabung dengan HIMASI UNAS, Anda bisa mengikuti open recruitment yang biasanya diadakan di awal semester. Pantau terus media sosial kami untuk informasi terbaru tentang penerimaan anggota baru."
  },
  {
    question: "Apa saja kegiatan yang dilakukan HIMASI?",
    answer: "HIMASI UNAS mengadakan berbagai kegiatan seperti seminar teknologi, workshop programming, pelatihan soft skills, study tour, bakti sosial, dan proyek kolaboratif. Kami juga aktif dalam kompetisi IT dan kegiatan kemahasiswaan."
  },
  {
    question: "Siapa pengurus HIMASI UNAS saat ini?",
    answer: "Struktur keorganisasian HIMASI UNAS dipimpin oleh Ketua Umum beserta jajarannya. Untuk informasi lengkap tentang struktur organisasi terkini, silakan kunjungi halaman Struktur di website kami."
  },
  {
    question: "Bagaimana cara menghubungi HIMASI?",
    answer: "Anda dapat menghubungi kami melalui media sosial Instagram @himasi.unas, email resmi, atau datang langsung ke sekretariat HIMASI di kampus Universitas Nasional."
  },
  {
    question: "Apakah ada biaya untuk bergabung?",
    answer: "Informasi mengenai biaya keanggotaan akan dijelaskan saat proses recruitment. HIMASI berkomitmen untuk memberikan nilai lebih kepada setiap anggotanya melalui berbagai program pengembangan."
  },
  {
    question: "Apa benefit menjadi anggota HIMASI?",
    answer: "Sebagai anggota HIMASI, Anda akan mendapat akses ke workshop eksklusif, networking dengan alumni dan profesional IT, sertifikat kegiatan, pengembangan soft skills, dan kesempatan magang di perusahaan partner."
  },
  {
    question: "What is the purpose of this chatbot?",
    answer: "Chatbot ini dibuat untuk membantu menjawab pertanyaan umum seputar HIMASI UNAS, kegiatan organisasi, dan informasi terkait program studi Sistem Informasi."
  },
  {
    question: "How do I use the chatbot?",
    answer: "Cukup ketik pertanyaan Anda di kotak chat ini, dan saya akan berusaha memberikan jawaban terbaik. Anda bisa bertanya dalam bahasa Indonesia atau Inggris."
  },
  {
    question: "Can I ask any question?",
    answer: "Anda dapat bertanya tentang HIMASI UNAS, kegiatan organisasi, program studi Sistem Informasi, dan topik terkait. Jika pertanyaan di luar scope, saya akan mengarahkan Anda ke kontak yang tepat."
  },
  {
    question: "Is the chatbot available 24/7?",
    answer: "Ya, chatbot ini tersedia 24/7 untuk membantu Anda. Namun untuk pertanyaan yang memerlukan respon personal, silakan hubungi kontak resmi HIMASI di jam kerja."
  },
  {
    question: "How can I provide feedback?",
    answer: "Feedback sangat kami hargai! Anda bisa memberikan saran melalui media sosial HIMASI atau email resmi kami. Masukan Anda akan membantu kami terus berkembang."
  }
];

class FAQBot {
  constructor() {
    this.faqs = faqs;
    console.log(`✅ Loaded ${this.faqs.length} FAQs`);
  }

  similarity(a, b) {
    const normalize = (str) => str.toLowerCase().replace(/[^\w\s]/g, '').trim();
    const strA = normalize(a);
    const strB = normalize(b);
    
    const wordsA = strA.split(/\s+/);
    const wordsB = strB.split(/\s+/);
    
    let matches = 0;
    for (const word of wordsA) {
      if (wordsB.some(w => w.includes(word) || word.includes(w))) {
        matches++;
      }
    }
    
    return matches / Math.max(wordsA.length, 1);
  }

  getResponse(question) {
    console.log(`🔍 Processing question: ${question}`);
    
    if (!question || !question.trim()) {
      return "Please ask me a question!";
    }

    const questionClean = question.toLowerCase().trim();
    let bestMatch = null;
    let bestScore = 0;
    
    // Try exact keyword matching first
    for (const faq of this.faqs) {
      const faqQuestion = faq.question.toLowerCase();
      
      // Check for exact keyword matches
      const questionWords = questionClean.split(/\s+/);
      const faqWords = faqQuestion.split(/\s+/);
      
      // Count matching words
      const matches = questionWords.filter(word => 
        faqWords.some(faqWord => faqWord.includes(word) || word.includes(faqWord))
      ).length;
      
      const matchRatio = matches / questionWords.length;
      const similarity = this.similarity(questionClean, faqQuestion);
      
      // Combined score (weighted)
      const combinedScore = (matchRatio * 0.7) + (similarity * 0.3);
      
      console.log(`📊 FAQ: '${faq.question.substring(0, 50)}...' - Score: ${combinedScore.toFixed(2)}`);
      
      if (combinedScore > bestScore && combinedScore > 0.3) {
        bestScore = combinedScore;
        bestMatch = faq;
      }
    }

    if (bestMatch) {
      console.log(`✅ Best match found with score: ${bestScore.toFixed(2)}`);
      return bestMatch.answer;
    }
    
    console.log("❌ No suitable match found");
    return "Maaf, saya tidak menemukan jawaban untuk pertanyaan tersebut. Silakan coba dengan kata kunci yang berbeda atau hubungi tim support kami.";
  }
}

module.exports = { FAQBot };