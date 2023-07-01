import React from "react";
import { questsEvents } from "../events";

interface FormFields {
    name: HTMLInputElement,
    email: HTMLInputElement,
    question: HTMLTextAreaElement,
}

export const Form: React.FC = () => {

    const sendDataChild: React.FormEventHandler<HTMLFormElement & FormFields> = (event) => {
        
        event.preventDefault();

        let form = event.currentTarget;

        let { name, email, question } = form;

        questsEvents.emit('sendData', {
            name: name.value,
            email: email.value,
            question: question.value,
        })
    }

    return (
        <form onSubmit={sendDataChild}>
            <input type="text" name='name'/><br/>
            <input type="text" name='email'/><br/>
            <textarea name="question"></textarea><br/>
            <button type="submit">Send</button><br/>
        </form>
    )
}