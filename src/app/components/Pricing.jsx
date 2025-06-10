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
    <div className="container  py-16">
    <div className="text-center max-w-3xl mx-auto mb-10">
      <button className="text-sm my-4  button text-white bg-violet rounded-[24px] xl:px-4 xl:py-1 px-6 py-2 mb-3">
        Our Pricing
      </button>
      <h3 className="text-[48px] xl:text-[52px] font-semibold mt-3">
        View Our Pricing
      </h3>
      <p className="text-base text-[#808897] mt-3">
        Pizza ipsum dolor meat lovers buffalo. Rib fresh black NY rib mushrooms pan garlic pizza.
      </p>
    </div>
  
    <div className="flex flex-wrap gap-6  justify-center">
      {plans.map((plan, idx) => (
        <div
          key={idx}
          data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          data-aos-delay={idx * 150}
          className={`w-full max-w-sm xl:max-w-[427px] p-6 rounded-2xl border border-[#E0E4EA] shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
            plan.type === "popular"
              ? "bg-violet-50 border-violet-400 shadow-lg scale-105"
              : "bg-white"
          }`}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base font-medium">{plan.name}</h2>
            {plan.type === "popular" && (
              <span className="text-xs bg-violet text-white px-2 py-1 rounded-md">
                🔥 Popular
              </span>
            )}
          </div>
  
          <h3 className="text-2xl text-left font-semibold mb-1">
            {plan.price}
            <span className="text-sm font-medium text-gray-500">/month</span>
          </h3>
          <p className="text-sm text-left text-gray-500 mb-4">{plan.description}</p>
  
          <button
            className={`w-full py-3 rounded-lg font-medium border border-[#DFE1E6] ${
              plan.type === "popular"
                ? "bg-[#4236C4] text-white"
                : "bg-white hover:bg-[#4236C4] hover:text-white"
            }`}
          >
            {plan.button}
          </button>
  
          <div className="border-t-2 border-dashed border-[#DFE1E6] my-4"></div>
  
          <div className="text-left">
            <p className="text-sm font-semibold mb-2">
              {plan.type === "popular"
                ? "For Scaling & Enterprise Brands"
                : "For Startups & Small Businesses"}
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-gray-600">
                    <AiOutlineCheckSquare />
                  </span>{" "}
                  {feature}
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