'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input"
import { EventFormSchema } from "@/lib/validator"
import * as z from "zod"
import { eventDefaultValues } from "@/constants"
import { DropDown } from "./DropDown"
import { Textarea } from "../ui/textarea"
import { FileUploader } from "./FileUploader"
import { useEffect, useMemo, useState, useRef } from "react"
import Image from "next/image"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox"
import { useUploadThing } from "@/lib/uploadthings"
import { createEvent, updateEvent } from "@/lib/actions/event.actions"
import { useRouter } from "next/navigation"
import { IEvent } from "@/lib/database/models/event.model"
//import { Edit } from "lucide-react"
import { Editor } from "../ui/editor"
//import EditorTry from "@/components/ui/editorTry"
import dynamic from "next/dynamic";
import { Card } from "../ui/card"
import { Calendar,DollarSign, Link, MapPin} from "lucide-react"
import MyMap from "../ui/map"
import PlacesAutocomplete from "../ui/autocomplete"


//import { useLoadScript } from "@react-google-maps/api";

 
type EventFormProps = {
    userId : string
    type : "Create" | "Update"
    event?: IEvent,
    eventId?: string

}

//const EditorTry = dynamic(() => import("@/components/ui/editorTry"), { ssr: false });
// const Map =  dynamic(() => import("@/components/ui/map"),
//   { 
//     ssr: false
//   }
// )

const  EventForm = ({userId, type, event, eventId }: EventFormProps) => {

    const [files, setFiles] = useState<File[]>([]);
    const [description, setDescription] = useState(event && type === 'Update' ? event.description ?? "" : "");
    const [location, setLocation] = useState(event && type === 'Update' ? event.location ?? "" : "");
  
    const initialValues = event && type === 'Update' ? {
        ...event,
        startDateTime: new Date(event.startDateTime),
        endDateTime: new Date(event.endDateTime),
        categoryId: event?.category._id,
    } :eventDefaultValues;
    const router = useRouter();
    const { startUpload } = useUploadThing('imageUploader')
    const form = useForm<z.infer<typeof EventFormSchema>>({
        resolver: zodResolver(EventFormSchema),
        defaultValues: initialValues,
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof EventFormSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        let uploadedImageUrl = values.imageUrl;
        if(files.length > 0){
            const uploadedImages = await startUpload(files);
            if(!uploadedImages){
                return
            }
            uploadedImageUrl = uploadedImages[0].url;

        }
        if(type === 'Create'){
            try{
                const newEvent = await createEvent({
                    event: {... values, imageUrl: uploadedImageUrl, description, location},
                    userId : userId,
                    path:'profile',
                })
                if(newEvent){
                    form.reset();
                    router.push(`/events/${newEvent._id}`)
                }

            }catch(error){
                console.log("Error occurred");

            }
        }
        if(type === 'Update'){
            if(!eventId){
                router.back()
                return;
            }
            try{
                const updatedEvent = await updateEvent({
                    event: {... values, imageUrl: uploadedImageUrl, _id: eventId, description, location},
                    userId : userId,
                    path:`/events/${eventId}`,
                })
                if(updatedEvent){
                    form.reset();
                    router.push(`/events/${updatedEvent._id}`)
                }

            }catch(error){
                console.log("Error occurred");

            }
        }

      }

  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 md:wrapper">
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
            <FormItem className="w-full">
                <FormControl>
                <Input placeholder="Event title" {...field} className="p-regular-16 outline-offset-0 focus:border focus:border-primary-800 focus-visible:ring-0 focus-visible:ring-offset-0"/>
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
           />
           <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
            <FormItem className="w-full text-muted-foreground">
                <FormControl >
                <DropDown  onchangeHandler={field.onChange} value={field.value} />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
           />
        </div>

        <div className="flex flex-col md:flex-row  gap-5 w-full">

         <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
            <FormItem className="md:w-2/4 w-full">
                <FormControl className="h-72">
               <FileUploader onFieldChange={field.onChange}
                imageUrl={field.value}
                setFiles={setFiles}
               />
                </FormControl>
                <FormMessage />
          </FormItem>
            )}
           />

          <div className="w-full">
            <FormField 
                control={form.control}
                name="description"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl className="h-72">
                    <Textarea placeholder="Description" {...field} className="textarea rounded-2xl"/>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          </div>
                    {/* <div className="w-full flex flex-col gap-6">
                        <p>Description</p>
                        <Card className="bg-zinc-800 border-zinc-700">
                        <Editor editorContent={description} onChange={setDescription} editable={true} hideToolBar={false}/>
                      </Card>
                    </div> */}
       
        </div>
   
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="startDateTime"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden  px-4 py-2">
                      <div className="h-8 w-8 flex justify-center items-center rounded-md ">
                        <Calendar className="h-6 w-6" />
                        
                      </div>
                      <p className="ml-3 whitespace-nowrap text-muted-foreground">Start Date</p>
                        <DatePicker  
                        selected={field.value}
                        onChange={(date: Date | null) => field.onChange(date)} 
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker bg-background" /> 
                
                    </div>
                    
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
              <FormField
                control={form.control}
                name="endDateTime"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden  px-4 py-2">
                        <div className="h-8 w-8 flex justify-center items-center rounded-md ">
                          <Calendar className="h-6 w-6" />
                          
                        </div>
                        <p className="ml-3 whitespace-nowrap text-muted-foreground ">End Date</p>
                        <DatePicker  
                        selected={field.value}
                        onChange={(date: Date | null) => field.onChange(date)} 
                        showTimeSelect
                        timeInputLabel="Time:"
                        dateFormat="MM/dd/yyyy h:mm aa"
                        wrapperClassName="datePicker  bg-background" />
                    </div>
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2">
                    <div className=" h-8 w-8 flex justify-center items-center rounded-md ">
                        <DollarSign className="h-6 w-6" />
                        
                      </div>
                      <Input type="number" placeholder="Price" {...field} className="p-regular-16 outline-offset-0 focus:border focus:border-primary-800  focus-visible:ring-0 focus-visible:ring-offset-0 mr-4" />
                      <FormField
                        control={form.control}
                        name="isFree"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div className="flex items-center">
                                <label htmlFor="isFree" className="whitespace-nowrap text-muted-foreground  pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Free Ticket</label>
                                <Checkbox
                                  onCheckedChange={field.onChange}
                                  checked={field.value}
                                id="isFree" className="mr-2 h-5 w-5 border-2 border-primary-500" />
                              </div>
          
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      /> 
                        
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />  
            
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2">
                      <div className=" h-8 w-8 flex justify-center items-center rounded-md ">
                          <Link className="h-6 w-6" />
                          
                      </div>

                      <Input placeholder="URL" {...field} className="p-regular-16 outline-offset-0 focus:border focus:border-primary-800  focus-visible:ring-0 focus-visible:ring-offset-0" />
                    </div>

                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              //bg-[#A78BFA]/30
            /> 
        </div>
        <div className="flex flex-col gap-5 md:flex-row">
            <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                <FormItem className="w-full">
                    <FormControl>
                    <div className="flex-center h-[54px] w-full overflow-hidden rounded-full px-4 py-2">
                    <div className="h-8 w-8 flex justify-center items-center rounded-md ">
                          <MapPin className="h-6 w-6" />
                          
                      </div>
                        {/* <Input placeholder="Event location or online" {...field} className="p-regular-16 border-0 bg-[#121212] outline-offset-0 focus:border focus:border-primary-800  focus-visible:ring-0 focus-visible:ring-offset-0"/> */}
                        {/* <input {...field} ref={inputRef} placeholder="Event location or online" className="input-field"/> */}
                        <PlacesAutocomplete location={location} setLocation={setLocation}/> 
                    </div>
                    
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
          
        </div>
       
      <Button 
      type="submit"
      size="lg"
      disabled={form.formState.isSubmitting}
      className="button col-span-2 w-full bg-primary-800"
      >
        {
            form.formState.isSubmitting ?('Submitting') :`${type} Event`
        }
      </Button>
    </form>
  </Form>
  )
}

export default EventForm