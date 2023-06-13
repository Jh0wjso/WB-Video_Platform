interface ImageContent {
  imageLink: string
}

export default function MyImage(props: ImageContent){

  const image = `${props.imageLink}`;

  return <img src={image} width={300} className="rounded hover:opacity-75" alt="DB Case" />;
}
