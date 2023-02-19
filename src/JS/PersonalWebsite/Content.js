import { FaGlobeAfrica } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";

export default function Content() {
    return (
        <>
            <section class="cards" id="hobbies" data-aos="fade-in" data-aos-duration="1500">
                <h2 class="title"> what I am interested in...</h2>
                    <div class="content">
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-book-open"></i>
                                </div>
                                <div class="info">
                                    <h3> ACQUIRING KNOWLEDGE</h3>
                                    <h1 className="FaBook"><FaBookOpen /></h1>
                                    <p>I am always interested to read about everything especially history and philosophy, I love to read to understand the people around me and to get to know their struggle of our own kind.</p>
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-earth-africa"></i>
                                </div>
                                <div class="info">
                                    <h3> LANGUAGES </h3>
                                    <h1 className="FaBook"><FaGlobeAfrica /></h1>
                                    <p>Languages are such a magnificent way to communicate with many different people, to understand how the others think and it is a powerful tool to understand the communities in depth however the more languages you can speak the more strange people that can be your friends.</p>
                                
                                </div>
                            </div>
                            <div class="card">
                                <div class="icon">
                                    <i class="fa-solid fa-kit-medical"></i>
                                </div>
                                <div class="info">
                                    <h3> HEALTH</h3>
                                    <h1 className="FaBook"><FaHeartbeat /></h1>
                                    <p>Health is such an important thing, without you won't enjoy life and its quality will be reduced.</p>
                                
                                </div>
                            </div>
                        </div>
            </section>
        </>
    )
}