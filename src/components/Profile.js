import Avatar from "./Avatar";
const imageUrl = 'https://img.freepik.com/free-vector/collection-hand-drawn-profile-icon_23-2149076520.jpg?t=st=1724149287~exp=1724152887~hmac=6b1d7304bae3864afd856acef030e4d00d4947ebbc9d133a296b1fc27b27e32a&w=740'

export default function Profile() {
  return <Avatar url={imageUrl} alt="Avatar" />;
}
