// Pricing.jsx
"use client";
import React from "react";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useTranslations } from "next-intl";

const plans = [
  {
    key: "star",
    price: "$99",
    type: "basic",
    features: [
      "custom_website",
      "uiux_optimization",
      "monthly_analytics",
      "basic_seo"
    ]
  },
  {
    key: "custom",
    price: "$Custom",
    type: "popular",
    features: [
      "full_service_strategy",
      "advanced_uiux",
      "custom_app_development",
      "ongoing_seo"
    ]
  },
  {
    key: "standard",
    price: "$199",
    type: "basic",
    features: [
      "custom_website",
      "uiux_optimization",
      "monthly_analytics",
      "basic_seo"
    ]
  }
];

const Pricing = () => {
  const t = useTranslations();

  return (
    <div className="container py-16">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <button className="text-sm my-4 button text-white bg-violet rounded-[24px] xl:px-4 xl:py-1 px-6 py-2 mb-3">
          {t("our_pricing")}
        </button>
        <h3 className="text-[48px] xl:text-[52px] font-semibold mt-3">
          {t("view_pricing")}
        </h3>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`w-full max-w-sm xl:max-w-[427px] p-6 rounded-2xl border border-[#E0E4EA] shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              plan.type === "popular"
                ? "bg-violet-50 border-violet-400 shadow-lg scale-105"
                : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-base font-medium">{t(`${plan.key}_name`)}</h2>
              {plan.type === "popular" && (
                <span className="text-xs bg-violet text-white px-2 py-1 rounded-md">
                  🔥 {t("Popular")}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-semibold mb-1">
              {plan.price} <span className="text-sm text-gray-500">{t("/month")}</span>
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              {t(`${plan.key}_description`)}
            </p>

            <button
              className={`w-full py-3 rounded-lg font-medium border border-[#DFE1E6] ${
                plan.type === "popular"
                  ? "bg-[#4236C4] text-white"
                  : "bg-white hover:bg-[#4236C4] hover:text-white"
              }`}
            >
              {t(`${plan.key}_button`)}
            </button>

            <div className="border-t-2 border-dashed border-[#DFE1E6] my-4"></div>

            <div className="text-left">
              <p className="text-sm font-semibold mb-2">
                {plan.type === "popular"
                  ? t("for_enterprise")
                  : t("for_startups")}
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-600">
                      <AiOutlineCheckSquare />
                    </span>
                    {t(`features.${feature}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
