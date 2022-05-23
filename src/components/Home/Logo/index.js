import './index.scss';
import LogoS from '../../../assets/images/logo-Aa.png';

const Logo = () => {
  return (
    <div className='logo-container' >
      <img  className='solid-logo' src={LogoS} alt='s' />
    </div>
  )
}

export default Logo