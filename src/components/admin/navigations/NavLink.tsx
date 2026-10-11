import Link from "next/link";

type NavLinkProps = {
  route?: string;
  icon: React.ReactNode;
  name: string;
  active: boolean;
};

export default function NavLink({ route = "/", icon, name, active }: NavLinkProps) {
  return (
    <Link
      href={route}
      className={`flex items-center gap-2 py-1.5 px-2 rounded-md ${active ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
    >
      {icon}
      <span>{name}</span>
    </Link>
  );
}
