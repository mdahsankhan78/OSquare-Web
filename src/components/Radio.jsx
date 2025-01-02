import { useContext, createContext } from "react"

const RadioContext = createContext()

export default function Radio({ children, ...props }) {
  const { value, onChange } = useContext(RadioContext)

  return (
    <label
      className={`
        px-6 py-4 shadow rounded-lg cursor-pointer
        transition-all ${
          value === props.value
            ? "bg-gradient-to-r from-[#172554]/55 to-[#172554]/65 text-[#172554] shadow-[#172554] scale-105"
            : "bg-white hover:shadow-md shadow-gray-300"
        }
    `}
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  )
}

export function RadioGroup({ value, onChange, children }) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  )
}