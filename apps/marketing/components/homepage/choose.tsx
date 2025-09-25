import * as React from 'react';

export default function Choose(): React.JSX.Element {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-bricolage text-4xl lg:text-5xl font-bold text-videomule-black mb-6">
            Why choose us?
          </h2>
          <p className="text-lg text-videomule-gray max-w-3xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Experienced Professionals */}
          <Card
            className="bg-gradient-to-br from-purple-100 to-purple-200 border-purple-200 p-8 text-center hover-scale transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:animate-pulse">
              <Users className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bricolage text-xl font-bold text-videomule-black mb-4">
              Experienced Professionals
            </h3>
            <p className="text-videomule-gray text-sm leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>

          {/* Satisfaction Guarantee */}
          <Card
            className="bg-gradient-to-br from-orange-100 to-orange-200 border-orange-200 p-8 text-center hover-scale transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:animate-pulse">
              <Star className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-bricolage text-xl font-bold text-videomule-black mb-4">
              Satisfaction Guarantee
            </h3>
            <p className="text-videomule-gray text-sm leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>

          {/* Affordable Prices */}
          <Card
            className="bg-gradient-to-br from-pink-100 to-pink-200 border-pink-200 p-8 text-center hover-scale transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:animate-pulse">
              <DollarSign className="w-8 h-8 text-pink-600" />
            </div>
            <h3 className="font-bricolage text-xl font-bold text-videomule-black mb-4">
              Affordable Prices
            </h3>
            <p className="text-videomule-gray text-sm leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>

          {/* Reliable & Trustworthy */}
          <Card
            className="bg-gradient-to-br from-green-100 to-green-200 border-green-200 p-8 text-center hover-scale transition-all duration-300 hover:shadow-lg animate-fade-in cursor-pointer"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:animate-pulse">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bricolage text-xl font-bold text-videomule-black mb-4">
              Reliable & Trustworthy
            </h3>
            <p className="text-videomule-gray text-sm leading-relaxed">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Card>
        </div>
      </div>
      {/* Section separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </section>
  );
}
