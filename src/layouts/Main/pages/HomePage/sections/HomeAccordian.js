import React from "react";

const HomeAccordian = () => {
  return (
    <div class="join join-vertical w-full">
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div class="collapse-title text-xl font-medium bg-[steelblue] text-white">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div class="collapse-title text-xl font-medium bg-[steelblue] text-white">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div class="collapse-title text-xl font-medium bg-[steelblue] text-white">
          Click to open this one and close others
        </div>
        <div class="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
};

export default HomeAccordian;
