import { AiOutlineDollarCircle, AiOutlineShop } from "react-icons/ai";
import { LuShieldCheck } from "react-icons/lu";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbMoneybag, TbTruckDelivery } from "react-icons/tb";
import OurTeam from "../ui/OurTeam";

function AboutDetails() {
  return (
    <>
      <div className="grid-cols-2 items-center justify-between gap-4 md:grid">
        <div className="md:w-[90%]">
          <h1 className="font-inter text-3xl font-medium">Our Story</h1>
          <p className="pt-6 font-mont">
            Our Story Launced in 2015, Exclusive is South Asia’s premier online
            shopping makterplace with an active presense in Bangladesh.
            Supported by wide range of tailored marketing, data and service
            solutions, Exclusive has 10,500 sallers and 300 brands and serves 3
            millioons customers across the region. Exclusive has more than 1
            Million products to offer, growing at a very fast.
          </p>
          <p className="pb-4 pt-4 font-mont">
            Exclusive offers a diverse assotment in categories ranging from
            consumer.
          </p>
        </div>

        <img
          src="/img-contact.png"
          alt="two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone"
        />
      </div>

      <div className="my-14 grid grid-cols-2 gap-4 text-center md:grid-cols-4">
        <figure className="border-[1px] border-gray-400 px-4 py-6">
          <AiOutlineShop className="m-auto mb-4 h-[40px] w-[40px] rounded-full bg-slate-950 py-2 text-3xl text-slate-50" />
          <figcaption>
            <p className="font-inter text-lg font-bold">10.5k</p>
            <p className="font-mont text-sm font-medium">
              Sallers active our site
            </p>
          </figcaption>
        </figure>

        <figure className="bg-red-500 px-4 py-6 text-slate-100">
          <AiOutlineDollarCircle className="m-auto mb-4 h-[40px] w-[40px] rounded-full bg-slate-50 py-2 text-3xl text-slate-950" />
          <figcaption>
            <p className="font-inter text-lg font-bold">33k</p>
            <p className="font-mont text-sm font-medium">
              Mopnthly Produduct Sale
            </p>
          </figcaption>
        </figure>

        <figure className="border-[1px] border-gray-400 px-4 py-6">
          <MdOutlineShoppingBag className="m-auto mb-4 h-[40px] w-[40px] rounded-full bg-slate-950 py-2 text-3xl text-slate-50" />
          <figcaption>
            <p className="font-inter text-lg font-bold">45k</p>
            <p className="font-mont text-sm font-medium">
              Customer active in our site
            </p>
          </figcaption>
        </figure>

        <figure className="border-[1px] border-gray-400 px-4 py-6">
          <TbMoneybag className="m-auto mb-4 h-[40px] w-[40px] rounded-full bg-slate-950 py-2 text-3xl text-slate-50" />
          <figcaption>
            <p className="font-inter text-lg font-bold">25k</p>
            <p className="font-mont text-sm font-medium">
              Anual gross sale in our site
            </p>
          </figcaption>
        </figure>
      </div>

      <OurTeam />

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
    </>
  );
}

export default AboutDetails;
