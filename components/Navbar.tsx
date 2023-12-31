
import styles from "./Navbar.module.css"
import { ActiveLink } from "./ActiveLink"

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}> {/*importa stylo css modules */}
      {
        menuItems.map(({ text, href }) => (
          <ActiveLink key={text} text={text} href={href}></ActiveLink>
        ))
      }
      {/* <ActiveLink text="Home" href="/"></ActiveLink>
      <ActiveLink text="About" href="/about"></ActiveLink>
      <ActiveLink text="Contact" href="/contact"></ActiveLink> */}
    </nav>

  )
}


