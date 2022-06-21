import axios from "axios";
import Head from "next/head";

const List = ({ results }) => {
  return (
    <>
      <Head>
        <title>List of things</title>
        <meta
          name="description"
          content="There you can see the list of things"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Listado de algo que pondré</p>
      <ul>
        {results.map((result) => {
          return <li key={result.id}>{result.name}</li>;
        })}
      </ul>
    </>
  );
};

export const getServerSideProps = async () => {
  const { data } = await axios.get("http://localhost:3001/results");

  return {
    props: { results: data },
  };
};
export default List;
