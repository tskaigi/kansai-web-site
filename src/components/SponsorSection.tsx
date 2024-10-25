import { sponsorPlans } from "@/lib/data/sponsorList";
import Link from "next/link";

const optionSponsorVariant = {
  divider: "text-gray-300 divider-gray-300",
  gridSize: "gap-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6",
  height: "h-24",
  style: "text-sm",
};

const sponsorVariants = {
  Platinum: {
    divider: "text-secondary divider-secondary",
    gridSize: "gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    height: "h-48",
    style: "",
  },
  Gold: {
    divider: "text-accent divider-accent",
    gridSize: "gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
    height: "h-36",
    style: "",
  },
  Silver: {
    divider: "text-primary divider-primary",
    gridSize: "gap-2 grid-cols-3 sm:grid-cols-4 md:grid-cols-5",
    height: "h-28",
    style: "",
  },
  Bronze: {
    divider: "text-error divider-error",
    gridSize: "gap-2 grid-cols-4 sm:grid-cols-5 md:grid-cols-6",
    height: "h-24",
    style: "",
  },
  Drink: optionSponsorVariant,
  Snack: optionSponsorVariant,
  Beer: optionSponsorVariant,
  "Naming Rights": optionSponsorVariant,
} as const;

export const SponsorSection = () => {
  return (
    <div className="py-20">
      <div className="mx-auto max-w-4xl">
        <h2
          id="sponsor"
          className="mb-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl"
        >
          <a href="#sponsor">TSKaigi Kansai 2024 スポンサー各社</a>
        </h2>
      </div>
      <div className="mx-auto pb-20">
        {sponsorPlans.map((sponsorPlan) => (
          <PlanSponsors
            key={sponsorPlan.name}
            plan={sponsorPlan.name}
            sponsors={sponsorPlan.sponsors}
          />
        ))}
      </div>
    </div>
  );
};

const PlanSponsors = ({
  plan,
  sponsors,
}: {
  plan: (typeof sponsorPlans)[number]["name"];
  sponsors: (typeof sponsorPlans)[number]["sponsors"];
}) => {
  return (
    <div>
      <h3
        className={`divider sm:text-2xl font-bold ${sponsorVariants[plan].divider} ${sponsorVariants[plan].style}`}
      >
        <a
          id={`${plan}Sponsors`}
          href={`#${plan}Sponsors`}
          className="scroll-mt-20"
        >{`${plan} Sponsors`}</a>
      </h3>
      <div
        className={`my-8 mb-12 grid grid-cols-1 px-4 sm:px-6 lg:px-8 ${sponsorVariants[plan].gridSize}`}
      >
        {sponsors.map((sponsor) => (
          <Link
            key={sponsor.name}
            href={sponsor.logoLink}
            rel="noopener"
            target="_blank"
          >
            <div
              key={sponsor.name}
              className={`my-auto mb-4 overflow-hidden rounded-md bg-white text-sm transition duration-300 ease-in-out hover:opacity-80 hover:shadow-md md:rounded-lg ${sponsorVariants[plan].height} p-1}`}
            >
              <img
                className="size-full object-contain"
                src={sponsor.logoImage}
                alt={sponsor.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
