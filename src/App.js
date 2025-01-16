import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Footer from "./Components/Footer/Footer";
import Error from "./Screens/404/Error";
import ScrolltoTop from "./Components/ScrolltoTop/ScrolltoTop";
import Spinner from "./Components/Spinner/Spinner";
import Header from "./Components/Header/Header";
import "react-toastify/dist/ReactToastify.css";

const LazyKatikaWallet = React.lazy(() =>
  import("./Screens/KatikaWallet/KatikaWallet")
);
const LazyContact = React.lazy(() => import("./Screens/Contact/Contact"));
const LazyBlog = React.lazy(() => import("./Screens/Blog/Blog"));
const LazyBlogDetails = React.lazy(() =>
  import("./Components/BlogDetails/BlogDetails")
);
const LazyAboutUs = React.lazy(() => import("./Screens/AboutUs/AboutUs"));
const LazyPrivacypolicy = React.lazy(() =>
  import("./Screens/Privacypolicy/Privacypolicy")
);
const LazyShowcasewalletLudokin = React.lazy(() =>
  import("./Screens/KatikaWalletLudokin/ShowcasewalletLudokin")
);
const LazyShowcasewallet = React.lazy(() =>
  import("./Screens/KatikaWalletShowcase/Showcasewallet")
);
const LazyHome = React.lazy(() => import("./Screens/Home/Home"));

const LazyUserlicense = React.lazy(() =>
  import("./Screens/Userlicense/Userlicense")
);
const LazyProformat = React.lazy(() =>
  import("./Components/Proformat/Proformat")
);
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<Error />} />
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyHome />
            </React.Suspense>
          }
        />
        <Route
          path="/katika-wallet"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyKatikaWallet />
            </React.Suspense>
          }
        />
        <Route
          path="/blog"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyBlog />
            </React.Suspense>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyBlogDetails />
            </React.Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyContact />
            </React.Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyAboutUs />
            </React.Suspense>
          }
        />
        <Route
          path="/showcase-wallet"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyShowcasewallet />
            </React.Suspense>
          }
        />
        <Route
          path="/showcase-ludokin"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyShowcasewalletLudokin />
            </React.Suspense>
          }
        />
        <Route
          path="/privacypolicy"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyPrivacypolicy />
            </React.Suspense>
          }
        />

        <Route
          path="/userlicenseagreement"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyUserlicense />
            </React.Suspense>
          }
        />
        <Route
          path="/proformat"
          element={
            <React.Suspense fallback={<Spinner />}>
              <LazyProformat />
            </React.Suspense>
          }
        />
      </Routes>
      <ToastContainer />
      <Footer />
      <ScrolltoTop />
    </Router>
  );
}

export default App;
