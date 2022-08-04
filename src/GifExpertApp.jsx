import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Hip Hop'])

  const onAddCategory = newCategory => {
    
    if(categories.includes(newCategory)) return;

    setCategories([ newCategory, ...categories ])
  }



  return (
    <>
        
        

        <AddCategory 
          onNewCategory={ onAddCategory }
        />

        
      

        { 
          categories.map( category => ( 
            <GifGrid 
                key={category} 
                category={ category } 
            />
        
          ))
        }

    </>
  )
}

export default GifExpertApp