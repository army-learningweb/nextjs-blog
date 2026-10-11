import Link from "next/link";

type LogoProps = {
  className?: string;
  route?: string;
};

export default function Logo({ className, route="/" }: LogoProps) {
  return (
    <Link href={route} className={`font-black tracking-tight text-2xl ${className}`}>
      SAIGON NEWS
    </Link>
  );
}
