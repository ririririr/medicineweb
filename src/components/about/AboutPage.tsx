import React, { useRef, useEffect, useState } from 'react';
import WhatWeDo from './WhatWeDo';
import OurMission from './OurMission';
import WhoWeAre from './WhoWeAre';
import { Target, Eye, Users } from 'lucide-react';

const AboutPage = () => {
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const ourMissionRef = useRef<HTMLDivElement>(null);
  const whoWeAreRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLink, setVideoLink] = useState('https://www.youtube.com/embed/5VbS-nOPnZI');

  const scrollToSection = (section: string) => {
    const refs = {
      'what-we-do': whatWeDoRef,
      'our-mission': ourMissionRef,
      'who-we-are': whoWeAreRef
    };

    refs[section as keyof typeof refs]?.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  useEffect(() => {
    videoRef.current?.play();

    // Detect user location using ipinfo
    fetch('https://ipinfo.io/119.124.91.116?token=77b3e107cd306e') // Replace with your token
      .then(response => response.json())
      .then(data => {
        if (data.country === 'CN') {
          setVideoLink('//player.bilibili.com/player.html?aid=375588815&bvid=BV1so4y1m7U5&cid=339262048&page=1');
        }
      })
      .catch(error => console.error('Error fetching IP location:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 snap-section">
      <div className="w-full pt-24">
        {/* Video header */}
        <div className="w-full relative mb-8">
          <video
            ref={videoRef}
            className="w-full h-auto"
            muted
            playsInline
          >
            <source src="/medicinelogo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Watch Our Video */}
        <div className="text-center text-green-600 text-4xl font-bold mt-16">
          WATCH OUR VIDEO!
        </div>

        {/* Embedded Video */}
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="relative w-full h-0 pb-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoLink}
              title="Video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 space-y-8">
          {/* Mission Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
              Our Mission
              <Target className="ml-3 text-green-600" size={32} />
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Our mission is to empower individuals to lead healthier, more independent lives by providing them with a user-friendly and intelligent personal medical assistant. We aim to improve medical adherence, simplify medical complexities, and enhance communication between patients, doctors, and family members, ultimately enhancing the quality of life for our users and their families.
            </p>
          </div>

          {/* Our Values Section */}
          <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-green-100 overflow-hidden">
            <div className="absolute inset-0">
              <img 
                src="/heart.jpg"
                alt="Heart background" 
                className="w-full h-full object-cover opacity-20"
              />
            </div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Values</h1>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">1)</span>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">User-Centric</h4>
                    <p className="text-xl text-gray-700 leading-relaxed">Our app is designed with our users in mind: instead of texting, which may be challenging for elderly individuals, users can simply ask our AI assistant through a voice call. While complex medicine names are hard to type, users can simply take a photo of the medicine packaging to add it to the reminder list.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">2)</span>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">Personalized</h4>
                    <p className="text-xl text-gray-700 leading-relaxed">Every AI assistant is tailor-made to their user, with all suggestions supported by information on their health profile. Medicine reminders are also personalized, with the frequency adjusted based on the users health conditions and past medicine adherence.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">3)</span>
                  <div>
                    <h4 className="text-2xl font-semibold text-gray-900 mb-2">Connected</h4>
                    <p className="text-xl text-gray-700 leading-relaxed">Medicine AI keeps doctors and family constantly up to date with the user's latest health conditions. Doctors notes, users' medicine adherence and health records are instantly synchronized between patient, doctors, and family.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Logo and Logo Design Section */}
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 w-full">
            {/* Logo Section */}
            <div className="relative group w-full md:w-1/2">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-transparent to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-green-50 via-transparent to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
              <div className="absolute inset-0 bg-gradient-to-tr from-green-50/90 via-transparent to-green-50/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
              <div className="absolute inset-0 bg-gradient-to-bl from-green-50/90 via-transparent to-green-50/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
              <img 
                src="/medicinelogo.png" 
                alt="Medicine AI Logo" 
                className="w-full h-auto mx-auto relative z-10 rounded-2xl transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>

            {/* Logo Design Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100 w-full md:w-1/2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                <span className="text-green-600">Logo</span> Design
              </h1>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">1)</span>
                  <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">Circular Layout:</span> The circular shape represents unity, symbolizing that patients, doctors, and family are seamlessly connected through our AI map.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">2)</span>
                  <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">Stethoscope:</span> The central stethoscope is a universal symbol of medicine and healthcare. Its placement emphasizes the core focus on medical care and support.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">3)</span>
                  <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">Neural Network Pattern:</span> Surrounding the stethoscope is a futuristic neural network design. This pattern represents the AI technology we employed to power our smart medical assistant.</p>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-green-600 font-bold">4)</span>
                  <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">AI and Medicine:</span> The harmonious combination of the neural network pattern and the stethoscope symbolizes the integration of AI into our everyday health management.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Color Scheme Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
            <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
              <span className="text-red-500">C</span>
              <span className="text-orange-500">o</span>
              <span className="text-yellow-500">l</span>
              <span className="text-green-500">o</span>
              <span className="text-blue-500">r</span>
              &nbsp;
              <span className="text-indigo-500">S</span>
              <span className="text-purple-500">c</span>
              <span className="text-pink-500">h</span>
              <span className="text-red-500">e</span>
              <span className="text-orange-500">m</span>
              <span className="text-yellow-500">e</span>
            </h1>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <span className="text-green-600 font-bold">1)</span>
                <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">Green:</span> Represents health, growth, and vitality. In healthcare, green is associated with healing, harmony, and well-being. It creates a sense of balance and promotes feelings of calmness and restoration.</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-600 font-bold">2)</span>
                <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">Black:</span> Symbolizes sophistication, authority, and innovation. It represents the cutting-edge technology and AI capabilities of our platform while maintaining a professional and reliable appearance.</p>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-green-600 font-bold">3)</span>
                <p className="text-xl text-gray-700 leading-relaxed"><span className="font-semibold">Combination:</span> The green and black palette creates a perfect balance between the nurturing aspect of healthcare and the technological advancement of AI, reflecting our mission to combine both for better health outcomes.</p>
              </div>
            </div>
          </div>
          <div className="w-full py-16">
  <div className="max-w-7xl mx-auto px-8">
    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
  </div>
</div>

         

          {/* Team Photos */}
          <div className="space-y-8">
            {/* First Row */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <img src="/James.jpg" alt="James" className="w-full object-contain rounded-lg shadow-md" />
                <p className="text-center text-lg font-medium text-gray-900">James: Team Coordinator </p>
              </div>
              <div className="space-y-2">
                <img src="/fred.jpg" alt="Fred" className="w-full object-contain rounded-lg shadow-md" />
                <p className="text-center text-lg font-medium text-gray-900">Fred: Product Designer</p>
              </div>
            </div>
            {/* Second Row */}
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-2">
                <img src="/steven.jpg" alt="Steven" className="w-full object-contain rounded-lg shadow-md" />
                <p className="text-center text-lg font-medium text-gray-900">Steven: Team Programmer</p>
              </div>
              <div className="space-y-2">
                <img src="/ricky.jpg" alt="Ricky" className="w-full object-contain rounded-lg shadow-md" />
                <p className="text-center text-lg font-medium text-gray-900">Ricky: Team Writer</p>
              </div>
              <div className="space-y-2">
                <img src="/tony.jpeg" alt="Tony" className="w-full object-contain rounded-lg shadow-md" />
                <p className="text-center text-lg font-medium text-gray-900">Tony: Video Editor</p>
              </div>
            </div>
          </div>

          {/* The Team Section */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

