import { useState } from 'react';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View, TextInput, Switch, TouchableOpacity } from 'react-native';

export default function App() {
  const [nome, setNome] = useState(null);
  const [limite, setLimite] = useState(0);
  const [idade, setIdade] = useState(null);
  const [estudante, setEstudante] = useState(0);
  const [sexo, setSexo] = useState(0);
  const [sexos, setSexos] = useState([{ key: 1, name: 'Masculino' }, { key: 2, name: 'Feminino' }]);
  let itens = sexos.map((value, key) => <Picker.Item key={key} value={key} label={value.name} />)

  let check = (value, name) => {
    if (!value || value == '' || value == 0) {
      alert(`Preencha os valores de ${name}`);
      return false
    }

    return true;
  }

  let exibir = () => {
    if(!check(nome, 'Nome')) return false;
    if(!check(idade, 'Idade')) return false;
    if(!check(limite.toFixed(0), 'Limite  de Crédito')) return false;

    alert(`Nome: ${nome} \n Idade: ${idade} \n Limite Pedido: ${limite.toFixed(0)} \n É estudante? ${estudante ? 'Sim' : 'Não'} \n Sexo: ${sexos[sexo].name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro Bancário</Text>

      <TextInput style={styles.input} placeholder='Insira seu nome' onChangeText={setNome} value={nome} />
      <TextInput style={styles.input} placeholder='Idade' onChangeText={setIdade} value={idade} />

      <Picker style={styles.select} selectedValue={sexo} onValueChange={(itemValue, itemIndex) => setSexo(itemValue)} >
        {itens}
      </Picker>

      <View style={styles.limite}>
        <Text>Limite Pedido: {limite.toFixed(0)}</Text>
        <Slider style={styles.slider} minimumValue={0} maximumValue={5000} onValueChange={(value) => setLimite(value)} value={limite} />
      </View>

      <View>
        <Text>Estudante</Text>
        <Switch style={styles.switch} value={estudante} onValueChange={(value) => setEstudante(value)} />
      </View>

      <TouchableOpacity onPress={exibir}>
        <Text style={styles.btn}> Cadastrar </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 60
  },
  title: {
    fontSize: 30,
    marginBottom: 50
  },
  limite: {
    marginTop: 20,
    alignItems: 'center'
  },
  switch: {
    marginBottom: 20
  },

  input: {
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    width: 250
  },
  select: {
    padding: 10,
    marginTop: 10,
    width: 250,
    borderWidth: 1,
  },
  radio: {
    marginTop: 10,
    height: 30,
    width: 100
  },
  slider: {
    marginTop: 10,
    height: 30,
    width: 250
  },
  btn: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'darkblue',
    backgroundColor: 'darkblue',
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold'
  }
});
