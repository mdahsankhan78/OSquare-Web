import React, { useState, useCallback } from "react";

const Solutions = ({
  tabsData = [],
  initialTabIndex = 0,
  canToggle,
  sectionTitle,
  sectionSubtitle,
  gradientColors = ["white", "purple-50"],
  sectionSolutionRef,
}) => {
  const [activeTab, setActiveTab] = useState(initialTabIndex);
  const [features, setFeatures] = useState(
    tabsData.length > 0 ? tabsData[initialTabIndex].features : []
  );
  const [activeImage, setActiveImage] = useState(
    tabsData.length > 0 ? tabsData[initialTabIndex].initialImage : ""
  );

  const toggleFeature = useCallback((id) => {
    setFeatures((prev) =>
      prev.map((feature) => ({
        ...feature,
        expanded: feature.id === id,
        highlighted: feature.id === id,
      }))
    );
    setActiveImage(id);
  }, []);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
    setFeatures(tabsData[tabIndex].features);
    setActiveImage(tabsData[tabIndex].initialImage);
  };

  return (
    <section
      ref={sectionSolutionRef}
      className={`relative overflow-hidden bg-gradient-to-br from-${gradientColors[0]} to-${gradientColors[1]} pt-20`}
      id="solutions"
    >
      <div className="max-w-full mx-auto px-4 sm:px-6 xl:px-24 2xl:px-48">
        <div className="relative z-10">

          <div data-aos='fade-up'>
            {sectionSubtitle && (
              <span className="text-[#172554] block font-semibold tracking-wide uppercase text-sm">
                {sectionSubtitle}
              </span>
            )}
            {sectionTitle && (
              <span className="font-semibold text-[#172554] text-3xl sm:text-4xl lg:w-1/2">
                {sectionTitle}
              </span>
            )}
          </div>

          {tabsData.length > 1 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tabsData.map((tab, index) => (
                <button
                  key={index}
                  className={`rounded-3xl font-semibold transition-all duration-200 p-3 ${activeTab === index
                    ? "text-white bg-[#172554]"
                    : "text-[#172554] bg-[#DBE2E5]"
                    }`}
                  onClick={() => handleTabChange(index)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature) => (
                <Feature
                  key={feature.id}
                  {...feature}
                  isExpanded={feature.expanded}
                  isHighlighted={feature.highlighted}
                  onToggle={() => toggleFeature(feature.id)}
                  toggle={canToggle}
                />
              ))}
            </div>

            {/* Feature Image */}
            {activeImage && (
              <div className="relative lg:sticky lg:top-8">
                <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-2 shadow-xl ring-1 ring-gray-900/10 transition-all duration-500 ease-in-out">
                  <img
                    src={tabsData[activeTab]?.images[activeImage]}
                    alt="Feature preview"
                    className="w-full h-[400px] object-cover rounded-2xl transition-opacity duration-500"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full blur-3xl opacity-50" />
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full blur-3xl opacity-50" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  icon: Icon,
  title,
  description,
  isExpanded,
  isHighlighted,
  onToggle,
  toggle,
}) => {
  return (
    <div
      className={`group rounded-xl transition-all duration-200 ${isHighlighted ? "bg-white/50 shadow-lg ring-1 ring-gray-900/5" : ""
        }`}
    >
      <button
        onClick={toggle && onToggle}
        className="w-full flex items-start text-left p-4"
      >
        <div className="mr-4 mt-1">
          <div
            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-colors ${isHighlighted
              ? "bg-[#172554] text-white"
              : "bg-blue-100 text-[#172554] group-hover:bg-blue-200"
              }`}
          >
            <Icon className="w-5 h-5" />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3
              className={`text-lg font-semibold transition-colors ${isHighlighted
                ? "text-[#172554]"
                : "text-gray-900 group-hover:text-[#172554]"
                }`}
            >
              {title}
            </h3>
            {toggle && <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""
                }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 9l6 6 6-6"
              />
            </svg>}
          </div>
          <div
            className={`mt-2 text-gray-600 transition-all duration-200 ${isExpanded
              ? "max-h-80 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
              }`}
          >
            {description}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Solutions;
