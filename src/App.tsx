import { ChevronRight, Github, Mail, Twitter } from 'lucide-react'

const sectionVideos = {
  hero: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4',
  about:
    'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4',
  cta: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4',
}

const nftCards = [
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
    score: '8.7/10',
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
    score: '9/10',
  },
  {
    video: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
    score: '8.2/10',
  },
]

function SocialButtonGroup({ mobile = false }: { mobile?: boolean }) {
  return (
    <div
      className={`${
        mobile ? 'flex lg:hidden justify-center gap-4' : 'hidden lg:flex flex-col gap-4'
      }`}
    >
      {[Mail, Twitter, Github].map((Icon, index) => (
        <button
          key={index}
          type="button"
          aria-label="social icon"
          className="liquid-glass flex h-14 w-14 items-center justify-center rounded-2xl text-cream transition hover:bg-white/10"
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="bg-background text-cream selection:bg-neon selection:text-background">
      <div className="texture-overlay fixed inset-0 z-50 pointer-events-none" />

      <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={sectionVideos.hero}
        />
        <div className="relative mx-auto flex min-h-screen w-full max-w-orbis flex-col px-5 pb-14 pt-6 sm:px-8 md:px-12 lg:px-16">
          <header className="flex items-center justify-between gap-4">
            <p className="font-grotesk text-[16px] uppercase tracking-wide">Đoàn Vũ Hoài Nam</p>
            <nav className="liquid-glass hidden rounded-[28px] px-[52px] py-[24px] lg:block">
              <ul className="flex items-center gap-10">
                {['Homepage', 'Gallery', 'Buy NFT', 'FAQ', 'Contact'].map((item) => (
                  <li
                    key={item}
                    className="font-grotesk text-[13px] uppercase tracking-wide transition hover:text-neon"
                  >
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="w-14 lg:w-0" />
          </header>

          <div className="relative mt-20 flex flex-1 flex-col justify-center gap-10 md:mt-24 lg:mt-16">
            <div className="relative lg:ml-32">
              <h1 className="max-w-[780px] font-grotesk text-[40px] uppercase leading-[1.05] sm:text-[60px] md:text-[75px] md:leading-[1] lg:text-[90px]">
                Beyond earth
                <br />
                and ( its ) familiar boundaries
              </h1>
            </div>
            <div className="absolute right-3 top-2">
              <SocialButtonGroup />
            </div>
            <SocialButtonGroup mobile />
          </div>
        </div>
      </section>

      <section className="relative min-h-screen overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          src={sectionVideos.about}
        />
        <div className="relative mx-auto flex min-h-screen w-full max-w-orbis flex-col justify-between px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-16 lg:py-24">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            <div className="relative">
              <h2 className="font-grotesk text-[32px] uppercase leading-none sm:text-[44px] md:text-[52px] lg:text-[60px]">
                Hello!
                <br />I&apos;m orbis
              </h2>
              <span className="absolute -bottom-3 right-0 rotate-[-2deg] font-condiment text-[36px] normal-case text-neon mix-blend-exclusion sm:text-[48px] md:text-[58px] lg:text-[68px]">
                Orbis
              </span>
            </div>
            <p className="max-w-[266px] font-mono text-[14px] uppercase text-cream sm:text-[16px]">
              A digital object fixed beyond time and place. An exploration of distance, form,
              and silence in space
            </p>
          </div>

          <div className="flex justify-between gap-8">
            <div className="max-w-[360px] space-y-8">
              <p className="font-mono text-[14px] uppercase text-[#010828] opacity-10 lg:text-cream">
                A digital object fixed beyond time and place. An exploration of distance, form,
                and silence in space
              </p>
              <p className="font-mono text-[14px] uppercase text-[#010828] opacity-10 lg:text-cream">
                A digital object fixed beyond time and place. An exploration of distance, form,
                and silence in space
              </p>
            </div>
            <div className="hidden max-w-[360px] space-y-8 lg:block">
              <p className="font-mono text-[14px] uppercase text-cream opacity-10">
                A digital object fixed beyond time and place. An exploration of distance, form,
                and silence in space
              </p>
              <p className="font-mono text-[14px] uppercase text-cream opacity-10">
                A digital object fixed beyond time and place. An exploration of distance, form,
                and silence in space
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full max-w-orbis px-5 py-14 sm:px-8 md:px-12 md:py-20 lg:px-16">
          <div className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className="font-grotesk text-[32px] uppercase leading-none sm:text-[44px] md:text-[52px] lg:text-[60px]">
              Collection of
              <br />
              <span className="ml-12 block sm:ml-24 md:ml-32">
                <span className="font-condiment normal-case text-neon">Space </span>
                <span className="font-grotesk uppercase">objects</span>
              </span>
            </h2>

            <button type="button" className="w-fit text-left">
              <div className="flex items-end gap-3 font-grotesk uppercase leading-none">
                <span className="text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px]">See</span>
                <div className="pb-1">
                  <span className="block text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
                    All
                  </span>
                  <span className="block text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px]">
                    Creators
                  </span>
                </div>
              </div>
              <div className="mt-3 h-[6px] w-full bg-neon sm:h-[8px] md:h-[10px]" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {nftCards.map((card) => (
              <article
                key={card.video}
                className="liquid-glass rounded-[32px] p-[18px] transition hover:bg-white/10"
              >
                <div className="relative w-full overflow-hidden rounded-[24px] pb-[100%]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                    src={card.video}
                  />
                </div>

                <div className="liquid-glass mt-5 flex items-center justify-between rounded-[20px] px-5 py-4">
                  <div>
                    <p className="font-grotesk text-[11px] uppercase tracking-wide text-cream/70">
                      Rarity Score:
                    </p>
                    <p className="font-grotesk text-[16px] uppercase">{card.score}</p>
                  </div>
                  <button
                    type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] shadow-lg shadow-purple-500/50 transition hover:scale-110"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block h-auto w-full"
          src={sectionVideos.cta}
        />

        <div className="absolute inset-0 mx-auto flex w-full max-w-orbis items-center justify-end px-5 sm:px-8 md:px-12 lg:px-0 lg:pr-[20%]">
          <div className="relative lg:pl-[15%]">
            <p className="absolute -left-6 -top-5 font-condiment text-[17px] normal-case text-neon mix-blend-exclusion sm:text-[32px] md:text-[46px] lg:text-[68px]">
              Go beyond
            </p>
            <h2 className="font-grotesk text-[16px] uppercase leading-tight sm:text-[26px] md:text-[40px] lg:text-[60px]">
              <span className="mb-4 block md:mb-8 lg:mb-12">Join us.</span>
              <span className="block">Reveal what&apos;s hidden.</span>
              <span className="block">Define what&apos;s next.</span>
              <span className="block">Follow the signal.</span>
            </h2>
          </div>
        </div>

        <div className="absolute bottom-[12%] left-[8%] sm:bottom-[14%] md:bottom-[16%] lg:bottom-[20%]">
          <div className="liquid-glass overflow-hidden rounded-[0.5rem] sm:rounded-[0.75rem] md:rounded-[1rem] lg:rounded-[1.25rem]">
            {[Mail, Twitter, Github].map((Icon, index) => (
              <button
                key={index}
                type="button"
                aria-label="social icon"
                className={`flex w-[14vw] h-[2.9rem] items-center justify-center text-cream sm:h-[4.25rem] sm:w-[14.375rem] md:h-[3.875rem] md:w-[10.78125rem] lg:h-[4.625rem] lg:w-[16.77rem] ${
                  index < 2 ? 'border-b border-white/10' : ''
                }`}
              >
                <Icon size={20} />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
