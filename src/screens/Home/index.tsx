import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
    const participants = ['Bruno', 'Joice', 'Theodora', 'João', 'Maria', 'José', 'Antonia', 'Raquel'];

    function handleParticipantAdd() {
        console.log('clicou!');        
    }

    function handleParticipantRemove(name: string) {
        console.log(`clicou! ${name}`);        
    }

  return(
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do Evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de Novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput 
            style={styles.input} 
            placeholder="Nome do participante"
            placeholderTextColor={'#6b6b6b'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>

        <FlatList 
            data={participants}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Participant 
                        key={item}
                        name={item}
                        onRemove={() => handleParticipantRemove('Bruno')}
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