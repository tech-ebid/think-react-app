export default function Avatar({ url, alt }) {
  return (
    <img className="avatar" src={url} alt={alt} width={100} height={100} />
  );
}
