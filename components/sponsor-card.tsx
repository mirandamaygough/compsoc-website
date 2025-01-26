import React from 'react';
import Image from 'next/image';

import { LuMail } from 'react-icons/lu';

export type Sponsor = {
    type: string;
    name: string
    website: string;
    photo: string;
    photoHeight: number;
    photoWidth: number;
    description: string;
};

interface SponsorCardProps extends Sponsor {}

export const SponsorCard: React.FC<SponsorCardProps> = ({
    type,
    name,
    website,
    photo,
    photoHeight,
    photoWidth,
    description,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col sponsor-card">
          {type === "sunflower" && (
            <div className="text-black p-2 rounded-lg flex items-center justify-center mb-4">
              <Image src="/images/leedshack/sunflower.png" alt="Sunflower" className="object-cover rounded-lg sponsorship-tier-image" height={67} width={67} />
              <h2 className="text-2xl font-bold ml-2">Sunflower sponsor</h2>
            </div>
          )}
          {type === "sprout" && (
            <div className="text-black p-2 rounded-lg flex items-center justify-center mb-4">
              <Image src="/images/leedshack/sprout.png" alt="Sprout" className="object-cover rounded-lg sponsorship-tier-image" height={130} width={74} />
              <h2 className="text-2xl font-bold ml-2">Sprout sponsor</h2>
            </div>
          )}
          {type === "seed" && (
            <div className="text-black p-2 rounded-lg flex items-center justify-center mb-4">
              <Image src="/images/leedshack/seed.png" alt="Seed" className="object-cover rounded-lg sponsorship-tier-image" height={128} width={92} />
              <h2 className="text-2xl font-bold ml-2">Seed sponsor</h2>
            </div>
          )}
          <a href={website} className="flex-shrink-0 w-full flex-center justify-center mb-4 image-container">
            <Image src={photo} alt={name} className="object-contain rounded-lg" height={photoHeight} width={photoWidth}/>
          </a>
          <div className="flex flex-col justify-center w-full description">
            <p className="text-lg mb-2 text-black font-barlow">{description}</p>
          </div>
        </div>
      );
    };