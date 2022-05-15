import React from 'react'
import { Button,Modal } from 'react-bootstrap'

interface ModalState {
    showHide: boolean;
}

interface ModalProps {
    title: string;
    prompt_question: string;
    function: any;
}

class BootstrapModal extends React.Component{
    state: Readonly<ModalState>;
    props: Readonly<ModalProps>;

    constructor(props: ModalProps){
        super(props);
        this.props = props;
        this.state = {
            showHide : false
        }
    }

    handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

    cancelRequest() {
        this.setState({ showHide: !this.state.showHide })
        this.props.function();
    }

    render(){
        return(
            <div>
                <Button variant="btn btn-primary" id="modal_button" onClick={() => this.handleModalShowHide()}>
                    {this.props.title}
                </Button>

                <Modal show={this.state.showHide}>
                    <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                    <Modal.Title><span id="title">{this.props.title}</span></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.prompt_question}</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => this.cancelRequest()}>
                        Confirm
                    </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
    
}

export default BootstrapModal;