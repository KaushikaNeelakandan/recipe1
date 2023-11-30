//layout.js
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div>
      
          <Link href="/" style={{color:"Black", textDecoration:"none"}}>
          <h1>Home Page - Recipes</h1>
          </Link>
          
          {/* Add more navigation links as needed */}
     

      <main>
        {children} {/* This will render the content of the current page */}
      </main>

      <footer>
        {/* Footer content goes here */}
      </footer>
    </div>
  );
};

export default Layout;
// import Link from 'next/link';
// export default function Layout({children}) {
//     return(
//         <div>
//             <h1>Layout Page</h1>
//             <Link href="/">Home</Link>
//             <Link href="/about">About</Link>
//             <main>
//                 {children}
//                 </main>
//         </div>
//     )
// }
