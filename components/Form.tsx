import Link from 'next/link'
import FormProps from '../types/FormProps'

function Form({ type, post, setPost, submit, handleSubmit }: FormProps) {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>{type} Prompt</span>
      </h1>
      <p className='desc text-left max-w-md'>
        {type} e compartilhe prompts incríveis com o mundo, e deixe sua imaginação fluir em qualquer plataforma de Inteligência Artificial!
      </p>
      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2x1 flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Seu prompt</span>        
          <textarea 
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder='Escreva seu prompt aqui...'
            required
            className='form_textarea'
          />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>Hashtag #</span>
          <input 
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder='#Assunto'
            required
            className='form_input'
          />
        </label> 
        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancelar
          </Link>
          <button type='submit' className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white' disabled={submit}>
            {submit ? `Enviando... : ${type}` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form