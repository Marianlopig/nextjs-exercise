import Head from "next/head";
import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Next exercise</title>
        <meta name="description" content="Exercise from the mountain" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/list"}>
          <a>List</a>
        </Link>
      </nav>
      {children}
    </>
  );
};

export default Layout;
