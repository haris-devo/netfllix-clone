import React from "react";

const FrequentQues = () => {
  return (
    <>
      <div class="accordion flex flex-col items-center justify-center h-full py-20">
        <div class="w-1/2 bg-tertiary mb-2">
          <input type="checkbox" name="panel" id="panel-1" class="hidden " />
          <label
            for="panel-1"
            class="relative block  text-white  shadow p-6 text-2xl font-semibold"
          >
            What is Netflix
          </label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <p class="accordion__body p-6 text-2xl font-normal" id="panel1">
              Netflix is a streaming service that offers a wide variety of
              award-winning TV shows, movies, anime, documentaries, and more on
              thousands of internet-connected devices. <br /> You can watch as
              much as you want, whenever you want without a single commercial –
              all for one low monthly price. There's always something new to
              discover and new TV shows and movies are added every week!
            </p>
          </div>
        </div>
        <div class="w-1/2 bg-tertiary mb-2">
          <input type="checkbox" name="panel" id="panel-2" class="hidden " />
          <label
            for="panel-2"
            class="relative block  text-white  shadow p-6 text-2xl font-semibold"
          >
            How much does Netflix cost
          </label>
          <div class="accordion__content overflow-hidden bg-grey-lighter">
            <p class="accordion__body p-6 text-2xl font-normal" id="panel2">
              Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
              streaming device, all for one fixed monthly fee. Plans range from
              Rs250 to Rs1,100 a month. No extra costs, no contracts.
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default FrequentQues;
