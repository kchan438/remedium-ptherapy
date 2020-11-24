import React, {Component} from 'react';
import MessageList from '../components/HomeMessageList';
import SendMessageForm from '../components/HomeMessageEntry';



class HomeChatHolder extends Component{
    constructor(props){
        super(props)
        this.state = {
            currentUser: {Tester: "tester"},
            messages: []
        }
        this.sendMessage = this.onMessage.bind(this)
    }

 onMessage(message){
    alert("The form was submitted");
    this.state.currentUser.onMessage({
        message
    })
 }

 render() {
    const styles = {
        chatcontainer: {
            height: '92vh',
            display: 'flex',
            flexDirection: 'column',
            },
        chatbox: {
            display: 'flex',
            flex: 1,
            },
        onlinelistcontainer: {
            width: '300px',
            flex: 'none',
            padding: 20,
            backgroundColor: '#2c303b',
            color: 'white',
            },
        chatlistcontainer: {
            padding: 20,
            paddingright: 20,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            },
        messageentry: {
            display: "flex",
            width: "95%", 
            background:"#FFFFFF", 
            border:"0.5", 
            padding:"0.5rem",
            position: 'absolute',
            bottom: '1.8%',
        }
    }

    return(
        <div style={styles.chatcontainer}>
            <div style={styles.chatbox}>
                <aside style={styles.onlinelistcontainer}>
                    <p>Online Placeholder - Will List Available Online/Offline Chats Here</p>
                </aside>
                <section style={styles.chatlistcontainer}>
                    <p>Chat Placeholder - Will Display Conversation Partner's Name/Data Here, and Messages below here</p>
                    <MessageList messages={this.state.messages}/>
                    
                    <SendMessageForm onSubmit={this.onMessage}/>
                </section>
            </div>
        </div>
    )
}
}

export default HomeChatHolder;