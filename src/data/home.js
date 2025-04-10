const mountains = [
  {
    image: "/img/semeru.png",
    rate: "3.5",
    name: "Gunung Semeru",
    height: "3,676",
    className: "col-span-1 row-span-1 h-64",
  },
  {
    image: "/img/merbabu.jpg",
    rate: "3.0",
    name: "Gunung Arjuno",
    height: "3,339",
    className: "col-span-1 row-span-2 h-[33.5rem]",
  },
  {
    image: "/img/slamet.jpg",
    rate: "4.5",
    name: "Gunung Slamet",
    height: "3,428",
    className: "col-span-1 row-span-1 h-64",
  },
  {
    image: "/img/sumbing.png",
    rate: "4.0",
    name: "Gunung Sumbing",
    height: "3,372",
    className: "col-span-1 row-span-1 h-64",
  },
  {
    image: "/img/prau.jpg",
    rate: "5.0",
    name: "Gunung Lawu",
    height: "3,332",
    className: "col-span-1 row-span-1 h-64",
  },
];

const stats = [
  { value: "500+", label: "Pendaki Bahagia" },
  { value: "150+", label: "Pendakian Sukses" },
  { value: "100+", label: "Gunung Dijelajahi" },
];

const tips = [
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 20l-5.447-2.724A2 2 0 012 15.382V5.618a2 2 0 011.553-1.894L9 1m0 19l6-3m-6 3V1m6 16.382a2 2 0 001.447.618h.106a2 2 0 001.894-1.553L21 9m-6 8V1m0 0l-6 3m6-3h.106a2 2 0 011.894 1.553L21 9"
        />
      </svg>
    ),
    title: "Rencanakan Rute & Cek Cuaca",
    description:
      "Selalu pelajari jalur pendakian dan periksa perkiraan cuaca sebelum berangkat.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "Jaga Energi & Hidrasi",
    description:
      "Bawa cukup air dan makanan untuk menjaga stamina selama perjalanan.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        />
      </svg>
    ),
    title: "Bawa Peralatan yang Tepat",
    description:
      "Siapkan peralatan mendaki yang sesuai, seperti sepatu trekking, dan peralatan survival.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2-1.343-2-3-2zm0 8c-2.761 0-5-1.343-5-3s2.239-3 5-3 5 1.343 5 3-2.239 3-5 3z"
        />
      </svg>
    ),
    title: "Jangan Lupa Etika Mendaki",
    description:
      "Selalu bawa kembali sampahmu dan hormati alam serta sesama pendaki.",
  },
];

const statsTips = [
  { value: "50+", label: "Pendakian" },
  { value: "500+", label: "Guider" },
];

const testimonials = [
  {
    image: "/pendaki-1.png",
    name: "Ramadhan Rayan",
    location: "Jakarta",
    text: "Pengalaman mendaki yang luar biasa bersama Mountainesia!",
  },
  {
    image: "/pendaki-1.png",
    name: "Toni Adi Bhakti",
    location: "Bandung",
    text: "Pemandu yang profesional dan pemandangan yang menakjubkan.",
  },
  {
    image: "/pendaki-1.png",
    name: "Faisal Muhammad R",
    location: "Surabaya",
    text: "Perjalanan yang terorganisir dengan baik dan sangat menyenangkan.",
  },
  {
    image: "/pendaki-1.png",
    name: "Luqman Hakim",
    location: "Surabaya",
    text: "Perjalanan yang terorganisir dengan baik dan sangat menyenangkan.",
  },
  {
    image: "/pendaki-1.png",
    name: "Fatih Azra N",
    location: "Surabaya",
    text: "Perjalanan yang terorganisir dengan baik dan sangat menyenangkan.",
  },
  {
    image: "/pendaki-1.png",
    name: "Hamdan",
    location: "Surabaya",
    text: "Perjalanan yang terorganisir dengan baik dan sangat menyenangkan.",
  },
];

export default { mountains, stats, tips, statsTips, testimonials };
