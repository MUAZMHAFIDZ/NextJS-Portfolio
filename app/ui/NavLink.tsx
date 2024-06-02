import Link from "next/link";

interface LinkProps {
    href: string,
    title: string
}

const NavLink: React.FC<LinkProps> = ({ href, title }) => {
    return (
        <Link href={href} className='block text-[#babace] hover:text-white mx-5'>
            {title}
        </Link>
    )
}

export default NavLink;