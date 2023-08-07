import React, { useEffect, useState } from 'react'

const SingleColor = ({ rgb, hex, index, weight }) => {
  
  const [alert, setAlert] = useState(false);
  const bgc = rgb.join(",");
  const hexValue = `#${hex}`
  
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false)
    }, 3000)
    return ()=>clearTimeout(timeOut);
  }, [alert])
  

  return (
    <article className={`color ${index > 10 && `color-light`}`} style={{ backgroundColor: `rgb(${bgc})` }} onClick={() => {
      setAlert(true);
      navigator.clipboard.writeText(hexValue)
    }}>
      <p className="percentage">{weight}%</p>
      <p className="hexvalue">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
    
  )
}

export default SingleColor
