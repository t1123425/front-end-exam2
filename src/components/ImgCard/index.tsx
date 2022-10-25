import React, {ImgHTMLAttributes, useState} from 'react';
interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: string;
}

const ImgCard: React.FC<Props> = props => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(props.src);
  const onError = () => setImgSrc(props.fallback);
  return (
    <img
      src={imgSrc ? imgSrc : props.fallback}
      style={props.style}
      onError={onError}
      alt={props.alt}
    />
  );
};

export default ImgCard;
