import ReactModal from 'react-modal';
import React, {FC} from 'react';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const Popup: FC<PopupProps> = ({isOpen, onClose, children}) => {

    return (
        <ReactModal 
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel='Popup example'
            ariaHideApp={false}
            style={{
                overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                },
                content: {
                    width: '40%',
                    height: '40%',
                    margin: 'auto',
                    backgroundColor: 'purple',
                    border: '1px solid black',
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
            >
                {children}
            <button onClick={onClose}>Let's Go!</button>
        </ReactModal>
    );
}

export default Popup;
