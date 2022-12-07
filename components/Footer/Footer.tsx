import Form from "../Form/Form";
import Logo from "../../assets/svg/Logo";
import Link from "../../node_modules/next/link";

export default function Footer(props: any): JSX.Element {
  const currentYear = () => {
    let year = new Date().getFullYear();

    return `ООО«ЯраМарк» 2020-${year}`;
  };

  return (
    <footer className="footer footer-bg" id="footer">
      <section className="footer-top">
        <h2 className="footer-top__heading">Оставьте заявку</h2>

        <Form />
      </section>

      <section className="footer-bottom footer-bottom--bg">
        <p className="footer-bottom__instagram">
          <span>Instagram </span>

          <a href="#">@yaramark</a>
        </p>

        <div className="footer-bottom__logo">
          <Link href="/">
            <Logo />
          </Link>

          <span>{currentYear()}</span>
        </div>

        <p className="footer-bottom__contacts">
          <a
            className="footer-bottom__contacts-link"
            href="tel:+375445725497"
          >
            +375 44 572-54-97
          </a>
          <a
            className="footer-bottom__contacts-link"
            href="mailto:yaramark@mail.ru"
          >
            yaramark@mail.ru
          </a>
        </p>
      </section>
    </footer>
  );
}
