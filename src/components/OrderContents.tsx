import { MenuItem, OrderItem } from "../types"

type OrderContentProps = {
    order: OrderItem[]
    removeItem: (id: MenuItem['id']) => void
  }  

export default function OrderContents({order, removeItem}:OrderContentProps) {
  return (
    <div>
        <h2 className="font-black text-4xl">Consumo</h2>

        <div className="space-y-3 mt-10">
            {
                order.map(item =>(
                    <div key={item.id} className="flex justify-between items-center border-t border-[#3C3D37] py-5 last-of-type:border-b-[#3C3D37]">
                        <div>
                            <p className="text-lg">
                                {item.name} - ${item.price}
                            </p>
                            <p className="font-black">
                                Cantidad: {item.quantity} - {(item.price * item.quantity)}
                            </p>
                        </div>
                        <button
                            className=" bg-red-800 h-8 w-8 rounded-full text-white font-black"
                            onClick={()=>removeItem(item.id)}
                        >
                            X
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
