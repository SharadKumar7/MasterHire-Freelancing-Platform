import React from 'react';
import { Dot } from 'lucide-react';
import { useNavigate} from 'react-router-dom'; 
import meetpng from '../../assets/png/meeting.png';
import footerpng from '../../assets/png/footer.png';

const MasterHireAbout = () => {
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/');
    };

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="absolute top-0 left-0 w-full p-4 md:p-8">
        <h1 className="text-3xl font-jaro text-gray-800">MasterHire</h1>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">

        <section className="mb-20">
          
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-[70%]">
            <h2 className="text-3xl font-bold text-teal-300 mb-8  flex items-center justify-center ">About MasterHire</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                MasterHire is a professional freelancing platform built to connect businesses with skilled, reliable freelancers—without unnecessary noise, confusion, or wasted time. We believe hiring should be simple, transparent, and outcome-driven. Clients should find talent they can trust. Freelancers should get access to meaningful work that respects their skills and time.
              </p>
            </div>
            <div className="md:w-[30%]">
              {/* This image mimics the one in the design. Use an actual img tag in a real project. */}
              <div className="bg-gray-200  rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                <img src={meetpng} alt="Meeting" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Who MasterHire is for (Teal Cards) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-300 mb-10 text-center">Who MasterHire is for</h2>
          <div className="flex flex-col md:flex-row gap-6 ">
            
            {/* Businesses Card */}
            <div className="flex-1 bg-teal-200 p-10 pt-20 rounded-xl shadow-md text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500 rounded-bl-full opacity-50"></div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Businesses</h3>
              <p className="text-lg text-gray-800 relative z-10">
                Organizations looking for dependable freelancers who value deadlines, responsibility, and delivery.
              </p>
            </div>

            {/* Freelancers Card */}
            <div className="flex-1 bg-teal-200 p-10 pt-20 rounded-xl shadow-md text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 w-24 h-24  bg-teal-500 rounded-bl-full opacity-50"></div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Freelancers</h3>
              <p className="text-lg text-gray-800 relative z-10">
                Skilled professionals seeking serious clients, meaningful projects, and long-term growth.
              </p>
            </div>

          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-teal-300 mb-10 text-center">Why MasterHire Exists</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="md:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed">
                The freelancing landscape today is crowded and chaotic. Many platforms prioritize volume over quality, resulting in mismatched expectations and diluted outcomes. MasterHire was created to restore clarity and professionalism to the hiring process.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
            <div >
              <p className="font-semibold text-gray-800 mb-4">We focus on:</p>
              <ul className="space-y-3">
                {['Clear requirements', 'Verified skills', 'Fair opportunities', 'Measurable results'].map(item => (
                  <li key={item} className="flex items-center text-gray-600  p-2 h-8  border-l-4 border-t-4 border-l-teal-300 border-t-teal-300">
                    <Dot className="w-8 h-8 text-gray-600  flex-shrink-0" />
                    {item}
                  </li>
                ))} 
              </ul> 
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Vision (Footer section with image) */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-teal-300 flex items-center justify-center mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To build a freelancing platform where trust, skill, and professionalism define success. MasterHire is designed to be a place where work is respected and results speak louder than promises.
              </p>
            </div>
            <div className="md:w-1/2">
               {/* This image mimics the one in the design. Use an actual img tag in a real project. */}
              <div className="bg-gray-200 h-64 rounded-lg shadow-lg flex items-center justify-center overflow-hidden">
                 <img src={footerpng} alt="Celebration" className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-8 rounded-lg shadow-inner">
          <p className="text-lg text-gray-700 font-semibold mb-4 md:mb-0">Begin your freelancing journey with MasterHire.</p>
          <button onClick={handleNext} className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-150 ease-in-out w-full md:w-auto">
            Get Started
          </button>
        </div>

      </main>
    </div>
  );
};

export default MasterHireAbout;
