import { useMemo } from "react"
import { OrderItem } from "../types"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}  

export default function OrderTotals({order, tip, placeOrder}:OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce( (total, item) => total + (item.quantity * item.price), 0), [order])

  return (
    <>
        <div className="space-y-3">
            <p className="border-t py-3 border-[#bfbc9f]">Subtotal a pagar:  
                <span className="font-bold"> ${subtotalAmount}</span>
            </p>

            <p className="border-t py-3 border-[#bfbc9f]">Propina:
                <span className="font-bold"> ${subtotalAmount * tip}</span>
            </p>

            <p className="border-t py-3 border-[#bfbc9f]">Total a pagar:
                <span className="font-bold"> ${subtotalAmount + (subtotalAmount * tip)}</span>
            </p>
        </div>
        <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={subtotalAmount + (subtotalAmount * tip) === 0} onClick={()=>placeOrder()}>
            Guardar Orden
        </button>
    </>
  )
}
