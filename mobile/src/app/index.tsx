import { useState } from "react"
import { View, Text, Image} from "react-native"
import { MapPin, Calendar as IconCalendar, Settings2, UserRoundPlus, ArrowRight } from "lucide-react-native"
import { styles } from "@/styles/cores"

import { colors } from "@/styles/colors"

import { Input } from "@/components/input"
import { Button } from "@/components/button"

//para saber qual estado está 
enum StepForm{
    TRIP_DETAILS = 1,
    ADD_EMAIL = 2,
}

export default function Index() {
    const [stepForm, setStepForm] = useState(StepForm.TRIP_DETAILS)
    
    //função para o botão continuar
    function handleNextStepForm(){
        if(stepForm === StepForm.TRIP_DETAILS){
            return setStepForm(StepForm.ADD_EMAIL)
        }
    }

    return (<View className="flex-1 items-center justify-center px-5">
        <Image
            source={require("@/assets/logo.png")} className="h-8"
            resizeMode="contain"
        />
        {/* <Image source={require("@/assets/bg.png")} className="absolute"/> */}

        <Text className="text-zinc-400 font-regular text-center text-lg mt-3">Convide seus amigos e planeje sua{"\n"}próxima viagem</Text>

        <View className="w-full bg-zinc-900 p-4 rounded-xl my-8 border border-zinc-800">
            <Input>
                <MapPin color={colors.zinc[400]} size={20} />
                <Input.Field placeholder="Para onde?" editable={stepForm === StepForm.TRIP_DETAILS}/>
            </Input>

            <Input>
                <IconCalendar color={colors.zinc[400]} size={20} />
                <Input.Field placeholder="Quando?" editable={stepForm === StepForm.TRIP_DETAILS} />
            </Input>

        {stepForm == StepForm.ADD_EMAIL && (       
            <>
                <View className="border-b py-3 border-zinc-800">
                    <Button onPress={()=> setStepForm(StepForm.TRIP_DETAILS)} style={styles.btnCinza}
                    variant="secondary">
                        <Button.Title>Alterar local/data  </Button.Title>
                        <Settings2 color ={colors.zinc[200]} size={20} />
                    </Button>
                </View>
                <Input>
                    <UserRoundPlus color={colors.zinc[400]} size={20} />
                    <Input.Field placeholder="Quem estará na viagem?" />
                </Input>
            </>
         )}
            <Button onPress={handleNextStepForm} style={styles.btnVerde}
                variant="primary">
                    <Button.Title>
                    { stepForm === StepForm.TRIP_DETAILS 
                    ? "Continuar " 
                    :  "Confirmar viagem "
                    }
                    </Button.Title>
                    <ArrowRight color ={colors.lime[950]} size={20} />
                </Button>
        </View>
        <Text className="text-zinc-500 font-regular text-center text-base">Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos{" "} <Text className="text-zinc-300 underline">termos de uso e políticas de privacidade.</Text></Text>
    </View>
    )
}