import { MenuItem } from "../types"
import { FaPizzaSlice } from "react-icons/fa";
import { GiPieSlice } from "react-icons/gi";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiMeat } from "react-icons/gi";
type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void,
    id: MenuItem['id']
}

export default function MenuItems({item, addItem, id}: MenuItemProps) {
  return (
    <button className="rounded-lg w-[90%] p-3 grid grid-cols-[1fr_2fr_1fr] hover:bg-[#f6efe7]" onClick={() => addItem(item)}>
      <div className="min-w-14 rounded-lg min-h-14 max-w-14 max-h-14 bg-[#f6efe7] flex items-center justify-center">
        { (id === 1 || id===2 || id===6) ? (<FaPizzaSlice size={20}/>) : 
          (id === 3 || id===4  ? (<GiPieSlice size={20}/>) : 
          (id === 5 || id===8 ? (<RiDrinks2Fill size={20}/>) : 
          (id === 7 ? (<GiMeat size={30}/>) : null
          )))}
      </div>
      <div className="w-full h-full flex text-left items-center">
        <p className="font-semibold">{item.name}</p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <p className=" font-normal">${item.price}</p>
      </div>
    </button>
  )
}
