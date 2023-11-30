
import React from 'react';

// const Index = () => {
//   return (
//     <div>
//       <h1>Welcome to Next.js!</h1>
//       <p>This is the index page.</p>
//     </div>
//   );
// };

// export default Index;
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: "recipes" })

  return {
    props: {
      recipes: res.items,
    }
  }
}
export default function Recipes({recipes}){
    console.log(recipes);
    return(
        <div>
            <h1>Recipe List</h1>
            <ul>
            {recipes.map(r=>(<RecipeCard key={r.sys.id} recipes={r}/>))}
            </ul>
            <style jsx>
                {`
                    h1{
                        padding-bottom:20px;
                    }                
                    ul{ 
                        margin:20px;
                        display:flex;
                        flex-direction:row;
                        
                        justify-content:space-around;
                    }
                `}
            </style>

        </div>
    )
}