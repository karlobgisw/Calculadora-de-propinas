import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageFrom from "./components/TipPercentageFrom"
import { FaPizzaSlice } from "react-icons/fa";

function App() {

  const {order,addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className=" py-5 border-2 border-b-gray-200 flex items-center pl-5">
          <FaPizzaSlice />
          <h1 className="font-bold ml-4">Calculadora de propinas y consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-5 grid grid-cols-[1fr_2fr]">
        <div className="p-5">
          <h2 className="text-4xl font-bold">Menú</h2>
          <div className="space-y-1 mt-5">
            {menuItems.map(item => (
              <MenuItems key={item.id} item={item} addItem={addItem} id={item.id}></MenuItems>
            ))}
          </div>
        </div>
        <div className="">
          <div className="p-5 rounded-lg space-y-10 min-h-[100%] max-h-[100%] overflow-y-auto relative">
              <>
                <OrderContents order={order} removeItem={removeItem}></OrderContents>
                <TipPercentageFrom setTip={setTip} tip={tip}></TipPercentageFrom>
                <OrderTotals order={order} tip={tip} placeOrder={placeOrder}></OrderTotals>
              </>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
