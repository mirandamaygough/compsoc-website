import React from 'react';
import Image from 'next/image';

import { LuMail } from 'react-icons/lu';

export type CommitteeMember = {
    name: string;
    role: string;
    roleDescription: string;
    email: string;
    photo: string;
    photoHeight: number;
    photoWidth: number;
};

interface CommitteeMemberCardProps extends CommitteeMember {}

export const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({
    name,
    role,
    roleDescription,
    email,
    photo,
    photoHeight,
    photoWidth,
}) => {
    return (
        <div className="bg-white rounded-slg shadow-lg p-4">
            <Image src={photo} alt={name} className="w-full aspect-w-16 aspect-h-9 object-cover rounded-t-lg" height={photoHeight} width={photoWidth} />
            <div className="p-4">
                <h2 className="text-black text-xl font-bold mb-2">{name}</h2>
                <p className="text-black font-bold mb-2">{role}</p>
                <p className="text-lg text-gray-700 mb-2 font-barlow">{roleDescription}</p>
                <p className="text-lg text-gray-500 mb-2 font-barlow">
                    <LuMail className="inline mr-2" size={20} />{email}
                </p>
            </div>
        </div>
    );
};