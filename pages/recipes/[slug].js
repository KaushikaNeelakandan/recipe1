import {createClient} from 'contentful'
//import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})
export const getStaticPaths = async()=>
{
    const res=await client.getEntries({
        content_type:'recipes'
    })
    const paths=res.items.map(item=>{
        return{
            params:{slug: item.fields.slug}
        }
    })
    return{
        paths,
        fallback:false 
    }
}
export const getStaticProps=async({params})=>{
    const {items}=await client.getEntries({
        content_type:'recipes',
        'fields.slug':params.slug 
    })
    return{
        props:{recipes:items[0]}
    }
}
export default function RecipeDetails({recipes}) {
    const {title,featuredImage,cookingTime,ingredients,method}=recipes.fields;
    console.log(method)
    return (
        <div><h1> {title}</h1>
            <div className='desc'>
                
                <div className='titleimg'>       
            
                <Image src={'https:'+ featuredImage.fields.file.url} 
             width={featuredImage.fields.file.details.image.width}
             height={featuredImage.fields.file.details.image.height}/>
             </div>

        <div>
       <h4>Cooking Time: {cookingTime}mins</h4>
       <h5>Ingredients</h5>
       <ul>{ingredients.map(i=><li>{i}</li>)}</ul> 
        <h5>Method</h5>
        <p>{method.content[0].content[0].value}</p>
        </div>
        <style jsx>
            {`
                div{
                    margin:20px;
                }
                ul{
                    margin:20px;
                }
                h5{
                    margin:20px;
                }
                p{
                    margin:20px;
                }
                .desc{
                    display:grid;
                    grid-template-columns:1fr 2fr;
                    
                }
                .titleimg{
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;

                }
            `}</style>
      </div></div>
    )
  }