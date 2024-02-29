import ContactMe from "./ContactMe"; // Import the ContactMe component
 
export default function HeroSection() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("Contact"); // Get the Contact section by its id
        contactSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the Contact section smoothly
      };
    return(
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="her0--section--content">
                    <p className="section--title">Hey, I'm John</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">Full Stack</span> {" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Full Stack Alchemist | Crafting Digital Excellence 🚀💻
                        <br/>
                    </p>
                </div>
                <button className="btn btn-primary" onClick={scrollToContact}>Get In Touch</button>
            </div>
            <div className="hero--section--image">
                <img className="heroImage" src="./img/IMG_8340.png" alt="Hero Image" />
            </div>
        </section>
    )
}