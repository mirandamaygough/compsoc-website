import React from 'react';

import { LuMail } from 'react-icons/lu';

export type CommitteeMember = {
    name: string;
    role: string;
    roleDescription: string;
    email: string;
    photo: string;
};

interface CommitteeMemberCardProps extends CommitteeMember {}

export const CommitteeMemberCard: React.FC<CommitteeMemberCardProps> = ({
    name,
    role,
    roleDescription,
    email,
    photo,
}) => {
    return (
        <div className="bg-white rounded-slg shadow-lg p-4">
            <img src={photo} alt={name} className="w-full aspect-w-16 aspect-h-9 object-cover rounded-t-lg" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-black font-bold mb-2">{role}</p>
                <p className="text-gray-700 mb-2">{roleDescription}</p>
                <p className="text-gray-500 mb-2">
                    <LuMail className="inline mr-2" size={20} />{email}
                </p>
            </div>
        </div>
    );
};