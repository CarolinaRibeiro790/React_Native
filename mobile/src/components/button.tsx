import { Text, TextProps, TouchableOpacity, TouchableOpacityProps} from "react-native";
import clsx from "clsx";

//Variantes(variações): usar o mesmo componente para criar variações visuais dele
type Variants = "primary" | "secondary"

type ButtonProps = TouchableOpacityProps & {
    variant ?: Variants
    isLoading?: boolean //bloquear botão para disparar varias requisições
}

function Button({
    variant = "primary", 
    children, 
    isLoading, 
    ...rest
}: ButtonProps){
    return (
    <TouchableOpacity 
    className={clsx("w-full h-11 flex-row items-center justify-center rounded-lg gap-2",
        {
            "bg-lime-300": variant === "primary" ,
            "bg-zinc-800" : variant === "secondary",
        }
    ) }{...rest}>
        {children}
    </TouchableOpacity>
    )
}

function Title({children}: TextProps){
    return <Text>{children}</Text>
}

Button.Title = Title

export { Button }