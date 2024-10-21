import React from "react";
import target from "../images/target.png";
import strategy from "../images/strategy.png";
import transparency from "../images/transparency.png";
import shoppingonline from "../images/shoppingonline.png";
import idea from "../images/idea.png";
import leader from "../images/leader.png";
import meetingImage from "../images/meeting.jpg";
import socialmedia from "../images/socialmedia.png";
import seo from "../images/SEO.png";
import graphic from "../images/GRAPHIC.png";
import ppc from "../images/PPC.png";
import email from "../images/EMAIL.png";
import web from "../images/WEB.png";
import heroimage from "../images/heroimage.png";
function Home() {
  return (
    <div>
      <div className="bg-[#00032d] text-white min-h-screen flex flex-col items-center">
        {/* Hero Section */}
       <div className="relative overflow-hidden">
  {/* Snowflakes effect */}
  <div className="absolute inset-0 pointer-events-none snowfall">
    {/* Increased number of snowflakes */}
    {Array.from({ length: 50 }).map((_, index) => (
      <div key={index} className={`snowflake snowflake-${index}`} />
    ))}
  </div>

  {/* Content section */}
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-8 md:p-8 relative z-10">
    {/* Left Section: Text content */}
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 sm:mb-6">
        Boost Your Online Presence
      </h1>

      {/* Input Box and Button */}
      <div className="flex items-center bg-white rounded-full p-2 shadow-lg w-full max-w-lg mx-auto md:mx-0">
        <input
          type="text"
          placeholder="Submit Your Business Name And Get Started"
          className="flex-1 p-2 outline-none text-gray-700 rounded-l-full"
        />
        <button className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-red-600 transition">
          Start Now
        </button>
      </div>
      <br />
      <p className="text-base sm:text-lg mb-4 sm:mb-6">
        Helping Brands Achieve Growth with Innovative Strategies and
        Targeted Solutions
      </p>
    </div>

    {/* Right Section: Image Placeholder */}
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src={heroimage}
        alt="Phone with social media icons"
        className="w-64 sm:w-80 md:w-96"
      />
    </div>
  </div>

  {/* Wavy Effect */}
  <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="10 10 1440 300"
      className="relative -bottom-1"
    >
      <path
        fill="#ff5500"
        fillOpacity="1"
        d="M0,160L34.3,154.7C68.6,149,137,139,206,112C274.3,85,343,43,411,26.7C480,11,549,21,617,42.7C685.7,64,754,96,823,112C891.4,128,960,128,1029,122.7C1097.1,117,1166,107,1234,96C1302.9,85,1371,75,1406,69.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
      />
    </svg>
  </div>

  {/* Inline CSS for snowfall effect */}
  <style>{`
    .snowfall {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: transparent;
    }

    .snowflake {
      position: absolute;
      top: -10px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      opacity: 0.8;
      animation: snowfall 10s linear infinite;
      background: white;
    }

    /* Randomize snowflake size, color, and position */
    ${Array.from({ length: 50 })
      .map(
        (_, index) => `
        .snowflake-${index} {
          left: ${Math.random() * 100}%;
          width: ${Math.random() * 10 + 5}px;
          height: ${Math.random() * 10 + 5}px;
          background: ${Math.random() > 0.5 ? "lightblue" : "white"};
          animation-duration: ${Math.random() * 5 + 7}s;
          animation-delay: ${Math.random() * 5}s;
        }
      `
      )
      .join("")}

    @keyframes snowfall {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(100vh);
      }
    }
  `}</style>
</div>



        {/* Services Section */}
        <div className="bg-white text-gray-900 w-full py-16">
          <div className="container mx-auto px-4">
            {/* Section Title */}
            <h2 className="text-6xl font-bold text-center mb-12">
              <span className="text-red-500">Our</span>{" "}
              <span className="text-blue-900">Services</span>
            </h2>

            {/* Service Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Social Media Management */}
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00032d] p-4 rounded-full">
                    <img
                      src={socialmedia}
                      alt="Service Icon"
                      className="w-10"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Social Media Management
                </h3>
                <p className="text-center">
                  We manage your social media platforms, creating engaging
                  content that boosts brand awareness and drives customer
                  interaction.
                </p>
              </div>

              {/* SEO & SEM */}
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00032d] p-4 rounded-full">
                    <img src={seo} alt="Service Icon" className="w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  SEO & SEM
                </h3>
                <p className="text-center">
                  Boost your search engine visibility with our expert SEO
                  strategies and targeted ad campaigns that attract the right
                  audience.
                </p>
              </div>

              {/* Graphic Design */}
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00032d] p-4 rounded-full">
                    <img src={graphic} alt="Service Icon" className="w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Graphic Design
                </h3>
                <p className="text-center">
                  Our design team crafts eye-catching visuals that communicate
                  your brand’s identity effectively across all digital
                  platforms.
                </p>
              </div>

              {/* PPC Campaigns */}
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00032d] p-4 rounded-full">
                    <img src={ppc} alt="Service Icon" className="w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  PPC Campaigns
                </h3>
                <p className="text-center">
                  Reach the right customers at the right time with our
                  data-driven, result-oriented pay-per-click campaigns.
                </p>
              </div>

              {/* Email Marketing */}
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00032d] p-4 rounded-full">
                    <img src={email} alt="Service Icon" className="w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Email Marketing
                </h3>
                <p className="text-center">
                  We build targeted email campaigns that nurture leads and turn
                  them into loyal customers.
                </p>
              </div>

              {/* Web Development */}
              <div className="bg-gray-100 rounded-lg p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <div className="bg-[#00032d] p-4 rounded-full">
                    <img src={web} alt="Service Icon" className="w-10" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Web Development
                </h3>
                <p className="text-center">
                  Our team develops responsive, conversion-focused websites that
                  reflect your brand and engage visitors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-[#00032d] text-white w-full py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>

            {/* Two Cards in About Us */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="border border-white rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-blue-500">
                  WHO WE ARE
                </h3>
                <p className="text-lg">
                  NM Creative Hub is a full-service digital marketing agency
                  passionate about helping businesses succeed in the
                  ever-evolving online world. With a team of dedicated
                  professionals, we bring creativity, strategy, and experience
                  to deliver results-driven campaigns that resonate with your
                  target audience.
                </p>
              </div>

              {/* Card 2 */}

              <div className="border border-white rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-semibold mb-4 text-blue-500">
                  Our Mission
                </h3>
                <p className="text-lg">
                  We aim to transform your digital presence and drive growth by
                  combining creativity with the latest marketing techniques. Our
                  mission is to craft campaigns that not only meet but exceed
                  your expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white text-gray-900 w-full py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-12">
              Why Choose NM Creative Hub
            </h2>
            <h3 className="text-center text-xl text-black mb-8">
              As Your Digital Marketing Agency In Haryana
            </h3>

            {/* Choose Us Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Audience-Focused Marketing */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <img
                    src={target}
                    alt="Audience-Focused Marketing Icon"
                    className="w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Audience-Focused Marketing
                </h3>
                <p className="text-center">
                  At NM Creative Hub, our marketing campaigns are designed to go
                  beyond the surface. We take time to understand your target
                  audience's needs, preferences, and behaviors to deliver
                  messages that truly resonate. Every campaign is crafted with
                  precision to ensure your brand makes a lasting impact.
                </p>
              </div>

              {/* Data-Driven Strategy */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <img
                    src={strategy}
                    alt="Data-Driven Strategy Icon"
                    className="w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Data-Driven Strategy
                </h3>
                <p className="text-center">
                  We believe in the power of data to shape successful marketing
                  strategies. By leveraging insights and analytics, we ensure
                  your campaigns are not only creative but also effective. Our
                  data-driven approach allows US to refine every step of your
                  marketing journey for optimal results.
                </p>
              </div>

              {/* ROI-Driven Approach */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <img
                    src={transparency}
                    alt="ROI-Driven Approach Icon"
                    className="w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Full Transparency
                </h3>
                <p className="text-center">
                  We value transparency in every aspect of our work. With NM
                  Creative Hub, you'll always know exactly how your campaigns
                  are performing. Our detailed reports give you clear insights
                  into what's working, what needs adjusting, and the path
                  forward. No surprises-just results you can trust.
                </p>
              </div>

              {/* Experienced Team */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <img
                    src={shoppingonline}
                    alt="Experienced Team Icon"
                    className="w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Holistic Marketing
                </h3>
                <p className="text-center">
                  We believe in a holistic approach to marketing. integrating
                  your brand across all digital platforms. From social media to
                  website development, we'll ensure your brand is cohesive and
                  engaging across every touchpoint. The goal? A seamless digital
                  presence that drives engagement and growth.
                </p>
              </div>

              {/* Tailored Solutions */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <img
                    src={idea}
                    alt="Tailored Solutions Icon"
                    className="w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Think Outside the Box
                </h3>
                <p className="text-center">
                  At NM Creative Hub, we never settle for the ordinary. Our team
                  is dedicated to exploring new, creative approaches to help
                  your brand stay ahead of the competition. Whether through
                  unique ad campaigns or fresh content ideas, we're always
                  looking for ways to make your brand stand out.
                </p>
              </div>

              {/* Ongoing Support */}
              <div className="bg-gray-100 rounded-3xl p-6 shadow-md">
                <div className="flex justify-center mb-4">
                  <img
                    src={leader}
                    alt="Ongoing Support Icon"
                    className="w-12"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  Expert Team of Digital Marketers
                </h3>
                <p className="text-center">
                  Our experienced team of digital marketing professionals brings
                  innovation, expertise, and passion to every project. We focus
                  on helping your business grow by crafting strategies that not
                  only reach your audience but leave a lasting impression. No
                  challenge is too big or too small-your success is our goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4 md:px-8">
          {/* Left Text Section */}
          <div className="md:w-1/2 mb-8 md:mb-0 flex flex-col">
            <h2 className="text-4xl font-bold text-[#00032d] mb-0">
              Flexible Solutions to
            </h2>
            <h2 className="text-5xl font-bold text-[#00032d]">
              Fit Your Business Needs
            </h2>
            <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition mt-6 self-center w-36">
              Get Started
            </button>
          </div>

          {/* Right Package Section */}
          <div className="md:w-1/ mr-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 relative">
              {/* Red border decoration */}
              <div className="absolute top-0 left-0 w-3 h-full bg-red-500 rounded-l-2xl"></div>

              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                STARTER PACKAGE
              </h3>
              <p className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-6">
                ₹10,000/-
              </p>

              <p className="text-center font-semibold text-gray-700 mb-6">
                INCLUDES
              </p>

              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <span className="text-red-500 font-bold text-xl mr-2">✔</span>{" "}
                  Social Media (FB & Insta) Management
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 font-bold text-xl mr-2">✔</span>{" "}
                  20-22 Graphic Designs
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 font-bold text-xl mr-2">✔</span>{" "}
                  3-4 Motion Videos
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 font-bold text-xl mr-2">✔</span>{" "}
                  One Meta Ad Campaign
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 font-bold text-xl mr-2">✔</span>{" "}
                  Festivals Designs
                </li>
                <li className="flex items-center">
                  <span className="text-red-500 font-bold text-xl mr-2">✔</span>{" "}
                  Rest over a call
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-64 md:h-80 lg:h-96 flex items-center justify-center opacity-60"
        style={{ backgroundImage: `url(${meetingImage})` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
        <div className="relative text-center text-white px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
            Get Free Consultation
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6">
            Get a FREE consultation with our expert team and{" "}
            <br className="hidden sm:block" /> get solutions as per your
            requirements
          </p>
          <a
            href="https://wa.me/1234567890" // You can replace this with your WhatsApp link
            className="bg-green-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 rounded-full inline-flex items-center hover:bg-green-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-4 h-4 sm:w-6 sm:h-6 mr-2"
            />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
