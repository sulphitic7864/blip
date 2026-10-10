import { motion } from "framer-motion";

import {
  FiChevronDown,
  FiAward,
  FiUsers,
  FiStar,
  FiInstagram,
  FiHardDrive,
  FiSettings,
} from "react-icons/fi";

import { FaRocket } from "react-icons/fa";

const Navbar = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Bulk Launch Ads",
    },

    {
      icon: <FiAward />,
      title: "Post ID Scaling",
    },

    {
      icon: <FiUsers />,
      title: "Partnership Ads",
    },

    {
      icon: <FiStar />,
      title: "AI Placement",
    },

    {
      icon: <FiInstagram />,
      title: "Instagram Whitelisting",
    },

    {
      icon: <FiHardDrive />,
      title: "Drive & Dropbox",
    },

    {
      icon: <FiSettings />,
      title: "Saved Templates",
    },
  ];

  return (
    <motion.nav
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className="

fixed

top-0

left-1/2

-translate-x-1/2


w-[90%]

max-w-[1450px]


h-[100px]


bg-white


rounded-b-[55px]


flex

items-center

justify-between


px-8


z-50


"
    >
      {/* LEFT MENU */}

      <div
        className="

flex

items-center

gap-14

"
      >
        {/* FEATURES */}

        <div
          className="

relative

group

h-full

flex

items-center

"
        >
          <div
            className="

flex

items-center

gap-2

text-[18px]

font-semibold

cursor-pointer

"
          >
            Features
            <FiChevronDown
              size={18}
              className="

transition-transform

duration-300

group-hover:rotate-180

"
            />
          </div>

          {/* DROPDOWN */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            className="


absolute

top-[75px]


left-[-30px]


w-[365px]


bg-white


border

border-black


rounded-[28px]


shadow-xl


p-6



opacity-0


invisible


group-hover:opacity-100


group-hover:visible


group-hover:translate-y-0



translate-y-3


transition-all


duration-300



"
          >
            {features.map((item, index) => (
              <div
                key={index}
                className="


flex

items-center

gap-5


py-4


cursor-pointer


hover:translate-x-2


transition-all


duration-300


"
              >
                <div
                  className="


text-[27px]


text-black


w-[35px]


flex

justify-center


"
                >
                  {item.icon}
                </div>

                <p
                  className="

text-[20px]

font-semibold

text-[#461B0C]

"
                >
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div
          className="

text-[18px]

font-semibold

cursor-pointer

"
        >
          Analytics
        </div>

        <div
          className="

text-[18px]

font-semibold

cursor-pointer

"
        >
          Pricing
        </div>

        <div
          className="

text-[18px]

font-semibold

cursor-pointer

"
        >
          Blog
        </div>
      </div>

      {/* CENTER LOGO */}

      <div
        className="

absolute

left-1/2

-translate-x-1/2


flex

items-center

gap-4

"
      >
        <div
          className="

w-[60px]

h-[60px]


rounded-xl


bg-[#F7EBD9]


flex

items-center

justify-center


"
        >
          <FaRocket size={32} className="text-[#ef3b27]" />
        </div>

        <h1
          className="

text-[34px]


font-extrabold


text-[#461B0C]


"
        >
          Blip
        </h1>
      </div>

      {/* RIGHT BUTTONS */}

      <div
        className="

flex

items-center

gap-5

"
      >
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          className="

h-[55px]


px-9


rounded-full


bg-[#242424]


text-white


font-bold


text-[17px]


flex

items-center

gap-3



shadow-xl


"
        >
          🚀 Start Free Trial
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          className="

h-[55px]


px-10


rounded-full


bg-[#FFC486]


border

border-black


text-[#51230e]


font-semibold


text-[17px]


"
        >
          Login
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
