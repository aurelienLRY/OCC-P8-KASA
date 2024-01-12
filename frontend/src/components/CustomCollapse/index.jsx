// File: CollapseComponent.jsx
import React, { useState , useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types'
import { UpOutlined } from '@ant-design/icons';
import './styles.scss'
export default function CustomCollapse({ title, children }) {
   
    const [isOpen, setIsOpen] = useState(false);
    
    
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const collapseRef = useRef(null);

    return (
        <div className="collapse-container">
            <div className="collapse-header" onClick={handleToggle}>
                <h3>{title}</h3>
                <UpOutlined className={`collapse-arrow ${isOpen ? 'open' : ''}`} />
            </div>

            <div className="collapse-body">
                <CSSTransition
                    in={isOpen}
                    nodeRef={collapseRef}
                    timeout={200}
                    classNames="collapse-content"           
                    unmountOnExit
                >
                    <div className="collapse-content" ref={collapseRef}>
                        {children}
                    </div>
                </CSSTransition>
            </div>

        </div >
    )
}


CustomCollapse.propTypes = {
    title: PropTypes.string.isRequired
}
CustomCollapse.defaultProps = {
    title :'Oups, titre manquant'
}