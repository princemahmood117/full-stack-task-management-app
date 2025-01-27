import Lottie from "lottie-react";
import questions from "../../assets/faq.json";

const Faq = () => {
  return (
    <div>
        <hr className="mt-5" />
      <h1 className="text-center text-2xl md:text-3xl md:my-10 my-6">
        Frequently asked questions
      </h1>
      <div className="flex md:px-6 px-4 justify-around">
        <div className="w-1/3  hidden md:block">
          <Lottie style={{ height: "500px"}} animationData={questions}></Lottie>
        </div>

        <div className="md:w-1/2 w-full px-3">
          <div>
            <div className="collapse collapse-arrow bg-base-200 md:my-8 my-4">
              <input type="radio" name="my-accordion-2"/>
              <div className="collapse-title text-xl font-medium">
                What do you serve on platter-1?
              </div>
              <div className="collapse-content">
                <p className="font-[roboto]">Platter-1 : chicken breast fry, rice, salad, coke, chicken-masala curry </p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 md:my-8 my-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
               What payment system do you take?
              </div>
              <div className="collapse-content">
                <p>We take Stripe payment system</p>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 md:my-8 my-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Is your restaurent is on the goodle map?
              </div>
              <div className="collapse-content">
                <p>Yes,please find here </p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.7995308826676!2d90.40549657533134!3d23.790151987249093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e693d17fd%3A0x4573fd56c6132efa!2sChillox%20Banani!5e0!3m2!1sen!2sbd!4v1737823558957!5m2!1sen!2sbd" width="400" height="300"  style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
              </div>
            </div>

            <div className="collapse collapse-arrow bg-base-200 md:my-8 my-4">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title text-xl font-medium">
                Is the food Halal?
              </div>
              <div className="collapse-content">
                <p>We provide fully Halal menu in our restaurent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
