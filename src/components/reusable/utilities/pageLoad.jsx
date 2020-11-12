import {useEffect} from 'react';
import {VetPaw} from '../../../assets/icons'

const PageLoad = (props) => {
  useEffect(()=>{
    props.SetBarState && props.SetBarState({
      footer: false,
      navbar: false
    })
  },[])

  return(
    <div className={`vet-paws-${props?.data?.length}`}>
      {props?.data?.split('').reverse().map((item,idx)=> 
        idx%2 === 0 
          ? <VetPaw className="vet-paw" size={60} style={{display:"block",transform:`rotateZ(${Math.floor(Math.random() * 35)+20}deg)`,position:"relative",left:"60px"}}>{item}</VetPaw> 
          : <VetPaw className="vet-paw" size={60} style={{display:"block",transform:`rotateZ(-${Math.floor(Math.random() * 35)+20}deg)`}}>{item}</VetPaw>
      )}
    </div>
  )
}

export default PageLoad