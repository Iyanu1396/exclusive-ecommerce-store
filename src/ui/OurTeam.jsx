import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";

function OurTeam() {
    return (
        <div className="m-auto mb-8 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <figure>
          <img className="mb-2" src="/img-tom.png" alt="" />
          <figcaption>
            <p className="font-inter text-lg font-medium">Tom Cruise</p>
            <p className="font-mont text-sm">Founder & Chairman</p>
            <div className="mt-2 flex gap-2">
              <RiTwitterLine />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </figcaption>
        </figure>
        <figure>
          <img className="mb-2" src="/img-emma.png" alt="" />
          <figcaption>
            <p className="font-inter text-lg font-medium">Emma Watson</p>
            <p className="font-mont text-sm">Founder & Chairman</p>
            <div className="mt-2 flex gap-2">
              <RiTwitterLine />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </figcaption>
        </figure>
        <figure>
          <img className="mb-2" src="/img-will.png" alt="" />
          <figcaption>
            <p className="font-inter text-lg font-medium">Will Smith</p>
            <p className="font-mont text-sm">Product Designer</p>
            <div className="mt-2 flex gap-2">
              <RiTwitterLine />
              <FaInstagram />
              <FaLinkedinIn />
            </div>
          </figcaption>
        </figure>
      </div>
    )
}

export default OurTeam
