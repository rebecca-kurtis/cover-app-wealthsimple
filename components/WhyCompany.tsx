import React from "react";

interface WhyCompanyProps {}

export const WhyCompany: React.FC<WhyCompanyProps> = ({}) => {
  return (
    <div className="whyCompanyContainer" id='why-company'>
      <h2 className="whyContainerH2">What I love about Wealthsimple</h2>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          1. I use Wealthsimple in my personal life
        </h4>
        <p>
          I use Wealthsimple for micro-investing and I have always loved their ideology in how everyone can use it. It&apos;s something I use often and I have always thought it would be really cool to be a part of what Wealthsimple does.
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          2. User experience is very important to Wealthsimple
        </h4>
        <p>
        Wealthsimple&apos;s products are designed with a user-centred approach
          and aim to provide an intuitive and seamless user experience. I have always
          LOVED Wealthsimple&apos;s clean and modern design! I enjoy being able to see different stats for each stock/investment especially as someone who doesn&apos;t have a lot of investing experience. 
        </p>
      </div>
      <div className="pointContainerSpacer"></div>
      <div className="pointContainer">
        <h4 className="whyContainerH4">
          3. Great and supportive team environment
        </h4>
        <p>
          I attended both the Preparing Your Application and the Internship Stories Virtual Events and I loved seeing the dynamic between your teams. A lot of the intern&apos;s stories resonated with me and I would love to have the opportunity to be a part of the team. It seems like you have created a supportive, compassionate, and fun environment and I love that!
        </p>
      </div>
    </div>
  );
};
