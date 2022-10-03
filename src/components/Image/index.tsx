type Props = {
  src: string;
  alt?: string;
  fullWidth?: boolean;
  center?: boolean;
};

const Image = ({ src, alt, fullWidth, center }: Props) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      style={{
        width: fullWidth ? "100%" : "auto",
        margin: center ? "0 auto" : "0",
      }}
    />
  );
};

export default Image;
