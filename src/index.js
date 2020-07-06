import React, { useState } from 'react'
import styles from './styles.module.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Modal, ModalBody, Row, Col } from 'reactstrap'
import Dock from 'react-dock'
import { FaRegWindowMinimize, FaWindowMaximize } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { FiMaximize2 } from 'react-icons/fi'
import { BsBoxArrowInDown } from 'react-icons/bs'
import { isMobile } from 'react-device-detect'

const DockModal = (props) => {
  const {
    initalType,
    headerName,
    bgcolor,
    fgcolor,
    fweight,
    children,
    params
  } = props
  const [type, setType] = useState(initalType)
  const [isVisible, toggleVisibility] = useState(true)

  // Header Style
  const headerStyle = {
    backgroundColor: bgcolor || 'black',
    color: fgcolor || 'white',
    fontWeight: fweight || 'bold'
  }

  let desktopDockWidth = '40%'
  let desktopDockHeight = '70%'
  let minimDockWidth = '25%'
  let minimDockHeight = '10%'
  let defaultModalWidth = '70%'
  let defaultModalHeight = '650px'

  if (params) {
    const {
      dockWidth,
      dockHeight,
      minimWidth,
      minimHeight,
      modalWidth,
      modalHeight
    } = params
    desktopDockWidth = dockWidth || desktopDockWidth
    desktopDockHeight = dockHeight || desktopDockHeight
    minimDockWidth = minimWidth || minimDockWidth
    minimDockHeight = minimHeight || minimDockHeight
    defaultModalWidth = modalWidth || defaultModalWidth
    defaultModalHeight = modalHeight || defaultModalHeight
  }

  const defaultModalStyles = {
    minWidth: defaultModalWidth,
    margin: 'auto',
    position: 'absolute',
    float: 'left',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)'
  }

  // Normal Dock Style
  const dockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: isMobile ? '10px' : 'unset',
    top: 'unset',
    width: isMobile ? '90%' : desktopDockWidth,
    height: isMobile ? '100%' : desktopDockHeight,
    right: '10px',
    bottom: '5px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: isMobile ? 'auto' : 'unset'
  }

  // Minimized Dock Style
  const minDockStyles = {
    position: 'fixed',
    zIndex: 1,
    boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
    background: 'white',
    left: 'unset',
    top: 'unset',
    width: minimDockWidth,
    height: minimDockHeight,
    right: '10px',
    bottom: '5px',
    borderRadius: '15px 15px 0px 0px',
    overflow: 'hidden',
    margin: isMobile ? 'auto' : 'unset'
  }

  if (type === 'dock') {
    return (
      <Dock
        position='bottom'
        isVisible={isVisible}
        fluid
        size={0.6}
        dockStyle={dockStyles}
      >
        <Row style={headerStyle} className='m-0'>
          <Col xs='6' sm='6' md='8' lg='9' xl='9'>
            {headerName}
          </Col>
          <Col
            xs='6'
            sm='6'
            md='4'
            lg='3'
            xl='3'
            className='float-right text-right'
          >
            <FaRegWindowMinimize
              className={styles.dmPointer}
              onClick={(e) => setType('minim')}
            />
            <FaWindowMaximize
              className={styles.dmPointer}
              onClick={(e) => setType('modal')}
            />
            <MdClose
              className={styles.dmPointer}
              onClick={(e) => toggleVisibility(false)}
            />
          </Col>
        </Row>
        <div className='m-1'>{children}</div>
      </Dock>
    )
  } else if (type === 'minim') {
    return (
      <Dock
        position='bottom'
        isVisible={isVisible}
        fluid
        size={0.05}
        dockStyle={minDockStyles}
      >
        <Row style={headerStyle} className={'m-0 ' + styles.dmFill}>
          <Col xs='4' sm='5' md='6' lg='7' xl='8'>
            {headerName}
          </Col>
          <Col
            xs='8'
            sm='7'
            md='6'
            lg='5'
            xl='4'
            className='float-right text-right'
          >
            <FiMaximize2
              className={styles.dmPointer}
              onClick={(e) => setType('dock')}
            />
            <FaWindowMaximize
              className={styles.dmPointer}
              onClick={(e) => setType('modal')}
            />
            <MdClose
              className={styles.dmPointer}
              onClick={(e) => toggleVisibility(false)}
            />
          </Col>
        </Row>
        <div hidden>{children}</div>
      </Dock>
    )
  } else if (type === 'modal') {
    return (
      <Modal isOpen={isVisible} style={defaultModalStyles}>
        <ModalBody className='p-0' style={{ minHeight: defaultModalHeight }}>
          <Row style={headerStyle} className='m-0'>
            <Col xs='9' sm='9' md='10' lg='10' xl='10'>
              {headerName}
            </Col>
            <Col
              xs='3'
              sm='3'
              md='2'
              lg='2'
              xl='2'
              className='float-right text-right'
            >
              <FaRegWindowMinimize
                className={styles.dmPointer}
                onClick={(e) => setType('minim')}
              />
              <BsBoxArrowInDown
                className={styles.dmPointer}
                onClick={(e) => setType('dock')}
              />
              <MdClose
                className={styles.dmPointer}
                onClick={(e) => toggleVisibility(false)}
              />
            </Col>
          </Row>
          <div className='m-1'>{children}</div>
        </ModalBody>
      </Modal>
    )
  } else {
    return null
  }
}

DockModal.defaultProps = {
  initalType: 'dock',
  headerName: 'New DockModal',
  bgcolor: 'black',
  fgcolor: 'white',
  fweight: 'bold',
  params: {
    dockWidth: '40%',
    dockHeight: ' 70%',
    minimWidth: '25%',
    minimHeight: '10%',
    modalWidth: '70%',
    modalHeight: '650px'
  }
}

export default DockModal
