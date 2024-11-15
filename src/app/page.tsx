import CommitteeCards from "@/components/CommitteeCards";
import { JobBoard } from "@/components/JobBoard";
import { SponsorSection } from "@/components/SponsorSection";
import { StaffMemberSection } from "@/components/StaffMemberSection";
import { selectionCommittee } from "@/lib/data/committee";
import { TICKET_PAGE_URL } from "@/lib/data/pageInfos";
import Container from "@/ui/container";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <img
          src="/banner.webp"
          className="mx-auto w-full max-h-[30vh] object-cover md:max-h-[55vh] lg:max-h-[60vh]"
          alt="banner"
        />
      </div>
      <Container>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl ">
            <div className="mx-auto max-w-4xl lg:pt-8">
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-accent">
                日本最大級のTypeScriptをテーマとした技術カンファレンスを関西でも開催
              </h1>
              <p className="mt-6 text-lg leading-7">
                TSKaigi Kansai 2024は、2024年5月に東京で開催されたTSKaigi
                2024から派生した初の地域型イベントです。
                <br />
                TSKaigi
                2024を踏襲しつつ、学び・情報交換・交流の場を提供し、関西地域の
                TypeScriptコミュニティを盛り上げます。
              </p>
              <div className="mt-4 text-center">
                <a
                  href={TICKET_PAGE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="max-w-xs btn btn-lg btn-accent w-full overflow-hidden whitespace-nowrap bg-gradient-to-r from-accent to-[#FFCDA8] font-bold text-primary-content hover:opacity-90"
                >
                  チケットを購入
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto my-8 max-w-4xl pb-20">
          <div className="mb-10 lg:mt-20">
            <div className="mb-5 text-center text-2xl font-bold">
              開催: 2024年11月16日
            </div>
            <div className="mb-5 text-center text-2xl font-bold">
              時間: 10:30～18:00（開場10:00／懇親会～20:00）
            </div>
            <div className="m-auto text-center text-xl font-bold">
              <p>
                <span>
                  会場：
                  <a
                    className="link link-primary inline-block items-center gap-2 text-base sm:text-xl"
                    href="https://maps.app.goo.gl/3PEs4FsdN3MBUxW4A"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    京都市勧業館 みやこめっせ
                    <HiExternalLink className="ml-2 inline-block" />
                  </a>
                </span>
              </p>
            </div>
          </div>
          <div>
            <iframe
              className="h-96 w-full rounded-md sm:h-96 md:h-96 lg:h-96 xl:h-96 2xl:h-96"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13071.00427993202!2d135.7809608!3d35.012936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600108e5fdb0fb75%3A0x32f576fbc1dc5042!2z5Lqs6YO95biC5Yun5qWt6aSoIOOBv-OChOOBk-OCgeOBo-OBmw!5e0!3m2!1sja!2sjp!4v1725274977138!5m2!1sja!2sjp"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
          <div className="mt-40">
            <div className="mx-auto max-w-4xl">
              <h2 className="m-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
                会場マップ
              </h2>
            </div>
            <div className="mx-auto my-6 max-w-2xl text-left sm:px-4 lg:text-xl flex flex-col items-center">
              <div className="bg-white rounded-xl shadow overflow-hidden">
                <img src="/map.png" alt="会場図" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <JobBoard />
      <SponsorSection />
      <div className="mx-auto max-w-5xl mb-40">
        <h2 className=" scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
          トーク&LT審査員
        </h2>
        <div className="px-4 mb-20">
          <CommitteeCards cardData={selectionCommittee} />
        </div>
      </div>
      <StaffMemberSection />
    </>
  );
}
