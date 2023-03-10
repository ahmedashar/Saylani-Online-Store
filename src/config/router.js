import { useState } from "react";
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
    useNavigate,
  } from "react-router-dom";
import AddItems from "../views/AddItems";
import Home from "../views/Home";

  export default function Router() {
   
    const [authUser, setAuthUser] = useState(false);
  
    // useEffect(() => {
    //   // check user login or not
    //   onAuthStateChanged(authentication, (user) => {
    //     if (user) {
    //       setAuthUser(true);
    //       console.log(user);
    //     } else {
    //       setAuthUser(false);
    //     }
    //   });
    // }, []);
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          {/* <Route
            path="/"
            element={
              authUser == false ? (
                <Login />
              ) : (
                <Navigate to="/home" replace={true} />
              )
            }
          /> */}
          {/* <Route
            path="/home"
            element={authUser ? <Home /> : <Navigate to="/" replace={true} />}
          /> */}

          <Route path="/" element={<Home />} />
          <Route path="/additems" element={<AddItems />} />
          {/* <Route path="/home/company/:tokenId/:userId" element={<ComToken />} /> */}
        </>
      )
    );
  
    return <RouterProvider router={router} />;
  }

  