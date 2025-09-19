import * as React from 'react';
//import Link from 'next/link';
import { GridSection } from '~/components/fragments/grid-section';
//import { APP_NAME } from '@workspace/common/app';
//import { steps } from 'motion/react';
import  Image from 'next/image';

export function HowToUSe() : React.JSX.Element {
    return (
        <GridSection>
            <div className='container bg-diagonal-lines'>
                <div className="relative grid gap-10 items-center sm:container bg-background py-20 lg:grid-cols-2 lg:border-x">
                    <div className='col-span-1 md:col-span-2 flex-col justify-center gap-2.5 max-w-xl items-center'>
                        <h2 className="mb-2.5 mt-5 text-3xl font-semibold md:text-5xl">
                            How it Works?
                        </h2>
                        <p className="mt-1 text-muted-foreground md:mt-6">
                            Harness the power of AI to transform your business and
                            automate almost everything with workflows.
                        </p>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="mt-6 list-none flex-wrap items-center gap-6 space-y-3 md:flex md:space-y-0">
                            {[
                                { number: 1, steps: "Just add any screen recording video...", 
                                Description: "Upload your screen recording or video in seconds. VideoMule supports multiple formats, making it easy to start transforming raw footage into engaging, professional-quality narrated content."},
                                { number: 2, steps: "Our AI instantly writes the script", 
                                Description: "VideoMule analyzes your video content and generates a natural, concise script. No manual writing needed—AI creates accurate narration tailored to your tutorial, demo, or presentation."},
                                { number: 3, steps: "Generates the voiceover", 
                                Description: "Choose from hundreds of realistic AI voices across different accents and languages. VideoMule instantly creates lifelike narration, giving your video a polished, professional voice."},
                                { number: 4, steps: "Sync it to the video", 
                                Description: "Our AI aligns voiceover with your video perfectly, ensuring timing, pacing, and delivery match your visuals seamlessly for a smooth, engaging viewer experience."},
                                { number: 5, steps: "Export the video", 
                                Description: "Download your finished video instantly in high quality. VideoMule makes it easy to share on YouTube, social media, websites, or business presentations without delays."},
                            ].map((step) => (
                                <div
                                key={step.number}
                                className="flex flex-col items-start gap-2 mt-6"
                                >
                                    <h3 className='text-2xl font-semibold md:text-3xl'>{step.steps}</h3>
                                    <p className="text-muted-foreground md:mt-2">{step.Description}</p>
                                    <div className='w-full mt-5'>
                                        <div className="bg-blue-200 w-full h-0.5">
                                            <div className="bg-blue-950 h-0">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="order-2 md:order-1 self-start md:sticky md:top-24">
                        <div className='bg-black-400 p-8 pb-0 bg-slate-300 rounded-2xl backdrop-blur-3xl'>
                            <Image src="/assets/sample/sample.webp" width={1240} height={840} alt="How to use"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </GridSection>
        
    )
}