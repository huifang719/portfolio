import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaGithubSquare, FaLinkedin, FaHome, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Container } from 'react-bootstrap';
  
  function MyFooter (){
  return(
    <Container fluid className='d-flex justify-content-center mt-2 mb-2'>
      <IconContext.Provider value={{size:"2rem", color:"lightgrey"}}>
        <Breadcrumb>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Home page
              </Tooltip>
            }
          >
            <Breadcrumb.Item href="/">
              <FaHome />
            </Breadcrumb.Item>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Github
              </Tooltip>
            }
          >
            <Breadcrumb.Item href="https://github.com/huifang719">
              <FaGithubSquare />
            </Breadcrumb.Item>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                LinkedIn
              </Tooltip>
            }
            >
            <Breadcrumb.Item href="https://www.linkedin.com/in/liviagu/">
              <FaLinkedin />
            </Breadcrumb.Item>
          </OverlayTrigger> 
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                Contact me
              </Tooltip>
            }
            >
            <Breadcrumb.Item href='../contact'>
              <FaEnvelope />
            </Breadcrumb.Item>
          </OverlayTrigger> 
          <OverlayTrigger
            placement="top"
            overlay={
              <Tooltip>
                View Resume
              </Tooltip>
            }
            >
            <Breadcrumb.Item href='https://www.canva.com/design/DAFOgaQhP7Y/YKes_EC0Eilc5Sal0rJo1A/view?utm_content=DAFOgaQhP7Y&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink' download>
              <FaFileAlt />
            </Breadcrumb.Item>
          </OverlayTrigger>   
        </Breadcrumb>
      </IconContext.Provider>
    </Container>
  );
}

export default MyFooter