import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void,
}

export default function MenuItems({item, addItem}: MenuItemProps) {
  return (
    <button className="border-2 rounded-lg border-[#697565] w-full p-3 flex justify-between hover:bg-[#94a58e]" onClick={() => addItem(item)}>

    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
