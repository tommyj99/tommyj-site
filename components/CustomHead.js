import Head from "next/head";

const CustomHead = (props) => {
  return (
    <Head>
      <title>props.title</title>
      <meta name={props.name} content={props.content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
export default CustomHead;
