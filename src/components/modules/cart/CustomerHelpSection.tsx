import Image from "next/image";
import FAQ from "@assets/FAQ.png";
import CALL from "@assets/call.png";
import LOCATION from "@assets/location.png";

const CustomerHelpSection = () => {
  return (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 my-5">
      <div className="bg-white space-y-2 rounded-md p-5">
        <Image src={FAQ} width={64} height={64} alt="FAQ" />
        <h1 className="text-xl font-bold">Having Quires?</h1>
        <p>
          Save big this Black Friday with unbeatable deals on tech, home
          essentials,
        </p>
      </div>
      <div className="bg-white space-y-2 rounded-md p-5">
        <Image src={CALL} width={64} height={64} alt="FAQ" />
        <h1 className="text-xl font-bold">Call Us Today</h1>
        <p>
          Save big this Black Friday with unbeatable deals on tech, home
          essentials,
        </p>
      </div>
      <div className="bg-white space-y-2 rounded-md p-5">
        <Image src={LOCATION} width={64} height={64} alt="FAQ" />
        <h1 className="text-xl font-bold">Locate Us</h1>
        <p>
          Save big this Black Friday with unbeatable deals on tech, home
          essentials,
        </p>
      </div>
    </div>
  );
};

export default CustomerHelpSection;
