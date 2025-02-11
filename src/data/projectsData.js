export const projectsData = [
  {
    id: 1,
    title: "Youtube Yorumları Duygu Analizi",
    description: "Bu çalışmada, YouTube üzerindeki herhangi bir videonun yorumları çekilerek, "+
                  "Türkçe yorumlar üzerinde duygu analizi yapılır. Yorumlar, pozitif, negatif ve nötr olarak sınıflandırılır.",
    image: "/1111.png",
    technologies: ["React", "Axios","PapaParse","Selenium","Python","Pandas & Numpy","NLTK", "TensorFlow & Keras","Scikit-learn","Gensim (Word2Vec)","Matplotlib"],
    githubLink: "https://github.com/huseyincaglar1/YoutubeYorumAnalizi",
    liveLink: "https://youtube-yorum-cekme.vercel.app/",
    pdfLinks: ["/pdfs/youtubeYorumDuyguAnalizi.pdf"], 
    features: [
      "Arayüz Oluşturma",
      "Veri Seti Hazırlama",
      "Yapay Sinir Ağı Modeli Eğitimi",
      "Model Analizi ve Çıkarımlar"
    ]
  },
  {
    id: 2,
    title: "ALLFACE",
    description: "ALLFACE, duygu durumu analizi ve etkinlik öneri sistemi üzerine "+
                  "geliştirilmiş kapsamlı bir mobil uygulamadır. Bu yenilikçi platform, kullanıcıların anlık duygu "+ 
                  "durumlarını analiz eden bir model kullanarak, yaş, cinsiyet ve meslek gibi faktörlere dayalı "+
                  "olarak etkinlik önerileri sunar.",
    image: "/2222.png",
    technologies: ["Python", "Flutter", "Flask","Firebase","Postman","TensorFlow","Keras","Scikit-Learn","Pandas & NumPy","Joblib","MobileNetV2","Transfer Learning","CNN","Matplotlib"],
    githubLink: "https://github.com/huseyincaglar1/ALLFACE",
    pdfLinks: ["/pdfs/allface.pdf"], 
    features: [
      "Kullanıcı Dostu Arayüz",
      "Sosyal Paylaşım Platformu",
      "Geri Bildirim Sistemi",
      "Anlık Duygu Durumu Analizi",
      "Kişiselleştirilmiş Etkinlik Önerileri"
      
    ]
  },
  {
    id: 3,
    title: "Hafıza Oyunu",
    description: "Bu proje, kullanıcıların hafıza becerilerini geliştirmelerine yönelik bir kart eşleştirme oyunu sunar. "+
                 "Oyun ilerledikçe seviyeler zorlaşır ve oyuncunun performansına bağlı olarak skorlar güncellenir. Kullanıcıların "+
                 "en yüksek skorları Firebase Firestore’a kaydedilir ve giriş yaparak ilerlemelerini takip etmeleri sağlanır.",
    image: "/3222.png",
    technologies: ["React", "Firebase","Tailwind CSS","JavaScript (ES6+)"],
    githubLink: "https://github.com/huseyincaglar1/Memorygame",
    liveLink: "https://memorygame-ruddy.vercel.app/login",
    features: [
      "Giriş Sistemi",
      "Oyun Mekaniği",
      "Skor Sistemi",
      "Zorluk Seviyeleri"
    ]
  },
  {
    id: 4,
    title: "Dosya Arşivleyici",
    description: "Projenin temel amacı, multithreading teknolojisini kullanarak dosya sıkıştırma ve "+
                  "çıkarma işlemlerinin performansını artırmaktır. Aynı anda birden fazla işlem "+
                  "gerçekleştirilmesine olanak tanıyan bu yapı sayesinde işlem süreleri minimuma indirilirken, "+
                  "kullanıcılar daha hızlı ve verimli bir deneyim elde edecektir.",
    image: "/4444.png",
    technologies: ["Java","JavaFX","Multithreading","Java I/O","Java Concurrency"],
    githubLink: "https://github.com/huseyincaglar1/DosyaArsivleyici",
    pdfLinks: [
      "/pdfs/dosyaArsivleyici1.pdf",
      "/pdfs/dosyaArsivleyici2.pdf"
    ],
    features: [
      "Ana Menü",
      "Dosya Sıkıştırma",
      "Dosya Çıkarma"
    ]
  },
  {
    id: 5,
    title: "Konut Fiyat Tahmin Uygulaması",
    description: "Bu çalışma, belirli bir veri seti üzerinde makine öğrenmesi algoritmaları kullanarak analizler yapmayı ve "+
                 "bu analizlerle tahmin modelleri geliştirmeyi amaçlamaktadır. Ayrıca, geliştirilen modelin bir web uygulaması aracılığıyla "+
                 "son kullanıcıya sunulabilirliğini test etmeyi hedeflemektedir.",
    image: "/5444.png",
    technologies: ["React","Python","Flask","CORS","Axios","Pickle","Gradient Boosting Regressor","Pandas","Scikit-learn"],
    githubLink: "https://github.com/huseyincaglar1/konutFiyatTahmini",
    pdfLinks: ["/pdfs/konutFiyatTahmini.pdf"], 
    features: [
      "Konut Fiyatı Tahmini",
      "Veri Ön İşleme",
      "Model Eğitimi ve Değerlendirme",
      "Web API ve Kullanıcı Arayüzü"
    ]
  }
];