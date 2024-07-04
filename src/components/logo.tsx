import Image from "next/image";
import Link from "next/link";

function logo() {
  return (
    <Link href="/">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt=""
        width={53}
        height={12}
      />
    </Link>
  );
}
export default logo;
