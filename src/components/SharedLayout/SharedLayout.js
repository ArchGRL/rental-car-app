import React from 'react';
import { Suspense } from 'react';
import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
    <NavBar />
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};



// import { Suspense } from "react";
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import {
//   Container,
//   Header,
//   Link,
// } from 'components/SharedLayout/SharedLayout.styled';

// export const SharedLayout = () => {
//   return (
//     <Container>
//       <Header>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/catalog">Cars</Link>
//           <Link to="/favorites">Favorites</Link>
//         </nav>
//       </Header>
//       <Suspense fallback={<div>Loading page...</div>}>
//         <Outlet />
//         <ToastContainer autoClose={1500}/>
//       </Suspense>
//     </Container>
//   );
// };
