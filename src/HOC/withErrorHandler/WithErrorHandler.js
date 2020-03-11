import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import instance from '../../services/HttpServices'


const WithErrorHandler = (WrappedComponent, instance) => {
    return class extends React.Component {
        constructor(props){
            super(props) 
            this.state = {
            error: null,
            init: () => {
               instance.interceptors.response.use(res => res, error => {
                this.setState({error: error.message})
            })

           } 
            
        }
        }
       
    
      
        

        confirmErrorHandler = () => {
            this.setState({error: null})

        }

        render () {
            return <>

        <WrappedComponent {...this.props} />
        <Modal show = {this.state.error} clicked = {this.confirmErrorHandler}>
          {this.state.error}
        </Modal>
    
        </>
        }
    }

}

export default WithErrorHandler