"use client"

import React from 'react';
import { projectData } from '@/utils/projectData';
import Carousel from '@/utils/Carousel';

const Page = () => {
    return (
        <div className='flex flex-col lg:flex-row text-white min-h-screen bg-slate-900'>
            <div className="lg:w-1/2 w-full p-6 lg:p-12 flex justify-center text-lg">
                {
                    projectData.map((item: any) => (
                        <p key={item.id}>{item.text}</p>
                    ))
                }
            </div>
            <div className="lg:w-1/2 w-full flex justify-center p-6 lg:p-12">
                <Carousel projectData={projectData} />
            </div>
        </div>
    );
};

export default Page;
