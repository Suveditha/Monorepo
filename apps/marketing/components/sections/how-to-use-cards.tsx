import * as React from 'react'; 
//import Link from 'next/link'; 
import { GridSection } from '~/components/fragments/grid-section'; 
import { APP_NAME } from '@workspace/common/app'; 
import Image from 'next/image'; 
export function HowToUSeCard() : React.JSX.Element { 
  return ( 
    <GridSection> 
      <div className='container bg-diagonal-lines'> 
        <div className="relative flex-col gap-10 items-center sm:container bg-background py-20 lg:flex lg:border-x"> 
          <div className='flex-col justify-center text-center gap-2.5 max-w-xl items-center'> 
            <h2 className="mb-2.5 mt-5 text-3xl font-semibold md:text-5xl"> How it Works? </h2> 
            <p className="mt-1 text-muted-foreground md:mt-6"> Harness the power of AI to transform your business and automate almost everything with workflows. </p> 
          </div> 
          <div className='w-full flex flex-wrap justify-center gap-5 mt-8'> 
            {[ 
              { 
                number: 1, steps: "Upload Your Screen Recording Video", 
                Description: "Upload any screen recording or video file in seconds. VideoMule supports multiple formats, making it easy to start creating polished, professional content instantly." 
              }, 
              {
                number: 2, steps: "AI Writes and Generates Voiceover", 
                Description: "VideoMule AI analyzes your video, writes a natural script, and generates lifelike voiceovers. Choose from multiple languages, voices, and accents for a professional narration experience." 
              }, 
              {
                number: 3, steps: "Syncs Voiceover with Video", 
                Description: "Our AI automatically aligns the script and voiceover with your video visuals, ensuring perfect timing, smooth pacing, and professional delivery for engaging viewer experiences." 
              }, 
            ].map((step) => 
              ( 
                <div key={step.number} className="md:w-[360px]:max-w-[360px]:flex-col:gap-3 flex flex-row items-start gap-10 mt-6 flex-wrap"> 
                  <div className='h-auto bg-black-400 p-4 pb-0 bg-slate-300 rounded-2xl backdrop-blur-3xl md:w-[360px] w-[50%]'> 
                    <Image src="/assets/sample/sample.webp" width={360} height={240} alt="How to use"></Image> 
                  </div> 
                  <div className='flex flex-col items-start gap-3 md:w-[360px] min-w-2xs max-w-fit'> 
                    <p className='mt-5 w-auto text-xs font-medium md:text-sm py-2 px-4 rounded-4xl bg-slate-200'>Step {step.number}</p> 
                    <h3 className='text-2xl font-semibold md:text-3xl'>{step.steps}</h3> 
                    <p className="text-muted-foreground md:mt-2">{step.Description}</p> 
                  </div> 
                </div> 
              ))} 
          </div> 
        </div> 
      </div>
    </GridSection> ) }