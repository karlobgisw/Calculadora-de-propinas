import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotals from "./components/OrderTotals"
import TipPercentageFrom from "./components/TipPercentageFrom"

function App() {

  const {order,addItem, removeItem, tip, setTip, placeOrder } = useOrder()

  return (
    <>
      <header className=" bg-[#181C14] py-5">
        <h1 className="text-center text-white font-black">Calculadora de propinas y consumo</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid grid-cols-2">
        <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenuItems key={item.id} item={item} addItem={addItem}></MenuItems>
            ))}
          </div>
        </div>
        <div className="">
          <div className="border border-dashed border-[#697565] p-5 rounded-lg space-y-10 min-h-[100%] max-h-[100%] overflow-y-auto relative">
            {order.length > 0 ? (
              <>
                <OrderContents order={order} removeItem={removeItem}></OrderContents>
                <TipPercentageFrom setTip={setTip} tip={tip}></TipPercentageFrom>
                <OrderTotals order={order} tip={tip} placeOrder={placeOrder}></OrderTotals>
              </>
            ) : (<p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-[#40473e50]">La orden está vacía</p>)}
          </div>
        </div>
      </main>
    </>
  )
}

export default App
