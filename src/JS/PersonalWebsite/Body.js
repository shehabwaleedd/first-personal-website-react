import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Body() {
    return (
        <>
            <div>
            <section class="main"> 
                    <div>
                        <h2> Hallo, Ich bin Shehab und ich bin ein<br/><span> S o f t w a r e   E n g i n e e r</span></h2> 
                        <h3>Ich lass alles los</h3>
                        <a href="#projects" class="main-button">VIEW MY WORK</a>
                        <div class="social-icons">
                            <a href="https://www.facebook.com/shehabwaleedd" target="_blank"><FaInstagram /></a>
                            <a href="https://twitter.com/waleedjr_" target="_blank"><FaTwitter /></a>
                            <a href="https://www.instagram.com/shehabwaleedd/" target="_blank"><FaFacebook /></a>
                            <a href="#"></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}