type NavLinkProps = {
  name: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

export default function NavLink({ name, onClick }: NavLinkProps) {
  return (
    <div onClick={onClick} className="cursor-default">
      {name}
    </div>
  );
}
