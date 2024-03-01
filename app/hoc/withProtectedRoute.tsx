// // withProtectedRoute.js
// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
//
// const withProtectedRoute = (WrappedComponent, role: string) => {
//   return (props) => {
//     const router = useRouter();
//     const userRole = props.userType; // you would get this from context or props
//
//     useEffect(() => {
//       // Redirect if user's role doesn't match the required role for the route
//       if (userRole !== role) {
//         const redirectRoute =
//           userRole === "COUPLE" ? "/coupleDashboard" : "/inviteeDashboard";
//         router.push(redirectRoute);
//       }
//     }, [userRole, router]);
//
//     // Render the wrapped component if the user's role is correct
//     return userRole === role ? <WrappedComponent {...props} /> : null;
//   };
// };
//
// export default withProtectedRoute;
