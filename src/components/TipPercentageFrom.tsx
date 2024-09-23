const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TypePercentageFormProps = {
    setTip: React.Dispatch<React.SetStateAction<number>>,
    tip: number
}  

export default function TipPercentageFrom({setTip, tip}:TypePercentageFormProps) {
  return (
    <div className="flex">
        <h3 className="font-black text-lg text-[#bfbc9f] flex items-center justify-center">Propina:</h3>

        <form className="flex w-full bg-[#f6efe7] rounded-full justify-around relative items-center">
            {tipOptions.map(tipOption => (
                <div className="flex flex-col items-center justify-center relative w-[30%] h-[90%]" key={tipOption.id}>
                    <input
                        id={tipOption.id}
                        type="radio"
                        name="tip"
                        value={tipOption.value}
                        onChange={e => setTip(+e.target.value)}
                        checked={tipOption.value === tip}
                        className="appearance-none w-full h-[90%] flex items-center justify-center cursor-pointer checked:bg-white rounded-lg"
                    />
                    <label htmlFor={tipOption.id} className="absolute cursor-pointer">{tipOption.label}</label>
                </div>
            ))}
        </form>
    </div>
  )
}
