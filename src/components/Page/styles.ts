import styled from 'styled-components'
import pexels1 from '../../assets/pexels1.jpeg'

export const Container = styled.div`
 @media screen and (max-width: 1200px){
 .colored:nth-child(1) {
  height: 100vh;
   background-image: url(${pexels1}); 
   background-size:cover
   background-position: center;
   background-attachment: fixed;
   min-width: 300px
  }      
}
    

}
  .colored:nth-child(2) {
    background: #dfffd9;
  }
  .colored:nth-child(3) {
    background: #cdfeca;
  }
  .colored:nth-child(4) {
    background: #bbfebb;
  }
  .colored:nth-child(5) {
    background: #a9fdac;
  }
  .colored:nth-child(6) {
    background: #90f29c;
  }
  .colored:nth-child(7) {
    background: #77e68c;
  }
`

export const Spacer = styled.div`
  height: 15vh;
  background: #77e68c;
`
