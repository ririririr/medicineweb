import React, { useState } from 'react';
import { Brain, Bell, Camera, MessageCircle, Pill, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const menuOptions = [
  { icon: Brain, label: 'AI Health Assistant', image: '/phonestates/assist.png', color: 'bg-green-300' },
  { icon: Bell, label: 'Health Records', image: '/phonestates/records.png', color: 'bg-green-400' },
  { icon: Camera, label: 'Medicine Recognition', images: ['/phonestates/reco_1.png', '/phonestates/reco_2.png'], color: 'bg-green-500' },
  { icon: MessageCircle, label: 'Doctor Notes', images: ['/phonestates/doctor_1.png', '/phonestates/doctor_2.png'], color: 'bg-green-600' },
  { icon: Pill, label: 'Medicine Reminders', images: ['/phonestates/reminder_1.png', '/phonestates/reminder_2.png', '/phonestates/reminder_3.png'], color: 'bg-green-700' },
  { icon: AlertCircle, label: 'Smart Notifications', image: '/phonestates/note.png', color: 'bg-green-800' }
];

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentReminderIndex, setCurrentReminderIndex] = useState(0);
  const [currentRecoIndex, setCurrentRecoIndex] = useState(0);
  const [currentDoctorIndex, setCurrentDoctorIndex] = useState(0);

  const handleNextReminder = () => {
    const nextIndex = (currentReminderIndex + 1) % menuOptions[4].images.length;
    setCurrentReminderIndex(nextIndex);
    setSelectedImage(menuOptions[4].images[nextIndex]);
  };

  const handlePreviousReminder = () => {
    const prevIndex = (currentReminderIndex - 1 + menuOptions[4].images.length) % menuOptions[4].images.length;
    setCurrentReminderIndex(prevIndex);
    setSelectedImage(menuOptions[4].images[prevIndex]);
  };

  const handleNextReco = () => {
    const nextIndex = (currentRecoIndex + 1) % menuOptions[2].images.length;
    setCurrentRecoIndex(nextIndex);
    setSelectedImage(menuOptions[2].images[nextIndex]);
  };

  const handlePreviousReco = () => {
    const prevIndex = (currentRecoIndex - 1 + menuOptions[2].images.length) % menuOptions[2].images.length;
    setCurrentRecoIndex(prevIndex);
    setSelectedImage(menuOptions[2].images[prevIndex]);
  };

  const handleNextDoctor = () => {
    const nextIndex = (currentDoctorIndex + 1) % menuOptions[3].images.length;
    setCurrentDoctorIndex(nextIndex);
    setSelectedImage(menuOptions[3].images[nextIndex]);
  };

  const handlePreviousDoctor = () => {
    const prevIndex = (currentDoctorIndex - 1 + menuOptions[3].images.length) % menuOptions[3].images.length;
    setCurrentDoctorIndex(prevIndex);
    setSelectedImage(menuOptions[3].images[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Video header with fade effect */}
      <div className="w-full h-[75vh] relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/medicinephone.mp4" type="video/mp4" />
        </video>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-7xl font-bold font-square tracking-wider">
            <span className="text-white/80">MEDICINE</span>{' '}
            <span className="text-green-500/80">AI</span>
          </h1>
        </div>
        
        {/* Gradient overlay for fade effect */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-green-50 to-transparent" />
      </div>

      {/* Why Medicine AI? */}
      <div className="text-center text-green-600 font-bold uppercase mt-16" style={{ fontSize: '4rem' }}>
        WHY MEDICINE AI?
      </div>

      {/* Image comp.jpg in a box with rounded edges */}
      <div className="w-full my-8 px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src="/comp.jpg" alt="Comparison" className="w-full h-auto" />
        </div>
      </div>
      <div className="text-center mt-16">
        <h2 className="text-5xl font-bold text-green-600">OUR ADVANTAGES</h2>
      </div>
      {/* Bullet Points in Two Boxes */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 flex-1 mt-0 md:mt-16">
  <ul className="list-disc list-inside space-y-4 text-black font-bold uppercase" style={{ fontSize: '2rem' }}>
    <li><span className="text-green-600">AI</span> Powered</li>
    <li>Patented <span className="text-green-600">Design</span> and <span className="text-green-600">Copyright</span></li>
    <li>Exclusive <span className="text-green-600">Database</span></li>
    <li><span className="text-green-600">Personalized</span> Services</li>
    <li>Industrial <span className="text-green-600">Collaboration</span></li>
  </ul>
</div>


      {/* iPhone Frame with Features */}
      <div className="max-w-7xl mx-auto px-8 py-16 text-center">
        <h2 className="text-6xl font-bold mb-8">
          <span className="text-green-600">TRY</span> <span className="text-green-600">IT!</span>
        </h2>
        <div className="relative w-[380px] h-[600px] mx-auto bg-black rounded-[55px] shadow-2xl p-3 border-[8px] border-black">
          <div className="relative w-full h-full bg-white rounded-[48px] overflow-hidden">
            {/* Status Bar */}
            <div className="h-8 bg-white"></div>
            
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-[24px]">
              <div className="absolute left-[22px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-black border-2 border-[#1a1a1a]"></div>
              <div className="absolute right-[22px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></div>
            </div>

            {/* Content */}
            <div className="h-full flex flex-col p-8 pt-16">
              {/* First Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  className="bg-green-300 text-white p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-green-400 transition-colors"
                  onClick={() => setSelectedImage(menuOptions[0].image)}
                >
                  <Brain size={32} />
                  <span className="mt-2 font-medium">AI Health Assistant</span>
                </button>
                <button
                  className="bg-green-400 text-white p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-green-500 transition-colors"
                  onClick={() => setSelectedImage(menuOptions[1].image)}
                >
                  <Bell size={32} />
                  <span className="mt-2 font-medium">Health Records</span>
                </button>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  className="bg-green-500 text-white p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-green-600 transition-colors"
                  onClick={() => {
                    setSelectedImage(menuOptions[2].images[0]);
                    setCurrentRecoIndex(0);
                  }}
                >
                  <Camera size={32} />
                  <span className="mt-2 font-medium">Medicine Recognition</span>
                </button>
                <button
                  className="bg-green-600 text-white p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-green-700 transition-colors"
                  onClick={() => {
                    setSelectedImage(menuOptions[3].images[0]);
                    setCurrentDoctorIndex(0);
                  }}
                >
                  <MessageCircle size={32} />
                  <span className="mt-2 font-medium">Doctor Notes</span>
                </button>
              </div>

              {/* Third Row */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  className="bg-green-700 text-white p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-green-800 transition-colors"
                  onClick={() => {
                    setSelectedImage(menuOptions[4].images[0]);
                    setCurrentReminderIndex(0);
                  }}
                >
                  <Pill size={32} />
                  <span className="mt-2 font-medium">Medicine Reminders</span>
                </button>
                <button
                  className="bg-green-800 text-white p-6 rounded-2xl flex flex-col items-center justify-center hover:bg-green-900 transition-colors"
                  onClick={() => setSelectedImage(menuOptions[5].image)}
                >
                  <AlertCircle size={32} />
                  <span className="mt-2 font-medium">Smart Notifications</span>
                </button>
              </div>
            </div>
          </div>

          {/* iPhone Frame Details */}
          <div className="absolute -right-[4px] top-24 h-8 w-[4px] bg-gray-700 rounded-r-lg"></div>
          <div className="absolute -right-[4px] top-36 h-12 w-[4px] bg-gray-700 rounded-r-lg"></div>
          <div className="absolute -left-[4px] top-24 h-16 w-[4px] bg-gray-700 rounded-l-lg"></div>
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full"></div>
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative w-3/4 h-3/4 bg-white rounded-lg p-2">
            <img 
              src={selectedImage} 
              alt="Selected Option" 
              className="w-full h-full object-contain rounded-lg" 
            />
            <button
              className="absolute top-4 right-4 text-black text-3xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            {selectedImage === menuOptions[4].images[0] && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-l-lg"
                onClick={handleNextReminder}
              >
                <ArrowRight size={32} />
              </button>
            )}
            {selectedImage === menuOptions[4].images[1] && (
              <>
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-r-lg"
                  onClick={handlePreviousReminder}
                >
                  <ArrowLeft size={32} />
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-l-lg"
                  onClick={handleNextReminder}
                >
                  <ArrowRight size={32} />
                </button>
              </>
            )}
            {selectedImage === menuOptions[4].images[2] && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-r-lg"
                onClick={handlePreviousReminder}
              >
                <ArrowLeft size={32} />
              </button>
            )}
            {selectedImage === menuOptions[2].images[0] && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-l-lg"
                onClick={handleNextReco}
              >
                <ArrowRight size={32} />
              </button>
            )}
            {selectedImage === menuOptions[2].images[1] && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-r-lg"
                onClick={handlePreviousReco}
              >
                <ArrowLeft size={32} />
              </button>
            )}
            {selectedImage === menuOptions[3].images[0] && (
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-l-lg"
                onClick={handleNextDoctor}
              >
                <ArrowRight size={32} />
              </button>
            )}
            {selectedImage === menuOptions[3].images[1] && (
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-500 bg-opacity-50 text-white p-4 rounded-r-lg"
                onClick={handlePreviousDoctor}
              >
                <ArrowLeft size={32} />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;