import { GlobalStyle } from "./styles/global";
import Create from "./components/Create/index";
import { Head } from "./components/Header/index";
import { Template } from "./components/Template/index";
import { TodoProvider } from "./components/Context/index";
import { List } from "./components/List/index";

export function App() {
    return (
        <TodoProvider>
            <GlobalStyle />
            <Template>
                <Head />
                <List />
                <Create />
            </Template>
        </TodoProvider>
    );
}
