import { AppProps } from "next/dist/next-server-lib/router/router";
import '../styles/globals.scss';
import '../styles/Home.scss';
import '../assets/animations.scss';
import '../assets/svg/Number1.scss';
import '../assets/svg/ArrowLeft.scss';
import '../assets/svg/ArrowRight.scss';
import '../assets/svg/SubmenuIcon.scss';
import '../assets/svg/Number2.scss';
import '../assets/svg/Number3.scss';
import '../assets/svg/Logo.scss';
import '../assets/svg/Menu.scss';
import '../assets/svg/Close.scss';
import '../components/Footer/Footer.scss';
import '../components/PreviewModal/PreviewModal.scss';
import '../components/Navigation/Navigation.scss';
import '../components/Header/Header.scss';
import '../components/Preview/Preview.scss';
import '../components/About/About.scss';
import '../components/Services/Services.scss';
import '../components/About/Steps/Steps.scss';
import '../components/About/Description/Description.scss';
import '../components/Services/ServiceImage/ServiceImage.scss';
import '../components/CompanyObjects/CompanyObjects.scss';
import '../components/Reviews/Reviews.scss';
import '../components/AboutDescription/AboutTeams.scss';
import '../components/AboutDescription/AboutDescription.scss';
import '../components/Banner/Banner.scss';
import '../components/RentCard/RentCard.scss';
import '../components/ObjectCarousel/ObjectCarousel.scss';
import '../components/RequestModal/RequestModal.scss';
import '../components/Team/Team.scss';
import './contacts/ContactsPage.scss';
import './equipment_rental/EquipmentRentalPage.scss';
import './objects/ObjectsPage.scss';
import './technical_competence/TechnicalCompetencePage.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
};

export default MyApp;