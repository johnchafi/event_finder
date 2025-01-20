import { clerkMiddleware , createRouteMatcher} from "@clerk/nextjs/server";
 
// export default clerkMiddleware({
//   publicRoutes: [
//     '/',
//     '/events/:id',
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing'
//   ],
//   ignoredRoutes: [
//     '/api/webhook/clerk',
//     '/api/webhook/stripe',
//     '/api/uploadthing'
//   ]
// });

const isPublicRoute = createRouteMatcher([  '/',
  '/events/:id',
  '/explore',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing','/sign-in(.*)', '/sign-up(.*)'])

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect()
  }
})
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};