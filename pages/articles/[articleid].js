import { supabase } from '../../client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


const Article = ({articles}) => {
  /*const [articleData, setArticleData] = useState([])
  const [errorText, setError] = useState('')*/
  console.log('Log articles:', articles)
  const router = useRouter()
  console.log('Router.quey:', router.query.articleid)
  

  useEffect(() => {
      fetchLogInStatus()
      /*fetchData()*/
      router.push(`/articles/${router.query.articleid}`, undefined, { shallow: true })
    }, [])

  async function fetchLogInStatus() {
      const logInStatus = await supabase.auth.user()
      if (!logInStatus) {
        router.push('/sign-in')
      }
      return
    }

  

  
  /*const { articleid } = router.query

  const foo = parseInt(articleid)*/

  /*async function fetchData() {
    while(router.query == {}){}
    let { data: articleData, error } = await supabase
        .from('Articles')
        .select('*')
        .eq('articleId', articleid)
    if (error) console.log('error', error)
    else setArticleData(articleData)
    
    console.log(router.query)
    console.log(articleid)
    console.log(typeof(articleid))
    console.log(articleData)
      
  }*/
  
  return (
    <div className='flex justify-center bg-newspaper h-screen'>
      <div className=' h-screen px-10 w-3/6 bg-secondary rounded-lg h-4/5 mt-10'>      
        <div className='pt-10'>
          <h1 className='font-sans text-5xl font-bold '>{articles.data[0].articleTitle}</h1>
          <p className='font-sans text-sm'> Written By: {articles.data[0].writtenBy}</p>
          <p className='font-sans text-xs'>{articles.data[0].written_at}</p>  
          <p className='font-sans text-xs'>Views: {articles.data[0].Views}</p>
          <p className='font-pt pt-5'>{articles.data[0].article}</p>
        </div>
      </div>
    </div>
      
 )
}

export async function getServerSideProps(ctx) {
  /*const router = useRouter()
  const articleid = router.query*/

  var id = ctx.params.articleid
  console.log('Log ctx:', ctx.params.articleid)

  let /*{ data: articleData, error }*/ articles = await supabase
        .from('Articles')
        .select('*')
        .eq('articleId', id)
    /*if (error) console.log('error', error)
    else setArticleData(articleData)*/

    let newViewAmount = articles.data[0].Views + 1
    
    const { data, error } = await supabase.from('Articles').update({ 'Views': newViewAmount }).match({ 'articleId': id })
    
    return{
      props : {articles}
    }
}

export default Article