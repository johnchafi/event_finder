import EventForm from '@/components/shared/EventForm'
import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

const CreateEvent = () => {
    //const { sessionClaims } = getAuth();
    //const userId = sessionClaims?.userId as string; 
    const { sessionClaims } = auth();
    const userIdObject = sessionClaims?.userId as any; 
    const userId = userIdObject?.userId as string;
 if(userId){
    return (
        <>
        <section className='bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10'>
            <h3 className='wrapper h3-bold text-center'>
                    Create <span className='text-primary-500'>Event</span>
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