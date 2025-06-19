"use client";
import { useTina } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function AwesomeContent({ data }) {
  const pageData = useTina({
    data: data.data,
    query: data.query,
    variables: data.variables,
  });

  // const amazingTitle = pageData.data.my_first_collection.title;
  // const incredibleBody = pageData.data.my_first_collection.body;
  // const beautifulImage = pageData.data.my_first_collection.beautifulImage;
  const blocks = pageData.data.my_first_collection.blocks;
  console.log("blocks", blocks); // TODO: Remove later 😁

  return (
    <>
      {blocks?.map((block, index) => {
        switch (block.__typename) {
          case "My_first_collectionBlocksTitleBlock":
            return <h1 key={index}>{block.title}</h1>;
          case "My_first_collectionBlocksBodyBlock":
            return <TinaMarkdown key={index} content={block.Body} />;
          case "My_first_collectionBlocksImageBlock":
            return <img key={index} src={block.beautifulImage} />;
        }
      })}
    </>
  );
}