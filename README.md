# teste-muralis-react
Teste Técnico para a empresa Muralis utilizando a linguagem React JS

O objetivo do desafio era de medir as capacidades técnicas do front-end utilizando a linguagem React JS desenvolvendo uma tela de cadastro e uma outra tela de dashboard.

Então com base nisso, primeiramente, utilizei o Vite para a criação da nossa aplicação, o motivo de eu ter utilizado essa ferramenta foi pela praticidade e velocidade em se criar um projeto, sendo uma das ferramentas mais recomendadas para se utilizar nas soluções web atualmente, além de eu selecionar a opção de typecript, pois tenho a visão que o typescript facilita muito a identificar os erros de tipagem, além de deixar o projeto muito mais escalonável e legivel.

https://vitejs.dev/  
![image](https://user-images.githubusercontent.com/40373628/227832845-4edb85c9-a817-4ceb-a055-ab2e0daffd3b.png)


Depois de criar o projeto, decidi dar uma organizada no meu codigo, primeiramente dividindo os meu arquivos em algumas pastas, separando meus componentes, os meus estilos globais, as minhas interfaces, minhas rotas e minhas telas. 

![image](https://user-images.githubusercontent.com/40373628/227833584-d8b7dc38-8f0b-4c43-8647-30f396c76f07.png)

Eu gosto de separar dessa forma, pois além de ser uma boa prática de programação, ele auxilia tanto quanto o dev que consegue ter uma melhor visualização de onde cada arquivo está localizado, quanto pra aqueles que poderão fazer uma manutenção futura.

Depois disso, eu decidi para as minhas estilizações utilizar o styled-components, o motivo foi além do fato de eu estar mais familiarizado com o CSS-in-JS, eu considero o styled components perfeito para esse tipo de projeto, que eu preciso reutilizar o mesmo estilo varias vezes, ou preciso modificar alguma pequena coisa, então posso usar o theme para isso que facilita muito na hora do desenvolvimento.

https://styled-components.com/
![image](https://user-images.githubusercontent.com/40373628/227834589-292d7a28-7098-4c57-bb30-f924c39c011c.png)

![image](https://user-images.githubusercontent.com/40373628/227834655-13f1df0a-9b7a-4fa9-bb60-4f0c778038be.png)

Por fim, eu decidi separar por exemplo aqui na minha home, o meu codigo em varios pequenos componentes, assim  eu considero que o codigo ficou bem legivel e de facil manutenção, então se eu quiser alterar só o header por exemplo, eu consigo acessar o meu componente e modificar somente ele, sem alterar em nada o restante do meu código.

![image](https://user-images.githubusercontent.com/40373628/227835050-bb220124-eb5e-46a7-a53a-7ff71692b0f7.png)

E em relação ao desafio, o principal problema foi a criação da dashboard, eu pensei em algumas bibliotecas que eu poderia estar utilizando, mas visando o layout que me foi passado para usar como referência, decidi utilizar o apex charts, ele contém uma documentação bem elaborada e de facil uso, então ele conseguiu sanar totalmente os meus problemas e foi suficiente para conseguir estar realizando o desafio.

https://apexcharts.com/
![image](https://user-images.githubusercontent.com/40373628/227835478-0c3c4cf2-8398-4d99-ac16-058507e92cc0.png)
![image](https://user-images.githubusercontent.com/40373628/227835555-e47a71c4-469c-4701-bb0e-01ccf0153c6f.png)

O resultado final: 
![image](https://user-images.githubusercontent.com/40373628/228109655-c6079bf7-f9b6-4d3b-813c-4e27d1c1af0a.png)




