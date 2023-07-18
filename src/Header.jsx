import React from 'react'
import photo from './assets/sliceing.png'
import './header.css'

export const Header = () => {
  return (
    <>
    <div className="container">
<div className="itemLeft">

    <img src={photo} alt="" className='slice-img'/>

</div>
<div className="itemRight">
    <h4>Lorem, ipsum.</h4>
    <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime!</h5>

    <h4>Lorem, ipsum.</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime!</p>

    <h4>Lorem, ipsum.</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime!</p>

    <h4>Lorem, ipsum.</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime!</p>

    <h4>Lorem, ipsum.</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime!</p>

    <h4>Lorem, ipsum.</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, maxime!</p>

</div>
</div>



    
    </>
  )
}
export default Header