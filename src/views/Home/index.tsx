import homeRouterList from "../../router/home";
import { getRouterView } from "../../utils/router";
const Home: React.FC = (): JSX.Element => getRouterView(homeRouterList);
export default Home;
