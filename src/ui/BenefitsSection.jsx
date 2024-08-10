import { LuShieldCheck } from "react-icons/lu"
import { RiCustomerService2Line } from "react-icons/ri"
import { TbTruckDelivery } from "react-icons/tb"

function BenefitsSection() {
  return (
    <div className="grid items-center justify-center gap-8 pt-20 text-center md:m-auto md:w-[80%] md:grid-cols-3">
    <figure>
      <figcaption>
        <TbTruckDelivery className="m-auto mb-4 h-[60px] w-[60px] rounded-full bg-slate-950 py-2 text-5xl text-slate-50" />
        <p className="font-inter text-lg font-medium">
          FREE AND FAST DELIVERY
        </p>
        <p className="font-mont text-sm">
          Free delivery for all orders over $140
        </p>
      </figcaption>
    </figure>
    <figure>
      <figcaption>
        <RiCustomerService2Line className="m-auto mb-4 h-[60px] w-[60px] rounded-full bg-slate-950 py-2 text-5xl text-slate-50" />
        <p className="font-inter text-lg font-medium">
          24/7 CUSTOMER SERVICE
        </p>
        <p className="font-mont text-sm">Friendly 24/7 customer support</p>
      </figcaption>
    </figure>
    <figure>
      <LuShieldCheck className="m-auto mb-4 h-[60px] w-[60px] rounded-full bg-slate-950 py-2 text-5xl text-slate-50" />
      <figcaption>
        <p className="font-inter text-lg font-medium">
          MONEY BACK GUARANTEE
        </p>
        <p className="font-mont text-sm">We reurn money within 30 days</p>
      </figcaption>
    </figure>
  </div>
  )
}

export default BenefitsSection
