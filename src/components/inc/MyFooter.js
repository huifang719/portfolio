  import Breadcrumb from 'react-bootstrap/Breadcrumb';
  import { FaGithubSquare, FaLinkedin, FaHome, FaEnvelope } from 'react-icons/fa'
  import { IconContext } from 'react-icons'
  
  function MyFooter (){
  return(
    <IconContext.Provider value={{size:"2rem", color:"lightgrey"}}>
    <Breadcrumb>
        <Breadcrumb.Item href="../pages/home">
          <FaHome />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://github.com/huifang719">
          <FaGithubSquare />
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.linkedin.com/in/liviagu/">
          <FaLinkedin />
        </Breadcrumb.Item>
        <Breadcrumb.Item href='../pages/contact'><FaEnvelope /></Breadcrumb.Item>
      </Breadcrumb>
    </IconContext.Provider>
  );
}

export default MyFooter