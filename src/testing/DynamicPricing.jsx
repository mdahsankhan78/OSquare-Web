import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function DynamicPricing({ plansConfig }) {
  const [selectedPlans, setSelectedPlans] = useState({});
  const [users, setUsers] = useState(5); // Global Users slider state

  useEffect(() => {
    // Initialize selectedPlans with empty arrays for each plan category
    const initialSelectedPlans = {};
    for (const category in plansConfig) {
      initialSelectedPlans[category] = [];
    }
    setSelectedPlans(initialSelectedPlans);
  }, [plansConfig]);

  const handlePlanSelect = (category, plan) => {
    const currentPlans = selectedPlans[category];
    const isSelected = currentPlans.includes(plan);
    const updatedPlans = isSelected
      ? currentPlans.filter((p) => p !== plan)
      : [...currentPlans, plan];
    setSelectedPlans({ ...selectedPlans, [category]: updatedPlans });
  };

  const calculateTotal = () => {
    let total = 0;
    for (const category in selectedPlans) {
      selectedPlans[category].forEach((plan) => {
        total += plansConfig[category][plan]?.price || 0;
      });
    }
    return total * users; // Multiply total price by the number of users
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Global Users Slider */}
        <div className="sticky top-0 z-10 shadow-md p-2 rounded-lg bg-white">
          <div className="container mx-auto px-4 flex items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold text-center text-black">Select Users</h2>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    step="5"
                    value={users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#172554] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#172554]"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    {[5, 10, 20, 30, 50].map((value) => (
                      <span key={value}>{value}</span>
                    ))}
                  </div>
                </div>
                <div className="flex-2 flex flex-col items-center border-2 border-blue-900 p-2">
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
                    className={`flex items-center gap-4 px-6 py-3 rounded-lg font-semibold text-lg text-white ${
                      calculateTotal() > 0 ? "bg-[#172554] hover:bg-[#172554]" : "bg-gray-400 cursor-not-allowed"
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
        </div>
        <h2 className="text-4xl font-bold tracking-tight text-center mt-8">Choose Modules</h2>

        {/* Dynamic Plan Sections */}
        {Object.keys(plansConfig).map((category) => (
          <div key={category} className="my-8">
            <img
              src={`/products/${category}.svg`}
              alt={category}
              className="mx-auto"
              width={150}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {Object.keys(plansConfig[category]).map((plan) => (
                <div
                  key={plan}
                  className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-all ${
                    selectedPlans[category]?.includes(plan)
                      ? "border-[#172554] bg-[#172554]/10"
                      : "border-gray-300 hover:bg-gray-100"
                  }`}
                  onClick={() => handlePlanSelect(category, plan)}
                >
                  <Plan
                    icon={plansConfig[category][plan].icon}
                    title={plansConfig[category][plan].title}
                  />
                </div>
              ))}
            </div>
          </div>
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
