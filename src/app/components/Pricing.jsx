import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid';
import { AiOutlineCheckSquare } from "react-icons/ai";
const plans = [
  {
    name: "Star Plan",
    price: "$99",
    description: "Elevate for startups and small business to get fast growth!",
    button: "Get Started",
    features: [
      "Custom website design & development",
      "UI/UX optimization for better engagement",
      "Monthly performance analytics & improvements",
      "Basic SEO setup for visibility",
    ],
    type: "basic",
  },
  {
    name: "Custom Plan",
    price: "$Custom",
    description:
      "Exclusive scaling and enterprise your brand today with exclusive designs that fits your goals!",
    button: "Create a Custom Plan",
    features: [
      "Full-service digital strategy & execution",
      "Advanced UI/UX & conversion rate optimization",
      "Custom web & mobile app development",
      "Ongoing SEO & marketing integration",
    ],
    type: "popular",
  },
  {
    name: "Standard Plan",
    price: "$199",
    description: "Elevate for startups and small business to get fast growth!",
    button: "Get Started",
    features: [
      "Custom website design & development",
      "UI/UX optimization for better engagement",
      "Monthly performance analytics & improvements",
      "Basic SEO setup for visibility",
    ],
    type: "basic",
  },
];

const Pricing = () => {
  return (
    <div className='container  md:h-[960px] h-[1700px]  '>
      <div className=' md:h-[300px] h-[163px] border    flex flex-col items-center justify-center text-center   '>
        <button className='w-[97px] h-[29px] text-[14px] rounded-[24px]  bg-violet button text-white'>Our Pricing</button>
        <h3 className='md:text-[52px] text-[48px] font-[500]'>View Our Pricing</h3>
        <p className='md:text-[17px] text-[16px] font-[400] text-[#808897]  '>Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.</p>
      </div>
      <div className="  md:flex border mt-10 md:mt-0  items-center  justify-between ">
        {plans.map((plan, idx) => (
          <div
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
            data-aos-delay={idx * 150}
            key={idx}
            className={` md:w-[430px] w-[350px]  h-[443px] md:mt-0 shadow mt-7 rounded-[16px] border border-[#E0E4EA] transition-all duration-300 hover:shadow-xl hover:-translate-y-1  ${plan.type === "popular"
                ? "bg-violet-50 border-violet-400 shadow-lg md:scale-105"
                : "bg-white border-[bg-violet]"
              } p-6 text-center transition-all duration-300`}
          >
            <div
              data-aos="zoom-in" className="flex  justify-between  items-center mb-4">

              <h2 className="text-[16px]   font-[500]">{plan.name}</h2>
              {plan.type === "popular" && (
                <span className="text-[12px] bg-violet text-white px-2 py-1 rounded-md">
                  🔥 Popular
                </span>
              )}
            </div>
            <h3 className="text-[32px] text-left font-[500] mb-1">{plan.price}
              <span className="text-[14px] font-medium text-gray-500">/month</span>
            </h3>
            <p className="text-[14px]  text-left text-gray-500 mb-4">{plan.description}</p>
            <button


              className={`md:w-[362px] w-[294px] h-[52px] border border-[#DFE1E6] py-2 rounded-lg font-medium ${plan.type === "popular"
                  ? "bg-[#4236C4] text-white"
                  : "bg-white hover:bg-[#4236C4] hover:text-white "
                }`}
            >
              {plan.button}
            </button>
            <div className="border-t-2 border-dashed border border-[#DFE1E6] my-4"></div>
            <div className="text-left">
              <p className="text-sm font-semibold mb-2">
                {plan.type === "popular"
                  ? "For Scaling & Enterprise Brands"
                  : "For Startups & Small Businesses"}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-600"><AiOutlineCheckSquare /></span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing