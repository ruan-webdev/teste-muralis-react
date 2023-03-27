import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CityOptions, FormData } from '../../interfaces/EntryRegistration';
import {Button, ButtonGroup, Container, Form, Input, Label, Select} from './styles'


const Registration = () =>  {

  const notify = () => toast.success('Cadastro realizado com sucesso!', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    course: "",
    state: "",
    city: "",
    cities: [],
  });


  const cityOptions: CityOptions = {
    "São Paulo": ["Mogi das Cruzes", "Suzano", "Póa e Guararema"],
    "Rio de Janeiro": ["Angra dos Reis", "Niterói", "Itaboraí"],
    "Minas Gerais": ["Belo Horizonte", "Monte Azul", "Muzambinho"],
  };

  function getCitiesByState(state: string) {
    return cityOptions[state] || [];
  }

  function handleStateChange(event: { target: { value: any; }; }) {
    const state = event.target.value;
    const cities = getCitiesByState(state);
    setFormData({ ...formData, state, city: '', cities });
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };


  return (
    <Container>
      <Form onSubmit={handleSubmit}>
      <legend>Cadastro de ingressantes</legend>
      <Label htmlFor="name">Nome</Label>
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <Label htmlFor="course">Curso</Label>
          <Select name="course" value={formData.course || ''} onChange={handleSelectChange}>
          <option value="" disabled hidden></option>
          <option value="Matemática">Matemática</option>
          <option value="Geografia">Geografia</option>
          <option value="Inglês">Inglês</option>
        </Select>
        <Label htmlFor="state">Estado</Label>
        <Select name="state" value={formData.state || ''} onChange={handleStateChange}>
          <option value="" disabled hidden></option>
          <option value="São Paulo">São Paulo</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="Minas Gerais">Minas Gerais</option>
        </Select>
        <Label htmlFor="city">Cidades</Label>
        <Select name="city" value={formData.city} onChange={handleSelectChange}>
        <option value="" disabled hidden></option>
              {formData.cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
        </Select>
        <ButtonGroup>
          <Button color='yellow' type="button">Voltar</Button>
          <Button color='green' onClick={notify} type="submit" >Gravar</Button>
	      </ButtonGroup>
      </Form>
      <ToastContainer/>
    </Container>
  )
}

export default Registration
