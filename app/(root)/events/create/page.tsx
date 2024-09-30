import EventForm from '@/components/shared/EventForm'
import { auth, currentUser } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'
import React from 'react'

const CreateEvent = (req: NextApiRequest, res: NextApiResponse) => {
    //const { sessionClaims } = getAuth();
    //const userId = sessionClaims?.userId as string; 
    const { sessionClaims } = auth();
    const userIdObject = sessionClaims?.userId as any; 
    const userId = userIdObject?.userId as string;
 if(userId){
    return (
        <>
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <h3 className='wrapper h3-bold md:text-left text-center'>
                    Create event 
            </h3>
            <div className='wrapper my-8'>
                <EventForm userId={userId} type = "Create" />
    
            </div>
        </section>
        </>
      )
 }
 
}

export default CreateEvent