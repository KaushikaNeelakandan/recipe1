import Link from 'next/link';
import Image from 'next/image'
export default function RecipeCard({recipes})
{
    const {title,slug,thumbnail,cookingTime}=recipes.fields;
    return(
        <div className='cardflex'>
           
            <Image className="imgsize" src={'https:'+ thumbnail.fields.file.url} 
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}/>
             <div className='card'>
            <h3>{title}</h3>
            
            <h5>Takes approx {cookingTime}mins</h5>
            <div className="cook">
            <Link href={'/recipes/'+slug} style={{color:"red", textDecoration:"none"}}>Cook this</Link></div></div>
            <style jsx>
                {`
                    
                    .card{
                        background:#f4f4f4;
                        box-shadow:1px 3px 5px rgba(0,0,0,0.1);
                        position: relative;
                        margin:0;
                        top: -40px;
                        left: -10px;
                    }
                    .imgsize{
                        height:200px;
                        width:100%;
                    }
                    .cook{
                        background:white;
                        display:flex;
                        justify-content:space-between;
                        padding:10px;
                    }
                `}
            </style>

        </div>
    )
}