import React from 'react';
import './footer.scss';
import { ICTwitter, ICFacebook, Logo, ICInstagram } from '../../../assets';

const Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

function Footer() {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={Logo} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICFacebook} />
                    <Icon img={ICTwitter} />
                    <Icon img={ICInstagram} />
                    {/* <img src={ICFacebook} alt="facebook" />
                    <img src={ICTwitter} alt="twitter" />
                    <img src={ICInstagram} alt="instagram" /> */}
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer
