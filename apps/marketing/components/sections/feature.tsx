import * as React from 'react';
import { GridSection } from '~/components/fragments/grid-section';
import  Image from 'next/image';
import { APP_NAME } from '@workspace/common/app';

const feature = [ { 
        number: 1, heading: "Edit It As You Wish",
        image: "/assets/sample/feature-1.png", 
        Description: "With VideoMule, you are in full control of your video creation process. After uploading, you can refine scripts, adjust narration timing, or tweak voiceover styles to perfectly match your content. Whether you’re making tutorials, product demos, or business presentations, VideoMule ensures every detail looks and sounds exactly the way you want. This flexibility allows you to maintain your brand’s tone and create videos that connect with your audience effectively, saving you time while maintaining high-quality results."
    },
    { 
        number: 2, heading: "Choose From 100s Of Voices",
        image: "/assets/sample/Blue-Step-2.png", 
        Description: "VideoMule gives you access to a vast library of AI-generated voices across multiple languages, accents, and tones. From professional narrators to friendly conversational styles, you can choose the perfect match for your audience. Whether you want formal narration for corporate presentations or casual voices for tutorials, our diverse selection ensures your videos sound natural and engaging. This wide variety of voices helps you adapt content for global audiences, boosting your reach and enhancing viewer engagement."
    },
    { 
        number: 3, heading: "Export It Instantly", 
        image: "/assets/sample/Blue-Step-3.png",
        Description: "No more waiting hours for rendering or processing. VideoMule lets you export your videos instantly in high resolution, optimized for any platform—whether it’s YouTube, LinkedIn, social media, or internal training portals. Fast exporting ensures your content is ready to share without delays, keeping you productive and efficient. Perfect for creators, businesses, and educators who need professional videos quickly, VideoMule simplifies the entire workflow while delivering smooth, ready-to-publish results every time."
    },
    { 
        number: 4, heading: "Add Your Own Voice", 
        image: "/assets/sample/Blue-Step-4.png",
        Description: "Prefer a personal touch? VideoMule allows you to easily add your own recorded narration. Upload your voice track and sync it seamlessly with your video for an authentic, personalized feel. This feature is perfect for creators, trainers, and businesses who want their audience to hear their own voice while still enjoying VideoMule’s AI editing and syncing tools. Combining your unique narration with our advanced video processing ensures your content feels professional yet true to your style."
    },
]

export function VideomuleFeature() : React.JSX.Element {
    return (
        <GridSection>
            <div className='container bg-diagonal-lines'>
                <div className="relative flex flex-col gap-10 items-center sm:container bg-background py-20 lg:grid-cols-2 lg:border-x">
                    <div className='col-span-1 md:col-span-2 flex-col justify-center gap-2.5 max-w-xl items-center text-center'>
                        <h2 className="mb-2.5 mt-5 text-3xl font-semibold md:text-5xl">
                            Powerful AI Voiceover Video Tools
                        </h2>
                        <p className="mt-1 text-muted-foreground md:mt-6">
                            {APP_NAME} helps you transform screen recordings into professional-quality videos. Edit with ease, choose from 100s of voices, or add your own narration—then instantly export polished, shareable content.
                        </p>
                    </div>
                    <div className='flex gap-20 relative'>
                        <div className='md:sticky md:top-24 flex flex-col gap-5'>
                            {
                                feature.map ((feature) => (
                                    <h3 className='text-2xl font-semibold italic' key={feature.number}>{feature.heading}</h3>
                                ))
                            }
                        </div>

                        <div className='flex flex-col gap-32'>
                            {
                                feature.map ((feature) => (
                                    <div className='flex flex-col gap-3' key={feature.number}>
                                        <h2 className='text-3xl font-semibold' key={feature.number}>{feature.heading}</h2>
                                        <p className='text-xl text-gray-500'>{feature.Description}</p>
                                        <Image className='mt-3.5 rounded-2xl' src={feature.image} alt={feature.heading} width={1000} height={800}  />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </GridSection>
        
    )
}