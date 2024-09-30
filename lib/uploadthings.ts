import { generateReactHelpers } from "@uploadthing/react/hooks";
 
import type { OurFileRouter } from "@/app/api/uploadthing/core";
 
export const { useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();




// import {
//     generateReactHelpers, generateUploadButton
//   } from "@uploadthing/react";
  
//   import type { OurFileRouter } from "@/app/api/uploadThing/core";
  
//   export const UploadButton = generateUploadButton<OurFileRouter>();
//   export const {useUploadThing, uploadFiles } = generateReactHelpers<OurFileRouter>();
  