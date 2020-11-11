import {useEffect} from 'react';
import {VetPaw} from '../../../assets/icons'

const Success = (props) => {
  useEffect(()=>{
    props.SetBarState({
      footer: false,
      navbar: false
    })
  },[])
  return(
    <div className="vet-paws">
      {[0,1,2,3,4,5,6].map((item)=> 
        item%2 === 0 
          ? <VetPaw className="vet-paw" size={60} style={{display:"block",transform:`rotateZ(${Math.floor(Math.random() * 35)+20}deg)`,position:"relative",left:"60px"}}/> 
          : <VetPaw className="vet-paw" size={60} style={{display:"block",transform:`rotateZ(-${Math.floor(Math.random() * 35)+20}deg)`}}/>
      )}
    </div>
  )
}

export default Success