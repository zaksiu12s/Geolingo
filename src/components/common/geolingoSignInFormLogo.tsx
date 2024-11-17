// importing assets
import geolingoLogo from "../../assets/geolingo_logo.png";
import geolingoLogoShadow from "../../assets/geolingo_logo_shadow.png";

const GeolingoSignInFormLogo: React.FC = () => {
  return (
    <div className="relative">
      <img
        draggable="false"
        className="p-3 sm:p-0 w-96 max-w-full absolute"
        src={geolingoLogoShadow}
        alt="Geolingo logo"
      ></img>
      <img
        draggable="false"
        className="p-3 sm:p-0 w-96 max-w-full animate-fade-down animate-once animate-duration-400 animate-ease-in-out"
        src={geolingoLogo}
        alt="Geolingo logo"
      ></img>
    </div>
  );
};

export default GeolingoSignInFormLogo;
