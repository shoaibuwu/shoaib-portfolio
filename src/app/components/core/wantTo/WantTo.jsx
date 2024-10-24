import Link from "next/link";

const Wantto = () => {
  const email = "shoaib.newversion@gmail.com"; // Define your email here

  return (
    <section id="WantTo" className="w-full py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Want to</h2>

        {/* Cards Container */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-secondary shadow-md rounded-lg overflow-hidden transform transition-transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl duration-300">
            <div className="p-6">
              <h3 className="text-primary text-xl font-semibold mb-2">
                Offer Job Opportunity?
              </h3>
              <p className="text-primary">
                I am open to discussing potential job opportunities or
                collaboration. With experience in web development and Computer
                Science, I am interested in roles that allow me to work on
                exciting and challenging projects. If you have a project or role
                in mind, feel free to reach out.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-secondary shadow-md rounded-lg overflow-hidden transform transition-transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl duration-300">
            <div className="p-6">
              <h3 className="text-primary text-xl font-semibold mb-2">
                Connect?
              </h3>
              <p className="text-primary">
                Networking is key in the tech industry, and I&apos;m always
                looking to meet new people and expand my professional circle.
                Whether you&apos;re a fellow developer, designer, or
                entrepreneur, I&apos;d love to chat and learn more about your
                work.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-secondary shadow-md rounded-lg overflow-hidden transform transition-transform hover:-translate-y-3 hover:scale-105 hover:shadow-xl duration-300">
            <div className="p-6">
              <h3 className=" text-primary text-xl font-semibold mb-2">
                Build something?
              </h3>
              <p className="text-primary">
                I have a passion for developing innovative web applications that
                solve complex problems. Whether it&apos;s building a custom
                e-commerce platform or a cutting-edge web app, I&apos;m always
                ready for a new challenge. Let&apos;s create something amazing
                together!
              </p>
            </div>
          </div>
        </div>

        {/* Centered Button */}
        <div className="flex justify-center mt-8">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=Job%20Opportunity&body=Hi%20Shoaib,%20I%20would%20like%20to%20discuss%20a%20job%20opportunity%20with%20you.`}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice
            className="bg-black text-white font-semibold py-4 px-8 rounded-lg transform transition-all duration-300 hover:bg-secondary  hover:scale-105 hover:shadow-lg hover:-translate-y-1"
          >
            Hire Me!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Wantto;
