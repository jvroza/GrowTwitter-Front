import { RouterProvider } from "react-router";
import { routes } from "./routes.tsx";
import { AuthProvider } from "./context/AuthContextData.tsx";


export function App () {
  return (
      <AuthProvider>
        <RouterProvider router={routes}/>
      </AuthProvider>
  )
}