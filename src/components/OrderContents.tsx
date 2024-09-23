import { MenuItem, OrderItem } from "../types"
import { IoCloseSharp } from "react-icons/io5";

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
                order.length === 0 ? (
                    <p className="text-center">No hay recetas seleccionadas</p>
                ) : (
                    order.map(item =>(
                        <div key={item.id} className="flex justify-between items-center border-b border-[#3C3D37] py-2 last-of-type:border-t-[#3C3D37]">
                            <div>
                                <p className="text-lg">
                                    {item.name} - ${item.price}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity}
                                </p>
                            </div>
                            <button className=" hover:bg-gray-200 rounded-lg hover:fill-[white] transition-all"
                                onClick={()=>removeItem(item.id)}
                            >
                                <IoCloseSharp size={30}/>
                            </button>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
