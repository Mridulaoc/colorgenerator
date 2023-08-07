import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

const App = () => {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#e2188d').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {

      let colors = new Values(color).all(10);
       
      setList(colors);
    

    } catch (error) {
      setError(true);
      console.log(error);
    }
   
    
  }


  return (
    <>
      <section className="form-container">
        <h3>color generator</h3>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" value={color} onChange={(e) => setColor(e.target.value)} className={`${error ? 'error':null}`} placeholder='#e2188d' />
          <button type=' submit'className='btn'>submit</button>
        </form>
      </section>
      <section className="color-list">
        {list.map((color, index) => {
          return <SingleColor key={index} {...color} hex={color.hex} index={index} />
      })}
      </section>
    </>
  )
}

export default App
