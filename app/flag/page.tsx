'use client';

import Image from 'next/image';

export default function Flag() {
    return(
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow flex flex-col items-center text-center space-y-6 p-4 md:p-24 bg-primary text-white">
        <p className="text-2xl font-bold">{"flag{adalovelace}"}</p>
            {/* <p>Congratulations, you found the secret flag! Now scan the QR code on the table to fill out the interest form and type the flag 
                into the &apos;flag&apos; field on the form to be entered into the prize draw to win either a £50 M&S voucher or an Arduino.
            </p>
            <p> Why is this the flag? Ada Lovelace was a British mathematician and computer scientist, widely considered to have written the first ever computer program.
                Her work was pivotal to the field and means you get to be here, hopefully joining Leeds Computing Society, today!
            </p>
            <div className="bg-white rounded-slg shadow-lg p-2 w-80 h-80">
            <Image src="/images/lovelace-program.jpg" alt="A photo of equations written by Ada Lovelace as part of her first computer program design." className="w-full aspect-w-16 aspect-h-9 object-cover rounded-t-lg" height="154" width="220"/>
            <div className="p-4">
                <p className="text-black font-bold mb-2">Equations written by Ada Lovelace as part of her first computer program.</p>
            </div>
            </div> */}
        </main>
        </div>
    )
}