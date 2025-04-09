const destinations = [
    {
      slug: "rinjani",
      name: "Gunung Rinjani",
      desc: "Gunung berapi aktif dengan danau kawah Segara Anak.",
      location: "Lombok, NTB",
      price: "450K",
      island: "Nusa Tenggara",
      image: "/img/rinjani.jpg",
      details: {
        description:
          "Rinjani adalah gunung tertinggi kedua di Indonesia yang terkenal dengan Danau Segara Anak di kawahnya. Jalur pendakian yang populer adalah Sembalun dan Senaru.",
        do: ["Bawa jaket hangat", "Jaga kebersihan", "Gunakan guide lokal"],
        dont: ["Buang sampah sembarangan", "Naik tanpa izin"],
        tips: "Disarankan naik dari jalur Sembalun untuk pemandangan terbaik.",
        guide: {
          name: "Agus Rinjani",
          contact: "0812-3456-7890",
          rate: "150K/hari",
          photo: "/img/guide/agus.jpg",
        },
      },
    },
    {
      slug: "semeru",
      name: "Gunung Semeru",
      desc: "Puncak tertinggi di Pulau Jawa dengan panorama luar biasa.",
      location: "Lumajang, Jawa Timur",
      price: "400K",
      island: "Jawa",
      image: "/img/semeru.jpg",
      details: {
        description:
          "Semeru, dikenal juga sebagai Mahameru, adalah gunung tertinggi di Pulau Jawa. Gunung ini aktif dan memerlukan izin pendakian resmi.",
        do: ["Daftar SIMAKSI", "Pantau kondisi cuaca", "Gunakan masker debu"],
        dont: ["Mendirikan tenda di area Kalimati", "Mendekati kawah"],
        tips:
          "Bawa perlengkapan lengkap dan jangan memaksakan mendaki ke puncak jika cuaca buruk.",
        guide: {
          name: "Budi Semeru",
          contact: "0813-4567-8901",
          rate: "200K/hari",
          photo: "/img/guide/budi.jpg",
        },
      },
    },
    {
      slug: "bromo",
      name: "Gunung Bromo",
      desc: "Lautan pasir dan matahari terbit yang memesona.",
      location: "Probolinggo, Jawa Timur",
      price: "350K",
      island: "Jawa",
      image: "/img/bromo.jpg",
      details: {
        description:
          "Bromo merupakan gunung aktif yang dikelilingi oleh lautan pasir dan pemandangan sunrise yang ikonik di Penanjakan.",
        do: ["Datang pagi-pagi untuk sunrise", "Sewa jeep untuk akses mudah"],
        dont: ["Mendekati kawah tanpa masker", "Naik kuda tanpa izin"],
        tips: "Datang saat weekdays untuk menghindari keramaian.",
        guide: {
          name: "Pak Joko",
          contact: "0812-0000-1111",
          rate: "100K/hari",
          photo: "/img/guide/joko.jpg",
        },
      },
    },
    {
      slug: "kerinci",
      name: "Gunung Kerinci",
      desc: "Gunung tertinggi di Sumatera, bagian dari Taman Nasional Kerinci Seblat.",
      location: "Jambi, Sumatera",
      price: "420K",
      island: "Sumatera",
      image: "/img/kerinci.jpg",
      details: {
        description:
          "Gunung Kerinci adalah puncak tertinggi di Sumatera dan merupakan bagian dari kawasan konservasi dengan flora dan fauna langka.",
        do: ["Gunakan porter lokal", "Hormati adat setempat"],
        dont: ["Membuat api unggun sembarangan", "Meninggalkan sampah"],
        tips: "Waspadai cuaca ekstrem dan siapkan fisik dengan baik.",
        guide: {
          name: "Andi Kerinci",
          contact: "0812-2222-3333",
          rate: "180K/hari",
          photo: "/img/guide/andi.jpg",
        },
      },
    },
    {
      slug: "latimojong",
      name: "Gunung Latimojong",
      desc: "Gunung tertinggi di Sulawesi dengan hutan tropis yang asri.",
      location: "Enrekang, Sulawesi Selatan",
      price: "390K",
      island: "Sulawesi",
      image: "/img/latimojong.jpg",
      details: {
        description:
          "Gunung Latimojong memiliki jalur pendakian yang menantang dan melewati hutan hujan tropis yang masih alami.",
        do: ["Ikuti jalur resmi", "Bawa logistik yang cukup"],
        dont: ["Membuat kerusakan alam", "Memburu satwa liar"],
        tips:
          "Latihan fisik disarankan karena jalur cukup terjal dan panjang.",
        guide: {
          name: "Daeng Latimojong",
          contact: "0812-4444-5555",
          rate: "170K/hari",
          photo: "/img/guide/daeng.jpg",
        },
      },
    },
    {
      slug: "cartenz",
      name: "Gunung Cartenz",
      desc: "Puncak tertinggi di Indonesia dengan salju abadi.",
      location: "Papua",
      price: "600K",
      island: "Papua",
      image: "/img/cartenz.jpg",
      details: {
        description:
          "Puncak Jaya atau Cartenz Pyramid adalah puncak tertinggi di Indonesia dan satu-satunya yang bersalju di daerah tropis.",
        do: ["Gunakan pemandu profesional", "Persiapkan peralatan khusus"],
        dont: ["Pendakian ilegal", "Mengabaikan keselamatan"],
        tips:
          "Gunung ini memerlukan izin khusus dan biasanya ditempuh lewat jalur ekspedisi.",
        guide: {
          name: "Yanto Papua",
          contact: "0821-5555-6666",
          rate: "500K/hari",
          photo: "/img/guide/yanto.jpg",
        },
      },
    },
  ];
  
  export default destinations;
  