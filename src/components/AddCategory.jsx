import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()

        if( inputValue.trim().length <= 1 ) return;
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

  return (

    <>  
    <div className='container'>
        <h1>LeFriik Dance</h1>

        <form onSubmit={ onSubmit } >
            <input 
                type="text"
                placeholder="¿Estilo?"
                value={inputValue}
                onChange={ onInputChange }

            />
        </form>

        <div className="like card-headline">
            <div>
                <h4 className="card-h4">
                    Me Gusta
                </h4>
                <h2 className="card-h2">
                    999k
                </h2>
            </div>
            
            <span className="card-headline-icon  uil uil-play-circle"></span>
        </div>

    </div>
        

    </>
    
  )
}

