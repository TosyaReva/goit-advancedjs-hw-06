/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface ComponentProps {
  [key: string]: any; // Динамічний набір властивостей
}

class Component<T extends ComponentProps> {
  constructor (public props:T) {

  }
}

interface PageProps {
  title: string;
}

class Page extends Component<PageProps> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};