import Form from "../Form/Form";
import Logo from "../../assets/svg/Logo";
import Link from "../../node_modules/next/link";
import classes from './Footer.module.css';

export default function Footer(props: any): JSX.Element {
  const currentYear = () => {
    let year = new Date().getFullYear();

    return `ООО«ЯраМарк» 2020-${year}`;
  };

  return (
    <footer className={`${classes.footer} ${classes.footerBg}`} id="footer">
      <section className={classes.footerTop}>
        <h2 className={classes.footerTopHeading}>Оставьте заявку</h2>

        <Form />
      </section>

      <section className={`${classes.footerBottom} ${classes.footerBottomBg}`}>
        <p className={classes.footerBottomInstagram}>
          <span>Instagram </span>

          <a href="#">@yaramark</a>
        </p>

        <div className={classes.footerBottomLogo}>
          <Link href="/">
            <Logo />
          </Link>

          <span>{currentYear()}</span>
        </div>

        <p className={classes.footerBottomContacts}>
          <a
            className={classes.footerBottomContactsLink}
            href="tel:+375445725497"
          >
            +375 44 572-54-97
          </a>
          <a
            className={classes.footerBottomContactsLink}
            href="mailto:yaramark@mail.ru"
          >
            yaramark@mail.ru
          </a>
        </p>
      </section>
    </footer>
  );
}
