import React, { Component } from 'react'

 class SendMessageForm extends Component {
   constructor(props) {
     super(props)
     this.state = {
       text: '',
     }
     this.onSubmit = this.onSubmit.bind(this)
     this.onChange = this.onChange.bind(this)
   }

   onSubmit(e) {
     e.preventDefault()
     this.props.onSubmit(this.state.text)
     this.setState({ text: '' })
   }

   onChange(e) {
     this.setState({ text: e.target.value })
     if (this.props.onChange) {
       this.props.onChange()
     }
   }

   render() {
     const styles = {
       container: {
         padding: 3,
         borderTop: '2px #4C758F solid',
         
       },
       form: {
         display: 'flex',
         width: '100%',
         padding: 20,
         rightpadding: 20,
       },
       input: {
         color: 'inherit',
         background: 'none',
         //outline: '#4C758F solid 4px',
         border: 'none',
         flex: 1,
         fontSize: 16,
       }
     }
     return (
       <div style={styles.container}>
           <form onSubmit={this.onSubmit} style={styles.form}>
             <input
               type="text"
               placeholder="Enter a Message..."
               onChange={this.onChange}
               value={this.state.text}
               style={styles.input}
             />
           </form>
       </div>
     )
   }
 }

 export default SendMessageForm