
import { Loader } from '@react-three/drei'




const styles = {
  container: {
    position: 'absolute',
    top: 0,
    right:0,   
    width: '100%',
    height: '100vh',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 300ms ease',
    zIndex: 1000,
  },
  inner: {
    right:50,
    borderRadius:'100px',
    width: 100,
    height: 10,
    background: 'white',
    textAlign: 'center',
  },
  bar: {
    borderRadius:'150px',
    position:'relative',
    right:50,
    height: 20,
    width: '200%',
    backgroundImage: 'linear-gradient(to right, rgb(73, 160, 157), rgb(95, 44, 130))',
    transition: 'transform 200ms',
    transformOrigin: 'left center',
  },
  data: {
    display: 'inline-block',
    position: 'relative',
    textAlign:'center',  
    fontVariantNumeric: 'tabular-nums',
    marginTop: '2em',
    color: '#49a09d',
    fontSize: '2.5vh',
    fontFamily: 'EunomiaRegular',
    whiteSpace: 'nowrap',
  },
}


function Loading() {

return ( <Loader
containerStyles={styles.container} // Flex layout styles
innerStyles={styles.inner} // Inner container styles
barStyles={styles.bar} // Loading-bar styles
dataStyles={styles.data} // Text styles
dataInterpolation={(p) => `LOADING... ${p.toFixed(2)}%`} // Text
initialState={(active) => active} // Initial black out state
/>

)}

export {Loading}