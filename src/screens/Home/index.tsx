import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { Participant } from "../../components/Participant";

export function Home() {
  const participants = [
    'Bruno',
    'Diego',
    'Mayk',
    'Robson',
    'Vitor',
    'Guilherme',
    'Joice',
    "Helena",
    "Fernanda",
    "Larissa",
  ]

  function handleParticipantAdd() {
    if (participants.includes('Bruno')) {
      return Alert.alert('Participante já existe', 'Esse participante já foi adicionado a lista de presença.')
    }
    
    console.log('Adicionar participante')
  }

  function handleParticipantRemove(name: string) {
    console.log('Remover participante')
  }

  return (
    <View style={styles.container} >
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form} >
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
      
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )} 
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />

    </View>
  )
}