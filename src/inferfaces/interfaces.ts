export interface ProgressInreface {
    color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit" | undefined
}

export interface LinkInterface {
    type: string,
    href: string,
    text: string
}

export interface ContactSendindDataInteface {
    name: string,
    email: string,
    question: string
}