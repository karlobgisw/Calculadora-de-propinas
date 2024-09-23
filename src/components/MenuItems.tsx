import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void,
}

export default function MenuItems({item, addItem}: MenuItemProps) {
  return (
    <button className="rounded-lg w-[90%] p-3 grid grid-cols-[1fr_2fr_1fr] hover:bg-[#f6efe7]" onClick={() => addItem(item)}>
      <div className="min-w-14 rounded-lg min-h-14 max-w-14 max-h-14 bg-[#f6efe7]"></div>
      <div className="w-full h-full flex text-left items-center">
        <p className="font-semibold">{item.name}</p>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <p className=" font-normal">${item.price}</p>
      </div>
    </button>
  )
}
