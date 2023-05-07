import Feed from '@components/Feed'

function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubra e Compartilhe
        <br className="min-md:hidden" />
        <span className="orange_gradient text-center">Prompts para IA</span>
      </h1>
      <p className="desc text-center">
          Promptshare é uma ferramenta moderna de compartilhamento de prompts criativos
      </p>

      <Feed />
    </section>
  )
}

export default Home