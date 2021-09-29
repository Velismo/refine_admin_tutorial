import { Refine, Resource } from "@pankod/refine";
import dataProvider from "@pankod/refine-simple-rest";

import { authProvider } from "authProvider";

import { PostList } from "./pages/list";
import { PostShow } from "./pages/show";
import { PostEdit } from "./pages/edit";
import { PostCreate } from "./pages/create";

import "@pankod/refine/dist/styles.min.css";
 
const App: React.FC = () => {
    return (
        <Refine
          authProvider={authProvider}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        >
          <Resource 
            name="posts" 
            list={PostList}
            show={PostShow}
            edit={PostEdit}
            create={PostCreate}
            canDelete
          />
        </Refine>
    );
};
 
export default App;