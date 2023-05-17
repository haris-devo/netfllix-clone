import React from "react";

const FrequentQues = () => {
  // Define an array of questions and answers
  const faqs = [
    {
      question: "What is Netflix",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!",
    },
    {
      question: "How much does Netflix cost",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs250 to Rs1,100 a month. No extra costs, no contracts.",
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
    },
    {
      question: "How do I cancel?",
      answer:
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
    },
    {
      question: "What can i watch on Netflix?",
      answer:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    },
    {
      question: "Is Netflix good for kids?",
      answer:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
    },
  ];

  // Using map to render each FAQ item
  return (
    <div class="accordion flex flex-col items-center justify-center h-full py-20">
      <h1 className="text-5xl my-6 font-bold ">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div class="w-3/5 bg-tertiary mb-2 " key={index}>
          <input
            type="checkbox"
            name="panel"
            id={`panel-${index + 1}`}
            class="hidden "
          />
          <label
            for={`panel-${index + 1}`}
            class="relative block  text-white  shadow p-6 text-2xl font-semibold cursor-pointer"
          >
            {faq.question}
          </label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <p
              class="accordion__body p-6 text-2xl font-normal"
              id={`panel${index + 1}`}
            >
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
      <div class="w-full h-full flex  justify-center items-center ">
        <div className="text-center text-white ">
          <p className="max-w-full mt-5 text-center text-xl leading-5 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="md:max-w-lg max-w-sm my-10 flex mx-auto">
            <input
              type="text"
              autocomplete="email"
              minLength="5"
              maxLength="50"
              id="fcb93acc599c6"
              name="email"
              data-uia="field-email"
              value=""
              className="w-2/3 p-4 bg-black border border-grey-600 rounded opacity-50"
              placeholder="Email Address"
            />
            <button className="bg-red-600 text-white px-5 py-2 rounded-md ml-2 text-xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQues;
