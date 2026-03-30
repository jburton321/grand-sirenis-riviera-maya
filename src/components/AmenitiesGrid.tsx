const amenities = [
  { image: 'home/image0.png', label: 'BEACHFRONT ACCESS' },
  { image: 'home/image2.png', label: 'TENNIS COURT' },
  { image: 'home/image4.png', label: 'OUTDOOR ADVENTURES' },
  { image: 'home/image6.png', label: 'HOT TUB OR SPA' },
  { image: 'home/image1.png', label: 'SWIMMING POOL - OUTDOOR' },
  { image: 'home/image3.png', label: 'FITNESS CENTER' },
  { image: 'home/image5.png', label: 'PREMIUM COCKTAILS' },
  { image: 'home/image7.png', label: 'ONSITE DINING' },
];

export function AmenitiesGrid() {
  return (
    <section className="pt-0 pb-10 sm:pb-12 md:pb-16 px-4 sm:px-6">
      <div className="max-w-content mx-auto text-center">
        <img
          className="h-10 sm:h-12 md:h-14 mx-auto mb-6 sm:mb-8 transition-transform duration-300 hover:scale-105"
          src="home/image-30.png"
          alt="Hyatt Zilara"
        />

        <h2 className="text-slate-800 text-xl sm:text-2xl md:text-3xl font-black uppercase mb-3 sm:mb-4 px-2">
          Explore THE AMENITIES AT<br />
          Hyatt Zilara Riviera Maya
        </h2>

        <p className="text-gray-800 text-base sm:text-lg max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed px-2">
          Relax on pristine beaches, enjoy delicious cuisine, and create unforgettable memories together. With a range of amenities designed for couples, you'll find the ideal setting for your next adventure.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer"
            >
              <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src={amenity.image}
                  alt={amenity.label}
                  className="w-full h-28 sm:h-36 md:h-44 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 border-3 border-white/40 rounded-lg sm:rounded-xl" />
                </div>
              </div>
              <span className="text-black text-xs sm:text-sm font-medium uppercase text-center leading-tight transition-colors duration-300 group-hover:text-primary">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
