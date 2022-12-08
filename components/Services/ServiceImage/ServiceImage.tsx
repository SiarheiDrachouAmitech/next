import ServiceImage1 from "../../../assets/svg/ServiceImage1";
import ServiceImage2 from "../../../assets/svg/ServiceImage2";
import ServiceImage3 from "../../../assets/svg/ServiceImage3";
import ServiceImage4 from "../../../assets/svg/ServiceImage4";
import ServiceImage5 from "../../../assets/svg/ServiceImage5";
import ServiceImage6 from "../../../assets/svg/ServiceImage6";
import ServiceImage7 from "../../../assets/svg/ServiceImage7";
import ServiceImage8 from "../../../assets/svg/ServiceImage8";
import classes from './ServiceImage.module.css';

export default function ServiceImage(props: { itemId: number }): JSX.Element {
  const { itemId } = props;

  if (itemId === 1)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage1 />
      </div>
    );
  if (itemId === 2)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage2 />
      </div>
    );
  if (itemId === 3)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage3 />
      </div>
    );
  if (itemId === 4)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage4 />
      </div>
    );
  if (itemId === 5)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage5 />
      </div>
    );
  if (itemId === 6)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage6 />
      </div>
    );
  if (itemId === 7)
    return (
      <div className={classes.serviceImage}>
        <ServiceImage7 />
      </div>
    );

  return (
    <div className={classes.serviceImage}>
      <ServiceImage8 />
    </div>
  );
}
