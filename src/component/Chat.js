import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@material-ui/core";
import {useCollectionData} from "react-firebase-hooks/firestore";
import firebase from "firebase";
import Loader from "./Loader";

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )
if(loading) {
    return <Loader/>
}

    const sendMassge = async () =>{
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
        setValue( ' ')
    }
    return (
        <Container>
            <Grid container
                  justify={'center'}>
            <div style={{width: '80%',
                height: '70vh',
                border: '1px solid gray',
                overflowY: 'auto',
                margin: 10
            }}>
                {messages.map(message =>
                    <div style={{
                        margin: 10,
                        borderRadius: 10,
                        border: user.uid === message.uid ? '1px solid green' : '1px solid red',
                        marginLeft: user.uid === message.uid ? 'auto' : '10px',
                        width: 'fit-content',
                        padding: 5,
                    }}>
                        <Grid container>
                            <Avatar src={message.photoURL}/>
                            <div style={{margin: 5}}>{message.displayName}</div>
                        </Grid>
                        <div>{message.text}</div>
                    </div>
                )}
            </div>

            <Grid container
                  direction={'column'}
                  alignItems={"flex-end"}
                  style={{width: '80%'}}
            >
                <TextField
                    fullWidth
                    rowsMax={2}
                    variant={'outlined'}
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <Button onClick={sendMassge} variant={'outlined'} >Отправить</Button>

            </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;