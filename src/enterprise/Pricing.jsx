import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Slider } from './../components/ui/slider'
import { allPlans } from "../components/Pricing/DynamicPricing";

export default function Form() {

  const nums = ['5', '10', '20', '30', '50', '100', '500'];
  const [selectedPlans, setSelectedPlans] = useState({});
  const [users, setUsers] = useState(5);

  const handlePlanSelect = (category, plan) => {
    setSelectedPlans((prev) => {
      const categoryPlans = prev[category] || [];
      const isSelected = categoryPlans.includes(plan);
      return {
        ...prev,
        [category]: isSelected
          ? categoryPlans.filter((p) => p !== plan)
          : [...categoryPlans, plan],
      };
    });
  };

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, []);

  // Calculate total cost based on selected plans and users
  const calculateTotal = () => {
    return Object.entries(selectedPlans).reduce((total, [category, plans]) => {
      const categoryPlans = allPlans[category]?.plans || {};
      return total + plans.reduce((sum, plan) => sum + (categoryPlans[plan]?.price || 0), 0);
    }, 0) * users;
  };

  const handleSliderChange = (value) => {
    // Set the number of users based on the slider value
    const userValues = [5, 10, 20, 30, 50, 100, 500];
    setUsers(userValues[value]);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Users Slider */}
        <div className="sticky top-0 z-10 shadow-md py-2 px-2 md:px-10 rounded-lg bg-white">
          <div className="grid lg:grid-cols-4 items-center justify-between gap-6 whitespace-nowrap">
            <div className="col-span-2 flex-1 w-full">
              <h2 className="text-2xl md:text-3xl xl:4xl font-bold text-center text-[#172554]">Select Users</h2>
              <Slider defaultValue={[0]}
                max={6}
                step={1} nums={nums} onValueChange={handleSliderChange} />
            </div>

            <div className="col-span-2 flex flex-col md:flex-row items-center justify-center lg:justify-end gap-2">
              <div className="flex-2 inline-flex justify-center border-2 rounded-lg border-blue-900 p-2 ">
                <p className="text-lg font-medium text-black">
                  Total: {calculateTotal() > 0 ? `$${calculateTotal().toFixed(2)}` : "$0"}
                </p>
              </div>

              <div className="flex-2 flex justify-end">
                <button
                  onClick={() => {
                    if (calculateTotal() > 0) {
                      window.location.href = "/#/get-started";
                    }
                  }}
                  className={`flex justify-center items-center gap-4 px-6 py-3 rounded-lg font-semibold text-lg text-white ${calculateTotal() > 0 ? "bg-[#172554] hover:bg-[#172554]" : "bg-gray-400 cursor-not-allowed"
                    }`}
                  disabled={calculateTotal() === 0}
                >
                  {calculateTotal() > 0 ? "Proceed with selected plan" : "Create your plan"}
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-center mt-8">Choose Modules for {' '}
          <span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            style={{
              fontFamily: "Bhineka",
              background: "linear-gradient(to right, #1E4FCD, #F36F7E)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              padding: "0 5px",
            }}
          >
            O
          </span>
          <span style={{ fontFamily: 'Noopla', fontWeight: '200' }}>
            Square</span> Enterprise</h2>
        {/* HR360 Plan Cards */}
        {Object.entries(allPlans).map(([category, { name, image, plans }]) => (
          (category === 'hr360' || category === 'iteam' || category === 'easyforms' || category === 'leadkonnekt' || category === 'ams') && (
            <div key={category} id={name}>
              <div className="flex gap-x-2 pt-8 pb-2">
                <h1 className="text-3xl font-semibold">{name}</h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {Object.keys(plans).map((plan) => (
                  <div
                    key={plan}
                    className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${selectedPlans[category]?.includes(plan)
                      ? "border-[#172554] bg-[#172554]/10"
                      : "border-gray-300 hover:bg-gray-100"
                      }`}
                    onClick={() => handlePlanSelect(category, plan)}
                  >
                    <Plan icon={plans[plan].icon} title={plans[plan].title} />
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>
    </main>
  );
}

function Plan({ icon, title }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>{icon}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
}