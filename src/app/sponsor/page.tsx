import { NavigateAnchorOnFirstRender } from "@/functional/navigate-anchor-on-first-render";
import { sponsorPlans } from "@/lib/data/sponsorList";
// import Container from '@/ui/container'
import Link from "next/link";

const pageAnchors = {
  news: "news",
  ticketInfo: "ticket-info",
  sponsor: "sponsor",
  corporateSponsors: "corporate-sponsors",
};

export default function SponsorPage() {
  const sponsorVariants = {
    Platinum: {
      divider: "text-secondary divider-secondary",
    },
    Gold: {
      divider: "text-accent divider-accent",
    },
    Silver: {
      divider: "text-primary divider-primary",
    },
    Bronze: {
      divider: "text-error divider-error",
    },
    Snack: {
      divider: "text-gray-300 divider-gray-300",
    },
    Drink: {
      divider: "text-gray-300 divider-gray-300",
    },
    Beer: {
      divider: "text-gray-300 divider-gray-300",
    },
    "Naming Rights": {
      divider: "text-gray-300 divider-gray-300",
    },
  };
  return (
    <div className="">
      <NavigateAnchorOnFirstRender />
      <h1
        id={pageAnchors.sponsor}
        className="mx-auto my-10 scroll-mt-20 px-4 text-2xl sm:px-6 lg:px-8 lg:text-4xl"
      >
        <a href="#sponsor">TSKaigi Kansai 2024のスポンサー</a>
      </h1>
      {sponsorPlans.map((plan) => {
        if (plan.name === "Platinum" || plan.name === "Gold")
          return (
            <div key={plan.name}>
              <h3
                className={`divider mb-8 text-2xl font-bold ${sponsorVariants[plan.name].divider} `}
              >
                {plan.name} Sponsors
              </h3>
              {plan.sponsors.map((sponsor, index) => (
                <div
                  key={sponsor.name}
                  className={`p-6 sm:p-6 lg:p-8 ${index % 2 === 0 ? "bg-base-100" : "bg-base-200"}`}
                >
                  <div className="grid gap-4 sm:grid-cols-3">
                    <Link
                      href={sponsor.logoLink}
                      rel="noopener"
                      target="_blank"
                    >
                      <div
                        className={
                          "flex h-[200px] w-full items-center rounded-sm bg-white sm:col-span-1"
                        }
                      >
                        <img
                          src={sponsor.logoImage}
                          alt={`${sponsor.name}logo`}
                          className="mx-auto max-h-44"
                        />
                      </div>
                    </Link>
                    <div className="sm:col-span-2">
                      <h4 className="mb-4 border-l-4 pl-2 text-xl lg:text-3xl ">
                        {sponsor.name}
                      </h4>
                      <p className="mb-2 whitespace-pre-wrap">
                        {sponsor.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          );

        return (
          <div key={plan.name}>
            <h3
              className={`divider mb-8 text-2xl font-bold ${sponsorVariants[plan.name].divider} `}
            >
              {plan.name} Sponsors
            </h3>
            <div
              className={
                "my-8 mb-12 grid grid-cols-2 gap-4 px-4 sm:grid-cols-3 sm:px-6 md:grid-cols-4 lg:px-8"
              }
            >
              {plan.sponsors.map((sponsor) => (
                <Link
                  key={sponsor.name}
                  href={sponsor.logoLink}
                  rel="noopener"
                  target="_blank"
                >
                  <div
                    key={sponsor.name}
                    className={
                      "my-auto mb-4 h-36 overflow-hidden rounded-md bg-white text-sm transition duration-300 ease-in-out hover:opacity-80 hover:shadow-md md:rounded-lg"
                    }
                  >
                    <img
                      className="size-full object-contain p-4"
                      src={sponsor.logoImage}
                      alt={sponsor.name}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
