import type { NextPage } from "next";
import ImageGallery from "../Components/ImageGallery";
import Head from "next/head";

const Valut: NextPage<{ images: IImage[] }> = (props) => {
  return (
    <>
      <Head>
        <title>Fanvue Vault</title>
        <meta name="description" content="Fanvue Dev Test" />
      </Head>
      <ImageGallery images={props.images} />
    </>
  )
};

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=99')
  const images = await res.json() as IImage[];
  return {
    props: {
      images
    }
  }
}

export default Valut;
