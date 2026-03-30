import { ReactNode } from 'react';

interface InteriorHeroProps {
  backgroundImage: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function InteriorHero({ backgroundImage, children, footer }: InteriorHeroProps) {
  return (
    <>
      <img
        src={backgroundImage}
        alt=""
        className="w-full aspect-[16/9] object-cover lg:hidden"
      />

      <section
        className="relative lg:py-16 xl:py-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent hidden lg:block" />

        <div className="relative lg:max-w-content lg:mx-auto lg:px-6">
          <div className="bg-white/[0.76] backdrop-blur-xl overflow-hidden shadow-xl border-y border-white/50 lg:border lg:rounded-[32px]">
            <div className="p-6 sm:p-8 md:p-12">
              {children}
            </div>
            {footer}
          </div>
        </div>
      </section>
    </>
  );
}
