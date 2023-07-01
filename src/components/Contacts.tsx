import React, { useEffect } from "react";
import { ContactSendindDataInteface } from "../inferfaces/interfaces";
import { questsEvents } from "../events";
import { Form } from "./Form";

export const Contacts: React.FC = () => {

    useEffect(() => {
        questsEvents.addListener('sendData', sendDataParent);
        return () => {
            questsEvents.removeListener('sendData', sendDataParent);
        }
    }, []);

    const sendDataParent = (data: ContactSendindDataInteface): void => {
        console.log(data);
    }

    return (
        <div>
            <Form/>
        </div>
    )
}