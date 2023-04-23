import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetails from "./pages/PostDetails";
import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Posts />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "post-details",
      element: <PostDetails />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
