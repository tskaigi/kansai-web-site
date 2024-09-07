import { StaffMemberSection } from "@/components/StaffMemberSection";
import Container from "@/ui/container";
import { HiExternalLink } from "react-icons/hi";

export default function Home() {
  return (
    <>
      <Container>
        <div className="relative isolate overflow-hidden">
          <div className="mx-auto max-w-7xl ">
            <div className="mx-auto max-w-4xl lg:pt-8">
              <h1 className="mt-4 text-2xl font-bold tracking-tight text-accent">
                日本最大級の
                <br />
                TypeScriptをテーマとした技術カンファレンスへようこそ
              </h1>
              <p className="mt-6 text-lg leading-7">
                TSKaigi
                Kansaiは、日本最大級のTypeScriptをテーマとした技術カンファレンスです。
                <br />
                コロナ禍で様々なオフラインイベントが打撃を受ける中、TypeScriptを扱うエンジニアが会場で集まる機会は失われていきました。
                <br />
                新型コロナウイルスが落ち着いた今、各所で蓄積されたノウハウが日の目を浴び、より生き生きとTSエンジニアが働ける世界を目指して、TSKaigi
                Kansaiを開催します。
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto my-8 max-w-4xl pb-20">
          <div className="mb-10 lg:mt-20">
            <div className="mb-5 text-center text-2xl font-bold">
              開催: 2024年11月16日
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
          {/* TODO: 会場マップを用意する */}
        </div>
      </Container>
      <StaffMemberSection />
    </>
  );
}
