import { Star } from 'lucide-react';
import { Button } from './Button';
import { Gallery } from './Gallery';
import { useRouter } from '../context/RouterContext';

interface Review {
  name: string;
  date: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: 'Maddie W',
    date: 'March 2025',
    rating: 5,
    text: "It was amazing!! We absolutely loved Agustin, Alejandra, and Nicole from Legends bar!! They were exceptional and served us with smiles and friendliness every night! We hated to leave..",
    avatar: 'home/_67-d-0924777-f-9-fd-4-ea-51-ba-542-487-b-67-ace-3-ea-87851-c-0-d-6-f-391302-f-998-ava-1-webp0.png',
  },
  {
    name: 'Excursion26381924644',
    date: 'January 25',
    rating: 5,
    text: "Highly recommend this place. Great food all around, the beach is amazing, the staff is unbelievable. The resort is big but not overwhelming. The entertainment staff by itself is worth it. Sandy and Fermin are true legends. A trip I'll never forget.",
    avatar: 'home/_67-d-0924777-f-9-fd-4-ea-51-ba-4-be-2853433-cd-627-e-5-efd-26-b-1-c-3-fada-1-eaae-ava-5-webp0.png',
  },
  {
    name: 'JeMaLu2018',
    date: 'June 2025',
    rating: 5,
    text: "Hyatt Zilara is the best hotel we have visited in Cancun, Playa del Carmen, Riviera Maya. Above and beyond service, excellent resort location, beautiful resort grounds, fantastic beach, top notch food and premium beverages. 24 hour room service. Minutes to 5th Avenue Playa del Carmen shopping and beach.",
    avatar: 'home/_67-d-0924777-f-9-fd-4-ea-51-ba-4-de-2853575-a-86629-f-1-c-31-f-4-c-2-c-210419754-ava-4-webp0.png',
  },
];

const galleryImages = [
  'home/resort-photo-11.png',
  'home/resort-photo-21.png',
  'home/resort-photo-31.png',
  'home/resort-photo-41.png',
  'home/resort-photo-51.png',
  'home/link-dialog-open-lightbox13.png',
  'home/link-dialog-open-lightbox14.png',
  'home/link-dialog-open-lightbox15.png',
];

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <article
      className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-gray-50 group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start gap-3 mb-4 md:mb-6">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-9 h-9 md:w-10 md:h-10 rounded-full object-cover shrink-0 ring-2 ring-transparent group-hover:ring-accent transition-all duration-300"
          loading="lazy"
        />
        <div className="min-w-0">
          <h4 className="font-bold text-fluid-sm text-gray-900 truncate">{review.name}</h4>
          <p className="text-gray-500 text-fluid-xs">{review.date}</p>
        </div>
      </div>

      <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-4">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star
            key={i}
            className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent transition-transform duration-300 group-hover:scale-110"
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </div>

      <p className="text-gray-800 text-fluid-xs md:text-fluid-sm leading-relaxed flex-1">
        {review.text}
      </p>

      <div className="mt-4 md:mt-6">
        <img
          src="home/_67-d-0924777-f-9-fd-4-ea-51-ba-47-f-tripadvisor-svg0.svg"
          alt="TripAdvisor"
          className="h-4 md:h-5 w-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </article>
  );
}

export function Testimonials() {
  const { navigateTo } = useRouter();

  return (
    <section className="bg-white py-fluid-8">
      <div className="max-w-content mx-auto px-4 md:px-6">
        <h2 className="text-gray-800 text-fluid-2xl md:text-fluid-3xl font-bold text-center uppercase mb-fluid-6">
          Guest Reviews
        </h2>
      </div>

      <Gallery images={galleryImages} className="mb-fluid-6" />

      <div className="max-w-content mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} index={index} />
          ))}
        </div>

        <div className="mt-fluid-8">
          <Button className="w-full" onClick={() => navigateTo('thank-you')}>Reserve Now</Button>
        </div>
      </div>
    </section>
  );
}
