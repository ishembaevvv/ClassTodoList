class TodoList {
    constructor(num) {
        this.num = num;
        this.titl = `title-${num}`;
        this.container = `container ${num}`;
        this.textIn = `inputText-${num}`;
        this.dateIn = `inputDate-${num}`;
        this.btnAdd = `BtnAdd-${num}`;
        this.textList = `textList-${num}`
    }
    Layout = () => {
        // title
        let titl = document.createElement('h1');
        titl.innerHTML = "TODOLIST";
        titl.id = this.titl;

        // container
        let container = document.createElement('div');
        container.className = this.container;

        // Inputs
        let divInputs = document.createElement('div');
        divInputs.className = 'divIn';

        let textIn = document.createElement('input');
        textIn.id = this.textIn;
        textIn.setAttribute('type', 'text');
        textIn.setAttribute('placeholder', "Gonna do");

        let dateIn = document.createElement('input'); 
        dateIn.id = this.dateIn;
        dateIn.setAttribute('type', 'date');

        let BtnAdd = document.createElement('button');
        BtnAdd.id = this.btnAdd;
        BtnAdd.innerHTML = "ADD";

        let list = document.createElement('div');
        list.id = this.textList;

        BtnAdd.addEventListener('click', this.onClick);

        // appends
        document.body.append(titl);
        document.body.append(container);

        // divInputs
        container.append(divInputs);
        divInputs.append(textIn);
        divInputs.append(dateIn);
        divInputs.append(BtnAdd);
        container.append(list);
    }
    onClick = () => {
        let textIn = document.getElementById(this.textIn).value;
        let dateIn = document.getElementById(this.dateIn).value;
        let list = document.getElementById(this.textList);

        list.innerHTML += textIn + " " + dateIn + '<br>';
    }
}

let todo_list1 = new TodoList(1);
todo_list1.Layout();