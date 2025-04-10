import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <Image
                src="/assets/chosen-about.png"
                alt="Team hands together"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Mengapa Memilih Kami
            </h2>
            <p className="text-lg text-gray-600">
              Kami siap membantu Anda mencapai puncak keberhasilan dan kenangan
              tak terlupakan dalam menjelajahi alam bebas
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Profesionalisme dan Pengalaman
                  </h3>
                  <p className="text-gray-600">
                    Tim Jasa Pendaki terdiri dari pendaki berpengalaman yang
                    telah menjelajahi berbagai rute dan puncak di berbagai medan
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Fleksibilitas dan Penyesuaian Rute
                  </h3>
                  <p className="text-gray-600">
                    Fleksibilitas dan penyesuaian rute memiliki bawaan berbeda
                    tingkat keahlian yang berbeda
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm0 0c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Memori dan Kenangan Tak Terlupakan
                  </h3>
                  <p className="text-gray-600">
                    Kami berkomitmen untuk menciptakan momen tak terlupakan
                    dalam setiap perjalanan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
