import Image from "next/image";

function Logo() {
  return (
    <>
      <Image src="/logo.png" alt="Logo" width={500} height={500} />
    </>
  );
}

export default Logo;
